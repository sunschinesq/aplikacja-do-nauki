// Pozostałe przedmioty z folderu „drugi rok JULIA / 1 semestr”.
// Na razie tylko szkielet (tematy bez treści); treść będzie dodawana po kolei.
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push(
  {
    id: "diagnostyka",
    name: "Wprowadzenie do diagnostyki psychologicznej",
    short: "Diagnostyka",
    icon: "🔍",
    color: "#c2255c",
    sources: [
      "Prezentacje 1–9 (docx) i slajdy diagnostyka 1–8 (pptx)",
      "Pytania egzamin.pdf",
      "Stemplewska-Żakowicz – Diagnoza psychologiczna"
    ],
    topics: [
      { id: "pytania", title: "Pytania egzaminacyjne" },
      { id: "wyklady", title: "Wykłady 1–9" }
    ]
  },
  {
    id: "poznawcze",
    name: "Diagnoza sprawności poznawczych",
    short: "Sprawności poznawcze",
    icon: "🧩",
    color: "#f06595",
    sources: [
      "pracka: Etyka diagnosty.pdf, Etyka_notatka_pelna.pdf",
      "falewicz: (folder pusty)"
    ],
    topics: [
      { id: "etyka", title: "Etyka diagnosty" }
    ]
  },
  {
    id: "pomoc",
    name: "Podstawy pomocy psychologicznej",
    short: "Pomoc psychologiczna",
    icon: "🤝",
    color: "#d6336c",
    sources: [
      "Notatka_Rozmowa_diagnostyczna.pdf"
    ],
    topics: [
      { id: "rozmowa", title: "Rozmowa diagnostyczna" }
    ]
  }
);
