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
  function loadStore() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      return { cards: data.cards || {}, quiz: data.quiz || {}, exams: data.exams || {}, lastBackup: data.lastBackup || null };
    } catch (e) {
      return { cards: {}, quiz: {}, exams: {}, lastBackup: null };
    }
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
  function md(text) {
    const lines = text.replace(/^\n+|\s+$/g, "").split("\n");
    let html = "";
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (line.startsWith("### ")) { html += `<h4>${inline(line.slice(4))}</h4>`; i++; continue; }
      if (line.startsWith("## ")) { html += `<h3>${inline(line.slice(3))}</h3>`; i++; continue; }
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

  // ---------- widoki ----------
  function progressBar(pct, color) {
    return `<div class="bar"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>`;
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
      ${next ? examSpotlight(next.s, next.exam, upcoming.slice(1)) : `
      <div class="exam-hint">📅 Ustaw daty egzaminów w przedmiotach, a tutaj pojawi się odliczanie do najbliższego.</div>`}
      <div class="subject-grid">${cards}</div>
      <a class="backup-link${backupOverdue() ? " overdue" : ""}" href="#/kopia">💾 Kopia zapasowa postępów · ${lastBackupText()}${backupOverdue() ? (store.lastBackup ? " – czas na nową kopię!" : " – zrób pierwszą!") : ""}</a>`;
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
          <div class="bar"><div class="bar-fill" style="width:${pct}%;background:#fff"></div></div>
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

  function viewTopic(subject, topic, tab) {
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
      body = topic.notes ? `<article class="notes">${md(topic.notes)}</article>` : `<div class="empty">Brak notatki.</div>`;
      body += `
        <div class="actions bottom">
          ${fc.length ? `<a class="btn primary" style="--accent:${subject.color}" href="#/s/${subject.id}/fiszki/${topic.id}">Ucz się z fiszek</a>` : ""}
          ${quiz.length ? `<a class="btn" href="#/s/${subject.id}/quiz/${topic.id}">Sprawdź się w quizie</a>` : ""}
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
  }

  // ---------- fiszki ----------
  let session = null;

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
      ${progressBar(Math.round((s.pos / s.queue.length) * 100), s.subject.color)}
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
      </div>` : ""}`;
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
      ${progressBar(Math.round((s.pos / s.qs.length) * 100), s.subject.color)}
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
      </div>`;
  }

  // ---------- zdarzenia ----------
  // ---------- kopia zapasowa ----------
  const BACKUP_APP = "nauka-drugi-rok";

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
    const payload = { app: BACKUP_APP, version: 1, created: now.toISOString(), data: { cards: store.cards, quiz: store.quiz, exams: store.exams } };
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
      store.cards = data.cards || {};
      store.quiz = data.quiz || {};
      store.exams = data.exams || {};
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

  app.addEventListener("click", (ev) => {
    const el = ev.target.closest("[data-action]");
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
      if (session.chosen === session.qs[session.pos].a) session.score++;
      renderQuiz();
    } else if (action === "next-q") {
      session.pos++;
      session.chosen = null;
      renderQuiz();
      window.scrollTo(0, 0);
    } else if (action === "restart-quiz") {
      startQuiz(session.subject, session.topicId);
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
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "kopia") return viewBackup();
    if (parts[0] !== "s") return viewHome();
    const subject = getSubject(parts[1]);
    if (!subject) return viewHome();
    const sub = parts[2];
    if (!sub) return viewSubject(subject);
    if (sub === "t") {
      const topic = subject.topics.find((t) => t.id === parts[3]);
      if (!topic) return viewSubject(subject);
      return viewTopic(subject, topic, parts[4]);
    }
    if (sub === "fiszki") {
      if (!subjectCards(subject, parts[3]).length) return viewSubject(subject);
      return startFlashcards(subject, parts[3]);
    }
    if (sub === "quiz") {
      if (!subjectQuiz(subject, parts[3]).length) return viewSubject(subject);
      return startQuiz(subject, parts[3]);
    }
    viewSubject(subject);
  }

  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
  route();
})();
