// Metodologia badań psychologicznych i statystyka. Opracowane na podstawie plików z Dysku:
// wykłady 01–09, Procedury badawcze.pdf, 100 pytań do - Metodologia.pdf,
// Statystyka100Pytań.pdf + OdpowiedziStatystyka100pytań.pdf (quiz w metodologia-statystyka100.js)
window.SUBJECTS = window.SUBJECTS || [];
(function () {
  const STAT = window.METODOLOGIA_QUIZ || {};
  // Pytania z „100 pytań do – Metodologia” (plik bez klucza): odpowiedzi opracowane na podstawie wykładów
  // „!Lista narzędzi badawczych.xlsx” (ćwiczenia)
  const NARZEDZIA = [
    ["3D-WS", "Mądrość"],
    ["ACL", "Lista przymiotnikowa – zakazane w raporcie"],
    ["AIS", "Akceptacja choroby"],
    ["AS", "Skala autentyczności"],
    ["ATTARI-12-PL", "Postawa wobec AI"],
    ["AUDIT", "Uzależnienie od alkoholu"],
    ["BDI-II", "Objawy depresji"],
    ["BFAS", "Uzależnienie od Facebooka"],
    ["BHI-12", "Nadzieja podstawowa"],
    ["BHI-R", "Nadzieja podstawowa"],
    ["BRS", "Prężność psychiczna"],
    ["BWAS", "Binge-watching"],
    ["CISS", "Style radzenia sobie ze stresem – zakazane w raporcie"],
    ["COPE", "Strategie radzenia sobie ze stresem – zakazane w raporcie"],
    ["CRPQ", "Praktyki religijne"],
    ["Delta", "Umiejscowienie kontroli"],
    ["DIDS", "Skala wymiarów rozwoju tożsamości"],
    ["DS14", "Osobowość typu D"],
    ["DUDIT", "Uzależnienie od narkotyków"],
    ["EAS-D", "Temperament"],
    ["EAT-26", "Zaburzenia odżywiania"],
    ["EDI", "Zaburzenia odżywiania"],
    ["EPQ-R", "Kwestionariusz osobowości Eysencka"],
    ["FCZ-KT", "Temperament"],
    ["FOMOs", "Lęk przed pominięciem"],
    ["GCBS", "Myślenie konspiracyjne"],
    ["GQ-6", "Wdzięczność"],
    ["GSES", "Poczucie własnej skuteczności"],
    ["INTE", "Inteligencja emocjonalna"],
    ["IPIP-BFM-20", "Wielka Piątka – zakazane w raporcie"],
    ["IVE", "Impulsywność"],
    ["IZR", "Inwentarz Życia Religijnego"],
    ["KA", "Asertywność"],
    ["KANH III", "Myślenie twórcze"],
    ["KDB", "Kwestionariusz doświadczania bezpieczeństwa"],
    ["KKS", "Kompetencje społeczne"],
    ["KNS", "Nadzieja na sukces"],
    ["KOP-26", "Prężność psychiczna"],
    ["KP", "Kwestionariusz perfekcjonizmu"],
    ["KPS", "Kwestionariusz Poczucia Stresu"],
    ["KPS", "Perfekcjonizm w sporcie"],
    ["KSD", "Kwestionariusz Sfery Duchowej"],
    ["KSP", "Kwestionariusz Stylów Przywiązania – zakazane w raporcie"],
    ["KSS", "Satysfakcja seksualna"],
    ["Kwestionariusz Agresji Buss-Perry", "Agresja"],
    ["KZI", "Kwestionariusz zaangażowania interpersonalnego"],
    ["MACH IV", "Makiawelizm"],
    ["miniCOPE", "Strategie radzenia sobie ze stresem"],
    ["MLQ", "Sens życia"],
    ["MMPI-2", "Wielowymiarowy Inwentarz Osobowości"],
    ["MSEI", "Samoocena"],
    ["MSPSS", "Spostrzegane wsparcie społeczne"],
    ["NARQ", "Narcyzm"],
    ["NEO-FFI", "Wielka Piątka – zakazane w raporcie"],
    ["NEO-PI-R", "Inwentarz osobowości"],
    ["NPI", "Osobowość narcystyczna"],
    ["PD", "Ciemna Triada"],
    ["PDED", "Zaangażowanie religijne"],
    ["PIUQ-18", "Problemowe korzystanie z Internetu"],
    ["PoDIRS-6", "Wzajemność pośrednia"],
    ["PPS", "Prokrastynacja"],
    ["PPS-10", "Poczucie stresu"],
    ["PUI", "Problematyczne używanie internetu"],
    ["PWB", "Dobrostan psychiczny"],
    ["RCSS", "Pocieszenie i napięcie religijne"],
    ["RISB", "Test niedokończonych zdań"],
    ["RSZ", "Religijny system znaczeń"],
    ["R-UCLA", "Poczucie samotności"],
    ["SD-36", "Skala duchowości"],
    ["SE", "Skala empatii Perth"],
    ["SES", "Samoocena – zakazane w raporcie"],
    ["Skala P", "Orientacja pozytywna"],
    ["SLiFŚ", "Skala lęku i fascynacji śmiercią"],
    ["SMFS", "Zmęczenie mediami społecznościowymi"],
    ["SOC", "Ocena własnego ciała"],
    ["SOC29", "Poczucie koherencji"],
    ["SOS", "Orientacja na smartfon"],
    ["SPD", "Skala poszukiwania doznań"],
    ["SPIND", "Pozytywny i negatywny nastrój"],
    ["SPN", "Skala podatności na nudę"],
    ["SRS", "Samoregulacja"],
    ["SS", "Skala samotności De Jong"],
    ["SSIE", "Empatia"],
    ["SSS", "Skrócona skala samoregulacji"],
    ["STAI", "Lęk – zakazane w raporcie"],
    ["STD", "Skala transcendencji duchowej"],
    ["SWLS", "Satysfakcja z życia – zakazane w raporcie"],
    ["Test Fagerströma", "Uzależnienie od nikotyny"],
    ["TRIM-12", "Zemsta i przebaczenie"],
    ["UPPS-P", "Impulsywność"],
    ["WKT", "Wielowymiarowy Kwestionariusz Tożsamości"],
    ["YFAS 2.0", "Nawyki żywieniowe"],
    ["YSQ", "Schematy Younga"],
    ["ZSWZ", "Skala wpływu zdarzeń"],
    ["ZTPI", "Perspektywa temporalna"]
  ];
  const M = (n, q, o, a, e) => ({ q, o, a, e, src: `100 pytań do metodologii, nr ${n} (odpowiedź wg wykładów – plik nie ma klucza)` });

  window.SUBJECTS.push({
    id: "metodologia",
    name: "Metodologia badań i statystyka",
    short: "Metodologia",
    icon: "📊",
    color: "#e64980",
    // egzamin z wykładu: 30 pytań w 30 minut, zaliczenie od 16 poprawnych
    exam: { questions: 30, minutes: 30, pass: 16 },
    sources: [
      "Wykłady 01–09: Organizacja, Proces badawczy, Zmienne, Hipotezy, Opis statystyczny, Analiza korelacji, Porównywanie średnich (2 części), Dwuczynnikowa ANOVA",
      "Procedury badawcze.pdf",
      "100 pytań do – Metodologia.pdf (bez klucza)",
      "Statystyka100Pytań.pdf + OdpowiedziStatystyka100pytań.pdf (100 pytań z kluczem – wszystkie są w quizach)",
      "ćwiczenia: 0 – Zajęcia organizacyjne, 1 – Etapy procesu badawczego, 2 – Standardy edytorskie APA (pptx)",
      "ćwiczenia: !Kryteria – semestr zimowy.pdf, !Lista narzędzi badawczych.xlsx",
      "ćwiczenia: APA-7.pdf (Skimina i in., 2022 – odczytane do rozdziału o tabelach), Wybrane reguły spolszczonego APA 7.pdf"
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
        title: "Raport z badań wg APA 7 (wykład)",
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
        id: "cwiczenia",
        title: "Ćwiczenia: zaliczenie, kryteria raportu, etapy badania",
        notes: `
Ćwiczenia prowadzi **dr Wojciech Rodzeń**. Jego wymagania częściowo różnią się od wykładu (dr Karol Karasiewicz) – w raporcie na ćwiczenia obowiązują zasady z tej notatki.

## Warunki zaliczenia ćwiczeń
- **Obecność** – maks. **2 nieobecności nieusprawiedliwione**; wszystkie nieobecności razem ≤ **40%** zajęć; nie ma odrabiania. Zwolnienie pokazać najpóźniej na ostatnich zajęciach w danym miesiącu.
- **Akceptacja pomysłu projektu** (zmienne, narzędzia).
- **Raport z badań** – część teoretyczna i metodologiczna; samodzielnie, w parach lub w grupach 3-osobowych.
- Termin: **do 18.01.2027**, poprawkowy: **do 28.01.2027**. Wysyłka na wojciech.rodzen@usz.edu.pl w **dwóch plikach: .docx i PDF**, podpisanych tylko **numerami albumów**.

## Obowiązkowe elementy raportu
- Wstęp / Wprowadzenie
- **Rozdziały dla każdej zmiennej** („Zmienna X”, „Zmienna Y”…)
- **Przegląd badań** (co najmniej 3 badania)
- **Przedmiot i cel badania** (także **cel praktyczny**!)
- **Problemy i hipotezy** – co najmniej **3 hipotezy: korelacyjna, regresji wielokrotnej i różnicowa**
- **Narzędzia** – co najmniej **3 wystandaryzowane** narzędzia psychometryczne
- **Operacjonalizacja zmiennych** – **tabela + jej opis**
- **Literatura cytowana**
- Format APA 7 z wyjątkami: **interlinia 1,5** (zamiast 2) i tekst **wyjustowany** (zamiast do lewej).

## Lista testów zakazanych
KSP (style przywiązania), NEO-FFI / IPIP-20 (Wielka Piątka), CISS / COPE (radzenie sobie ze stresem), STAI (lęk), ACL (lista przymiotnikowa), SES (samoocena), SWLS (satysfakcja z życia) oraz **wszystkie narzędzia do pomiaru funkcji wykonawczych**.

## Kryteria oceny raportu (odejmowane punkty, start: 100)
| Błąd | Punkty |
|---|---|
| **Słowo „wpływ” w badaniu nieeksperymentalnym** | **−100** |
| Brak wymaganego rozdziału | −50 |
| Brak tabeli z operacjonalizacją / brak jej opisu | −20 / −20 |
| Mniej niż 3 badania w przeglądzie badań | −15 |
| Błędna kolejność zmiennych (metoda lejka) | −10 |
| Brak wprowadzenia do rozdziału (start od tabeli lub punktów) | −10 |
| Brak elementu operacjonalizacji | −8 |
| Brak przejścia między rozdziałami | −6 |
| Brak źródła przy definicji / przy wnioskach empirycznych | −5 / −5 |
| Brak współczesnego źródła (sprzed 2020 r.) | −5 |
| Wymienianie elementów (poza pytaniami i hipotezami) | −5 |
| Brak zmiennej w operacjonalizacji | −4 |
| Błędny przedmiot / cel badań / brak celu praktycznego | −3 / −3 / −3 |
| Błędne pytanie / hipoteza badawcza | −2 / −2 |
| Brak elementu w opisie narzędzia | −2 |
| Błędy APA: cytowanie, śródtytuły, numeracja stron, tabela | −2 każdy |
| Brak pozycji w literaturze, błędy zapisu tekstu, bibliografii, liczb, element ankiety | −1 każdy |

**Oceny:** 5,0 – 91–100 pkt · 4,5 – 81–90 · 4,0 – 71–80 · 3,5 – 61–70 · 3,0 – 51–60 · 2,0 – 0–50.

## Etapy procesu badawczego (Brzeziński)
- **Problem badawczy i hipoteza** – pytanie o związek zmiennych X i Y; hipoteza to bezpośrednia odpowiedź na pytanie.
- **Obraz przestrzeni zmiennych** – uporządkowanie, jak zmienne współwystępują i na siebie oddziałują (ułatwia dobór analiz).
- **Operacjonalizacja** – przełożenie zmiennych na język obserwacyjny: **skala pomiarowa, typ zmiennej, wskaźnik**.
- **Model badawczy** – eksperymentalny (manipulacja, „wpływ”) albo korelacyjny / regresyjny (bez manipulacji; regresja = predykcja, nie przyczynowość).
- **Dobór próby** – losowy (każdy ma równą szansę; reprezentatywność), celowy (np. kula śnieżna), celowo-losowy.
- **Model statystyczny** – eksperyment: t Studenta, ANOVA, MANOVA; badanie korelacyjne: korelacja, regresja.
- **Akceptacja lub odrzucenie hipotezy** – wyniki hipotezy **wspierają**; brak wsparcia to też wartościowy wynik.
- **Ocena, interpretacja, generalizacja** – ograniczenia, znaczenie psychologiczne, zasięg wniosków.

## Oznaczanie istotności
jedna gwiazdka: p < 0,05 · dwie gwiazdki: p < 0,01 · trzy gwiazdki: p < 0,001 · brak gwiazdek: wynik nieistotny.

## Różnice: wykład vs ćwiczenia
| | Wykład (Karasiewicz) | Ćwiczenia (Rodzeń) |
|---|---|---|
| Cel praktyczny | w pracy studenckiej „bez sensu” | **wymagany** (−3 pkt za brak) |
| Interlinia, wyrównanie | APA: 2, do lewej | **1,5, wyjustowany** |
| Hipotezy | 3–5 | **min. 3: korelacyjna, regresji wielokrotnej, różnicowa** |
| „Wpływ” | unikać | **−100 pkt** w badaniu nieeksperymentalnym |

## Lista dozwolonych narzędzi badawczych
| Skrót | Co mierzy |
|---|---|
` + NARZEDZIA.map(([s, n]) => `| ${s} | ${n} |`).join("\n") + `
`,
        flashcards: [
          ["Termin oddania raportu na ćwiczenia", "Do 18.01.2027 (poprawka do 28.01.2027); pliki .docx i PDF podpisane numerami albumów."],
          ["Ile nieobecności na ćwiczeniach?", "Maks. 2 nieusprawiedliwione; wszystkie razem do 40% zajęć; bez odrabiania."],
          ["Ile i jakich hipotez wymaga raport na ćwiczenia?", "Co najmniej 3: korelacyjną, regresji wielokrotnej i różnicową."],
          ["Ile narzędzi musi być w raporcie?", "Co najmniej 3 wystandaryzowane narzędzia psychometryczne."],
          ["Za co odejmuje się aż 100 punktów?", "Za użycie słowa „wpływ” w badaniu nieeksperymentalnym."],
          ["Ile punktów kosztuje brak wymaganego rozdziału?", "50 punktów."],
          ["Ile badań musi być w przeglądzie badań?", "Co najmniej 3 (inaczej −15 pkt); potrzebne też źródła z 2020 r. lub nowsze."],
          ["Wyjątki od APA na ćwiczeniach", "Interlinia 1,5 zamiast 2 i tekst wyjustowany zamiast do lewej."],
          ["Testy zakazane w raporcie", "KSP, NEO-FFI/IPIP-20, CISS/COPE, STAI, ACL, SES, SWLS i wszystkie testy funkcji wykonawczych."],
          ["Ile punktów na ocenę 4,0 z raportu?", "71–80 (5,0: 91–100; 3,0: 51–60; poniżej 51 – 2,0)."],
          ["Czego wymaga tabela operacjonalizacji?", "Musi być w raporcie i musi mieć opis (brak każdego: −20 pkt)."],
          ["8 etapów procesu badawczego (Brzeziński)", "Problem i hipoteza → obraz przestrzeni zmiennych → operacjonalizacja → model badawczy → dobór próby → model statystyczny → akceptacja/odrzucenie hipotezy → ocena, interpretacja i generalizacja."],
          ["Obraz przestrzeni zmiennych", "Uporządkowany model tego, jak badane zmienne współwystępują i oddziałują na siebie."],
          ["3 elementy operacjonalizacji (ćwiczenia)", "Skala pomiarowa, typ (funkcja) zmiennej, wskaźnik zmiennej."],
          ["Korelacja vs regresja (ćwiczenia)", "Korelacja – współwystępowanie bez kierunku. Regresja – kierunek predykcji/wyjaśniania, ale nie przyczynowość."],
          ["Co oznaczają gwiazdki przy wynikach?", "* p < 0,05; ** p < 0,01; *** p < 0,001."],
          ["Cel praktyczny: wykład vs ćwiczenia", "Wykład: w pracy studenckiej bez sensu. Ćwiczenia: wymagany (−3 pkt za brak)."],
          ["Co mierzy SWLS?", "Satysfakcję z życia."],
          ["Co mierzy STAI?", "Lęk (stan i cechę)."],
          ["Co mierzy CISS / COPE?", "Style i strategie radzenia sobie ze stresem."],
          ["Co mierzy SES?", "Samoocenę (Rosenberg)."],
          ["Co mierzy GSES?", "Poczucie własnej skuteczności."],
          ["Co mierzy MSPSS?", "Spostrzegane wsparcie społeczne."],
          ["Co mierzy BDI-II?", "Objawy depresji."],
          ["Co mierzy R-UCLA?", "Poczucie samotności."],
          ["Co mierzy SOC29?", "Poczucie koherencji."],
          ["Co mierzy ZTPI?", "Perspektywę temporalną (Zimbardo)."],
          ["Co mierzy NPI / NARQ?", "Narcyzm."]
        ],
        quiz: [
          { q: "Za co w raporcie na ćwiczenia odejmuje się najwięcej punktów?", o: ["brak wymaganego rozdziału", "słowo „wpływ” w badaniu nieeksperymentalnym", "mniej niż 3 badania w przeglądzie", "brak tabeli operacjonalizacji"], a: 1, e: "„Wpływ” w badaniu nieeksperymentalnym to −100 pkt – praktycznie niezaliczenie.", src: "!Kryteria – semestr zimowy.pdf" },
          { q: "Jakie hipotezy muszą się znaleźć w raporcie na ćwiczenia?", o: ["dowolne 2", "co najmniej 3: korelacyjna, regresji wielokrotnej i różnicowa", "3–5 hipotez kierunkowych", "tylko hipoteza zerowa i alternatywna"], a: 1, e: "Wymóg dr. Rodzenia.", src: "0 – Zajęcia organizacyjne.pptx" },
          { q: "Które narzędzie jest na liście zakazanych w raporcie?", o: ["GSES", "SWLS", "MSPSS", "BRS"], a: 1, e: "Zakazane: KSP, NEO-FFI/IPIP-20, CISS/COPE, STAI, ACL, SES, SWLS i testy funkcji wykonawczych.", src: "0 – Zajęcia organizacyjne.pptx" },
          { q: "Jak sformatować raport na ćwiczenia?", o: ["dokładnie według APA 7", "APA 7, ale interlinia 1,5 i tekst wyjustowany", "dowolnie", "APA 6"], a: 1, e: "Dwa wyjątki od APA 7 na ćwiczeniach.", src: "0 – Zajęcia organizacyjne.pptx" },
          { q: "Ile punktów trzeba zdobyć z raportu na ocenę 3,5?", o: ["51–60", "61–70", "71–80", "81–90"], a: 1, e: "3,0: 51–60, 3,5: 61–70, 4,0: 71–80, 4,5: 81–90, 5,0: 91–100.", src: "!Kryteria – semestr zimowy.pdf" },
          { q: "Który etap procesu badawczego polega na uporządkowaniu, jak zmienne współwystępują i na siebie oddziałują?", o: ["operacjonalizacja", "określenie obrazu przestrzeni zmiennych", "wybór modelu statystycznego", "generalizacja"], a: 1, e: "Obraz przestrzeni zmiennych – 2. etap według Brzezińskiego.", src: "1 – Etapy procesu badawczego.pptx" },
          { q: "Jakie modele statystyczne są typowe dla badań korelacyjnych?", o: ["test t i ANOVA", "korelacja i regresja", "MANOVA", "test Z"], a: 1, e: "Eksperyment: t, ANOVA, MANOVA; badanie korelacyjne: korelacja i regresja.", src: "1 – Etapy procesu badawczego.pptx" },
          { q: "Wynik oznaczony ** oznacza:", o: ["p < 0,05", "p < 0,01", "p < 0,001", "wynik nieistotny"], a: 1, e: "* p < 0,05; ** p < 0,01; *** p < 0,001.", src: "1 – Etapy procesu badawczego.pptx" },
          { q: "Ile badań musi zawierać przegląd badań w raporcie?", o: ["co najmniej 1", "co najmniej 3", "co najmniej 10", "nie ma wymogu"], a: 1, e: "Mniej niż trzy badania = −15 pkt.", src: "!Kryteria – semestr zimowy.pdf" }
        ]
      },
      // ------------------------------------------------------------------
      {
        id: "apa",
        title: "Standardy edytorskie APA 7 w szczegółach",
        notes: `
Na podstawie: Skimina, Harasimczuk i Cieciuch (2022) oraz prezentacji dr. Rodzenia. W Polsce stosujemy **spolszczony styl APA**. Inne style: harwardzki (nauki ścisłe), Chicago (historia), MLA (literatura).

## Formatowanie całej pracy
- **Times New Roman 12**, **interlinia 2** (na ćwiczeniach 1,5), marginesy 2,5 cm.
- Tekst **do lewej** (na ćwiczeniach wyjustowany), **wcięcie** akapitu = 1 tabulator (bez wcięcia: streszczenie, cytat 40+ słów, bibliografia).
- **Numer strony w prawym górnym rogu** (od strony tytułowej). Śródtytuły **nienumerowane**.
- Bez pustych wierszy przed i po śródtytule. Od nowej strony: streszczenie, wprowadzenie, bibliografia, załączniki.
- **Twarda spacja** (Ctrl+Shift+Spacja) po pojedynczych literach na końcu linii („w”, „i”, „z”).

## Śródtytuły – 5 stopni (wszystkie pogrubione)
| Stopień | Wygląd |
|---|---|
| 1 | wyśrodkowany, pogrubiony (tytuł pracy, Metoda, Wyniki, Dyskusja) |
| 2 | do lewej, pogrubiony |
| 3 | do lewej, pogrubiony, kursywa |
| 4 | wcięty, pogrubiony, z kropką – tekst w tym samym wierszu |
| 5 | wcięty, pogrubiony, kursywa, z kropką – tekst w tym samym wierszu |

## Cytowanie – kiedy?
Zawsze przy: **definicjach, teoriach, wynikach badań, opisie narzędzi, danych statystycznych, dosłownych cytatach**. Brak cytowania = podajesz tekst jako własny.

## Odsyłacze w tekście
| Autorzy | Zapis |
|---|---|
| 1 | Kowalski (2015) / (Kowalski, 2015) |
| 2 | Kowalski i Nowak (2015) – **zawsze oba nazwiska, spójnik „i”** (nie &) |
| 3+ | Kowalski i in. (2015) – **od pierwszego cytowania** |

- Kilka prac w nawiasie: **alfabetycznie**, oddzielone **średnikiem**: (Aronson, 2003; Freud, 1930; Kowalski i in., 2022).
- Ten sam autor i rok: 2015a, 2015b (kolejność alfabetyczna tytułów).
- **Cytowanie pośrednie** („za:”) – rzadko, tylko gdy oryginał jest niedostępny (stary, obcy język): (Freud, 1922, za: Kowalski, 2015). W bibliografii tylko źródło, z którego korzystałaś.
- Ponowne odwołanie w tym samym akapicie z nazwiskiem w tekście – rok tylko za pierwszym razem.
- „zob. też:” – przed mniej ważnymi pracami w nawiasie.

## Cytat dosłowny
- **< 40 słów** – w cudzysłowie „…” + numer strony: (Kowalski, 2015, s. 15); bez stron – akapit: (Nowak, 2020, akapit 3).
- **≥ 40 słów** – osobny, wcięty blok **bez cudzysłowu**.
- Własne wtrącenia – **[nawias kwadratowy]**, pominięcie fragmentu – **[…]**.

## Interpunkcja i kreski
- **Dywiz** (-) bez spacji: czarno-biały. **Półpauza** (–): myślnik ze spacjami i zakresy bez spacji: s. 10–21, lata 2011–2022. **Minus** (−) dla wartości ujemnych.
- Nawiasy okrągłe: odsyłacze, skrótowce przy pierwszym użyciu, (a), (b), (c), statystyki, stopnie swobody: t(75) = 2,19; F(2, 116) = 3,71.
- Nawias w nawiasie → **kwadratowy**. Przedziały ufności: 95% CI **[0,040; 0,068]**.
- **Średnik** oddziela liczby dziesiętne; wokół **ukośnika** nie ma spacji.
- **Skrótowiec**: najpierw pełna nazwa, potem (SKRÓT) i konsekwentnie dalej; nie w tytułach tabel.

## Wielkie i małe litery, kursywa
- Małą literą: nazwy zmiennych (ekstrawersja), „w tabeli 2”, „na rysunku 4”, grupy (grupa kontrolna), nazwy teorii (wyjątki: Wielka Piątka, Ciemna Triada).
- Tytuły: wielka litera **tylko w pierwszym słowie** (i nazwach własnych); w tytułach czasopism – w każdym słowie (Roczniki Psychologiczne).
- Nazwa kwestionariusza – **kursywą**, skrótowiec – bez kursywy: *Kwestionariusz typów emocjonalności* (KTE).
- **Kursywa**: tytuły, symbole statystyczne (M, SD, r, p, t, F, N, n, d Cohena), wartości skali „od 1 (*nigdy*) do 7 (*zawsze*)”, nowy termin przy pierwszym użyciu, numer rocznika w bibliografii.
- **Bez kursywy**: litery greckie, skrótowce, a priori, status quo, de facto.

## Liczby
- **Cyframi**: od 10 wzwyż, przed jednostką (3 cm), procenty, wiek, czas, wyniki, punkty na skali, „w tabeli 3”.
- **Słowami**: zero–dziewięć oraz liczba na początku zdania; ułamki zwykłe (jedna trzecia).
- Rzymskie tylko zwyczajowo: błąd II rodzaju. Duże liczby: 25 000 (od 5 cyfr), ale 1000, 5000.
- **Przecinek dziesiętny i zero przed nim zawsze**: p = 0,028; r = 0,45; d Cohena = 0,60.

## Zaokrąglanie i zapis statystyk
- **r, proporcje, t, F, χ²** – **2 miejsca** po przecinku.
- **M i SD** wyników kwestionariuszy – **1 miejsce**.
- **p** – dokładnie, 2–3 miejsca (p = 0,042); mniejsze: **p < 0,001**.
- Spacje wokół znaków: M = 32, p < 0,05.
- ≤ 3 liczby – w zdaniu; 4–20 – tabela; > 20 – wykres.
- W tekście pełne nazwy („średnie były wysokie”), symbole tylko przy wartościach. Parametry populacji – litery greckie, estymatory – łacińskie kursywą.
- % tylko po liczbie (18%); inaczej słowo „procent”.

## Wyliczenia
- W zdaniu: **(a), (b), (c)**.
- Lista numerowana – dla pełnych zdań (np. problemy badawcze).
- Punktory – gdy elementy nie są zdaniami; po ostatnim kropka.
- Uwaga: na ćwiczeniach wymienianie elementów (poza pytaniami i hipotezami) kosztuje −5 pkt!

## Tabele i rysunki
- Numeracja arabska wg kolejności w tekście; w załącznikach: tabela A1.
- **Tabela 1** (pogrubione) → w nowym wierszu **tytuł kursywą**; bez kropek.
- Tylko **linie poziome** (góra, pod nagłówkiem, dół). Nagłówki i liczby wyśrodkowane, tekst do lewej.
- **Adnotacje** pod tabelą: ogólna (*Uwaga.* skróty i symbole), szczegółowa (indeksy a, b, c), prawdopodobieństwa (* p < 0,05…).
- Rysunek: **Rysunek 1** pogrubione, opis kursywą; źródło, np. „opracowanie własne.”; czcionka bezszeryfowa w środku rysunku.
- Tabela i rysunek opisane w tekście; po akapicie, w którym są wspomniane.

## Bibliografia (Literatura)
- **Wcięcie od drugiej linijki**, kolejność alfabetyczna.
- **Książka:** Nazwisko, I. (rok). Tytuł książki. Wydawnictwo.
- **Rozdział:** Nazwisko, I. (rok). Tytuł rozdziału. W: I. Nazwisko (red.), Tytuł książki (s. 15–30). Wydawnictwo.
- **Artykuł:** Nazwisko, I. (rok). Tytuł artykułu. Tytuł Czasopisma, rocznik(zeszyt), 15–30. https://doi.org/…
- Kursywą piszemy: tytuł książki, tytuł czasopisma i numer rocznika.
- APA 7 vs APA 6: **bez miasta wydania**, do **20 autorów**, zawsze numer zeszytu, **DOI jako link**, „i in.” od pierwszego cytowania.

## Styl pisania
- Język faktów, bez ocen, epitetów, pytań retorycznych i stylu potocznego.
- **Bezosobowo**, czas dokonany: „Badanie zostało przeprowadzone…”.
- **Liczba** (policzalne: liczba osób) vs **ilość** (niepoliczalne: ilość czekolady).
- „iż” zamiast „że”; **bez przecinka przed „a”** w tytule pracy („Samoocena a lęk…”).
- Bez „Po pierwsze…, po drugie…”; zdania maks. 3–4 linijki; więcej artykułów niż książek.
- **Metoda lejka**: kolejność rozdziałów – najpierw zmienna wyjaśniana / zależna (Y), potem wyjaśniające (X); na końcu przegląd badań łączący zmienne.
- **Fuga** – zdania i akapity łączące wątki (płynne przejścia między rozdziałami).

> Na pamięć: 2 autorów – „i” za każdym razem · 3+ – „i in.” od razu · p = 0,042 (zero i przecinek) · t i F – 2 miejsca, M i SD – 1 miejsce.
`,
        flashcards: [
          ["Podstawowe formatowanie wg APA 7", "Times New Roman 12, interlinia 2, marginesy 2,5 cm, tekst do lewej, wcięcia akapitów, numer strony w prawym górnym rogu."],
          ["Czy numeruje się śródtytuły w APA?", "Nie (wyjątki mogą wprowadzać wydawnictwa i prace dyplomowe)."],
          ["Śródtytuł 1. stopnia", "Wyśrodkowany, pogrubiony (np. tytuł pracy, Metoda, Wyniki)."],
          ["Śródtytuł 3. stopnia", "Do lewej, pogrubiony i kursywą."],
          ["Śródtytuły 4. i 5. stopnia", "Wcięte, pogrubione (5. także kursywą), zakończone kropką; tekst w tym samym wierszu."],
          ["Kiedy trzeba cytować?", "Definicje, teorie, wyniki badań, opisy narzędzi, dane statystyczne, dosłowne cytaty."],
          ["Cytowanie pracy dwóch autorów", "Za każdym razem oba nazwiska ze spójnikiem „i”: (Kowalski i Nowak, 2015)."],
          ["Cytowanie pracy trzech lub więcej autorów", "Pierwszy autor + „i in.” już od pierwszego cytowania: (Kowalski i in., 2015)."],
          ["Kolejność kilku prac w jednym nawiasie", "Alfabetycznie, oddzielone średnikami."],
          ["Cytowanie pośrednie", "(Freud, 1922, za: Kowalski, 2015); rzadko; w bibliografii tylko źródło wtórne."],
          ["Cytat dosłowny poniżej 40 słów", "W cudzysłowie, z numerem strony: (Kowalski, 2015, s. 15)."],
          ["Cytat dosłowny od 40 słów", "Osobny, wcięty blok bez cudzysłowu."],
          ["Jak zaznaczyć pominięcie fragmentu cytatu?", "Wielokropkiem w nawiasie kwadratowym […]."],
          ["Dywiz, półpauza, minus", "Dywiz (-) w złożeniach (czarno-biały); półpauza (–) jako myślnik i w zakresach (s. 10–21); minus (−) dla wartości ujemnych."],
          ["Jak zapisać przedział ufności?", "W nawiasie kwadratowym ze średnikiem: 95% CI [0,040; 0,068]."],
          ["Jak zapisać stopnie swobody?", "W nawiasie okrągłym: t(75) = 2,19; F(2, 116) = 3,71."],
          ["Co piszemy kursywą?", "Tytuły, nazwy kwestionariuszy, symbole statystyczne (M, SD, r, p, N), wartości skali, nowe terminy."],
          ["Czego nie piszemy kursywą?", "Liter greckich, skrótowców, wyrażeń a priori, status quo, de facto."],
          ["Kiedy liczby zapisujemy cyframi?", "Od 10 wzwyż, przed jednostką, procenty, wiek, czas, wyniki, punkty na skali."],
          ["Kiedy liczby zapisujemy słowami?", "Zero–dziewięć oraz na początku zdania; ułamki zwykłe."],
          ["Do ilu miejsc zaokrąglamy r, t, F?", "Do dwóch miejsc po przecinku."],
          ["Do ilu miejsc zaokrąglamy M i SD z kwestionariuszy?", "Do jednego miejsca po przecinku."],
          ["Jak zapisać bardzo małe p?", "p < 0,001; większe dokładnie, np. p = 0,042."],
          ["Zero przed przecinkiem w polskim APA", "Zawsze, także dla r i p (p = 0,028)."],
          ["Ile liczb – tekst, tabela, wykres?", "Do 3 – zdanie; 4–20 – tabela; ponad 20 – wykres."],
          ["Jak opisać tabelę wg APA?", "„Tabela 1” pogrubione, pod spodem tytuł kursywą, bez kropek; tylko linie poziome; adnotacje pod tabelą."],
          ["Trzy rodzaje adnotacji pod tabelą", "Ogólna, szczegółowa (indeksy a, b, c) i prawdopodobieństwa (gwiazdki)."],
          ["Zapis książki w bibliografii", "Nazwisko, I. (rok). Tytuł książki. Wydawnictwo."],
          ["Zapis artykułu w bibliografii", "Nazwisko, I. (rok). Tytuł artykułu. Tytuł Czasopisma, rocznik(zeszyt), strony. DOI jako link."],
          ["Zmiany w bibliografii APA 7 vs APA 6", "Bez miasta wydania, do 20 autorów, zawsze numer zeszytu, DOI jako link."],
          ["Liczba czy ilość?", "Liczba – rzeczowniki policzalne (liczba osób); ilość – niepoliczalne (ilość czekolady)."],
          ["Przecinek przed „a” w tytule pracy?", "Nie: „Samoocena a lęk przed ekspozycją społeczną”."],
          ["W jakiej formie pisać raport?", "Bezosobowo, w czasie dokonanym („Badanie zostało przeprowadzone…”)."],
          ["Kolejność opisu zmiennych (metoda lejka)", "Najpierw zmienna zależna/wyjaśniana, potem wyjaśniające; na końcu przegląd badań."],
          ["Czym jest fuga w tekście naukowym?", "Łącznikiem treści – przejściem logicznie łączącym kolejne wątki i rozdziały."]
        ],
        quiz: [
          { q: "Jak poprawnie zacytować po raz pierwszy pracę trzech autorów (Kowalski, Nowak, Wiśniewska, 2020)?", o: ["(Kowalski, Nowak i Wiśniewska, 2020)", "(Kowalski i in., 2020)", "(Kowalski et al., 2020)", "(Kowalski, Nowak, Wiśniewska, 2020)"], a: 1, e: "W APA 7 „i in.” stosuje się od pierwszego cytowania.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Jak zapisać w tekście pracę dwóch autorów w nawiasie?", o: ["(Kowalski & Nowak, 2015)", "(Kowalski i Nowak, 2015)", "(Kowalski i in., 2015)", "(Kowalski, Nowak 2015)"], a: 1, e: "W polskim APA zawsze spójnik „i”, także w nawiasie.", src: "APA-7.pdf (Skimina i in., 2022)" },
          { q: "Który zapis wartości p jest poprawny?", o: ["p = .042", "p = 0,042", "p=0.042", "p = 0,0420"], a: 1, e: "Przecinek dziesiętny, zero przed przecinkiem i spacje wokół znaku.", src: "APA-7.pdf (Skimina i in., 2022)" },
          { q: "Jak zapisać p = 0,0003?", o: ["p = 0,0003", "p < 0,001", "p = 0,000", "p < 0,05"], a: 1, e: "Wartości mniejsze niż 0,001 zapisuje się jako p < 0,001.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Do ilu miejsc po przecinku zaokrągla się statystyki t i F?", o: ["jednego", "dwóch", "trzech", "czterech"], a: 1, e: "r, proporcje, t, F i χ² – dwa miejsca; M i SD z kwestionariuszy – jedno.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Cytat dosłowny liczący 55 słów należy:", o: ["ująć w cudzysłów w tekście", "wydzielić jako wcięty blok bez cudzysłowu", "zapisać kursywą", "umieścić w przypisie"], a: 1, e: "Cytaty od 40 słów – osobny blok, bez cudzysłowu.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Jak zapisać zakres stron?", o: ["s. 10-21 (dywiz)", "s. 10–21 (półpauza)", "s. 10 − 21 (minus)", "s. 10 / 21"], a: 1, e: "Zakresy zapisuje się półpauzą bez spacji.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Który element NIE jest pisany kursywą?", o: ["symbol M", "tytuł książki", "skrótowiec kwestionariusza (np. KTE)", "wartości skali, np. (nigdy)"], a: 2, e: "Skrótowce i litery greckie piszemy prostym krojem.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Ile liczb powinna zawierać informacja, by najpierw rozważyć tabelę?", o: ["1–3", "4–20", "ponad 20", "zawsze tabela"], a: 1, e: "Do 3 – w zdaniu, 4–20 – tabela, ponad 20 – wykres.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Jak wygląda podpis tabeli w APA 7?", o: ["Tabela 1. Tytuł tabeli.", "„Tabela 1” pogrubione, w nowej linii tytuł kursywą, bez kropek", "Tytuł pod tabelą zwykłą czcionką", "TABELA I – tytuł"], a: 1, e: "Numer pogrubiony, tytuł kursywą w kolejnym wierszu, bez kropek.", src: "2 – Standardy edytorskie APA.pptx" },
          { q: "Która zmiana dotyczy bibliografii w APA 7 względem APA 6?", o: ["podaje się miasto wydania", "nie podaje się miasta wydania, a DOI zapisuje się jako link", "nie podaje się roku", "autorów zapisuje się wielkimi literami"], a: 1, e: "APA 7: bez miasta, do 20 autorów, DOI jako URL.", src: "Wybrane reguły spolszczonego APA 7" },
          { q: "Który tytuł pracy jest zapisany poprawnie?", o: ["Samoocena, a lęk przed ekspozycją społeczną", "Samoocena a lęk przed ekspozycją społeczną", "Samoocena A Lęk Przed Ekspozycją Społeczną", "„Samoocena a lęk przed ekspozycją społeczną”"], a: 1, e: "Bez przecinka przed „a”, wielka litera tylko na początku.", src: "2 – Standardy edytorskie APA.pptx" },
          { q: "„Ilość” czy „liczba” osób badanych?", o: ["ilość osób", "liczba osób", "obie formy są poprawne", "zależy od kontekstu"], a: 1, e: "Liczba – policzalne; ilość – niepoliczalne (ilość czekolady).", src: "2 – Standardy edytorskie APA.pptx" },
          { q: "W jakiej kolejności opisywać zmienne w części teoretycznej badania eksperymentalnego?", o: ["najpierw niezależne, potem zależną", "najpierw zależną, potem niezależne", "alfabetycznie", "dowolnie"], a: 1, e: "Metoda lejka: od zmiennej zależnej/wyjaśnianej do wyjaśniających (za błąd: −10 pkt).", src: "2 – Standardy edytorskie APA.pptx" }
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
