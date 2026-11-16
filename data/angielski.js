// Angielski – lektorat. Słówka z listy „Psychology vocabulary I” (zdjęcia od Julii, zaliczenie 23.11.2026).
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "angielski",
  name: "Angielski – lektorat",
  short: "Angielski",
  icon: "🇬🇧",
  color: "#4c6ef5",
  // data zaliczenia ustawiana automatycznie przy pierwszym uruchomieniu (można ją zmienić w przedmiocie)
  examDate: "2026-11-23",
  exam: { questions: 22, minutes: 15, pass: 12, note: "Próbne zaliczenie ze słówek „Psychology vocabulary I” (22 słówka). Format orientacyjny – nie znam dokładnych zasad zaliczenia." },
  sources: [
    "Psychology vocabulary I – lista 22 słówek z lektoratu (zdjęcia z 16.11), zaliczenie 23.11"
  ],
  topics: [
    // ------------------------------------------------------------------
    {
      id: "social",
      title: "Psychology vocabulary I: social influence & cognition (1–11)",
      notes: `
Lista **Psychology vocabulary I** – słówka 1–11. **Zaliczenie: 23 listopada.**

## Social influence – wpływ społeczny
| English | Polski |
|---|---|
| **informational social influence** | wpływ informacyjny; potrzeba zachowania pozytywnego obrazu siebie |
| **normative social influence** | potrzeba bycia akceptowanym społecznie |
| **conformity** | konformizm |
| **compliance** | uległość, uleganie |

## Social cognition – poznanie społeczne
| English | Polski |
|---|---|
| **schemas / schemata** | schematy |
| **preconceived idea** | pomysł przyjęty z góry (z góry przyjęte wyobrażenie) |
| **primacy effect** | efekt pierwszeństwa |
| **self-fulfilling prophecy** | samospełniająca się przepowiednia |

## Latent vs manifest (np. treść snu u Freuda)
| English | Polski |
|---|---|
| **latent** | ukryty, utajony |
| **manifest** | jawny, oczywisty |
| **lucid** (dream) | świadomy (sen) |

> Wskazówki do zapamiętania:
> - **normative** – *norm* = norma → chcemy pasować do grupy; **informational** – *information* → grupa daje nam informację.
> - **schema** – liczba pojedyncza; **schemas / schemata** – liczba mnoga.
> - **latent** ↔ **manifest** – jak treść utajona i jawna snu u Freuda (*latent content*, *manifest content*).
> - **lucid** – *lucid dream* = świadomy sen, w którym wiesz, że śnisz.`,
      flashcards: [
        ["informational social influence", "wpływ informacyjny; potrzeba zachowania pozytywnego obrazu siebie"],
        ["normative social influence", "potrzeba bycia akceptowanym społecznie"],
        ["conformity", "konformizm"],
        ["compliance", "uległość, uleganie"],
        ["schemas / schemata", "schematy"],
        ["preconceived idea", "pomysł przyjęty z góry"],
        ["primacy effect", "efekt pierwszeństwa"],
        ["self-fulfilling prophecy", "samospełniająca się przepowiednia"],
        ["latent", "ukryty, utajony"],
        ["manifest", "jawny, oczywisty"],
        ["lucid (dream)", "świadomy (sen)"]
      ],
      pairs: [
        ["informational social influence", "wpływ informacyjny"],
        ["normative social influence", "potrzeba akceptacji społecznej"],
        ["conformity", "konformizm"],
        ["compliance", "uległość"],
        ["schemata", "schematy"],
        ["preconceived idea", "pomysł przyjęty z góry"],
        ["primacy effect", "efekt pierwszeństwa"],
        ["self-fulfilling prophecy", "samospełniająca się przepowiednia"],
        ["latent", "ukryty, utajony"],
        ["manifest", "jawny, oczywisty"],
        ["lucid dream", "świadomy sen"]
      ],
      quiz: [
        { q: "„conformity” to po polsku:", o: ["konformizm", "uległość", "zgodność ocen", "konsolidacja"], a: 0, e: "conformity – konformizm; compliance – uległość." },
        { q: "„compliance” to po polsku:", o: ["uległość, uleganie", "konformizm", "współczucie", "kompetencja"], a: 0, e: "compliance – uległość, uleganie." },
        { q: "Jak po angielsku „efekt pierwszeństwa”?", o: ["primacy effect", "recency effect", "priming effect", "first effect"], a: 0, e: "primacy effect – efekt pierwszeństwa." },
        { q: "Jak po angielsku „samospełniająca się przepowiednia”?", o: ["self-fulfilling prophecy", "self-made prediction", "self-fulfilling prediction effect", "preconceived idea"], a: 0, e: "self-fulfilling prophecy." },
        { q: "„latent” to po polsku:", o: ["ukryty, utajony", "jawny, oczywisty", "świadomy", "późny"], a: 0, e: "latent ↔ manifest (ukryty ↔ jawny)." },
        { q: "„manifest” to po polsku:", o: ["jawny, oczywisty", "ukryty, utajony", "świadomy", "manifestacyjny"], a: 0, e: "manifest – jawny, oczywisty." },
        { q: "„lucid dream” to:", o: ["świadomy sen", "koszmar senny", "sen na jawie", "lunatyzm"], a: 0, e: "lucid – świadomy (sen)." },
        { q: "Jak po angielsku „schematy”?", o: ["schemas / schemata", "schemes", "schematics", "scripts"], a: 0, e: "schema (l.p.) → schemas / schemata (l.mn.)." },
        { q: "„preconceived idea” to po polsku:", o: ["pomysł przyjęty z góry", "pomysł wymyślony wspólnie", "idea wrodzona", "pierwsze wrażenie"], a: 0, e: "preconceived – przyjęty z góry." },
        { q: "„potrzeba bycia akceptowanym społecznie” to:", o: ["normative social influence", "informational social influence", "compliance", "primacy effect"], a: 0, e: "normative – od norm grupy." },
        { q: "„wpływ informacyjny” to:", o: ["informational social influence", "normative social influence", "conformity", "self-fulfilling prophecy"], a: 0, e: "informational social influence." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "sleep",
      title: "Psychology vocabulary I: sleep & sleep disorders (12–22)",
      notes: `
Lista **Psychology vocabulary I** – słówka 12–22. **Zaliczenie: 23 listopada.**

## Dwie główne grupy zaburzeń snu
| English | Polski |
|---|---|
| **parasomnias** | zaburzenia snu charakteryzujące się nieprawidłowymi lub niepożądanymi zachowaniami w trakcie jego trwania lub przy wybudzaniu się |
| **dyssomnia** | zaburzenia snu charakteryzujące się nieprawidłową ilością, jakością oraz czasem jego trwania |

## Sen i zaburzenia snu
| English | Polski |
|---|---|
| **circadian rhythm** | rytm okołodobowy |
| **restless leg syndrome** | zespół niespokojnych nóg |
| **somnambulism** | lunatyzm |
| **insomnia** | bezsenność |
| **narcolepsy** | narkolepsja |
| **sleep apnoea** | bezdech senny |
| **SRED – sleep-related eating disorder** | zespół nocnego jedzenia, zespół nocnego objadania się, syndrom nocnego jedzenia |
| **memory consolidation** | konsolidacja pamięci (na liście: „rekonsolidacja pamięci”) |
| **nocturnal enuresis** | moczenie nocne |

> Wskazówki do zapamiętania:
> - **para-somnia** = „obok snu” – dziwne **zachowania** w czasie snu (lunatyzm, nocne jedzenie, moczenie nocne); **dys-somnia** = „zły sen” – zła **ilość, jakość, czas** snu (bezsenność, narkolepsja).
> - **circa diem** (łac.) = „około dnia” → *circadian* = okołodobowy.
> - **somnus** (łac.) = sen, **ambulare** = chodzić → *somnambulism* = chodzenie we śnie.
> - **in-somnia** = „bez snu”; **nocturnal** = nocny; **apnoea** (brytyjska pisownia; amer. *apnea*) = bezdech.

> Uwaga: na liście przy *memory consolidation* jest „rekonsolidacja pamięci”. Dosłownie to **konsolidacja** pamięci (*reconsolidation* to osobne pojęcie) – na zaliczeniu warto znać oba słowa.`,
      flashcards: [
        ["parasomnias", "zaburzenia snu charakteryzujące się nieprawidłowymi lub niepożądanymi zachowaniami w trakcie jego trwania lub przy wybudzaniu się"],
        ["dyssomnia", "zaburzenia snu charakteryzujące się nieprawidłową ilością, jakością oraz czasem jego trwania"],
        ["circadian rhythm", "rytm okołodobowy"],
        ["restless leg syndrome", "zespół niespokojnych nóg"],
        ["somnambulism", "lunatyzm"],
        ["insomnia", "bezsenność"],
        ["narcolepsy", "narkolepsja"],
        ["sleep apnoea", "bezdech senny"],
        ["SRED – sleep-related eating disorder", "zespół nocnego jedzenia, zespół nocnego objadania się, syndrom nocnego jedzenia"],
        ["memory consolidation", "konsolidacja pamięci (na liście: rekonsolidacja pamięci)"],
        ["nocturnal enuresis", "moczenie nocne"]
      ],
      pairs: [
        ["parasomnias", "nieprawidłowe zachowania w czasie snu"],
        ["dyssomnia", "zła ilość, jakość i czas snu"],
        ["circadian rhythm", "rytm okołodobowy"],
        ["restless leg syndrome", "zespół niespokojnych nóg"],
        ["somnambulism", "lunatyzm"],
        ["insomnia", "bezsenność"],
        ["narcolepsy", "narkolepsja"],
        ["sleep apnoea", "bezdech senny"],
        ["SRED", "zespół nocnego jedzenia"],
        ["memory consolidation", "konsolidacja pamięci"],
        ["nocturnal enuresis", "moczenie nocne"]
      ],
      quiz: [
        { q: "„insomnia” to po polsku:", o: ["bezsenność", "narkolepsja", "lunatyzm", "bezdech senny"], a: 0, e: "in-somnia = bez snu." },
        { q: "„somnambulism” to po polsku:", o: ["lunatyzm", "senność", "bezsenność", "moczenie nocne"], a: 0, e: "somnus + ambulare = chodzenie we śnie." },
        { q: "Jak po angielsku „rytm okołodobowy”?", o: ["circadian rhythm", "daily cycle", "circular rhythm", "nocturnal rhythm"], a: 0, e: "circa diem = około dnia." },
        { q: "Jak po angielsku „bezdech senny”?", o: ["sleep apnoea", "sleep paralysis", "narcolepsy", "insomnia"], a: 0, e: "apnoea (bryt.) / apnea (amer.)." },
        { q: "„nocturnal enuresis” to po polsku:", o: ["moczenie nocne", "nocne jedzenie", "nocne lęki", "lunatyzm"], a: 0, e: "nocturnal = nocny." },
        { q: "Co oznacza skrót SRED?", o: ["sleep-related eating disorder – zespół nocnego jedzenia", "sleep rhythm disorder – zaburzenia rytmu snu", "severe REM disorder", "sleep-related enuresis disorder"], a: 0, e: "SRED – zespół nocnego jedzenia / objadania się." },
        { q: "Zaburzenia snu z nieprawidłowymi zachowaniami w czasie snu lub przy wybudzaniu to:", o: ["parasomnias", "dyssomnia", "insomnia", "circadian rhythm"], a: 0, e: "para-somnia = „obok snu” – zachowania." },
        { q: "Zaburzenia snu z nieprawidłową ilością, jakością i czasem snu to:", o: ["dyssomnia", "parasomnias", "somnambulism", "enuresis"], a: 0, e: "dys-somnia = „zły sen”." },
        { q: "Jak po angielsku „zespół niespokojnych nóg”?", o: ["restless leg syndrome", "nervous leg disorder", "moving legs syndrome", "sleep apnoea"], a: 0, e: "restless = niespokojny." },
        { q: "„narcolepsy” to po polsku:", o: ["narkolepsja", "bezsenność", "lunatyzm", "zespół niespokojnych nóg"], a: 0, e: "narcolepsy – narkolepsja." },
        { q: "„memory consolidation” to po polsku:", o: ["konsolidacja pamięci", "zanik pamięci", "pamięć robocza", "przypominanie"], a: 0, e: "Na liście z zajęć zapisano „rekonsolidacja pamięci”." }
      ]
    }
  ]
});
