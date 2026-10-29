// Psychologia osobowości. Opracowane na podstawie plików z Dysku:
// psychologia-osobowości-egzamin.pdf, Psychologia osobowości - wykłady.pdf,
// to coś na kolosa osobowość.pdf, Jung_Adler_Sullivan_Erikson_notatka.pdf
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "osobowosc",
  name: "Psychologia osobowości",
  short: "Osobowość",
  icon: "🧠",
  color: "#d6336c",
  // formaty egzaminów orientacyjne – zmień, gdy poznasz zasady
  exam: { questions: 30, minutes: 30, pass: 16, note: "Format orientacyjny (30 pytań, 30 minut, próg 16) – nie znam dokładnych zasad egzaminu." },
  openExam: { questions: 3, minutes: 45, note: "Pytania z listy zagadnień egzaminacyjnych (psychologia-osobowości-egzamin.pdf). Liczba pytań i czas są orientacyjne." },
  sources: [
    "psychologia-osobowości-egzamin.pdf (79 pytań egzaminacyjnych)",
    "Psychologia osobowości – wykłady.pdf",
    "to coś na kolosa osobowość.pdf",
    "Jung_Adler_Sullivan_Erikson_notatka.pdf"
  ],
  topics: [
    // ------------------------------------------------------------------
    {
      id: "metody",
      title: "Przedmiot i metody badań",
      notes: `
## Czym zajmuje się psychologia osobowości?
Bada, co sprawia, że różne procesy psychiczne, dyspozycje i funkcje tworzą w człowieku **specyficzną całość**, a ich aktywność jest **spójna i zintegrowana**.

| Nurt | Czym jest osobowość |
|---|---|
| Psychoanaliza | złożona, dynamiczna struktura świadomych i nieświadomych procesów |
| Behawioryzm | zespół nawyków |
| Teorie cech | zespół cech |
| Psychologia humanistyczna | całość doświadczania siebie |

## Dwa podejścia
- **Dedukcyjne** – od ogólnej teorii (struktury, zasady funkcjonowania) do hipotez, które się sprawdza.
- **Indukcyjne** – od opisu faktów i danych empirycznych do uogólnień w postaci modeli osobowości (strukturalnych, funkcjonalnych).

## Trzy metody badania osobowości (Pervin)
| Metoda | Na czym polega | Zalety | Wady |
|---|---|---|---|
| **Kliniczna** | systematyczne, dogłębne badanie pojedynczych osób (obserwacja, wywiad); interpretacja zachowania przez teorię; typowa dla psychoanalizy | całościowy obraz człowieka, nowe obserwacje i hipotezy, ukryty sens zachowań, dostęp do nieświadomości i wczesnych doświadczeń | brak empirycznej weryfikacji, subiektywna interpretacja, nie da się badać dużych prób |
| **Korelacyjna** | kwestionariusze na dużych próbach + statystyka; porządkowanie cech i szukanie zależności; typowa dla teorii cech | wiele osób i zmiennych naraz, wykrywa powiązania między cechami | opiera się na samoopisie, sztywne pytania, pokazuje współwystępowanie, a nie przyczyny |
| **Eksperymentalna** | manipulacja zmiennymi, paradygmat przyczynowo-skutkowy; teorie poznawcze i społecznego uczenia się | ustala związki przyczynowe, obiektywna rejestracja danych, „najbardziej naukowa” | sztuczna sytuacja laboratoryjna, nie wszystkie zjawiska da się badać w laboratorium |

## Cele psychologii osobowości
- integracja wiedzy o człowieku z różnych podejść
- statyczne i dynamiczne modele osobowości, które pozwalają przewidywać funkcjonowanie
- programy psychoedukacyjne, profilaktyczne i wspierające rozwój
- podstawy dla terapii
- rozwijanie metod badawczych

> Na pamięć: kliniczna = głęboko, ale jedna osoba · korelacyjna = szeroko, ale bez przyczyn · eksperymentalna = przyczyny, ale sztucznie.
`,
      flashcards: [
        ["Co jest przedmiotem badań psychologii osobowości?", "To, co sprawia, że procesy psychiczne, dyspozycje i funkcje tworzą w człowieku specyficzną, spójną i zintegrowaną całość."],
        ["Czym jest osobowość dla behawioryzmu, a czym dla teorii cech?", "Behawioryzm: zespół nawyków. Teorie cech: zespół cech."],
        ["Czym jest osobowość w psychologii humanistycznej?", "Całością doświadczania siebie."],
        ["Podejście dedukcyjne vs indukcyjne", "Dedukcyjne: od ogólnej teorii do hipotez i ich sprawdzania. Indukcyjne: od faktów i danych empirycznych do uogólnień w modelach osobowości."],
        ["Na czym polega metoda kliniczna?", "Systematyczne, dogłębne badanie pojedynczych osób (obserwacja, wywiad), interpretacja zachowania przez teorię. Nastawiona na diagnozę i terapię, typowa dla psychoanalizy."],
        ["Na czym polega metoda korelacyjna?", "Badanie dużych prób kwestionariuszami i szukanie statystycznych zależności między cechami. Typowa dla teorii cech."],
        ["Na czym polega metoda eksperymentalna?", "Manipulacja zmiennymi w celu ustalenia związków przyczynowo-skutkowych. Bazuje na teorii poznawczej i społecznego uczenia się."],
        ["Główna wada metody korelacyjnej", "Wykrywa współwystępowanie, a nie przyczyny; opiera się na samoopisie."],
        ["Główna wada metody eksperymentalnej", "Sztuczna sytuacja laboratoryjna; nie wszystkie zjawiska da się w niej badać."],
        ["Główna wada metody klinicznej", "Nie pozwala empirycznie sprawdzić trafności spostrzeżeń; subiektywna interpretacja; małe próby."],
        ["Wymień cele psychologii osobowości", "Integracja wiedzy, modele osobowości umożliwiające przewidywanie, programy psychoedukacyjne i profilaktyczne, podstawy terapii, rozwój metod badawczych."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Osobowość wg behawioryzmu", "zespół nawyków"],
        ["Osobowość wg teorii cech", "zespół cech"],
        ["Osobowość wg humanistów", "całość doświadczania siebie"],
        ["Podejście dedukcyjne", "od teorii do hipotez"],
        ["Podejście indukcyjne", "od faktów do uogólnień"],
        ["Metoda kliniczna", "dogłębne badanie pojedynczych osób"],
        ["Metoda korelacyjna", "duże próby, kwestionariusze, związki cech"],
        ["Metoda eksperymentalna", "manipulacja zmiennymi, przyczynowość"],
        ["Wada metody korelacyjnej", "współwystępowanie, nie przyczyny"],
        ["Wada metody eksperymentalnej", "sztuczna sytuacja laboratoryjna"],
        ["Wada metody klinicznej", "subiektywna interpretacja, małe próby"]
      ],
      quiz: [
        { q: "Która metoda pozwala ustalić związki przyczynowo-skutkowe?", o: ["Kliniczna", "Korelacyjna", "Eksperymentalna", "Introspekcyjna"], a: 2, e: "Tylko eksperyment manipuluje zmiennymi, więc może wskazać przyczynę." },
        { q: "Metoda korelacyjna jest typowa dla:", o: ["psychoanalizy", "teorii cech", "psychologii humanistycznej", "teorii relacji z obiektem"], a: 1, e: "Teorie cech opierają się na kwestionariuszach i analizie statystycznej dużych prób." },
        { q: "Podejście indukcyjne polega na:", o: ["sprawdzaniu hipotez wyprowadzonych z teorii", "gromadzeniu danych i uogólnianiu ich w modele", "interpretowaniu snów", "manipulowaniu zmiennymi"], a: 1, e: "Indukcja: od faktów do uogólnień." },
        { q: "Dla behawioryzmu osobowość to:", o: ["zespół cech", "zespół nawyków", "całość doświadczania siebie", "układ id, ego i superego"], a: 1, e: "Behawioryzm sprowadza osobowość do wyuczonych nawyków." },
        { q: "Która wada dotyczy metody klinicznej?", o: ["sztuczne warunki laboratorium", "subiektywna interpretacja i małe próby", "ograniczenie do samoopisu w kwestionariuszach", "brak kontaktu z badanym"], a: 1, e: "Kliniczna bada jednostki i opiera się na interpretacji badacza." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "freud",
      title: "Psychoanaliza klasyczna (Freud)",
      notes: `
## Model topograficzny
**Świadomość** (to, co teraz sobie uświadamiamy) → **przedświadomość** (to, co łatwo przywołać) → **nieświadomość** (treści niedostępne, wyparte, a mimo to wpływające na zachowanie). Największa część psychiki jest nieświadoma (góra lodowa).

## Model strukturalny
| | Id | Ego | Superego |
|---|---|---|---|
| Czym jest | wrodzony system pierwotny, zbiór popędów, dziedziczone wyposażenie | organ wykonawczy id, w większości świadome | instancja moralna i krytyczna, rozwija się jako ostatnia |
| Zasada | przyjemności | rzeczywistości | doskonałości |
| Działanie | proces pierwotny, brak wiedzy obiektywnej, świat subiektywnych doznań | proces wtórny: odróżnia umysł od rzeczywistości, szuka realnego obiektu zaspokojenia, energię czerpie z id | obserwuje, ocenia, cenzuruje; karze poczuciem winy i wstydu; hamuje impulsy id; naciska na ego, by cele realne zastąpiło moralnymi |

## Teoria popędów
**Popęd** – siła kierująca działaniem organizmu ku celowi. Ma 4 elementy:
- **źródło** – stan braku (potrzeba)
- **cel** – usunięcie nieprzyjemnego napięcia
- **przedmiot** – obiekt zaspokajający popęd (wraz z aktywnością prowadzącą do niego)
- **siła** – natężenie potrzeby

| Popędy życia (eros) | Popęd śmierci (tanatos) |
|---|---|
| energia: **libido** | energia: **destrudo** |
| tworzenie i zachowanie całości, przetrwanie: głód, pragnienie, seks, samozachowanie | niszczenie, wyrównanie napięć, powrót do stanu nieorganicznego |
| | do wewnątrz → samozniszczenie; na zewnątrz → agresja |

## Dynamika osobowości i lęk
- Konflikty: **popęd życia vs śmierci** oraz **id vs superego** → powstaje **lęk**, który odczuwa ego.
- **Kateksja** – zainwestowanie energii popędu w działanie lub wyobrażenie, które go zaspokoi.
- Rodzaje lęku: **realistyczny** (realne zagrożenie), **neurotyczny** (że popędy wymkną się spod kontroli i przyjdzie kara), **moralny** (przed własnym sumieniem).
- Ego broni się przed lękiem **mechanizmami obronnymi**.

## Mechanizmy obronne
- **Wyparcie** – zepchnięcie do nieświadomości treści związanych z nieakceptowanym popędem (wraca w snach, pomyłkach).
- **Reakcja upozorowana** – zastąpienie impulsu jego przeciwieństwem (pociąg → wstręt, nienawiść → przesadna miłość).
- **Projekcja** – przypisanie własnych nieakceptowanych pragnień i cech komuś na zewnątrz.
- **Introjekcja** – odwrotność projekcji: wchłonięcie cech obiektu zewnętrznego do Ja.
- **Identyfikacja** – przejęcie cech obiektu i częściowe upodobnienie się do niego.
- **Internalizacja** – uwewnętrznienie zasad, nakazów i zakazów jako własnych.
- **Sublimacja** – przekierowanie energii popędu na cel akceptowany społecznie.
- **Regresja** – cofnięcie się do wcześniejszej fazy rozwoju (5-latek ssie kciuk ze strachu).
- **Fiksacja** – zatrzymanie się w rozwoju na danej fazie.

## Inne założenia
- **Determinizm psychiczny** – wszystko, co robimy, czujemy, myślimy i śnimy, jest motywowane przez nieuświadomione siły wewnętrzne.
- **Osobowość jako system ekonomiczny** – ograniczona ilość energii jest rozdzielana między zadania; nieświadomie „liczymy” koszty i zyski jej inwestowania.

## Fazy rozwoju psychoseksualnego
| Faza | Wiek | Strefa / temat |
|---|---|---|
| Oralna | 1. r.ż. | usta, ssanie, karmienie |
| Analna | 2–3 r.ż. | wydalanie, kontrola zwieraczy |
| Falliczna | 4–6 r.ż. | narządy płciowe, kompleks Edypa |
| Latencji | 7–13 r.ż. | wyciszenie popędu |
| Genitalna | od dojrzewania | dojrzała seksualność |

## Psychoanaliza jako metoda
Metoda kliniczna; analiza **wzorców** zachowania (nie pojedynczych epizodów), interpretacja **czynności pomyłkowych**, **przeżyć z dzieciństwa** i **marzeń sennych**.

> Na pamięć: Id chce („przyjemność”), superego zakazuje („doskonałość”), ego negocjuje („rzeczywistość”).
`,
      flashcards: [
        ["Model topograficzny Freuda", "Świadomość → przedświadomość → nieświadomość."],
        ["Id – zasada działania i charakterystyka", "Zasada przyjemności. Wrodzony system pierwotny, zbiór popędów, brak wiedzy obiektywnej, proces pierwotny."],
        ["Ego – zasada działania i charakterystyka", "Zasada rzeczywistości. Organ wykonawczy id, w większości świadome, proces wtórny, odróżnia umysł od rzeczywistości."],
        ["Superego – zasada działania i charakterystyka", "Zasada doskonałości. Instancja moralna i krytyczna, rozwija się ostatnia, karze poczuciem winy i wstydu, hamuje impulsy id."],
        ["4 elementy popędu", "Źródło (brak), cel (usunięcie napięcia), przedmiot (obiekt zaspokojenia), siła (natężenie)."],
        ["Libido vs destrudo", "Libido – energia popędów życia (tworzenie, przetrwanie). Destrudo – energia popędu śmierci (niszczenie, agresja)."],
        ["Jakie konflikty wewnętrzne wyróżnia Freud?", "Popęd życia vs popęd śmierci oraz id vs superego. Konflikt rodzi lęk."],
        ["3 rodzaje lęku wg Freuda", "Realistyczny (realne zagrożenie), neurotyczny (utrata kontroli nad popędami, kara), moralny (przed sumieniem)."],
        ["Czym jest kateksja?", "Zainwestowanie energii popędu w działanie lub wyobrażenie, które go zaspokoi."],
        ["Wyparcie", "Zepchnięcie do nieświadomości treści związanych z nieakceptowanym popędem."],
        ["Reakcja upozorowana", "Zastąpienie impulsu wzbudzającego lęk jego przeciwieństwem (np. pociąg → wstręt)."],
        ["Projekcja", "Przypisanie własnych nieakceptowanych pragnień, myśli lub cech obiektowi zewnętrznemu."],
        ["Introjekcja", "Wchłonięcie cech obiektu zewnętrznego do Ja (odwrotność projekcji)."],
        ["Sublimacja", "Przekierowanie energii popędu z zakazanego obiektu na cel akceptowany społecznie."],
        ["Regresja vs fiksacja", "Regresja – cofnięcie się do wcześniejszej fazy. Fiksacja – zatrzymanie się w rozwoju na danej fazie."],
        ["Determinizm psychiczny", "Wszystko, co robimy, czujemy, myślimy i śnimy, jest motywowane przez nieuświadomione siły wewnętrzne."],
        ["Dlaczego osobowość jest systemem ekonomicznym?", "Bo rozdziela ograniczoną energię między zadania, nieświadomie analizując koszty i korzyści jej inwestowania."],
        ["Fazy rozwoju psychoseksualnego (z wiekiem)", "Oralna (1 r.ż.), analna (2–3), falliczna (4–6), latencji (7–13), genitalna (od dojrzewania)."],
        ["Co analizuje psychoanaliza jako metoda?", "Wzorce zachowania, czynności pomyłkowe, przeżycia z dzieciństwa, marzenia senne."]
      ],
      quiz: [
        { q: "Ego kieruje się zasadą:", o: ["przyjemności", "rzeczywistości", "doskonałości", "entropii"], a: 1, e: "Id – przyjemności, ego – rzeczywistości, superego – doskonałości." },
        { q: "Który lęk to obawa przed własnym sumieniem?", o: ["realistyczny", "neurotyczny", "moralny", "egzystencjalny"], a: 2, e: "Lęk moralny wiąże się z superego." },
        { q: "Mężczyzna, który nie akceptuje własnej agresji, uważa innych za wrogich. To:", o: ["introjekcja", "projekcja", "sublimacja", "regresja"], a: 1, e: "Projekcja – umieszczenie własnych nieakceptowanych treści na zewnątrz." },
        { q: "Kompleks Edypa pojawia się w fazie:", o: ["oralnej", "analnej", "fallicznej", "genitalnej"], a: 2, e: "Faza falliczna, 4–6 r.ż." },
        { q: "Energia popędu śmierci to:", o: ["libido", "destrudo", "kateksja", "eros"], a: 1, e: "Libido to energia popędów życia, destrudo – popędu śmierci." },
        { q: "Przeniesienie energii popędu na działalność artystyczną to:", o: ["sublimacja", "fiksacja", "reakcja upozorowana", "wyparcie"], a: 0, e: "Sublimacja – cel akceptowany społecznie." },
        { q: "Która instancja rozwija się jako ostatnia?", o: ["id", "ego", "superego", "wszystkie jednocześnie"], a: 2, e: "Superego powstaje najpóźniej, przez internalizację norm rodziców i społeczeństwa." },
        { q: "Faza latencji przypada na wiek:", o: ["2–3 lata", "4–6 lat", "7–13 lat", "od dojrzewania"], a: 2, e: "Latencja – okres wyciszenia popędu, ok. 7–13 r.ż." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "neopsychoanaliza",
      title: "Neopsychoanaliza: Jung, Adler, Sullivan, Erikson, Horney, Murray",
      notes: `
Wszyscy wyszli od Freuda, ale przesunęli akcent z popędu seksualnego na sens, relacje i społeczeństwo.

| Autor | Teoria | Słowo-klucz |
|---|---|---|
| Jung | psychologia analityczna | indywiduacja |
| Adler | psychologia indywidualna | kompensacja |
| Sullivan | interpersonalna teoria psychiatrii | relacje, lęk |
| Erikson | psychospołeczna teoria rozwoju | kryzys, tożsamość |
| Horney | teoria lęku podstawowego | 3 postawy wobec ludzi |
| Murray | personologia | potrzeby i presje |

## Carl Gustav Jung – psychologia analityczna
- **Ego** – świadomość: myśli, uczucia, wspomnienia, poczucie „ja”.
- **Nieświadomość osobista** – treści wyparte lub zapomniane; tworzą **kompleksy** (naładowane emocjami skupiska treści).
- **Nieświadomość zbiorowa** – wspólna dla ludzkości, dziedziczona; zawiera **archetypy** (wrodzone wzorce przeżywania).
- Archetypy: **persona** (maska społeczna), **cień** (nieakceptowane, „zwierzęce” impulsy), **anima/animus** (kobieca część mężczyzny / męska część kobiety), Wielka Matka, Stary Mędrzec, Bohater, **Jaźń** (archetyp całości, symbol: mandala).
- **Libido** = ogólna energia psychiczna (nie tylko seksualna).
- Zasady: **ekwiwalencji** (energia nie znika, zmienia formę), **entropii** (energia wyrównuje się między przeciwieństwami), **polaryzacji** (każda cecha ma dwa bieguny).
- **Typy psychologiczne**: 2 postawy (ekstrawersja / introwersja) × 4 funkcje (myślenie ↔ uczucie; percepcja/doznanie ↔ intuicja) = 8 typów.
- **Indywiduacja** – stawanie się całością przez integrację przeciwieństw; nasila się po półmetku życia (ok. 40 r.ż.).
- Przyczynowość (przeszłość) + **teleologia** (cel w przyszłości).
- Funkcje **racjonalne** (oceniające): myślenie, uczucie; **irracjonalne** (odbierające): percepcja/doznanie, intuicja.

### Jung w schemacie: struktura – działanie – rozwój
- **Struktura (psyche)** – kilka powiązanych poziomów:
  - **świadome Ja (ego)** – centrum świadomości, percepcji, myśli i tożsamości,
  - **nieświadomość indywidualna** – wyparte, zapomniane lub stłumione doświadczenia, zorganizowane w **kompleksy** (grupy emocjonalnie powiązanych myśli i wspomnień wokół jednego motywu),
  - **nieświadomość zbiorowa** – uniwersalna, ewolucyjna warstwa wspólna całemu gatunkowi, złożona z **archetypów** (wrodzonych wzorców reagowania i przeżywania): **persona** (maska społeczna), **cień** (nieakceptowane, prymitywne, instynktowne aspekty „ja”), **anima/animus** (pierwiastek kobiecy u mężczyzny / męski u kobiety), **Jaźń** (centralny archetyp porządku, pełni i jedności psychiki).
- **Działanie**: układ dynamiczny napędzany **energią psychiczną (libido)**; zasada **równoważności** (energia wycofana z jednego obszaru, np. świadomości, przenosi się do innego, np. do cienia) i **entropii** (dążenie do równowagi napięć); dynamikę wyznaczają też postawy i funkcje.
- **Rozwój**: **teleologiczny** – kształtują nas nie tylko przeszłość, ale przede wszystkim dążenia; centralny proces to **indywiduacja** (integracja świadomości z nieświadomością, cienia, animy/animusa → samourzeczywistnienie wokół Jaźni).
- **Etapy życia**: **dzieciństwo** – dominacja instynktów, brak ukształtowanego ego · **młodość i wczesna dorosłość** – umacnianie ego, ekspansja na zewnątrz, przystosowanie społeczne (rozwój **persony**) · **wiek średni** (punkt zwrotny ok. **35–40 r.ż.**) – zwrot ku wnętrzu, kryzys dotychczasowych wartości, intensywna indywiduacja i szukanie sensu.

## Alfred Adler – psychologia indywidualna
- Człowiek to niepodzielna całość, działa **celowo** i jest istotą społeczną.
- **Poczucie niższości** (naturalne u dziecka, np. niższość organu) → **kompensacja** → **dążenie do wyższości** (doskonałości).
- Zaburzenia: **kompleks niższości** (poddanie się) lub **kompleks wyższości** (przechwałki maskujące niższość).
- **Fikcyjny finalizm** – kierują nami wyobrażone cele.
- **Styl życia** – unikalny sposób dążenia do celu, kształtuje się do ok. 4–5 r.ż.
- **Twórcza jaźń** – sami aktywnie tworzymy swoją osobowość.
- **Zainteresowanie społeczne** – wrodzona zdolność do troski i współpracy; **miara zdrowia psychicznego**.
- 3 zadania życiowe: praca, przyjaźń/wspólnota, miłość.
- **Kolejność urodzeń**: pierworodne („zdetronizowane”, odpowiedzialne), średnie (ambitne, rywalizujące), najmłodsze (rozpieszczane), jedynak (centrum uwagi).

### Adler w schemacie: struktura – działanie – rozwój
- **Struktura**: brak podziału na walczące struktury – człowiek to **niepodzielna całość**. Komponenty: **styl życia** (spójny wzorzec zachowań, przekonań, nawyków i celów z wczesnego dzieciństwa), **poczucie wspólnoty** (zainteresowanie społeczne – wrodzony potencjał empatii, współpracy, troski), **twórcze Ja** (creative self – aktywny czynnik przetwarzający wrodzone predyspozycje i doświadczenia w unikalny plan działania).
- **Działanie**: **celowościowe (teleologiczne)** – motywują nas nie popędy z przeszłości, lecz subiektywne cele na przyszłość (**fikcyjna celowość**).
  - **Poczucie niższości** – naturalny, uniwersalny stan wyjściowy (bezradność dziecka), główna siła napędowa.
  - **Dążenie do wyższości / przezwyciężania** – kompensacja braków, mistrzostwo, kompetencja, doskonałość.
  - **Kompensacja i nadkompensacja** – równoważenie słabości. Dążenie połączone z poczuciem wspólnoty → **zdrowie**; samolubne → **kompleks niższości lub wyższości (nerwica)**.
- **Rozwój**: w kontekście społecznym i wczesnodziecięcym; **styl życia** formuje się do ok. **4–5 r.ż.** (pozycja w rodzinie, uwarunkowania fizyczne, atmosfera wychowawcza).
  - **Konstelacja rodzinna**: **pierworodny** – „detronizacja”, silna potrzeba kontroli i władzy · **drugi/średni** – ciągła rywalizacja, nastawienie na wyścig i szybki rozwój · **najmłodszy** – ryzyko rozpieszczenia, brak samodzielności albo silna potrzeba przewyższenia wszystkich · **jedynak** – duże poczucie własnej wartości, trudność we współdzieleniu uwagi.
  - Rozwój przez **3 zadania życiowe**: **praca, przyjaźń (relacje społeczne), miłość**.

## Harry Stack Sullivan – teoria interpersonalna
- Osobowość to byt hipotetyczny; istnieje tylko w **relacjach interpersonalnych**.
- Dwa dążenia: do **satysfakcji** (potrzeby) i do **bezpieczeństwa** (unikanie lęku).
- **Lęk** powstaje w relacjach; matka przekazuje go dziecku przez empatię.
- **Dynamizmy** – trwałe wzorce przekształcania energii (np. wrogość, intymność). Najważniejszy: **system Ja** – ochrona przed lękiem.
- **Personifikacje** – wyobrażenia o sobie (dobre ja, złe ja, nie-ja) i innych; wspólne personifikacje = stereotypy.
- Tryby doświadczania: **prototaksyczny** (surowy strumień doznań, niemowlę), **parataksyczny** (łączenie zdarzeń bez logiki, np. przesądy), **syntaksyczny** (symboliczny, logiczny, językowy).
- Preadolescencja: **„chum”** – bliski przyjaciel tej samej płci, pierwsza intymność.

### Sullivan w schemacie: struktura – działanie – rozwój
- **Struktura**: osobowość = **względnie trwały układ powtarzających się sytuacji interpersonalnych** – nie istnieje w próżni, tylko w relacjach.
  - **Dynamizmy** – najmniejsze jednostki zachowania; powtarzające się wzorce przekształcania energii (np. wrogości, pożądania).
  - **Personifikacje** – obrazy siebie i innych z wcześniejszych relacji (np. „dobra matka”, „zła matka”).
  - **System Ja** (self-system) – chroni przed lękiem i zabezpiecza poczucie bezpieczeństwa; dzieli doświadczenia na: **dobre Ja** (zachowania nagradzane i akceptowane przez znaczących innych), **złe Ja** (wywołujące dezaprobatę i umiarkowany lęk), **nie-Ja** (wyparte, traumatyczne aspekty wywołujące paraliżujący lęk).
- **Działanie**: system **przetwarzania napięć** w relacjach.
  - **Potrzeby** = napięcia somatyczne (fizjologiczne braki dążące do zaspokojenia).
  - **Lęk** = napięcie interpersonalne z dezaprobaty ważnych osób, przenoszony **empatycznie od opiekuna**.
  - **Operacje zabezpieczające** – mechanizmy obronne systemu Ja (np. **wybiórcza nieuwaga, dysocjacja**) redukujące lęk i chroniące stabilną personifikację siebie.
  - **Tryby doświadczania**: prototaksyczny (chaotyczny, zmysłowy – niemowlęctwo) · parataksyczny (związki przyczynowe tam, gdzie ich nie ma; zniekształcone rzutowanie przeszłości na obecne relacje) · syntaksyczny (logiczny, symboliczny, oparty na wspólnie uzgodnionym znaczeniu słów).
- **Rozwój**: sekwencyjny, zależy od rodzaju relacji na danym etapie – **epoki rozwojowe**:
  - **Niemowlęctwo** – kontakt z matką przez karmienie; pierwsze personifikacje pod wpływem lęku opiekuna.
  - **Dzieciństwo** – nauka mowy (przejście do trybu syntaksycznego), trening czystości, krystalizacja systemu Ja.
  - **Wiek młodzieńczy (szkolny)** – grupa rówieśnicza, autorytety poza rodziną (nauczyciele), socjalizacja i rywalizacja.
  - **Wczesna adolescencja (wiek przedmłodzieńczy)** – potrzeba bliskiego przyjaciela tej samej płci (**chumship**) – uczy szczerej empatii i bezinteresownej troski.
  - **Właściwa adolescencja** – popęd seksualny, szukanie intymności z partnerem, oddzielenie potrzeby bliskości od pożądania.
  - **Późna adolescencja i dojrzałość** – pełne wejście w role dorosłe, trwały repertuar dojrzałych relacji syntaksycznych bez zniekształceń parataksycznych.
  - W części źródeł 7 epok (osobno późna adolescencja i dojrzałość) – w materiałach z zajęć: 6.

## Erik Erikson – psychospołeczna teoria rozwoju
Rozwój trwa **całe życie**, zależy od społeczeństwa i kultury; ego jest silne i twórcze. Każde stadium ma **kryzys** (punkt zwrotny, nie katastrofę); dobre rozwiązanie daje **cnotę**.

| # | Wiek | Kryzys | Cnota |
|---|---|---|---|
| 1 | 0–1 | ufność vs nieufność | nadzieja |
| 2 | 1–3 | autonomia vs wstyd i zwątpienie | wola |
| 3 | 3–6 | inicjatywa vs poczucie winy | cel |
| 4 | 6–12 | pracowitość vs poczucie niższości | kompetencja |
| 5 | dorastanie | tożsamość vs pomieszanie ról | wierność |
| 6 | wczesna dorosłość | intymność vs izolacja | miłość |
| 7 | wiek średni | generatywność vs stagnacja | troska |
| 8 | starość | integralność vs rozpacz | mądrość |

Inne nazwy kryzysów spotykane w materiałach: **zaufanie vs podstawowa nieufność**, autonomia vs wstyd i **niepewność**, inicjatywa vs poczucie winy (**wiek zabaw**, cnota: **zdecydowanie / celowość**), **przedsiębiorczość** vs poczucie niższości (wiek szkolny), tożsamość vs **pomieszanie tożsamości**, **bliskość** vs izolacja, **integralność ego** vs rozpacz.

### Erikson w schemacie: struktura – działanie – rozwój
- **Struktura**: model psychoanalityczny, ale w centrum **ego** – w przeciwieństwie do Freuda **autonomiczne, racjonalne i adaptacyjne**, a nie tylko bierny mediator między id a superego.
  - **Ego cielesne** – świadomość własnego ciała, jego ograniczeń i możliwości.
  - **Ideał ego** – obraz siebie w porównaniu z normami i ideałami społecznymi.
  - **Tożsamość ego** – zintegrowany obraz siebie, poczucie ciągłości „ja” w czasie i przestrzeni oraz spójność z tym, jak postrzegają nas inni.
- **Działanie**: osobowość to **system psychospołeczny** dążący do adaptacji i integracji z otoczeniem kulturowym. Ego nieustannie balansuje między **wewnętrznymi potrzebami biologicznymi** a **wymaganiami norm społecznych**. Jego kluczowa funkcja to **ochrona poczucia tożsamości** i **konstruktywne rozwiązywanie kryzysów życiowych** za pomocą **adaptacyjnych mechanizmów obronnych** i **świadomych wyborów**.
- **Rozwój**: **zasada epigenetyczna** – kolejne etapy wynikają z poprzednich, a każdy ma swój optymalny czas ujawnienia; trwa całe życie, 8 stadiów psychospołecznych, każde z kryzysem między dwiema tendencjami; pozytywne rozwiązanie daje **cnotę (siłę ego)**.

**Statusy tożsamości (Marcia)**: osiągnięta (było poszukiwanie + jest zaangażowanie), moratorium (poszukiwanie trwa), przejęta (zaangażowanie bez poszukiwania), rozproszona (ani jedno, ani drugie).

## Karen Horney
- **Lęk podstawowy** – poczucie izolacji i bezradności dziecka we wrogim świecie; nasila go brak ciepła rodziców.
- Trzy postawy (orientacje): **ku ludziom** (potrzeba miłości i akceptacji), **przeciw ludziom** (agresja, dominacja), **od ludzi** (wycofanie, niezależność).
- Neurotyk sztywno trzyma się jednej postawy; zdrowa osoba elastycznie korzysta ze wszystkich.
- Utrata kontaktu z „prawdziwym ja” → tworzenie wyidealizowanego **„ja idealnego”**.

### Horney w schemacie: struktura – działanie – rozwój
- **Struktura**: w centrum **Ja**, w trzech postaciach:
  - **Ja prawdziwe** (real self) – wewnętrzne źródło rozwoju, potencjał zdrowego wzrostu,
  - **Ja rzeczywiste** (actual self) – to, kim osoba jest tu i teraz,
  - **Ja wyidealizowane** (idealized self) – nierealny, wspaniały obraz siebie tworzony przez neurotyka dla ochrony przed lękiem.
  - Kluczowe pojęcia: **lęk podstawowy** i **wrogość podstawowa**.
- **Działanie**: osobowość organizuje się wokół **radzenia sobie z lękiem podstawowym**.
  - **3 orientacje**: **ku ludziom** (uległość, potrzeba miłości), **przeciw ludziom** (agresja, potrzeba władzy), **od ludzi** (wycofanie, niezależność). Zdrowa osoba używa ich elastycznie, neurotyk – sztywno jednej.
  - **Potrzeby neurotyczne** (Horney opisała 10, m.in. potrzeba miłości i aprobaty, partnera, władzy, prestiżu, podziwu, niezależności, doskonałości) – nienasycone i nierealistyczne strategie obrony.
  - **Tyrania powinności** – wewnętrzne „muszę”, by dorównać Ja wyidealizowanemu; **poszukiwanie chwały**; konflikt między Ja rzeczywistym a wyidealizowanym → **alienacja od siebie**.
- **Rozwój**: decydują **relacje z rodzicami w dzieciństwie** i **czynniki kulturowe** (krytyka biologizmu Freuda, m.in. „zazdrości o penisa”).
  - Brak ciepła, obojętność, niekonsekwencja, dominacja rodziców → dziecko czuje **wrogość podstawową**, ale ją tłumi (bo jest zależne i boi się utraty miłości) → **lęk podstawowy** (poczucie izolacji i bezradności we wrogim świecie).
  - Zdrowy rozwój: ciepło i bezpieczeństwo → **samorealizacja Ja prawdziwego**; neurotyczny: sztywne strategie, Ja wyidealizowane i oddalanie się od siebie.

## Henry Murray – personologia
- **Potrzeba** – siła w mózgu organizująca percepcję, myślenie i działanie (np. osiągnięć, afiliacji, dominacji, autonomii).
- Podziały potrzeb: pierwotne/wtórne, jawne/ukryte, skoncentrowane/rozproszone, proaktywne/reaktywne.
- **Presja** – zewnętrzny odpowiednik potrzeby (ze strony środowiska), rzeczywista lub wyobrażona.
- **Temat** = połączenie potrzeby i presji (badany Testem Apercepcji Tematycznej, TAT).
- 5 kompleksów: klaustralny, oralny, analny, uretralny (Ikara), kastracyjny.

### Murray w schemacie: struktura – działanie – rozwój
- **Struktura**: osobowość ma podłoże w **mózgu** („bez mózgu nie ma osobowości”); Murray zachował freudowskie instancje, ale je przeformułował:
  - **id** – popędy i impulsy, także **pozytywne** (nie tylko niebezpieczne),
  - **ego** – aktywny, świadomy **organizator** zachowania (planuje, decyduje), nie tylko pośrednik,
  - **superego** – uwewnętrznione normy kształtowane przez **kulturę** i rówieśników, nie tylko rodziców; **ideał ego** – obraz tego, kim osoba chce się stać.
  - Jednostki opisu: **potrzeby** (ok. 20, np. osiągnięć, afiliacji, dominacji, autonomii, agresji, poniżenia, opiekowania się) i **presje**.
- **Działanie**: zachowanie wynika z **interakcji potrzeb (wewnątrz) i presji (środowisko)** → **temat** (thema).
  - Presje **alfa** (rzeczywiste, obiektywne) i **beta** (spostrzegane, subiektywne) – na zachowanie wpływa głównie presja beta.
  - Potrzeby się łączą (fuzja), jedne służą innym (subsydiacja), mogą się ścierać (konflikt).
  - Satysfakcję daje nie tylko **redukcja napięcia**, ale i sam proces jego **wytwarzania** i rozładowania.
  - Jednostki zachowania: **przebiegi** (proceedings – krótkie interakcje) łączące się w **serie** (dłuższe, celowe ciągi działań).
- **Rozwój**: ślady przyjemnych doświadczeń z dzieciństwa tworzą **kompleksy dziecięce** – nieświadomie wpływają na dalszy rozwój:
  - **klaustralny** (życie płodowe – potrzeba schronienia, bezpieczeństwa), **oralny** (ssanie, karmienie), **analny** (wydalanie), **uretralny** (oddawanie moczu – **kompleks Ikara**: ambicja, marzenia o wzlocie), **kastracyjny** (lęk przed utratą penisa).
  - Rozwój to zmiana i coraz lepsza **integracja potrzeb**; ważne źródło danych o osobowości – historia życia i **TAT**.

> Na pamięć: Jung = Jaźń i głębia · Adler = Ambicja (niższość → wyższość) · Sullivan = Społeczne relacje · Erikson = Etapy życia. Kolejność kryzysów: „U Ani i Piotra tylko imprezy gra Igor” (ufność, autonomia, inicjatywa, pracowitość, tożsamość, intymność, generatywność, integralność).
`,
      flashcards: [
        ["Nieświadomość osobista vs zbiorowa (Jung)", "Osobista – treści wyparte i zapomniane, tworzą kompleksy. Zbiorowa – wspólna dla ludzkości, dziedziczona, zawiera archetypy."],
        ["Persona i cień (Jung)", "Persona – maska pokazywana światu. Cień – nieakceptowane, „zwierzęce” impulsy, przeciwieństwo persony."],
        ["Anima i animus", "Anima – kobieca część psychiki mężczyzny; animus – męska część psychiki kobiety."],
        ["Jaźń u Junga", "Archetyp pełni i całości, centrum osobowości; symbol – mandala."],
        ["4 funkcje psychiczne wg Junga", "Myślenie, uczucie (wartościowanie) oraz percepcja/doznanie, intuicja (odbiór informacji)."],
        ["Indywiduacja", "Stawanie się niepodzielną całością przez integrację przeciwieństw; nasila się w drugiej połowie życia."],
        ["Zasada ekwiwalencji (Jung)", "Energia psychiczna nie znika, tylko zmienia formę (stłumione pragnienie wraca w innej postaci)."],
        ["Główny motyw działania wg Adlera", "Dążenie do wyższości jako kompensacja poczucia niższości."],
        ["Fikcyjny finalizm", "Kierowanie się wyobrażonymi celami, które nie muszą być prawdziwe, by motywować."],
        ["Styl życia (Adler)", "Unikalny sposób dążenia do celu; kształtuje się do ok. 4–5 r.ż."],
        ["Miara zdrowia psychicznego u Adlera", "Zainteresowanie społeczne – troska o innych i współpraca."],
        ["Kompleks niższości vs wyższości", "Niższości – paraliż, poddanie się. Wyższości – przechwałki maskujące niższość."],
        ["Dwa podstawowe dążenia wg Sullivana", "Dążenie do satysfakcji (potrzeby) i do bezpieczeństwa (unikanie lęku)."],
        ["System Ja u Sullivana", "Dynamizm chroniący przed lękiem; przy silnym lęku staje się dysadaptacyjny."],
        ["Tryby doświadczania (Sullivan)", "Prototaksyczny (surowe doznania), parataksyczny (łączenie bez logiki, przesądy), syntaksyczny (logiczny, symboliczny)."],
        ["Kim jest „chum”?", "Bliski przyjaciel tej samej płci w preadolescencji (Sullivan) – pierwsza intymność."],
        ["Erikson: kryzys i cnota 1. stadium (0–1)", "Ufność vs nieufność → nadzieja."],
        ["Erikson: kryzys i cnota 2. stadium (1–3)", "Autonomia vs wstyd i zwątpienie → wola."],
        ["Erikson: kryzys i cnota 3. stadium (3–6)", "Inicjatywa vs poczucie winy → cel."],
        ["Erikson: kryzys i cnota 4. stadium (6–12)", "Pracowitość vs poczucie niższości → kompetencja."],
        ["Erikson: kryzys i cnota 5. stadium (dorastanie)", "Tożsamość vs pomieszanie ról → wierność."],
        ["Erikson: kryzys i cnota 6. stadium (wczesna dorosłość)", "Intymność vs izolacja → miłość."],
        ["Erikson: kryzys i cnota 7. stadium (wiek średni)", "Generatywność vs stagnacja → troska."],
        ["Erikson: kryzys i cnota 8. stadium (starość)", "Integralność vs rozpacz → mądrość."],
        ["4 statusy tożsamości (Marcia)", "Osiągnięta, moratorium, przejęta, rozproszona."],
        ["Tożsamość przejęta", "Zaangażowanie w wartości (zwykle rodziców) bez wcześniejszego poszukiwania."],
        ["Lęk podstawowy (Horney)", "Poczucie izolacji i bezradności dziecka w świecie odbieranym jako wrogi."],
        ["3 postawy wobec ludzi (Horney)", "Ku ludziom, przeciw ludziom, od ludzi."],
        ["Potrzeba i presja (Murray)", "Potrzeba – siła wewnętrzna organizująca działanie. Presja – jej zewnętrzny odpowiednik ze strony środowiska. Razem tworzą temat."],
        ["Etapy życia wg Junga", "Dzieciństwo (instynkty, brak ukształtowanego ego) → młodość i wczesna dorosłość (umacnianie ego, rozwój persony) → wiek średni ok. 35–40 r.ż. (zwrot ku wnętrzu, indywiduacja, szukanie sensu)."],
        ["Zasada równoważności (Jung)", "Energia psychiczna nie ginie – wycofana z jednego obszaru (np. świadomości) przenosi się do innego (np. do cienia)."],
        ["Funkcje racjonalne i irracjonalne (Jung)", "Racjonalne: myślenie, uczucie. Irracjonalne: percepcja (doznanie), intuicja."],
        ["Twórcze Ja (Adler)", "Aktywny, subiektywny czynnik osobowości, który przetwarza wrodzone predyspozycje i doświadczenia w unikalny plan działania."],
        ["Fikcyjna celowość (Adler)", "Zachowanie motywują subiektywne cele na przyszłość, a nie popędy z przeszłości (działanie teleologiczne)."],
        ["Kiedy dążenie do wyższości prowadzi do zdrowia, a kiedy do nerwicy? (Adler)", "Połączone z poczuciem wspólnoty → zdrowie; samolubne → kompleks niższości lub wyższości (nerwica)."],
        ["Konstelacja rodzinna wg Adlera", "Pierworodny – detronizacja, potrzeba kontroli i władzy; drugi – rywalizacja, wyścig; najmłodszy – rozpieszczenie lub chęć przewyższenia wszystkich; jedynak – wysokie poczucie wartości, trudność we współdzieleniu uwagi."],
        ["Definicja osobowości wg Sullivana", "Względnie trwały układ powtarzających się sytuacji interpersonalnych."],
        ["Dobre Ja, złe Ja, nie-Ja (Sullivan)", "Dobre Ja – zachowania nagradzane; złe Ja – wywołujące dezaprobatę i umiarkowany lęk; nie-Ja – wyparte, traumatyczne, z paraliżującym lękiem."],
        ["Operacje zabezpieczające (Sullivan)", "Mechanizmy obronne systemu Ja (np. wybiórcza nieuwaga, dysocjacja) redukujące lęk."],
        ["Epoki rozwojowe Sullivana", "Niemowlęctwo → dzieciństwo → wiek młodzieńczy (szkolny) → wczesna adolescencja (chumship) → właściwa adolescencja → późna adolescencja i dojrzałość."],
        ["Ego u Eriksona vs u Freuda", "U Eriksona ego jest autonomiczne, racjonalne i adaptacyjne, a nie tylko biernym mediatorem między id a superego."],
        ["Ego cielesne, ideał ego, tożsamość ego (Erikson)", "Ego cielesne – świadomość ciała; ideał ego – obraz siebie wobec norm społecznych; tożsamość ego – zintegrowany obraz siebie i poczucie ciągłości „ja”."],
        ["Zasada epigenetyczna (Erikson)", "Etapy rozwoju wynikają z poprzednich, a każdy ma swój optymalny czas ujawnienia."],
        ["Kluczowa funkcja ego u Eriksona", "Ochrona poczucia tożsamości i konstruktywne rozwiązywanie kryzysów życiowych (adaptacyjne mechanizmy obronne, świadome wybory); ego balansuje między potrzebami biologicznymi a normami społecznymi."],
        ["Kompleks (Jung)", "Grupa emocjonalnie powiązanych myśli i wspomnień wokół jednego motywu; treść nieświadomości indywidualnej."],
        ["Ja prawdziwe, rzeczywiste i wyidealizowane (Horney)", "Prawdziwe – potencjał zdrowego rozwoju; rzeczywiste – kim jestem teraz; wyidealizowane – nierealny, wspaniały obraz siebie tworzony przez neurotyka."],
        ["Wrogość podstawowa a lęk podstawowy (Horney)", "Dziecko czuje wrogość wobec rodziców (brak ciepła, obojętność), ale ją tłumi z zależności i lęku przed utratą miłości – to rodzi lęk podstawowy."],
        ["Tyrania powinności (Horney)", "Wewnętrzne „muszę” narzucane przez Ja wyidealizowane; prowadzi do alienacji od siebie."],
        ["Potrzeby neurotyczne (Horney)", "10 nienasyconych strategii obrony przed lękiem, np. potrzeba miłości i aprobaty, władzy, prestiżu, podziwu, niezależności, doskonałości."],
        ["Id, ego i superego u Murraya", "Id zawiera też pozytywne impulsy; ego to aktywny organizator zachowania; superego kształtuje kultura i rówieśnicy; do tego ideał ego."],
        ["Presja alfa i beta (Murray)", "Alfa – rzeczywista, obiektywna; beta – spostrzegana przez osobę. Na zachowanie wpływa głównie presja beta."],
        ["Przebiegi i serie (Murray)", "Przebiegi – krótkie interakcje osoby z otoczeniem; serie – dłuższe, celowe ciągi przebiegów."],
        ["Kompleks Ikara (Murray)", "Kompleks uretralny: wygórowana ambicja, marzenia o wzlocie i wielkości."]
      ],
      // krótkie pary do gry „Gra w pary” (dłuższe fiszki w skróconej wersji)
      pairs: [
        ["Persona", "maska społeczna"], ["Cień", "nieakceptowane, instynktowne aspekty „ja”"], ["Anima", "pierwiastek kobiecy u mężczyzny"], ["Animus", "pierwiastek męski u kobiety"],
        ["Jaźń (Jung)", "archetyp całości, symbol – mandala"], ["Kompleks (Jung)", "myśli i wspomnienia wokół jednego motywu"], ["Archetypy", "treść nieświadomości zbiorowej"],
        ["Zasada równoważności (Jung)", "energia nie ginie, przenosi się gdzie indziej"], ["Zasada entropii (Jung)", "dążenie do równowagi napięć"],
        ["Funkcje racjonalne (Jung)", "myślenie i uczucie"], ["Funkcje irracjonalne (Jung)", "percepcja i intuicja"], ["Punkt zwrotny życia (Jung)", "ok. 35–40 r.ż. – zwrot ku wnętrzu"], ["Indywiduacja", "integracja przeciwieństw, stawanie się całością"],
        ["Twórcze Ja (Adler)", "przetwarza predyspozycje w unikalny plan"], ["Fikcyjna celowość (Adler)", "motywują nas cele na przyszłość"], ["Kompensacja (Adler)", "odpowiedź na poczucie niższości"],
        ["Pierworodny (Adler)", "„detronizacja”, potrzeba kontroli"], ["Drugie dziecko (Adler)", "rywalizacja, wyścig"], ["Najmłodszy (Adler)", "ryzyko rozpieszczenia"], ["Jedynak (Adler)", "trudność we współdzieleniu uwagi"],
        ["3 zadania życiowe (Adler)", "praca, przyjaźń, miłość"], ["Miara zdrowia u Adlera", "zainteresowanie społeczne"],
        ["Osobowość wg Sullivana", "trwały układ sytuacji interpersonalnych"], ["Dobre Ja (Sullivan)", "zachowania nagradzane przez innych"], ["Złe Ja (Sullivan)", "dezaprobata i umiarkowany lęk"], ["Nie-Ja (Sullivan)", "wyparte treści, paraliżujący lęk"],
        ["Operacje zabezpieczające", "wybiórcza nieuwaga, dysocjacja"], ["Tryb parataksyczny", "związki przyczynowe tam, gdzie ich nie ma"], ["Chumship", "bliski przyjaciel tej samej płci"],
        ["Ego u Eriksona", "autonomiczne, racjonalne, adaptacyjne"], ["Ego cielesne (Erikson)", "świadomość własnego ciała"], ["Ideał ego (Erikson)", "obraz siebie wobec ideałów społecznych"], ["Tożsamość ego (Erikson)", "poczucie ciągłości „ja” w czasie"],
        ["Zasada epigenetyczna", "etapy wynikają z poprzednich"], ["Generatywność vs stagnacja", "wiek średni → troska"], ["Integralność vs rozpacz", "późna dorosłość → mądrość"],
        ["Ja wyidealizowane (Horney)", "nierealny, wspaniały obraz siebie"], ["Ja prawdziwe (Horney)", "potencjał zdrowego rozwoju"], ["Tyrania powinności (Horney)", "wewnętrzne „muszę”"], ["Lęk podstawowy (Horney)", "izolacja i bezradność we wrogim świecie"],
        ["Temat (Murray)", "potrzeba + presja"], ["Presja alfa (Murray)", "obiektywna, rzeczywista"], ["Presja beta (Murray)", "spostrzegana przez osobę"], ["Kompleks Ikara (Murray)", "kompleks uretralny – ambicja"], ["Serie (Murray)", "dłuższe, celowe ciągi przebiegów"]
      ],
      quiz: [
        { q: "Archetypy znajdują się w:", o: ["ego", "nieświadomości osobistej", "nieświadomości zbiorowej", "superego"], a: 2, e: "Archetypy to treści nieświadomości zbiorowej; kompleksy – osobistej." },
        { q: "Miarą zdrowia psychicznego u Adlera jest:", o: ["indywiduacja", "zainteresowanie społeczne", "silne ego", "brak lęku"], a: 1, e: "Zdrowy człowiek dąży do wyższości dla dobra wspólnoty." },
        { q: "Cnotą stadium „tożsamość vs pomieszanie ról” jest:", o: ["wierność", "wola", "kompetencja", "troska"], a: 0, e: "Tożsamość → wierność." },
        { q: "Przesądy to przykład trybu doświadczania:", o: ["prototaksycznego", "parataksycznego", "syntaksycznego", "symbolicznego"], a: 1, e: "Parataksja – łączenie zdarzeń bez logicznego związku." },
        { q: "Kto opisał trzy postawy: ku ludziom, przeciw ludziom, od ludzi?", o: ["Adler", "Sullivan", "Horney", "Murray"], a: 2, e: "Karen Horney – sposoby radzenia sobie z lękiem podstawowym." },
        { q: "Osoba, która poszukuje, ale jeszcze się nie zaangażowała, ma status tożsamości:", o: ["osiągnięty", "moratorium", "przejęty", "rozproszony"], a: 1, e: "Moratorium – poszukiwanie trwa, brak zaangażowania." },
        { q: "Styl życia według Adlera kształtuje się do ok.:", o: ["1 r.ż.", "4–5 r.ż.", "12 r.ż.", "40 r.ż."], a: 1, e: "Wcześnie – do ok. 4–5 roku życia." },
        { q: "Murray połączenie potrzeby i presji nazwał:", o: ["kompleksem", "tematem", "dynamizmem", "personifikacją"], a: 1, e: "Temat – badany Testem Apercepcji Tematycznej (TAT)." },
        { q: "Kryzys „generatywność vs stagnacja” przypada na:", o: ["dorastanie", "wczesną dorosłość", "wiek średni", "starość"], a: 2, e: "Wiek średni → cnota troski." },
        { q: "Punkt zwrotny życia według Junga (zwrot ku wnętrzu) przypada na ok.:", o: ["12–14 r.ż.", "20–25 r.ż.", "35–40 r.ż.", "60–65 r.ż."], a: 2, e: "Wiek średni – kryzys wartości i intensywna indywiduacja." },
        { q: "Które funkcje Jung uznał za irracjonalne?", o: ["myślenie i uczucie", "percepcję i intuicję", "myślenie i intuicję", "uczucie i percepcję"], a: 1, e: "Racjonalne: myślenie, uczucie; irracjonalne: percepcja (doznanie), intuicja." },
        { q: "Według Adlera samolubne dążenie do wyższości prowadzi do:", o: ["indywiduacji", "kompleksu niższości lub wyższości (nerwicy)", "generatywności", "sublimacji"], a: 1, e: "Zdrowe jest dążenie połączone z poczuciem wspólnoty." },
        { q: "Czynnik, który według Adlera przetwarza predyspozycje i doświadczenia w unikalny plan działania, to:", o: ["persona", "twórcze Ja", "system Ja", "ideał ego"], a: 1, e: "Twórcze Ja (creative self)." },
        { q: "Zachowania wywołujące paraliżujący lęk Sullivan przypisał do:", o: ["dobrego Ja", "złego Ja", "nie-Ja", "personifikacji matki"], a: 2, e: "Nie-Ja – wyparte, traumatyczne aspekty." },
        { q: "Wybiórcza nieuwaga i dysocjacja to u Sullivana:", o: ["dynamizmy", "operacje zabezpieczające", "tryby doświadczania", "personifikacje"], a: 1, e: "Mechanizmy obronne systemu Ja redukujące lęk." },
        { q: "Zasada epigenetyczna u Eriksona oznacza, że:", o: ["rozwój kończy się w adolescencji", "etapy wynikają z poprzednich i mają swój optymalny czas", "osobowość jest dziedziczona", "kryzysy można pominąć"], a: 1, e: "Kolejne stadia budują się na poprzednich, każde w swoim czasie." },
        { q: "Nierealny, wspaniały obraz siebie, którym neurotyk broni się przed lękiem, to według Horney:", o: ["Ja prawdziwe", "Ja rzeczywiste", "Ja wyidealizowane", "persona"], a: 2, e: "Ja wyidealizowane – źródło tyranii powinności." },
        { q: "Według Horney lęk podstawowy powstaje, gdy dziecko:", o: ["przeżywa kompleks Edypa", "tłumi wrogość wobec chłodnych lub obojętnych rodziców", "nie przejdzie fazy analnej", "doznaje frustracji popędu śmierci"], a: 1, e: "Wrogość podstawowa tłumiona z zależności → lęk podstawowy." },
        { q: "Presja beta według Murraya to presja:", o: ["obiektywna, rzeczywista", "spostrzegana przez osobę", "ze strony superego", "biologiczna"], a: 1, e: "Alfa – obiektywna; beta – subiektywnie spostrzegana; to ona głównie wpływa na zachowanie." },
        { q: "Kompleks Ikara Murray łączył z kompleksem:", o: ["klaustralnym", "oralnym", "uretralnym", "kastracyjnym"], a: 2, e: "Uretralny – ambicja i marzenia o wzlocie." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "relacje-z-obiektem",
      title: "Teorie relacji z obiektem",
      notes: `
## Podstawowe pojęcia
- **Obiekt zewnętrzny** – realna osoba (np. matka).
- **Obiekt wewnętrzny** – psychiczna reprezentacja cech obiektu zewnętrznego, uwewnętrzniona w psychice.
- **Self-obiekt** – obiekt relacyjny, z którym self tworzy więź i przez który reguluje swoje napięcia i poczucie istnienia.

## Melanie Klein
**Nieświadoma fantazja** – forma działania procesu pierwotnego; organizuje przeżycia emocjonalne dziecka, wpływa na przeżywanie relacji z obiektami i stanowi podstawę mechanizmów obronnych.
- Fantazja ↔ rzeczywistość: fantazje wpływają na postrzeganie obiektu, a realne doświadczenia modyfikują fantazje (relacja **dwukierunkowa**).

Mechanizmy obronne:
- **Rozszczepienie** – oddzielenie dobrych i złych aspektów self i obiektu.
- **Identyfikacja projekcyjna** – odszczepione części self są projektowane na obiekt, który potem się kontroluje.
- **Identyfikacja introjekcyjna** – fantazja o wchłonięciu obiektu i utożsamieniu się z nim.

| Pozycja schizoparanoidalna | Pozycja depresyjna |
|---|---|
| rozszczepienie | integracja dobra i zła (obiekt całościowy) |
| lęk prześladowczy i anihilacyjny | lęk separacyjny (przed utratą obiektu) |
| dominacja projekcji | dominacja introjekcji |
| | poczucie winy, chęć naprawy |

## Ronald Fairbairn
- Podstawową motywacją są **relacje z obiektem**, a nie popędy.
- Libido jest z natury **ukierunkowane na obiekt**, a nie na rozładowanie napięcia.
- Psychopatologia wynika z zaburzonych relacji z obiektem, nie z konfliktów popędowych.
- Ego jest od początku zorganizowane i relacyjne.
- Internalizacja złych obiektów prowadzi do patologii.

## Wilfred Bion
- **Kontener** – zdolność obiektu (zwykle matki) do przyjmowania, przetwarzania i nadawania sensu surowym przeżyciom dziecka.
- **Kontenerowanie** – dziecko projektuje nieprzetworzone stany (**elementy beta**), matka je przetwarza i oddaje w znośnej formie (**elementy alfa**).
- **Myślenie** rozwija się jako reakcja na frustrację; internalizacja funkcji kontenerującej daje aparat myślenia, symbolizację i tolerancję frustracji.
- **Osobowość psychotyczna**: dominacja rozszczepienia, przewaga projekcji nad introjekcją, lęk prześladowczy i anihilacyjny, fragmentaryzacja psychiki, niestabilne granice Ja, trudność w integracji dobrych i złych aspektów obiektu.

## Donald Winnicott
- **Obiekt przejściowy** – pierwszy obiekt „nie-ja” (np. kocyk, maskotka); pomaga przejść od symbiozy z matką do autonomii.
- **Zjawiska przejściowe** – obszar pomiędzy rzeczywistością wewnętrzną a zewnętrzną; podstawa zabawy, twórczości i kultury.
- **Holding** – fizyczne i psychiczne „trzymanie” dziecka przez opiekuna; daje bezpieczeństwo i poczucie ciągłości istnienia.
- „Wystarczająco dobra matka”.

## Heinz Kohut – psychologia self
Obiekty self pełnią funkcje regulujące self:
- **lustrzany** – potwierdza wartość i wyjątkowość,
- **idealizowany** – daje poczucie siły i bezpieczeństwa,
- **bliźniaczy** – daje poczucie podobieństwa.

**Osobowość narcystyczna** powstaje przez deficyty w relacjach self–obiekt (brak odzwierciedlenia i możliwości idealizacji) → kruche self i potrzeba kompensacji.

## Otto Kernberg – teoria popędowo-strukturalna
**Internalizacja** – tworzenie struktur psychicznych na podstawie relacji z obiektem. Formy: **introjekcja**, **identyfikacja**, **tożsamość ego** (w opracowaniu egzaminacyjnym: internalizacja superego).

Fazy (wg opracowania):
- relacja z obiektem częściowym,
- integracja reprezentacji self i obiektu,
- ukształtowanie stabilnych struktur osobowości.
`,
      flashcards: [
        ["Obiekt zewnętrzny vs wewnętrzny", "Zewnętrzny – realna osoba. Wewnętrzny – psychiczna reprezentacja jej cech, uwewnętrzniona w psychice."],
        ["Czym jest nieświadoma fantazja (Klein)?", "Formą działania procesu pierwotnego; organizuje przeżycia dziecka, wpływa na relacje z obiektami, jest podstawą mechanizmów obronnych."],
        ["Rozszczepienie (splitting)", "Oddzielenie dobrych i złych aspektów self i obiektu."],
        ["Identyfikacja projekcyjna", "Odszczepione części self są projektowane na obiekt, który jest potem kontrolowany."],
        ["Identyfikacja introjekcyjna", "Fantazja o psychicznym wchłonięciu obiektu i utożsamieniu się z nim."],
        ["Pozycja schizoparanoidalna – cechy", "Rozszczepienie, lęk prześladowczy i anihilacyjny, dominacja projekcji."],
        ["Pozycja depresyjna – cechy", "Integracja dobra i zła, lęk separacyjny, poczucie winy, dominacja introjekcji."],
        ["Główne założenie Fairbairna", "Podstawową motywacją są relacje z obiektem, a nie popędy; libido szuka obiektu."],
        ["Kontener i kontenerowanie (Bion)", "Matka przyjmuje surowe stany dziecka (elementy beta), przetwarza je i oddaje jako znośne (elementy alfa)."],
        ["Jak rozwija się myślenie wg Biona?", "Jako reakcja na frustrację; internalizacja funkcji kontenerującej daje aparat myślenia, symbolizację i tolerancję frustracji."],
        ["Cechy osobowości psychotycznej", "Rozszczepienie, przewaga projekcji, lęk prześladowczy i anihilacyjny, fragmentaryzacja, niestabilne granice Ja."],
        ["Obiekt przejściowy (Winnicott)", "Pierwszy obiekt „nie-ja” (np. kocyk); pomaga przejść od symbiozy z matką do autonomii."],
        ["Holding (Winnicott)", "Fizyczne i psychiczne „trzymanie” dziecka przez opiekuna; daje bezpieczeństwo i ciągłość istnienia."],
        ["Zjawiska przejściowe", "Obszar między rzeczywistością wewnętrzną a zewnętrzną; fundament zabawy, twórczości i kultury."],
        ["3 typy obiektów self (Kohut)", "Lustrzany (potwierdza wartość), idealizowany (daje siłę i bezpieczeństwo), bliźniaczy (poczucie podobieństwa)."],
        ["Jak powstaje osobowość narcystyczna wg Kohuta?", "Przez deficyty w relacjach self–obiekt: brak odzwierciedlenia i idealizacji → kruche self i potrzeba kompensacji."],
        ["Internalizacja wg Kernberga i jej formy", "Tworzenie struktur psychicznych z relacji z obiektem. Formy: introjekcja, identyfikacja, tożsamość ego / internalizacja superego."],
        ["Self-obiekt", "Obiekt relacyjny, przez który self reguluje swoje napięcia i poczucie istnienia."]
      ],
      quiz: [
        { q: "W pozycji depresyjnej dominuje:", o: ["projekcja i lęk prześladowczy", "introjekcja i lęk separacyjny", "rozszczepienie", "lęk anihilacyjny"], a: 1, e: "Pozycja depresyjna: integracja, poczucie winy, lęk przed utratą obiektu." },
        { q: "Elementy beta i alfa to pojęcia:", o: ["Klein", "Biona", "Winnicotta", "Kohuta"], a: 1, e: "Bion – kontenerowanie przekształca elementy beta w alfa." },
        { q: "Kocyk niemowlęcia to przykład:", o: ["self-obiektu lustrzanego", "obiektu przejściowego", "obiektu częściowego", "identyfikacji projekcyjnej"], a: 1, e: "Winnicott – obiekt przejściowy, pierwsze „nie-ja”." },
        { q: "Obiekt self, który potwierdza wartość i wyjątkowość dziecka, to obiekt:", o: ["idealizowany", "bliźniaczy", "lustrzany", "przejściowy"], a: 2, e: "Kohut: lustrzany odzwierciedla wyjątkowość." },
        { q: "Według Fairbairna libido jest ukierunkowane na:", o: ["rozładowanie napięcia", "obiekt", "przyjemność", "samozniszczenie"], a: 1, e: "Fairbairn: libido szuka obiektu, a nie rozładowania." },
        { q: "Pojęcie holdingu wprowadził:", o: ["Winnicott", "Kernberg", "Bion", "Fairbairn"], a: 0, e: "Winnicott – „trzymanie” dziecka przez opiekuna." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "uczenie",
      title: "Teorie uczenia się: behawioryzm, Dollard i Miller, Bandura",
      notes: `
## Klasyczny behawioryzm
- Osobowość = zespół indywidualnych **wzorców zachowania nabytych w procesie uczenia się** (pojęcie osobowości nie jest tu właściwie potrzebne).
- **Warunkowanie klasyczne** – bodziec neutralny zaczyna wywoływać reakcję odruchową.
- **Warunkowanie instrumentalne** – zachowania nagradzane utrwalają się, karane zanikają.
- Rozwój = uczenie się pod wpływem środowiska.

## Dollard i Miller
- Osobowość to **konfiguracja nawyków** nabytych w procesie uczenia się.
- Schemat uczenia się: **popęd → sygnał (wskazówka) → reakcja → wzmocnienie**.
- Popędy **pierwotne** (fizjologiczne, np. ból, głód) i **wtórne** (wyuczone, np. lęk).
- Nagradzane są reakcje, które redukują popęd.
- Typy konfliktów: **dążenie–dążenie**, **unikanie–unikanie**, **dążenie–unikanie**, **podwójne dążenie–unikanie**.

## Albert Bandura – teoria społeczno-poznawcza
**Uczenie się przez obserwację (modelowanie)** – 4 procesy:
- **uwagi** – zauważamy zachowanie modelu (wyraziste, proste, użyteczne),
- **przechowywania** – kodujemy je symbolicznie w pamięci,
- **wytwarzania (odtwarzania)** – potrafimy je wykonać (mamy umiejętności),
- **motywacyjne** – wykonujemy je, gdy daje satysfakcję lub jest użyteczne.

**System Ja** (autoregulacja): **samoobserwacja** → **ocena** (porównanie ze standardami, porównania społeczne) → **reakcja na siebie** (samonagradzanie / samokrytyka).

**Poczucie skuteczności własnej (self-efficacy)**:
- oczekiwania dotyczące **skuteczności** – „potrafię to zrobić”,
- oczekiwania dotyczące **wyniku** – „to zachowanie da określony efekt”.

**Determinizm wzajemny** – osoba, środowisko i zachowanie wpływają na siebie nawzajem.

> Na pamięć: Dollard i Miller = popęd, sygnał, reakcja, wzmocnienie. Bandura = uwaga, przechowywanie, wytwarzanie, motywacja.
`,
      flashcards: [
        ["Osobowość w behawioryzmie", "Zespół wzorców zachowania nabytych przez uczenie się (warunkowanie)."],
        ["Warunkowanie klasyczne vs instrumentalne", "Klasyczne: bodziec neutralny wywołuje reakcję odruchową. Instrumentalne: zachowania nagradzane się utrwalają, karane zanikają."],
        ["Czym jest osobowość dla Dollarda i Millera?", "Konfiguracją nawyków nabytych w procesie uczenia się."],
        ["4 elementy uczenia się wg Dollarda i Millera", "Popęd, sygnał (wskazówka), reakcja, wzmocnienie."],
        ["Popędy pierwotne vs wtórne", "Pierwotne – fizjologiczne (ból, głód). Wtórne – wyuczone (np. lęk)."],
        ["Typy konfliktów (Dollard i Miller)", "Dążenie–dążenie, unikanie–unikanie, dążenie–unikanie, podwójne dążenie–unikanie."],
        ["4 procesy modelowania (Bandura)", "Uwagi, przechowywania, wytwarzania (odtwarzania), motywacyjne."],
        ["System Ja u Bandury", "Samoobserwacja, proces oceniania, reakcja na siebie – służą autoregulacji zachowania."],
        ["Poczucie skuteczności własnej", "Przekonanie, że potrafię skutecznie wykonać zachowanie potrzebne do uzyskania wyniku."],
        ["Oczekiwania skuteczności vs wyniku", "Skuteczności: „potrafię to zrobić”. Wyniku: „to zachowanie doprowadzi do efektu”."],
        ["Determinizm wzajemny", "Osoba, środowisko i zachowanie wzajemnie na siebie wpływają."]
      ],
      quiz: [
        { q: "Popęd, sygnał, reakcja i wzmocnienie to elementy teorii:", o: ["Bandury", "Dollarda i Millera", "Rottera", "Skinnera"], a: 1, e: "Dollard i Miller połączyli psychoanalizę z teorią uczenia się." },
        { q: "Lęk jako popęd wyuczony to popęd:", o: ["pierwotny", "wtórny", "częściowy", "organizmalny"], a: 1, e: "Popędy wtórne są wyuczone." },
        { q: "Który proces modelowania polega na zakodowaniu zachowania w pamięci?", o: ["uwagi", "przechowywania", "wytwarzania", "motywacyjny"], a: 1, e: "Przechowywanie – symboliczne kodowanie." },
        { q: "Wybór między dwiema nieprzyjemnymi opcjami to konflikt:", o: ["dążenie–dążenie", "unikanie–unikanie", "dążenie–unikanie", "podwójne dążenie–unikanie"], a: 1, e: "Obie opcje odpychają → unikanie–unikanie." },
        { q: "Determinizm wzajemny opisał:", o: ["Bandura", "Mischel", "Dollard", "Kelly"], a: 0, e: "Bandura: osoba ↔ środowisko ↔ zachowanie." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "cechy",
      title: "Teorie cech: Allport, Cattell, Eysenck, Wielka Piątka",
      notes: `
## Gordon Allport
- Osobowość to **dynamiczna organizacja** wewnątrz jednostki tych systemów psychofizycznych, które determinują jej **unikalne przystosowanie** do środowiska.
- **Proprium** – zamiast „Ja”: centralna struktura osobowości, świadome dążenia, plany, intencje. Rozwija się od dzieciństwa (Ja cielesne, poczucie ciągłości, poczucie własnej wartości → obraz siebie → Ja racjonalne → dążenia osobiste).
- **Cecha** – struktura neuropsychiczna, która sprawia, że różne bodźce są funkcjonalnie równoważne i wywołują podobne zachowania. Cechy realnie istnieją.
- **Cechy wspólne** (pozwalają porównywać ludzi) vs **indywidualne (dyspozycje)**:
  - **kardynalne** – jedna dominująca, przejawia się prawie w każdym zachowaniu,
  - **centralne** – kilka wyraźnych, łatwo zauważalnych,
  - **wtórne** – najliczniejsze, ujawniają się rzadko i w wąskim zakresie sytuacji.
- **Funkcjonalna autonomia motywów** – motyw może się usamodzielnić od pierwotnego źródła.
- Motywacja **reaktywna** (redukcja napięcia) i **proaktywna** (wzbudzanie napięcia).
- Dojrzała osobowość: poszerzone Ja, serdeczne kontakty, bezpieczeństwo emocjonalne i samoakceptacja, realizm, samoobiektywizacja, jednocząca filozofia życia.

## Raymond Cattell
- Osobowość = zespół cech, wywnioskowanych z zachowania (analiza czynnikowa).
- **Cechy powierzchniowe** (obserwowalne) vs **źródłowe** (ukryte, leżące u podłoża) – **16 czynników** (test 16PF).
- Ze względu na pochodzenie: **konstytucjonalne** i **środowiskowe**.
- Ze względu na rodzaj: **temperamentalne** („jak?”), **zdolnościowe** („jak dobrze?”), **dynamiczne** („dlaczego?”) – a wśród nich **ergi** (biologiczne popędy), **sentymenty** (wyuczone, społeczne; najważniejszy – sentyment Ja) i postawy.

## Hans Eysenck
- Osobowość = względnie trwała organizacja **charakteru, temperamentu, intelektu i budowy fizycznej**.
- Hierarchiczny model; trzy wymiary (**PEN**):
  - **Psychotyczność** – egocentryzm, chłód, impulsywność, agresja, brak empatii, ale też twórczość,
  - **Ekstrawersja–introwersja** – ekstrawertyk potrzebuje silnej stymulacji, introwertyk dobrze działa przy słabej,
  - **Neurotyczność** – niestabilność emocjonalna vs zrównoważenie.
- Cechy mają podłoże **biologiczne**.

## Wielka Piątka (Costa i McCrae)
| Czynnik | Co opisuje |
|---|---|
| **Neurotyczność** | niestabilność emocjonalna vs opanowanie |
| **Ekstrawersja** | ilość i intensywność kontaktów, aktywność, potrzeba stymulacji |
| **Otwartość na doświadczenie** | poszukiwanie nowości, tolerancja nieznanego |
| **Ugodowość** | współczucie vs antagonizm w relacjach |
| **Sumienność** | zorganizowanie, wytrwałość, motywacja do celu |

Wersja leksykalna (Goldberg): surgencja, ugodowość, sumienność, stabilność emocjonalna, intelekt/kultura.

> Na pamięć: OCEAN – Otwartość, Conscientiousness (sumienność), Ekstrawersja, Agreeableness (ugodowość), Neurotyczność.
`,
      flashcards: [
        ["Definicja osobowości wg Allporta", "Dynamiczna organizacja systemów psychofizycznych w jednostce, które determinują jej unikalne przystosowanie do środowiska."],
        ["Proprium", "Pojęcie Allporta zamiast „Ja”: centralna struktura osobowości, świadome dążenia, plany i intencje."],
        ["Cechy kardynalne, centralne i wtórne", "Kardynalna – jedna dominująca. Centralne – kilka wyraźnych. Wtórne – najliczniejsze, ujawniają się rzadko."],
        ["Funkcjonalna autonomia motywów", "Motyw może usamodzielnić się od pierwotnego źródła i działać niezależnie (Allport)."],
        ["Cechy powierzchniowe vs źródłowe (Cattell)", "Powierzchniowe – obserwowalne. Źródłowe – ukryte, leżące u podłoża; Cattell wyróżnił 16 (16PF)."],
        ["Ergi i sentymenty (Cattell)", "Ergi – biologiczne popędy. Sentymenty – wyuczone, społeczno-kulturowe; najważniejszy to sentyment Ja."],
        ["3 wymiary osobowości Eysencka", "Psychotyczność, ekstrawersja–introwersja, neurotyczność (PEN)."],
        ["Ekstrawertyk vs introwertyk wg Eysencka", "Ekstrawertyk dobrze działa przy silnej stymulacji i jej szuka; introwertyk – przy słabej."],
        ["Czynniki Wielkiej Piątki", "Neurotyczność, ekstrawersja, otwartość na doświadczenie, ugodowość, sumienność."],
        ["Sumienność w Wielkiej Piątce", "Stopień zorganizowania, wytrwałości i motywacji w działaniu ukierunkowanym na cel."],
        ["Ugodowość w Wielkiej Piątce", "Jakość relacji z innymi: od współczucia do antagonizmu."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Osobowość wg Allporta", "dynamiczna organizacja systemów psychofizycznych"],
        ["Proprium", "Allportowskie „Ja” – świadome dążenia"],
        ["Cecha kardynalna", "jedna dominująca"],
        ["Cechy centralne", "kilka wyraźnych"],
        ["Cechy wtórne", "najliczniejsze, ujawniają się rzadko"],
        ["Autonomia funkcjonalna", "motyw usamodzielnia się od źródła"],
        ["Cechy powierzchniowe", "obserwowalne"],
        ["Cechy źródłowe", "ukryte, 16 czynników (16PF)"],
        ["Ergi", "biologiczne popędy"],
        ["Sentymenty", "wyuczone, społeczno-kulturowe"],
        ["PEN (Eysenck)", "psychotyczność, ekstrawersja, neurotyczność"],
        ["Ekstrawertyk wg Eysencka", "szuka silnej stymulacji"],
        ["Sumienność", "zorganizowanie i wytrwałość"],
        ["Ugodowość", "od współczucia do antagonizmu"]
      ],
      quiz: [
        { q: "Cecha, która przejawia się niemal w każdym zachowaniu człowieka (Allport), to cecha:", o: ["centralna", "kardynalna", "wtórna", "źródłowa"], a: 1, e: "Kardynalna = dominująca." },
        { q: "Test 16PF opracował:", o: ["Eysenck", "Allport", "Cattell", "Costa i McCrae"], a: 2, e: "Cattell – 16 cech źródłowych." },
        { q: "Który wymiar NIE należy do modelu PEN Eysencka?", o: ["psychotyczność", "ekstrawersja", "sumienność", "neurotyczność"], a: 2, e: "Sumienność to czynnik Wielkiej Piątki." },
        { q: "Pojęcie proprium wprowadził:", o: ["Allport", "Rogers", "Cattell", "Kelly"], a: 0, e: "Allport – proprium zamiast „Ja”." },
        { q: "Poszukiwanie nowych doświadczeń i tolerancja nieznanego to:", o: ["ekstrawersja", "otwartość na doświadczenie", "ugodowość", "surgencja"], a: 1, e: "Otwartość na doświadczenie." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "humanistyczne",
      title: "Koncepcje humanistyczne: Maslow, Rogers, Perls, Deci i Ryan",
      notes: `
## Założenia nurtu humanistycznego
- Człowiek to **unikalna całość**, więcej niż suma części (Ja + organizm).
- Podstawowa właściwość natury ludzkiej to **rozwój**; główna motywacja – **samorealizacja**.
- Człowiek jest **z natury dobry**, jego dążenia są konstruktywne.
- Liczy się doświadczenie **„tu i teraz”**; człowiek jest świadomy, ma **wolny wybór** i działa celowo.
- Przedmiot: sens kondycji ludzkiej, wartości, podejście **fenomenologiczne** (badanie doświadczenia); wiedza jest względna i zmienna.

## Abraham Maslow
**Hierarchia potrzeb** (od dołu):
- fizjologiczne → bezpieczeństwa → przynależności i miłości → szacunku → poznawcze → (metapotrzeby) estetyczne → samorealizacji → transcendencji.
- Potrzeby **niedoboru** (niższe): działają na zasadzie napięcie–ulga, zależą od innych, sygnalizuje je przykre napięcie.
- Potrzeby **wzrostu** (metapotrzeby): „im więcej, tym lepiej”, dają pozytywne emocje, są względnie niezależne od otoczenia.

**Dylemat obrona vs rozwój** – trzeba wybrać między zabezpieczaniem poczucia bezpieczeństwa a sięganiem po nowe doświadczenia. Rozwój wymaga zaspokojenia podstawowych potrzeb.

**Spontaniczny rozwój**: krok naprzód → zadowolenie → satysfakcja → przesyt → kolejny krok. Zachodzi, gdy kolejny krok jest subiektywnie bardziej atrakcyjny. Warunki: bezpieczeństwo, samoakceptacja i zaufanie do siebie, samodzielny wybór, satysfakcja z niego.

**Ludzie samorealizujący się**: realizm, akceptacja siebie, spontaniczność, koncentracja na problemach (nie na sobie), potrzeba odosobnienia, autonomia, świeże spojrzenie na świat, doznania mistyczne (szczytowe), głębokie związki, demokratyczne postawy, filozoficzne poczucie humoru, twórczość, niezależność od kultury.

## Carl Rogers
- **Ja** – centralny konstrukt; zdrowie lub patologia zależą od pojęcia Ja.
- Ja kształtuje się w dzieciństwie; **potrzeba samoakceptacji** (i akceptacji przez innych) stymuluje jego rozwój.
- Doświadczenia niezgodne z Ja są wypierane lub zniekształcane (racjonalizacje, fantazje, projekcje) → źródło patologii.
- **Zdrowa osobowość = zgodność Ja z doświadczeniem** (kongruencja).
- **Wartościowanie organizmiczne** – organizm „wie”, co jest dla niego dobre.
- **Terapia skoncentrowana na kliencie**: klient jest ekspertem; terapeuta okazuje **bezwarunkową akceptację, empatię i autentyczność (kongruencję)**.
- **Osoba w pełni funkcjonująca (wolna)**: otwartość na doświadczenie, życie chwilą, zaufanie do siebie, rosnąca samoświadomość, wolne wybory i odpowiedzialność za nie.

## Fritz Perls – psychologia postaci (Gestalt)
- Doświadczenie organizujemy w **figury** wyłaniające się z tła; figury ciągle tworzą się i rozpadają.
- Psychopatologia = zaburzenie tworzenia i domykania figur; stagnacja, niedojrzałość, życie według oczekiwań innych.
- Osobowość neurotyczna: **„pan” (top dog)** i **„poddany” (bottom dog)**.

**Cykl doświadczenia (Perls, Zinker)**: doznanie (pobudzenie) → tworzenie się figury (świadomość potrzeby) → mobilizacja energii → działanie → **kontakt** (na granicy organizm–środowisko) → **wycofanie** (domknięcie, włączenie doświadczenia do Ja) → nowe doznanie…
- Granice Ja mogą być słabe, nieobecne lub nadmierne.
- Niedomknięta figura (brak połączenia odczucia z myślą) → podstawa dysocjacji i depersonalizacji.

## Deci i Ryan – teoria autodeterminacji
- Trzy podstawowe potrzeby psychologiczne: **kompetencji, autonomii, więzi (związków z innymi)**.
- Motywacja **wewnętrzna** (autonomiczna, daje satysfakcję) vs **zewnętrzna** (kary i nagrody; może się uwewnętrznić).
- Regulacja zewnętrzna, od najmniej do najbardziej autonomicznej: **zewnętrzna** → **introjekcyjna** (wartości przyjęte, ale nie własne) → **przez identyfikację** (cele uznane za własne) → **zintegrowana** z Ja.
- Motywacja wewnętrzna wymaga **wsparcia**; jego przeciwieństwo, nadmierna **kontrola**, szkodzi.
`,
      flashcards: [
        ["Podstawowe założenia psychologii humanistycznej", "Człowiek jako unikalna całość, dążenie do rozwoju i samorealizacji, człowiek z natury dobry, „tu i teraz”, wolny wybór, celowość."],
        ["Hierarchia potrzeb Maslowa (od dołu)", "Fizjologiczne, bezpieczeństwa, przynależności, szacunku, poznawcze, estetyczne, samorealizacji, transcendencji."],
        ["Potrzeby niedoboru vs wzrostu", "Niedoboru: napięcie–ulga, zależne od innych. Wzrostu: „im więcej, tym lepiej”, pozytywne emocje, niezależne od otoczenia."],
        ["Dylemat obrona vs rozwój (Maslow)", "Wybór między zabezpieczaniem poczucia bezpieczeństwa a sięganiem po nowe doświadczenia; rozwój wymaga zaspokojenia potrzeb podstawowych."],
        ["Cykl spontanicznego rozwoju (Maslow)", "Krok naprzód → zadowolenie → satysfakcja → przesyt → kolejny krok."],
        ["Cechy ludzi samorealizujących się (min. 5)", "Realizm, akceptacja siebie, spontaniczność, koncentracja na problemach, autonomia, głębokie związki, twórczość, filozoficzne poczucie humoru."],
        ["Zdrowa osobowość wg Rogersa", "Zintegrowana: Ja zgodne z doświadczeniem (kongruencja)."],
        ["Związek potrzeby samoakceptacji z rozwojem Ja (Rogers)", "Potrzeba samoakceptacji stymuluje rozwój Ja; brak akceptacji powoduje wypieranie i zniekształcanie doświadczeń."],
        ["3 postawy terapeuty wg Rogersa", "Bezwarunkowa akceptacja, empatia, autentyczność (kongruencja)."],
        ["Osoba w pełni funkcjonująca (Rogers)", "Otwarta na doświadczenia, ufa sobie, żyje chwilą, coraz bardziej świadoma siebie, dokonuje wolnych wyborów i bierze za nie odpowiedzialność."],
        ["Zdrowa vs chora osobowość wg Perlsa", "Zdrowa płynnie tworzy i domyka figury. Psychopatologia to zaburzenie tego procesu, stagnacja, życie według oczekiwań innych."],
        ["Etapy cyklu doświadczenia (Perls, Zinker)", "Doznanie → figura → mobilizacja → działanie → kontakt → wycofanie."],
        ["Top dog i bottom dog", "Dwie warstwy osobowości neurotycznej wg Perlsa: „pan” i „poddany”."],
        ["3 potrzeby w teorii autodeterminacji", "Kompetencji, autonomii, więzi z innymi (Deci i Ryan)."],
        ["Rodzaje regulacji motywacji zewnętrznej (Deci i Ryan)", "Zewnętrzna → introjekcyjna → przez identyfikację → zintegrowana (od najmniej do najbardziej autonomicznej)."]
      ],
      quiz: [
        { q: "Bezwarunkowa akceptacja, empatia i autentyczność to postawy terapeuty według:", o: ["Maslowa", "Rogersa", "Perlsa", "Frankla"], a: 1, e: "Rogers – terapia skoncentrowana na kliencie." },
        { q: "Potrzeby wzrostu działają na zasadzie:", o: ["napięcie–ulga", "im więcej, tym lepiej", "homeostazy", "kompensacji"], a: 1, e: "Ich zaspokajanie podtrzymuje motywację." },
        { q: "Pojęcia figury i tła pochodzą z teorii:", o: ["Rogersa", "Perlsa", "Deciego i Ryana", "Maslowa"], a: 1, e: "Perls – Gestalt." },
        { q: "Która potrzeba NIE należy do teorii autodeterminacji?", o: ["kompetencji", "autonomii", "więzi", "bezpieczeństwa"], a: 3, e: "Deci i Ryan: kompetencja, autonomia, więź." },
        { q: "Robię coś, bo czułabym się winna, gdybym tego nie zrobiła. To regulacja:", o: ["zewnętrzna", "introjekcyjna", "przez identyfikację", "zintegrowana"], a: 1, e: "Introjekcja – wartości przyjęte, ale nie uznane za własne (poczucie winy, presja)." },
        { q: "Zdrowie psychiczne według Rogersa to:", o: ["zgodność Ja z doświadczeniem", "silne superego", "zaspokojenie potrzeb niedoboru", "brak lęku"], a: 0, e: "Kongruencja Ja i doświadczenia." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "pozytywna-egzystencjalna",
      title: "Psychologia pozytywna i egzystencjalna (Seligman, Frankl)",
      notes: `
## Psychologia pozytywna
- Przedstawiciele: **Martin Seligman, Mihaly Csikszentmihalyi, Jonathan Haidt**.
- Bada to, co czyni życie wartościowym: szczęście, spełnienie, rozkwit.
- Szczęśliwe życie wg Seligmana: **przyjemne, zaangażowane, znaczące**.
- Stały poziom szczęścia (punkt wyjścia) utrzymuje adaptacja. Jego źródła: **geny ok. 50%**, **intencjonalna aktywność ok. 40%**, **okoliczności ok. 10%**.
- Podstawą pesymizmu prowadzącego do depresji jest **wyuczona bezradność** (przekonanie, że działania nie mają wpływu na to, co się dzieje).
- Inwentarz sił: 6 cnót – mądrość i wiedza, odwaga, miłość i człowieczeństwo, sprawiedliwość, umiarkowanie, transcendencja.

| Styl wyjaśniania | Pesymista | Optymista |
|---|---|---|
| Stałość | porażki trwałe, sukcesy chwilowe | porażki chwilowe, sukcesy trwałe |
| Zasięg | porażki ogólne | porażki ograniczone |
| Personalizacja | porażki – moja wina, sukcesy – przypadek | porażki – czynniki zewnętrzne, sukcesy – moja zasługa |

## Psychologia egzystencjalna
- Tematy: **śmierć, samotność, wolność, sens życia**.
- **Lęk egzystencjalny**, **wina egzystencjalna** (zaprzepaszczenie szans rozwoju), **nerwica egzystencjalna** (niezrealizowanie wartości nadających sens).

## Viktor Frankl – logoterapia
- Trzy wymiary człowieka: **somatyczny, psychiczny, duchowy (noetyczny)**; jedność w różnorodności.
- **Wola sensu** – pierwotna, wrodzona potrzeba sensu.
- Sensu nie da się nadać – trzeba go **odkryć**; prowadzi do wychodzenia poza siebie (autotranscendencja).
- **Wolna wola** – człowiek jest ograniczony biologicznie, psychicznie i społecznie, ale sam decyduje o postawie.
- Właściwie przeżyte **cierpienie** może prowadzić do odkrycia sensu.
`,
      flashcards: [
        ["Trzy rodzaje szczęśliwego życia (Seligman)", "Przyjemne, zaangażowane, znaczące."],
        ["Od czego zależy chroniczny poziom szczęścia?", "Geny ok. 50%, intencjonalna aktywność ok. 40%, okoliczności ok. 10%."],
        ["Wyuczona bezradność", "Przekonanie, że żadne działanie nie ma wpływu na to, co się dzieje; podstawa pesymizmu i depresji."],
        ["Pesymistyczny styl wyjaśniania porażek", "Trwałe, ogólne, wewnętrzne („zawsze”, „we wszystkim”, „przeze mnie”)."],
        ["Tematy psychologii egzystencjalnej", "Śmierć, samotność, wolność, sens życia."],
        ["Wina egzystencjalna", "Zaprzepaszczenie szans rozwojowych."],
        ["Wola sensu (Frankl)", "Pierwotna, wrodzona potrzeba odnalezienia sensu."],
        ["Wymiary człowieka wg Frankla", "Somatyczny, psychiczny i duchowy (noetyczny)."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["3 rodzaje szczęśliwego życia", "przyjemne, zaangażowane, znaczące"],
        ["Geny a szczęście", "ok. 50%"],
        ["Intencjonalna aktywność a szczęście", "ok. 40%"],
        ["Okoliczności a szczęście", "ok. 10%"],
        ["Wyuczona bezradność", "„nic nie zależy ode mnie”"],
        ["Pesymistyczny styl wyjaśniania", "trwały, ogólny, wewnętrzny"],
        ["Tematy egzystencjalne", "śmierć, samotność, wolność, sens"],
        ["Wina egzystencjalna", "zaprzepaszczone szanse rozwoju"],
        ["Wola sensu", "wrodzona potrzeba sensu (Frankl)"],
        ["Wymiar noetyczny", "duchowy wymiar człowieka"]
      ],
      quiz: [
        { q: "Optymista tłumaczy porażki jako:", o: ["trwałe i ogólne", "chwilowe i ograniczone", "wewnętrzne i trwałe", "niezależne od niczego"], a: 1, e: "Optymista: porażki chwilowe, o ograniczonym zasięgu, zewnętrzne." },
        { q: "Logoterapię stworzył:", o: ["Seligman", "Frankl", "Rogers", "May"], a: 1, e: "Viktor Frankl." },
        { q: "Według Frankla sens życia:", o: ["nadaje człowiekowi społeczeństwo", "trzeba odkryć", "nie istnieje", "wynika z popędów"], a: 1, e: "Sens się odkrywa, a nie nadaje." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "poznawcze",
      title: "Koncepcje poznawcze: Kelly, Lewin, Epstein, Rotter, Mischel",
      notes: `
## Założenia podejścia poznawczego
- Człowiek, podobnie jak naukowiec, **przetwarza informacje**.
- Działanie zależy od przyjętych **założeń i reguł**, od tego, jak spostrzega świat i siebie.
- Działa **intencjonalnie i planowo**, może kontrolować swoje zachowanie.
- Osobowość = system **struktur i procesów poznawczych** zawierających wiedzę o świecie, sobie i relacjach.
- **Schemat poznawczy** – wiedza wyabstrahowana z konkretnych doświadczeń; służy do interpretowania nowych doświadczeń i formułowania reakcji. Szczególnie ważne są schematy społeczne (osób, cech, zdarzeń).
- Pojęcia: **kategoria**, **schemat**, **prototyp** (najlepszy egzemplarz kategorii), **skrypt** (typowa sekwencja zdarzeń, np. w restauracji).

## George Kelly – teoria konstruktów osobistych
- **Alternatywizm konstruktywny** – każdy rozumie świat na swój sposób; człowiek jako **naukowiec**.
- **Konstrukty osobiste** pozwalają rozumieć siebie, innych i świat oraz tworzyć **antycypacje** (przewidywania).
- Konstrukty są **dwubiegunowe** (np. życzliwy – chłodny), mają ograniczony zakres stosowalności.
- Rodzaje: werbalne / niewerbalne (przedsłowne); **centralne (rdzeniowe)** / **peryferyjne**; system złożony / prosty; wykluczające, konstelacyjne, zdaniowe.
- System konstruktów jest elastyczny, a zarazem stabilny.
- **Lęk** = zdarzenia wykraczają poza zakres stosowalności naszych konstruktów.

## Kurt Lewin – teoria pola
- **Przestrzeń życiowa (L)** = osoba (P) + środowisko psychologiczne (E); poza nią świat fizyczny.
- Zachowanie = f(osoba, środowisko). Granice są przenikalne.
- Potrzeba → **napięcie** w regionie wewnętrznym; obiekty mają **walencję** dodatnią (przyciągają) lub ujemną (odpychają).
- Rozwój jest ciągły, nie stadialny.

## Seymour Epstein – CEST
Dwa równoległe systemy przetwarzania informacji:
- **doświadczeniowy** – automatyczny, szybki, oparty na uczeniu się; tworzy ukrytą teorię rzeczywistości (Ja, świat, relacje),
- **racjonalny** – świadomy, wymaga myślenia i rozumowania.

Cztery podstawowe potrzeby i przekonania:
- przyjemność / unikanie bólu – świat jest życzliwy (lub nie),
- stabilny, spójny system pojęć – świat jest sensowny i przewidywalny,
- kontakt z innymi – ludzie są godni zaufania,
- umacnianie samooceny – jestem wartościowy.

## Julian Rotter
- Potencjał zachowania zależy od **oczekiwań** (szansy realizacji celu) i **wartości** wzmocnienia (znaczenia celu).
- **Umiejscowienie kontroli (LOC)**:
  - **wewnętrzne** – efekty zależą ode mnie i mojego wysiłku,
  - **zewnętrzne** – efekty zależą od innych, okoliczności, szczęścia.

## Mischel i Shoda – poznawczo-afektywny system osobowości (CAPS)
- Osobowość = wiedza o sobie i świecie zorganizowana w system **poznawczo-afektywny**; elementy poznawcze i emocjonalne współdziałają.
- Zachowanie wynika z interakcji **osoba ↔ sytuacja ↔ zachowanie**.
- **Podpis behawioralny** – charakterystyczny dla osoby wzorzec „jeśli… to…” w określonej klasie sytuacji.

## Główne funkcje osobowości
Planowanie i wybór działań · koordynacja i integracja działań · samokontrola · funkcja obronna (ochrona przed skutkami porażek i traum).
`,
      flashcards: [
        ["Założenia podejścia poznawczego do osobowości", "Człowiek przetwarza informacje jak naukowiec, działa według założeń i reguł, intencjonalnie i planowo; osobowość to system struktur poznawczych."],
        ["Schemat poznawczy", "Wiedza wyabstrahowana z konkretnych doświadczeń; służy do interpretacji nowych doświadczeń i formułowania reakcji."],
        ["Prototyp vs skrypt", "Prototyp – najlepszy egzemplarz kategorii. Skrypt – typowa sekwencja zachowań w danej sytuacji."],
        ["Alternatywizm konstruktywny (Kelly)", "Założenie, że każdy człowiek interpretuje świat na swój własny sposób."],
        ["Konstrukt osobisty", "Dwubiegunowy sposób rozróżniania (np. życzliwy – chłodny), dzięki któremu rozumiemy świat i przewidujemy zdarzenia."],
        ["Konstrukty centralne vs peryferyjne", "Centralne (rdzeniowe) – podstawowe dla tożsamości, oporne na zmiany. Peryferyjne – mniej ważne, łatwo się zmieniają."],
        ["Lęk wg Kelly'ego", "Zorientowanie się, że zdarzenia wykraczają poza zakres stosowalności naszego systemu konstruktów."],
        ["Przestrzeń życiowa (Lewin)", "Osoba + środowisko psychologiczne; cała rzeczywistość psychologiczna wpływająca na zachowanie."],
        ["Dwa systemy przetwarzania wg Epsteina", "Doświadczeniowy (automatyczny, intuicyjny) i racjonalny (świadomy, logiczny); działają równolegle."],
        ["4 podstawowe potrzeby wg Epsteina", "Przyjemność/unikanie bólu, spójny system pojęć, kontakt z innymi, umacnianie samooceny."],
        ["Od czego zależy zachowanie wg Rottera?", "Od oczekiwań (szansy realizacji celu) i wartości wzmocnienia (znaczenia celu)."],
        ["Wewnętrzne vs zewnętrzne umiejscowienie kontroli", "Wewnętrzne – efekty zależą ode mnie. Zewnętrzne – od innych, okoliczności, szczęścia."],
        ["Podpis behawioralny (Mischel i Shoda)", "Charakterystyczny dla osoby wzorzec zachowania w określonej klasie sytuacji („jeśli… to…”)."],
        ["Główne funkcje osobowości", "Planowanie i wybór działań, koordynacja i integracja, samokontrola, funkcja obronna."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Schemat poznawczy", "wiedza wyabstrahowana z doświadczeń"],
        ["Prototyp", "najlepszy egzemplarz kategorii"],
        ["Skrypt", "typowa sekwencja zachowań"],
        ["Alternatywizm konstruktywny", "każdy interpretuje świat po swojemu"],
        ["Konstrukt osobisty", "dwubiegunowy sposób rozróżniania"],
        ["Konstrukty centralne", "rdzeniowe, oporne na zmiany"],
        ["Lęk wg Kelly’ego", "zdarzenia poza zasięgiem konstruktów"],
        ["Przestrzeń życiowa (Lewin)", "osoba + środowisko psychologiczne"],
        ["System doświadczeniowy (Epstein)", "automatyczny, intuicyjny"],
        ["System racjonalny (Epstein)", "świadomy, logiczny"],
        ["Wewnętrzne umiejscowienie kontroli", "efekty zależą ode mnie"],
        ["Zewnętrzne umiejscowienie kontroli", "efekty zależą od losu i innych"],
        ["Podpis behawioralny", "wzorzec „jeśli… to…”"]
      ],
      quiz: [
        { q: "Pojęcie umiejscowienia kontroli wprowadził:", o: ["Kelly", "Rotter", "Bandura", "Epstein"], a: 1, e: "Julian Rotter – LOC." },
        { q: "„Człowiek jako naukowiec” to metafora:", o: ["Lewina", "Kelly'ego", "Mischela", "Allporta"], a: 1, e: "Kelly: ludzie tworzą konstrukty i testują je jak hipotezy." },
        { q: "Podpis behawioralny to pojęcie z teorii:", o: ["Mischela i Shody", "Epsteina", "Rottera", "Markus"], a: 0, e: "CAPS – wzorce „jeśli… to…”." },
        { q: "System doświadczeniowy i racjonalny wyróżnił:", o: ["Epstein", "Kelly", "Lewin", "Higgins"], a: 0, e: "CEST Epsteina." },
        { q: "Osoba przekonana, że jej sukces zależy od szczęścia, ma:", o: ["wewnętrzne LOC", "zewnętrzne LOC", "wysokie poczucie skuteczności", "silny konstrukt centralny"], a: 1, e: "Zewnętrzne umiejscowienie kontroli." },
        { q: "Pojęcie walencji (dodatniej i ujemnej) pochodzi od:", o: ["Lewina", "Rottera", "Kelly'ego", "Bandury"], a: 0, e: "Teoria pola Lewina." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "ja",
      title: "Psychologia Ja: James, Markus, Higgins i inni",
      notes: `
## William James
- **Ja podmiotowe (I)** – aktywny podmiot doświadczenia: doświadcza, myśli, czuje, działa; daje poczucie ciągłości i sprawstwa.
- **Ja przedmiotowe (Me)** – wszystko, co można uczynić przedmiotem refleksji: wiedza o sobie, cechy, role, zasoby.
- Składniki Ja przedmiotowego:
  - **materialne** – ciało, wygląd, ubiór, posiadane rzeczy,
  - **społeczne** – obraz siebie w relacjach; jest ich **wiele** (zależnie od grupy),
  - **duchowe** – cechy psychiczne, wartości, przekonania, cele.
- **Wielość Ja** – wiele Ja (zwłaszcza społecznych), aktywizowanych zależnie od sytuacji, współistnieje w jednej osobie.
- **Samoocena** – porównywanie się z własnymi standardami; reguluje działanie i wywołuje emocje (duma, wstyd, wina).
- **Działania powodowane przez Ja** – zachowania zgodne z obrazem siebie, służące celom tożsamościowym i spójności Ja.

## Tożsamość
Względnie trwałe poczucie tego, kim jestem: ciągłość, spójność, przynależność. Rodzaje: osobista, społeczna, kulturowa, narracyjna.

## T. B. Rogers – prototyp Ja
- Reprezentacja Ja ma strukturę **prototypu**: najbardziej typowe cechy w centrum, mniej typowe na peryferiach.
- Efekty prototypowe: **lepsze zapamiętywanie** informacji odniesionych do Ja, szybsze przetwarzanie, większa odporność prototypowych cech na zmianę.
- Prototyp Ja jest punktem odniesienia w spostrzeganiu innych (ocena podobieństwa, organizowanie informacji).

## Hazel Markus – schematy Ja
- **Schemat Ja** – poznawcze uogólnienie doświadczeń dotyczących siebie w danej dziedzinie; filtr interpretacyjny.
- **Schematycy** (mają schemat w danej dziedzinie): szybciej przetwarzają informacje, przywołują więcej przykładów swojego zachowania, lepiej przewidują swoje działania, odrzucają informacje sprzeczne ze schematem. **Aschematycy** – tego nie mają.
- Schematy Ja wpływają na percepcję innych (więcej wniosków, komponent emocjonalny).
- **Możliwe Ja** (Markus i Nurius) – kim mogę się stać: **idealne / pożądane**, **powinnościowe**, **niechciane (obawiane)**. Funkcje: motywacyjna, regulacyjna, emocjonalna, organizująca tożsamość.
- **Ja niezależne vs współzależne** (Markus i Kitayama):

| Niezależne (Zachód) | Współzależne (Wschód) |
|---|---|
| silne granice Ja | Ja zależne od relacji i norm |
| zachowanie wynika z postaw | zachowanie wynika z oczekiwań społecznych |
| niezależne od kontekstu | słabe granice Ja |

## Cantor i Kihlstrom
Ja jako **poznawcza reprezentacja**, część wiedzy o świecie. **Rodzina Ja** – hierarchiczny system reprezentacji Ja na różnych poziomach (Ja w relacjach z innymi i Ja „sam”).
- Pamięć **deklaratywna** – cechy i przekonania o sobie; **epizodyczna** – wspomnienia własnych zachowań; **proceduralna** – strategie działania i autoprezentacji.
- **Autoprezentacja** – autentyczna (zgodna z Ja) lub strategiczna (nastawiona na wywołanie wrażenia).

## Edward Tory Higgins – teoria rozbieżności Ja
- **Ukierunkowania Ja** (standardy): Ja **aktualne**, **idealne**, **powinnościowe**; każde w wersji **własnej** i **innych**.
- Koncepcja Ja = „kim jestem”; ukierunkowania Ja = „według jakich standardów się oceniam”.
- Funkcje ukierunkowań: motywacyjna, regulacyjna, emocjonalna, tożsamościowa.

| Rozbieżność | Emocje | Ryzyko |
|---|---|---|
| aktualne – **idealne** | smutek, rozczarowanie, przygnębienie | depresyjność, spadek samooceny |
| aktualne – **powinnościowe** | lęk, napięcie, poczucie winy | zaburzenia lękowe, chroniczny stres |

> Na pamięć: Idealne → Insatysfakcja (smutek). Powinnościowe → Poczucie winy i lęk.
`,
      flashcards: [
        ["Ja podmiotowe vs przedmiotowe (James)", "Podmiotowe (I) – aktywny podmiot, który doświadcza i działa. Przedmiotowe (Me) – to, co wiem o sobie, przedmiot refleksji."],
        ["Składniki Ja przedmiotowego wg Jamesa", "Ja materialne, społeczne i duchowe."],
        ["Ja społeczne u Jamesa", "Obraz siebie w relacjach; mamy wiele Ja społecznych, zależnie od grupy."],
        ["Rola samooceny w Ja", "Porównywanie się ze standardami; reguluje działanie i wywołuje emocje (duma, wstyd, wina)."],
        ["Rodzaje tożsamości", "Osobista, społeczna, kulturowa, narracyjna."],
        ["Teoria prototypu Ja (T. B. Rogers)", "Ja jest zbiorem cech uporządkowanych hierarchicznie: typowe w centrum, mniej typowe na peryferiach."],
        ["Efekty prototypowe Ja", "Lepsze zapamiętywanie informacji odniesionych do Ja, szybsze przetwarzanie, odporność cech prototypowych na zmianę."],
        ["Schemat Ja (Markus)", "Poznawcze uogólnienie doświadczeń dotyczących siebie w danej dziedzinie; filtr interpretacyjny."],
        ["Schematycy vs aschematycy", "Schematycy szybciej przetwarzają informacje, mają więcej przykładów, lepiej przewidują swoje zachowanie i odrzucają informacje sprzeczne ze schematem."],
        ["Rodzaje możliwych Ja", "Idealne (pożądane), powinnościowe, niechciane (obawiane)."],
        ["Funkcje możliwych Ja", "Motywacyjna, regulacyjna, emocjonalna, organizująca tożsamość."],
        ["Ja niezależne vs współzależne", "Niezależne – silne granice, zachowanie z postaw. Współzależne – Ja zależne od relacji i norm, słabe granice."],
        ["Rodzina Ja (Cantor i Kihlstrom)", "Hierarchiczny system reprezentacji Ja na różnych poziomach abstrakcji (Ja w relacjach i Ja „sam”)."],
        ["Ja a systemy pamięci", "Deklaratywna – cechy i przekonania o sobie; epizodyczna – wspomnienia zachowań; proceduralna – strategie działania i autoprezentacji."],
        ["Typy autoprezentacji", "Autentyczna (zgodna z Ja) i strategiczna (nastawiona na wywołanie wrażenia)."],
        ["Ukierunkowania Ja (Higgins)", "Ja aktualne, idealne i powinnościowe; każde w wersji własnej i innych."],
        ["Koncepcja Ja vs ukierunkowania Ja", "Koncepcja Ja = kim jestem (opis). Ukierunkowania = według jakich standardów się oceniam (normy)."],
        ["Skutki rozbieżności Ja aktualne – idealne", "Smutek, rozczarowanie, przygnębienie → depresyjność, spadek samooceny."],
        ["Skutki rozbieżności Ja aktualne – powinnościowe", "Lęk, napięcie, poczucie winy → zaburzenia lękowe, chroniczny stres."]
      ],
      quiz: [
        { q: "Rozbieżność między Ja aktualnym a powinnościowym wywołuje głównie:", o: ["smutek", "lęk i poczucie winy", "dumę", "nudę"], a: 1, e: "Higgins: powinnościowe → lęk, wina; idealne → smutek." },
        { q: "Ja materialne, społeczne i duchowe to składniki:", o: ["Ja podmiotowego", "Ja przedmiotowego", "proprium", "rodziny Ja"], a: 1, e: "James – składniki Me." },
        { q: "Kto badał schematy Ja i podział na schematyków i aschematyków?", o: ["Higgins", "Markus", "James", "Cantor"], a: 1, e: "Hazel Markus (1977)." },
        { q: "Wyobrażenie, kim boję się zostać, to:", o: ["Ja idealne", "Ja powinnościowe", "Ja niechciane", "Ja robocze"], a: 2, e: "Niechciane (obawiane) możliwe Ja." },
        { q: "Model Ja współzależnego charakteryzuje:", o: ["silne granice Ja", "zachowanie wynikające z postaw", "zależność od relacji i norm", "niezależność od kontekstu"], a: 2, e: "Markus i Kitayama – Ja współzależne (kultury kolektywistyczne)." },
        { q: "Lepsze zapamiętywanie informacji odniesionych do siebie to efekt opisany w teorii:", o: ["prototypu Ja", "rozbieżności Ja", "konstruktów", "autodeterminacji"], a: 0, e: "T. B. Rogers – efekty prototypowe." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "narracyjne",
      title: "Teorie narracyjne: McAdams, Tomkins, Hermans",
      notes: `
## Podejście narracyjne
Myślenie narracyjne opowiada o zmienności ludzkich **intencji, pragnień i celów w czasie** – nie w kategoriach przyczynowo-skutkowych. Narracje pokazują motywy, nadzieje i obawy.

## Dan McAdams
- Osobowość to **historia życia** (tożsamość narracyjna), która przekłada się na sposób życia.
- Tożsamość narracyjna = specyficzna organizacja **pamięci biograficznej** (podlega jej zniekształceniom).
- Rozwój: **ton narracyjny** (wczesne dzieciństwo, klimat emocjonalny) → **wyobrażenia** (obrazy, dźwięki, zapachy) → **temat i struktura** (lata szkolne) → **układ wartości** (adolescencja) → **główne postacie (imago)** (dorosłość) → **skrypt generatywny** (połowa życia: troska o kolejne pokolenia).
- Motywy: **siła i władza** (autonomia, osiągnięcia, kontrola) oraz **miłość i intymność** (bliskość, więź).
- Trzy poziomy opisu osobowości: **cechy** → **zadania i dążenia osobiste** w kontekście → **zintegrowana narracja o sobie** (tożsamość).

## Silvan Tomkins – teoria skryptów
- O sile motywacji decydują **emocje**, a nie popędy (popęd działa, gdy wzmocni go afekt).
- Każda emocja podstawowa ma własny wzorzec fizjologiczny, zwłaszcza **mimikę**.
- Życie jak sztuka teatralna: **sceny** (zapamiętane zdarzenia z co najmniej jedną emocją) łączone przez **skrypty** (reguły interpretowania scen).
- Sceny negatywne przeżywamy na zasadzie **analogii** (wciąż „ten sam scenariusz”), pozytywne – na zasadzie **różnic (wariantów)**.
- Skrypt **zaangażowania** (przewaga uczuć pozytywnych, oddanie celowi) vs skrypt **jądrowy** (ambiwalencja; to, co dawało radość, stało się zagrożeniem).

## Hubert Hermans – teoria wartościowania
- Osobowość jako **system znaczeń osobistych** (wartościowań).
- Wartościowanie jako **proces** (selekcjonowanie, porządkowanie i integrowanie doświadczeń) i jako **efekt** (jednostka znaczeniowa, zwykle zdanie).
- Dwa motywy: **umacnianie siebie** (S) i **pragnienie kontaktu i jedności z innymi** (O).
- Dysfunkcja: **dysocjacja** – pomijanie ważnych doświadczeń w systemie wartościowań lub brak uczuć tam, gdzie treść je sugeruje.
`,
      flashcards: [
        ["Osobowość wg McAdamsa", "Historia życia (tożsamość narracyjna) – organizacja pamięci biograficznej, która przekłada się na sposób życia."],
        ["3 poziomy opisu osobowości (McAdams)", "Cechy, zadania i dążenia osobiste w kontekście, zintegrowana narracja o sobie (tożsamość)."],
        ["Dwa główne motywy w narracjach (McAdams)", "Siła i władza oraz miłość i intymność."],
        ["Skrypt generatywny", "Etap połowy życia u McAdamsa: troska o innych i kolejne pokolenia."],
        ["Scena i skrypt (Tomkins)", "Scena – zapamiętane zdarzenie z co najmniej jedną emocją. Skrypt – reguły interpretowania i łączenia scen."],
        ["Co decyduje o sile motywacji wg Tomkinsa?", "Emocje (afekty), a nie popędy."],
        ["Skrypt zaangażowania vs jądrowy", "Zaangażowania – oddanie celowi, przewaga uczuć pozytywnych. Jądrowy – ambiwalencja, źródło radości staje się zagrożeniem."],
        ["Dwa motywy wg Hermansa", "Umacnianie siebie i pragnienie kontaktu i jedności z innymi."],
        ["Dysocjacja wg Hermansa", "Pomijanie ważnych doświadczeń w systemie wartościowań lub brak uczuć, choć treść je sugeruje."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Osobowość wg McAdamsa", "historia życia – tożsamość narracyjna"],
        ["2 motywy w narracjach (McAdams)", "siła/władza oraz miłość/intymność"],
        ["Skrypt generatywny", "troska o kolejne pokolenia"],
        ["Scena (Tomkins)", "zapamiętane zdarzenie z emocją"],
        ["Skrypt (Tomkins)", "reguły łączenia scen"],
        ["Źródło motywacji wg Tomkinsa", "emocje (afekty)"],
        ["Skrypt zaangażowania", "oddanie celowi, uczucia pozytywne"],
        ["Skrypt jądrowy", "ambiwalencja – radość staje się zagrożeniem"],
        ["2 motywy wg Hermansa", "umacnianie siebie i kontakt z innymi"],
        ["Dysocjacja wg Hermansa", "pomijanie ważnych doświadczeń"]
      ],
      quiz: [
        { q: "Pojęcie skryptu jądrowego wprowadził:", o: ["McAdams", "Tomkins", "Hermans", "Kelly"], a: 1, e: "Silvan Tomkins – teoria skryptów." },
        { q: "Teoria wartościowania to koncepcja:", o: ["Hermansa", "McAdamsa", "Rottera", "Allporta"], a: 0, e: "Hubert Hermans – system znaczeń osobistych." },
        { q: "Według McAdamsa osobowość to przede wszystkim:", o: ["zespół cech", "historia życia", "zespół nawyków", "system konstruktów"], a: 1, e: "Tożsamość narracyjna." }
      ]
    }
  ]
});
