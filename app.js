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
    days: {}, goal: 20, bestStreak: 0, marks: {}, open: {}, tries: {}
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
      ${store.pets ? `<p class="pet-count">🐾 Pogłaskane kotki: ${store.pets}</p>` : ""}`;
  }


  // dzienny cel i seria na stronie głównej
  function todayCard() {
    const d = dayStats(dayKey());
    const goal = store.goal;
    const pct = Math.min(100, Math.round((d.n / goal) * 100));
    const met = d.n >= goal;
    const streak = currentStreak();
    const marks = Object.keys(store.marks).length;
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
            <a href="#/statystyki">📊 Statystyki tygodnia</a>
            <a href="#/zakladki">⭐ Zakładki${marks ? ` (${marks})` : ""}</a>
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
        ${openQuestions(subject).length ? `<a class="btn" href="#/s/${subject.id}/otwarte">✍️ Pytania otwarte</a>` : ""}
        ${subject.exam ? `<a class="btn" href="#/s/${subject.id}/egzamin">📝 Próbny egzamin</a>` : ""}
      </div>` : `
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
          ${openQuestions(subject, topic.id).length ? `<a class="btn" href="#/s/${subject.id}/otwarte/${topic.id}">✍️ Pytania otwarte</a>` : ""}
        </div>`;
    } else if (tab === "fiszki") {
      const due = dueCount(fc);
      body = `
        <div class="panel">
          <p>Opanowane: <strong>${mastery(fc)}%</strong>${due ? ` · do powtórki: <strong>${due}</strong>` : ""}</p>
          ${progressBar(mastery(fc), subject.color)}
          <a class="btn primary big" style="--accent:${subject.color}" href="#/s/${subject.id}/fiszki/${topic.id}">Zacznij fiszki</a>
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

  // w trakcie sesji kotek przechodzi od poprzedniej pozycji do nowej
  function sessionBar(s, pct) {
    const from = s.catPct === undefined ? 0 : s.catPct;
    s.catPct = pct;
    return progressBar(pct, s.subject.color, from);
  }

  function startFlashcards(subject, topicId) {
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
      type: "cards", subject, topicId, queue, pos: 0, flipped: false,
      known: 0, unknown: 0, total: queue.length, retried: new Set()
    };
    say(session, pickOne(SAYS.cards));
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
    app.innerHTML = `
      <div class="session-top">
        <a class="back" href="${back}">‹ Zakończ</a>
        <span class="counter">${Math.min(s.pos + 1, s.queue.length)} / ${s.queue.length}</span>
      </div>
      ${sessionBar(s, Math.round((s.pos / s.queue.length) * 100))}
      <div class="flashcard${s.flipped ? " flipped" : ""}" data-action="flip" style="--accent:${s.subject.color}">
        <div class="fc-topic">${esc(c.topic)} · <span class="dot box${box}"></span>${box ? `pudełko ${box}/5` : "nowa"}</div>
        <div class="fc-q">${esc(c.q)}</div>
        ${s.flipped
          ? `<div class="fc-a">${esc(c.a)}</div>`
          : `<div class="fc-hint">Dotknij, aby zobaczyć odpowiedź</div>`}
      </div>
      ${s.flipped ? `
      <div class="grade">
        <button class="btn bad" data-action="grade" data-ok="0">✗ Nie umiem</button>
        <button class="btn good" data-action="grade" data-ok="1">✓ Umiem</button>
      </div>` : ""}
      ${sessionBuddy(s)}`;
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
    renderCard();
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
      if (t.length < 3 || t.length > 40 || t.split(/\s+/).length > 4 || /^\d/.test(t) || seen.has(k)) return;
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
      const own = (t.open || []).map((o) => ({ q: o.q, a: o.a }));
      const auto = noteSections(t)
        .filter((sec) => !OPEN_SKIP.test(sec.title) && plain(sec.body).length > 120)
        .map((sec) => ({ q: /\?$/.test(sec.title) ? sec.title : `Omów: ${sec.title}`, a: sec.body, h: sec.h }));
      return own.concat(auto).map((o) => Object.assign(o, {
        key: subject.id + ":o:" + hash(o.q), topic: t.title, tid: t.id, terms: keyTerms(o.a)
      }));
    });
  }
  function startOpen(subject, topicId) {
    const all = openQuestions(subject, topicId);
    // najpierw te jeszcze nieprzerobione albo oznaczone jako „nie umiałam”
    const qs = shuffle(all).sort((a, b) => (store.open[a.key] === undefined ? -1 : store.open[a.key]) - (store.open[b.key] === undefined ? -1 : store.open[b.key])).slice(0, OPEN_SESSION);
    session = { type: "open", subject, topicId, qs, pos: 0, shown: false, answer: "", grades: [0, 0, 0] };
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
        <div class="model-answer notes"><div class="label">Wzorcowa odpowiedź (z notatki)</div>${md(q.a)}</div>
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
        <div class="fc-topic">${esc(q.topic)}${store.open[q.key] !== undefined ? ` · ostatnio: ${["nie umiałam", "częściowo", "umiałam"][store.open[q.key]]}` : ""}</div>
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

  // ---------- zdarzenia ----------
  // ---------- kopia zapasowa ----------
  const BACKUP_APP = "nauka-drugi-rok";
  const BACKUP_FIELDS = ["cards", "quiz", "exams", "pets", "days", "goal", "bestStreak", "marks", "open", "tries"];

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
      session.flipped = true;
      renderCard();
    } else if (action === "grade") {
      gradeCard(el.dataset.ok === "1");
    } else if (action === "restart-cards") {
      startFlashcards(session.subject, session.topicId);
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
    } else if (action === "restart-open") {
      startOpen(session.subject, session.topicId);
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
      if (!subjectCards(subject, parts[3]).length) return viewSubject(subject);
      return startFlashcards(subject, parts[3]);
    }
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


  // ---------- kotki do głaskania ----------
  // co jakiś czas zza krawędzi ekranu wygląda kotek w losowym kolorze; dotknięcie = głaskanie, potem kotek znika
  const CAT_COLORS = [
    { name: "szary", fur: "#9d9da4", dark: "#7d7d84", belly: "#c9c9ce", stripes: true },
    { name: "rudy", fur: "#f0a04b", dark: "#d27f2c", belly: "#fbd9a8", stripes: true },
    { name: "czarny", fur: "#3a3238", dark: "#241e23", belly: "#4c434a", eyes: "#f2c94c" },
    { name: "biały", fur: "#fbf7f4", dark: "#e3dcd8", belly: "#ffffff", eyes: "#6bb6e8" },
    { name: "kremowy", fur: "#f3dcb8", dark: "#dfc092", belly: "#fbf0dd" },
    { name: "szylkretowy", fur: "#fbf7f4", dark: "#e3dcd8", belly: "#ffffff", patches: ["#f0a04b", "#3a3238"] },
    { name: "bury", fur: "#a07b5a", dark: "#7a5a3e", belly: "#d6bc9e", stripes: true },
    { name: "liliowy", fur: "#c7b3c9", dark: "#a892ab", belly: "#e6dbe7" }
  ];
  function petCatSvg(c) {
    const eyes = c.eyes || "#7cc26b";
    const stripes = c.stripes ? `<path d="M30 20 q2 4 0 7 M36 18 q1.5 4.5 0 8 M42 20 q-2 4 0 7" stroke="${c.dark}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M16 46 q4 1 6 -2 M48 46 q-4 1 -6 -2" stroke="${c.dark}" stroke-width="1.8" fill="none" stroke-linecap="round"/>` : "";
    const patches = c.patches ? `<ellipse cx="26" cy="20" rx="7" ry="6" fill="${c.patches[0]}"/>
      <ellipse cx="45" cy="25" rx="5" ry="4.5" fill="${c.patches[1]}"/>
      <ellipse cx="22" cy="54" rx="7" ry="6" fill="${c.patches[1]}"/>
      <ellipse cx="45" cy="56" rx="6" ry="5" fill="${c.patches[0]}"/>` : "";
    return `<svg viewBox="0 0 72 76" aria-hidden="true">
      <path class="pet-tail" d="M54 66 C68 64 70 50 63 44" stroke="${c.dark}" stroke-width="6" fill="none" stroke-linecap="round"/>
      <ellipse cx="36" cy="58" rx="20" ry="17" fill="${c.fur}"/>
      <ellipse cx="36" cy="62" rx="10" ry="12" fill="${c.belly}"/>
      <path d="M14 20 L17 2 L29 12 Z M58 20 L55 2 L43 12 Z" fill="${c.fur}" stroke="${c.dark}" stroke-width="1" stroke-linejoin="round"/>
      <path d="M17.5 15 L19 7 L25 12 Z M54.5 15 L53 7 L47 12 Z" fill="#f7a8c4"/>
      <ellipse cx="36" cy="27" rx="22" ry="18" fill="${c.fur}"/>
      ${patches}${stripes}
      <g class="pet-eyes-open">
        <ellipse cx="27" cy="26" rx="4" ry="4.6" fill="${eyes}"/><ellipse cx="45" cy="26" rx="4" ry="4.6" fill="${eyes}"/>
        <ellipse cx="27" cy="26.4" rx="1.6" ry="3.6" fill="#1d1a1c"/><ellipse cx="45" cy="26.4" rx="1.6" ry="3.6" fill="#1d1a1c"/>
        <circle cx="28.4" cy="24.4" r="1" fill="#fff"/><circle cx="46.4" cy="24.4" r="1" fill="#fff"/>
      </g>
      <path class="pet-eyes-happy" d="M23 27 q4 -5 8 0 M41 27 q4 -5 8 0" stroke="#1d1a1c" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M33.6 32 h4.8 l-2.4 2.8 Z" fill="#f37aa6"/>
      <path d="M36 34.8 q-1.5 3 -4.5 2 M36 34.8 q1.5 3 4.5 2" stroke="#1d1a1c" stroke-width="1.1" fill="none" stroke-linecap="round"/>
      <ellipse class="pet-blush" cx="21" cy="33" rx="3.4" ry="2" fill="#f7a8c4"/><ellipse class="pet-blush" cx="51" cy="33" rx="3.4" ry="2" fill="#f7a8c4"/>
      <path d="M22 33 L8 31 M22 35 L8 37 M50 33 L64 31 M50 35 L64 37" stroke="${c.dark}" stroke-width=".8"/>
      <ellipse cx="27" cy="73" rx="7" ry="4" fill="${c.fur}" stroke="${c.dark}" stroke-width=".8"/>
      <ellipse cx="45" cy="73" rx="7" ry="4" fill="${c.fur}" stroke="${c.dark}" stroke-width=".8"/>
    </svg>`;
  }
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
    const color = pick(CAT_COLORS);
    const side = pick(PET_SIDES);
    const cat = document.createElement("button");
    cat.type = "button";
    cat.className = `pet-cat side-${side}`;
    cat.setAttribute("aria-label", `Kotek (${color.name}) – pogłaszcz go`);
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
  route();
})();
