// Diagnoza sprawności poznawczych (dr Joanna Pracka). Opracowane na podstawie plików z Dysku (folder „pracka”):
// Etyka diagnosty.pdf (prezentacja z wykładu), Etyka_notatka_pelna.pdf (Brzeziński i in., 2019, rozdz. 6, 12, 14).
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "poznawcze",
  name: "Diagnoza sprawności poznawczych",
  short: "Sprawności poznawcze",
  icon: "🧩",
  color: "#f06595",
  // format egzaminu orientacyjny – zmień, gdy poznasz zasady
  exam: { questions: 20, minutes: 20, pass: 11, note: "Format orientacyjny (20 pytań, 20 minut, próg 11) – nie znam dokładnych zasad egzaminu." },
  sources: [
    "pracka: Etyka diagnosty.pdf – prezentacja dr Joanny Prackiej „Zagadnienia etyczne dot. procesu diagnozy psychologicznej”",
    "pracka: Etyka_notatka_pelna.pdf – Brzeziński, Chyrowicz, Toeplitz, Toeplitz-Winiewska (2019), Etyka zawodu psychologa, rozdz. 6, 12, 14",
    "falewicz: folder pusty – po dodaniu materiałów pojawią się tu kolejne tematy"
  ],
  topics: [
    // ------------------------------------------------------------------
    {
      id: "zawod",
      title: "Zawód zaufania publicznego i ustawa o zawodzie psychologa",
      notes: `
## Dlaczego etyka?
Psycholog **pracuje z ludźmi, oddziałuje na nich i podejmuje decyzje ważne dla ich przyszłości** – dlatego to **zawód zaufania publicznego** (pytanie z wykładu dr Prackiej).

## Trzy pojęcia prawne
| Pojęcie | Znaczenie |
|---|---|
| wolny zawód | najstarszy termin; samodzielna praca intelektualna wymagająca wysokich kwalifikacji, w interesie ogólnym |
| zawód regulowany | pojęcie z prawa UE; wymaga kwalifikacji, egzaminu i zezwolenia |
| **zawód zaufania publicznego** | pojęcie **tylko polskie**, z **Konstytucji RP (1997), art. 17**; takie zawody mogą tworzyć **samorząd zawodowy** |

Państwo przekazuje takim zawodom część uprawnień, więc ograniczenia etyczne są potrzebą, a nie przywilejem.

**Cechy zawodu zaufania publicznego** (Hausner, Długosz): pomoc przy zagrożeniu ważnych dóbr (życie, zdrowie, godność, wolność) · poznawanie intymnych spraw klienta · **obowiązek tajemnicy** i ochrona przed karą za jej niezłamanie · skodyfikowana etyka · brak hierarchii urzędniczej · specjalistyczne wykształcenie.

## Ustawa z 8 czerwca 2001 r. o zawodzie psychologa
- Określa, kto jest psychologiem, jego zadania, zasady pracy, nadzór i odpowiedzialność dyscyplinarną. **Nie została w pełni wdrożona** – nie powstał samorząd.
- **Art. 4** – usługi: diagnoza, opiniowanie, orzekanie, psychoterapia, pomoc psychologiczna (także badania i dydaktyka).
- **Art. 7–8** – wpis na listę: magister psychologii, pełna zdolność do czynności prawnych, język polski, staż.
- **Art. 12** – usługi wymagają **zgody klienta** (wyjątki: KK, KPK, ochrona zdrowia psychicznego, poborowi).
- **Art. 13** – obowiązek **informowania** o celu, przebiegu, wynikach i ich udostępnianiu.
- **Art. 14** – **tajemnica**, nieograniczona w czasie; wyjątek: poważne zagrożenie życia lub zdrowia albo przepis ustawy.
- **Kary dyscyplinarne**: upomnienie → nagana z ostrzeżeniem → zawieszenie (3–12 mies.) → skreślenie z listy.

## Nowa ustawa (według notatki z Dysku)
**Ustawa z 23 stycznia 2026 r. o zawodzie psychologa oraz samorządzie zawodowym psychologów** (podpisana 12 lutego 2026): obowiązkowy samorząd i publiczny rejestr psychologów, katalog świadczeń, zasady uzyskiwania prawa wykonywania zawodu; większość przepisów od **maja 2028 r.** Ustawa o zawodzie psychoterapeuty to osobny projekt.

> Na pamięć: Konstytucja art. 17 → zawód zaufania publicznego → ustawa 2001: zgoda (art. 12), informacja (art. 13), tajemnica (art. 14).
`,
      flashcards: [
        ["Dlaczego psycholog musi kierować się zasadami etycznymi?", "Bo pracuje z ludźmi, oddziałuje na nich i podejmuje decyzje ważne dla ich przyszłości; to zawód zaufania publicznego."],
        ["Skąd pochodzi pojęcie zawodu zaufania publicznego?", "Z Konstytucji RP (1997), art. 17 – pojęcie tylko polskie; takie zawody mogą tworzyć samorząd."],
        ["Zawód regulowany", "Pojęcie z prawa UE: wymaga kwalifikacji, egzaminu i zezwolenia."],
        ["Cechy zawodu zaufania publicznego", "Ochrona ważnych dóbr, wiedza o intymnych sprawach klienta, tajemnica zawodowa, skodyfikowana etyka, brak hierarchii urzędniczej, specjalistyczne wykształcenie."],
        ["Data pierwszej ustawy o zawodzie psychologa", "8 czerwca 2001 r. (nie powstał wtedy samorząd)."],
        ["Art. 12 ustawy o zawodzie psychologa", "Usługi psychologa wymagają zgody klienta."],
        ["Art. 13 ustawy", "Psycholog informuje o celu, przebiegu, wynikach i ich udostępnianiu."],
        ["Art. 14 ustawy", "Tajemnica zawodowa bez ograniczeń czasowych; wyjątek: poważne zagrożenie życia lub zdrowia albo przepis ustawy."],
        ["Kary dyscyplinarne z ustawy z 2001 r.", "Upomnienie, nagana z ostrzeżeniem, zawieszenie (3–12 miesięcy), skreślenie z listy."],
        ["Warunki wpisu na listę psychologów (2001)", "Dyplom magistra psychologii, pełna zdolność do czynności prawnych, znajomość języka polskiego, staż."],
        ["Nowa ustawa o zawodzie psychologa (wg notatki)", "Z 23 stycznia 2026 r.; samorząd i rejestr; większość przepisów od maja 2028 r."]
      ],
      quiz: [
        { q: "Pojęcie „zawód zaufania publicznego” pochodzi z:", o: ["prawa UE", "Konstytucji RP, art. 17", "Kodeksu karnego", "Kodeksu Etyczno-Zawodowego PTP"], a: 1, e: "To pojęcie tylko polskie, konstytucyjne." },
        { q: "Który artykuł ustawy z 2001 r. dotyczy tajemnicy zawodowej?", o: ["art. 4", "art. 12", "art. 13", "art. 14"], a: 3, e: "Art. 12 – zgoda, art. 13 – informacja, art. 14 – tajemnica." },
        { q: "Najsurowsza kara dyscyplinarna z ustawy z 2001 r. to:", o: ["nagana z ostrzeżeniem", "zawieszenie na 12 miesięcy", "skreślenie z listy psychologów", "grzywna"], a: 2, e: "Kolejność: upomnienie, nagana, zawieszenie, skreślenie." },
        { q: "Dlaczego ustawa z 2001 r. była przez lata „martwym prawem”?", o: ["została uchylona", "nie powstał samorząd zawodowy", "nie podpisał jej prezydent", "dotyczyła tylko psychoterapeutów"], a: 1, e: "Nie powstał samorząd, więc ustawa nie została w pełni wdrożona." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "zasady",
      title: "Pięć zasad etycznych i prawa klienta",
      notes: `
Kodeksy (PTP 1991, EFPA 2005, BPS, APA 2010, CPA 2017) wyrażają te same wartości. Zasady to **wskazówki (wzorzec)**, a nie podstawa sankcji; konkretne obowiązki określają standardy postępowania.
**Klient** – osoba w relacji z psychologiem (pacjent, uczeń, para, klasa). **Zleceniodawca** – ten, kto zleca usługę (rodzic, szkoła, sąd, firma). Zasady chronią przede wszystkim klienta.

## Pięć podstawowych zasad
**1. Dobro klienta i nieszkodzenie** – *primum non nocere* („przede wszystkim nie szkodzić”).
- **Samoświadomość granic kompetencji** – nie stosuj technik, w których nie masz przeszkolenia; granicą są też silne postawy i przekonania.
- Stałe doskonalenie, wiedza z innych dziedzin (psycholog sądowy zna prawo).
- **„Psycholog pracuje sobą”** – jakość pracy zależy od jego kondycji psychicznej i fizycznej.

**2. Odpowiedzialność zawodowa** – przewaga wiedzy psychologa (relacja **niesymetryczna**); im większa zależność klienta, tym większa odpowiedzialność.
- **Konflikt ról** (Lazari-Pawłowska) – np. diagnozowanie własnego dziecka lub przyjaciela. Konflikt bywa też w jednej roli: **diagnosta-orzecznik nie prowadzi terapii**.
- Ciągłość opieki, dbałość o dobre imię zawodu.

**3. Integralność i uczciwość zawodowa** – tylko metody naukowo uzasadnione, refleksja nad własnymi wartościami; **nie z każdym klientem psycholog może pracować** (silne emocje ograniczają obiektywizm → nierzetelna diagnoza lub zła terapia).

**4. Sprawiedliwość** – jednakowe traktowanie niezależnie od pochodzenia, poglądów, wyznania, zdrowia, orientacji; kompetencje kulturowe (migranci, uchodźcy).

**5. Prawa człowieka i godność** – **autonomia (podmiotowość), godność, intymność (prywatność), poufność** (inaczej u dzieci, nastolatków i dorosłych).

## Prawa klienta
- **Autonomia** (Kitchener) = **wolność działania** (dopóki nie szkodzi innym) + **wolność wyboru własnych sądów**. Klient ma prawo do decyzji, błędów i wartości; prawo do informacji zwrotnej i do odmowy jej wysłuchania.
- Źródła przedmiotowego traktowania: tradycja **medyczna** (pacjent jako „przypadek”), **oświatowa** (uczeń jako bierny odbiorca), **władza rodzicielska** (coraz częściej mówi się o pieczy).
- **Godność** – bezwarunkowa i niezbywalna; **oddzielamy czyn od osoby** (oskarżonego szanujemy jako człowieka).
- **Prywatność** (Konstytucja, art. 47 i 51) – psycholog ingeruje tylko **w zakresie kontraktu**; nie zbiera zbędnych danych.

> Na pamięć: D-O-U-S-P – Dobro klienta · Odpowiedzialność · Uczciwość · Sprawiedliwość · Prawa i godność („Dobry Opiekun Uczy Się Pokory”).
`,
      flashcards: [
        ["Pięć podstawowych zasad etycznych psychologa", "Dobro klienta i nieszkodzenie, odpowiedzialność zawodowa, integralność i uczciwość, sprawiedliwość, poszanowanie praw człowieka i godności."],
        ["Primum non nocere", "„Przede wszystkim nie szkodzić” – podstawa zasady dobra klienta."],
        ["Co znaczy, że „psycholog pracuje sobą”?", "Jakość jego pracy zależy od jego kondycji psychicznej i fizycznej."],
        ["Klient vs zleceniodawca", "Klient jest w relacji z psychologiem; zleceniodawca zleca usługę (np. sąd, szkoła)."],
        ["Czy zasady z kodeksów są podstawą sankcji?", "Nie – to wskazówki (wzorzec); sankcje wynikają z przepisów i standardów."],
        ["Dlaczego diagnosta-orzecznik nie prowadzi terapii?", "To konflikt w obrębie roli zawodowej – terapia kłóci się z obiektywną oceną."],
        ["Dlaczego nie z każdym klientem psycholog może pracować?", "Silne emocje lub wartości ograniczają obiektywizm – grozi to nierzetelną diagnozą lub złą terapią."],
        ["Prawa klienta (5. zasada)", "Autonomia (podmiotowość), godność, intymność (prywatność), poufność."],
        ["Autonomia wg Kitchener", "Wolność działania (o ile nie szkodzi innym) i wolność wyboru własnych sądów."],
        ["Źródła przedmiotowego traktowania klienta", "Tradycja medyczna, tradycja oświatowa, władza rodzicielska."],
        ["Godność w relacji z badanym", "Jest bezwarunkowa – oceniamy czyn, ale szanujemy osobę."],
        ["Granice prywatności w diagnozie", "Psycholog pyta tylko w zakresie kontraktu i nie zbiera zbędnych danych."]
      ],
      quiz: [
        { q: "Zasada „primum non nocere” to podstawa zasady:", o: ["sprawiedliwości", "dobra klienta i nieszkodzenia", "uczciwości zawodowej", "poufności"], a: 1, e: "Przede wszystkim nie szkodzić." },
        { q: "Autonomia według Kitchener to:", o: ["prawo do poufności i godności", "wolność działania i wolność własnych sądów", "prawo do informacji zwrotnej", "niezależność psychologa od zleceniodawcy"], a: 1, e: "Dwa składniki autonomii." },
        { q: "Psycholog diagnozujący przyjaciela narusza przede wszystkim zasadę:", o: ["sprawiedliwości", "odpowiedzialności (konflikt ról)", "prywatności", "uczciwości finansowej"], a: 1, e: "Konflikt ról – diagnoza nieobiektywna." },
        { q: "Który element NIE należy do praw klienta z piątej zasady?", o: ["autonomia", "godność", "poufność", "prawo do wyboru testu"], a: 3, e: "Prawa: autonomia, godność, prywatność, poufność. Narzędzia dobiera psycholog." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "tajemnica",
      title: "Tajemnica zawodowa",
      notes: `
**Tajemnica zawodowa** (Stepulak) obejmuje **wszystko**, czego psycholog dowiedział się w związku z pracą (diagnozy, wyniki, sytuacja rodzinna i materialna). Obowiązuje także **po śmierci klienta**, w badaniach naukowych i bez bezpośredniej opieki. To **sekret przyrzeczony** (z umowy). **Bez granic czasowych, ale nie bezwzględna.**

## Przepisy
| Przepis | Co mówi |
|---|---|
| ustawa o zawodzie psychologa, art. 14 | tajemnica bez limitu czasu; wyjątek – zagrożenie życia/zdrowia |
| **KK art. 266 § 1** | ujawnienie tajemnicy wbrew zobowiązaniu – grzywna, ograniczenie lub pozbawienie wolności **do 2 lat** |
| ustawa o ochronie zdrowia psychicznego, art. 50–52 | tajemnica; nie zapisuje się przyznania do przestępstwa; **bezwzględny zakaz dowodowy (art. 52)** |
| ustawa o prawach pacjenta (2008), art. 13–14 | prawo pacjenta do tajemnicy |
| KPC art. 261 § 2, KPA art. 83 § 2 | świadek może odmówić odpowiedzi, gdy naruszyłby tajemnicę |

Przed sądem psycholog **wyraźnie oświadcza**, że odmawia zeznań z powodu tajemnicy, i wskazuje przepisy.

## Gdy obowiązki się zderzają
- **KK art. 240 § 1** – obowiązek zawiadomienia o poważnym przestępstwie (do 3 lat za zaniechanie).
- **KPK art. 304 § 1** – społeczny obowiązek zawiadomienia o przestępstwie ściganym z urzędu.
- **Ustawa o przeciwdziałaniu przemocy w rodzinie, art. 12** – podejrzenie przemocy → niezwłocznie Policja lub prokurator (od 2023 r. nowa wersja – „przemoc domowa”).
- **KK art. 26 – stan wyższej konieczności**: poświęcenie dobra niższego dla ratowania wyższego; punkt odniesienia – **życie i zdrowie**. Decyzja wymaga konsultacji (czy zagrożenie realne, motywy klienta).

## Zwolnienie z tajemnicy – KPK art. 180
- Osoby z tajemnicą mogą odmówić zeznań, chyba że **sąd lub prokurator** je zwolni.
- Tylko gdy to **niezbędne dla dobra wymiaru sprawiedliwości** i nie ma innego dowodu; **tylko w procedurze karnej**, postanowienie **na piśmie**.
- Na postanowienie prokuratora – zażalenie; od postanowienia sądu – brak odwołania.
- Typowe naciski: rodzice chcący wiedzieć, co mówiło lub narysowało dziecko.

> Na pamięć: tajemnica – wszystko · zawsze · nawet po śmierci, ale nie bezwzględnie. Granica = życie i zdrowie. Zwalnia sąd lub prokurator (tylko sprawy karne).
`,
      flashcards: [
        ["Co obejmuje tajemnica zawodowa psychologa?", "Wszystko, czego psycholog dowiedział się w związku z pracą."],
        ["Czy tajemnica obowiązuje po śmierci klienta?", "Tak – jest bez granic czasowych."],
        ["Czy tajemnica jest bezwzględna?", "Nie – granicą jest zagrożenie życia lub zdrowia i przepisy ustaw."],
        ["Kara za ujawnienie tajemnicy (KK art. 266 § 1)", "Grzywna, ograniczenie lub pozbawienie wolności do 2 lat."],
        ["Bezwzględny zakaz dowodowy", "Ustawa o ochronie zdrowia psychicznego, art. 52."],
        ["Stan wyższej konieczności", "KK art. 26: można poświęcić dobro niższe, by ratować wyższe (życie, zdrowie)."],
        ["Obowiązek przy podejrzeniu przemocy w rodzinie", "Niezwłoczne zawiadomienie Policji lub prokuratora (ustawa o przeciwdziałaniu przemocy, art. 12)."],
        ["Kto może zwolnić psychologa z tajemnicy?", "Sąd lub prokurator – tylko w procedurze karnej (KPK art. 180), na piśmie."],
        ["Kiedy można przesłuchać psychologa po zwolnieniu z tajemnicy?", "Gdy to niezbędne dla dobra wymiaru sprawiedliwości i nie ma innego dowodu."],
        ["Jak odmówić zeznań przed sądem?", "Wyraźnie oświadczyć, że odmawia się z powodu tajemnicy zawodowej, i wskazać przepisy."]
      ],
      quiz: [
        { q: "Kto może zwolnić psychologa z tajemnicy zawodowej?", o: ["pracodawca", "rodzice klienta", "sąd lub prokurator w sprawie karnej", "każdy sąd w każdej sprawie"], a: 2, e: "KPK art. 180 – tylko procedura karna." },
        { q: "Ujawnienie tajemnicy wbrew zobowiązaniu grozi karą do:", o: ["1 roku", "2 lat", "3 lat", "5 lat"], a: 1, e: "KK art. 266 § 1." },
        { q: "Tajemnica zawodowa psychologa:", o: ["wygasa po 10 latach", "wygasa ze śmiercią klienta", "jest bez granic czasowych, ale nie bezwzględna", "jest bezwzględna"], a: 2, e: "Granicą jest zagrożenie życia i zdrowia." },
        { q: "Poświęcenie tajemnicy, by ratować życie, uzasadnia:", o: ["stan wyższej konieczności (KK art. 26)", "KPA art. 83", "kodeks EFPA", "zgoda zleceniodawcy"], a: 0, e: "Dobro wyższe – życie i zdrowie." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "standardy",
      title: "Standardy diagnozy, diagnosta a terapeuta, relacja z badanym",
      notes: `
## Standardy diagnozy psychologicznej (Sekcja Diagnozy PTP, 2014) – 5 części
- **Warunki wstępne** – jest zapotrzebowanie; problem da się rozwiązać współczesną wiedzą; psycholog ma kompetencje i postawę etyczną; kieruje dalej w razie potrzeby; superwizja; rozpoznaje konflikty; **kontrakt** (pisemny lub ustny) na podstawie świadomej zgody.
- **Planowanie** – strategia, narzędzia z podstawą naukową, ich właściwości psychometryczne, prawa autorskie, aktualne wersje.
- **Badanie** – standardowe warunki, właściwa postawa, kontrola zakłóceń.
- **Integracja danych** – łączenie danych ilościowych i jakościowych; ocena, na ile można im ufać.
- **Komunikowanie i dokumentacja** – wnioski zgodne z kontraktem i dopasowane do odbiorcy, bezpieczne przechowywanie.

Diagnoza silnie wpływa na losy klienta (badania obowiązkowe w ok. 36 zawodach, ekspertyza sądowa jako dowód).

## Obiektywizm (pytanie z wykładu)
**Czy w trakcie diagnozy udzielamy pomocy psychologicznej? – NIE**, ani w trakcie, ani po badaniu. **Obiektywizm ≠ bezduszność**. **Wyjątek**: informacja zwrotna na końcu ma charakter oddziaływania i może być formą pomocy. Łączymy obiektywizm z zaufaniem (np. biegły sądowy i badany kwestionujący opinię).

## Diagnosta a terapeuta (Ackerman, 2005)
| | Diagnosta | Terapeuta |
|---|---|---|
| Zleceniodawca | pracodawca, nauczyciel, lekarz, sąd, sam klient | klient |
| Poufność | **ograniczona** | **całkowita** |
| Postawa | neutralna, obiektywna | wspierająca, akceptująca |
| Techniki | obiektywne, testy | terapeutyczne |
| Hipotezy weryfikuje | psycholog i dane obiektywne | klient i proces terapii |
| Antagonizm | ocena często budzi protest | relacja pomocy bez antagonizmu |
| Cel | ocena funkcjonowania | pomoc |
| Efekt | decyzję podejmuje właściwy organ | dobrostan klienta |

**Diagnoza sprawności poznawczych ≠ diagnoza kliniczna**: diagnoza intelektu, osobowości, temperamentu jest **ograniczona w czasie** (od badania do przekazania wyników); diagnoza kliniczna jest **długofalowa** (może trwać przez całą terapię).

## Nie diagnozujemy osób, które znamy (pytanie z wykładu)
Ani z relacji **prywatnych** (rodzina, przyjaciele, znajomi), ani **profesjonalnych** (terapia, uczniowie, studenci). Powody: **konflikt ról** – diagnoza nieobiektywna (dane spoza badania) oraz **trwała zmiana relacji** (zniekształcone oczekiwania, lęk osoby badanej). Kodeks PTP (1991) tego nie zapisał wprost.

## Relacja psycholog – klient
- **Dobrowolność** – od pełnej (badanie z ciekawości) do **przymusu prawnego** (oskarżeni, KPK art. 74); pomiędzy naciski formalne i psychologiczne (rekrutacja, kierowcy, dziecko w poradni, rozwód).
- **Lęk przed oceną** (Rosenberg): czy sprostam zadaniom? czy skutki diagnozy będą korzystne? Badany zawsze chroni poczucie własnej wartości.
- **Oczekiwania psychologa** (Rosenthal): **efekt Galatei** – pozytywne (oczekiwanie sukcesu), **efekt Golema** – negatywne (oczekiwanie porażki); zniekształcają dobór zadań, pytania i interpretację.
- **3 źródła wstępnych oczekiwań**: cechy psychologa (przekonania, wartości), obiektywne informacje (akta, skierowania), pierwsze wrażenie.
`,
      flashcards: [
        ["5 części Standardów diagnozy PTP (2014)", "Warunki wstępne, planowanie, badanie, integracja danych, komunikowanie i dokumentacja."],
        ["Czy w trakcie diagnozy udzielamy pomocy psychologicznej?", "Nie – ani w trakcie, ani po badaniu; wyjątek: informacja zwrotna na końcu może być formą pomocy."],
        ["Obiektywizm diagnostyczny a bezduszność", "Obiektywizm nie oznacza bezduszności – to rzetelne badanie w warunkach sprzyjających klientowi."],
        ["Poufność u diagnosty i terapeuty", "Diagnosta – ograniczona; terapeuta – całkowita."],
        ["Cel i efekt pracy diagnosty", "Cel: ocena funkcjonowania; efekt: decyzję podejmuje właściwy organ."],
        ["Cel i efekt pracy terapeuty", "Cel: pomoc; efekt: dobrostan klienta."],
        ["Diagnoza sprawności poznawczych a kliniczna", "Sprawności poznawczych – ograniczona w czasie (do przekazania wyników); kliniczna – długofalowa."],
        ["Czy można diagnozować rodzinę i znajomych?", "Nie – konflikt ról, diagnoza nieobiektywna, trwała zmiana relacji i lęk osoby badanej."],
        ["Zakres dobrowolności badania", "Od pełnej dobrowolności do przymusu prawnego (np. oskarżeni); pomiędzy naciski formalne i psychologiczne."],
        ["Dwa aspekty lęku przed oceną (Rosenberg)", "Czy sprostam zadaniom? Czy skutki diagnozy będą dla mnie korzystne?"],
        ["Efekt Galatei vs efekt Golema (Rosenthal)", "Galatea – pozytywne oczekiwania psychologa; Golem – negatywne."],
        ["3 źródła wstępnych oczekiwań psychologa", "Jego cechy (przekonania, wartości), obiektywne informacje (akta), pierwsze wrażenie."]
      ],
      quiz: [
        { q: "Czy diagnosta może udzielać pomocy psychologicznej w trakcie badania?", o: ["tak, zawsze", "tak, jeśli klient o to prosi", "nie – wyjątkiem jest informacja zwrotna na końcu", "tak, po zakończeniu badania"], a: 2, e: "Pomoc w trakcie i po badaniu jest wykluczona." },
        { q: "Poufność w pracy diagnosty jest:", o: ["całkowita", "ograniczona", "nieistniejąca", "zależna od zleceniodawcy"], a: 1, e: "Wyniki trafiają do zleceniodawcy." },
        { q: "Diagnoza intelektu, w odróżnieniu od diagnozy klinicznej, jest:", o: ["długofalowa", "ograniczona w czasie", "prowadzona przez całą terapię", "zawsze grupowa"], a: 1, e: "Trwa od badania do przekazania wyników." },
        { q: "Pozytywne oczekiwania psychologa wobec badanego to efekt:", o: ["Golema", "Galatei", "halo", "Pigmaliona odwróconego"], a: 1, e: "Rosenthal: Galatea (+), Golem (–)." },
        { q: "Pierwsza część Standardów diagnozy PTP to:", o: ["planowanie", "warunki wstępne", "badanie", "integracja danych"], a: 1, e: "Warunki wstępne, m.in. kontrakt i ocena kompetencji." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "kontrakt",
      title: "Kontrakt diagnostyczny, badanie i informacja zwrotna",
      notes: `
**Trzy etapy diagnozy**: zawarcie kontraktu → badanie → zakończenie (informacja zwrotna i opinia).

## Kontrakt ze zleceniodawcą – 3 pytania
- Czy problem jest **dobrze zaadresowany do psychologa**? (np. pytania o konfabulację czy depresję – raczej do psychiatry)
- Czy zadanie mieści się w **aktualnej wiedzy**? (np. przewidywanie decyzji przyszłego sędziego – nierealne)
- Czy psycholog ma **kompetencje**? (kompetencja diagnostyczna – Stemplewska-Żakowicz)

Zgoda **nie może być domniemana**. Nawet przy badaniu przymusowym klient musi zaakceptować metody; narzędzia dobiera psycholog jako niezależny ekspert.

## Kontrakt z klientem – 5 kwestii
| # | Kwestia | Najważniejsze |
|---|---|---|
| 1 | **Cel** | podstawa świadomej zgody (informed consent) |
| 2 | **Zakres** | tylko informacje niezbędne; oceniamy tylko wskazane obszary |
| 3 | **Oczekiwania klienta** | klient próbuje odczytać rzeczywisty cel (Orne) |
| 4 | **Czas** | jednorazowe badanie **1,5–2 godziny**, z przerwami |
| 5 | **Wynagrodzenie** | płaci się za badanie i czas, nie za pozytywną ocenę |

Kontrakt zmniejsza lęk i podkreśla podmiotowość. Przykłady złego kontraktu: kierowca, który „nie mógł poprawić egzaminu” (badanie wyglądało jak sprawdzian wiedzy); pytanie „skąd ma pan pieniądze na samochód?” – wkraczanie w prywatność.

## Przebieg badania
- **Optymalne warunki** = szacunek dla godności: cisza, światło, czytelne arkusze, pełna uwaga, bez telefonu.
- Klient może **odmówić wykonania testu** (autonomia); pokusa przekonywania z pozycji przewagi, zwłaszcza wobec nieletnich i oskarżonych.
- Testy to tylko narzędzia trafne, rzetelne, standaryzowane, obiektywne, z aktualnymi polskimi normami – reszta to narzędzia jakościowe.
- Nieetyczne: celowe wzmaganie stresu (np. pytania typu „czy twoja matka jest złą kobietą?” w rekrutacji).

## Informacja zwrotna
- **Podstawowe prawo klienta**; jak najszybciej, klient poznaje ją pierwszy. Jedyny wyjątek – klient sam nie chce.
- Psycholog **nie selekcjonuje**, co przekaże – przekazuje wszystko; pytanie brzmi **„jak?”, nie „co?”**.
- Funkcje: podmiotowość, mniej lęku i poczucia winy, wypełnienie kontraktu, początek pomocy.

**6 zasad informacji zwrotnej** (wykład dr Prackiej):
- **zrozumiały język** dostosowany do klienta,
- **bez informacji destrukcyjnych** (sugerujących, że nic nie da się zmienić),
- **bez wyników liczbowych**,
- **bez etykiet** i stygmatyzowania,
- **kanapka** – przeplatanie informacji pozytywnych z negatywnymi,
- **odpowiadanie na pytania** klienta.

**Ryzyko informacji zwrotnej** (Hornowska, 2001): ma konsekwencje społeczne – klient dopasowuje obraz siebie do diagnozy, bliscy zmieniają zachowanie; **labelling**, wpływ na samoocenę i odbiór społeczny, diagnoza jako „usprawiedliwienie” trudnych zachowań.

> Na pamięć: kontrakt z klientem = Cel · Zakres · Oczekiwania · Czas · Wynagrodzenie („Cicho Zasypia Owca, Czekając Wiosny”).
`,
      flashcards: [
        ["Trzy etapy diagnozy", "Kontrakt → badanie → zakończenie (informacja zwrotna i opinia)."],
        ["3 pytania kontraktu ze zleceniodawcą", "Czy problem jest dla psychologa? Czy mieści się w aktualnej wiedzy? Czy psycholog ma kompetencje?"],
        ["5 kwestii kontraktu z klientem", "Cel, zakres, oczekiwania klienta, czas, wynagrodzenie."],
        ["Ile powinno trwać jednorazowe badanie?", "1,5–2 godziny, nie dłużej (z przerwami)."],
        ["Czy zgoda na badanie może być domniemana?", "Nie – np. „skoro przyszedł do szpitala, to się zgodził” jest niedopuszczalne."],
        ["Czy klient może odmówić wykonania testu?", "Tak – wynika to z autonomii."],
        ["Kiedy psycholog nie przekazuje informacji zwrotnej?", "Tylko gdy klient sobie tego nie życzy."],
        ["„Jak?” czy „co?” w informacji zwrotnej", "Psycholog przekazuje wszystko – zastanawia się tylko, jak to zrobić."],
        ["6 zasad informacji zwrotnej", "Zrozumiały język, bez informacji destrukcyjnych, bez liczb, bez etykiet, kanapka, odpowiadanie na pytania."],
        ["Struktura kanapkowa", "Przeplatanie informacji pozytywnych z negatywnymi."],
        ["Ryzyko informacji zwrotnej (Hornowska)", "Labelling, zmiana samooceny i odbioru społecznego, diagnoza jako „usprawiedliwienie” zachowań."]
      ],
      quiz: [
        { q: "Który element NIE należy do 5 kwestii kontraktu z klientem?", o: ["cel", "zakres", "wynik testu", "wynagrodzenie"], a: 2, e: "Cel, zakres, oczekiwania, czas, wynagrodzenie." },
        { q: "Jednorazowe badanie diagnostyczne powinno trwać maksymalnie:", o: ["30 minut", "1,5–2 godziny", "4 godziny", "cały dzień"], a: 1, e: "Z formalnościami, z przerwami." },
        { q: "Którą zasadę informacji zwrotnej podkreśla dr Pracka?", o: ["podawanie dokładnych wyników liczbowych", "struktura kanapkowa", "przekazywanie tylko informacji pozytywnych", "posługiwanie się terminologią fachową"], a: 1, e: "Bez liczb, bez etykiet, kanapka." },
        { q: "Psycholog może nie przekazać informacji zwrotnej, gdy:", o: ["wyniki są złe", "klient sobie tego nie życzy", "zleceniodawca zapłacił", "badanie trwało krótko"], a: 1, e: "To jedyny wyjątek." },
        { q: "Psycholog wybiera, które wyniki przekazać klientowi. To:", o: ["dopuszczalne", "błąd – przekazuje się wszystko, zmienia się tylko sposób", "zalecane przy dzieciach", "obowiązek"], a: 1, e: "Pytanie brzmi „jak?”, nie „co?”." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "testy",
      title: "Test psychologiczny, kryteria Dauberta, dostęp do testów",
      notes: `
## Test a model EBA
- **EBPP** (Evidence-Based Practice in Psychology, APA) dotyczy też diagnoz i ekspertyz.
- **Test** (Standardy AERA/APA/NCME) – narzędzie lub procedura dająca **próbkę zachowania** w określonych warunkach, ocenianą według **wystandaryzowanych reguł**. **Diagnoza** jest szersza – integruje wiele źródeł.
- Nie każdy zestaw pytań to test – np. **Test Drzewa Kocha** ma rażące braki psychometryczne.

## 7 kryteriów Dauberta (sprawa sądowa w USA, 1993)
- **sprawdzalność teorii** (falsyfikowalność – Popper),
- **rzetelne i trafne narzędzia** (Cronbach i Meehl, 1955 – trafność teoretyczna),
- **recenzja** (peer review),
- **znana wielkość błędu** – podaje się przedział ufności,
- **ustalone standardy stosowania**,
- **akceptacja środowiska naukowego**,
- **odpowiedniość teorii do danego przypadku**.

**Pluralizm metodologiczny** – nie ma jednej uniwersalnej teorii. Uwarunkowania diagnozy: wewnętrzne (teoria psychologiczna, teoria testu, statystyka) i zewnętrzne (kompetencje psychologa, warunki badania, etyka).

## Trzy źródła nieetycznego użycia testu
| Źródło | Kto odpowiada |
|---|---|
| **test** – standardy teoretyczne i psychometryczne | twórca, wydawca (Pracownia Testów PTP), instytucja przyjmująca wyniki |
| **psycholog (test user)** – stosowanie, interpretacja, wykorzystanie wyniku | psycholog |
| **osoba badana (test taker)** – spełnienie warunków, „gotowość psychologiczna” | badany |

**Komisja PAN (2017)**: ani wiarygodny test w rękach niekompetentnego psychologa, ani niewiarygodny test w rękach kompetentnego nie dadzą wiarygodnych wyników.

## Kategorie dostępu do testów (Pracownia Testów PTP)
| Kat. | Kto | Przykłady |
|---|---|---|
| **C** | **tylko psycholodzy** (magister psychologii) | WAIS-R, WISC-R, Test Sortowania Kart z Wisconsin, MMPI-2, NEO-FFI, Rorschach, TAT |
| **B1** | psycholodzy + inni profesjonaliści po ogólnym szkoleniu z psychometrii z egzaminem | KKS, Leksykon |
| **B2** | jak B1 + szkolenie z konkretnego testu | CECS, Test Zainteresowań |
| **A** | psycholodzy + inni profesjonaliści pracujący z ludźmi | LWO, IZZ, Mini-MAC |

## Prawa i obowiązki osoby badanej
- **Prawa**: test spełniający standardy, informacja o teście, wykorzystaniu wyników i poufności, świadoma zgoda, pytania i czas na odpowiedź, możliwość ponownego badania.
- **Obowiązki**: rzetelne odpowiadanie, samodzielna praca, nieujawnianie treści pozycji (oszustwo → unieważnienie wyniku).

## Ochrona testów
**Kodeks PTP, art. 12** – psycholog nie udostępnia technik diagnostycznych osobom nieprzygotowanym. Bezpieczne przechowywanie, prawa autorskie (bez kopiowania), żadnego „przygotowywania” do testów. **Prośba dr Prackiej: nie rozpowszechniać materiałów testowych z zajęć** – grożą konsekwencje prawne.
Nieetyczny jest też brak wiedzy fachowej (psychologicznej, psychometrycznej, statystycznej) i umiejętności praktycznych (np. skale Wechslera wymagają doświadczenia).

> Na pamięć: C = Cała psychologia (tylko psycholodzy) · B = Bez dyplomu psychologa, ale po szkoleniu · A = Absolutnie dostępne dla profesjonalistów.
`,
      flashcards: [
        ["Definicja testu (AERA/APA/NCME)", "Narzędzie lub procedura dająca próbkę zachowania w określonych warunkach, ocenianą według wystandaryzowanych reguł."],
        ["Test a diagnoza", "Diagnoza jest szersza – integruje dane z wielu źródeł (wywiad, historia życia, testy)."],
        ["Skąd nazwa kryteriów Dauberta?", "Od sprawy sądowej w USA (1993) dotyczącej ekspertyz naukowych."],
        ["7 kryteriów Dauberta", "Sprawdzalność teorii, trafne i rzetelne narzędzia, recenzja, znany błąd, standardy stosowania, akceptacja środowiska, odpowiedniość do przypadku."],
        ["3 źródła nieetycznego użycia testu", "Test (twórca, wydawca), psycholog (test user), osoba badana (test taker)."],
        ["Wniosek Komisji PAN (2017)", "Wiarygodny wynik wymaga i wiarygodnego testu, i kompetentnego psychologa."],
        ["Kategoria C testów – kto i przykłady", "Tylko psycholodzy; WAIS-R, WISC-R, MMPI-2, NEO-FFI, Rorschach, TAT."],
        ["Kategoria B1 vs B2", "B1 – po ogólnym szkoleniu z psychometrii z egzaminem; B2 – dodatkowo szkolenie z konkretnego testu."],
        ["Kategoria A testów", "Dla psychologów i innych profesjonalistów pracujących z ludźmi (np. LWO, Mini-MAC)."],
        ["Obowiązki osoby badanej", "Rzetelne odpowiadanie, samodzielna praca, nieujawnianie treści pozycji testowych."],
        ["Kodeks PTP, art. 12", "Psycholog nie udostępnia technik diagnostycznych osobom nieprzygotowanym."],
        ["Czy Test Drzewa Kocha jest testem psychologicznym?", "Nie – ma rażące braki psychometryczne i nie opiera się na teorii empirycznej."]
      ],
      quiz: [
        { q: "Do której kategorii należą WAIS-R i MMPI-2?", o: ["A", "B1", "B2", "C"], a: 3, e: "C – tylko dla psychologów." },
        { q: "Ile jest kryteriów Dauberta?", o: ["3", "5", "7", "10"], a: 2, e: "7 warunków naukowej ekspertyzy." },
        { q: "Które kryterium NIE należy do kryteriów Dauberta?", o: ["sprawdzalność teorii", "znana wielkość błędu", "popularność testu wśród praktyków", "recenzja naukowa"], a: 2, e: "Liczy się akceptacja środowiska naukowego, nie popularność." },
        { q: "Test kategorii B2 wymaga:", o: ["dyplomu psychologa", "szkolenia z psychometrii z egzaminem i szkolenia z konkretnego testu", "tylko pracy z ludźmi", "zgody PTP"], a: 1, e: "B1 + szkolenie z konkretnego narzędzia." },
        { q: "Osoba badana, która ujawnia treść pozycji testowych:", o: ["korzysta ze swojego prawa", "narusza swoje obowiązki", "nie ma żadnych obowiązków", "chroni swoją prywatność"], a: 1, e: "Obowiązki: rzetelność, samodzielność, nieujawnianie treści." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "trafnosc",
      title: "Trafność, rzetelność i błąd standardowy pomiaru (SEM)",
      notes: `
## Teoria psychologiczna – najważniejsza
- **Cronbach i Meehl (1955)** – **trafność teoretyczna** (construct validity): interpretacja wyniku odnosi się do konstruktów teorii.
- Przykład: **BDI** (Beck) ma dobrą trafność teoretyczną dzięki poznawczej teorii depresji; WAIS, WISC i MMPI powstały praktycznie, a teorię dobudowano wtórnie. Bez teorii zbiór pytań jest „pusty” (fotografie Szondiego).

## Teoria testu
- **Klasyczna teoria testów** – model wyniku prawdziwego (**Gulliksen, 1950**); dalej teoria uniwersalizacji i **IRT** (teoria odpowiedzi na pozycje).
- **Rzetelność ≠ trafność** – czas reakcji mierzony bardzo dokładnie nie musi mierzyć inteligencji.
- Według Standardów mówi się o **trafności interpretacji wyniku**, nie o trafności testu jako takiego.

| Rodzaj trafności | Na czym polega |
|---|---|
| treściowa | czy treść pozycji odpowiada konstruktowi |
| diagnostyczna | zgodność z kryterium w tym samym czasie |
| prognostyczna | zgodność z kryterium po czasie |
| **teoretyczna** | związek wyniku z teorią – „najważniejsza właściwość testu” |

- Campbell i Fiske (1959) – macierz wielu cech i wielu metod (trafność zbieżna i różnicowa).
- Messick – trafność to zintegrowany sąd, obejmujący też konsekwencje społeczne.
- **Standard 1.2** – żaden test nie jest trafny do wszystkich celów; nowe zastosowanie wymaga nowej walidacji.

## Wynik prawdziwy i SEM
- **Wynik otrzymany = wynik prawdziwy + błąd** (Xt = X∞ + Xe); wyniku prawdziwego nie da się poznać wprost.
- Założenia Gulliksena: średnia błędów = 0; wynik prawdziwy nie koreluje z błędem; błędy testów równoległych nie korelują.
- **Rzetelność**: rtt = var∞ / vart = 1 − vare / vart.
- **SEM = SDt · √(1 − rtt)** – im wyższa rzetelność, tym mniejszy błąd.
- **Przedział ufności = Xt ± z · SEM**; z: **99% = 2,58 · 95% = 1,96 · 90% = 1,64** · 85% = 1,44 · 68% = 1,00.
- Więcej pewności = **szerszy przedział** = mniejsza precyzja – wybór ma wymiar etyczny.

**Przykład**: WAIS-R, IQ = 69 (górna granica upośledzenia lekkiego wg ICD-10: 50–69), SEM ≈ 7,25 → przedział 90%: **57–81**, przedział 99%: **50–88**. Ta sama osoba może być uznana za osobę z niepełnosprawnością intelektualną albo w normie – a od tego zależą szkoła, praca, renta.

Test bez znanej rzetelności i SEM nie ma wartości diagnostycznej („kryształowa kula”).

> Na pamięć: nigdy „IQ = 69”, zawsze „IQ między 57 a 81 (90%)”. Rzetelny ≠ trafny. Trafna jest interpretacja, nie test.
`,
      flashcards: [
        ["Kto wprowadził pojęcie trafności teoretycznej?", "Cronbach i Meehl (1955)."],
        ["Najważniejsza właściwość testu wg notatki", "Trafność teoretyczna – związek wyniku z teorią psychologiczną."],
        ["Czy rzetelny test jest zawsze trafny?", "Nie – rzetelność to dokładność pomiaru, a trafność to sens interpretacji."],
        ["Trafność diagnostyczna vs prognostyczna", "Diagnostyczna – zgodność z kryterium w tym samym czasie; prognostyczna – po czasie."],
        ["Czego dotyczy trafność wg Standardów?", "Interpretacji wyniku, a nie testu jako takiego."],
        ["Model klasycznej teorii testów", "Wynik otrzymany = wynik prawdziwy + błąd (Gulliksen, 1950)."],
        ["Wzór na SEM", "SEM = SD · √(1 − rtt)."],
        ["Jak liczy się przedział ufności wyniku?", "Wynik ± z · SEM (np. z = 1,64 dla 90%, 1,96 dla 95%, 2,58 dla 99%)."],
        ["Co dzieje się z przedziałem przy wyższym poziomie ufności?", "Poszerza się – więcej pewności, mniej precyzji."],
        ["Dlaczego nie podaje się wyniku punktowego?", "Każdy pomiar jest obciążony błędem – podaje się przedział ufności."],
        ["Standard 1.2", "Żaden test nie jest trafny do wszystkich celów; nowe zastosowanie wymaga nowej walidacji."]
      ],
      quiz: [
        { q: "Wzór na błąd standardowy pomiaru to:", o: ["SEM = SD / √n", "SEM = SD · √(1 − rtt)", "SEM = rtt · SD", "SEM = 1 − rtt"], a: 1, e: "Im wyższa rzetelność, tym mniejszy SEM." },
        { q: "Wartość z dla przedziału ufności 95% wynosi:", o: ["1,00", "1,64", "1,96", "2,58"], a: 2, e: "90% – 1,64; 95% – 1,96; 99% – 2,58." },
        { q: "Gdy zwiększamy poziom ufności z 90% do 99%, przedział:", o: ["zwęża się", "poszerza się", "nie zmienia się", "przesuwa się w górę"], a: 1, e: "Więcej pewności = mniejsza precyzja." },
        { q: "Trafność teoretyczną wprowadzili:", o: ["Campbell i Fiske", "Cronbach i Meehl", "Gulliksen", "Messick"], a: 1, e: "Cronbach i Meehl (1955)." },
        { q: "Zgodność wyniku testu z kryterium mierzonym po czasie to trafność:", o: ["treściowa", "diagnostyczna", "prognostyczna", "teoretyczna"], a: 2, e: "Prognostyczna (predictive)." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "adaptacja",
      title: "Adaptacja kulturowa testów",
      notes: `
Wiele testów trafia do Polski z innych kultur; część jest adaptowana tylko **fasadowo** (przetłumaczona, ale z oryginalnymi normami). Kompendium: **R. Drwal (1995)**.

## Czy test może być wolny od kultury?
- Cattell: 1940 – **culture-free**; od 1971 – **culture-fair / culture-reduced** (np. CFI, labirynty Porteusa, **Test Matryc Ravena**).
- Całkowita neutralność kulturowa to **utopia** (Brzeziński, Kostrzewski, Matczak): dzieci bawiące się Lego mają przewagę w „Klockach” z WISC-R.

## Kiedy pojawia się problem adaptacji?
- dopasowanie treści (WAIS-R: kolory flagi amerykańskiej → polskiej),
- samo tłumaczenie = **pseudoadaptacja** – największe zastrzeżenia etyczne,
- interpretacja wyników,
- porównania międzykulturowe (także ta sama kultura w innym czasie – stare normy).

Nadużycia w Polsce: skala Wechslera z 1939 r. z normami amerykańskimi przez dziesiątki lat; WISKAD-MMPI (Płużek, 1971) z normami z USA.

## Emic i etic (Pike, 1967)
- **Emic** – to, co **specyficzne** dla danej kultury.
- **Etic** – to, co **wspólne** dla kultur.
- Test do lokalnej praktyki → więcej pozycji emicznych (ale nie nadaje się do badań międzykulturowych). Drwal: optymalny test ma zadania emiczne dla kultury A, emiczne dla B i etyczne dla obu.

## Tłumaczenie wsteczne (back translation)
- tłumaczenie z języka A na B (najlepiej kilku niezależnych tłumaczy),
- inny tłumacz przekłada wersję B z powrotem na A,
- jeśli wersje są zbliżone → analizy psychometryczne i sprawdzanie równoważności (np. na osobach dwujęzycznych).

Drwal ostrzega przed „bałwochwalczym” podejściem do retranslacji – liczy się też jakość sformułowań.

**5 kryteriów równoważności (Drwal)**: fasadowa (forma, instrukcja) · psychometryczna (średnie, wariancje, rzetelność, struktura) · funkcjonalna (mierzy to samo) · wierność tłumaczenia · wierność rekonstrukcji (normy).

Źle przeprowadzona adaptacja = **stronniczość testu** (Hornowska) → błędna diagnoza → postępowanie nieetyczne.

> Na pamięć: eMic = Miejscowe · eTic = Tożsame wszędzie. Przetłumaczyć ≠ zaadaptować.
`,
      flashcards: [
        ["Czy istnieje test całkowicie wolny od kultury?", "Nie – to utopia; testy culture-reduced (np. Raven) i tak faworyzują osoby z kultury autora."],
        ["Pseudoadaptacja", "Samo przetłumaczenie testu bez adaptacji i z obcymi normami – największe zastrzeżenia etyczne."],
        ["Emic vs etic", "Emic – specyficzne dla danej kultury; etic – wspólne dla kultur (Pike, 1967)."],
        ["Etapy tłumaczenia wstecznego", "A → B, potem inny tłumacz B → A, porównanie, analizy psychometryczne i równoważność."],
        ["5 kryteriów równoważności (Drwal)", "Fasadowa, psychometryczna, funkcjonalna, wierność tłumaczenia, wierność rekonstrukcji."],
        ["Skutek złej adaptacji testu", "Stronniczość testu → błędna diagnoza → postępowanie nieetyczne."],
        ["Przykład nadużycia w adaptacji w Polsce", "Skala Wechslera z 1939 r. z normami amerykańskimi; WISKAD-MMPI z normami z USA."]
      ],
      quiz: [
        { q: "Elementy specyficzne dla danej kultury to:", o: ["etic", "emic", "culture-free", "back translation"], a: 1, e: "Emic – miejscowe; etic – wspólne." },
        { q: "Samo przetłumaczenie testu z zachowaniem obcych norm to:", o: ["adaptacja pełna", "pseudoadaptacja", "tłumaczenie wsteczne", "standaryzacja"], a: 1, e: "Największe zastrzeżenia etyczne." },
        { q: "Który test jest przykładem testu culture-reduced?", o: ["MMPI-2", "Test Matryc Ravena", "WISKAD", "TAT"], a: 1, e: "Ale i on nie jest w pełni neutralny kulturowo." },
        { q: "W tłumaczeniu wstecznym:", o: ["jeden tłumacz tłumaczy dwa razy", "inny tłumacz przekłada wersję B z powrotem na A", "test tłumaczy się automatycznie", "pomija się analizy psychometryczne"], a: 1, e: "A → B → A, potem sprawdzanie równoważności." }
      ]
    }
  ]
});
