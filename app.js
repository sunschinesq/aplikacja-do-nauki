(function () {
  "use strict";

  const SUBJECTS = window.SUBJECTS || [];
  const app = document.getElementById("app");
  const STORE_KEY = "nauka-drugi-rok-v1";
  const DAY = 24 * 60 * 60 * 1000;
  // Leitner: po ilu dniach wraca fiszka z danego pudełka
  const INTERVALS = [0, 0, 1, 3, 7, 14];
  const MASTERED_BOX = 3;
  const SESSION_ALL_CARDS = 20;
  const SESSION_ALL_QUIZ = 15;
  const FIXED_ORDER = /\bodpowied(zi|ź) [A-D]\b|wszystkie|żadna z|powyższ/i;

  // ---------- pamięć postępów (localStorage) ----------
  const STORE_DEFAULTS = () => ({
    cards: {}, quiz: {}, exams: {}, lastBackup: null, pets: 0,
    days: {}, goal: 20, bestStreak: 0, marks: {}, open: {}, tries: {},
    cats: {}, birthday: null, focus: { sessions: 0, minutes: 0, days: {} }, games: { match: 0, best: {} },
    statex: { n: 0, ok: 0 }, planDone: {}
  });
  function loadStore() {
    const store = STORE_DEFAULTS();
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      Object.keys(store).forEach((k) => { if (data[k] !== undefined && data[k] !== null) store[k] = data[k]; });
    } catch (e) {
      /* uszkodzone dane – zaczynamy od zera */
    }
    return store;
  }
  let store = loadStore();
  function saveStore() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    } catch (e) {
      /* tryb prywatny – postęp tylko w tej sesji */
    }
  }

  // ---------- pomocnicze ----------
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function hash(s) {
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[\s(])\*(?!\s)(.+?)\*(?=[\s).,:;!?]|$)/g, "$1<em>$2</em>");
  }
  function plural(n, one, few, many) {
    if (n === 1) return one;
    const d = n % 10, t = n % 100;
    return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many;
  }

  // Minimalny markdown: ## nagłówki, listy (2 poziomy), tabele |, cytaty >, akapity
  // bm = przedrostek klucza zakładki ("przedmiot/temat/"); wtedy przy nagłówkach ## jest gwiazdka
  function md(text, bm) {
    const lines = text.replace(/^\n+|\s+$/g, "").split("\n");
    let html = "";
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (line.startsWith("### ")) { html += `<h4>${inline(line.slice(4))}</h4>`; i++; continue; }
      if (line.startsWith("## ")) {
        const title = line.slice(3).trim();
        if (bm) {
          const h = "h-" + hash(title);
          const on = !!store.marks[bm + h];
          html += `<h3 class="sec-h" id="${h}"><span>${inline(title)}</span><button class="bm-btn${on ? " on" : ""}" data-action="bookmark" data-key="${bm + h}" data-title="${esc(title)}" aria-label="${on ? "Usuń zakładkę" : "Dodaj zakładkę"}">${on ? "★" : "☆"}</button></h3>`;
        } else html += `<h3>${inline(title)}</h3>`;
        i++;
        continue;
      }
      if (line.startsWith("> ")) {
        html += `<div class="callout">${inline(line.slice(2))}</div>`;
        i++;
        continue;
      }
      if (line.trim().startsWith("|")) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          const cells = lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
          if (!cells.every((c) => /^-+$/.test(c))) rows.push(cells);
          i++;
        }
        const [head, ...body] = rows;
        html += '<div class="table-wrap"><table><thead><tr>' +
          head.map((c) => `<th>${inline(c)}</th>`).join("") + "</tr></thead><tbody>" +
          body.map((r) => "<tr>" + r.map((c) => `<td>${inline(c)}</td>`).join("") + "</tr>").join("") +
          "</tbody></table></div>";
        continue;
      }
      if (/^\s*- /.test(line)) {
        html += "<ul>";
        let liOpen = false, subOpen = false;
        while (i < lines.length && /^\s*- /.test(lines[i])) {
          const content = inline(lines[i].replace(/^\s*- /, ""));
          if (/^\s{2,}- /.test(lines[i])) {
            if (!liOpen) { html += "<li>"; liOpen = true; }
            if (!subOpen) { html += "<ul>"; subOpen = true; }
            html += `<li>${content}</li>`;
          } else {
            if (subOpen) { html += "</ul>"; subOpen = false; }
            if (liOpen) html += "</li>";
            html += `<li>${content}`;
            liOpen = true;
          }
          i++;
        }
        if (subOpen) html += "</ul>";
        if (liOpen) html += "</li>";
        html += "</ul>";
        continue;
      }
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{2,3} |> |\s*- |\s*\|)/.test(lines[i])) {
        para.push(lines[i]);
        i++;
      }
      html += `<p>${inline(para.join(" "))}</p>`;
    }
    return html;
  }

  // ---------- dane ----------
  function getSubject(id) {
    return SUBJECTS.find((s) => s.id === id);
  }
  function topicCards(subject, topic) {
    return (topic.flashcards || []).map(([q, a]) => ({
      key: subject.id + ":" + hash(q),
      q, a, topic: topic.title
    }));
  }
  function subjectCards(subject, topicId) {
    const topics = topicId ? subject.topics.filter((t) => t.id === topicId) : subject.topics;
    return topics.flatMap((t) => topicCards(subject, t));
  }
  function subjectQuiz(subject, topicId) {
    const topics = topicId ? subject.topics.filter((t) => t.id === topicId) : subject.topics;
    return topics.flatMap((t) => (t.quiz || []).map((q) => Object.assign({ topic: t.title }, q)));
  }
  function mastery(cards) {
    if (!cards.length) return 0;
    const ok = cards.filter((c) => (store.cards[c.key] || {}).box >= MASTERED_BOX).length;
    return Math.round((ok / cards.length) * 100);
  }
  function dueCount(cards) {
    const now = Date.now();
    return cards.filter((c) => {
      const s = store.cards[c.key];
      return s && s.due <= now && s.box < 5;
    }).length;
  }
  function hasContent(subject) {
    return subject.topics.some((t) => t.notes || (t.flashcards || []).length || (t.quiz || []).length);
  }
  function quizKey(subject, topicId) {
    return subject.id + "/" + (topicId || "all");
  }

  // ---------- daty egzaminów ----------
  // data zapisana jako "RRRR-MM-DD"; liczymy pełne dni kalendarzowe w czasie lokalnym
  function daysUntil(isoDate) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const today = new Date();
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.round((new Date(y, m - 1, d) - t0) / DAY);
  }
  function countdownText(days) {
    if (days < 0) return "egzamin już był";
    if (days === 0) return "egzamin dziś! 🍀";
    if (days === 1) return "egzamin jutro";
    return `egzamin za ${days} ${plural(days, "dzień", "dni", "dni")}`;
  }
  function formatDate(isoDate) {
    const [y, m, d] = isoDate.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  function examInfo(subject) {
    const date = store.exams[subject.id];
    return date ? { date, days: daysUntil(date) } : null;
  }
  function toLearn(subject) {
    const cards = subjectCards(subject);
    return cards.filter((c) => !((store.cards[c.key] || {}).box >= MASTERED_BOX)).length;
  }

  // ---------- dzienny cel i seria dni ----------
  // store.days["RRRR-MM-DD"] = { n: odpowiedzi, ok: dobre, m: nowo opanowane fiszki, g: cel tego dnia, s: { przedmiot: odpowiedzi } }
  const GOALS = [10, 20, 30, 50, 80, 100];
  function dayKey(d = new Date()) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function shiftDay(key, delta) {
    const [y, m, d] = key.split("-").map(Number);
    return dayKey(new Date(y, m - 1, d + delta));
  }
  function dayStats(key) {
    return store.days[key] || { n: 0, ok: 0, m: 0, s: {} };
  }
  function goalMet(key) {
    const d = store.days[key];
    return !!d && d.n >= (d.g || store.goal);
  }
  // seria trwa, jeśli cel był zrobiony wczoraj (dziś jeszcze jest czas)
  function currentStreak() {
    let key = dayKey();
    if (!goalMet(key)) key = shiftDay(key, -1);
    let n = 0;
    while (goalMet(key)) { n++; key = shiftDay(key, -1); }
    return n;
  }
  function bestStreak() {
    return Math.max(store.bestStreak, currentStreak());
  }
  // zapisuje każdą odpowiedź; zwraca true, gdy właśnie został osiągnięty cel dnia
  function logAnswer(subject, ok, mastered) {
    const key = dayKey();
    const d = store.days[key] = store.days[key] || { n: 0, ok: 0, m: 0, s: {} };
    d.g = store.goal;
    const before = d.n >= d.g;
    d.n++;
    if (ok) d.ok++;
    if (mastered) d.m++;
    d.s[subject.id] = (d.s[subject.id] || 0) + 1;
    store.bestStreak = Math.max(store.bestStreak, currentStreak());
    saveStore();
    checkCats();
    return !before && d.n >= d.g;
  }

  // ---------- notatki: sekcje (## nagłówki) ----------
  function noteSections(topic) {
    const out = [];
    let cur = null;
    (topic.notes || "").split("\n").forEach((line) => {
      if (line.startsWith("## ")) {
        cur = { title: line.slice(3).trim(), body: "" };
        cur.h = "h-" + hash(cur.title);
        out.push(cur);
      } else if (cur) cur.body += line + "\n";
    });
    return out;
  }
  // tekst bez znaczników markdown (do wyszukiwania i sprawdzania odpowiedzi)
  function plain(s) {
    return String(s).replace(/\*\*|(^|\s)\*|\*(\s|$)/g, "$1$2").replace(/^\s*(#{2,3} |> |- )/gm, "").replace(/\|/g, " ").replace(/\s+/g, " ").trim();
  }
  // porównywanie bez wielkości liter i polskich znaków; wynik ma tę samą długość co tekst
  function fold(s) {
    return String(s).split("").map((c) => (c.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "") || c)[0]).join("").replace(/ł/g, "l");
  }

  // ---------- widoki ----------
  // szary kotek idzie po pasku od pozycji „from” do „pct” (animacja w animateCats)
  const CAT_SVG = `<svg viewBox="0 0 40 28" aria-hidden="true">
    <path class="cat-tail" d="M9 15 C3 13 2 6 6 3" stroke="#8b8b92" stroke-width="3" fill="none" stroke-linecap="round"/>
    <rect class="cat-leg leg-a" x="10" y="18" width="3.2" height="8" rx="1.6" fill="#7d7d84"/>
    <rect class="cat-leg leg-b" x="14.5" y="18" width="3.2" height="8" rx="1.6" fill="#7d7d84"/>
    <rect class="cat-leg leg-b" x="21.5" y="18" width="3.2" height="8" rx="1.6" fill="#7d7d84"/>
    <rect class="cat-leg leg-a" x="26" y="18" width="3.2" height="8" rx="1.6" fill="#7d7d84"/>
    <ellipse cx="19" cy="16" rx="11.5" ry="6.5" fill="#9d9da4"/>
    <path d="M14 10.5 q1.5 3 0 5.5 M18.5 9.6 q1.5 3 0 6 M23 10 q1.3 2.8 0 5.6" stroke="#85858c" stroke-width="1.3" fill="none" stroke-linecap="round"/>
    <path d="M25.6 7.6 L27 1.6 L30 6.2 Z M30.6 5.8 L33.8 1.6 L34.8 7.4 Z" fill="#9d9da4"/>
    <path d="M27 6 L27.6 3.6 L28.8 5.6 Z M32 5.4 L33.4 3.6 L33.8 6.2 Z" fill="#f7a8c4"/>
    <circle cx="30.5" cy="11" r="6" fill="#9d9da4"/>
    <ellipse class="cat-eye" cx="32.6" cy="10.2" rx="1" ry="1.1" fill="#2c2c30"/>
    <circle cx="35.9" cy="12.2" r="0.9" fill="#f37aa6"/>
    <path d="M34.5 13.6 L39 13 M34.5 14.4 L39 15" stroke="#6f6f76" stroke-width=".5"/>
  </svg>`;
  function progressBar(pct, color, from = 0) {
    return `<div class="bar-wrap">
      <span class="cat" style="left:${from}%;transform:translateX(-${from}%)" data-to="${pct}">${CAT_SVG}</span>
      <div class="bar"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }
  function animateCats() {
    document.querySelectorAll(".cat[data-to]").forEach((cat) => {
      const to = Number(cat.dataset.to);
      delete cat.dataset.to;
      if (to === parseFloat(cat.style.left)) return;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        cat.classList.add("walking");
        cat.style.left = to + "%";
        cat.style.transform = `translateX(-${to}%)`;
        const stop = () => cat.classList.remove("walking");
        cat.addEventListener("transitionend", stop, { once: true });
        setTimeout(stop, 1600);
      }));
    });
  }
  new MutationObserver(animateCats).observe(app, { childList: true });

  // ---------- kotek, który reaguje ----------
  // w nauce siedzi obok szary kotek i w chmurce chwali albo pociesza
  const BUDDY_COLOR = { fur: "#9d9da4", dark: "#7d7d84", belly: "#c9c9ce", stripes: true };
  const SAYS = {
    cards: ["Hej! Lecimy z fiszkami 🐾", "Jestem obok. Dotknij kartę, kiedy będziesz gotowa 💗", "Miau! Krótka seria i już będzie lepiej ✨"],
    quiz: ["Quiz? Trzymam kciuki… znaczy łapki 🐾", "Czytaj spokojnie każdą odpowiedź – dasz radę! 💪", "Miau! Sprawdźmy, co już siedzi w głowie ✨"],
    open: ["Napisz, co pamiętasz – nawet kilka słów się liczy ✍️", "Odpowiadaj jak na egzaminie: pojęcia + przykład 🐾", "Nie musi być idealnie. Ważne, żeby spróbować 💗"],
    good: ["Brawo! 🎉", "Super, dokładnie tak! ✨", "Mrrr, jaka mądra! 😻", "Pięknie! 💖", "Tak trzymać! 🐾", "Głowa pracuje! 🧠✨"],
    bad: ["Nic nie szkodzi – ta wróci i następnym razem pójdzie lepiej 💗", "Błąd to też nauka: mózg właśnie to zapamiętuje 🧠", "Spokojnie, nikt nie umie wszystkiego od razu 🐾", "Nie przejmuj się, jestem obok 💕", "Dobrze, że to wyszło teraz, a nie na egzaminie 😺"],
    badMany: ["Trudny kawałek? Zajrzyj do notatki – to żaden wstyd 📖💗", "Weź łyk wody i głęboki oddech. Dasz radę! 🌷", "Wolniej też się liczy. Jestem z Ciebie dumna 🐾", "Może krótka przerwa? Pogłaszcz kotka i wracamy 😽"],
    partial: ["Częściowo to też postęp! 🌱", "Już blisko – jeszcze raz przeczytaj wzór 💗", "Dobry początek, dopisz pojęcia z wzoru ✨"],
    goal: ["Cel na dziś zrobiony! 🎉 Jestem dumna!", "Mamy to! Dzisiejszy cel osiągnięty 🏆", "Cel dnia zaliczony – możesz być z siebie dumna 💖"]
  };
  const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)];
  function buddy(text, mood, fresh) {
    return `<div class="buddy${mood ? " " + mood : ""}${fresh ? " fresh" : ""}" aria-live="polite">
      <span class="buddy-cat">${petCatSvg(BUDDY_COLOR)}</span>
      <span class="buddy-bubble">${text}</span>
    </div>`;
  }
  function sessionBuddy(s) {
    const html = buddy(s.say || "", s.mood, s.sayFresh);
    s.sayFresh = false;
    return html;
  }
  function say(s, text, mood) {
    s.say = text;
    s.mood = mood || "";
    s.sayFresh = true;
  }
  // grade: 2 = dobrze, 1 = częściowo, 0 = źle
  function react(s, grade, goalReached) {
    s.inRowOk = grade === 2 ? (s.inRowOk || 0) + 1 : 0;
    s.inRowBad = grade === 0 ? (s.inRowBad || 0) + 1 : 0;
    if (goalReached) return say(s, pickOne(SAYS.goal), "happy");
    if (grade === 2) {
      if (s.inRowOk >= 3 && s.inRowOk % 3 === 0) return say(s, `${s.inRowOk} z rzędu! Jesteś w formie 🔥`, "happy");
      return say(s, pickOne(SAYS.good), "happy");
    }
    if (grade === 1) return say(s, pickOne(SAYS.partial), "comfort");
    say(s, pickOne(s.inRowBad >= 3 ? SAYS.badMany : SAYS.bad), "comfort");
  }
  function endSay(pct) {
    if (pct >= 90) return ["Wow! Prawie wszystko! Jestem z Ciebie dumna 😻", "happy"];
    if (pct >= 70) return ["Bardzo dobrze! Jeszcze trochę i będzie komplet 💪", "happy"];
    if (pct >= 50) return ["Połowa już jest! Powtórz te trudniejsze, a pójdzie w górę 🌱", "comfort"];
    return ["Ten temat jest trudny, ale każda seria coś zostawia w głowie. Zajrzyj do notatki i spróbuj jeszcze raz – jestem obok 💗", "comfort"];
  }

  function viewHome() {
    document.title = "Drugi rok – nauka";
    const upcoming = SUBJECTS
      .map((s) => ({ s, exam: examInfo(s) }))
      .filter((x) => x.exam && x.exam.days >= 0)
      .sort((a, b) => a.exam.days - b.exam.days);
    const next = upcoming[0];
    // przedmioty z nadchodzącym egzaminem na górze (od najbliższego), reszta w stałej kolejności
    const ordered = upcoming.map((x) => x.s).concat(SUBJECTS.filter((s) => !upcoming.some((x) => x.s === s)));
    const cards = ordered.map((s) => {
      const fc = subjectCards(s);
      const ready = hasContent(s);
      const pct = mastery(fc);
      const due = dueCount(fc);
      const exam = examInfo(s);
      const isNext = next && next.s === s;
      return `
        <a class="subject-card${ready ? "" : " soon"}${isNext ? " next-exam" : ""}" href="#/s/${s.id}" style="--accent:${s.color}">
          <div class="subject-icon">${s.icon}</div>
          <div class="subject-body">
            ${exam ? `<div class="exam-chip${exam.days < 0 ? " past" : exam.days <= 7 ? " soon" : ""}">⏳ ${countdownText(exam.days)}</div>` : ""}
            <div class="subject-name">${esc(s.name)}</div>
            <div class="subject-meta">${ready
              ? `${s.topics.length} ${plural(s.topics.length, "temat", "tematy", "tematów")} · ${fc.length} ${plural(fc.length, "fiszka", "fiszki", "fiszek")}`
              : "w przygotowaniu"}</div>
            ${ready ? progressBar(pct, s.color) + `<div class="subject-meta small">opanowane: ${pct}%${due ? ` · do powtórki: ${due}` : ""}</div>` : ""}
          </div>
        </a>`;
    }).join("");
    app.innerHTML = `
      <header class="hero">
        <h1>Drugi rok · 1 semestr</h1>
        <p>Wybierz przedmiot. Postępy zapisują się na tym urządzeniu.</p>
      </header>
      <a class="search-link" href="#/szukaj">🔍 <span>Szukaj w notatkach, fiszkach i quizach…</span></a>
      ${todayCard()}
      ${next ? examSpotlight(next.s, next.exam, upcoming.slice(1)) : `
      <div class="exam-hint">📅 Ustaw daty egzaminów w przedmiotach, a tutaj pojawi się odliczanie do najbliższego.</div>`}
      <div class="subject-grid">${cards}</div>
      <a class="backup-link${backupOverdue() ? " overdue" : ""}" href="#/kopia">💾 Kopia zapasowa postępów · ${lastBackupText()}${backupOverdue() ? (store.lastBackup ? " – czas na nową kopię!" : " – zrób pierwszą!") : ""}</a>
      ${store.pets ? `<p class="pet-count">🐾 Pogłaskane kotki: ${store.pets}</p>` : ""}
      <p class="pet-count"><a href="#/nowosci">✨ Co nowego w aplikacji</a></p>`;
  }


  // dzienny cel i seria na stronie głównej
  function todayCard() {
    const d = dayStats(dayKey());
    const goal = store.goal;
    const pct = Math.min(100, Math.round((d.n / goal) * 100));
    const met = d.n >= goal;
    const streak = currentStreak();
    const marks = Object.keys(store.marks).length;
    const plan = planTasks();
    let text;
    if (met) text = d.n >= goal * 2 ? "Podwójny cel! Ale z Ciebie mistrzyni 😻" : "Cel na dziś zrobiony! Teraz już tylko dla przyjemności 💖";
    else if (!d.n) text = streak ? `Seria ${streak} ${plural(streak, "dzień", "dni", "dni")} czeka na dzisiejszy cel – nie daj jej zgasnąć 🔥` : `Miau! ${goal} odpowiedzi i cel na dziś zrobiony 🐾`;
    else text = `Jeszcze ${goal - d.n} – dasz radę! 💪`;
    return `
      <section class="today${met ? " met" : ""}">
        <div class="ring" style="--p:${pct}" role="img" aria-label="Dziś ${d.n} z ${goal} odpowiedzi"><span>${d.n}<small>/${goal}</small></span></div>
        <div class="today-info">
          <strong>${met ? "Cel na dziś ✓" : "Cel na dziś"}</strong>
          <span>🔥 Seria: <b>${streak}</b> ${plural(streak, "dzień", "dni", "dni")}${bestStreak() > streak ? ` · rekord: ${bestStreak()}` : ""}</span>
          <div class="today-links">
            <a href="#/plan">📋 Plan na dziś${plan.length ? ` (${plan.filter((t) => t.done).length}/${plan.length})` : ""}</a>
            <a href="#/skupienie">🍅 Skupienie</a>
            <a href="#/statystyki">📊 Statystyki</a>
            <a href="#/zakladki">⭐ Zakładki${marks ? ` (${marks})` : ""}</a>
            <a href="#/kotki">🐱 Album (${unlockedCats().length}/${CATS.length})</a>
          </div>
        </div>
        ${buddy(text, met ? "happy" : "")}
      </section>`;
  }

  // wyróżnienie najbliższego egzaminu na stronie głównej
  function examSpotlight(s, exam, others) {
    const fc = subjectCards(s);
    const pct = mastery(fc);
    const left = toLearn(s);
    const due = dueCount(fc);
    const urgency = exam.days <= 3 ? " urgent" : exam.days <= 7 ? " soon" : "";
    const perDay = exam.days > 0 && left ? Math.ceil(left / exam.days) : 0;
    let tip;
    if (!left) tip = "Wszystkie fiszki opanowane – zrób jeszcze quiz z całości! 🎉";
    else if (exam.days === 0) tip = "Powodzenia! Przejrzyj notatki i najtrudniejsze fiszki. 🍀";
    else tip = `Plan: ok. ${perDay} ${plural(perDay, "fiszka", "fiszki", "fiszek")} dziennie${due ? ` · do powtórki dziś: ${due}` : ""}`;
    return `
      <section class="spotlight${urgency}" style="--accent:${s.color}">
        <div class="spotlight-top">
          <div class="spotlight-days">${exam.days === 0 ? "DZIŚ" : exam.days}${exam.days ? `<span>${plural(exam.days, "dzień", "dni", "dni")}</span>` : ""}</div>
          <div class="spotlight-info">
            <div class="spotlight-label">⏳ Najbliższy egzamin${exam.days <= 7 && exam.days > 0 ? " – już niedługo!" : ""}</div>
            <a class="spotlight-name" href="#/s/${s.id}">${s.icon} ${esc(s.name)}</a>
            <div class="spotlight-date">${formatDate(exam.date)}</div>
          </div>
        </div>
        <div class="spotlight-progress">
          <div class="spotlight-progress-row"><span>Opanowane fiszki: <strong>${pct}%</strong></span><span>zostało: ${left}</span></div>
          ${progressBar(pct, "#fff")}
          <div class="spotlight-tip">${tip}</div>
        </div>
        <div class="spotlight-actions">
          <a class="btn spotlight-btn" href="#/s/${s.id}/fiszki">🃏 Ucz się teraz</a>
          <a class="btn spotlight-btn ghost" href="#/s/${s.id}/quiz">✅ Quiz z całości</a>
        </div>
        ${others.length ? `
        <div class="spotlight-next">
          <span>Kolejne egzaminy:</span>
          ${others.map((x) => `<a href="#/s/${x.s.id}">${x.s.icon} ${esc(x.s.short)} – ${x.exam.days === 1 ? "jutro" : `za ${x.exam.days} ${plural(x.exam.days, "dzień", "dni", "dni")}`}</a>`).join("")}
        </div>` : ""}
      </section>`;
  }

  function examPanel(subject) {
    const exam = examInfo(subject);
    const input = `<input type="date" class="exam-input" data-action="exam-date" value="${exam ? exam.date : ""}" aria-label="Data egzaminu">`;
    if (!exam) {
      return `
      <div class="exam-panel empty-exam" style="--accent:${subject.color}">
        <div class="exam-panel-text">
          <strong>📅 Kiedy masz egzamin?</strong>
          <span>Wybierz datę, a aplikacja zacznie odliczać dni.</span>
        </div>
        <label class="btn exam-pick">Ustaw datę egzaminu${input}</label>
      </div>`;
    }
    const left = toLearn(subject);
    return `
      <div class="exam-panel${exam.days < 0 ? " past" : ""}" style="--accent:${subject.color}">
        <div class="exam-days">${exam.days < 0 ? "✓" : exam.days === 0 ? "DZIŚ" : exam.days}${exam.days > 0 ? `<span>${plural(exam.days, "dzień", "dni", "dni")}</span>` : ""}</div>
        <div class="exam-panel-text">
          <strong>${countdownText(exam.days)}</strong>
          <span>${formatDate(exam.date)}</span>
          ${exam.days >= 0 && hasContent(subject) ? `<span>${left ? `Do opanowania: ${left} ${plural(left, "fiszka", "fiszki", "fiszek")}${exam.days > 0 ? ` – to ok. ${Math.ceil(left / exam.days)} dziennie` : ""}` : "Wszystkie fiszki opanowane! 🎉"}</span>` : ""}
        </div>
        <div class="exam-actions">
          <label class="btn small">Zmień datę${input}</label>
          <button class="btn small ghost" data-action="exam-clear">Usuń</button>
        </div>
      </div>`;
  }

  function viewSubject(subject) {
    document.title = subject.short + " – nauka";
    const ready = hasContent(subject);
    const allCards = subjectCards(subject);
    const best = store.quiz[quizKey(subject)];
    const topics = subject.topics.map((t, idx) => {
      const fc = topicCards(subject, t);
      const filled = t.notes || fc.length;
      const qs = store.quiz[quizKey(subject, t.id)];
      return `
        <a class="topic-row${filled ? "" : " soon"}" href="${filled ? `#/s/${subject.id}/t/${t.id}` : "#/s/" + subject.id}">
          <span class="topic-num" style="background:${subject.color}">${idx + 1}</span>
          <span class="topic-main">
            <span class="topic-title">${esc(t.title)}</span>
            <span class="topic-meta">${filled
              ? `${fc.length} fiszek · ${(t.quiz || []).length} pytań${qs ? ` · quiz: ${qs.best}%` : ""}`
              : "wkrótce"}</span>
            ${filled ? progressBar(mastery(fc), subject.color) : ""}
          </span>
        </a>`;
    }).join("");

    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <header class="subject-header" style="--accent:${subject.color}">
        <span class="subject-icon big">${subject.icon}</span>
        <div>
          <h1>${esc(subject.name)}</h1>
          ${ready ? `<p>Opanowane fiszki: ${mastery(allCards)}%${best ? ` · najlepszy quiz z całości: ${best.best}%` : ""}</p>` : ""}
        </div>
      </header>
      ${examPanel(subject)}
      ${ready ? `
      <div class="actions">
        <a class="btn primary" style="--accent:${subject.color}" href="#/s/${subject.id}/fiszki">🃏 Fiszki z całości</a>
        <a class="btn" href="#/s/${subject.id}/quiz">✅ Quiz z całości</a>
        ${realQuestions(subject).length ? `<a class="btn" href="#/s/${subject.id}/zagadnienia">📌 Zagadnienia egzaminacyjne (${realQuestions(subject).length})</a>` : ""}
        ${openQuestions(subject).length ? `<a class="btn" href="#/s/${subject.id}/otwarte">✍️ Pytania otwarte</a>` : ""}
        ${subject.exam ? `<a class="btn" href="#/s/${subject.id}/egzamin">📝 Próbny egzamin (test)</a>` : ""}
        ${subject.openExam && realQuestions(subject).length >= subject.openExam.questions ? `<a class="btn" href="#/s/${subject.id}/egzamin-pisemny">🖊️ Egzamin pisemny</a>` : ""}
        ${matchCards(subject).length >= 4 ? `<a class="btn" href="#/s/${subject.id}/pary">🧩 Gra w pary</a>` : ""}
        ${subject.statex ? `<a class="btn" href="#/s/${subject.id}/zadania">🧮 Zadania ze statystyki</a>` : ""}
      </div>
      <div class="modes">Fiszki inaczej: <a href="#/s/${subject.id}/fiszki/wszystko/odwrot">🔄 na odwrót</a> · <a href="#/s/${subject.id}/fiszki/wszystko/pisz">⌨️ z pisaniem</a></div>` : `
      <div class="empty">
        <p><strong>Ten przedmiot jest w przygotowaniu.</strong></p>
        <p>Notatki, fiszki i quizy powstaną na podstawie materiałów z Dysku wymienionych poniżej.</p>
      </div>`}
      <h2>Tematy</h2>
      <div class="topic-list">${topics}</div>
      <details class="sources">
        <summary>Źródła z Dysku</summary>
        <ul>${subject.sources.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </details>`;
  }

  function viewTopic(subject, topic, tab, anchor) {
    document.title = topic.title + " – nauka";
    const fc = topicCards(subject, topic);
    const quiz = topic.quiz || [];
    tab = tab || "notatka";
    const tabs = [
      ["notatka", "📖 Notatka"],
      ["fiszki", `🃏 Fiszki (${fc.length})`],
      ["quiz", `✅ Quiz (${quiz.length})`]
    ];
    const base = `#/s/${subject.id}/t/${topic.id}`;
    let body = "";
    if (tab === "notatka") {
      body = topic.notes
        ? `<p class="bm-hint">☆ Dotknij gwiazdki przy nagłówku, żeby dodać zakładkę.</p><article class="notes">${md(topic.notes, `${subject.id}/${topic.id}/`)}</article>`
        : `<div class="empty">Brak notatki.</div>`;
      body += `
        <div class="actions bottom">
          ${fc.length ? `<a class="btn primary" style="--accent:${subject.color}" href="#/s/${subject.id}/fiszki/${topic.id}">Ucz się z fiszek</a>` : ""}
          ${quiz.length ? `<a class="btn" href="#/s/${subject.id}/quiz/${topic.id}">Sprawdź się w quizie</a>` : ""}
          ${realQuestions(subject, topic.id).length ? `<a class="btn" href="#/s/${subject.id}/zagadnienia/${topic.id}">📌 Zagadnienia egzaminacyjne</a>` : ""}
          ${openQuestions(subject, topic.id).length ? `<a class="btn" href="#/s/${subject.id}/otwarte/${topic.id}">✍️ Pytania otwarte</a>` : ""}
          ${matchCards(subject, topic.id).length >= 4 ? `<a class="btn" href="#/s/${subject.id}/pary/${topic.id}">🧩 Gra w pary</a>` : ""}
        </div>`;
    } else if (tab === "fiszki") {
      const due = dueCount(fc);
      body = `
        <div class="panel">
          <p>Opanowane: <strong>${mastery(fc)}%</strong>${due ? ` · do powtórki: <strong>${due}</strong>` : ""}</p>
          ${progressBar(mastery(fc), subject.color)}
          <a class="btn primary big" style="--accent:${subject.color}" href="#/s/${subject.id}/fiszki/${topic.id}">Zacznij fiszki</a>
          <div class="mode-row">
            <a class="btn" href="#/s/${subject.id}/fiszki/${topic.id}/odwrot">🔄 Na odwrót</a>
            <a class="btn" href="#/s/${subject.id}/fiszki/${topic.id}/pisz">⌨️ Z pisaniem</a>
            ${matchCards(subject, topic.id).length >= 4 ? `<a class="btn" href="#/s/${subject.id}/pary/${topic.id}">🧩 Gra w pary</a>` : ""}
          </div>
        </div>
        <div class="card-list">
          ${fc.map((c) => {
            const box = (store.cards[c.key] || {}).box || 0;
            return `<details class="mini-card"><summary><span class="dot box${box}"></span>${esc(c.q)}</summary><p>${esc(c.a)}</p></details>`;
          }).join("")}
        </div>`;
    } else {
      const qs = store.quiz[quizKey(subject, topic.id)];
      body = `
        <div class="panel">
          <p>${quiz.length} ${plural(quiz.length, "pytanie", "pytania", "pytań")} jednokrotnego wyboru.${qs ? ` Ostatni wynik: <strong>${qs.last}%</strong>, najlepszy: <strong>${qs.best}%</strong>.` : ""}</p>
          <a class="btn primary big" style="--accent:${subject.color}" href="#/s/${subject.id}/quiz/${topic.id}">Zacznij quiz</a>
        </div>`;
    }
    app.innerHTML = `
      <a class="back" href="#/s/${subject.id}">‹ ${esc(subject.short)}</a>
      <h1 class="topic-h1">${esc(topic.title)}</h1>
      <nav class="tabs" style="--accent:${subject.color}">
        ${tabs.map(([id, label]) => `<a class="tab${id === tab ? " active" : ""}" href="${base}/${id}">${label}</a>`).join("")}
      </nav>
      ${body}`;
    window.scrollTo(0, 0);
    // przejście do sekcji (z zakładki albo wyszukiwania) – po przewinięciu strony na górę w obsłudze hashchange
    const target = anchor && document.getElementById(anchor);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ block: "start" });
        window.scrollBy(0, -80);
        target.classList.add("flash");
      }, 30);
    }
  }

  // ---------- fiszki ----------
  let session = null;
  let currentView = "";
  const CARD_MODES = { odwrot: "🔄 Na odwrót", pisz: "⌨️ Z pisaniem" };

  // w trakcie sesji kotek przechodzi od poprzedniej pozycji do nowej
  function sessionBar(s, pct) {
    const from = s.catPct === undefined ? 0 : s.catPct;
    s.catPct = pct;
    return progressBar(pct, s.subject.color, from);
  }

  function startFlashcards(subject, topicId, mode) {
    const cards = subjectCards(subject, topicId);
    const now = Date.now();
    // kolejność: zaległe (najniższe pudełko najpierw) → nowe → pozostałe
    const scored = shuffle(cards).map((c) => {
      const s = store.cards[c.key];
      let prio;
      if (!s) prio = 1;
      else if (s.due <= now) prio = s.box * 0.1;
      else prio = 2 + s.box;
      return { c, prio };
    });
    scored.sort((a, b) => a.prio - b.prio);
    let queue = scored.map((x) => x.c);
    if (!topicId) queue = queue.slice(0, SESSION_ALL_CARDS);
    session = {
      type: "cards", subject, topicId, mode: CARD_MODES[mode] ? mode : "", queue, pos: 0, flipped: false, typed: "",
      known: 0, unknown: 0, total: queue.length, retried: new Set()
    };
    say(session, session.mode === "pisz" ? "Napisz odpowiedź swoimi słowami – sprawdzę słowa kluczowe ⌨️" : session.mode === "odwrot" ? "Na odwrót: widzisz odpowiedź, a Ty przypominasz sobie pojęcie 🔄" : pickOne(SAYS.cards));
    renderCard();
  }

  function renderCard() {
    const s = session;
    const back = s.topicId ? `#/s/${s.subject.id}/t/${s.topicId}/fiszki` : `#/s/${s.subject.id}`;
    if (s.pos >= s.queue.length) {
      app.innerHTML = `
        <a class="back" href="${back}">‹ Wróć</a>
        <div class="done">
          <div class="done-emoji">🎉</div>
          <h2>Koniec serii!</h2>
          <p>Umiem: <strong>${s.known}</strong> · Do powtórki: <strong>${s.unknown}</strong></p>
          <p>Opanowane w tym zakresie: <strong>${mastery(subjectCards(s.subject, s.topicId))}%</strong></p>
          ${buddy(...endSay(Math.round((s.known / Math.max(1, s.known + s.unknown)) * 100)), true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="restart-cards">Jeszcze raz</button>
            <a class="btn" href="${back}">Wróć</a>
          </div>
        </div>`;
      return;
    }
    const c = s.queue[s.pos];
    const box = (store.cards[c.key] || {}).box || 0;
    const rev = s.mode === "odwrot";
    const typing = s.mode === "pisz";
    const front = rev ? c.a : c.q;
    const backSide = rev ? c.q : c.a;
    let answer;
    if (!s.flipped) {
      answer = typing
        ? `<textarea class="type-answer" rows="3" placeholder="Wpisz odpowiedź…">${esc(s.typed)}</textarea>
           <button class="btn primary big" style="--accent:${s.subject.color}" data-action="flip">Sprawdź (Enter)</button>`
        : `<div class="fc-hint">Dotknij, aby zobaczyć ${rev ? "pojęcie" : "odpowiedź"}</div>`;
    } else if (typing && s.typed.trim()) {
      const m = typeMatch(s.typed, backSide);
      answer = `<div class="my-answer"><div class="label">Twoja odpowiedź</div>${esc(s.typed)}</div>
        <div class="fc-a">${m.html}</div>
        <div class="type-score ${m.pct >= 60 ? "ok" : m.pct >= 30 ? "mid" : "no"}">Słowa kluczowe: ${m.hit} / ${m.total}${m.total ? ` (${m.pct}%)` : ""} – ${m.pct >= 60 ? "wygląda na to, że umiesz! 🎉" : m.pct >= 30 ? "częściowo – oceń sama" : "porównaj z odpowiedzią"}</div>`;
    } else {
      answer = `<div class="fc-a">${esc(backSide)}</div>`;
    }
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">${s.mode ? CARD_MODES[s.mode] + " · " : ""}${Math.min(s.pos + 1, s.queue.length)} / ${s.queue.length}</span>
      </div>
      ${sessionBar(s, Math.round((s.pos / s.queue.length) * 100))}
      <div class="flashcard${s.flipped ? " flipped" : ""}${typing ? " typing" : ""}" ${typing ? "" : 'data-action="flip"'} style="--accent:${s.subject.color}">
        <div class="fc-topic">${esc(c.topic)} · <span class="dot box${box}"></span>${box ? `pudełko ${box}/5` : "nowa"}${rev ? " · jakie to pojęcie?" : ""}</div>
        <div class="fc-q${rev ? " rev" : ""}">${esc(front)}</div>
        ${answer}
      </div>
      ${s.flipped ? `
      <div class="grade">
        <button class="btn bad" data-action="grade" data-ok="0">✗ Nie umiem</button>
        <button class="btn good" data-action="grade" data-ok="1">✓ Umiem</button>
      </div>` : ""}
      ${sessionBuddy(s)}`;
  }

  // porównanie wpisanej odpowiedzi ze wzorem: słowa kluczowe (≥4 litery) po początkach, bez polskich znaków
  const STOP = new Set(["jest", "oraz", "albo", "przez", "jako", "który", "która", "które", "ktory", "ktora", "ktore", "tego", "temu", "jego", "jej", "ich", "się", "sie", "dla", "przy", "nad", "pod", "bez", "czyli", "lub", "też", "tez", "tylko", "może", "moze", "gdy", "kiedy", "jaki", "jaka", "jakie", "tym", "tak", "nie", "być", "byc"]);
  function typeMatch(typed, answer) {
    const t = fold(typed);
    const parts = answer.split(/(\s+|[,;:()–—\-/.„”"]+)/);
    let hit = 0, total = 0;
    const seen = new Set();
    const html = parts.map((w) => {
      const f = fold(w);
      if (f.length < 4 || STOP.has(f) || !/[a-z]/.test(f)) return esc(w);
      const stem = f.slice(0, Math.max(4, Math.min(6, f.length - 2)));
      if (!seen.has(stem)) { seen.add(stem); total++; if (t.includes(stem)) hit++; }
      return t.includes(stem) ? `<mark class="hit">${esc(w)}</mark>` : esc(w);
    }).join("");
    return { html, hit, total, pct: total ? Math.round((hit / total) * 100) : 0 };
  }

  function gradeCard(ok) {
    const s = session;
    const c = s.queue[s.pos];
    const prev = store.cards[c.key] || { box: 0 };
    let box;
    if (ok) {
      box = Math.min(5, Math.max(prev.box, 1) + 1);
      s.known++;
    } else {
      box = 1;
      s.unknown++;
      // nieznana fiszka wraca raz pod koniec tej serii
      if (!s.retried.has(c.key)) {
        s.retried.add(c.key);
        s.queue.push(c);
      }
    }
    store.cards[c.key] = { box, due: Date.now() + INTERVALS[box] * DAY };
    saveStore();
    react(s, ok ? 2 : 0, logAnswer(s.subject, ok, prev.box < MASTERED_BOX && box >= MASTERED_BOX));
    s.pos++;
    s.flipped = false;
    s.typed = "";
    renderCard();
    const ta = app.querySelector(".type-answer");
    if (ta) ta.focus();
  }

  // ---------- quiz ----------
  function startQuiz(subject, topicId) {
    let qs = shuffle(subjectQuiz(subject, topicId));
    if (!topicId) qs = qs.slice(0, SESSION_ALL_QUIZ);
    qs = qs.map((q) => {
      // opcje odwołujące się do innych („Odpowiedzi A i B…”, „Wszystkie…”) wymagają stałej kolejności
      const fixed = q.o.some((o) => FIXED_ORDER.test(o));
      const idx = q.o.map((_, i) => i);
      return Object.assign({}, q, { order: fixed ? idx : shuffle(idx) });
    });
    session = { type: "quiz", subject, topicId, qs, pos: 0, chosen: null, score: 0 };
    say(session, pickOne(SAYS.quiz));
    renderQuiz();
  }

  function renderQuiz() {
    const s = session;
    const back = s.topicId ? `#/s/${s.subject.id}/t/${s.topicId}/quiz` : `#/s/${s.subject.id}`;
    if (s.pos >= s.qs.length) {
      const pct = s.qs.length ? Math.round((s.score / s.qs.length) * 100) : 0;
      const key = quizKey(s.subject, s.topicId);
      const prev = store.quiz[key];
      store.quiz[key] = { last: pct, best: Math.max(pct, prev ? prev.best : 0) };
      saveStore();
      const msg = pct >= 90 ? "Świetnie! 🌟" : pct >= 70 ? "Dobra robota! 💪" : pct >= 50 ? "Nieźle, powtórz trudniejsze tematy." : "Warto wrócić do notatki 📖";
      app.innerHTML = `
        <a class="back" href="${back}">‹ Wróć</a>
        <div class="done">
          <div class="done-emoji">${pct >= 70 ? "🎉" : "📚"}</div>
          <h2>Wynik: ${s.score} / ${s.qs.length} (${pct}%)</h2>
          <p>${msg}</p>
          ${buddy(...endSay(pct), true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="restart-quiz">Jeszcze raz</button>
            <a class="btn" href="${back}">Wróć</a>
          </div>
        </div>`;
      return;
    }
    const q = s.qs[s.pos];
    const answered = s.chosen !== null;
    const opts = q.order.map((i, pos) => {
      let cls = "option";
      if (answered) {
        if (i === q.a) cls += " correct";
        else if (i === s.chosen) cls += " wrong";
        else cls += " dim";
      }
      return `<button class="${cls}" data-action="answer" data-i="${i}" ${answered ? "disabled" : ""}><span class="opt-letter">${"ABCDEF"[pos]}</span><span>${esc(q.o[i])}</span></button>`;
    }).join("");
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">${s.pos + 1} / ${s.qs.length} · wynik ${s.score}</span>
      </div>
      ${sessionBar(s, Math.round((s.pos / s.qs.length) * 100))}
      <div class="quiz-card">
        <div class="fc-topic">${esc(q.topic)}</div>
        <div class="quiz-q">${esc(q.q)}</div>
        <div class="options">${opts}</div>
        ${answered ? `
          <div class="explain ${s.chosen === q.a ? "ok" : "no"}">
            <strong>${s.chosen === q.a ? "Dobrze!" : "Niestety nie."}</strong> ${esc(q.e || "")}
            ${q.src ? `<div class="src">Źródło: ${esc(q.src)}</div>` : ""}
          </div>
          <button class="btn primary big" style="--accent:${s.subject.color}" data-action="next-q">${s.pos + 1 < s.qs.length ? "Dalej ›" : "Zobacz wynik"}</button>` : ""}
      </div>
      ${sessionBuddy(s)}`;
  }

  // ---------- pytania otwarte (w stylu egzaminu) ----------
  // z każdej sekcji notatki (## nagłówek) powstaje pytanie „Omów: …”, a wzorcową odpowiedzią jest treść sekcji;
  // temat może też mieć własne pytania: open: [{ q: "pytanie", a: "wzorcowa odpowiedź (markdown)" }]
  const OPEN_SESSION = 10;
  const OPEN_SKIP = /zaliczeni|kryteria oceny|^lista |różnice: wykład|rozbieżności|na pamięć|^definicje$|^zakończenie$/i;
  function keyTerms(text) {
    const seen = new Set();
    const out = [];
    (text.match(/\*\*(.+?)\*\*/g) || []).forEach((m) => {
      const t = m.slice(2, -2).replace(/[:.,;]+$/, "").trim();
      const k = fold(t);
      if (t.length < 3 || t.length > 40 || t.split(/\s+/).length > 4 || /^\d/.test(t) || /^(tak|nie|np|wady|zalety)$/.test(k) || seen.has(k)) return;
      seen.add(k);
      out.push(t);
    });
    return out.slice(0, 10);
  }
  // pojęcie „użyte”, jeśli w odpowiedzi jest początek każdego jego słowa (odmiana przez przypadki)
  function termUsed(term, answer) {
    const words = fold(term).split(/[^a-z0-9]+/).filter((w) => w.length >= 3);
    if (!words.length) return answer.includes(fold(term));
    return words.every((w) => answer.includes(w.slice(0, Math.max(3, Math.min(5, w.length - 1)))));
  }
  function openQuestions(subject, topicId) {
    const topics = topicId ? subject.topics.filter((t) => t.id === topicId) : subject.topics;
    return topics.flatMap((t) => {
      const own = (t.open || []).map((o) => ({ q: o.q, a: o.a, real: !!o.real }));
      const auto = noteSections(t)
        .filter((sec) => !OPEN_SKIP.test(sec.title) && plain(sec.body).length > 120)
        .map((sec) => ({ q: /\?$/.test(sec.title) ? sec.title : `Omów: ${sec.title}`, a: sec.body, h: sec.h }));
      return own.concat(auto).map((o) => Object.assign(o, {
        key: subject.id + ":o:" + hash(o.q), topic: t.title, tid: t.id, terms: keyTerms(o.a)
      }));
    });
  }
  function realQuestions(subject, topicId) {
    return openQuestions(subject, topicId).filter((o) => o.real);
  }
  function startOpen(subject, topicId, realOnly) {
    const all = realOnly ? realQuestions(subject, topicId) : openQuestions(subject, topicId);
    // najpierw te jeszcze nieprzerobione albo oznaczone jako „nie umiałam”
    const qs = shuffle(all).sort((a, b) => (store.open[a.key] === undefined ? -1 : store.open[a.key]) - (store.open[b.key] === undefined ? -1 : store.open[b.key])).slice(0, OPEN_SESSION);
    session = { type: "open", subject, topicId, realOnly, qs, pos: 0, shown: false, answer: "", grades: [0, 0, 0] };
    say(session, pickOne(SAYS.open));
    renderOpen();
  }
  function renderOpen() {
    const s = session;
    const back = s.topicId ? `#/s/${s.subject.id}/t/${s.topicId}` : `#/s/${s.subject.id}`;
    if (s.pos >= s.qs.length) {
      const pct = Math.round(((s.grades[2] + s.grades[1] / 2) / Math.max(1, s.qs.length)) * 100);
      app.innerHTML = `
        <a class="back" href="${back}">‹ Wróć</a>
        <div class="done">
          <div class="done-emoji">✍️</div>
          <h2>Koniec pytań otwartych!</h2>
          <p>Umiałam: <strong>${s.grades[2]}</strong> · Częściowo: <strong>${s.grades[1]}</strong> · Nie umiałam: <strong>${s.grades[0]}</strong></p>
          ${buddy(...endSay(pct), true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="restart-open">Kolejne pytania</button>
            <a class="btn" href="${back}">Wróć</a>
          </div>
        </div>`;
      return;
    }
    const q = s.qs[s.pos];
    let answerPart;
    if (!s.shown) {
      answerPart = `
        <textarea class="open-answer" placeholder="Napisz swoją odpowiedź (albo odpowiedz w myślach i od razu sprawdź)…" rows="7">${esc(s.answer)}</textarea>
        <button class="btn primary big" style="--accent:${s.subject.color}" data-action="open-show">Pokaż wzorcową odpowiedź</button>`;
    } else {
      const ans = fold(s.answer);
      const terms = s.answer.trim() && q.terms.length ? `
        <div class="terms">
          <div class="terms-head">Kluczowe pojęcia w Twojej odpowiedzi: <strong>${q.terms.filter((t) => termUsed(t, ans)).length} / ${q.terms.length}</strong></div>
          ${q.terms.map((t) => `<span class="term ${termUsed(t, ans) ? "yes" : "no"}">${termUsed(t, ans) ? "✓" : "✗"} ${esc(t)}</span>`).join("")}
        </div>` : q.terms.length ? `
        <div class="terms">
          <div class="terms-head">Pojęcia, które warto użyć:</div>
          ${q.terms.map((t) => `<span class="term">${esc(t)}</span>`).join("")}
        </div>` : "";
      answerPart = `
        ${s.answer.trim() ? `<div class="my-answer"><div class="label">Twoja odpowiedź</div>${esc(s.answer).replace(/\n/g, "<br>")}</div>` : ""}
        ${terms}
        <div class="model-answer notes"><div class="label">Wzorcowa odpowiedź${q.real ? "" : " (z notatki)"}</div>${md(q.a)}</div>
        <div class="grade three">
          <button class="btn bad" data-action="open-grade" data-g="0">✗ Nie umiałam</button>
          <button class="btn mid" data-action="open-grade" data-g="1">≈ Częściowo</button>
          <button class="btn good" data-action="open-grade" data-g="2">✓ Umiałam</button>
        </div>`;
    }
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">${s.pos + 1} / ${s.qs.length}</span>
      </div>
      ${sessionBar(s, Math.round((s.pos / s.qs.length) * 100))}
      <div class="quiz-card open-card" style="--accent:${s.subject.color}">
        <div class="fc-topic">${q.real ? "📌 pytanie egzaminacyjne · " : ""}${esc(q.topic)}${store.open[q.key] !== undefined ? ` · ostatnio: ${["nie umiałam", "częściowo", "umiałam"][store.open[q.key]]}` : ""}</div>
        <div class="quiz-q">${esc(q.q)}</div>
        ${answerPart}
      </div>
      ${sessionBuddy(s)}`;
  }

  // ---------- próbny egzamin ----------
  // przedmiot z polem exam: { questions, minutes, pass } – losowe pytania z całego quizu, na czas, wynik dopiero na końcu
  let examTimer = null;
  function viewExamIntro(subject) {
    document.title = "Próbny egzamin – " + subject.short;
    const ex = subject.exam;
    const tries = (store.tries[subject.id] || []).slice().reverse();
    const best = tries.reduce((m, t) => Math.max(m, t.score), 0);
    app.innerHTML = `
      <a class="back" href="#/s/${subject.id}">‹ ${esc(subject.short)}</a>
      <h1>📝 Próbny egzamin</h1>
      <p class="muted">${subject.icon} ${esc(subject.name)}</p>
      <div class="panel exam-rules" style="--accent:${subject.color}">
        <div class="rule"><b>${ex.questions}</b><span>pytań</span></div>
        <div class="rule"><b>${ex.minutes}</b><span>minut</span></div>
        <div class="rule"><b>${ex.pass}</b><span>do zaliczenia</span></div>
      </div>
      ${ex.note ? `<p class="exam-note">ℹ️ ${esc(ex.note)}</p>` : ""}
      <p>Pytania są losowane z ${subjectQuiz(subject).length} pytań z całego przedmiotu. Jak na prawdziwym egzaminie: odpowiedzi możesz zmieniać i wracać do pytań, a wynik i poprawne odpowiedzi zobaczysz dopiero po oddaniu. Po ${ex.minutes} minutach egzamin kończy się sam.</p>
      <button class="btn primary big" style="--accent:${subject.color}" data-action="exam-start">Rozpocznij egzamin</button>
      ${tries.length ? `
      <h2>Twoje podejścia${best ? ` · najlepszy wynik: ${best}/${ex.questions}` : ""}</h2>
      <div class="tries">
        ${tries.slice(0, 10).map((t) => `
          <div class="try ${t.score >= ex.pass ? "pass" : "fail"}">
            <span>${new Date(t.at).toLocaleDateString("pl-PL", { day: "numeric", month: "short" })}, ${new Date(t.at).toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" })}</span>
            <strong>${t.score}/${t.total}</strong>
            <span>${t.score >= ex.pass ? "✓ zaliczony" : "✗ niezaliczony"} · ${Math.ceil(t.secs / 60)} min</span>
          </div>`).join("")}
      </div>` : ""}`;
  }
  function startExam(subject) {
    const ex = subject.exam;
    const qs = shuffle(subjectQuiz(subject)).slice(0, ex.questions).map((q) => {
      const fixed = q.o.some((o) => FIXED_ORDER.test(o));
      const idx = q.o.map((_, i) => i);
      return Object.assign({}, q, { order: fixed ? idx : shuffle(idx) });
    });
    session = { type: "exam", subject, qs, pos: 0, answers: qs.map(() => null), started: Date.now(), end: Date.now() + ex.minutes * 60000, finished: false };
    clearInterval(examTimer);
    examTimer = setInterval(tickExam, 1000);
    renderExam();
  }
  function timeLeftText(ms) {
    const sec = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
  }
  function tickExam() {
    const s = session;
    if (!s || s.type !== "exam" || s.finished) return clearInterval(examTimer);
    const left = s.end - Date.now();
    if (left <= 0) return finishExam();
    const el = document.querySelector(".exam-timer");
    if (el) {
      el.textContent = "⏱ " + timeLeftText(left);
      el.classList.toggle("low", left < 5 * 60000);
    }
  }
  function renderExam() {
    const s = session;
    const q = s.qs[s.pos];
    const done = s.answers.filter((a) => a !== null).length;
    app.innerHTML = `
      <div class="session-top">
        <button class="back linkish" data-action="exam-quit">‹ Przerwij</button>
        <span class="exam-timer${s.end - Date.now() < 5 * 60000 ? " low" : ""}">⏱ ${timeLeftText(s.end - Date.now())}</span>
      </div>
      <div class="exam-grid" style="--accent:${s.subject.color}">
        ${s.qs.map((_, i) => `<button class="eg${s.answers[i] !== null ? " done" : ""}${i === s.pos ? " cur" : ""}" data-action="exam-go" data-to="${i}">${i + 1}</button>`).join("")}
      </div>
      <div class="quiz-card" style="--accent:${s.subject.color}">
        <div class="fc-topic">Pytanie ${s.pos + 1} z ${s.qs.length} · odpowiedzi: ${done}/${s.qs.length}</div>
        <div class="quiz-q">${esc(q.q)}</div>
        <div class="options">
          ${q.order.map((i, pos) => `<button class="option${s.answers[s.pos] === i ? " picked" : ""}" data-action="exam-pick" data-i="${i}"><span class="opt-letter">${"ABCDEF"[pos]}</span><span>${esc(q.o[i])}</span></button>`).join("")}
        </div>
        <div class="exam-nav">
          <button class="btn" data-action="exam-go" data-to="${s.pos - 1}" ${s.pos ? "" : "disabled"}>‹ Poprzednie</button>
          ${s.pos + 1 < s.qs.length
            ? `<button class="btn primary" style="--accent:${s.subject.color}" data-action="exam-go" data-to="${s.pos + 1}">Następne ›</button>`
            : `<button class="btn primary" style="--accent:${s.subject.color}" data-action="exam-finish">Oddaj egzamin</button>`}
        </div>
      </div>
      <button class="btn big ghost-finish" data-action="exam-finish">Oddaj egzamin (${done}/${s.qs.length})</button>`;
  }
  function finishExam() {
    const s = session;
    if (!s || s.type !== "exam" || s.finished) return;
    s.finished = true;
    clearInterval(examTimer);
    const ex = s.subject.exam;
    const score = s.qs.filter((q, i) => s.answers[i] === q.a).length;
    const secs = Math.round((Math.min(Date.now(), s.end) - s.started) / 1000);
    const passed = score >= ex.pass;
    const tries = store.tries[s.subject.id] = store.tries[s.subject.id] || [];
    tries.push({ at: new Date().toISOString(), score, total: s.qs.length, secs });
    if (tries.length > 30) tries.splice(0, tries.length - 30);
    let goal = false;
    s.qs.forEach((q, i) => { if (s.answers[i] !== null && logAnswer(s.subject, s.answers[i] === q.a, false)) goal = true; });
    saveStore();
    const timeUp = Date.now() >= s.end;
    const [text, mood] = passed
      ? [score >= ex.questions - 3 ? "Zdany śpiewająco! Jestem z Ciebie taka dumna 😻🎉" : "Zdany! Na prawdziwym egzaminie też tak będzie 💪🎉", "happy"]
      : [score >= ex.pass - 3 ? `Zabrakło tylko ${ex.pass - score} ${plural(ex.pass - score, "punktu", "punktów", "punktów")}! Przejrzyj błędy i spróbuj jeszcze raz – jesteś blisko 💗` : "Tym razem się nie udało, ale po to jest próbny egzamin. Zobacz poniżej, co powtórzyć – jestem z Tobą 🐾", "comfort"];
    const review = s.qs.map((q, i) => ({ q, i, mine: s.answers[i] })).filter((x) => x.mine !== x.q.a);
    app.innerHTML = `
      <a class="back" href="#/s/${s.subject.id}/egzamin" data-action="exam-intro">‹ Wróć</a>
      <div class="done exam-result ${passed ? "pass" : "fail"}">
        <div class="done-emoji">${passed ? "🎓" : "📚"}</div>
        <h2>${score} / ${s.qs.length} – ${passed ? "ZALICZONY" : "NIEZALICZONY"}</h2>
        <p>Próg: ${ex.pass} · czas: ${Math.floor(secs / 60)} min ${secs % 60} s${timeUp ? " (koniec czasu)" : ""}</p>
        ${buddy(goal ? `${text} A przy okazji: cel dnia zrobiony! 🏆` : text, mood, true)}
        <div class="actions center">
          <button class="btn primary" style="--accent:${s.subject.color}" data-action="exam-start">Nowy egzamin</button>
          <a class="btn" href="#/s/${s.subject.id}">Wróć do przedmiotu</a>
        </div>
      </div>
      ${review.length ? `<h2>Do powtórki (${review.length})</h2>
      <div class="review">
        ${review.map(({ q, i, mine }) => `
          <div class="review-item">
            <div class="fc-topic">Pytanie ${i + 1} · ${esc(q.topic)}</div>
            <div class="review-q">${esc(q.q)}</div>
            ${mine === null ? `<div class="review-mine none">Bez odpowiedzi</div>` : `<div class="review-mine">✗ ${esc(q.o[mine])}</div>`}
            <div class="review-ok">✓ ${esc(q.o[q.a])}</div>
            ${q.e ? `<div class="review-e">${esc(q.e)}</div>` : ""}
          </div>`).join("")}
      </div>` : ""}`;
    window.scrollTo(0, 0);
  }

  // ---------- wyszukiwarka ----------
  let lastQuery = "";
  function viewSearch() {
    document.title = "Szukaj – nauka";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>🔍 Szukaj</h1>
      <input type="search" class="search-input" data-action="search" value="${esc(lastQuery)}" placeholder="np. mechanizmy obronne, ANOVA, Rogers…" autocomplete="off" enterkeyhint="search">
      <div id="search-results"></div>`;
    const input = app.querySelector(".search-input");
    renderResults(lastQuery);
    setTimeout(() => input.focus(), 50);
  }
  // fragment tekstu wokół trafienia z podświetleniem
  function snippet(text, words, size = 70) {
    const f = fold(text);
    const first = Math.min(...words.map((w) => f.indexOf(w)).filter((i) => i >= 0));
    const start = Math.max(0, first - size);
    const end = Math.min(text.length, first + size * 2);
    const part = text.slice(start, end);
    const fp = f.slice(start, end);
    const marks = new Array(part.length).fill(false);
    words.forEach((w) => {
      let i = fp.indexOf(w);
      while (i >= 0) { for (let k = i; k < i + w.length; k++) marks[k] = true; i = fp.indexOf(w, i + w.length); }
    });
    let html = "", open = false;
    for (let k = 0; k < part.length; k++) {
      if (marks[k] !== open) { html += marks[k] ? "<mark>" : "</mark>"; open = marks[k]; }
      html += esc(part[k]);
    }
    if (open) html += "</mark>";
    return (start ? "…" : "") + html + (end < text.length ? "…" : "");
  }
  function renderResults(query) {
    lastQuery = query;
    const box = document.getElementById("search-results");
    if (!box) return;
    // dłuższe słowa skracamy o końcówkę, żeby znaleźć inne formy („obronne” → „obronny”)
    const words = fold(query).split(/\s+/).filter((w) => w.length >= 2).map((w) => (w.length >= 5 ? w.slice(0, Math.max(4, w.length - 2)) : w));
    if (!words.length) {
      box.innerHTML = `<p class="muted">Wpisz co najmniej 2 litery. Szukam w notatkach, fiszkach i pytaniach ze wszystkich przedmiotów (wielkość liter i polskie znaki nie mają znaczenia).</p>`;
      return;
    }
    const hit = (text) => { const f = fold(text); return words.every((w) => f.includes(w)); };
    const notes = [], cards = [], quiz = [];
    SUBJECTS.forEach((sub) => sub.topics.forEach((t) => {
      noteSections(t).forEach((sec) => {
        const text = plain(sec.title + " " + sec.body);
        if (hit(text)) notes.push({ sub, t, sec, text });
      });
      (t.flashcards || []).forEach(([q, a]) => { if (hit(q + " " + a)) cards.push({ sub, t, q, a }); });
      (t.quiz || []).forEach((q) => { if (hit(q.q + " " + q.o[q.a])) quiz.push({ sub, t, q }); });
    }));
    const LIMIT = 40;
    const where = (sub, t, extra) => `<div class="res-where">${sub.icon} ${esc(sub.short)} · ${esc(t.title)}${extra ? ` › ${esc(extra)}` : ""}</div>`;
    const group = (title, list, item) => list.length ? `
      <h2>${title} <span class="muted">(${list.length})</span></h2>
      <div class="results">${list.slice(0, LIMIT).map(item).join("")}</div>
      ${list.length > LIMIT ? `<p class="muted">…i jeszcze ${list.length - LIMIT}. Doprecyzuj wyszukiwanie.</p>` : ""}` : "";
    const total = notes.length + cards.length + quiz.length;
    box.innerHTML = !total ? `<div class="empty">Nic nie znalazłam dla „${esc(query)}”. Spróbuj innego słowa albo krótszej formy (np. „obron” zamiast „obronnych”).</div>` :
      group("📖 Notatki", notes, (r) => `<a class="result" href="#/s/${r.sub.id}/t/${r.t.id}/notatka/${r.sec.h}">${where(r.sub, r.t, r.sec.title)}<div class="res-text">${snippet(r.text, words)}</div></a>`) +
      group("🃏 Fiszki", cards, (r) => `<a class="result" href="#/s/${r.sub.id}/t/${r.t.id}/fiszki">${where(r.sub, r.t)}<div class="res-q">${snippet(r.q, words, 200)}</div><div class="res-text">${snippet(r.a, words, 90)}</div></a>`) +
      group("✅ Pytania z quizów", quiz, (r) => `<a class="result" href="#/s/${r.sub.id}/t/${r.t.id}/quiz">${where(r.sub, r.t)}<div class="res-q">${snippet(r.q.q, words, 200)}</div><div class="res-text">✓ ${snippet(r.q.o[r.q.a], words, 90)}</div></a>`);
  }

  // ---------- zakładki ----------
  function viewMarks() {
    document.title = "Zakładki – nauka";
    const items = Object.entries(store.marks).map(([key, m]) => {
      const [sid, tid, h] = key.split("/");
      const sub = getSubject(sid);
      const t = sub && sub.topics.find((x) => x.id === tid);
      return t ? { key, m, sub, t, h } : null;
    }).filter(Boolean);
    const bySubject = SUBJECTS.map((sub) => ({ sub, list: items.filter((x) => x.sub === sub).sort((a, b) => b.m.at - a.m.at) })).filter((g) => g.list.length);
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>⭐ Zakładki</h1>
      ${!items.length ? `<div class="empty"><p><strong>Nie masz jeszcze zakładek.</strong></p><p>W notatce dotknij ☆ przy nagłówku sekcji, a pojawi się tutaj – np. trudne fragmenty do powtórki przed egzaminem.</p></div>` :
      bySubject.map(({ sub, list }) => `
        <h2>${sub.icon} ${esc(sub.short)}</h2>
        <div class="results">
          ${list.map((x) => `
            <div class="mark-row" style="--accent:${sub.color}">
              <a class="result" href="#/s/${sub.id}/t/${x.t.id}/notatka/${x.h}">
                <div class="res-where">${esc(x.t.title)}</div>
                <div class="res-q">★ ${esc(x.m.t)}</div>
              </a>
              <button class="mark-del" data-action="bookmark-del" data-key="${x.key}" aria-label="Usuń zakładkę">✕</button>
            </div>`).join("")}
        </div>`).join("")}`;
  }

  // ---------- statystyki tygodnia ----------
  const WEEKDAYS = ["nd", "pn", "wt", "śr", "cz", "pt", "sb"];
  function dayLabel(key, long) {
    const [y, m, d] = key.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return long ? date.toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long" }) : WEEKDAYS[date.getDay()];
  }
  function dayDetail(key) {
    const d = dayStats(key);
    const label = key === dayKey() ? "Dziś" : dayLabel(key, true).replace(/^./, (c) => c.toUpperCase());
    if (!d.n) return `<strong>${label}:</strong> bez nauki.`;
    const subs = Object.entries(d.s).sort((a, b) => b[1] - a[1]).map(([id, n]) => { const sub = getSubject(id); return sub ? `${sub.icon} ${esc(sub.short)}: ${n}` : ""; }).filter(Boolean).join(" · ");
    return `<strong>${label}:</strong> ${d.n} ${plural(d.n, "odpowiedź", "odpowiedzi", "odpowiedzi")}, ${Math.round((d.ok / d.n) * 100)}% dobrych${d.m ? `, ${d.m} ${plural(d.m, "nowo opanowana fiszka", "nowo opanowane fiszki", "nowo opanowanych fiszek")}` : ""}${goalMet(key) ? " · cel ✓" : ""}<br><span class="muted">${subs}</span>`;
  }
  function viewStats() {
    document.title = "Statystyki – nauka";
    const today = dayKey();
    const week = [6, 5, 4, 3, 2, 1, 0].map((n) => shiftDay(today, -n));
    const prevWeek = week.map((k) => shiftDay(k, -7));
    const sum = (keys, f) => keys.reduce((acc, k) => acc + (dayStats(k)[f] || 0), 0);
    const n = sum(week, "n"), ok = sum(week, "ok"), m = sum(week, "m"), prevN = sum(prevWeek, "n");
    const goalDays = week.filter(goalMet).length;
    const max = Math.max(store.goal, ...week.map((k) => dayStats(k).n)) * 1.15;
    const streak = currentStreak();
    const perSubject = SUBJECTS.map((sub) => ({ sub, n: week.reduce((acc, k) => acc + (dayStats(k).s[sub.id] || 0), 0) })).filter((x) => x.n).sort((a, b) => b.n - a.n);
    const subMax = perSubject.length ? perSubject[0].n : 1;
    let trend = "";
    if (prevN && n) {
      const diff = Math.round(((n - prevN) / prevN) * 100);
      trend = diff >= 0 ? `▲ ${diff}% więcej niż w poprzednim tygodniu` : `▼ ${-diff}% mniej niż w poprzednim tygodniu`;
    } else if (n && !prevN) trend = "Pierwszy tydzień nauki w aplikacji 🌱";
    let text;
    if (!n) text = "W tym tygodniu jeszcze nic – ale od dziś możemy to zmienić! 🐾";
    else if (goalDays >= 5) text = `Cel zrobiony przez ${goalDays} dni na 7 – jesteś niesamowita! 😻`;
    else if (goalDays >= 1) text = `Cel osiągnięty ${goalDays} ${plural(goalDays, "raz", "razy", "razy")} w tym tygodniu. Każdy dzień się liczy 💗`;
    else text = "Już coś jest! Spróbuj dobić do celu choć raz w tym tygodniu 🌱";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>📊 Statystyki tygodnia</h1>
      <p class="muted">Ostatnie 7 dni · ${dayLabel(week[0], true)} – dziś</p>
      <div class="tiles">
        <div class="tile"><b>${n}</b><span>${plural(n, "odpowiedź", "odpowiedzi", "odpowiedzi")}</span></div>
        <div class="tile"><b>${n ? Math.round((ok / n) * 100) + "%" : "–"}</b><span>dobrych odpowiedzi</span></div>
        <div class="tile"><b>${m}</b><span>nowo opanowanych fiszek</span></div>
        <div class="tile"><b>${goalDays}/7</b><span>dni z celem</span></div>
        <div class="tile"><b>🔥 ${streak}</b><span>seria (rekord: ${bestStreak()})</span></div>
      </div>
      ${trend ? `<p class="trend">${trend}</p>` : ""}
      <div class="panel chart-panel">
        <div class="chart-title">Odpowiedzi dziennie</div>
        <div class="week-chart" role="img" aria-label="Odpowiedzi w ostatnich 7 dniach: ${week.map((k) => `${dayLabel(k)} ${dayStats(k).n}`).join(", ")}">
          <div class="wc-goal" style="bottom:${(store.goal / max) * 100}%"><span>cel ${store.goal}</span></div>
          ${week.map((k) => {
            const v = dayStats(k).n;
            return `<button class="wc-col${goalMet(k) ? " met" : ""}${k === today ? " sel" : ""}" data-action="stat-day" data-day="${k}" aria-label="${dayLabel(k, true)}: ${v}">
              <span class="wc-val">${v || ""}</span>
              <span class="wc-bar" style="height:${(v / max) * 100}%"></span>
            </button>`;
          }).join("")}
        </div>
        <div class="wc-labels">${week.map((k) => `<span${k === today ? ' class="today-l"' : ""}>${k === today ? "dziś" : dayLabel(k)}</span>`).join("")}</div>
        <div class="wc-legend"><span><i class="lg met"></i>cel osiągnięty</span><span><i class="lg"></i>poniżej celu</span><span><i class="lg goal"></i>dzienny cel</span></div>
        <div class="wc-detail" id="wc-detail">${dayDetail(today)}</div>
      </div>
      ${buddy(text, goalDays ? "happy" : "")}
      ${perSubject.length ? `
      <h2>Przedmioty w tym tygodniu</h2>
      <div class="panel subj-bars">
        ${perSubject.map(({ sub, n: v }) => `
          <div class="sb-row">
            <span class="sb-name">${sub.icon} ${esc(sub.short)}</span>
            <span class="sb-track"><span class="sb-fill" style="width:${(v / subMax) * 100}%;background:${sub.color}"></span></span>
            <span class="sb-val">${v}</span>
          </div>`).join("")}
      </div>` : ""}
      <h2>🎯 Dzienny cel</h2>
      <div class="panel">
        <p>Ile odpowiedzi dziennie (fiszki, quizy, pytania otwarte, egzamin)?</p>
        <div class="goal-pick">
          ${GOALS.map((g) => `<button class="btn${g === store.goal ? " primary" : ""}" data-action="set-goal" data-goal="${g}">${g}</button>`).join("")}
        </div>
        <p class="muted small-note">Seria dni rośnie za każdy dzień z osiągniętym celem. Jeśli dziś jeszcze nie zrobiłaś celu, seria z poprzednich dni nadal trwa do północy.</p>
      </div>`;
  }

  // ---------- gra w pary ----------
  // 6 krótkich fiszek: dotknij pytanie, potem pasującą odpowiedź; liczy się czas i pomyłki
  const MATCH_PAIRS = 6;
  // krótkie fiszki + dodatkowe pary z pola „pairs” tematu (skrócone wersje dłuższych fiszek)
  function matchCards(subject, topicId) {
    const topics = topicId ? subject.topics.filter((t) => t.id === topicId) : subject.topics;
    const pairs = topics.flatMap((t) => (t.pairs || []).map(([q, a]) => ({ key: subject.id + ":p:" + hash(q), q, a, topic: t.title })));
    return subjectCards(subject, topicId).filter((c) => c.q.length <= 70 && c.a.length <= 80).concat(pairs);
  }
  function startMatch(subject, topicId) {
    const pool = shuffle(matchCards(subject, topicId));
    // bez powtórzeń tej samej odpowiedzi (np. dwa pytania z odpowiedzią „Freud”)
    const seen = new Set();
    const cards = pool.filter((c) => { const k = fold(c.a); if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, MATCH_PAIRS);
    session = {
      type: "match", subject, topicId, cards, left: shuffle(cards.map((_, i) => i)), right: shuffle(cards.map((_, i) => i)),
      done: new Set(), pickL: null, pickR: null, wrong: 0, started: Date.now(), wrongPair: null
    };
    say(session, pickOne(["Znajdź pary! Dotknij pytanie, a potem odpowiedź 🧩", "Szybko i bez stresu – pomyłki to nic 🐾", "Gramy? Ja trzymam kciuki 😺"]));
    renderMatch();
  }
  function renderMatch() {
    const s = session;
    const back = s.topicId ? `#/s/${s.subject.id}/t/${s.topicId}` : `#/s/${s.subject.id}`;
    if (s.done.size === s.cards.length) {
      const secs = Math.round((Date.now() - s.started) / 1000);
      const key = s.subject.id + "/" + (s.topicId || "all");
      const prev = store.games.best[key];
      const record = !prev || secs < prev;
      if (!s.saved) {
        s.saved = true;
        store.games.match = (store.games.match || 0) + 1;
        if (record) store.games.best[key] = secs;
        saveStore();
        checkCats();
      }
      const text = s.wrong === 0 ? "Bez ani jednej pomyłki! Jesteś niesamowita 😻" : record && prev ? "Nowy rekord czasu! 🏆" : s.wrong <= 2 ? "Super! Prawie bez pomyłek 💪" : "Udało się! Za każdym razem będzie szybciej 🌱";
      app.innerHTML = `
        <a class="back" href="${back}">‹ Wróć</a>
        <div class="done">
          <div class="done-emoji">🧩</div>
          <h2>Wszystkie pary!</h2>
          <p>Czas: <strong>${secs} s</strong> · pomyłki: <strong>${s.wrong}</strong>${prev ? ` · rekord: <strong>${Math.min(prev, secs)} s</strong>` : ""}</p>
          ${buddy(text, s.wrong <= 2 ? "happy" : "", true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="restart-match">Jeszcze raz</button>
            <a class="btn" href="${back}">Wróć</a>
          </div>
        </div>`;
      return;
    }
    const tile = (side, i) => {
      const c = s.cards[i];
      const done = s.done.has(i);
      const picked = side === "L" ? s.pickL === i : s.pickR === i;
      const bad = s.wrongPair && s.wrongPair[side] === i;
      return `<button class="mt mt-${side}${done ? " done" : ""}${picked ? " picked" : ""}${bad ? " bad" : ""}" data-action="match-pick" data-side="${side}" data-i="${i}" ${done ? "disabled" : ""}>${esc(side === "L" ? c.q : c.a)}</button>`;
    };
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">pary: ${s.done.size} / ${s.cards.length} · pomyłki: ${s.wrong}</span>
      </div>
      <div class="match-board" style="--accent:${s.subject.color}">
        <div class="match-col">${s.left.map((i) => tile("L", i)).join("")}</div>
        <div class="match-col">${s.right.map((i) => tile("R", i)).join("")}</div>
      </div>
      ${sessionBuddy(s)}`;
    s.wrongPair = null;
  }
  function pickMatch(side, i) {
    const s = session;
    if (side === "L") s.pickL = s.pickL === i ? null : i;
    else s.pickR = s.pickR === i ? null : i;
    if (s.pickL !== null && s.pickR !== null) {
      const ok = s.pickL === s.pickR;
      if (ok) s.done.add(s.pickL);
      else { s.wrong++; s.wrongPair = { L: s.pickL, R: s.pickR }; }
      react(s, ok ? 2 : 0, logAnswer(s.subject, ok, false));
      s.pickL = s.pickR = null;
    }
    renderMatch();
  }

  // ---------- tryb skupienia (pomodoro) ----------
  // licznik działa w tle w całej aplikacji (pastylka w rogu), stan przetrwa odświeżenie strony
  const FOCUS_KEY = "nauka-skupienie";
  const FOCUS_PRESETS = [[15, 3], [25, 5], [45, 10], [50, 10]];
  let focusState = (() => {
    try { return JSON.parse(localStorage.getItem(FOCUS_KEY)) || null; } catch (e) { return null; }
  })() || { phase: "idle", end: null, left: null, work: 25, rest: 5 };
  let audioCtx = null;
  function saveFocus() {
    try { localStorage.setItem(FOCUS_KEY, JSON.stringify(focusState)); } catch (e) { /* bez zapisu */ }
  }
  function focusLeft() {
    const f = focusState;
    if (f.phase === "idle") return f.work * 60000;
    return f.left !== null ? f.left : Math.max(0, f.end - Date.now());
  }
  function beep() {
    try {
      if (!audioCtx) return;
      [0, 0.35, 0.7].forEach((t, i) => {
        const o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.frequency.value = [660, 880, 990][i];
        g.gain.setValueAtTime(0.0001, audioCtx.currentTime + t);
        g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + t + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + t + 0.3);
        o.connect(g).connect(audioCtx.destination);
        o.start(audioCtx.currentTime + t);
        o.stop(audioCtx.currentTime + t + 0.32);
      });
    } catch (e) { /* bez dźwięku */ }
  }
  function focusAction(act, el) {
    const f = focusState;
    if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { audioCtx = null; } }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    if (act === "focus-start") { f.phase = "focus"; f.end = Date.now() + f.work * 60000; f.left = null; }
    else if (act === "focus-pause") { f.left = Math.max(0, f.end - Date.now()); }
    else if (act === "focus-resume") { f.end = Date.now() + f.left; f.left = null; }
    else if (act === "focus-reset") { if (f.phase !== "idle" && !confirm("Przerwać i wyzerować licznik?")) return; f.phase = "idle"; f.end = f.left = null; }
    else if (act === "focus-skip") { focusPhaseEnd(true); return; }
    else if (act === "focus-preset" && f.phase === "idle") { [f.work, f.rest] = el.dataset.p.split("/").map(Number); }
    saveFocus();
    focusTick();
    if (currentView === "focus") viewFocus();
  }
  function focusPhaseEnd(skipped) {
    const f = focusState;
    if (f.phase === "focus") {
      if (!skipped) {
        const key = dayKey();
        store.focus.sessions = (store.focus.sessions || 0) + 1;
        store.focus.minutes = (store.focus.minutes || 0) + f.work;
        store.focus.days[key] = (store.focus.days[key] || 0) + f.work;
        saveStore();
        checkCats();
      }
      f.phase = "break";
      f.end = Date.now() + f.rest * 60000;
      f.left = null;
      if (!skipped) { beep(); focusToast("☕ Koniec skupienia! Czas na przerwę – wstań, rozciągnij się, napij się wody 💧"); }
    } else if (f.phase === "break") {
      f.phase = "idle";
      f.end = f.left = null;
      if (!skipped) { beep(); focusToast("🍅 Przerwa się skończyła. Gotowa na kolejną rundę?"); }
    }
    saveFocus();
    focusTick();
    if (currentView === "focus") viewFocus();
  }
  function focusToast(text) {
    const t = document.createElement("a");
    t.className = "cat-toast focus-toast";
    t.href = "#/skupienie";
    t.innerHTML = `<span class="cat-toast-img">${petCatSvg(CATS[0])}</span><span>${text}</span>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("show")));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 500); }, 8000);
  }
  const focusPill = document.createElement("a");
  focusPill.className = "focus-pill";
  focusPill.href = "#/skupienie";
  document.body.appendChild(focusPill);
  function focusTick() {
    const f = focusState;
    if (f.phase !== "idle" && f.left === null && f.end <= Date.now()) return focusPhaseEnd(false);
    const left = focusLeft();
    const txt = timeLeftText(left);
    focusPill.textContent = (f.phase === "focus" ? "🍅 " : "☕ ") + txt + (f.left !== null ? " ⏸" : "");
    focusPill.classList.toggle("show", f.phase !== "idle" && currentView !== "focus");
    focusPill.classList.toggle("break", f.phase === "break");
    const big = document.querySelector(".focus-time");
    if (big) {
      big.textContent = txt;
      const total = (f.phase === "break" ? f.rest : f.work) * 60000;
      document.querySelector(".focus-ring").style.setProperty("--p", f.phase === "idle" ? 0 : Math.round((1 - left / total) * 1000) / 10);
    }
  }
  setInterval(focusTick, 1000);
  function viewFocus() {
    document.title = "Skupienie – nauka";
    const f = focusState;
    const paused = f.left !== null;
    const today = store.focus.days[dayKey()] || 0;
    const cat = unlockedCats().find((c) => c.id === "spioch") || CATS[0];
    const label = f.phase === "focus" ? (paused ? "Pauza" : "Skupienie – kotek śpi, Ty się uczysz 🤫") : f.phase === "break" ? "Przerwa! Wstań, rozciągnij się, napij się wody 💧" : "Gotowa? Wybierz długość i start!";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>🍅 Tryb skupienia</h1>
      <div class="focus-wrap ${f.phase}${paused ? " paused" : ""}">
        <div class="focus-ring" style="--p:0">
          <div class="focus-inner">
            <span class="focus-cat ${f.phase === "focus" && !paused ? "sleeping" : f.phase === "break" ? "awake" : ""}">${petCatSvg(cat)}${f.phase === "focus" && !paused ? `<span class="zzz">z<b>z</b><i>z</i></span>` : ""}</span>
            <span class="focus-time">${timeLeftText(focusLeft())}</span>
          </div>
        </div>
        <p class="focus-label">${label}</p>
        <div class="actions center">
          ${f.phase === "idle" ? `<button class="btn primary big-ish" data-action="focus-start">▶ Start (${f.work} min)</button>` : `
            ${paused ? `<button class="btn primary" data-action="focus-resume">▶ Wznów</button>` : `<button class="btn primary" data-action="focus-pause">⏸ Pauza</button>`}
            <button class="btn" data-action="focus-skip">${f.phase === "focus" ? "⏭ Do przerwy" : "⏭ Koniec przerwy"}</button>
            <button class="btn ghost" data-action="focus-reset">✕ Przerwij</button>`}
        </div>
        ${f.phase === "idle" ? `<div class="focus-presets">${FOCUS_PRESETS.map(([w, r]) => `<button class="btn small${w === f.work && r === f.rest ? " primary" : ""}" data-action="focus-preset" data-p="${w}/${r}">${w} + ${r} min</button>`).join("")}</div>` : ""}
      </div>
      <div class="tiles">
        <div class="tile"><b>${today}</b><span>min skupienia dziś</span></div>
        <div class="tile"><b>${store.focus.sessions || 0}</b><span>wszystkich sesji</span></div>
        <div class="tile"><b>${Math.round((store.focus.minutes || 0) / 6) / 10}</b><span>godzin łącznie</span></div>
      </div>
      <div class="panel focus-tips">
        <p><strong>Jak to działa?</strong> Uczysz się ${f.work} minut, potem ${f.rest} minut przerwy. Licznik działa dalej, gdy przejdziesz do fiszek czy notatek – w rogu ekranu zobaczysz 🍅 z czasem. Na koniec rundy zabrzmi krótki dźwięk (jeśli iPad nie jest wyciszony).</p>
        <p class="muted small-note">📵 Telefon odłóż ekranem w dół · 💧 woda pod ręką · jedna rzecz naraz.</p>
      </div>`;
    focusTick();
  }

  // ---------- zadania ze statystyki (generowane) ----------
  // za każdym razem nowe liczby; zapis liczb jak w polskim APA (przecinek, zero przed przecinkiem)
  const STATEX_SESSION = 10;
  const rint = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const num = (x, d = 2) => x.toFixed(d).replace(".", ",").replace(/^-/, "−");
  // opcje bez powtórzeń, poprawna na losowym miejscu
  function mc(correct, wrong) {
    const o = [correct];
    wrong.forEach((w) => { if (o.length < 4 && !o.includes(w)) o.push(w); });
    const order = shuffle(o.map((_, i) => i));
    return { o: order.map((i) => o[i]), a: order.indexOf(0) };
  }
  const STAT_TESTS = ["test t-Studenta dla prób niezależnych", "test U Manna-Whitneya", "test t-Studenta dla prób zależnych", "test Wilcoxona", "jednoczynnikowa ANOVA", "test Kruskala-Wallisa", "korelacja r Pearsona", "korelacja rho Spearmana", "test chi-kwadrat", "dwuczynnikowa ANOVA", "ANOVA z powtarzanymi pomiarami", "test t-Studenta dla jednej próby"];
  const VARS = ["poziom lęku", "samoocenę", "empatię", "czas reakcji", "satysfakcję z życia", "poziom stresu", "wynik testu pamięci", "motywację do nauki"];
  const STAT_GEN = [
    () => {
      const n1 = rint(10, 45), n2 = rint(10, 45), df = n1 + n2 - 2;
      return { cat: "Stopnie swobody", q: `Test t dla prób niezależnych: grupa A ma n = ${n1}, grupa B n = ${n2}. Ile wynosi df?`, ...mc(String(df), [String(df + 1), String(df + 2), String(Math.min(n1, n2) - 1)]), e: `Próby niezależne: df = N − 2 = ${n1} + ${n2} − 2 = ${df}.` };
    },
    () => {
      const n = rint(12, 60);
      return { cat: "Stopnie swobody", q: `Te same ${n} ${plural(n, "osoba", "osoby", "osób")} zbadano przed i po treningu (test t dla prób zależnych). Ile wynosi df?`, ...mc(String(n - 1), [String(n - 2), String(n), String(2 * n - 2)]), e: `Próby zależne (i jedna próba): df = N − 1 = ${n - 1}.` };
    },
    () => {
      const k = rint(3, 5), n = rint(8, 25), N = k * n;
      return { cat: "Stopnie swobody", q: `Jednoczynnikowa ANOVA: ${k} ${plural(k, "grupa", "grupy", "grup")} po ${n} osób (N = ${N}). Jak zapiszesz stopnie swobody F?`, ...mc(`F(${k - 1}, ${N - k})`, [`F(${k}, ${N})`, `F(${k - 1}, ${N - 1})`, `F(${N - k}, ${k - 1})`]), e: `Między grupami: k − 1 = ${k - 1}; wewnątrz grup: N − k = ${N - k}.` };
    },
    () => {
      const alpha = Math.random() < 0.7 ? 0.05 : 0.01;
      const p = pick([0.001, 0.003, 0.008, 0.012, 0.02, 0.034, 0.041, 0.049, 0.051, 0.06, 0.09, 0.12, 0.27]);
      const sig = p < alpha;
      const yes = "odrzucamy H0 – wynik jest istotny statystycznie", no = "brak podstaw do odrzucenia H0 – wynik nieistotny";
      return { cat: "Istotność", q: `Przyjęto α = ${num(alpha)}. Otrzymano p = ${num(p, 3)}. Jaka decyzja?`, ...mc(sig ? yes : no, [sig ? no : yes, "przyjmujemy H0 jako prawdziwą", "udowodniliśmy hipotezę badawczą"]), e: `Porównujemy p z α: ${num(p, 3)} ${sig ? "<" : "≥"} ${num(alpha)}. H0 nigdy nie „przyjmujemy jako prawdziwej” i niczego nie „udowadniamy” – co najwyżej odrzucamy H0 albo nie mamy podstaw, by ją odrzucić.` };
    },
    () => {
      const M = rint(4, 20) * 5, SD = rint(2, 6) * 2, z = pick([-2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5]), X = M + z * SD;
      return { cat: "Wynik z", q: `W teście M = ${M}, SD = ${SD}. Osoba uzyskała X = ${num(X, X % 1 ? 1 : 0)}. Ile wynosi jej wynik z?`, ...mc(num(z), [num(-z), num(X - M, (X - M) % 1 ? 1 : 0), num(z / 2)]), e: `z = (X − M) / SD = (${num(X, X % 1 ? 1 : 0)} − ${M}) / ${SD} = ${num(z)}. Wynik ${z > 0 ? "powyżej" : "poniżej"} średniej o ${num(Math.abs(z))} SD.` };
    },
    () => {
      const [X, pct] = pick([[70, "2%"], [85, "16%"], [100, "50%"], [115, "84%"], [130, "98%"]]);
      return { cat: "Rozkład normalny", q: `IQ ma rozkład N(100, 15). Jaki odsetek populacji ma wynik niższy niż IQ = ${X}?`, ...mc(pct, ["2%", "16%", "50%", "84%", "98%", "34%"].filter((x) => x !== pct).sort(() => Math.random() - 0.5)), e: `IQ ${X} to z = ${num((X - 100) / 15, 0)}. Reguła: ±1 SD obejmuje ok. 68%, ±2 SD ok. 95% wyników, więc poniżej −2 SD jest ok. 2%, poniżej −1 SD ok. 16%, poniżej +1 SD ok. 84%, poniżej +2 SD ok. 98%.` };
    },
    () => {
      const sten = rint(1, 10), scale = pick(["ekstrawersji", "neurotyczności", "otwartości na doświadczenie", "ugodowości", "sumienności"]);
      const lvl = sten <= 4 ? "niski" : sten <= 6 ? "przeciętny" : "wysoki";
      return { cat: "Steny", q: `Osoba uzyskała ${sten} ${plural(sten, "sten", "steny", "stenów")} w skali ${scale} (NEO-FFI). Jaki to wynik?`, ...mc(lvl, ["niski", "przeciętny", "wysoki", "nie da się ocenić bez wyniku surowego"].filter((x) => x !== lvl)), e: `Skala stenowa: 1–10, M = 5,5, SD = 2. Interpretacja: 1–4 niskie, 5–6 przeciętne, 7–10 wysokie.` };
    },
    () => {
      const v = pick(VARS);
      const sc = pick([
        [`Porównujesz ${v} kobiet i mężczyzn. Rozkłady są normalne, wariancje jednorodne.`, 0],
        [`Porównujesz ${v} kobiet i mężczyzn, ale rozkład w obu grupach jest silnie skośny.`, 1],
        [`Mierzysz ${v} u tych samych osób przed i po warsztacie (rozkład różnic normalny).`, 2],
        [`Mierzysz ${v} u tych samych osób przed i po warsztacie, rozkład różnic odbiega od normalnego.`, 3],
        [`Porównujesz ${v} studentów trzech kierunków (rozkłady normalne, wariancje jednorodne).`, 4],
        [`Porównujesz ${v} w czterech grupach wiekowych; rozkłady są dalekie od normalnego.`, 5],
        [`Sprawdzasz, czy ${v} wiąże się liniowo z liczbą godzin snu (obie zmienne ilościowe, rozkłady normalne).`, 6],
        [`Sprawdzasz związek między miejscem w rankingu klasy a ${v} mierzoną na skali porządkowej.`, 7],
        [`Sprawdzasz, czy płeć wiąże się z wyborem kierunku studiów (obie zmienne nominalne).`, 8],
        [`Badasz wpływ płci i rodzaju instrukcji (2 × 2) na ${v} oraz ich interakcję.`, 9],
        [`Mierzysz ${v} u tych samych osób trzy razy: przed, w trakcie i po terapii (rozkłady normalne).`, 10],
        [`Sprawdzasz, czy średnia IQ Twojej grupy różni się od normy populacyjnej M = 100.`, 11]
      ]);
      const correct = STAT_TESTS[sc[1]];
      return { cat: "Wybór testu", q: `${sc[0]} Jaki test wybierzesz?`, ...mc(correct, shuffle(STAT_TESTS.filter((t) => t !== correct))), e: `Właściwy: ${correct}. Pytaj siebie: ile grup/pomiarów? te same czy różne osoby? jaka skala i czy rozkład jest normalny? Nieparametryczne odpowiedniki: U Manna-Whitneya (t niezależne), Wilcoxon (t zależne), Kruskal-Wallis (ANOVA), rho Spearmana (r Pearsona).` };
    },
    () => {
      const d = pick([0.1, 0.25, 0.35, 0.55, 0.65, 0.9, 1.1]);
      const lvl = d < 0.2 ? "znikomy" : d < 0.5 ? "mały" : d < 0.8 ? "średni" : "duży";
      return { cat: "Wielkość efektu", q: `d Cohena = ${num(d)}. Jak (klasycznie) ocenisz wielkość efektu?`, ...mc(lvl, ["znikomy", "mały", "średni", "duży"].filter((x) => x !== lvl)), e: `Progi d Cohena: 0,2 mały, 0,5 średni, 0,8 duży (poniżej 0,2 – znikomy). d to różnica średnich w jednostkach SD.` };
    },
    () => {
      const r = pick([0.05, 0.18, 0.24, 0.38, 0.45, 0.58, 0.66, 0.78, 0.86]) * (Math.random() < 0.4 ? -1 : 1);
      const a = Math.abs(r);
      const lvl = a < 0.1 ? "brak związku" : a < 0.3 ? "słaby (znikomy)" : a < 0.5 ? "umiarkowany" : a < 0.7 ? "silny" : "bardzo silny";
      return { cat: "Korelacja", q: `r = ${num(r)}. Jak ocenisz siłę związku (progi z wykładu)?`, ...mc(lvl, shuffle(["brak związku", "słaby (znikomy)", "umiarkowany", "silny", "bardzo silny"].filter((x) => x !== lvl))), e: `O sile decyduje wartość bezwzględna |r| = ${num(a)}: < 0,1 brak, 0,1–0,3 znikomy/słaby, 0,3–0,5 umiarkowany, 0,5–0,7 silny, 0,7–0,9 bardzo silny. Znak mówi tylko o kierunku (${r < 0 ? "ujemny: im więcej X, tym mniej Y" : "dodatni: im więcej X, tym więcej Y"}).` };
    },
    () => {
      const df = rint(18, 90), t = rint(200, 420) / 100, p = pick([0.002, 0.008, 0.013, 0.021, 0.034, 0.047]);
      const ok = `t(${df}) = ${num(t)}; p = ${num(p, 3)}`;
      return { cat: "Zapis APA", q: "Który zapis wyniku jest poprawny według polskiego APA 7?", ...mc(ok, [`t(${df}) = ${t.toFixed(2)}; p = .${String(p.toFixed(3)).slice(2)}`, `t = ${num(t)} (${df}); p = ${num(p, 3)}`, `t(${df})=${num(t)}; p=${num(p, 3).replace("0,", ",")}`]), e: "Polskie APA: przecinek dziesiętny i zero przed przecinkiem (także dla p), stopnie swobody w nawiasie zaraz po symbolu, spacje wokół znaku „=”, t z dwoma miejscami po przecinku." };
    },
    () => {
      const sc = pick([
        ["H0 jest w rzeczywistości prawdziwa, a badacz ją odrzucił.", "błąd I rodzaju (α)"],
        ["H0 jest w rzeczywistości fałszywa, a badacz nie odrzucił jej.", "błąd II rodzaju (β)"],
        ["H0 jest fałszywa i badacz ją odrzucił.", "poprawna decyzja"],
        ["Badacz „znalazł” efekt, którego w populacji naprawdę nie ma.", "błąd I rodzaju (α)"],
        ["W populacji efekt istnieje, ale badanie na małej próbie go nie wykryło.", "błąd II rodzaju (β)"]
      ]);
      return { cat: "Błędy decyzji", q: `${sc[0]} Co to jest?`, ...mc(sc[1], ["błąd I rodzaju (α)", "błąd II rodzaju (β)", "poprawna decyzja", "moc testu (1 − β)"].filter((x) => x !== sc[1])), e: "Błąd I rodzaju – odrzucenie prawdziwej H0 (fałszywy alarm, prawdopodobieństwo α). Błąd II rodzaju – nieodrzucenie fałszywej H0 (przeoczenie efektu, β). Moc = 1 − β – szansa wykrycia istniejącego efektu." };
    },
    () => {
      const [v, sc] = pick([["płeć", "nominalna"], ["kolor oczu", "nominalna"], ["kierunek studiów", "nominalna"], ["wykształcenie (podstawowe, średnie, wyższe)", "porządkowa"], ["miejsce w rankingu", "porządkowa"], ["temperatura w °C", "interwałowa"], ["rok urodzenia", "interwałowa"], ["czas reakcji w ms", "ilorazowa"], ["liczba błędów w teście", "ilorazowa"], ["wzrost w cm", "ilorazowa"], ["miesięczny dochód w zł", "ilorazowa"]]);
      return { cat: "Skale pomiarowe", q: `Na jakiej skali mierzona jest zmienna: ${v}?`, ...mc(sc, ["nominalna", "porządkowa", "interwałowa", "ilorazowa"].filter((x) => x !== sc)), e: "Nominalna – tylko kategorie; porządkowa – da się uporządkować; interwałowa – równe odstępy, ale umowne zero (°C, rok); ilorazowa – równe odstępy i zero bezwzględne (czas, liczba, wzrost, dochód)." };
    },
    () => {
      const n = pick([5, 7]);
      const data = Array.from({ length: n }, () => rint(1, 20));
      const sorted = data.slice().sort((a, b) => a - b);
      const med = sorted[(n - 1) / 2];
      const mean = data.reduce((a, b) => a + b, 0) / n;
      const askMean = Math.random() < 0.5 && Number.isInteger(mean * 10);
      const ok = askMean ? num(mean, 1) : String(med);
      const alt = askMean ? [String(med), num(mean + 1, 1), num(sorted[n - 1] - sorted[0], 0)] : [num(mean, 1), String(sorted[(n - 1) / 2 + 1]), String(sorted[n - 1] - sorted[0])];
      return { cat: "Statystyki opisowe", q: `Dane: ${data.join("; ")}. Ile wynosi ${askMean ? "średnia" : "mediana"}?`, ...mc(ok, alt), e: askMean ? `Średnia = suma / n = ${data.reduce((a, b) => a + b, 0)} / ${n} = ${num(mean, 1)}.` : `Mediana = środkowa wartość po uporządkowaniu: ${sorted.join("; ")} → ${med}.` };
    },
    () => {
      const sst = rint(10, 40) * 10, eta = pick([0.02, 0.06, 0.1, 0.15, 0.2, 0.3]), ssb = Math.round(sst * eta);
      const e2 = ssb / sst;
      return { cat: "Wielkość efektu", q: `ANOVA: SS między grupami = ${ssb}, SS całkowite = ${sst}. Ile wynosi η² i co oznacza?`, ...mc(`η² = ${num(e2)} – czynnik wyjaśnia ok. ${Math.round(e2 * 100)}% wariancji`, [`η² = ${num(1 - e2)} – czynnik wyjaśnia ok. ${Math.round((1 - e2) * 100)}% wariancji`, `η² = ${num(e2)} – różnica jest istotna statystycznie`, `η² = ${num(sst / ssb / 10)} – efekt jest ujemny`]), e: `η² = SS między / SS całkowite = ${ssb} / ${sst} = ${num(e2)} → ${Math.round(e2 * 100)}% wariancji zmiennej zależnej wyjaśnia czynnik. η² nie mówi o istotności.` };
    }
  ];
  function startStatex(subject) {
    let last = -1;
    const qs = Array.from({ length: STATEX_SESSION }, () => {
      let i;
      do { i = rint(0, STAT_GEN.length - 1); } while (i === last);
      last = i;
      return STAT_GEN[i]();
    });
    session = { type: "statex", subject, qs, pos: 0, chosen: null, score: 0 };
    say(session, pickOne(["Liczymy! Kartka i długopis mogą się przydać 🧮", "Każde zadanie jest nowe – możesz ćwiczyć bez końca 🐾", "Spokojnie, wzory są w wyjaśnieniach ✨"]));
    renderStatex();
  }
  function renderStatex() {
    const s = session;
    const back = `#/s/${s.subject.id}`;
    if (s.pos >= s.qs.length) {
      const pct = Math.round((s.score / s.qs.length) * 100);
      app.innerHTML = `
        <a class="back" href="${back}">‹ Wróć</a>
        <div class="done">
          <div class="done-emoji">🧮</div>
          <h2>Wynik: ${s.score} / ${s.qs.length}</h2>
          <p>Wszystkie zadania: ${store.statex.ok} dobrze z ${store.statex.n}.</p>
          ${buddy(...endSay(pct), true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="restart-statex">Nowe zadania</button>
            <a class="btn" href="${back}">Wróć</a>
          </div>
        </div>`;
      return;
    }
    const q = s.qs[s.pos];
    const answered = s.chosen !== null;
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">${s.pos + 1} / ${s.qs.length} · wynik ${s.score}</span>
      </div>
      ${sessionBar(s, Math.round((s.pos / s.qs.length) * 100))}
      <div class="quiz-card">
        <div class="fc-topic">🧮 ${esc(q.cat)}</div>
        <div class="quiz-q">${esc(q.q)}</div>
        <div class="options">${q.o.map((o, i) => {
          let cls = "option";
          if (answered) cls += i === q.a ? " correct" : i === s.chosen ? " wrong" : " dim";
          return `<button class="${cls}" data-action="statex-answer" data-i="${i}" ${answered ? "disabled" : ""}><span class="opt-letter">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`;
        }).join("")}</div>
        ${answered ? `
          <div class="explain ${s.chosen === q.a ? "ok" : "no"}"><strong>${s.chosen === q.a ? "Dobrze!" : "Niestety nie."}</strong> ${esc(q.e)}</div>
          <button class="btn primary big" style="--accent:${s.subject.color}" data-action="statex-next">${s.pos + 1 < s.qs.length ? "Dalej ›" : "Zobacz wynik"}</button>` : ""}
      </div>
      ${sessionBuddy(s)}`;
  }

  // ---------- egzamin pisemny (pytania otwarte z prawdziwych zagadnień) ----------
  function viewOpenExamIntro(subject) {
    document.title = "Egzamin pisemny – " + subject.short;
    const ex = subject.openExam;
    const pool = realQuestions(subject);
    const tries = (store.tries[subject.id + ":pis"] || []).slice().reverse();
    app.innerHTML = `
      <a class="back" href="#/s/${subject.id}">‹ ${esc(subject.short)}</a>
      <h1>🖊️ Próbny egzamin pisemny</h1>
      <p class="muted">${subject.icon} ${esc(subject.name)}</p>
      <div class="panel exam-rules" style="--accent:${subject.color}">
        <div class="rule"><b>${ex.questions}</b><span>pytania otwarte</span></div>
        <div class="rule"><b>${ex.minutes}</b><span>minut</span></div>
        <div class="rule"><b>${pool.length}</b><span>zagadnień w puli</span></div>
      </div>
      ${ex.note ? `<p class="exam-note">ℹ️ ${esc(ex.note)}</p>` : ""}
      <p>Losuję ${ex.questions} zagadnienia z prawdziwej listy egzaminacyjnej. Piszesz odpowiedzi na czas, a po oddaniu dostajesz wzorcowe odpowiedzi, listę kluczowych pojęć, których użyłaś, i oceniasz każdą odpowiedź (0–2 pkt).</p>
      <button class="btn primary big" style="--accent:${subject.color}" data-action="openexam-start">Rozpocznij egzamin pisemny</button>
      ${tries.length ? `<h2>Twoje podejścia</h2><div class="tries">${tries.slice(0, 10).map((t) => `
        <div class="try ${t.score / t.max >= 0.5 ? "pass" : "fail"}">
          <span>${new Date(t.at).toLocaleDateString("pl-PL", { day: "numeric", month: "short" })}</span>
          <strong>${t.score}/${t.max} pkt</strong>
          <span>${Math.ceil(t.secs / 60)} min</span>
        </div>`).join("")}</div>` : ""}`;
  }
  function startOpenExam(subject) {
    const ex = subject.openExam;
    const qs = shuffle(realQuestions(subject)).slice(0, ex.questions);
    session = { type: "openexam", subject, qs, answers: qs.map(() => ""), started: Date.now(), end: Date.now() + ex.minutes * 60000, finished: false, graded: qs.map(() => null) };
    clearInterval(examTimer);
    examTimer = setInterval(() => {
      const s = session;
      if (!s || s.type !== "openexam" || s.finished) return clearInterval(examTimer);
      const left = s.end - Date.now();
      if (left <= 0) return finishOpenExam();
      const el = document.querySelector(".exam-timer");
      if (el) { el.textContent = "⏱ " + timeLeftText(left); el.classList.toggle("low", left < 5 * 60000); }
    }, 1000);
    app.innerHTML = `
      <div class="session-top">
        <button class="back linkish" data-action="openexam-quit">‹ Przerwij</button>
        <span class="exam-timer">⏱ ${timeLeftText(session.end - Date.now())}</span>
      </div>
      ${session.qs.map((q, i) => `
        <div class="quiz-card open-card" style="--accent:${subject.color}">
          <div class="fc-topic">Pytanie ${i + 1} z ${session.qs.length} · ${esc(q.topic)}</div>
          <div class="quiz-q">${esc(q.q)}</div>
          <textarea class="open-answer oe-answer" data-i="${i}" rows="9" placeholder="Twoja odpowiedź…"></textarea>
        </div>`).join("")}
      <button class="btn primary big" style="--accent:${subject.color}" data-action="openexam-finish">Oddaj egzamin</button>`;
  }
  function collectOpenExam() {
    app.querySelectorAll(".oe-answer").forEach((ta) => { session.answers[Number(ta.dataset.i)] = ta.value; });
  }
  function finishOpenExam() {
    const s = session;
    if (!s || s.type !== "openexam" || s.finished) return;
    collectOpenExam();
    s.finished = true;
    s.secs = Math.round((Math.min(Date.now(), s.end) - s.started) / 1000);
    clearInterval(examTimer);
    renderOpenExamReview();
    window.scrollTo(0, 0);
  }
  function renderOpenExamReview() {
    const s = session;
    const all = s.graded.every((g) => g !== null);
    const score = s.graded.reduce((a, g) => a + (g || 0), 0);
    const max = s.qs.length * 2;
    app.innerHTML = `
      <a class="back" href="#/s/${s.subject.id}/egzamin-pisemny" data-action="openexam-intro">‹ Wróć</a>
      <h1>🖊️ Sprawdź swoje odpowiedzi</h1>
      <p class="muted">Czas: ${Math.floor(s.secs / 60)} min ${s.secs % 60} s. Porównaj odpowiedź ze wzorem i oceń: 0 – nie umiałam, 1 – częściowo, 2 – dobrze.</p>
      ${s.qs.map((q, i) => {
        const ans = fold(s.answers[i]);
        const used = q.terms.filter((t) => termUsed(t, ans));
        return `
        <div class="quiz-card open-card review-open" style="--accent:${s.subject.color}">
          <div class="fc-topic">Pytanie ${i + 1} · ${esc(q.topic)}</div>
          <div class="quiz-q">${esc(q.q)}</div>
          <div class="my-answer"><div class="label">Twoja odpowiedź</div>${s.answers[i].trim() ? esc(s.answers[i]).replace(/\n/g, "<br>") : "<em>brak odpowiedzi</em>"}</div>
          ${q.terms.length ? `<div class="terms"><div class="terms-head">Kluczowe pojęcia: <strong>${used.length} / ${q.terms.length}</strong></div>${q.terms.map((t) => `<span class="term ${termUsed(t, ans) ? "yes" : "no"}">${termUsed(t, ans) ? "✓" : "✗"} ${esc(t)}</span>`).join("")}</div>` : ""}
          <details class="model-wrap"${s.graded[i] === null ? " open" : ""}><summary>Wzorcowa odpowiedź</summary><div class="model-answer notes">${md(q.a)}</div></details>
          <div class="grade three">
            ${[0, 1, 2].map((g) => `<button class="btn ${["bad", "mid", "good"][g]}${s.graded[i] === g ? " chosen" : s.graded[i] !== null ? " faded" : ""}" data-action="openexam-grade" data-i="${i}" data-g="${g}">${g} pkt</button>`).join("")}
          </div>
        </div>`;
      }).join("")}
      ${all ? `
        <div class="done exam-result ${score / max >= 0.5 ? "pass" : "fail"}">
          <h2>${score} / ${max} pkt (${Math.round((score / max) * 100)}%)</h2>
          ${buddy(...endSay(Math.round((score / max) * 100)), true)}
          <div class="actions center">
            <button class="btn primary" style="--accent:${s.subject.color}" data-action="openexam-start">Nowy egzamin</button>
            <a class="btn" href="#/s/${s.subject.id}">Wróć do przedmiotu</a>
          </div>
        </div>` : `<p class="muted center-note">Oceń wszystkie odpowiedzi, żeby zobaczyć wynik.</p>`}`;
  }
  function gradeOpenExam(i, g) {
    const s = session;
    const first = s.graded[i] === null;
    s.graded[i] = g;
    store.open[s.qs[i].key] = g;
    let goal = false;
    if (first) goal = logAnswer(s.subject, g === 2, false);
    if (s.graded.every((x) => x !== null) && !s.saved) {
      s.saved = true;
      const k = s.subject.id + ":pis";
      const tries = store.tries[k] = store.tries[k] || [];
      tries.push({ at: new Date().toISOString(), score: s.graded.reduce((a, x) => a + x, 0), max: s.qs.length * 2, secs: s.secs });
      if (tries.length > 30) tries.splice(0, tries.length - 30);
      saveStore();
    } else saveStore();
    const y = window.scrollY;
    renderOpenExamReview();
    window.scrollTo(0, y);
    if (goal) focusToast("🏆 Cel dnia zrobiony! Jestem dumna 😻");
  }

  // ---------- plan nauki do egzaminów ----------
  function planTasks() {
    const today = dayKey();
    const ts = dayStats(today);
    const tasks = [];
    const ups = SUBJECTS.map((sub) => ({ sub, exam: examInfo(sub) }))
      .filter((x) => x.exam && x.exam.days >= 0 && hasContent(x.sub))
      .sort((a, b) => a.exam.days - b.exam.days);
    ups.forEach(({ sub, exam }) => {
      const fc = subjectCards(sub);
      const left = toLearn(sub);
      const due = dueCount(fc);
      const days = exam.days;
      if (days === 0) {
        tasks.push({ id: sub.id + ":dzis", sub, icon: "🍀", text: `Dziś egzamin z przedmiotu ${sub.short}! Tylko lekka powtórka: zakładki i „Na pamięć” z notatek.`, href: "#/zakladki" });
        return;
      }
      // ostatni dzień przed egzaminem zostaje na powtórkę
      const newPer = left ? Math.min(40, Math.ceil(left / Math.max(1, days - 1))) : 0;
      const target = Math.min(60, due + newPer);
      if (target) tasks.push({ id: sub.id + ":fiszki", sub, icon: "🃏", text: `${target} ${plural(target, "fiszka", "fiszki", "fiszek")} z przedmiotu ${sub.short}${due ? ` (w tym ${due} do powtórki)` : ""}`, href: `#/s/${sub.id}/fiszki`, goal: target, progress: ts.s[sub.id] || 0 });
      const weak = sub.topics.filter((t) => (t.quiz || []).length)
        .map((t) => ({ t, best: (store.quiz[quizKey(sub, t.id)] || {}).best }))
        .sort((a, b) => (a.best === undefined ? -1 : a.best) - (b.best === undefined ? -1 : b.best))[0];
      if (weak && (weak.best === undefined || weak.best < 80)) tasks.push({ id: sub.id + ":quiz:" + weak.t.id, sub, icon: "✅", text: `Quiz: „${weak.t.title}”${weak.best !== undefined ? ` (Twój najlepszy wynik: ${weak.best}%)` : " – jeszcze nie robiony"}`, href: `#/s/${sub.id}/quiz/${weak.t.id}` });
      if (days <= 21) {
        const real = realQuestions(sub).length;
        if (real || openQuestions(sub).length) tasks.push({ id: sub.id + ":otwarte", sub, icon: "✍️", text: `Pytania otwarte z przedmiotu ${sub.short}${real ? " (prawdziwe zagadnienia)" : ""} – jedna seria`, href: real ? `#/s/${sub.id}/zagadnienia` : `#/s/${sub.id}/otwarte` });
      }
      if (sub.exam && days <= 10) {
        const lastTry = (store.tries[sub.id] || []).slice(-1)[0];
        const ago = lastTry ? (Date.now() - new Date(lastTry.at).getTime()) / DAY : 99;
        if (ago >= 2) tasks.push({ id: sub.id + ":egzamin", sub, icon: "📝", text: `Próbny egzamin z przedmiotu ${sub.short}`, href: `#/s/${sub.id}/egzamin` });
      }
    });
    if (!ups.length) {
      SUBJECTS.forEach((sub) => {
        const due = dueCount(subjectCards(sub));
        if (due) tasks.push({ id: sub.id + ":powtorka", sub, icon: "🔁", text: `${due} ${plural(due, "fiszka", "fiszki", "fiszek")} do powtórki z przedmiotu ${sub.short}`, href: `#/s/${sub.id}/fiszki`, goal: due, progress: ts.s[sub.id] || 0 });
      });
    }
    const done = store.planDone[today] || {};
    tasks.forEach((t) => { t.done = !!done[t.id] || (t.goal && t.progress >= t.goal); });
    return tasks;
  }
  function viewPlan() {
    document.title = "Plan nauki – nauka";
    const tasks = planTasks();
    const ups = SUBJECTS.map((sub) => ({ sub, exam: examInfo(sub) })).filter((x) => x.exam && x.exam.days >= 0).sort((a, b) => a.exam.days - b.exam.days);
    const doneN = tasks.filter((t) => t.done).length;
    let text;
    if (!tasks.length) text = ups.length ? "Na dziś wszystko zrobione z góry – odpocznij albo pogłaszcz kotka 😽" : "Ustaw daty egzaminów, a ułożę Ci plan na każdy dzień 📅";
    else if (doneN === tasks.length) text = "Cały plan na dziś zrobiony! Jesteś niesamowita 🎉";
    else if (doneN) text = `Już ${doneN} z ${tasks.length}! Tak trzymać 💪`;
    else text = "Zacznij od pierwszego punktu – reszta pójdzie sama 🐾";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>📋 Plan na dziś</h1>
      <p class="muted">${new Date().toLocaleDateString("pl-PL", { weekday: "long", day: "numeric", month: "long" })} · plan liczy się sam z dat egzaminów i Twoich postępów.</p>
      ${buddy(text, doneN && doneN === tasks.length ? "happy" : "")}
      ${tasks.length ? `<div class="plan-list">${tasks.map((t) => `
        <div class="plan-item${t.done ? " plan-done" : ""}" style="--accent:${t.sub.color}">
          <button class="plan-check" data-action="plan-toggle" data-id="${esc(t.id)}" aria-label="${t.done ? "Odznacz" : "Oznacz jako zrobione"}">${t.done ? "✓" : ""}</button>
          <a class="plan-main" href="${t.href}">
            <span class="plan-text">${t.icon} ${esc(t.text)}</span>
            ${t.goal ? `<span class="plan-prog"><span style="width:${Math.min(100, Math.round((t.progress / t.goal) * 100))}%"></span></span><span class="plan-sub">dziś: ${Math.min(t.progress, t.goal)} / ${t.goal}</span>` : ""}
          </a>
        </div>`).join("")}</div>` : ""}
      ${ups.length ? `<h2>Do egzaminów</h2>
      <div class="plan-exams">${ups.map(({ sub, exam }) => {
        const left = toLearn(sub);
        const quizTopics = sub.topics.filter((t) => (t.quiz || []).length);
        const good = quizTopics.filter((t) => ((store.quiz[quizKey(sub, t.id)] || {}).best || 0) >= 80).length;
        return `<a class="plan-exam" href="#/s/${sub.id}" style="--accent:${sub.color}">
          <strong>${sub.icon} ${esc(sub.short)} – ${exam.days === 0 ? "dziś!" : exam.days === 1 ? "jutro" : `za ${exam.days} dni`}</strong>
          <span>Do opanowania: ${left} ${plural(left, "fiszka", "fiszki", "fiszek")}${exam.days > 1 && left ? ` · ok. ${Math.ceil(left / (exam.days - 1))} dziennie` : ""}</span>
          <span>Quizy na ≥ 80%: ${good} / ${quizTopics.length} tematów${sub.exam ? ` · próbne egzaminy: ${(store.tries[sub.id] || []).length}` : ""}</span>
        </a>`;
      }).join("")}</div>` : `<div class="empty"><p><strong>Brak dat egzaminów.</strong></p><p>Wejdź w przedmiot i ustaw datę egzaminu – wtedy plan rozłoży materiał na dni (z ostatnim dniem na powtórkę).</p></div>`}`;
  }

  // ---------- co nowego ----------
  // okienko z nowościami po aktualizacji (lista w data/zmiany.js); widziana wersja w osobnym kluczu
  const SEEN_KEY = "nauka-zmiany-widziane";
  const CHANGES = window.CHANGELOG || [];
  function changesList(entries) {
    return entries.map((e) => `
      <div class="whatsnew-entry">
        <div class="whatsnew-date">${esc(e.date)}</div>
        <ul>${e.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </div>`).join("");
  }
  function showWhatsNew() {
    if (!CHANGES.length) return;
    let seen = null;
    try { seen = localStorage.getItem(SEEN_KEY); } catch (e) { /* bez zapisu */ }
    const latest = CHANGES[0].v;
    if (seen === latest) return;
    // nowsze niż ostatnio widziane (przy pierwszym razie – tylko najnowszy wpis)
    const idx = seen ? CHANGES.findIndex((e) => e.v === seen) : 1;
    const fresh = CHANGES.slice(0, idx < 0 ? 3 : Math.min(idx, 3));
    const box = document.createElement("div");
    box.className = "whatsnew";
    box.innerHTML = `
      <div class="whatsnew-card" role="dialog" aria-label="Co nowego w aplikacji">
        <div class="whatsnew-head">✨ Co nowego w aplikacji</div>
        ${changesList(fresh)}
        ${buddy("Miau! Sprawdź nowości 🐾", "happy", true)}
        <button class="btn primary big" data-whatsnew="ok">Super, dzięki! 💖</button>
      </div>`;
    document.body.appendChild(box);
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("show")));
    box.addEventListener("click", (ev) => {
      if (ev.target.closest("[data-whatsnew]") || ev.target === box) {
        try { localStorage.setItem(SEEN_KEY, latest); } catch (e) { /* bez zapisu */ }
        box.classList.remove("show");
        setTimeout(() => box.remove(), 300);
      }
    });
  }
  function viewChanges() {
    document.title = "Co nowego – nauka";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>✨ Co nowego</h1>
      <p class="muted">Historia zmian w aplikacji, od najnowszych.</p>
      <div class="panel whatsnew-page">${changesList(CHANGES)}</div>`;
  }

  // ---------- zdarzenia ----------
  // ---------- kopia zapasowa ----------
  const BACKUP_APP = "nauka-drugi-rok";
  const BACKUP_FIELDS = ["cards", "quiz", "exams", "pets", "days", "goal", "bestStreak", "marks", "open", "tries", "cats", "birthday", "focus", "games", "statex", "planDone"];

  function hasProgress() {
    return Object.keys(store.cards).length + Object.keys(store.quiz).length + Object.keys(store.exams).length > 0;
  }
  function lastBackupText() {
    if (!store.lastBackup) return "jeszcze nie zrobiona";
    const days = Math.round((Date.now() - new Date(store.lastBackup).getTime()) / DAY);
    return days < 1 ? "ostatnia: dziś" : days === 1 ? "ostatnia: wczoraj" : `ostatnia: ${days} dni temu`;
  }
  function backupOverdue() {
    if (!hasProgress()) return false;
    return !store.lastBackup || Date.now() - new Date(store.lastBackup).getTime() > 7 * DAY;
  }
  function summary(data) {
    const cards = Object.keys(data.cards || {}).length;
    const known = Object.values(data.cards || {}).filter((c) => c.box >= MASTERED_BOX).length;
    const quizzes = Object.keys(data.quiz || {}).length;
    const exams = Object.keys(data.exams || {}).length;
    return `${cards} ${plural(cards, "przerobiona fiszka", "przerobione fiszki", "przerobionych fiszek")} (opanowane: ${known}), ` +
      `${quizzes} ${plural(quizzes, "wynik quizu", "wyniki quizów", "wyników quizów")}, ` +
      `${exams} ${plural(exams, "data egzaminu", "daty egzaminów", "dat egzaminów")}`;
  }

  function viewBackup(message) {
    document.title = "Kopia zapasowa – nauka";
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>💾 Kopia zapasowa</h1>
      <p class="muted">Postępy są zapisane tylko w Safari na tym iPadzie. Kopia w pliku chroni je przed wyczyszczeniem danych przeglądarki i pozwala przenieść je na inne urządzenie.</p>
      ${message ? `<div class="backup-msg ${message.type}">${message.text}</div>` : ""}
      <div class="panel backup-panel">
        <h3>Zapisz postępy do pliku</h3>
        <p>Teraz w aplikacji: <strong>${summary(store)}</strong>.</p>
        <p class="muted">Ostatnia kopia: ${store.lastBackup ? new Date(store.lastBackup).toLocaleString("pl-PL", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "jeszcze nie zrobiona"}.</p>
        <button class="btn primary big" data-action="backup-export">⬇️ Zapisz kopię</button>
        <p class="muted small-note">Na iPadzie wybierz „Zachowaj w Plikach” i np. folder iCloud Drive – wtedy kopia przetrwa nawet zmianę urządzenia. Najlepiej robić ją raz w tygodniu.</p>
      </div>
      <div class="panel backup-panel">
        <h3>Wczytaj postępy z pliku</h3>
        <p class="muted">Wybierz wcześniej zapisany plik <em>nauka-kopia-….json</em>. Obecne postępy w aplikacji zostaną zastąpione postępami z kopii.</p>
        <label class="btn big backup-pick">⬆️ Wybierz plik kopii<input type="file" accept=".json,application/json" data-action="backup-import" class="file-input"></label>
      </div>`;
    window.scrollTo(0, 0);
  }

  async function exportBackup() {
    const now = new Date();
    const payload = { app: BACKUP_APP, version: 1, created: now.toISOString(), data: BACKUP_FIELDS.reduce((o, k) => Object.assign(o, { [k]: store[k] }), {}) };
    const stamp = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
    const name = `nauka-kopia-${stamp}.json`;
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    let done = false;
    // iPad: arkusz udostępniania pozwala od razu zapisać plik w Plikach / iCloud Drive
    try {
      const file = new File([blob], name, { type: "application/json" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "Kopia postępów – nauka" });
        done = true;
      }
    } catch (e) {
      if (e && e.name === "AbortError") return viewBackup({ type: "info", text: "Zapisywanie anulowane – kopia nie została zrobiona." });
    }
    if (!done) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
    store.lastBackup = now.toISOString();
    saveStore();
    viewBackup({ type: "ok", text: `✅ Kopia zapisana jako <strong>${name}</strong>.` });
  }

  function importBackup(file) {
    const reader = new FileReader();
    reader.onload = () => {
      let payload;
      try {
        payload = JSON.parse(reader.result);
      } catch (e) {
        return viewBackup({ type: "err", text: "To nie jest plik kopii – nie udało się go odczytać." });
      }
      const data = payload && payload.app === BACKUP_APP && payload.data;
      if (!data || typeof data.cards !== "object" || typeof data.quiz !== "object") {
        return viewBackup({ type: "err", text: "Ten plik nie jest kopią z tej aplikacji." });
      }
      const when = new Date(payload.created).toLocaleString("pl-PL", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
      const ok = confirm(`Wczytać kopię z ${when}?\n\nW kopii: ${summary(data)}.\n\nObecne postępy w aplikacji zostaną zastąpione.`);
      if (!ok) return viewBackup({ type: "info", text: "Wczytywanie anulowane – nic nie zostało zmienione." });
      const fresh = STORE_DEFAULTS();
      const pets = store.pets;
      BACKUP_FIELDS.forEach((k) => { store[k] = data[k] !== undefined && data[k] !== null ? data[k] : fresh[k]; });
      store.pets = Math.max(pets, Number(data.pets) || 0);
      store.lastBackup = payload.created;
      saveStore();
      viewBackup({ type: "ok", text: `✅ Postępy wczytane z kopii z ${when}.` });
    };
    reader.onerror = () => viewBackup({ type: "err", text: "Nie udało się odczytać pliku." });
    reader.readAsText(file);
  }

  // data egzaminu (widok przedmiotu)
  function currentSubject() {
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    return parts[0] === "s" ? getSubject(parts[1]) : null;
  }
  app.addEventListener("change", (ev) => {
    if (ev.target.matches('[data-action="backup-import"]')) {
      if (ev.target.files && ev.target.files[0]) importBackup(ev.target.files[0]);
      return;
    }
    if (ev.target.matches('[data-action="birthday"]')) {
      store.birthday = ev.target.value ? ev.target.value.slice(5) : null;
      saveStore();
      checkCats();
      viewAlbum();
      return;
    }
    if (!ev.target.matches('[data-action="exam-date"]')) return;
    const subject = currentSubject();
    if (!subject) return;
    if (ev.target.value) store.exams[subject.id] = ev.target.value;
    else delete store.exams[subject.id];
    saveStore();
    viewSubject(subject);
  });

  app.addEventListener("input", (ev) => {
    if (ev.target.matches('[data-action="search"]')) renderResults(ev.target.value);
  });

  app.addEventListener("click", (ev) => {
    const el = ev.target.closest("[data-action]");
    const act = el && el.dataset.action;
    if (act === "bookmark") {
      const key = el.dataset.key;
      if (store.marks[key]) delete store.marks[key];
      else store.marks[key] = { t: el.dataset.title, at: Date.now() };
      saveStore();
      const on = !!store.marks[key];
      el.classList.toggle("on", on);
      el.textContent = on ? "★" : "☆";
      el.setAttribute("aria-label", on ? "Usuń zakładkę" : "Dodaj zakładkę");
      return;
    }
    if (act === "bookmark-del") {
      delete store.marks[el.dataset.key];
      saveStore();
      viewMarks();
      return;
    }
    if (act === "set-goal") {
      store.goal = Number(el.dataset.goal);
      const d = store.days[dayKey()];
      if (d) d.g = store.goal;
      store.bestStreak = Math.max(store.bestStreak, currentStreak());
      saveStore();
      viewStats();
      return;
    }
    if (act === "stat-day") {
      app.querySelectorAll(".wc-col.sel").forEach((c) => c.classList.remove("sel"));
      el.classList.add("sel");
      document.getElementById("wc-detail").innerHTML = dayDetail(el.dataset.day);
      return;
    }
    if (act && act.startsWith("focus-")) {
      focusAction(act, el);
      return;
    }
    if (act === "plan-toggle") {
      const today = dayKey();
      const done = store.planDone[today] = store.planDone[today] || {};
      if (done[el.dataset.id]) delete done[el.dataset.id];
      else done[el.dataset.id] = true;
      // stare dni planu nie są potrzebne
      Object.keys(store.planDone).forEach((k) => { if (k < shiftDay(today, -14)) delete store.planDone[k]; });
      saveStore();
      viewPlan();
      return;
    }
    if (act === "openexam-start") {
      const subject = currentSubject();
      if (subject && subject.openExam) startOpenExam(subject);
      return;
    }
    if (act === "openexam-intro") {
      ev.preventDefault();
      session = null;
      viewOpenExamIntro(currentSubject());
      window.scrollTo(0, 0);
      return;
    }
    // wynik egzaminu ma ten sam adres co ekran startowy, więc przechodzimy bez zmiany hash
    if (act === "exam-intro") {
      ev.preventDefault();
      session = null;
      viewExamIntro(currentSubject());
      window.scrollTo(0, 0);
      return;
    }
    if (act === "exam-start") {
      const subject = currentSubject();
      if (subject && subject.exam) startExam(subject);
      return;
    }
    if (el && el.dataset.action === "backup-export") {
      exportBackup();
      return;
    }
    if (el && el.dataset.action === "exam-clear") {
      const subject = currentSubject();
      if (subject && confirm("Usunąć datę egzaminu z przedmiotu „" + subject.short + "”?")) {
        delete store.exams[subject.id];
        saveStore();
        viewSubject(subject);
      }
      return;
    }
    if (!el || !session) return;
    const action = el.dataset.action;
    if (action === "flip" && !session.flipped) {
      const ta = app.querySelector(".type-answer");
      if (ta) session.typed = ta.value;
      session.flipped = true;
      renderCard();
    } else if (action === "grade") {
      gradeCard(el.dataset.ok === "1");
    } else if (action === "restart-cards") {
      startFlashcards(session.subject, session.topicId, session.mode);
    } else if (action === "answer" && session.chosen === null) {
      session.chosen = Number(el.dataset.i);
      const ok = session.chosen === session.qs[session.pos].a;
      if (ok) session.score++;
      react(session, ok ? 2 : 0, logAnswer(session.subject, ok, false));
      renderQuiz();
    } else if (action === "next-q") {
      session.pos++;
      session.chosen = null;
      renderQuiz();
      window.scrollTo(0, 0);
    } else if (action === "restart-quiz") {
      startQuiz(session.subject, session.topicId);
    } else if (action === "open-show") {
      const ta = app.querySelector(".open-answer");
      session.answer = ta ? ta.value : "";
      session.shown = true;
      renderOpen();
    } else if (action === "open-grade") {
      const g = Number(el.dataset.g);
      const q = session.qs[session.pos];
      store.open[q.key] = g;
      session.grades[g]++;
      react(session, g, logAnswer(session.subject, g === 2, false));
      session.pos++;
      session.shown = false;
      session.answer = "";
      renderOpen();
      window.scrollTo(0, 0);
    } else if (action === "match-pick" && session.type === "match") {
      pickMatch(el.dataset.side, Number(el.dataset.i));
    } else if (action === "restart-match") {
      startMatch(session.subject, session.topicId);
    } else if (action === "statex-answer" && session.chosen === null) {
      session.chosen = Number(el.dataset.i);
      const ok = session.chosen === session.qs[session.pos].a;
      if (ok) session.score++;
      store.statex.n = (store.statex.n || 0) + 1;
      if (ok) store.statex.ok = (store.statex.ok || 0) + 1;
      react(session, ok ? 2 : 0, logAnswer(session.subject, ok, false));
      renderStatex();
    } else if (action === "statex-next") {
      session.pos++;
      session.chosen = null;
      renderStatex();
      window.scrollTo(0, 0);
    } else if (action === "restart-statex") {
      startStatex(session.subject);
    } else if (session.type === "openexam") {
      if (action === "openexam-finish" && !session.finished) {
        collectOpenExam();
        const empty = session.answers.filter((a) => !a.trim()).length;
        if (!empty || confirm(`Bez odpowiedzi: ${empty}. Oddać egzamin?`)) finishOpenExam();
      } else if (action === "openexam-quit" && !session.finished) {
        if (confirm("Przerwać egzamin pisemny? Odpowiedzi nie zostaną zapisane.")) {
          clearInterval(examTimer);
          const subject = session.subject;
          session = null;
          viewOpenExamIntro(subject);
        }
      } else if (action === "openexam-grade" && session.finished) {
        gradeOpenExam(Number(el.dataset.i), Number(el.dataset.g));
      }
    } else if (action === "restart-open") {
      startOpen(session.subject, session.topicId, session.realOnly);
    } else if (session.type === "exam" && !session.finished) {
      if (action === "exam-pick") {
        session.answers[session.pos] = Number(el.dataset.i);
        renderExam();
      } else if (action === "exam-go") {
        const to = Number(el.dataset.to);
        if (to >= 0 && to < session.qs.length) { session.pos = to; renderExam(); window.scrollTo(0, 0); }
      } else if (action === "exam-finish") {
        const empty = session.answers.filter((a) => a === null).length;
        if (!empty || confirm(`Bez odpowiedzi: ${empty} ${plural(empty, "pytanie", "pytania", "pytań")}. Oddać egzamin?`)) finishExam();
      } else if (action === "exam-quit") {
        if (confirm("Przerwać egzamin? To podejście nie zostanie zapisane.")) {
          clearInterval(examTimer);
          const subject = session.subject;
          session = null;
          viewExamIntro(subject);
        }
      }
    }
  });

  // klawiatura (np. iPad z klawiaturą): spacja = odwróć, 1/2 = nie umiem/umiem
  document.addEventListener("keydown", (ev) => {
    if (!session || session.type !== "cards" || session.pos >= session.queue.length) return;
    if (ev.target.matches && ev.target.matches(".type-answer")) {
      if (ev.key === "Enter" && !ev.shiftKey && !session.flipped) {
        ev.preventDefault();
        session.typed = ev.target.value;
        session.flipped = true;
        renderCard();
      }
      return;
    }
    if (ev.target.matches && ev.target.matches("textarea, input")) return;
    if (ev.key === " " || ev.key === "Enter") {
      ev.preventDefault();
      if (!session.flipped) { session.flipped = true; renderCard(); }
    } else if (session.flipped && (ev.key === "1" || ev.key === "ArrowLeft")) {
      gradeCard(false);
    } else if (session.flipped && (ev.key === "2" || ev.key === "ArrowRight")) {
      gradeCard(true);
    }
  });

  // ---------- routing ----------
  function route() {
    session = null;
    clearInterval(examTimer);
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    currentView = parts[0] === "skupienie" ? "focus" : parts[0] || "home";
    focusTick();
    if (parts[0] === "kotki") return viewAlbum();
    if (parts[0] === "skupienie") return viewFocus();
    if (parts[0] === "plan") return viewPlan();
    if (parts[0] === "nowosci") return viewChanges();
    if (parts[0] === "kopia") return viewBackup();
    if (parts[0] === "szukaj") return viewSearch();
    if (parts[0] === "zakladki") return viewMarks();
    if (parts[0] === "statystyki") return viewStats();
    if (parts[0] !== "s") return viewHome();
    const subject = getSubject(parts[1]);
    if (!subject) return viewHome();
    const sub = parts[2];
    if (!sub) return viewSubject(subject);
    if (sub === "t") {
      const topic = subject.topics.find((t) => t.id === parts[3]);
      if (!topic) return viewSubject(subject);
      return viewTopic(subject, topic, parts[4], parts[5]);
    }
    if (sub === "fiszki") {
      const tid = parts[3] === "wszystko" ? undefined : parts[3];
      if (!subjectCards(subject, tid).length) return viewSubject(subject);
      return startFlashcards(subject, tid, parts[4]);
    }
    if (sub === "pary") {
      if (matchCards(subject, parts[3]).length < 4) return viewSubject(subject);
      return startMatch(subject, parts[3]);
    }
    if (sub === "zadania" && subject.statex) return startStatex(subject);
    if (sub === "zagadnienia" && realQuestions(subject, parts[3]).length) return startOpen(subject, parts[3], true);
    if (sub === "egzamin-pisemny" && subject.openExam && realQuestions(subject).length >= subject.openExam.questions) return viewOpenExamIntro(subject);
    if (sub === "otwarte") {
      if (!openQuestions(subject, parts[3]).length) return viewSubject(subject);
      return startOpen(subject, parts[3]);
    }
    if (sub === "egzamin" && subject.exam && subjectQuiz(subject).length) return viewExamIntro(subject);
    if (sub === "quiz") {
      if (!subjectQuiz(subject, parts[3]).length) return viewSubject(subject);
      return startQuiz(subject, parts[3]);
    }
    viewSubject(subject);
  }


  // ---------- kotki: katalog, album i święta ----------
  // każdy kotek ma kolory (fur/dark/belly albo gradient grad), dodatki (acc) i warunek odblokowania
  const CATS = [
    { id: "szary", name: "Szarek", fur: "#9d9da4", dark: "#7d7d84", belly: "#c9c9ce", stripes: true, how: "Jest z Tobą od początku", test: () => true },
    { id: "rudy", name: "Rudzik", fur: "#f0a04b", dark: "#d27f2c", belly: "#fbd9a8", stripes: true, how: "Pogłaszcz 5 kotków", test: (x) => x.pets >= 5 },
    { id: "czarny", name: "Węgielek", fur: "#3a3238", dark: "#241e23", belly: "#4c434a", eyes: "#f2c94c", how: "Zrób pierwszy raz cel dnia", test: (x) => x.goalDays >= 1 },
    { id: "bialy", name: "Śnieżka", fur: "#fbf7f4", dark: "#e3dcd8", belly: "#ffffff", eyes: "#6bb6e8", how: "Seria 3 dni z celem", test: (x) => x.streak >= 3 },
    { id: "kremowy", name: "Budyń", fur: "#f3dcb8", dark: "#dfc092", belly: "#fbf0dd", how: "100 odpowiedzi łącznie", test: (x) => x.answers >= 100 },
    { id: "szylkretowy", name: "Łatka", fur: "#fbf7f4", dark: "#e3dcd8", belly: "#ffffff", patches: ["#f0a04b", "#3a3238"], how: "Opanuj 50 fiszek", test: (x) => x.mastered >= 50 },
    { id: "bury", name: "Pręgus", fur: "#a07b5a", dark: "#7a5a3e", belly: "#d6bc9e", stripes: true, how: "Quiz z tematu na 100%", test: (x) => x.perfectQuiz },
    { id: "liliowy", name: "Lila", fur: "#c7b3c9", dark: "#a892ab", belly: "#e6dbe7", how: "10 pytań otwartych na „umiałam”", test: (x) => x.openOk >= 10 },
    { id: "mietowy", name: "Mięta", fur: "#96f2d7", dark: "#63c9ad", belly: "#e6fcf5", eyes: "#e64980", how: "Pierwsza sesja w trybie skupienia", test: (x) => x.focus >= 1 },
    { id: "blekitny", name: "Błękitek", fur: "#a5d8ff", dark: "#74c0fc", belly: "#e7f5ff", eyes: "#f59f00", how: "Ukończ 3 gry w pary", test: (x) => x.games >= 3 },
    { id: "profesor", name: "Profesor Mruczek", fur: "#9d9da4", dark: "#7d7d84", belly: "#c9c9ce", acc: ["glasses"], how: "20 dobrze rozwiązanych zadań ze statystyki", test: (x) => x.statOk >= 20 },
    { id: "cukierkowy", name: "Cukierek", fur: "#fcc2d7", dark: "#f783ac", belly: "#fff0f6", eyes: "#7048e8", how: "Seria 7 dni z celem", test: (x) => x.streak >= 7 },
    { id: "spioch", name: "Śpioch", fur: "#d0bfff", dark: "#b197fc", belly: "#f3f0ff", acc: ["nightcap"], how: "10 sesji skupienia", test: (x) => x.focus >= 10 },
    { id: "arbuzek", name: "Arbuzek", fur: "#8ce99a", dark: "#51cf66", belly: "#ff8787", eyes: "#212529", how: "Pogłaszcz 50 kotków", test: (x) => x.pets >= 50 },
    { id: "teczowy", name: "Tęczuś", grad: ["#ff8787", "#ffd43b", "#69db7c", "#4dabf7", "#da77f2"], dark: "#9775fa", belly: "#fff9db", how: "Zdaj próbny egzamin", test: (x) => x.examPassed },
    { id: "kosmos", name: "Kosmos", grad: ["#364fc7", "#5f3dc4", "#862e9c"], dark: "#2b2350", belly: "#748ffc", eyes: "#ffd43b", stars: true, how: "1000 odpowiedzi łącznie", test: (x) => x.answers >= 1000 },
    { id: "zloty", name: "Złotko", grad: ["#ffe066", "#fab005", "#f08c00"], dark: "#e67700", belly: "#fff3bf", acc: ["crown"], how: "Seria 30 dni albo cały przedmiot opanowany na 100%", test: (x) => x.streak >= 30 || x.fullSubject },
    // świąteczne – pojawiają się i odblokowują tylko w swoim czasie
    { id: "halloween", name: "Dyniek", fur: "#3a3238", dark: "#241e23", belly: "#4c434a", eyes: "#ff922b", acc: ["witch", "pumpkin"], holiday: "halloween", how: "Halloween (24 X – 2 XI)" },
    { id: "mikolaj", name: "Mikołajek", fur: "#fbf7f4", dark: "#e3dcd8", belly: "#ffffff", eyes: "#2f9e44", acc: ["santa", "scarf"], holiday: "swieta", how: "Boże Narodzenie (1–27 XII)" },
    { id: "sylwester", name: "Iskierka", grad: ["#e599f7", "#b197fc"], dark: "#9775fa", belly: "#f8f0fc", acc: ["newyear"], holiday: "sylwester", how: "Sylwester i Nowy Rok (30 XII – 2 I)" },
    { id: "walentynka", name: "Serduszko", fur: "#ffc9c9", dark: "#ff8787", belly: "#fff5f5", acc: ["bow", "heart"], holiday: "walentynki", how: "Walentynki (10–15 II)" },
    { id: "dzienkota", name: "Mruczysław", fur: "#f0a04b", dark: "#d27f2c", belly: "#fbd9a8", stripes: true, acc: ["crown"], holiday: "dzienkota", how: "Dzień Kota (15–19 II)" },
    { id: "zajaczek", name: "Zajączek", fur: "#f3dcb8", dark: "#dfc092", belly: "#fbf0dd", acc: ["bunny", "egg"], holiday: "wielkanoc", how: "Wielkanoc (tydzień przed i dzień po)" },
    { id: "urodzinowy", name: "Torcik", grad: ["#fcc2d7", "#ffd8a8"], dark: "#f783ac", belly: "#fff0f6", acc: ["party", "confetti"], holiday: "urodziny", how: "Twoje urodziny (±2 dni) – ustaw datę w albumie" }
  ];
  const CAT_ACC = {
    witch: `<path d="M23 9 Q33 -6 39 -21 Q41 -6 49 9 Z" fill="#3d2a55"/><ellipse cx="36" cy="9" rx="23" ry="4.5" fill="#2b1d3a"/><path d="M26.6 4.5 L45.6 4.5 L46.6 7.6 L25.6 7.6 Z" fill="#f59f00"/>`,
    pumpkin: `<g><ellipse cx="9" cy="68" rx="9" ry="7" fill="#f08c00"/><ellipse cx="9" cy="68" rx="4" ry="7" fill="#fd7e14"/><path d="M9 61 v-3" stroke="#2f9e44" stroke-width="2.2" stroke-linecap="round"/><path d="M5 66 l2 -2 l2 2 M10 66 l2 -2 l2 2 M5.5 70.5 q3.5 2.4 7 0" stroke="#5c2d00" stroke-width="1.2" fill="none"/></g>`,
    santa: `<path d="M16 13 Q28 -14 57 -5 Q50 2 56 13 Z" fill="#e03131"/><ellipse cx="36" cy="13" rx="22" ry="4.2" fill="#fff"/><circle cx="58" cy="-5" r="4.6" fill="#fff"/>`,
    scarf: `<path d="M17 42 Q36 50 55 42 L55 47 Q36 55 17 47 Z" fill="#e03131"/><path d="M45 48 l5 13 l-6 0.5 l-3 -12.5 Z" fill="#c92a2a"/><path d="M19 44 Q36 51 53 44" stroke="#fff" stroke-width="1.2" fill="none" stroke-dasharray="2 2"/>`,
    bunny: `<g><ellipse cx="25" cy="-5" rx="5" ry="14" fill="#fff" stroke="#e9ecef" transform="rotate(-12 25 -5)"/><ellipse cx="25" cy="-5" rx="2.4" ry="10" fill="#f7a8c4" transform="rotate(-12 25 -5)"/><ellipse cx="47" cy="-5" rx="5" ry="14" fill="#fff" stroke="#e9ecef" transform="rotate(12 47 -5)"/><ellipse cx="47" cy="-5" rx="2.4" ry="10" fill="#f7a8c4" transform="rotate(12 47 -5)"/><path d="M17 12 Q36 1 55 12" stroke="#f783ac" stroke-width="3" fill="none" stroke-linecap="round"/></g>`,
    egg: `<g><ellipse cx="9" cy="67" rx="7" ry="9" fill="#a5d8ff"/><path d="M2.4 65 q3.3 -3 6.6 0 t6.6 0" stroke="#f783ac" stroke-width="1.6" fill="none"/><circle cx="7" cy="71" r="1.3" fill="#ffd43b"/><circle cx="11.5" cy="71.5" r="1.3" fill="#ffd43b"/></g>`,
    party: `<path d="M27 11 L36 -17 L45 11 Z" fill="#f783ac"/><path d="M29.6 3.5 L42.4 3.5 M32.2 -4.5 L39.8 -4.5" stroke="#fff" stroke-width="2.2"/><circle cx="36" cy="-18" r="3.8" fill="#ffd43b"/>`,
    newyear: `<path d="M27 11 L36 -17 L45 11 Z" fill="#fcc419"/><path d="M29.6 3.5 L42.4 3.5 M32.2 -4.5 L39.8 -4.5" stroke="#fff" stroke-width="2.2"/><circle cx="36" cy="-18" r="3.8" fill="#e64980"/><path d="M8 4 l1.5 3.5 l3.5 1.5 l-3.5 1.5 l-1.5 3.5 l-1.5 -3.5 l-3.5 -1.5 l3.5 -1.5 Z M64 16 l1.2 2.8 l2.8 1.2 l-2.8 1.2 l-1.2 2.8 l-1.2 -2.8 l-2.8 -1.2 l2.8 -1.2 Z" fill="#fcc419"/>`,
    confetti: `<g><rect x="4" y="6" width="3" height="5" rx="1" fill="#4dabf7" transform="rotate(25 5 8)"/><rect x="63" y="10" width="3" height="5" rx="1" fill="#ffd43b" transform="rotate(-20 64 12)"/><circle cx="62" cy="-2" r="1.8" fill="#f783ac"/><circle cx="9" cy="-4" r="1.8" fill="#69db7c"/><rect x="66" y="30" width="3" height="5" rx="1" fill="#da77f2" transform="rotate(30 67 32)"/></g>`,
    glasses: `<g fill="rgba(255,255,255,.25)" stroke="#3b1026" stroke-width="1.6"><circle cx="27" cy="26" r="6.6"/><circle cx="45" cy="26" r="6.6"/><path d="M33.6 25.5 Q36 23.5 38.4 25.5 M20.4 25 L14 22.5 M51.6 25 L58 22.5" fill="none"/></g>`,
    nightcap: `<path d="M15 14 Q32 -13 61 4 Q53 8 55 14 Z" fill="#5c7cfa"/><ellipse cx="35" cy="14" rx="21" ry="3.8" fill="#fff"/><circle cx="62" cy="5" r="4.2" fill="#fff"/><circle cx="30" cy="2" r="1.3" fill="#ffd43b"/><circle cx="42" cy="6" r="1.3" fill="#ffd43b"/><circle cx="48" cy="-1" r="1" fill="#ffd43b"/>`,
    crown: `<path d="M23 11 L25 -2 L30.5 5 L36 -6 L41.5 5 L47 -2 L49 11 Z" fill="#fcc419" stroke="#e67700" stroke-width="1" stroke-linejoin="round"/><circle cx="36" cy="5" r="1.8" fill="#e64980"/><circle cx="28" cy="7" r="1.2" fill="#4dabf7"/><circle cx="44" cy="7" r="1.2" fill="#4dabf7"/>`,
    bow: `<path d="M52 9 l-8 -5.5 v11 Z M52 9 l8 -5.5 v11 Z" fill="#e64980"/><circle cx="52" cy="9" r="2.4" fill="#c2255c"/>`,
    heart: `<path d="M9 75 C-3 65 1 56 9 61 C17 56 21 65 9 75 Z" fill="#e64980"/>`
  };
  function petCatSvg(c) {
    const eyes = c.eyes || "#7cc26b";
    const gid = c.grad ? "cg-" + (c.id || "x") : "";
    const fur = c.grad ? `url(#${gid})` : c.fur;
    const defs = c.grad ? `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">${c.grad.map((g, i) => `<stop offset="${(i / (c.grad.length - 1)) * 100}%" stop-color="${g}"/>`).join("")}</linearGradient></defs>` : "";
    const stripes = c.stripes ? `<path d="M30 20 q2 4 0 7 M36 18 q1.5 4.5 0 8 M42 20 q-2 4 0 7" stroke="${c.dark}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M16 46 q4 1 6 -2 M48 46 q-4 1 -6 -2" stroke="${c.dark}" stroke-width="1.8" fill="none" stroke-linecap="round"/>` : "";
    const patches = c.patches ? `<ellipse cx="26" cy="20" rx="7" ry="6" fill="${c.patches[0]}"/>
      <ellipse cx="45" cy="25" rx="5" ry="4.5" fill="${c.patches[1]}"/>
      <ellipse cx="22" cy="54" rx="7" ry="6" fill="${c.patches[1]}"/>
      <ellipse cx="45" cy="56" rx="6" ry="5" fill="${c.patches[0]}"/>` : "";
    const stars = c.stars ? `<g fill="#fff"><circle cx="24" cy="16" r=".9"/><circle cx="47" cy="18" r=".7"/><circle cx="29" cy="52" r=".9"/><circle cx="46" cy="60" r=".8"/><circle cx="40" cy="47" r=".6"/><circle cx="20" cy="38" r=".7"/></g>` : "";
    const acc = (c.acc || []).map((a) => CAT_ACC[a] || "");
    const head = acc.filter((_, i) => !["pumpkin", "egg", "heart"].includes(c.acc[i])).join("");
    const props = acc.filter((_, i) => ["pumpkin", "egg", "heart"].includes(c.acc[i])).join("");
    return `<svg viewBox="0 0 72 76" aria-hidden="true">${defs}
      <path class="pet-tail" d="M54 66 C68 64 70 50 63 44" stroke="${c.dark}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="36" cy="58" rx="20" ry="17" fill="${fur}"/>
      <ellipse cx="36" cy="62" rx="10" ry="12" fill="${c.belly}"/>
      <path d="M14 20 L17 2 L29 12 Z M58 20 L55 2 L43 12 Z" fill="${fur}" stroke="${c.dark}" stroke-width="1" stroke-linejoin="round"/>
      <path d="M17.5 15 L19 7 L25 12 Z M54.5 15 L53 7 L47 12 Z" fill="#f7a8c4"/>
      <ellipse cx="36" cy="27" rx="22" ry="18" fill="${fur}"/>
      ${patches}${stripes}${stars}
      <g class="pet-eyes-open">
        <ellipse cx="27" cy="26" rx="4" ry="4.6" fill="${eyes}"/><ellipse cx="45" cy="26" rx="4" ry="4.6" fill="${eyes}"/>
        <ellipse cx="27" cy="26.4" rx="1.6" ry="3.6" fill="#1d1a1c"/><ellipse cx="45" cy="26.4" rx="1.6" ry="3.6" fill="#1d1a1c"/>
        <circle cx="28.4" cy="24.4" r="1" fill="#fff"/><circle cx="46.4" cy="24.4" r="1" fill="#fff"/>
      </g>
      <path class="pet-eyes-happy" d="M23 27 q4 -5 8 0 M41 27 q4 -5 8 0" stroke="#1d1a1c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path class="pet-eyes-sleep" d="M23 25.5 q4 4 8 0 M41 25.5 q4 4 8 0" stroke="#1d1a1c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M33.6 32 h4.8 l-2.4 2.8 Z" fill="#f37aa6"/>
      <path d="M36 34.8 q-1.5 3 -4.5 2 M36 34.8 q1.5 3 4.5 2" stroke="#1d1a1c" stroke-width="1.1" fill="none" stroke-linecap="round"/>
      <ellipse class="pet-blush" cx="21" cy="33" rx="3.4" ry="2" fill="#f7a8c4"/><ellipse class="pet-blush" cx="51" cy="33" rx="3.4" ry="2" fill="#f7a8c4"/>
      <path d="M22 33 L8 31 M22 35 L8 37 M50 33 L64 31 M50 35 L64 37" stroke="${c.dark}" stroke-width=".8"/>
      <ellipse cx="27" cy="73" rx="7" ry="4" fill="${fur}" stroke="${c.dark}" stroke-width=".8"/>
      <ellipse cx="45" cy="73" rx="7" ry="4" fill="${fur}" stroke="${c.dark}" stroke-width=".8"/>
      ${head}${props}
    </svg>`;
  }

  // Wielkanoc (algorytm Meeusa/Jonesa/Butchera)
  function easter(y) {
    const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
    const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
    return new Date(y, month - 1, day);
  }
  // czy dziś trwa dane święto (okno dni wokół daty)
  function holidayNow(name, now = new Date()) {
    const y = now.getFullYear();
    const t = new Date(y, now.getMonth(), now.getDate()).getTime();
    const within = (from, to) => t >= from.getTime() && t <= to.getTime();
    const D = (m, d, yy = y) => new Date(yy, m - 1, d);
    switch (name) {
      case "halloween": return within(D(10, 24), D(11, 2));
      case "swieta": return within(D(12, 1), D(12, 27));
      case "sylwester": return within(D(12, 30), D(12, 31)) || within(D(1, 1), D(1, 2));
      case "walentynki": return within(D(2, 10), D(2, 15));
      case "dzienkota": return within(D(2, 15), D(2, 19));
      case "wielkanoc": { const e = easter(y); return within(new Date(e.getTime() - 7 * DAY), new Date(e.getTime() + DAY)); }
      case "urodziny": {
        if (!store.birthday) return false;
        const [m, d] = store.birthday.split("-").map(Number);
        return [y - 1, y, y + 1].some((yy) => { const b = D(m, d, yy).getTime(); return Math.abs(t - b) <= 2 * DAY + 3600000; });
      }
    }
    return false;
  }
  function catStats() {
    const days = Object.keys(store.days);
    return {
      pets: store.pets,
      answers: days.reduce((acc, k) => acc + (store.days[k].n || 0), 0),
      goalDays: days.filter(goalMet).length,
      streak: bestStreak(),
      mastered: Object.values(store.cards).filter((c) => c.box >= MASTERED_BOX).length,
      perfectQuiz: Object.values(store.quiz).some((q) => q.best === 100),
      openOk: Object.values(store.open).filter((g) => g === 2).length,
      focus: store.focus.sessions || 0,
      games: store.games.match || 0,
      statOk: store.statex.ok || 0,
      examPassed: SUBJECTS.some((sub) => sub.exam && (store.tries[sub.id] || []).some((t) => t.score >= sub.exam.pass)),
      fullSubject: SUBJECTS.some((sub) => { const fc = subjectCards(sub); return fc.length && mastery(fc) === 100; })
    };
  }
  function catUnlockable(cat, x) {
    return cat.holiday ? holidayNow(cat.holiday) : cat.test(x);
  }
  // sprawdza nowe kotki; nowo odblokowane ogłasza dymkiem u góry ekranu
  function checkCats() {
    const x = catStats();
    if (!store.cats.szary) store.cats.szary = new Date().toISOString();
    const fresh = CATS.filter((c) => !store.cats[c.id] && catUnlockable(c, x));
    if (!fresh.length) return;
    fresh.forEach((c) => { store.cats[c.id] = new Date().toISOString(); });
    saveStore();
    fresh.forEach((c, i) => setTimeout(() => catToast(c), i * 5200 + 400));
  }
  function catToast(c) {
    const t = document.createElement("a");
    t.className = "cat-toast";
    t.href = "#/kotki";
    t.innerHTML = `<span class="cat-toast-img">${petCatSvg(c)}</span><span><strong>Nowy kotek w albumie! 🎉</strong><br>${esc(c.name)}${c.holiday ? " – świąteczny!" : ""}</span>`;
    document.body.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("show")));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 500); }, 5000);
  }
  function unlockedCats() {
    return CATS.filter((c) => store.cats[c.id] || c.id === "szary");
  }
  function viewAlbum() {
    document.title = "Album kotków – nauka";
    const x = catStats();
    const have = CATS.filter((c) => store.cats[c.id] || c.id === "szary").length;
    const now = CATS.filter((c) => c.holiday && holidayNow(c.holiday));
    const card = (c) => {
      const got = store.cats[c.id] || c.id === "szary";
      return `<div class="album-cat${got ? "" : " locked"}${c.holiday ? " holiday" : ""}">
        <span class="album-img">${petCatSvg(c)}</span>
        <strong>${got ? esc(c.name) : "???"}</strong>
        <span class="album-how">${got ? (store.cats[c.id] ? `od ${new Date(store.cats[c.id]).toLocaleDateString("pl-PL", { day: "numeric", month: "short", year: "numeric" })}` : esc(c.how)) : esc(c.how)}</span>
      </div>`;
    };
    app.innerHTML = `
      <a class="back" href="#/">‹ Przedmioty</a>
      <h1>🐱 Album kotków</h1>
      <p class="muted">Zebrane: <strong>${have} / ${CATS.length}</strong>. Kotki odblokowujesz nauką, a świąteczne – otwierając aplikację w ich czasie. Odblokowane kotki odwiedzają Cię na ekranie.</p>
      ${now.length ? `<div class="album-now">🎉 Teraz trwa: ${now.map((c) => `<strong>${esc(c.how.split(" (")[0])}</strong>`).join(", ")} – świąteczny kotek częściej zagląda na ekran!</div>` : ""}
      <h2>Za naukę</h2>
      <div class="album-grid">${CATS.filter((c) => !c.holiday).map(card).join("")}</div>
      <h2>Świąteczne</h2>
      <div class="album-grid">${CATS.filter((c) => c.holiday).map(card).join("")}</div>
      <div class="panel birthday">
        <label for="bday"><strong>🎂 Twoje urodziny</strong><br><span class="muted">Wtedy odwiedzi Cię kotek urodzinowy (rok nie ma znaczenia).</span></label>
        <input type="date" id="bday" class="bday-input" data-action="birthday" value="${store.birthday ? "2000-" + store.birthday : ""}">
      </div>
      <p class="muted small-note">Twoje liczby: ${x.answers} odpowiedzi · ${x.pets} pogłaskanych kotków · rekord serii ${x.streak} · ${x.mastered} opanowanych fiszek · ${x.focus} sesji skupienia · ${x.games} gier w pary · ${x.statOk} zadań ze statystyki.</p>`;
  }

  // ---------- kotki do głaskania ----------
  // co jakiś czas zza krawędzi ekranu wygląda odblokowany kotek (w święta częściej świąteczny); dotknięcie = głaskanie
  const PET_FIRST_MS = [15000, 40000];
  const PET_EVERY_MS = [45000, 120000];
  const PET_STAY_MS = 9000;
  const PET_SIDES = ["bottom", "bottom", "left", "right"];
  const PET_WORDS = ["mrrr ❤️", "mrau! 💕", "prrr… 💗", "miau ❤️", "jeszcze! 💞"];
  let petTimer = null;
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const between = ([a, b]) => a + Math.random() * (b - a);
  function schedulePetCat(range) {
    clearTimeout(petTimer);
    petTimer = setTimeout(spawnPetCat, between(range));
  }
  function spawnPetCat() {
    // nie przeszkadzaj, gdy karta jest w tle albo kotek już jest
    if (document.hidden || document.querySelector(".pet-cat")) return schedulePetCat(PET_EVERY_MS);
    const holiday = CATS.filter((c) => c.holiday && holidayNow(c.holiday));
    const color = holiday.length && Math.random() < 0.5 ? pick(holiday) : pick(unlockedCats());
    const side = pick(PET_SIDES);
    const cat = document.createElement("button");
    cat.type = "button";
    cat.className = `pet-cat side-${side}`;
    cat.setAttribute("aria-label", `Kotek ${color.name} – pogłaszcz go`);
    cat.innerHTML = `<span class="pet-body">${petCatSvg(color)}</span>`;
    // pozycja wzdłuż krawędzi (z dala od rogów)
    if (side === "bottom") cat.style.left = `${Math.round(between([8, 82]))}%`;
    else cat.style.top = `${Math.round(between([25, 70]))}%`;
    document.body.appendChild(cat);
    requestAnimationFrame(() => requestAnimationFrame(() => cat.classList.add("in")));
    const leave = setTimeout(() => hidePetCat(cat), PET_STAY_MS);
    cat.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (cat.classList.contains("petted")) return;
      clearTimeout(leave);
      cat.classList.add("petted");
      store.pets = (store.pets || 0) + 1;
      saveStore();
      checkCats();
      // serduszka i dymek osobno (kotek z boku jest obrócony, a napis ma być prosto)
      const r = cat.getBoundingClientRect();
      const pop = document.createElement("div");
      pop.className = "pet-pop";
      pop.style.left = `${Math.min(Math.max(r.left + r.width / 2, 70), innerWidth - 70)}px`;
      pop.style.top = `${Math.min(Math.max(r.top + r.height / 2, 60), innerHeight - 90)}px`;
      pop.innerHTML = `<span class="pet-bubble">${pick(PET_WORDS)}</span>` +
        [0, 1, 2, 3, 4].map((i) => `<span class="pet-heart" style="--dx:${Math.round(between([-45, 45]))}px;animation-delay:${i * 0.12}s">${pick(["❤️", "💕", "💗", "💖"])}</span>`).join("");
      document.body.appendChild(pop);
      setTimeout(() => pop.remove(), 1900);
      setTimeout(() => hidePetCat(cat), 1500);
    });
    schedulePetCat(PET_EVERY_MS);
  }
  function hidePetCat(cat) {
    cat.classList.remove("in");
    cat.classList.add("out");
    setTimeout(() => cat.remove(), 700);
  }
  schedulePetCat(PET_FIRST_MS);

  // ---------- tryb offline ----------
  // service worker zapisuje pliki aplikacji, żeby działała bez internetu (tylko przez http/https)
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => { /* bez trybu offline aplikacja działa normalnie */ });
    });
  }
  const offlineBadge = document.createElement("div");
  offlineBadge.className = "offline-badge";
  offlineBadge.textContent = "📴 Brak internetu – działasz na wersji zapisanej na iPadzie";
  document.body.appendChild(offlineBadge);
  function updateOnline() {
    offlineBadge.classList.toggle("show", !navigator.onLine);
  }
  window.addEventListener("online", updateOnline);
  window.addEventListener("offline", updateOnline);
  updateOnline();
  // ---------- start ----------
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
  checkCats();
  route();
  setTimeout(showWhatsNew, 600);
})();
