// Pozostałe przedmioty z folderu „drugi rok JULIA / 1 semestr”.
// Na razie tylko szkielet (tematy bez treści); treść będzie dodawana po kolei.
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push(
  {
    id: "metodologia",
    name: "Metodologia badań i statystyka",
    short: "Metodologia",
    icon: "📊",
    color: "#0e9f6e",
    sources: [
      "Wykłady 01–09 (Organizacja, Proces badawczy, Zmienne, Hipotezy, Opis statystyczny, Analiza korelacji, Porównywanie średnich, Two-way ANOVA)",
      "100 pytań do – Metodologia.pdf",
      "Statystyka100Pytań.pdf + odpowiedzi",
      "Procedury badawcze.pdf, Raport.pdf, Literatura.pdf"
    ],
    topics: [
      { id: "proces", title: "Proces badawczy" },
      { id: "zmienne", title: "Zmienne" },
      { id: "hipotezy", title: "Hipotezy" },
      { id: "opis", title: "Opis statystyczny" },
      { id: "korelacja", title: "Analiza korelacji" },
      { id: "srednie", title: "Porównywanie średnich" },
      { id: "anova", title: "Dwuczynnikowa analiza wariancji" }
    ]
  },
  {
    id: "diagnostyka",
    name: "Wprowadzenie do diagnostyki psychologicznej",
    short: "Diagnostyka",
    icon: "🔍",
    color: "#e0457b",
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
    color: "#f59e0b",
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
    color: "#2b8cd6",
    sources: [
      "Notatka_Rozmowa_diagnostyczna.pdf"
    ],
    topics: [
      { id: "rozmowa", title: "Rozmowa diagnostyczna" }
    ]
  }
);
