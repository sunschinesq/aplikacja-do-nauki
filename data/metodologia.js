// Metodologia badań psychologicznych i statystyka. Opracowane na podstawie plików z Dysku:
// wykłady 01–09, Procedury badawcze.pdf, 100 pytań do - Metodologia.pdf,
// Statystyka100Pytań.pdf + OdpowiedziStatystyka100pytań.pdf (quiz w metodologia-statystyka100.js)
window.SUBJECTS = window.SUBJECTS || [];
(function () {
  const STAT = window.METODOLOGIA_QUIZ || {};
  // Pytania z „100 pytań do – Metodologia” (plik bez klucza): odpowiedzi opracowane na podstawie wykładów
  const M = (n, q, o, a, e) => ({ q, o, a, e, src: `100 pytań do metodologii, nr ${n} (odpowiedź wg wykładów – plik nie ma klucza)` });

  window.SUBJECTS.push({
    id: "metodologia",
    name: "Metodologia badań i statystyka",
    short: "Metodologia",
    icon: "📊",
    color: "#e64980",
    sources: [
      "Wykłady 01–09: Organizacja, Proces badawczy, Zmienne, Hipotezy, Opis statystyczny, Analiza korelacji, Porównywanie średnich (2 części), Dwuczynnikowa ANOVA",
      "Procedury badawcze.pdf",
      "100 pytań do – Metodologia.pdf (bez klucza)",
      "Statystyka100Pytań.pdf + OdpowiedziStatystyka100pytań.pdf (100 pytań z kluczem – wszystkie są w quizach)"
    ],
    topics: [
      // ------------------------------------------------------------------
      {
        id: "podstawy",
        title: "Podstawowe pojęcia i zasady zaliczenia",
        notes: `
## Zaliczenie
- **Ćwiczenia**: obecność (2 usprawiedliwione nieobecności), **raport z badań empirycznych**, aktywność.
- **Egzamin**: 30 pytań w 30 minut, **zaliczenie od 16 poprawnych odpowiedzi**. Warunek: zaliczone ćwiczenia.

## Definicje
- **Psychologia** – nauka o funkcjonowaniu psychicznym człowieka: procesach emocjonalnych, poznawczych, społecznych i zachowaniu (Kozielecki).
- **Metodologia** – zbiór reguł: **jak badać, kogo badać, czym badać, gdzie badać**; jej celem jest tworzenie coraz lepszych sposobów pomiaru zjawisk (Shaughnessy i in.).
- **Badanie empiryczne** – usystematyzowany sposób obserwacji i pomiaru zjawisk w celu ich obiektywizacji (Brzeziński); np. obserwacja, eksperyment, sondaż, wywiad.
- **Statystyka** – nauka o analizie i prezentacji danych (najczęściej ilościowych) ze zjawisk masowych. Jest nauką **służebną** – jej narzędzia dopasowuje się do dziedziny.

## Język nauki (Feynman)
- Teorii nie da się **udowodnić** – można tylko wykazać, że jest błędna (falsyfikacja).
- Mówimy „bardziej prawdopodobne niż…”, „wyniki wspierają…”, a nie „udowodniono”.

> Na pamięć: nauka nigdy nie „udowadnia” ani nie „potwierdza” – wyniki są **zgodne** z hipotezą albo **wspierają** ją.
`,
        flashcards: [
          ["Ile pytań ma egzamin z metodologii i ile trzeba zdobyć?", "30 pytań w 30 minut; zaliczenie od 16 poprawnych odpowiedzi."],
          ["Czym jest metodologia?", "Zbiorem reguł: jak, kogo, czym i gdzie badać; jej celem jest doskonalenie sposobów pomiaru zjawisk."],
          ["Czym jest badanie empiryczne (Brzeziński)?", "Usystematyzowanym sposobem obserwacji i pomiaru zjawisk w celu ich obiektywizacji."],
          ["Dlaczego statystyka jest nauką służebną?", "Bo jej narzędzia są dopasowane do specyfiki zjawisk badanych przez naukę główną (np. psychologię)."],
          ["Czy w nauce można udowodnić teorię?", "Nie. Można tylko wykazać, że jest błędna (falsyfikacja); wyniki co najwyżej ją wspierają."]
        ],
        quiz: []
      },
      // ------------------------------------------------------------------
      {
        id: "raport",
        title: "Raport z badań wg APA 7",
        notes: `
## Struktura raportu
- Strona tytułowa
- **Streszczenie** + **Słowa kluczowe**
- **Wprowadzenie** – nagłówkiem jest ponownie **tytuł pracy** (nie „Wstęp”)
- **Metoda** (nie „Metodologia”)
- **Wyniki** (nie „Analiza wyników”)
- **Dyskusja**
- **Literatura** (nie „Bibliografia”!)
- ewentualnie Załączniki

## Najważniejsze zasady
- **Streszczenie**: maks. **250 słów**, co najmniej 4 akapity (wprowadzenie, metoda, wyniki, dyskusja), bez liczb.
- **Słowa kluczowe**: **3–7**, inne niż w tytule, pod streszczeniem.
- **Wprowadzenie**: zasada **lejka** (od ogółu do szczegółu, na końcu problem badawczy); akapit ma min. 3 zdania i co najmniej 1 odwołanie do literatury na 3 zdania.
- **Metoda** – podrozdziały: cel i przedmiot badań, **hipotezy**, zmienne i operacjonalizacja, **procedura**, **narzędzia**, **uczestnicy**.
- **Hipotezy**: 3–5, o **zmiennych** i **populacji** (nie o wynikach testów i próbie), w czasie teraźniejszym, bez terminów statystycznych; „większe” – zawsze **niż co**; unikamy słowa „wpływ”.
- **Procedura**: metoda badania → technika pomiaru → prototypowy uczestnik (kryteria włączenia i wykluczenia) → **dobór próby badanej** (nigdy „próby badawczej”!) → przebieg badania.
- **Narzędzia**: autor i rok (adaptacja), co mierzy, instrukcja, sposób odpowiedzi, zakres wyników, **dlaczego to narzędzie**.
- **Uczestnicy**: opis **już zbadanej** próby (liczebność, wiek, płeć…).
- **Wyniki**: podrozdział na każdą hipotezę; nigdy „wyniki potwierdzają / hipoteza jest prawdziwa”.
- **Literatura**: tylko pozycje cytowane w pracy, także nowe artykuły (z ostatnich 10 lat).

## Cel i przedmiot badań
- **Przedmiot** = mechanizm, proces lub zjawisko psychologiczne (np. inteligencja studentów, facylitacja społeczna). Nie: „związek między…”, „osoby z…”.
- **Cele naukowe**: **opis** (charakterystyka), **wyjaśnianie**, **przewidywanie** (rzadko w psychologii).
- Poprawne cele: scharakteryzowanie zjawiska, ocena różnic między…, określenie związku między…, ocena znaczenia… dla wyjaśnienia….
- Błędne cele: „zbadanie, czy…”, „sprawdzenie, czy…”, „odpowiedź na pytanie…”, „weryfikacja / potwierdzenie hipotezy”.

> Na pamięć: Literatura, nie Bibliografia · Metoda, nie Metodologia · dobór próby **badanej**, nie badawczej.
`,
        flashcards: [
          ["Kolejność części raportu wg APA", "Strona tytułowa, Streszczenie i Słowa kluczowe, Wprowadzenie (tytuł pracy), Metoda, Wyniki, Dyskusja, Literatura, (Załączniki)."],
          ["Maksymalna długość streszczenia", "250 słów; co najmniej 4 akapity, bez liczb."],
          ["Ile słów kluczowych?", "3–7, inne niż w tytule pracy."],
          ["Jak zatytułować wprowadzenie?", "Ponownie tytułem pracy (nie „Wstęp” ani „Wprowadzenie”)."],
          ["Zasada lejka", "Wprowadzenie idzie od pojęć ogólnych do szczegółowych i kończy się problemem badawczym."],
          ["Podrozdziały części „Metoda”", "Cel i przedmiot badań, hipotezy, zmienne i operacjonalizacja, procedura, narzędzia, uczestnicy."],
          ["Czego dotyczy hipoteza w raporcie?", "Zmiennych psychologicznych i populacji – nie wyników testów ani badanej próby."],
          ["Czym jest przedmiot badań psychologicznych?", "Mechanizmem, procesem lub zjawiskiem psychologicznym."],
          ["Trzy cele naukowe badań", "Opis (charakterystyka), wyjaśnianie, przewidywanie."],
          ["Podaj błędne sformułowania celu badania", "„Zbadanie, czy…”, „sprawdzenie, czy…”, „odpowiedź na pytanie…”, „weryfikacja/potwierdzenie hipotezy”."],
          ["Procedura vs Uczestnicy", "Procedura opisuje idealnego (prototypowego) uczestnika i sposób doboru; Uczestnicy – faktycznie zbadaną próbę."],
          ["Co musi zawierać opis narzędzia?", "Autora i rok, co mierzy, instrukcję, sposób odpowiedzi, zakres wyników i uzasadnienie wyboru."],
          ["Literatura czy bibliografia?", "Literatura – i tylko pozycje cytowane w pracy."]
        ],
        quiz: [
          M(9, "Podstawowym celem badań psychologicznych NIE jest:", ["Scharakteryzowanie badanej populacji oraz wyjaśnienie badanych mechanizmów", "Zrozumienie znaczenia wybranych zmiennych dla kształtowania badanego mechanizmu", "Wyjaśnienie zależności między badanymi zmiennymi w danej populacji", "Odpowiedź na pytanie badawcze i/lub weryfikacja hipotez badawczych"], 3, "Wykład: celem badania nigdy nie jest „odpowiedź na pytanie” ani „weryfikacja hipotezy”."),
          { q: "Jak powinien być zatytułowany ostatni rozdział ze spisem źródeł w raporcie APA?", o: ["Bibliografia", "Literatura", "Źródła internetowe", "Przypisy"], a: 1, e: "Wykład 02: „Literatura (UWAGA: NIE BIBLIOGRAFIA!)”." },
          { q: "Które sformułowanie celu badania jest poprawne?", o: ["Celem badania jest sprawdzenie, czy kobiety są bardziej empatyczne", "Celem badania jest ocena różnic w empatii między kobietami a mężczyznami", "Celem badania jest potwierdzenie hipotezy o empatii", "Celem badania jest odpowiedź na pytanie o empatię"], a: 1, e: "Poprawne cele: scharakteryzowanie, ocena różnic, określenie związku." }
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "zmienne",
        title: "Zmienne: funkcja, charakter, skala pomiarowa",
        notes: `
## Zmienna i wskaźnik
- **Zmienna** – nieobserwowalna właściwość zjawiska, która pozwala odróżnić obserwacje lub ich stan (Howell).
- **Model refleksyjny** (Platon): zmienne są realne, ale nieobserwowalne; **powodują** obserwowalne **wskaźniki**, a my o zmiennych wnioskujemy.
- **Model formatywny** (Arystoteles): realne są tylko obserwacje; zmienna to konstrukt, który je porządkuje.
- **Operacjonalizacja** – przełożenie pojęcia teoretycznego na konkretną procedurę pomiaru lub manipulacji (np. agresja = liczba uderzeń lalki Bobo).
- Kolejność ogólności: **zmienna** (np. pamięć operacyjna) → **wskaźnik** (wynik testu) → **narzędzie** (Test Powtarzania Cyfr).

## Funkcja zmiennej
| Funkcja | Inne nazwy | Rola |
|---|---|---|
| **Niezależna** | predyktor, wyjaśniająca, egzogeniczna | „przyczyna” |
| **Zależna** | wynikowa, wyjaśniana, endogeniczna | „skutek” |
| **Mediator** | pośrednicząca | **wyjaśnia**, *dlaczego / jak* X wiąże się z Y |
| **Moderator** | | zmienia siłę lub kierunek związku – *kiedy / dla kogo* |
| **Uboczna** | kontrolowana | kontekst; niekontrolowana może stać się **zakłócającą** |

**Mediator vs moderator**
- Moderator jest **niezależny** (nieskorelowany) od zmiennej niezależnej; mediator jest jej „skutkiem” lub częścią mechanizmu.
- Moderator **zmienia** związek, mediator go **wyjaśnia**.
- Mediator powstaje zwykle **później** niż zmienna niezależna, moderator równocześnie lub wcześniej.
- Statystycznie: moderator → **efekt interakcji**; mediator → porównanie siły związku z mediatorem i bez niego.
- Metafora: elektrownia (niezależna) → **podstacja (mediator)** → żarówka (zależna); **przełącznik (moderator)**.

## Charakter zmiennej
- **Dyskretna (skokowa)** – skończona liczba wartości, brak wartości pośrednich (płeć, narodowość, kolor włosów).
- **Ciągła** – nieskończenie wiele wartości, continuum (wzrost, inteligencja, satysfakcja z życia).

## Skala pomiarowa
| Skala | Co umożliwia | Przykład |
|---|---|---|
| **Nominalna** | odróżnia, ale nie porządkuje | płeć, diagnoza (kody 0–3), rodzaj kawy |
| **Porządkowa** | porządkuje, ale nie mierzy odległości („krzywe schody”) | status materialny, oceny szkolne, skala Likerta (formalnie) |
| **Ilościowa** (interwałowa + ilorazowa) | mierzy różnice; zwykle ma jednostkę | IQ (interwałowa – brak absolutnego zera), czas reakcji (ilorazowa – jest zero) |

> Na pamięć: nominalna = „inne”, porządkowa = „więcej / mniej”, ilościowa = „o ile”. Moderator = **kiedy**, mediator = **dlaczego**.
`,
        flashcards: [
          ["Czym jest zmienna (Howell)?", "Nieobserwowalną właściwością zjawiska, która pozwala odróżnić obserwacje lub ich stan."],
          ["Model refleksyjny vs formatywny", "Refleksyjny: realna, nieobserwowalna zmienna powoduje obserwowalne wskaźniki. Formatywny: realne są tylko obserwacje, zmienna to konstrukt."],
          ["Operacjonalizacja", "Przełożenie pojęcia teoretycznego na konkretną procedurę pomiaru lub manipulacji."],
          ["Zmienna – wskaźnik – narzędzie (przykład)", "Pamięć operacyjna – wynik testu – Test Powtarzania Cyfr."],
          ["Inne nazwy zmiennej niezależnej", "Predyktor, zmienna wyjaśniająca, egzogeniczna."],
          ["Inne nazwy zmiennej zależnej", "Wynikowa, wyjaśniana, endogeniczna."],
          ["Mediator", "Zmienna wyjaśniająca mechanizm – dlaczego/jak X wiąże się z Y (np. stres → bezsenność → wypalenie)."],
          ["Moderator", "Zmienna, która zmienia siłę lub kierunek związku X–Y – kiedy/dla kogo zachodzi (np. terapia działa tylko przy wysokiej inteligencji emocjonalnej)."],
          ["Jak statystycznie wykrywa się moderator?", "Testując efekt interakcji."],
          ["Zmienna zakłócająca", "Niekontrolowana zmienna uboczna, która zmienia się razem ze zmienną niezależną i zaburza wnioskowanie (np. temperatura w sali)."],
          ["Zmienna dyskretna vs ciągła", "Dyskretna – skończona liczba wartości bez pośrednich. Ciągła – continuum, nieskończenie wiele wartości."],
          ["Skala nominalna", "Odróżnia kategorie, ale ich nie porządkuje (płeć, diagnoza)."],
          ["Skala porządkowa", "Porządkuje kategorie, ale nie mówi, o ile się różnią (status materialny, oceny szkolne)."],
          ["Skala ilościowa", "Mierzy różnice między wartościami; interwałowa (IQ, brak absolutnego zera) i ilorazowa (czas, jest zero)."],
          ["Na jakiej skali jest skala Likerta 1–5?", "Formalnie porządkowej; w praktyce często traktowana jako quasi-ilościowa."]
        ],
        quiz: [
          M(37, "Im wyższy status materialny, tym większa satysfakcja z życia, ale efekt jest silny w miastach, a znikomy na wsi. Miejsce zamieszkania to:", ["Zmienna niezależna", "Zmienna zależna", "Mediator", "Moderator"], 3, "Miejsce zamieszkania zmienia siłę związku – to moderator."),
          M(40, "Respondenci określali swoją płeć psychologiczną jako natężenie (0–100) cech męskich i osobno żeńskich. Płeć jest tu zmienną:", ["Dyskretną", "Porządkową", "Trudno powiedzieć bez hipotez", "Ilościową"], 3, "Natężenie od 0 do 100 to pomiar ilościowy."),
          M(42, "Oceny w skali szkolnej (2; 3; 3,5; 4; 4,5; 5) są mierzone co najwyżej na poziomie:", ["nominalnym", "ilościowym", "nie można ocenić bez procedury", "porządkowym"], 3, "Oceny są uporządkowane, ale odstępy między nimi nie są równe."),
          M(47, "Pamięć operacyjną zbadano Testem Powtarzania Cyfr po kawie naturalnej i bezkofeinowej. Test Powtarzania Cyfr to:", ["Zmienna zależna", "Wskaźnik zmiennej zależnej", "Wszystkie odpowiedzi są poprawne", "Narzędzie badawcze"], 3, "Narzędzie to coś konkretnego, „namacalnego” – wynik operacjonalizacji."),
          M(48, "W tym samym badaniu zmienną zależną jest:", ["Rodzaj kawy", "Wynik Testu Powtarzania Cyfr", "Test Powtarzania Cyfr", "Pamięć operacyjna"], 3, "Zmienna to pamięć operacyjna; wynik testu jest jej wskaźnikiem."),
          M(49, "Na jakiej skali jest zmienna „typ kawy” (naturalna vs bezkofeinowa)?", ["Ilościowej", "Porządkowej", "Nie można określić bez danych", "Nominalnej"], 3, "Dwie kategorie, których nie da się uporządkować."),
          M(55, "Bargh: uczestnicy rozwiązywali krzyżówkę z hasłami o starości lub młodości, potem mierzono czas przejścia przez hol. Torowany konstrukt to:", ["zmienna zależna", "zmienna wyjaśniana", "moderator", "zmienna niezależna"], 3, "Badacz manipuluje aktywowanym konstruktem – to zmienna niezależna."),
          M(57, "W badaniu Bargha czas przejścia przez hol był:", ["zmienną zależną", "zmienną niezależną", "moderatorem", "wskaźnikiem zmiennej zależnej"], 3, "Zmienną zależną jest tempo chodzenia; zmierzony czas to jej wskaźnik."),
          ...(STAT.zmienne || [])
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "procedury",
        title: "Procedury badawcze, dobór próby, trafność",
        notes: `
## Typologia procedur badawczych
- **Eksperymentalne**: eksperyment **laboratoryjny**, eksperyment **naturalny**.
- **Quasi-eksperymentalne**: **ex post facto**, grupy równoległe (badanie kohortowe), badanie jednej grupy (pretest–posttest).
- **Nieeksperymentalne**: sondaż (badanie **korelacyjne**), analiza danych zastanych.
- Najwyżej cenione: **przegląd literatury i metaanaliza**.

## Eksperyment
- Badacz **manipuluje** zmienną niezależną i w kontrolowanych warunkach mierzy zmienną zależną.
- Próba **nie musi być losowa** – losowy musi być **przydział do warunków** (randomizacja II stopnia).
- Pozwala wnioskować o przyczynowości.
- **Laboratoryjny**: pełna kontrola, ale sztuczna sytuacja (np. Asch).
- **Naturalny**: słaba kontrola, łatwa generalizacja (wyższa **trafność ekologiczna**), słabsze efekty – potrzeba większych prób (np. Aronson i zgubione portfele, huśtawka emocjonalna Dolińskiego).
- „Eksperymenty”, które **nie są** eksperymentami: więzienny Zimbardo, efekt potknięcia Aronsona.

## Quasi-eksperyment i badania korelacyjne
- **Quasi-eksperyment**: brak pełnej manipulacji i **brak losowego przydziału** do grup (np. płeć, status rodziny).
- **Ex post facto / kohortowe**: porównanie grup, które **wcześniej wyodrębniły się** w populacji bez udziału badacza (np. rozwód z orzeczeniem winy męża / żony / bez orzekania).
- **Pretest–posttest (panel)**: jedna grupa mierzona przed i po.
- **Korelacyjne**: brak manipulacji, zwykle kwestionariusze; pozwala badać to, czego nie da się manipulować (osobowość); wysoka trafność ekologiczna; nie daje wniosków przyczynowych.

## Plan międzygrupowy vs wewnątrzgrupowy
- **Międzygrupowy** – różne osoby w różnych warunkach.
- **Wewnątrzgrupowy (powtarzane pomiary)** – te same osoby we wszystkich warunkach; każdy jest swoją kontrolą → większa moc.

## Metoda → technika → narzędzie
- **Technika**: **wywiad** (także kwestionariusze, ankiety i inwentarze!), **testowanie** (są odpowiedzi poprawne i błędne), **obserwacja**.
- **Narzędzie** – konkretny, fizyczny wytwór operacjonalizacji; trzeba znać jego **trafność i rzetelność**.
- Osobowości nie bada się **testem** – nie ma poprawnych odpowiedzi; bada się kwestionariuszem, inwentarzem lub skalą obserwacyjną.

## Populacja i dobór próby badanej
- **Populacja** – wszystkie jednostki spełniające kryteria (zwykle nieskończona). **Próba** – skończona część, która ją reprezentuje.
- Dobór **losowy** wymaga: imiennego dostępu do każdej jednostki, aktualnego **operatu losowania** i znikomego odsetka odmów.
- **Warstwowy** – zachowujemy proporcje warstw (np. 60% kobiet, 40% mężczyzn).
- **Systematyczny** – np. co dziesiąta osoba z listy.
- **Kwotowy**, **celowy**, **kula śnieżna**.
- **Przypadkowy / incydentalny / wygodny** – kto akurat jest dostępny (ankieta przed biblioteką).
- Przykład: potrzebuję 15 mężczyzn, a mężczyźni to 30% populacji → losuję ok. **50 osób**.

## Trafność badania
- **Wewnętrzna** – czy wnioski o związku zmiennych są uprawnione (kontrola zmiennych ubocznych).
- **Zewnętrzna** – czy wyniki można **uogólnić** na inne grupy, sytuacje i zachowania.
- **Ekologiczna** – podobieństwo sytuacji badania do naturalnych sytuacji życiowych.
- **Triangulacja** – pomiar zjawiska za pomocą dwóch lub więcej wskaźników / metod.

## Etyka
- Warunek udziału: **świadoma zgoda** uczestnika (lub opiekuna) i spełnienie kryteriów włączenia.
- Milgram, Zimbardo i Mały Albert Watsona nie przeszłyby dziś przez komisję etyczną.
`,
        flashcards: [
          ["Typy procedur badawczych", "Eksperymentalne (laboratoryjny, naturalny), quasi-eksperymentalne (ex post facto, kohortowe, jedna grupa pretest–posttest), nieeksperymentalne (korelacyjne/sondaż, dane zastane)."],
          ["Na czym polega eksperyment?", "Badacz manipuluje zmienną niezależną i w kontrolowanych warunkach mierzy zmienną zależną; losowy przydział do warunków."],
          ["Czy w eksperymencie próba musi być losowa?", "Nie – losowy musi być przydział uczestników do warunków (randomizacja II stopnia)."],
          ["Eksperyment laboratoryjny vs naturalny", "Laboratoryjny: pełna kontrola, sztuczna sytuacja. Naturalny: słabsza kontrola, wysoka trafność ekologiczna, słabsze efekty."],
          ["Czym różni się quasi-eksperyment od eksperymentu?", "Brak pełnej manipulacji i brak losowego przydziału do grup (np. płeć)."],
          ["Badanie ex post facto", "Porównanie grup, które wyodrębniły się w populacji wcześniej, niezależnie od badacza."],
          ["Główna zaleta eksperymentu nad badaniem korelacyjnym", "Pozwala wnioskować o przyczynowości."],
          ["Główna zaleta badań korelacyjnych", "Łatwość i możliwość badania zmiennych, których nie da się manipulować; zwykle wyższa trafność ekologiczna."],
          ["Plan wewnątrzgrupowy", "Te same osoby badane we wszystkich warunkach (powtarzane pomiary); każdy jest swoją kontrolą."],
          ["3 techniki badawcze w psychologii", "Wywiad (także kwestionariusze i ankiety), testowanie, obserwacja."],
          ["Dlaczego osobowości nie bada się testem?", "Bo test ma odpowiedzi poprawne i błędne, a w pomiarze osobowości ich nie ma."],
          ["Warunki doboru losowego", "Imienny dostęp do każdej jednostki, aktualny operat losowania, znikomy odsetek odmów."],
          ["Dobór warstwowy", "Losowanie z zachowaniem proporcji warstw populacji (np. płci)."],
          ["Dobór przypadkowy (wygodny, incydentalny)", "Badamy osoby akurat dostępne (np. przed biblioteką) – metoda nieprobabilistyczna."],
          ["Trafność zewnętrzna", "Możliwość uogólnienia wyników na inne grupy, sytuacje i zachowania."],
          ["Trafność ekologiczna", "Podobieństwo sytuacji badania do naturalnych sytuacji życiowych uczestników."],
          ["Triangulacja metod", "Pomiar badanego zjawiska za pomocą dwóch lub więcej wskaźników lub metod."],
          ["Randomizacja II stopnia", "Losowy przydział uczestników do grup (np. eksperymentalnej i kontrolnej)."]
        ],
        quiz: [
          M(1, "Jakie warunki są konieczne do losowego doboru próby?", ["dostęp imienny do każdej jednostki w populacji", "aktualna baza adresowa (operat losowania)", "znikomy odsetek odmów udziału", "konieczne są wszystkie te warunki jednocześnie"], 3, "Losowanie wymaga wszystkich trzech warunków naraz."),
          M(2, "70% studentów to kobiety, 30% mężczyźni. Ile osób trzeba wylosować, żeby zbadać 15 mężczyzn?", ["100 osób", "15 mężczyzn", "30 osób (połowa kobiet i mężczyzn)", "50 osób"], 3, "15 / 0,30 = 50."),
          M(6, "Jak ocenić trafność zewnętrzną badania?", ["poddać je recenzji zewnętrznych recenzentów", "odszukać zastosowanie wyników w środowisku naturalnym", "określić możliwość uogólnienia wyników na inne grupy i zachowania", "przejrzeć badania z podobnymi wynikami"], 2, "Trafność zewnętrzna = możliwość generalizacji."),
          M(15, "Badania korelacyjne w porównaniu z eksperymentalnymi charakteryzują się:", ["większą rzetelnością pomiaru zmiennych zależnych", "większą trafnością treściową narzędzi", "wszystkie odpowiedzi są poprawne", "większą (najczęściej) trafnością ekologiczną"], 3, "Badanie korelacyjne odbywa się zwykle bliżej naturalnych warunków."),
          M(16, "Randomizacja drugiego stopnia polega na:", ["losowym doborze uczestników z populacji", "losowaniu warstwowym", "równoważeniu liczebności grup", "losowym przydziale wybranych uczestników do grup (np. kontrolnej i eksperymentalnej)"], 3, "Procedury badawcze: brak randomizacji II rzędu = quasi-eksperyment."),
          M(17, "Model badań ex post facto polega na:", ["nie ma takiego modelu", "badaniu jednej grupy przed i po manipulacji", "badaniu grup, gdy manipulujemy co najmniej jedną z nich", "badaniu co najmniej dwóch grup, które wcześniej wyodrębniły się w populacji niezależnie od badacza"], 3, "Podział na grupy dokonał się przed badaniem."),
          M(38, "Hipoteza Plopy: „Typ rodziny pochodzenia (pełna vs niepełna) sprzyja odmiennym stylom przywiązania”. Badanie jest najprawdopodobniej:", ["Eksperymentem", "Badaniem korelacyjnym", "Nie da się tego powiedzieć", "Badaniem kohorty (ex post facto)"], 3, "Typ rodziny ukształtował się wcześniej, bez udziału badacza."),
          M(41, "Plopa porównał stres rozwodzących się par z orzeczeniem winy męża, żony lub bez orzekania. Jaka to metoda?", ["Eksperyment (trzy grupy)", "Badanie korelacyjne", "Wszystkie odpowiedzi są błędne", "Ex post facto lub badanie kohortowe"], 3, "Grupy wyodrębniły się przed badaniem."),
          M(50, "Jakim narzędziem NIE można zbadać osobowości?", ["Inwentarzem osobowości", "Kwestionariuszem osobowości", "Skalami obserwacyjnymi", "Testem osobowości"], 3, "Test wymaga odpowiedzi poprawnych i błędnych – w osobowości ich nie ma."),
          M(53, "Które z popularnych badań ma największą trafność ekologiczną?", ["Eksperyment Ascha z odcinkami", "Eksperyment Milgrama", "Eksperyment więzienny Zimbardo", "Eksperyment Aronsona ze zgubionym portfelem"], 3, "To eksperyment naturalny – w realnym mieście i realnej sytuacji."),
          ...(STAT.procedury || [])
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "hipotezy",
        title: "Hipotezy, błędy I i II rodzaju, p, przedział ufności, wielkość efektu",
        notes: `
## Hipoteza
- Oczekiwana odpowiedź na pytanie badawcze; założenie o związku zmiennych lub różnicy między grupami.
- Hipoteza dotyczy **populacji**, badanie – **próby**.
- Hipotezę się **weryfikuje** – nigdy „potwierdza”, „udowadnia” ani „wykazuje jej prawdziwość”.
- Dobra hipoteza: **falsyfikowalna**, zwięzła, jednoznaczna, w terminach naukowych, o populacji i zmiennych.
- **Błędne**: „Studenci charakteryzują się wysoką inteligencją”, „Studenci uzyskują w teście wyniki wyższe niż 100 IQ”, „Badani studenci są inteligentniejsi niż przeciętni Polacy”.
- **Poprawne**: „Kobiety są bardziej inteligentne niż mężczyźni”, „Inteligencja wiąże się z samooceną studentów”.
- „Wpływa”, „determinuje” – tylko w eksperymentach (i ostrożnie).

## Rodzaje hipotez
- **Teoretyczna** (ogólne pojęcia) vs **operacyjna** (przełożona na konkretne narzędzia).
- **Bezkierunkowa** („kobiety **różnią się** od mężczyzn”, ≠) vs **kierunkowa** („kobiety są **bardziej**…”, > lub <). Kierunkowa ma **większą moc**.
- **H1 (alternatywna, badawcza)** – istnieje efekt. **H0 (zerowa)** – brak efektu (efekt = 0); **to ją testuje statystyka**.
- Np. H1: μ1 ≠ μ2 → H0: μ1 = μ2; H1: K > M → H0: K ≤ M; H1: r ≠ 0 → H0: r = 0.

## Błędy decyzji statystycznej
| Rzeczywistość | Przyjmujemy H0 | Odrzucamy H0 |
|---|---|---|
| H0 prawdziwa (brak efektu) | OK | **błąd I rodzaju (α)** – fałszywe odkrycie |
| H0 fałszywa (efekt jest) | **błąd II rodzaju (β)** – przeoczenie | OK |

- Zwykle **α = 0,05** (umowa, którą badacz może zmienić z uzasadnieniem), **β = 0,20**.
- **Moc testu = 1 − β** – szansa wykrycia istniejącego efektu; pozwala zaplanować liczebność próby.
- Im **niższe α**, tym **wyższe β** (przy tej samej próbie).

## Procedura weryfikacji hipotezy
- sformułuj H0 i H1 →
- oblicz **statystykę testową** (Z, t, F, U, W, χ²; najczęściej ze stopniami swobody **df**) →
- oblicz **p** i podejmij decyzję →
- oszacuj **wielkość efektu** (ES) →
- oszacuj **przedział ufności** (CI) →
- opisz wyniki słownie (APA).

## p-value
- Prawdopodobieństwo uzyskania takiej lub bardziej skrajnej statystyki, **jeśli H0 jest prawdziwa** (≈ ryzyko fałszywego odkrycia w tym badaniu).
- p < α → odrzucamy H0, wyniki **wspierają** H1, efekt **istotny statystycznie**. p ≥ α → brak podstaw do odrzucenia H0.
- p to **nie** „istotność” i **nie** prawdopodobieństwo, że H1 jest prawdziwa.
- Statystyka testowa = efekt / błąd standardowy („ile razy efekt jest większy od przypadku”).

## Przedział ufności (CI)
Zakres wartości, w którym z określonym prawdopodobieństwem (np. 95%) znajduje się prawdziwa wartość parametru w populacji. Jeśli 95% CI dla różnicy **zawiera 0** → wynik nieistotny.

## Standaryzowana wielkość efektu (ES)
- Pozwala porównywać badania (metaanaliza) i ocenić **praktyczną** siłę efektu niezależnie od istotności.
- **Korelacyjne** (0–1 lub −1…1): r, η², R², φ, OR.
- **Standardowe** (w jednostkach SD): d Cohena, g Hedgesa.

| r | siła związku |
|---|---|
| < 0,1 | brak |
| 0,1–0,3 | znikomy / słaby |
| 0,3–0,5 | umiarkowany |
| 0,5–0,7 | silny |
| 0,7–0,9 | bardzo silny |

| d Cohena (klasycznie) | efekt |
|---|---|
| 0,2 | mały |
| 0,5 | średni |
| 0,8 | duży |

> Na pamięć: α = fałszywy **A**larm (widzę efekt, którego nie ma); β = **B**rak wykrycia (nie widzę efektu, który jest).
`,
        flashcards: [
          ["Czym jest hipoteza?", "Oczekiwaną odpowiedzią na pytanie badawcze – założeniem o związku zmiennych lub różnicy między grupami w populacji."],
          ["Co robimy z hipotezą?", "Weryfikujemy ją – nigdy jej nie „potwierdzamy” ani nie „udowadniamy”."],
          ["Cechy poprawnej hipotezy", "Falsyfikowalna, zwięzła, jednoznaczna, w terminach naukowych, dotyczy populacji i zmiennych."],
          ["Hipoteza kierunkowa vs bezkierunkowa", "Kierunkowa określa kierunek (>, <), bezkierunkowa tylko różnicę/związek (≠). Kierunkowa ma większą moc."],
          ["H0 vs H1", "H1 (badawcza) – efekt istnieje. H0 (zerowa) – brak efektu; to ją testuje statystyka."],
          ["H0 dla H1: „Kobiety są inteligentniejsze niż mężczyźni”", "Kobiety ≤ mężczyźni."],
          ["Błąd I rodzaju", "Odrzucenie prawdziwej H0 – „fałszywe odkrycie”; jego ryzyko to α (zwykle 0,05)."],
          ["Błąd II rodzaju", "Nieodrzucenie fałszywej H0 – przeoczenie istniejącego efektu; ryzyko β (zwykle 0,20)."],
          ["Moc testu", "1 − β: prawdopodobieństwo wykrycia rzeczywiście istniejącego efektu."],
          ["Co oznacza p-value?", "Prawdopodobieństwo uzyskania takiego (lub bardziej skrajnego) wyniku, gdy H0 jest prawdziwa – ryzyko fałszywego odkrycia."],
          ["Decyzja, gdy p < α", "Odrzucamy H0; wyniki wspierają H1; efekt istotny statystycznie."],
          ["Kroki weryfikacji hipotezy", "H0 i H1 → statystyka testowa → p i decyzja → wielkość efektu → przedział ufności → opis słowny."],
          ["Co mówi statystyka testowa?", "Ile razy efekt jest większy od błędu standardowego (przypadku)."],
          ["Przedział ufności", "Zakres, w którym z określonym prawdopodobieństwem (np. 95%) leży prawdziwa wartość parametru w populacji."],
          ["95% CI dla różnicy zawiera 0 – co to znaczy?", "Wynik jest nieistotny statystycznie (p > 0,05)."],
          ["Po co standaryzowana wielkość efektu?", "Do oceny praktycznej siły efektu i porównywania badań (metaanaliza) niezależnie od liczebności."],
          ["Progi d Cohena", "0,2 mały, 0,5 średni, 0,8 duży."],
          ["Progi r (wykład)", "<0,1 brak, 0,1–0,3 znikomy, 0,3–0,5 umiarkowany, 0,5–0,7 silny, 0,7–0,9 bardzo silny."]
        ],
        quiz: [
          M(13, "Poprawnie sformułowana hipoteza w badaniu powinna być:", ["potwierdzona", "udowodniona", "prawdziwa", "zweryfikowana"], 3, "Wykład: hipoteza jest po to, aby ją zweryfikować."),
          M(14, "Poprawnie sformułowana hipoteza badawcza powinna być:", ["możliwa do sfalsyfikowania", "zwięzła, jednoznaczna, w terminach naukowych", "o populacji i zmiennych, a nie o próbie i wynikach testów", "wszystkie warunki powinny być spełnione"], 3, "Wszystkie trzy cechy są wymagane."),
          M(18, "Hipoteza zerowa to hipoteza, która…", ["zakłada brak efektu w populacji", "zakłada, że efekt w populacji wynosi 0", "jest przeciwieństwem hipotezy badawczej", "Wszystkie odpowiedzi są poprawne"], 3, "Każde z tych zdań opisuje H0."),
          M(19, "Testy statystyczne pozwalają testować hipotezę:", ["Badawczą", "Alternatywną", "Teoretyczną", "Zerową"], 3, "Statystyka testuje wyłącznie H0."),
          M(20, "Poziom istotności α = 0,05:", ["wynika z niepisanej umowy badaczy", "może być zmieniony przez badacza", "powinien być uzasadniony m.in. kosztami błędu, rzetelnością i liczebnością", "wszystkie odpowiedzi są poprawne"], 3, "Wykład: poziom α zależy od badacza."),
          M(21, "Zaznacz prawdziwe zdanie:", ["im wyższy błąd I rodzaju, tym wyższy błąd II rodzaju", "im wyższy błąd II rodzaju, tym większa moc testu", "błąd I rodzaju dla hipotez kierunkowych jest mniejszy", "hipoteza kierunkowa ma wyższą moc statystyczną niż bezkierunkowa"], 3, "α i β zmieniają się odwrotnie, a moc = 1 − β; test jednostronny ma większą moc."),
          M(22, "Poziom istotności α oznacza:", ["ryzyko niewykrycia istniejącego efektu", "ryzyko błędnej decyzji statystycznej", "prawdopodobieństwo, że efekt istnieje", "akceptowane ryzyko wykrycia efektu, którego w rzeczywistości nie ma"], 3, "α = ryzyko błędu I rodzaju (fałszywego odkrycia)."),
          M(23, "W badaniu p < 0,05 oznacza, że:", ["możemy odrzucić H0", "wyniki wspierają H1", "efekt jest statystycznie istotny", "interpretacja zależy od przyjętego poziomu α"], 3, "Decyzję podejmujemy, porównując p z przyjętym α – nie zawsze jest to 0,05."),
          M(24, "Moc testu statystycznego pozwala oszacować:", ["liczebność próby potrzebną do trafnego pomiaru", "prawdopodobieństwo, że efekt jest w przedziale", "przedział ufności parametru", "prawdopodobieństwo poprawnego wykrycia rzeczywiście istniejącego efektu"], 3, "Moc = 1 − β."),
          M(25, "Przedział ufności dla parametru określa:", ["poziom ufności wobec wyników analiz", "poziom błędu statystycznego", "prawdopodobieństwo oszacowania parametru", "zakres wartości, w którym z określonym prawdopodobieństwem znajduje się wartość parametru w populacji"], 3, "Definicja przedziału ufności."),
          M(26, "Standaryzowana wielkość efektu (np. g Hedgesa, η²) pozwala na:", ["łatwe porównywanie wyników różnych badań", "metaanalizę", "ocenę praktycznej siły efektu niezależnie od istotności", "Wszystkie odpowiedzi są poprawne"], 3, "ES służy do wszystkich tych celów."),
          M(27, "Wartość p określa:", ["poziom istotności statystycznej wyników", "akceptowalny poziom α", "szansę przyjęcia hipotezy badawczej", "prawdopodobieństwo popełnienia błędu I rodzaju w danym badaniu"], 3, "Wykład: p to nie „istotność”, tylko ryzyko fałszywego odkrycia."),
          M(28, "Wskaż błędnie sformułowaną hipotezę badawczą:", ["studenci w populacji charakteryzują się wysoką inteligencją", "studenci w populacji uzyskują w teście wyniki wyższe niż 100 IQ", "badani studenci mają wyższą inteligencję niż osoby niestudiujące", "wszystkie hipotezy są sformułowane błędnie"], 3, "Wszystkie trzy przykłady wykład podaje jako błędne (brak porównania / wyniki testu / próba)."),
          M(29, "Badacz postawił hipotezę, że Ziemia jest płaska, i poprawne badanie dało zgodne wyniki. Najprawdopodobniej:", ["wszystkie odpowiedzi są błędne", "popełnił nieznany błąd metodologiczny", "popełnił błąd II rodzaju", "popełnił błąd I rodzaju"], 3, "Uznał efekt, którego nie ma – fałszywe odkrycie."),
          M(32, "Asch: 35% vs 85% zgodności przy 2 i 5 osobach, p < 0,05. Poprawna interpretacja:", ["badanie udowodniło wpływ liczby opinii", "wyniki potwierdziły hipotezę Ascha", "w badaniu wykazano wpływ liczby opinii", "wyniki są zgodne z hipotezą o wpływie liczby poprzedników na konformizm"], 3, "Bez „udowodniło”, „potwierdziły”, „wykazano” – wyniki są zgodne z hipotezą."),
          M(33, "Wskaż NIEPOPRAWNIE sformułowany wniosek z eksperymentu Milgrama:", ["status osoby wydającej polecenie wyjaśnia skłonność do uległości", "istnieje dodatni związek między statusem a uległością", "im wyższy status, tym większa uległość", "badania udowodniły, że wyższy status sprzyja większej uległości"], 3, "Słowo „udowodniły” jest niedopuszczalne."),
          M(54, "Wskaż błędnie sformułowaną hipotezę badawczą:", ["Studenci są inteligentni", "Badani studenci mają inteligencję wyższą niż 100 IQ", "Wyniki studentów w teście inteligencji są wyższe niż 100 IQ", "Wszystkie hipotezy są błędne"], 3, "Brak porównania, odwołanie do próby lub do wyników testu."),
          ...(STAT.hipotezy || [])
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "opis",
        title: "Opis statystyczny i wykresy",
        notes: `
## Zmienna dyskretna (nominalna, porządkowa)
- Tabela: **liczebność (n)** i **odsetek (%)**; dla porządkowych także **% skumulowany**, mediana i kwartyle.
- Wykres: **słupkowy** (bar plot) – słupki oddzielone. Kołowy – **nie**.

## Zmienna ilościowa – „złota siódemka”
| Statystyka | Po co |
|---|---|
| **Min i Max** | zakres wyników; wyłapanie błędów w danych (patrzymy na nie najpierw) |
| **Średnia (M) i SD** | zawsze razem; w rozkładzie normalnym ok. **68%** wyników mieści się w M ± SD |
| **Mediana (Q2), kwartyle Q1 i Q3** | ważne dla skali porządkowej i rozkładów nienormalnych; odporne na wyniki skrajne |
| **Skośność i kurtoza** | czy rozkład jest zbliżony do normalnego (w normalnym = 0) |
| **Test Shapiro-Wilka** | formalny test normalności |

## Skośność
- **[−1; +1]** – rozkład względnie symetryczny (Q2 ≈ M).
- **< −1** – **lewoskośny** (ujemna), większość wyników **wyższa** od średniej, M < Me (np. zadowolenie ze związku).
- **> +1** – **prawoskośny** (dodatnia), większość wyników **niższa** od średniej, M > Me, „ogon” w prawo (np. zarobki, czas reakcji).

## Kurtoza
- **[−1; +1]** – mezokurtyczny (jak normalny).
- **< −1** – **platykurtyczny** (spłaszczony, duże zróżnicowanie).
- **> +1** – **leptokurtyczny** (wysmukły, wyniki skupione przy środku).

## Test Shapiro-Wilka
- H0: rozkład **jest normalny**. Istotny wynik (p < α) → rozkład **różni się** od normalnego.
- Statystyka W jak korelacja z rozkładem normalnym: **W > 0,95** bardzo podobny, **> 0,90** zadowalający, **< 0,80** niezadowalający.
- Wykład: zwykle p < 0,01 jako kryterium (dla N 20–100); przy N < 20 – 0,05; przy dużych próbach – 0,001.
- Przy **bardzo dużych próbach** test jest nadwrażliwy → decyduje ocena **wizualna** (histogram, Q-Q).

## Wykresy
- **Histogram** – rozkład zmiennej ciągłej; słupki **stykają się**.
- **Słupkowy** – zmienne kategorialne; słupki **oddzielone**.
- **Boxplot (ramka-wąsy)** – pudełko = **50% środkowych wyników (Q1–Q3, IQR)**, kreska w środku = **mediana**, kropki = **wartości odstające** (> 1,5 IQR od pudełka); długość pudełek pozwala porównać wariancje.
- **Q-Q plot** – punkty na prostej → rozkład **normalny**.
- **Słupki błędów** (error bars) – zwykle 95% CI lub błąd standardowy (SEM).

## Transformacje
- **Standaryzacja**: z = (x − M) / SD – o ile SD wynik różni się od średniej; z ∈ [−1; +1] – wynik przeciętny.
- **Ipsatyzacja**: I = x − M (w jednostkach surowych).
- **Normalizacja min-max**: V = (x − Min) / (Max − Min) – wynik w przedziale [0; 1].

## Rozkład normalny N(100, 15) – IQ
- M ± 1 SD (85–115) – ok. **68%** osób; powyżej 115 – ok. **16%**.
- M ± 2 SD (70–130) – ok. **95%**; powyżej 130 – ok. **2,5%**.
- 120 IQ (z ≈ 1,33) – wynik **powyżej przeciętnej**.

> Na pamięć: ogon pokazuje kierunek skośności – ogon w prawo = skośność dodatnia, średnia „ucieka” w stronę ogona.
`,
        flashcards: [
          ["Jak opisać zmienną nominalną?", "Liczebność i odsetek; wykres słupkowy (nie kołowy)."],
          ["„Złota siódemka” statystyk opisowych", "Min, Max, M, SD, Mediana (kwartyle), skośność, kurtoza (+ test Shapiro-Wilka)."],
          ["Jaki odsetek wyników mieści się w M ± SD w rozkładzie normalnym?", "Ok. 68% (a w M ± 2SD ok. 95%)."],
          ["Kiedy lepiej użyć mediany niż średniej?", "Przy skali porządkowej, rozkładach skośnych i wynikach odstających."],
          ["Skośność dodatnia (prawostronna)", "Większość wyników niska, długi ogon w prawo, średnia > mediana (np. zarobki, czasy reakcji)."],
          ["Skośność ujemna (lewostronna)", "Większość wyników wysoka, ogon w lewo, średnia < mediana (np. zadowolenie ze związku)."],
          ["Kurtoza platykurtyczna vs leptokurtyczna", "Platykurtyczna (<−1): spłaszczona, duże zróżnicowanie. Leptokurtyczna (>+1): wysmukła, wyniki skupione w środku."],
          ["Kiedy rozkład uznajemy za zbliżony do normalnego (skośność, kurtoza)?", "Gdy obie mieszczą się w przedziale [−1; +1]."],
          ["H0 w teście Shapiro-Wilka", "Rozkład jest normalny. Istotny wynik oznacza odchylenie od normalności."],
          ["Shapiro-Wilk przy N = 5000 jest istotny, a wykresy wyglądają dobrze – co robić?", "Uznać wynik za artefakt dużej próby i oprzeć się na ocenie wizualnej."],
          ["Histogram vs wykres słupkowy", "Histogram – zmienne ciągłe, słupki się stykają. Słupkowy – kategorie, słupki oddzielone."],
          ["Co pokazuje pudełko w boxplocie?", "50% środkowych wyników (od Q1 do Q3), kreska w środku = mediana, kropki = wartości odstające."],
          ["Co oznaczają punkty na prostej w wykresie Q-Q?", "Rozkład zgodny z normalnym."],
          ["Wzór na standaryzację (z)", "z = (x − M) / SD."],
          ["Normalizacja min-max", "V = (x − Min) / (Max − Min); wynik w przedziale [0; 1]."],
          ["IQ ~ N(100, 15): jaki odsetek ma powyżej 130?", "Ok. 2,5% (powyżej 115 – ok. 16%)."]
        ],
        quiz: [
          M(44, "IQ ~ N(100, 15). Wynik 120 IQ jest:", ["przeciętny", "bardzo wysoki", "trudno powiedzieć bez istotności", "powyżej przeciętnej"], 3, "z ≈ 1,33 – powyżej zakresu przeciętnego (85–115), ale poniżej 2 SD."),
          M(45, "IQ ~ N(100, 15). Wynik powyżej 115 IQ ma:", ["ok. połowa populacji", "ok. 5% populacji", "nie da się określić", "ok. 15% osób z najwyższą inteligencją"], 3, "Powyżej M + 1 SD jest ok. 16% osób."),
          M(46, "IQ ~ N(100, 15). 2,5% osób z najwyższą inteligencją ma wyniki:", ["powyżej 100 IQ", "powyżej 115 IQ", "nie da się ocenić", "powyżej 130 IQ"], 3, "M + 2 SD = 130; powyżej jest ok. 2,5%."),
          ...(STAT.opis || [])
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "korelacja",
        title: "Korelacja i regresja liniowa",
        notes: `
## Korelacja
- „Ko-” = współ: korelacja to **współzależność, współwystępowanie** dwóch zmiennych. **Korelacja to nie wpływ!**
- Korelacja (ciągłe), **asocjacja** (porządkowe), **kontyngencja** (nominalne).
- Korelacja pozorna – związek wynika z **trzeciej zmiennej** (bociany i urodzenia; temperatura → lody i pożary).
- **Współczynnik korelacji** to tylko operacjonalizacja (model) korelacji, liczona w próbie (estymator).

## Współczynniki
- **r Pearsona** – związek **liniowy** dwóch zmiennych ilościowych.
- **rs (rho) Spearmana** – korelacja Pearsona liczona na **rangach**; dla skali porządkowej, outlierów, związku **monotonicznego**.
- **τ Kendalla** – rzadziej.
- Zakres **[−1; +1]**. Znak = **kierunek**, wartość bezwzględna = **siła** (−0,70 jest silniejsze niż 0,60). Wynik > 1 = błąd.
- Korelacja zmiennej z samą sobą = **1** (przekątna macierzy korelacji).
- **R² = r²** – odsetek wspólnej wariancji (r = 0,5 → 25%).

## Założenia r Pearsona
- obserwacje **niezależne**,
- obie zmienne **ilościowe**, rozkłady zbliżone do normalnego,
- związek **liniowy**,
- brak wartości **odstających**,
- **homoskedastyczność** – stała wariancja wokół linii trendu.

## Pułapki
- Związek krzywoliniowy (odwrócone U) może dać **r ≈ 0**.
- **Outlier** może korelację zawyżyć albo zaniżyć – zależnie od położenia.
- **Ograniczenie zakresu** (np. tylko wybitni studenci) **zaniża** korelację.
- Przy dużej próbie nawet r = 0,05 jest **istotne**, ale praktycznie trywialne.
- **Kwartet Anscombe'a**: zawsze patrz na **wykres rozrzutu**.
- H0 w teście korelacji: **r = 0** w populacji.

## Regresja liniowa
- Równanie: **ŷ = b0 + b1·x**.
- **b0 (intercept, wyraz wolny)** – przewidywane Y, gdy X = 0 (w psychologii często bez sensu interpretacyjnego).
- **b1 (slope, nachylenie)** – o ile jednostek zmienia się przewidywane Y, gdy X rośnie o 1.
- b = r · (sy / sx); linia regresji zawsze przechodzi przez punkt **(średnia X, średnia Y)**.
- **Reszta (residual)** – różnica między wynikiem obserwowanym a przewidywanym; suma kwadratów reszt to wariancja niewyjaśniona.
- **R²** – odsetek wariancji Y wyjaśnionej przez model; **skorygowane R²** „karze” za zbędne predyktory.
- **β (standaryzowane)** – porównanie siły predyktorów (decyduje wartość bezwzględna).
- **VIF > 10** (lub > 5) – **współliniowość** predyktorów.
- Wykres reszt w kształcie **lejka** = **heteroskedastyczność**.
- Zmienne nominalne – kodowanie **dummy** (0/1); b = różnica średnich grup.
- Regresja **nie** mówi o przyczynowości.

> Na pamięć: korelacja ≠ przyczynowość · siła = |r| · R² = r².
`,
        flashcards: [
          ["Czym jest korelacja?", "Współzależnością (współwystępowaniem) dwóch zmiennych – nie wpływem."],
          ["Korelacja pozorna", "Związek dwóch zmiennych wynikający z trzeciej zmiennej (np. bociany i urodzenia)."],
          ["Kiedy Spearman zamiast Pearsona?", "Skala porządkowa, wartości odstające, związek monotoniczny, ale nieliniowy."],
          ["Jak liczy się korelację Spearmana?", "Jak korelację Pearsona, ale na rangach."],
          ["Co mówi znak, a co wartość r?", "Znak – kierunek; wartość bezwzględna – siłę związku."],
          ["r = 0,50 – ile wynosi R²?", "0,25, czyli 25% wspólnej wariancji."],
          ["Założenia korelacji Pearsona", "Niezależne obserwacje, zmienne ilościowe o rozkładzie zbliżonym do normalnego, liniowość, brak outlierów, homoskedastyczność."],
          ["Dlaczego r ≈ 0 nie musi oznaczać braku związku?", "Związek może być krzywoliniowy (np. odwrócone U)."],
          ["Ograniczenie zakresu", "Badanie wąskiej grupy (np. tylko wybitnych) sztucznie zaniża korelację."],
          ["Lekcja z kwartetu Anscombe'a", "Zawsze trzeba oglądać wykres rozrzutu – sam współczynnik może mylić."],
          ["Równanie regresji prostej", "ŷ = b0 + b1·x."],
          ["Co oznacza b1 (slope)?", "O ile jednostek zmienia się przewidywane Y, gdy X rośnie o 1."],
          ["Co oznacza b0 (intercept)?", "Przewidywaną wartość Y, gdy X = 0."],
          ["Reszta w regresji", "Różnica między wynikiem obserwowanym a przewidywanym przez model."],
          ["Po co skorygowane R²?", "Zwykłe R² rośnie z każdym predyktorem; skorygowane karze za zbędne zmienne."],
          ["VIF = 15 oznacza…", "Współliniowość – predyktor jest zbyt silnie skorelowany z innymi."],
          ["Heteroskedastyczność", "Niejednorodna wariancja reszt – na wykresie reszt kształt lejka."],
          ["Jak włączyć płeć do regresji?", "Zakodować jako zmienną dummy (0/1)."]
        ],
        quiz: [
          M(58, "Mathews: dodatnia korelacja między liczbą bocianich gniazd a liczbą urodzeń w krajach Europy. Oznacza to, że:", ["im więcej gniazd, tym mniej dzieci", "obecność gniazd sprzyja mniejszej liczbie urodzeń", "gniazda wpływają na liczbę urodzeń", "im więcej bocianich gniazd, tym więcej rodzących się dzieci"], 3, "Korelacja dodatnia opisuje współwystępowanie, a nie wpływ."),
          ...(STAT.korelacja || [])
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "testy-t",
        title: "Porównywanie średnich: test Z i testy t",
        notes: `
## Skąd test t?
William Sealy Gosset (browar Guinnessa, pseudonim „Student”) – kontrola jakości piwa.

## Test Z
- H0: μ = m0. **Z = (M − m0) / SE**, gdzie SE = σ / √n.
- Wada: trzeba znać **σ w populacji** (prawie nigdy jej nie znamy) → dlatego używamy **testu t**.
- |Z| lub |t| ≥ ok. **2** → zwykle wynik istotny (dla α = 0,05).
- „Istotność” rośnie z **liczebnością** i **różnicą średnich**, maleje z **wariancją**. Wielkość efektu **nie zależy od n**.

## Trzy testy t
| Test | H0 | Kiedy | Przykład |
|---|---|---|---|
| **dla jednej próby** | μ = m0 | jedna grupa vs wartość stała | IQ studentów vs 100 |
| **dla prób niezależnych** | μ1 = μ2 | dwie różne grupy | losowo: grupa śpiąca vs niewyspana |
| **dla prób zależnych** | Δμ = 0 | te same osoby 2 razy lub pary | przed i po; mąż i żona |

## Stopnie swobody (df)
- df = n − k (liczebność minus liczba grup): jedna próba / zależne **N − 1**, niezależne **N − 2**.
- Ułamkowe df (np. t(34.56)) → zastosowano **poprawkę Welcha**.

## Jednorodność wariancji i poprawka Welcha
- **Test Levene'a** – istotny = wariancje **różne**.
- Wtedy czytamy wynik **testu Welcha** (koryguje df i p; t prawie się nie zmienia).
- Najgroźniej: **mała grupa z dużą wariancją** → klasyczny t grozi **błędem I rodzaju**.
- Coraz częściej zaleca się Welcha **zawsze** (dwustopniowa procedura Levene → wybór testu psuje kontrolę α).
- Raportowanie „lepszego” p mimo złamanych założeń = **p-hacking**.

## Hipoteza kierunkowa
Test jednostronny: p jednostronne = **p dwustronne / 2** (gdy różnica jest w przewidywanym kierunku, a hipoteza była postawiona **przed** badaniem).

## Wielkość efektu
- **d Cohena / g Hedgesa** – różnica średnich w jednostkach **SD**: g = (M1 − M2) / SD.
- SD wg Cohena – średnia wariancji; wg Hedgesa – wariancja wspólna (pooled); wg **Glassa** – SD grupy kontrolnej.
- Klasycznie: **0,2 mały, 0,5 średni, 0,8 duży**. Wykład podaje też: < 0,2 znikomy, 0,2–0,5 mały, 0,5–0,8 umiarkowany, 0,8–1,2 duży, > 1,2 bardzo duży.
- Efekt jako r: 0,1 mały, 0,3 średni, 0,5 duży.
- **Duża próba**: p < 0,001, ale d = 0,01 → istotne, lecz praktycznie bez znaczenia.

## Testy nieparametryczne
Gdy zmienna jest **porządkowa** lub rozkład **nie jest normalny** (zwłaszcza w małych próbach). Porównują rangi; mają **mniejszą moc**.
- **U Manna-Whitneya** – zamiast t dla prób **niezależnych**.
- **Wilcoxona** – zamiast t dla prób **zależnych**.

> Na pamięć: **M**ann-Whitney = **M**iędzy grupami · **W**ilcoxon = **W**ewnątrz (te same osoby).
`,
        flashcards: [
          ["Kim był „Student”?", "William Sealy Gosset, statystyk browaru Guinnessa, twórca testu t."],
          ["Wzór na test Z", "Z = (M − m0) / SE, gdzie SE = σ / √n."],
          ["Największa wada testu Z", "Wymaga znajomości odchylenia standardowego w populacji (σ)."],
          ["Od czego zależy istotność w teście Z/t?", "Rośnie z liczebnością i różnicą średnich, maleje z wariancją."],
          ["Test t dla jednej próby – kiedy?", "Porównanie średniej grupy z wartością stałą (np. IQ = 100)."],
          ["Test t dla prób niezależnych – kiedy?", "Porównanie dwóch odrębnych grup."],
          ["Test t dla prób zależnych – kiedy?", "Te same osoby mierzone dwukrotnie albo naturalne pary (np. mąż i żona)."],
          ["Stopnie swobody w testach t", "Jedna próba i próby zależne: N − 1; próby niezależne: N − 2."],
          ["Co oznacza istotny test Levene'a?", "Wariancje w grupach są różne – trzeba odczytać test Welcha."],
          ["Skąd ułamkowe stopnie swobody?", "Z poprawki Welcha na niejednorodność wariancji."],
          ["Dlaczego zaleca się zawsze test Welcha?", "Procedura „najpierw Levene, potem test” psuje kontrolę błędu I rodzaju, a Welch przy równych wariancjach prawie nie traci mocy."],
          ["Dlaczego plan z powtarzanymi pomiarami ma większą moc?", "Usuwa wariancję wynikającą z różnic indywidualnych – każdy jest swoją kontrolą."],
          ["Co wyraża d Cohena?", "Różnicę średnich w jednostkach odchylenia standardowego."],
          ["Progi d Cohena", "0,2 mały, 0,5 średni, 0,8 duży."],
          ["Nieparametryczny odpowiednik t dla prób niezależnych", "Test U Manna-Whitneya."],
          ["Nieparametryczny odpowiednik t dla prób zależnych", "Test Wilcoxona (rangowanych znaków)."],
          ["p dwustronne = 0,06, hipoteza kierunkowa, różnica w przewidywanym kierunku", "p jednostronne = 0,03 – wynik istotny dla hipotezy jednostronnej."]
        ],
        quiz: [...(STAT["testy-t"] || [])]
      },
      // ------------------------------------------------------------------
      {
        id: "anova",
        title: "ANOVA jedno- i dwuczynnikowa, post-hoc, kontrasty",
        notes: `
## ANOVA jednoczynnikowa
- Jeden **czynnik** (zmienna niezależna) o **k > 2** poziomach, jedna ilościowa zmienna zależna.
- **H0: wszystkie średnie w populacji są równe.**
- Zamiast wielu testów t – bo przy wielu porównaniach rośnie ryzyko błędu I rodzaju (**inflacja α**; 6 testów → ok. 26%).
- **F = wariancja międzygrupowa (efekt) / wariancja wewnątrzgrupowa (błąd).**
- Zapis: **F(df między = k − 1, df błędu = N − k)**, np. F(2, 147) → 3 grupy.
- Istotne F = **przynajmniej jedna** grupa różni się od innej (test omnibusowy – nie wiemy która).
- Dla 2 grup: **F = t²**.

## Wielkość efektu
- **η² (eta-kwadrat)** – odsetek wariancji zmiennej zależnej wyjaśnionej przez czynnik (np. 0,15 = 15%, duży efekt).
- **ηp² (cząstkowe)** – w modelach wieloczynnikowych: efekt danego czynnika po wyłączeniu pozostałych; w jednoczynnikowej = η².
- **ω² (omega-kwadrat)** – mniej obciążona; η² zawyża efekt w populacji, zwłaszcza w małych próbach.

## Założenia i ich łamanie
- Normalność, **jednorodność wariancji** (test Levene'a) → przy łamaniu: **ANOVA Welcha**.
- Nieparametryczna alternatywa: **Kruskal-Wallis** (grupy niezależne).

## ANOVA z powtarzanymi pomiarami
- Te same osoby w kilku warunkach (np. przed, 1 h i 4 h po leku) – czynnik **wewnątrzgrupowy**.
- Założenie **sferyczności** → **test Mauchly'ego**. Gdy istotny: korekta **Greenhouse-Geisser** lub **Huynh-Feldt** (albo test **Friedmana**).
- Większa moc – z mianownika usuwa się wariancję różnic indywidualnych.

## Porównania szczegółowe
- **Post-hoc** (bez hipotez, „każdy z każdym”):
  - **Tukey HSD** – standard; kompromis między mocą a kontrolą α (równe grupy i wariancje),
  - **Bonferroni** – **konserwatywny** (α / liczba porównań); chroni przed błędem I, zwiększa ryzyko błędu II,
  - **Games-Howell** – przy **niejednorodnych wariancjach** i różnych liczebnościach.
- **Kontrasty planowane** – konkretna hipoteza **przed** badaniem; większa moc. Wagi sumują się do 0 (np. −2, 1, 1 = grupa A vs średnia B i C).
- Nienakładające się 95% CI na wykresie – silna wskazówka istotnej różnicy.

## ANOVA dwuczynnikowa
- **Dwa czynniki** (np. status związku × płeć) i jedna zmienna zależna.
- Testuje: **efekt główny** czynnika A, **efekt główny** czynnika B i **interakcję A × B** (czy efekt jednego czynnika zależy od poziomu drugiego – to moderacja).
- Przykład z wykładu: Kaźmierska (2013) – empatia partnera u narzeczonych, narzeczonych mężczyzn, zamężnych i żonatych.

> Na pamięć: F = efekt / błąd · istotne F → post-hoc (Tukey; przy różnych wariancjach Games-Howell) · Kruskal-Wallis = grupy niezależne, Friedman = powtarzane pomiary.
`,
        flashcards: [
          ["Kiedy stosujemy jednoczynnikową ANOVA?", "Gdy porównujemy średnie w więcej niż dwóch grupach (jeden czynnik, k > 2)."],
          ["H0 w ANOVA", "Wszystkie średnie w populacji są równe."],
          ["Dlaczego nie wiele testów t zamiast ANOVA?", "Inflacja α – rośnie ryzyko błędu I rodzaju (6 testów → ok. 26%)."],
          ["Co jest w liczniku i mianowniku F?", "Licznik: wariancja międzygrupowa (efekt). Mianownik: wariancja wewnątrzgrupowa (błąd)."],
          ["Co oznacza F(2, 57)?", "df międzygrupowe = k − 1 = 2 (3 grupy), df błędu = N − k = 57."],
          ["Istotne F – jaki wniosek?", "Przynajmniej jedna grupa różni się od innej; nie wiadomo która → testy post-hoc."],
          ["Związek F i t dla 2 grup", "F = t²."],
          ["η² = 0,15 oznacza…", "Czynnik wyjaśnia 15% wariancji zmiennej zależnej."],
          ["Dlaczego ω² jest lepsza od η²?", "η² zawyża efekt w populacji (obciążenie), ω² to koryguje."],
          ["Nieparametryczny odpowiednik jednoczynnikowej ANOVA", "Test Kruskala-Wallisa (dla powtarzanych pomiarów – Friedmana)."],
          ["Założenie sferyczności – jakim testem?", "Testem Mauchly'ego; gdy złamane – korekta Greenhouse-Geisser lub Huynh-Feldt."],
          ["Test post-hoc Tukeya", "Standard do porównań „każdy z każdym” przy równych grupach i wariancjach."],
          ["Dlaczego Bonferroni jest konserwatywny?", "Obniża α (α / liczba porównań): chroni przed błędem I rodzaju, ale zwiększa ryzyko błędu II."],
          ["Post-hoc przy niejednorodnych wariancjach", "Games-Howell."],
          ["Kontrasty planowane vs post-hoc", "Kontrasty – konkretna hipoteza przed badaniem, większa moc; post-hoc – przegląd wszystkich par."],
          ["Kontrast z wagami −2, 1, 1", "Porównuje grupę A ze średnią grup B i C łącznie."],
          ["Co testuje ANOVA dwuczynnikowa?", "Dwa efekty główne i interakcję czynników."],
          ["Czym jest interakcja w ANOVA dwuczynnikowej?", "Sytuacją, gdy efekt jednego czynnika zależy od poziomu drugiego (moderacja)."]
        ],
        quiz: [...(STAT.anova || [])]
      }
    ]
  });
})();
