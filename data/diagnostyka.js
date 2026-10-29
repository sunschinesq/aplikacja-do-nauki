// Wprowadzenie do diagnostyki psychologicznej (wykład: dr Małgorzata M. Kulik).
// Opracowane na podstawie plików z Dysku: Pytania egzamin.pdf, Prezentacja 1–9.docx (notatki z wykładów),
// slajdy 1.pptx–4.pptx i diagnostyka5–8.pptx.
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "diagnostyka",
  name: "Wprowadzenie do diagnostyki psychologicznej",
  short: "Diagnostyka",
  icon: "🔍",
  color: "#c2255c",
  // formaty egzaminów orientacyjne – zmień, gdy poznasz zasady
  exam: { questions: 30, minutes: 30, pass: 16, note: "Format orientacyjny (30 pytań, 30 minut, próg 16) – nie znam dokładnych zasad egzaminu." },
  openExam: { questions: 4, minutes: 30, note: "Pytania z listy „Pytania egzamin” (spisanej przez studentów po egzaminie u dr Kulik). Liczba pytań i czas są orientacyjne." },
  sources: [
    "Pytania egzamin.pdf (lista pytań i zagadnień z poprzednich lat)",
    "Prezentacja 1–9.docx (notatki z wykładów)",
    "Slajdy dr Małgorzaty M. Kulik: 1.pptx, 2.pptx, 3.pptx, 4.pptx, diagnostyka5–8.pptx",
    "Podręcznik: K. Stemplewska-Żakowicz, Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna (plik na Dysku – skan, nie udało się go odczytać)",
    "Kwestionariusze.docx – plik pusty"
  ],
  topics: [
    // ------------------------------------------------------------------
    {
      id: "czym-jest",
      title: "Czym jest diagnoza? Normy, klasyfikacje, modele",
      notes: `
Podręcznik: **Katarzyna Stemplewska-Żakowicz** (2013), *Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna*. Na egzaminie bywa pytanie o imię i nazwisko autorki!

## Trzy znaczenia terminu „diagnoza” (gr. diagnosis – rozpoznanie)
| Znaczenie | Po angielsku | Na czym polega |
|---|---|---|
| **Dziedzina nauki i praktyki** | psychological assessment | **dział psychologii stosowanej (aplikacyjnej)**, dyscyplina naukowa, praktyka |
| **Proces diagnozowania** | assessment / evaluation | diagnozowanie, badanie |
| **Efekt procesu** | diagnosis | rozpoznanie, zrozumienie, wyjaśnienie, prognoza, plan interwencji i jej ewaluacja; produkt zależny od celu |

## Diagnoza jako kompetencja (McClelland)
- Kompetencja diagnostyczna = umiejętność posłużenia się odpowiednimi metodami (wywiad, testy, obserwacja), by określić istotne dla usługi właściwości osoby, organizacji lub sytuacji.
- **Trzy filary: wiedza, umiejętności, wartości (etyka)**; fundament: **zdolności i osobowość**.
- **Kompetencja ≠ umiejętność** (to nie synonimy – umiejętność jest jednym z filarów kompetencji).
- Wiedza (to, co wiem – nabyta) vs zdolności (potencjał, na którym się opiera – fundament).

## Norma
Konstrukt naukowy pozwalający wnioskować o normalnych (= prawidłowych) zachowaniach człowieka.
- **Ilościowa / statystyczna** – normalne jest to, co przeciętne, najczęstsze.
- **Społeczno-kulturowa / przystosowawcza** – normalne jest to, co powszechne w danej kulturze; jednostka jest przeciętna i spełnia powinności społeczne.
- **Teoretyczna** – wzorzec idealny wyprowadzony z koncepcji biopsychospołecznej natury człowieka.

**Uspołeczniona kultura** (Lewicki; Sęk) – jednostka, zachowując się zgodnie z normami: nie narusza ładu społecznego, nie zagraża innym, może się rozwijać i przyczyniać do rozwoju społeczności.
**Optymalne funkcjonowanie** (Lewicki) – jednostka zaspokaja ważne dla siebie potrzeby **zgodnie z normami społecznymi**.

## Klasyfikacje
| Klasyfikacja | Najważniejsze |
|---|---|
| **ICD-10** (WHO) | opisowa i ateoretyczna; hierarchiczna, **alfanumeryczna** (np. F33, F70; somatyczne G35, L70), otwarta; **wieloosiowa**: I – rozpoznanie kliniczne, II – poziom niesprawności 0–5, III – czynniki kontekstowe; uznaje współwystępowanie zaburzeń |
| **DSM-5** | Amerykańskie Towarzystwo Psychiatryczne, **18 maja 2013**; obowiązuje w USA i armiach NATO; diagnostyka różnicowa przez drzewa decyzyjne i tabele; zawiera narzędzia |
| **DC: 0-3R** | dzieci **do 3 r.ż.**, polskie wydanie 2007, uzupełnia ICD i DSM; **5 osi**: I diagnoza podstawowa, II zaburzenia relacji, III choroby i problemy medyczne/rozwojowe, IV stresory psychospołeczne, V poziom rozwoju emocjonalnego |
| **ICD-11** | nowsza wersja klasyfikacji WHO |

## Trzy modele diagnozy
| | Nozologiczna (różnicowa) | Funkcjonalna | Interakcyjna (psychospołeczna) |
|---|---|---|---|
| Istota | model **medyczny**; psycholog ma status **pomocniczy**; kluczowe **różnicowanie** (wykluczenie innych jednostek) | wyjaśnienie problemu i jego **etiologii** w kategoriach teorii psychologicznej | **uzgadnianie** rozumienia problemu i sposobów rozwiązania z klientem |
| Pojęcia / etapy | symptom, zespół (syndrom), jednostka nozologiczna, rozpoznanie, prognoza, rokowanie, terapia | rozpoznanie problemu → wyjaśnienie → czynniki zaburzone → **zasoby i mocne strony** → analiza zasobów | **protodiagnoza** (produkt myśli kolektywnej) → badania → rezultat → ustosunkowanie klienta → negocjacje i przeformułowanie → uzgodnienie znaczeń |
| Zalety | obiektywne, porównywalne wyniki; jasne dla orzecznictwa | wykorzystanie w terapii, podejście podmiotowe, diagnoza zaburzeń osobowości i somatycznych | podmiotowość, diagnoza środowiska |
| Wady | **reifikacja** (uprzedmiotowienie), **etykietowanie** (pozorne wyjaśnienie przez nazwanie), stygmatyzacja, myślenie zdrowy–chory, **efekt Rumpelstilzchena** | pomija kontekst społeczny, czasochłonna, głównie w terapii | |

**Efekt Rumpelstilzchena** – lekarz nazywa chorobę, a pacjent uznaje, że skoro ją nazwano, specjalista nad nią panuje, i zrzeka się odpowiedzialności za leczenie.

> Na pamięć: 3 znaczenia = dziedzina · proces · efekt. 3 filary = wiedza · umiejętności · wartości. 3 normy = statystyczna · społeczno-kulturowa · teoretyczna. 3 modele = nozologiczny · funkcjonalny · interakcyjny.
`,
      flashcards: [
        ["Autorka podręcznika do diagnostyki", "Katarzyna Stemplewska-Żakowicz, „Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna”."],
        ["Trzy znaczenia terminu „diagnoza”", "Dziedzina nauki i praktyki, proces diagnozowania, efekt (wynik) tego procesu."],
        ["Diagnoza jako dziedzina to dział psychologii…", "Stosowanej (aplikacyjnej)."],
        ["Trzy filary kompetencji diagnostycznej", "Wiedza, umiejętności, wartości (etyka); fundament: zdolności i osobowość."],
        ["Czy kompetencja i umiejętność to synonimy?", "Nie – umiejętność jest jednym z filarów kompetencji."],
        ["Wiedza a zdolności", "Wiedza to filar (nabyta informacja); zdolności to fundament – potencjał, na którym opiera się kompetencja."],
        ["Czym jest norma w psychologii?", "Konstruktem naukowym pozwalającym wnioskować o normalnych (prawidłowych) zachowaniach człowieka."],
        ["Trzy rodzaje norm", "Ilościowa (statystyczna), społeczno-kulturowa (przystosowawcza), teoretyczna (wzorzec idealny)."],
        ["Uspołeczniona kultura", "Jednostka zgodnie z normami: nie narusza ładu społecznego, nie zagraża innym, może się rozwijać i przyczyniać do rozwoju społeczności."],
        ["Optymalne funkcjonowanie jednostki (Lewicki)", "Gdy jednostka zaspokaja ważne dla siebie potrzeby zgodnie z normami społecznymi."],
        ["Osie ICD-10", "I – rozpoznanie kliniczne, II – poziom niesprawności (0–5), III – czynniki kontekstowe."],
        ["Cechy ICD-10", "Opisowa, ateoretyczna, hierarchiczna, alfanumeryczna, otwarta, wieloosiowa; uznaje współwystępowanie zaburzeń."],
        ["DSM-5 – kto i kiedy?", "Amerykańskie Towarzystwo Psychiatryczne, 18 maja 2013; USA i armie NATO; drzewa decyzyjne."],
        ["DC: 0-3R", "Klasyfikacja zaburzeń u dzieci do 3 r.ż. (PL 2007), 5 osi, uzupełnia ICD i DSM."],
        ["Trzy modele diagnozy", "Nozologiczna (różnicowa), funkcjonalna, interakcyjna (psychospołeczna)."],
        ["Diagnoza nozologiczna – istota", "Model medyczny; kluczowe różnicowanie; psycholog ma rolę pomocniczą."],
        ["Wady diagnozy nozologicznej", "Reifikacja, etykietowanie, stygmatyzacja, myślenie zdrowy–chory, efekt Rumpelstilzchena."],
        ["Efekt Rumpelstilzchena", "Pacjent uznaje, że skoro choroba została nazwana, lekarz nad nią panuje, i zrzeka się odpowiedzialności za leczenie."],
        ["Etapy diagnozy funkcjonalnej", "Rozpoznanie problemu, wyjaśnienie, czynniki zaburzone, zasoby i mocne strony, analiza zasobów w radzeniu sobie."],
        ["Etapy diagnozy interakcyjnej", "Protodiagnoza → badania → rezultat → ustosunkowanie klienta → negocjacje i przeformułowanie → uzgodnienie znaczeń."],
        ["Protodiagnoza", "Wstępne rozumienie problemu przez klienta i jego otoczenie – „produkt myśli kolektywnej”."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Autorka podręcznika", "Katarzyna Stemplewska-Żakowicz"],
        ["Diagnoza jako dziedzina", "dział psychologii stosowanej (aplikacyjnej)"],
        ["Diagnoza jako proces", "diagnozowanie, badanie (assessment)"],
        ["Diagnoza jako efekt", "rozpoznanie, prognoza, plan interwencji"],
        ["3 filary kompetencji", "wiedza, umiejętności, wartości"],
        ["Fundament kompetencji", "zdolności i osobowość"],
        ["Kompetencja a umiejętność", "to nie synonimy"],
        ["Norma statystyczna", "to, co przeciętne i najczęstsze"],
        ["Norma społeczno-kulturowa", "to, co powszechne w danej kulturze"],
        ["Norma teoretyczna", "wzorzec idealny z teorii"],
        ["Optymalne funkcjonowanie (Lewicki)", "zaspokajanie potrzeb zgodnie z normami"],
        ["ICD-10", "klasyfikacja WHO, alfanumeryczna"],
        ["DSM-5", "klasyfikacja amerykańska (2013)"],
        ["DC: 0-3R", "dzieci do 3 r.ż., 5 osi"],
        ["Diagnoza nozologiczna", "model medyczny, różnicowanie"],
        ["Diagnoza funkcjonalna", "etiologia, zasoby i mocne strony"],
        ["Diagnoza interakcyjna", "uzgadnianie rozumienia z klientem"],
        ["Reifikacja", "uprzedmiotowienie"],
        ["Etykietowanie", "pozorne wyjaśnienie przez nazwanie"],
        ["Efekt Rumpelstilzchena", "nazwanie choroby = zrzeczenie się leczenia"]
      ],
      quiz: [
        { q: "Która odpowiedź NIE jest jednym z trzech znaczeń terminu „diagnoza”?", o: ["dziedzina nauki i praktyki", "proces diagnozowania", "efekt procesu diagnozowania", "narzędzie diagnostyczne"], a: 3, e: "Trzy znaczenia: dziedzina, proces, efekt." },
        { q: "Trzy filary kompetencji diagnostycznej to:", o: ["wiedza, umiejętności, wartości", "zdolności, osobowość, wiedza", "testy, wywiad, obserwacja", "trafność, rzetelność, normalizacja"], a: 0, e: "Zdolności i osobowość są fundamentem, nie filarami." },
        { q: "Norma tworzona na gruncie koncepcji natury człowieka jako wzorzec idealny to norma:", o: ["statystyczna", "społeczno-kulturowa", "teoretyczna", "kliniczna"], a: 2, e: "Norma teoretyczna = wzorzec idealny." },
        { q: "Ile osi ma DC: 0-3R?", o: ["3", "4", "5", "6"], a: 2, e: "5 osi; klasyfikacja dla dzieci do 3 r.ż." },
        { q: "Druga oś ICD-10 to:", o: ["rozpoznanie kliniczne", "poziom niesprawności 0–5", "czynniki kontekstowe", "stresory psychospołeczne"], a: 1, e: "I – rozpoznanie, II – niesprawność, III – kontekst." },
        { q: "W którym modelu diagnozy psycholog ma status pomocniczy?", o: ["nozologicznym", "funkcjonalnym", "interakcyjnym", "w żadnym"], a: 0, e: "Model nozologiczny powiela model medyczny." },
        { q: "Etykietowanie to:", o: ["uprzedmiotowienie pacjenta", "pozorne wyjaśnienie poprzez nazwanie", "przypisywanie choroby rodzinie", "nadawanie numeru w ICD"], a: 1, e: "Reifikacja = uprzedmiotowienie; etykietowanie = pozorne wyjaśnienie przez nazwanie." },
        { q: "Diagnoza będąca procesem uzgadniania rozumienia problemu z klientem to diagnoza:", o: ["nozologiczna", "funkcjonalna", "interakcyjna (psychospołeczna)", "statystyczna"], a: 2, e: "Etapy obejmują negocjacje i uzgodnienie znaczeń." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "paradygmaty",
      title: "Orzeczenia i opinie, paradygmaty i podejścia",
      notes: `
## Orzeczenia i opinie
- **Obligatoryjne** (= obowiązkowe) – wymagane ustawą; **nieobligatoryjne** – mogą, ale nie muszą być wydane.
- **Samodzielne** – wydaje jeden psycholog; **niesamodzielne** – zespół specjalistów.
- **Rozstrzygające** – decydują (np. może mieć broń albo nie); **nierozstrzygające** – instytucja może się nie zgodzić, opinię można podważyć.

| Obligatoryjne | Przykłady |
|---|---|
| samodzielne rozstrzygające | zdolność do pełnienia funkcji **sędziego, prokuratora, kuratora, komornika, ławnika**; kierowcy kat. C, D, tramwaj; przywracanie prawa jazdy; **pozwolenie na broń**; orzeczenia psychologiczno-penitencjarne; inspektor TD |
| samodzielne nierozstrzygające | **licencja detektywa** |
| niesamodzielne rozstrzygające (90% – edukacja) | orzeczenie o **kształceniu specjalnym**, opinie o specyficznych trudnościach w uczeniu się (dysleksja), niedostosowanie społeczne, nauczanie indywidualne, praca młodocianego, pomoc psychologiczno-pedagogiczna |
| niesamodzielne nierozstrzygające | pracownicy ochrony fizycznej, **wczesne wspomaganie rozwoju** (0–3 r.ż.), kandydaci do SOP |

**Nieobligatoryjne – wszystkie nierozstrzygające**: samodzielne (opinie **biegłych sądowych**, oddziaływania penitencjarne), niesamodzielne (opinie o nieletnich w **RODK** – np. opieka po rozwodzie; niezdolność do pracy dla celów rentowych; kandydaci do służb dyplomatycznych).

**Orzeczenie vs opinia** – orzeczenie trzeba wykonać dosłownie (rozstrzyga), opinia ma charakter wspierający.

## Modele współpracy psychologa z psychiatrą
- **Laborant** – badania na zlecenie,
- **Technik** – sam dobiera narzędzia,
- **Konsultant** – sam planuje i przeprowadza diagnozę,
- **Członek zespołu** – wspólne planowanie, decyzje i ewaluacja.

## Podejście nomotetyczne vs idiograficzne (Windelband, 1884)
| Nomotetyczne | Idiograficzne |
|---|---|
| nauki przyrodnicze; prawa ogólne, uniwersalne | nauki humanistyczne; zjawiska jednostkowe |
| prawidłowości wspólne ludziom, teza o ogólności cechy | koncentracja na jednostce i jej indywidualności |
| procedura wystandaryzowana, zobiektywizowana, znormalizowana | wywiad, obserwacja, analiza wytworów, studium przypadku |
| **skala normatywna** | **skala ipsatywna** |

**Straś-Romanowska** (psychologia jakościowa; spór z Paluchowskim – ilościowa): **fakty natury** (świat obiektywny, „jak? dlaczego?”) vs **fakty kultury** (świat subiektywny, interpretacja, „po co?”).

## Skala normatywna vs ipsatywna
- **Normatywna** – wynik osoby porównujemy z **innymi osobami** (rozkład normalny, wynik znormalizowany) → różnice **interindywidualne**.
- **Ipsatywna** – wynik porównujemy z **innymi wynikami tej samej osoby** (inne cechy lub inny pomiar) → różnice **intraindywidualne**, mocne i słabe strony, progres / regres / stagnacja (np. przed i po terapii).

## Ilościowe vs jakościowe
| Ilościowe | Jakościowe |
|---|---|
| wyjaśnienie i kontrola | zrozumienie |
| świat obiektywnie istniejący | konstruowanie świata |
| wiedza obiektywna | wiedza subiektywna |
| badacz – ekspert | badacz – świadek, uczestnik, ekspert |
| generalizacja; trafne, rzetelne, replikowalne | „lokalny” aspekt wiedzy |

## Diagnoza kliniczna vs statystyczna
- **Kliniczna** – diagnosta łączy dane i wyciąga wnioski metodami **nieformalnymi, subiektywnymi** (Grove i in., 2009).
- **Statystyczna = formalna = aktuarialna = algorytmiczna** – wnioski według określonego **algorytmu**.
- **Paul Meehl** (1954) – książka o predykcji klinicznej i statystycznej.
`,
      flashcards: [
        ["Synonim „obligatoryjny”", "Obowiązkowy."],
        ["Orzeczenie samodzielne vs niesamodzielne", "Samodzielne – wydaje jeden psycholog; niesamodzielne – zespół specjalistów."],
        ["Orzeczenie rozstrzygające vs nierozstrzygające", "Rozstrzygające decyduje (niepodważalne); nierozstrzygające może zostać podważone, instytucja może się nie zgodzić."],
        ["Przykłady orzeczeń obligatoryjnych samodzielnych rozstrzygających", "Zdolność do pełnienia funkcji sędziego, prokuratora, kuratora, komornika, ławnika; kierowcy zawodowi; pozwolenie na broń."],
        ["Licencja detektywa to orzeczenie…", "Obligatoryjne, samodzielne, nierozstrzygające."],
        ["Czego dotyczy 90% orzeczeń obligatoryjnych niesamodzielnych rozstrzygających?", "Systemu edukacji (np. kształcenie specjalne)."],
        ["Jaki charakter mają wszystkie orzeczenia nieobligatoryjne?", "Nierozstrzygający (np. opinie biegłych sądowych, RODK)."],
        ["Orzeczenie a opinia", "Orzeczenie trzeba wykonać dosłownie; opinia ma charakter wspierający."],
        ["4 modele współpracy psychologa z psychiatrą", "Laborant, technik, konsultant, członek zespołu."],
        ["Podejście nomotetyczne", "Szuka ogólnych, uniwersalnych praw i prawidłowości wspólnych ludziom."],
        ["Podejście idiograficzne", "Koncentruje się na jednostce i jej indywidualności."],
        ["Kto podzielił nauki na nomotetyczne i idiograficzne?", "Wilhelm Windelband (1884)."],
        ["Fakty natury vs fakty kultury (Straś-Romanowska)", "Natury: świat obiektywny, „jak? dlaczego?”. Kultury: świat subiektywny, interpretacja, „po co?”."],
        ["Skala normatywna", "Wynik porównywany z wynikami innych osób – różnice interindywidualne."],
        ["Skala ipsatywna", "Wynik porównywany z innymi wynikami tej samej osoby – różnice intraindywidualne."],
        ["Diagnoza statystyczna – synonimy", "Formalna, aktuarialna, algorytmiczna."],
        ["Diagnoza kliniczna", "Diagnosta łączy dane i wyciąga wnioski metodami nieformalnymi, subiektywnymi."],
        ["Kto porównał predykcję kliniczną i statystyczną?", "Paul E. Meehl (1954)."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Orzeczenie obligatoryjne", "wymagane ustawą"],
        ["Opinia nieobligatoryjna", "może, ale nie musi być wydana"],
        ["Orzeczenie rozstrzygające", "decyduje, np. o pozwoleniu na broń"],
        ["Orzeczenie a opinia", "orzeczenie się wykonuje, opinia wspiera"],
        ["Licencja detektywa", "samodzielna nierozstrzygająca"],
        ["Kształcenie specjalne", "niesamodzielne rozstrzygające"],
        ["Opinie biegłych sądowych", "nieobligatoryjne"],
        ["Model laboranta", "badania na zlecenie psychiatry"],
        ["Model członka zespołu", "wspólne planowanie i decyzje"],
        ["Podejście nomotetyczne", "prawa ogólne, skala normatywna"],
        ["Podejście idiograficzne", "jednostka, skala ipsatywna"],
        ["Autor podziału nomotetyczne/idiograficzne", "Windelband (1884)"],
        ["Skala normatywna", "porównanie z innymi osobami"],
        ["Skala ipsatywna", "porównanie z wynikami tej samej osoby"],
        ["Fakty natury", "świat obiektywny – jak? dlaczego?"],
        ["Fakty kultury", "świat subiektywny – po co?"],
        ["Diagnoza kliniczna", "nieformalne, subiektywne łączenie danych"],
        ["Diagnoza statystyczna", "formalna, aktuarialna, algorytmiczna"],
        ["Paul Meehl", "predykcja kliniczna vs statystyczna"]
      ],
      quiz: [
        { q: "Pozwolenie na broń to orzeczenie:", o: ["nieobligatoryjne, samodzielne", "obligatoryjne, samodzielne, rozstrzygające", "obligatoryjne, niesamodzielne, nierozstrzygające", "obligatoryjne, samodzielne, nierozstrzygające"], a: 1, e: "Jak zaświadczenia dla sędziów czy kierowców zawodowych." },
        { q: "Opinie biegłych sądowych są:", o: ["obligatoryjne i rozstrzygające", "nieobligatoryjne i nierozstrzygające", "obligatoryjne i niesamodzielne", "nieobligatoryjne i rozstrzygające"], a: 1, e: "Wszystkie nieobligatoryjne są nierozstrzygające." },
        { q: "Porównanie wyników osoby przed i po terapii to zastosowanie skali:", o: ["normatywnej", "ipsatywnej", "stenowej", "nominalnej"], a: 1, e: "Ipsatywna – różnice intraindywidualne." },
        { q: "Diagnoza aktuarialna to inaczej diagnoza:", o: ["kliniczna", "statystyczna (algorytmiczna)", "funkcjonalna", "interakcyjna"], a: 1, e: "Statystyczna = formalna = aktuarialna = algorytmiczna." },
        { q: "Model, w którym psycholog sam planuje i przeprowadza diagnozę na podstawie dotychczasowych badań, to model:", o: ["laboranta", "technika", "konsultanta", "członka zespołu"], a: 2, e: "Technik tylko dobiera narzędzia; konsultant planuje i przeprowadza diagnozę." },
        { q: "Podejście idiograficzne posługuje się głównie:", o: ["testami znormalizowanymi", "skalą normatywną", "wywiadem, obserwacją, studium przypadku", "metaanalizą"], a: 2, e: "Poznanie indywidualnego świata osoby." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "kontekst",
      title: "Rzeczywistość badania: diagnosta, efekty, błędy diagnostyczne",
      notes: `
## Kontekst badania
- **Sytuacyjny** – miejsce, czas, cel (inaczej w szkole, inaczej w zakładzie karnym).
- **Kulturowy** – świadomość różnorodności i kompetencja kulturowa.
- **Społeczny** – interakcja dwóch osób (płeć, wiek, zawód).

**Rola** – zachowanie oczekiwane od osoby z racji jej pozycji. Rolę diagnosty definiują **etyka** i **orientacja teoretyczna**.

## Cechy dobrego diagnosty (Corey i Corey, 2002)
**Uważne słuchanie · odwaga** (przyznanie się do błędu) **· emocjonalna obecność · dystans psychologiczny · dobra wola i troska · elastyczność · gotowość do modelowania · szczerość** (spójność komunikatów werbalnych i niewerbalnych).

## Społeczny kontekst badania (Stemplewska-Żakowicz)
**1. Spostrzeganie osoby badanej**
- **Efekt Pigmaliona** = samospełniająca się przepowiednia: moje przekonanie → moje działanie → przekonania drugiej osoby → jej zachowanie.
- **Efekt aureoli (halo)**: **efekt Galatei** (efekt nimbu) – pozytywne pierwsze wrażenie, diagnosta bardziej otwarty; **efekt Golema** – negatywne pierwsze wrażenie, diagnosta usztywniony.
- **Oczekiwania diagnosty**: wysokie – sztywność, dystans, ścisłe procedury; niskie – więcej swobody.
- **Poczucie kontroli** – zbyt wysokie → dominacja, większy opór lękowego klienta.
- Uproszczone spostrzeganie (system wartości, orientacja teoretyczna), **stereotypy**: generalizacja, „wiem wszystko”, skłonność do oceniania.
- Jak nie ulec stereotypom: **autoanaliza**, dbałość o **dystans psychologiczny**, **dążenie do zrozumienia** (pytać, parafrazować).

**2. Spostrzeganie diagnosty przez osobę badaną** – autorytet (Milgram), cel diagnozy (sąd, szkoła), cechy socjodemograficzne diagnosty.

**3. Nieświadoma akomodacja** – otwartość psychologa sprzyja otwartości badanego; **triada Rogersa** (akceptacja, empatia, autentyczność); teoria akomodacji komunikacji (CAT): **dopasowanie = akomodacja = konwergencja**.

**4. Behawioralne potwierdzenie** – badany nieświadomie zachowuje się tak, jak oczekuje diagnosta.

## Postawy psychologa – źródło błędów
| Postawa | Na czym polega |
|---|---|
| alarmistyczna | dramatyzowanie, wyolbrzymianie problemu |
| polipragmatyczna | jak najwięcej testów i badań |
| demonstratorska | popisywanie się własnym doświadczeniem |
| nihilistyczna | „nic się nie da zrobić” – odbieranie nadziei |
| nadmiernego zaangażowania | brak dystansu, fałszywa empatia |
| zarozumiałości | „wiem wszystko po 3 minutach”, wykraczanie poza kompetencje |

## Czynniki zniekształcające diagnozę
- **Zewnętrzne**: kontekst, ocena wiarygodności źródła, błędy diagnosty.
- **Wewnętrzne** (po stronie badanego): poziom **wglądu**, **motywacja** (za mała i za duża), **lęk przed oceną**.

## Błędy diagnostyczne
- **Techniczne** – zła aparatura, błędne użycie narzędzia (np. test bez norm w diagnozie indywidualnej).
- **Obserwacji** – nie widzi istniejących objawów, widzi nieistniejące, nie wywołuje objawów, widzi je w zmienionej postaci.
- **Rozumowania** – **niezupełnej eliminacji** (pomija alternatywy, za wcześnie definiuje problem), **fałszywej przyczyny**, **atrybucji** (przypisuje cechy, których nie ma), **pomieszania walorów objawów** (objaw chwilowy uznaje za stały i odwrotnie).
- **Błąd jatrogenny** – szkoda wyrządzona przez personel lub sam proces diagnozy/leczenia.
`,
      flashcards: [
        ["Trzy rodzaje kontekstu badania", "Sytuacyjny (miejsce, czas, cel), kulturowy, społeczny."],
        ["Dwa czynniki definiujące rolę diagnosty", "Etyka i orientacja teoretyczna."],
        ["Cechy dobrego diagnosty (Corey i Corey)", "Uważne słuchanie, odwaga, emocjonalna obecność, dystans psychologiczny, dobra wola i troska, elastyczność, gotowość do modelowania, szczerość."],
        ["Efekt Pigmaliona", "Samospełniająca się przepowiednia: przekonanie diagnosty wpływa na jego działanie, a to na zachowanie drugiej osoby."],
        ["Efekt Galatei", "Pozytywne pierwsze wrażenie (efekt nimbu) – diagnosta staje się bardziej otwarty."],
        ["Efekt Golema", "Negatywne pierwsze wrażenie – diagnosta staje się sztywny."],
        ["Jak nie ulec stereotypom?", "Autoanaliza, dbałość o dystans psychologiczny, dążenie do zrozumienia (pytanie, parafrazowanie)."],
        ["Synonimy zjawiska dopasowania", "Akomodacja = konwergencja (teoria akomodacji komunikacji, CAT)."],
        ["Triada Rogersa", "Akceptacja, empatia, autentyczność."],
        ["Behawioralne potwierdzenie", "Badany nieświadomie zachowuje się tak, jak oczekuje diagnosta."],
        ["Postawa polipragmatyczna", "Przekonanie, że trzeba zrobić jak najwięcej testów i badań."],
        ["Postawa nihilistyczna", "Przedstawianie problemu tak, że „nic nie da się zrobić” – odbieranie nadziei."],
        ["Postawa alarmistyczna", "Dramatyzowanie i wyolbrzymianie problemu."],
        ["Wewnętrzne czynniki zniekształcające diagnozę", "Poziom wglądu, motywacja, lęk przed oceną."],
        ["Błąd niezupełnej eliminacji", "Pominięcie alternatyw – zbyt wczesne zdefiniowanie problemu."],
        ["Błąd pomieszania walorów objawów", "Uznanie objawu chwilowego za stały (lub odwrotnie)."],
        ["Błąd jatrogenny", "Szkoda wyrządzona przez personel lub sam proces diagnozy/leczenia."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Kontekst sytuacyjny", "miejsce, czas, cel badania"],
        ["Kontekst kulturowy", "różnorodność i kompetencja kulturowa"],
        ["Rola diagnosty", "definiują ją etyka i orientacja teoretyczna"],
        ["Efekt Pigmaliona", "samospełniająca się przepowiednia"],
        ["Efekt Galatei", "pozytywne pierwsze wrażenie"],
        ["Efekt Golema", "negatywne pierwsze wrażenie"],
        ["Akomodacja", "dopasowanie = konwergencja"],
        ["Behawioralne potwierdzenie", "badany robi to, czego oczekuje diagnosta"],
        ["Postawa alarmistyczna", "dramatyzowanie problemu"],
        ["Postawa polipragmatyczna", "jak najwięcej testów"],
        ["Postawa nihilistyczna", "„nic się nie da zrobić”"],
        ["Postawa demonstratorska", "popisywanie się doświadczeniem"],
        ["Błąd niezupełnej eliminacji", "pominięcie alternatyw"],
        ["Błąd jatrogenny", "szkoda wyrządzona przez personel"],
        ["Błąd techniczny", "np. test bez norm w diagnozie"]
      ],
      quiz: [
        { q: "Negatywne pierwsze wrażenie, przez które diagnosta staje się sztywny, to efekt:", o: ["Galatei", "Golema", "Pigmaliona", "Rumpelstilzchena"], a: 1, e: "Galatea – pozytywny, Golem – negatywny." },
        { q: "Samospełniająca się przepowiednia to inaczej efekt:", o: ["Pigmaliona", "halo", "Golema", "akomodacji"], a: 0, e: "Efekt Pigmaliona." },
        { q: "Diagnosta zleca kilkanaście testów „na wszelki wypadek”. To postawa:", o: ["demonstratorska", "polipragmatyczna", "alarmistyczna", "nihilistyczna"], a: 1, e: "Polipragmatyczna – jak najwięcej badań." },
        { q: "Który czynnik jest WEWNĘTRZNYM czynnikiem zniekształcającym diagnozę?", o: ["kontekst badania", "błędy diagnosty", "lęk osoby badanej przed oceną", "wiarygodność źródła"], a: 2, e: "Wewnętrzne: wgląd, motywacja, lęk przed oceną." },
        { q: "Uznanie chwilowego smutku za stałą cechę to błąd:", o: ["niezupełnej eliminacji", "fałszywej przyczyny", "pomieszania walorów objawów", "techniczny"], a: 2, e: "Objaw niestały uznany za stały." },
        { q: "Która cecha NIE należy do cech dobrego diagnosty wg Corey i Corey?", o: ["odwaga", "dystans psychologiczny", "elastyczność", "dominacja"], a: 3, e: "Dominacja (wysokie poczucie kontroli) nasila opór klienta." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "etyka",
      title: "Etyka diagnosty i psychologa",
      notes: `
## Kodeksy
- **Kodeks Etyczno-Zawodowy Psychologa** (PTP, 1991) – psycholog jako praktyk, badacz, nauczyciel i popularyzator.
- **Meta-Kodeks Etyczny EFPA** (1995, 2005) – 4 zasady: **poszanowanie praw i godności osoby, kompetencja, odpowiedzialność, prawość (integrity)**.
- Klient = osoba badana, pacjent, osoba zależna od psychologa, organizacja.

## Poszanowanie praw i godności
- Osoba jest **wartością samą w sobie**, nie środkiem do celu; prawa człowieka niczym nieograniczone.
- Uwzględnianie różnic indywidualnych, unikanie uprzedzeń i dyskryminacji.
- Praktycznie: **prywatność i poufność**, **świadoma i dobrowolna zgoda**, **samostanowienie** (wyjątek: ubezwłasnowolnienie, psychologia sądowa).

**Poufność – wyjątki**: informowanie opiekunów osoby małoletniej, pytania sądu (tylko to, co istotne), poważne zagrożenie życia lub zdrowia. Dane w materiałach zawodowych (superwizja) – zatarte lub zmienione. Klient sam decyduje o swojej diagnozie.

## Art. 240 § 1 Kodeksu karnego
Poważne przestępstwa wobec dzieci (ciężki uszczerbek na zdrowiu, zgwałcenie, wykorzystanie seksualne bezradności, wykorzystanie seksualne): **każdy** ma obowiązek zawiadomić organy ścigania, jeśli ma **wiarygodną** informację o ich popełnieniu, przygotowaniu lub usiłowaniu. Za niezawiadomienie – **do 3 lat** pozbawienia wolności.

## Świadoma zgoda
- Klient rozumie wszystkie istotne okoliczności i konsekwencje; zgoda **pisemna**; rzeczywista swoboda (bez presji, przymusu i obietnic korzyści).
- **Każde badanie dziecka (do 18 r.ż.) wymaga pisemnej zgody rodzica/opiekuna prawnego** (podkreślane na wykładzie!).
- **Standardy Diagnozy Psychologicznej w Edukacji** (PTP i RPD, 2018): **podwójna zgoda** (rodzic i dziecko) **powyżej 16 r.ż.**; osobna zgoda na lustro weneckie i nagrywanie; badanie bez zgody dziecka możliwe, gdy uzyskanie jej jest niemożliwe (wiek, stan zdrowia).

**13 okoliczności świadomej zgody** (Stemplewska-Żakowicz) – klient musi znać:
- cel i charakter badania,
- opłatę,
- zakres odpowiedzialności własnej i psychologa,
- ewentualny udział strony trzeciej,
- ochronę poufności i jej ograniczenia,
- spodziewane korzyści,
- ewentualne ryzyko,
- alternatywy dla badania,
- konsekwencje niepoddania się badaniu,
- możliwość zadawania pytań,
- możliwość odmowy lub wycofania się w każdej chwili bez uprzedzenia,
- okres, którego dotyczy zgoda,
- sposób unieważnienia zgody.

## Kompetencja
Świadomość etyczna · **granice kompetencji** (kierowanie do innych specjalistów) · **granice procedur** (np. wiek) · ostrożność wobec **efektu nowości/mody** · stały rozwój · **„nadwątlona zdolność osądu”** – czasowa lub stała niezdolność do praktyki (np. depresja → przerwa).

## Odpowiedzialność
Za jakość i skutki pracy, za dobre imię zawodu, wysokie standardy, unikanie szkody, **ciągłość opieki**, **rozszerzona odpowiedzialność** (superwizja, edukacja), rozwiązywanie dylematów etycznych.

## Prawość
Świadomość ograniczeń, jasne przedstawianie roli; uczciwość co do wykształcenia, kwalifikacji i cennika; zakaz wykorzystywania kontaktu zawodowego do celów osobistych, religijnych, politycznych, ideologicznych.

## Diagnoza jako spotkanie i jako interwencja
- **Spotkanie**: co najmniej 2 osoby, nie zawsze bezpośrednio; **setting** (czas, miejsce, osoby, cel). Rola psychologa to „ingerencja w sposób istnienia drugiego człowieka […], której skutki mogą być nieodwracalne” (Kodeks PTP).
- **Interwencja**: diagnoza zawsze coś zmienia (wynik, autorefleksja, relacja). Jeśli kontakt nie ma być pomocny – **nie może przynieść uszczerbku**.

## Konflikt ról i interesów
- **Konflikt ról (podwójna relacja)** – psycholog jest wobec osoby jednocześnie w roli zawodowej i innej.
- **Relacja wykorzystująca** – wykorzystanie relacji zawodowej do celów prywatnych lub korzyści.
- **Model decyzyjny Gottlieba** (1993): **rozkład władzy, czas trwania relacji, jednoznaczność jej zakończenia**. Im bardziej nierówna władza, dłuższa relacja i mniej jasne zakończenie, tym większe ryzyko nadużycia. Podwójne relacje **nie są z definicji nieetyczne**.
- **Konflikt interesów**: usługi dla kilku klientów, różnice wartości, usługi na rzecz strony trzeciej.
- **Klient w sensie prawnym** (płaci) vs **w sensie moralnym** (podmiot oddziaływań).
- Problem lojalności (nauczyciel, rodzice, instytucja, uczeń) – nie tworzymy koalicji przeciw badanemu.
- Ujawniamy tylko: cel diagnozy, odpowiedzi na pytania (np. sądu), informacje potrzebne do zaplanowania pomocy.

## Granice w relacji diagnostycznej
Ograniczenia wniosków i ich komunikowanie · czasoprzestrzeń · kultura · granice interpersonalne · formy grzecznościowe · dotyk · relacje uczuciowe i erotyczne.
`,
      flashcards: [
        ["4 zasady Meta-Kodeksu EFPA", "Poszanowanie praw i godności osoby, kompetencja, odpowiedzialność, prawość."],
        ["Wyjątki od poufności", "Informowanie opiekunów małoletniego, pytania sądu, poważne zagrożenie życia lub zdrowia."],
        ["Art. 240 § 1 k.k. – czego dotyczy?", "Obowiązku zawiadomienia o poważnych przestępstwach wobec dzieci (wiarygodna informacja); kara za zaniechanie do 3 lat."],
        ["Cechy świadomej zgody", "Pełne zrozumienie okoliczności i konsekwencji, forma pisemna, rzeczywista swoboda, brak presji i obietnic korzyści."],
        ["Czy można zbadać dziecko bez zgody rodzica?", "Nie – każde badanie osoby do 18 r.ż. wymaga pisemnej zgody rodzica/opiekuna prawnego."],
        ["Od jakiego wieku podwójna zgoda (rodzic + dziecko)?", "Powyżej 16 r.ż. (Standardy Diagnozy Psychologicznej w Edukacji, 2018)."],
        ["Wymień okoliczności świadomej zgody (min. 7)", "Cel i charakter, opłata, odpowiedzialność, strona trzecia, poufność i jej granice, korzyści, ryzyko, alternatywy, konsekwencje odmowy, pytania, możliwość wycofania się, okres zgody, sposób unieważnienia."],
        ["„Nadwątlona zdolność osądu”", "Czasowa lub stała niezdolność psychologa do praktyki (np. przez depresję) – trzeba przerwać pracę."],
        ["Elementy kompetencji wg kodeksu", "Świadomość etyczna, granice kompetencji, granice procedur, ostrożność wobec mody, stały rozwój."],
        ["Diagnoza jako interwencja – zasada", "Diagnoza zawsze coś zmienia; jeśli kontakt nie ma pomóc, nie może zaszkodzić."],
        ["Setting", "Usytuowanie spotkania: czas, miejsce, osoby i cel."],
        ["Konflikt ról (podwójna relacja)", "Psycholog wobec tej samej osoby jest jednocześnie w roli zawodowej i innej."],
        ["Model decyzyjny Gottlieba – 3 wymiary", "Rozkład władzy, czas trwania relacji, jednoznaczność jej zakończenia."],
        ["Klient w sensie prawnym vs moralnym", "Prawnym – płaci za usługę; moralnym – jest podmiotem oddziaływań."],
        ["Co psycholog może ujawnić stronie trzeciej?", "Informacje będące celem diagnozy, odpowiedzi na pytania (np. sądu) i informacje potrzebne do zaplanowania pomocy."],
        ["Granice w relacji diagnostycznej", "Ograniczenia wniosków, czasoprzestrzeń, kultura, granice interpersonalne, formy grzecznościowe, dotyk, relacje uczuciowe."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Kodeks PTP", "Kodeks Etyczno-Zawodowy Psychologa (1991)"],
        ["Meta-Kodeks EFPA", "godność, kompetencja, odpowiedzialność, prawość"],
        ["Zgoda na badanie dziecka", "pisemna zgoda rodzica do 18 r.ż."],
        ["Podwójna zgoda", "rodzic i dziecko powyżej 16 r.ż."],
        ["Art. 240 KK", "obowiązek zawiadomienia o przestępstwie"],
        ["Kara za niezawiadomienie", "do 3 lat pozbawienia wolności"],
        ["Okoliczności świadomej zgody", "13 (Stemplewska-Żakowicz)"],
        ["Wyjątek od poufności", "zagrożenie życia lub zdrowia"],
        ["Nadwątlona zdolność osądu", "czasowa niezdolność do praktyki"],
        ["Model Gottlieba", "władza, czas relacji, jasność zakończenia"],
        ["Konflikt ról", "podwójna relacja"],
        ["Relacja wykorzystująca", "relacja zawodowa dla prywatnych korzyści"],
        ["Klient w sensie prawnym", "ten, kto płaci"],
        ["Klient w sensie moralnym", "podmiot oddziaływań"],
        ["Diagnoza jako interwencja", "zawsze coś zmienia, nie może szkodzić"]
      ],
      quiz: [
        { q: "Która zasada NIE należy do Meta-Kodeksu EFPA?", o: ["kompetencja", "odpowiedzialność", "prawość", "skuteczność"], a: 3, e: "Cztery zasady: godność, kompetencja, odpowiedzialność, prawość." },
        { q: "Rodzice 15-latka nie zgadzają się na badanie, choć nastolatek chce. Psycholog:", o: ["może zbadać, bo dziecko się zgodziło", "nie może przeprowadzić badania", "może, jeśli zgodzi się szkoła", "może po skończeniu 16 lat bez zgody rodzica"], a: 1, e: "Badanie osoby do 18 r.ż. wymaga pisemnej zgody rodzica/opiekuna." },
        { q: "Za niezawiadomienie o poważnym przestępstwie wobec dziecka grozi kara do:", o: ["1 roku", "2 lat", "3 lat", "5 lat"], a: 2, e: "Art. 240 § 1 k.k. – do 3 lat pozbawienia wolności." },
        { q: "Model decyzyjny Gottlieba NIE uwzględnia:", o: ["rozkładu władzy", "czasu trwania relacji", "jednoznaczności zakończenia relacji", "wieku klienta"], a: 3, e: "Trzy wymiary: władza, czas, zakończenie." },
        { q: "Zgoda klienta na badanie powinna mieć formę:", o: ["ustną", "pisemną", "dowolną", "w obecności świadka"], a: 1, e: "Zgoda o charakterze pisemnym." },
        { q: "Osoba płacąca za badanie dziecka to klient w sensie:", o: ["moralnym", "prawnym", "terapeutycznym", "diagnostycznym"], a: 1, e: "Klient w sensie moralnym to dziecko – podmiot oddziaływań." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "proces",
      title: "Przebieg procesu diagnostycznego i jego modele",
      notes: `
## Podstawowe pojęcia
- **Hipoteza** (gr. hipothesis – domysł) – wymaga weryfikacji, musi być sprawdzalna i racjonalna; **opisowa** (np. obniżony nastrój) lub **wyjaśniająca** (np. depresja, bo zmarła matka).
- **Wskaźnik** – charakter empiryczny; to, po czym poznajemy odpowiedź na pytanie; zewnętrzny, obserwowalny lub mierzalny przejaw stanu lub procesu (np. wynik testu).
- **Konceptualizacja przypadku** = sformułowanie **diagnostyczne** (jak jest?) + **kliniczne** (dlaczego?) + **dotyczące interwencji** (co zrobić?) (Sperry i Sperry, 2012). Słysz (2017): uporządkowany zbiór hipotez o czynnikach etiologicznych, predysponujących i podtrzymujących, uzasadnionych teorią i danymi, będący podstawą działań terapeutycznych.
- **Diagnoza ≠ testowanie** – liczne źródła danych (kwestionariusz + wywiad + obserwacja), współwystępujące uwarunkowania, testowanie hipotez, wnioskowanie, całościowe rozumienie.

## Modele postępowania diagnosty
| Model | Typ |
|---|---|
| Maloney i Ward (1976) | opisowy |
| Procedura pięciu pytań Szustrowej (1987) | **normatywny** |
| Paluchowski (1991, 2001, 2007) | opisowy, **iteracyjny** |
| GAP – Fernández-Ballesteros (2001) | **integracyjny** |
| Cronbach i Gleser (1957), modele aktuarialne i statystyczne | formalne, normatywne modele decyzji |

## Model Maloneya i Warda – 7 faz
- **1** – wyjściowy zbiór danych, dokumentacja, pierwsze spotkanie, **protodiagnoza** (to, że ktoś szuka pomocy, zwykle oznacza, że problem jest realny).
- **2** – hipotezy **cząstkowe**, także alternatywne; uwzględnij **proporcję podstawową** (jak często zjawisko występuje w populacji; rzadkie nie znaczy niemożliwe).
- **3** – badania: hipotezy cząstkowe **odrzucamy, modyfikujemy lub akceptujemy**.
- **4** – hipotezy **ogólne** (opisowe lub wyjaśniające).
- **5** – integracja hipotez – **dynamiczny model osoby** (osobowość + sytuacja życiowa).
- **6** – zmienne sytuacyjne – konkretne sytuacje życiowe klienta.
- **7** – **predykcja zachowania** i decyzje (interakcja czynników osobowościowych i sytuacyjnych).

## Procedura pięciu pytań Teresy Szustrowej (1987)
Adaptacja zasad wywiadu swobodnego. 5 pytań przy **planowaniu**; przy **analizie wyników** te same pytania w **odwrotnej kolejności**.
- **Cel badania** – po co prowadzę badanie?
- **Orientacja teoretyczna** – jakich kategorii i terminów użyję?
- **Pytania i hipotezy diagnostyczne** – na jakie pytania szukam odpowiedzi?
- **Dobór wskaźników** – jakich informacji potrzebuję?
- **Operacjonalizacja wskaźników** – co muszę zrobić (jakie metody), żeby je uzyskać?

## Model Paluchowskiego – 4 etapy (proces iteracyjny)
- **Prediagnostyczny** – kontekst społeczny, kulturowy, instytucjonalny; oczekiwania i role; protodiagnoza.
- **Badanie diagnostyczne** – problem diagnostyczny, hipotezy robocze, zbiór danych (obserwacja, dokumentacja, wywiady, wytwory).
- **Opis i interpretacja** – wyjście poza informacje, interpretacja w świetle teorii, konceptualizacja, opinia lub orzeczenie, prognoza.
- **Interwencja** – zalecenia, przekazanie wyników.

## Model GAP (Guidelines for the Assessment Process)
Całościowy, uwzględnia standardy metodologiczne, etyczne i profesjonalne; obejmuje też monitorowanie i ewaluację interwencji.
- **Analiza przypadku** – oczekiwania i skargi, testowalne hipotezy, zbieranie i przetwarzanie informacji.
- **Organizowanie i raportowanie wyników** – integracja, raport, dyskusja i decyzja.
- **Planowanie interwencji** – hipotezy dotyczące interwencji, jej przeprowadzenie.
- **Ocena interwencji i odroczone badanie kontrolne** – powtarzane aż do rozwiązania problemu.
`,
      flashcards: [
        ["Hipoteza opisowa vs wyjaśniająca", "Opisowa – jak jest (np. obniżony nastrój). Wyjaśniająca – dlaczego (np. depresja po śmierci matki)."],
        ["Wskaźnik", "Empiryczny, obserwowalny lub mierzalny przejaw stanu lub procesu, po którym poznajemy odpowiedź na pytanie (np. wynik testu)."],
        ["Konceptualizacja przypadku – 3 sformułowania", "Diagnostyczne (jak jest?), kliniczne (dlaczego?), dotyczące interwencji (co zrobić?)."],
        ["Czy diagnoza to testowanie?", "Nie – diagnoza łączy wiele źródeł danych, testuje hipotezy i daje całościowe rozumienie."],
        ["Fazy modelu Maloneya i Warda (liczba)", "7 faz: od zbioru danych i protodiagnozy do predykcji zachowania."],
        ["Proporcja podstawowa", "Częstość zjawiska w danej populacji lub sytuacji – trzeba ją uwzględnić przy hipotezach."],
        ["3 możliwości postępowania z hipotezą cząstkową", "Odrzucenie, modyfikacja, akceptacja."],
        ["5 pytań Szustrowej", "Cel badania, orientacja teoretyczna, pytania i hipotezy, dobór wskaźników, operacjonalizacja wskaźników (metody)."],
        ["Jak używa się 5 pytań przy analizie wyników?", "W odwrotnej kolejności."],
        ["Typ procedury Szustrowej", "Model normatywny (adaptacja zasad wywiadu swobodnego)."],
        ["4 etapy modelu Paluchowskiego", "Prediagnostyczny, badanie diagnostyczne, opis i interpretacja, interwencja."],
        ["Dlaczego model Paluchowskiego jest iteracyjny?", "Kompletność stwierdza się dopiero po pomyślnym przeprowadzeniu ostatniej fazy; etapy można powtarzać."],
        ["Model GAP – autor i typ", "Fernández-Ballesteros i in. (2001); model integracyjny."],
        ["4 etapy modelu GAP", "Analiza przypadku, organizowanie i raportowanie wyników, planowanie interwencji, ocena interwencji i odroczone badanie kontrolne."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Hipoteza opisowa", "np. obniżony nastrój"],
        ["Hipoteza wyjaśniająca", "np. depresja po stracie"],
        ["Wskaźnik", "obserwowalny przejaw stanu"],
        ["Konceptualizacja przypadku", "jak jest? dlaczego? co zrobić?"],
        ["Diagnoza a testowanie", "diagnoza to więcej niż testy"],
        ["Model Maloneya i Warda", "opisowy, 7 faz"],
        ["Procedura Szustrowej", "normatywna, 5 pytań"],
        ["Model Paluchowskiego", "opisowy, iteracyjny"],
        ["Model GAP", "integracyjny"],
        ["Proporcja podstawowa", "jak często zjawisko występuje w populacji"],
        ["Protodiagnoza", "wstępne rozumienie problemu"],
        ["Ostatnia faza Maloneya i Warda", "predykcja zachowania"],
        ["Analiza wyników u Szustrowej", "te same pytania w odwrotnej kolejności"],
        ["Etap prediagnostyczny", "kontekst, oczekiwania, protodiagnoza"],
        ["Ostatni etap GAP", "ocena interwencji i badanie kontrolne"]
      ],
      quiz: [
        { q: "Procedura pięciu pytań Szustrowej to model:", o: ["opisowy", "normatywny", "integracyjny", "aktuarialny"], a: 1, e: "Szustrowa – normatywny; Paluchowski – opisowy; GAP – integracyjny." },
        { q: "Pierwsze pytanie procedury Szustrowej dotyczy:", o: ["orientacji teoretycznej", "celu badania", "doboru wskaźników", "operacjonalizacji"], a: 1, e: "Po co prowadzę badanie?" },
        { q: "Ile faz ma model Maloneya i Warda?", o: ["4", "5", "7", "9"], a: 2, e: "7 faz." },
        { q: "Uwzględnienie, jak często zjawisko występuje w populacji, to:", o: ["proporcja podstawowa", "protodiagnoza", "konceptualizacja", "wskaźnik"], a: 0, e: "Faza 2 modelu Maloneya i Warda." },
        { q: "Który model obejmuje odroczone badanie kontrolne?", o: ["Szustrowej", "Paluchowskiego", "GAP", "Maloneya i Warda"], a: 2, e: "GAP kończy się oceną interwencji i badaniem kontrolnym." },
        { q: "Sformułowanie kliniczne w konceptualizacji przypadku odpowiada na pytanie:", o: ["jak jest?", "dlaczego tak jest?", "co zrobić?", "kto zlecił badanie?"], a: 1, e: "Diagnostyczne – jak jest; kliniczne – dlaczego; interwencyjne – co zrobić." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "relacja",
      title: "Relacja i kontakt z osobą badaną, kontrakt, opór",
      notes: `
## Klient na terytorium psychologa
- **Niesymetryczność relacji** – psycholog wydaje opinie wpływające na życie klienta; brak równowagi wiedzy, zdobywania informacji, sposobu funkcjonowania i konsekwencji relacji.
- Przekonania o psychologu („magik”), doświadczenia i oczekiwania klienta.
- **Dwóch ekspertów** (Czabała; de Barbaro): psycholog – wiedza o funkcjonowaniu człowieka, klient – wiedza o sobie.

**Dylematy klienta na pierwszej wizycie**: współpracować czy nie (korzyści vs opór)? oddać kontrolę czy nie? mówić czy nie mówić? Klient ma prawo do **odmowy odpowiedzi, przerwania diagnozy i nietłumaczenia się**.

## Zarządzanie kontekstem badania (Krishnamurthy i in., 2004)
Ustanowienie relacji diagnostycznej · stworzenie sytuacji badania · utrzymanie współpracującej relacji profesjonalnej · rozumienie związku diagnozy i interwencji · techniczne umiejętności diagnostyczne.

## Budowanie relacji
- **Kompetencja relacyjna** – właściwości ułatwiające nawiązanie, rozwijanie i podtrzymanie obustronnie satysfakcjonującej relacji (Hansson i in.).
- Relacja diagnostyczna: **kontakt** → **kontrakt** → **przymierze w działaniu** (working alliance). Bez kontaktu i kontraktu nie ma przymierza, bez przymierza nie ma celu.

## Kontakt
- Trout i Rosenthal: komfortowa, harmonijna, kooperująca relacja. Czabała: akceptacja, zrozumienie i wsparcie. Torrey: ułatwiają go empatia, naturalność, bezinteresowna serdeczność.

**Model kontaktu Tickle-Degnen i Rosenthala (1990)** – 3 procesy:
- **wzajemna uwaga** – ważna przez cały kontakt,
- **pozytywne nastawienie** – znaczenie **maleje** z czasem,
- **koordynacja zachowań** – znaczenie **rośnie** z czasem.

| Perspektywa | Uwaga | Koordynacja | Autentyczność |
|---|---|---|---|
| wewnętrzna (uczestnik) | zainteresowanie, skupienie na drugiej osobie | uczucie równowagi i harmonii | ciepło, serdeczność |
| zewnętrzna (obserwator) | dopasowanie postawy ciała | zsynchronizowane ruchy i gesty | dopasowanie mimiki, intonacji, ruchów głowy |

## Kontakt pozorny
Wydaje się, że kontakt jest, a go nie ma (często: zbyt wcześnie zadane pytania zagrażające). Rozmówca nie jest szczery; nadmierna swoboda psychologa.
- **Wskaźniki introspekcyjne**: trudność z koncentracją, znudzenie, brak zainteresowania, odpowiedzi fasadowe, poczucie, że badany „nie mówi nic ważnego”, przekonanie, że wiemy, co powie, chęć przerwania.
- **Po stronie diagnosty**: brak lub poczucie braku kompetencji, zła kondycja, ograniczający model teoretyczny, elementy relacji pozazawodowej, ocenianie, fiksacja, przedwczesne interpretacje, skupienie na sobie, trudność z ciszą, parafrazy bez miejsca na informację zwrotną.
- **Po stronie badanego**: obronna koncentracja na diagnoście, nieadekwatne emocje, lęk przed oceną, potrzeba ochrony, **nieautonomiczna motywacja**.

## Kontrakt
Umowa „handlowa”, na której obie strony korzystają (Zalewski, 2005): dobrowolna, świadoma, czytelne prawa i zobowiązania, negocjowalna, ma funkcję terapeutyczną. Elementy: **cel, sposoby osiągnięcia, zyski, koszty**. Wiąże się ze świadomą zgodą, poufnością i kodeksem.

## Opór
Świadoma lub nieświadoma niechęć do eksplorowania pewnych treści; może być przejawem kontaktu pozornego.
- **Stan** (tu i teraz) vs **cecha** (stała niechęć do tematu); **intrapsychiczny** vs **interpersonalny**.
- Utrudnia cel, ale jest też **źródłem ważnych informacji**.
- **Kontinuum**: opór pełny → pasywny → pełna współpraca.
- **Przejawy**: **no-show**, nieprzestrzeganie ram czasu, sygnały niewerbalne, milczenie, „nie wiem”, zmiana tematu, ironizowanie, próby zmiany charakteru relacji.
- Reakcja **przeciwprzeniesieniowa** – emocjonalna reakcja psychologa (Messer).

**Jak sobie radzić**: **kontrakt**, nazywanie uczuć, dawanie wyboru, techniki konwersacyjne (milczenie, przeformułowanie pytania: ogólne ↔ szczegółowe, zamknięte ↔ otwarte, **pytanie projekcyjne**), prośba o konkret lub mówienie o sobie, przy ataku – bezpieczeństwo, bez polemiki i tłumaczenia się, **modyfikacja metody dwóch krzeseł**.
Nigdy: „nie możesz się tak czuć”, „nie płacz”.
`,
      flashcards: [
        ["Niesymetryczność relacji diagnostycznej", "Psycholog ma przewagę wiedzy i władzy (wydaje opinie wpływające na życie klienta)."],
        ["„Dwóch ekspertów”", "Psycholog zna funkcjonowanie człowieka, klient zna siebie (Czabała)."],
        ["Prawa klienta na pierwszej wizycie", "Odmowa odpowiedzi, przerwanie diagnozy, nietłumaczenie się."],
        ["Sekwencja budowania relacji diagnostycznej", "Kontakt → kontrakt → przymierze w działaniu (working alliance)."],
        ["Kompetencja relacyjna", "Właściwości ułatwiające nawiązanie, rozwijanie i podtrzymanie obustronnie satysfakcjonującej relacji."],
        ["3 procesy w modelu Tickle-Degnen i Rosenthala", "Wzajemna uwaga (stała), pozytywne nastawienie (maleje), koordynacja zachowań (rośnie)."],
        ["Kontakt pozorny", "Sytuacja, gdy wydaje się, że kontakt jest, a go nie ma – np. przez zbyt wcześnie zadane pytania zagrażające."],
        ["Introspekcyjne wskaźniki kontaktu pozornego", "Znudzenie, trudność z koncentracją, brak zainteresowania, poczucie, że badany nie mówi nic ważnego, chęć przerwania."],
        ["Elementy kontraktu", "Cel, sposoby osiągnięcia, zyski, koszty."],
        ["Opór", "Świadoma lub nieświadoma niechęć do eksplorowania pewnych treści; także źródło informacji."],
        ["Opór jako kontinuum", "Opór pełny → pasywny → pełna współpraca."],
        ["Zjawisko no-show", "Umówienie się i nieprzyjście na spotkanie – przejaw oporu."],
        ["Reakcja przeciwprzeniesieniowa", "Emocjonalna reakcja psychologa na to, co przeżywa lub wywołuje klient."],
        ["Sposoby radzenia sobie z oporem", "Kontrakt, nazywanie uczuć, dawanie wyboru, przeformułowanie pytań, pytania projekcyjne, metoda dwóch krzeseł."],
        ["Pytanie projekcyjne – przykład", "„Jak myślisz, czego uczniowie nie lubią w zachowaniu nauczycieli matematyki?”"]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Niesymetryczność relacji", "psycholog wydaje opinie o kliencie"],
        ["Dwóch ekspertów", "psycholog – wiedza o człowieku, klient – o sobie"],
        ["Kolejność relacji diagnostycznej", "kontakt → kontrakt → przymierze"],
        ["Wzajemna uwaga", "ważna przez cały kontakt"],
        ["Pozytywne nastawienie", "znaczenie maleje z czasem"],
        ["Koordynacja zachowań", "znaczenie rośnie z czasem"],
        ["Kontakt pozorny", "wydaje się, że jest, a go nie ma"],
        ["Odpowiedzi fasadowe", "wskaźnik kontaktu pozornego"],
        ["Kontrakt (Zalewski)", "dobrowolna, negocjowalna umowa"],
        ["Elementy kontraktu", "cel, sposoby, zyski, koszty"],
        ["Opór", "niechęć do eksplorowania treści"],
        ["No-show", "niestawienie się na spotkanie"],
        ["Pytanie projekcyjne", "sposób na opór"],
        ["Reakcja przeciwprzeniesieniowa", "emocje psychologa wobec klienta"]
      ],
      quiz: [
        { q: "W modelu Tickle-Degnen i Rosenthala znaczenie koordynacji zachowań z czasem:", o: ["maleje", "rośnie", "jest stałe", "zanika"], a: 1, e: "Uwaga – stała, pozytywne nastawienie – maleje, koordynacja – rośnie." },
        { q: "Klient umawia się i nie przychodzi. To przejaw oporu nazywany:", o: ["kontaktem pozornym", "no-show", "przeniesieniem", "dyssymulacją"], a: 1, e: "Zjawisko no-show." },
        { q: "Który element NIE należy do kontraktu?", o: ["cel", "zyski", "koszty", "diagnoza nozologiczna"], a: 3, e: "Kontrakt: cel, sposoby, zyski, koszty." },
        { q: "Który wskaźnik świadczy o kontakcie pozornym?", o: ["synchronizacja ruchów", "znudzenie diagnosty i poczucie, że badany nie mówi nic ważnego", "ciepło i serdeczność", "dopasowanie intonacji"], a: 1, e: "To wskaźniki introspekcyjne kontaktu pozornego." },
        { q: "Czego NIE należy mówić osobie przejawiającej opór?", o: ["„Rozumiem, że jest ci trudno”", "„Nie możesz się tak czuć”", "„Może jest element, o którym zechcesz opowiedzieć?”", "„Jak się teraz czujesz?”"], a: 1, e: "Odbieranie prawa do emocji jest błędem." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "narzedzia",
      title: "Test psychologiczny, obserwacja, status praesens, wywiad",
      notes: `
## Praktyka oparta na dowodach (EBA – Evidence-Based Assessment)
Integracja **najlepszych dowodów empirycznych** z **biegłością praktyczną**, z uwzględnieniem **właściwości, preferencji i kultury klienta** (APA, 2006). Klient współdecyduje (kolejność zadań, przerwy, termin).

## Wiarygodne narzędzie = kryteria testu psychologicznego
**Wystandaryzowane · zobiektywizowane · trafne · rzetelne · znormalizowane.**
- **Test psychologiczny** (J. McKeen Cattell, 1890) – procedura zbierania danych (pytania, zadania) dająca **reprezentatywną próbkę zachowań**; pozwala na diagnozę (zachowanie poza testem) i prognozę (w przyszłości).
- **Standaryzacja** – ujednolicony sposób posługiwania się testem; minimalizuje wpływ warunków badania. Elementy: zasady ogólne, warunki badania, instrukcja, pomoce, klucz.
- **Obiektywność** – każdy diagnosta obliczy i zinterpretuje wynik tak samo.
- **Trafność** – czy test mierzy to, co ma mierzyć (teoretyczna, diagnostyczna, prognostyczna).
- **Rzetelność** – dokładność pomiaru: mały błąd, odporność na czynniki zewnętrzne.
- **Normalizacja** – normy pozwalające przeliczyć wynik surowy; porównanie z rozkładem normalnym.

## Skala stenowa
**M = 5,5; SD = 2; zakres 1–10.** Zwyczajowo: **1–4 wyniki niskie, 5–6 przeciętne, 7–10 wysokie** (1–2 i 9–10 – bardzo niskie/wysokie).
- **7 sten w ekstrawersji (NEO-FFI)** – wynik wysoki: osoba jest bardziej ekstrawertyczna niż przeciętna osoba w normie.
- **2 sten w otwartości** – wynik bardzo niski: osoba jest znacznie mniej otwarta na doświadczenie niż większość.

## Pracownia Testów Psychologicznych PTP
Lata 70. (Żebrowska, Tomaszewski), 1975 umowa PTP i UW. Kategorie testów: **A** – psycholodzy i inni profesjonaliści; **B** – po szkoleniu (**B1** – szkolenie z psychometrii z egzaminem, **B2** – dodatkowo szkolenie z konkretnego testu); **C** – **tylko psycholodzy**. Studenci: druk upoważnienia, tylko arkusze, 15% zniżki, licencje badawcze na platformie Epsilon.

**Metody diagnostyczne** (Groth-Marnat, 2003): **wywiad, obserwacja, testowanie**. Nie wszystko, co nazywa się testem, jest testem. Narzędzi bez norm używa się tylko do celów naukowych, **nie w diagnozie indywidualnej**.

**Kryteria Dauberta** (dopuszczenie opinii biegłego) – wskaźniki naukowej rzetelności: sprawdzalność teorii/techniki, sprawdzenie trafnymi i rzetelnymi procedurami, **ślepa recenzja**, ryzyko błędu, standardy stosowania, akceptacja środowiska naukowego.

## Obserwacja
Jawna – ukryta · bezpośrednia – pośrednia · naturalna – laboratoryjna · ustrukturalizowana – nieustrukturalizowana · uczestnicząca · **ambulatoryjna** (monitorowanie przez całą dobę w naturalnym środowisku). Próbki czasowe vs próbki zdarzeń, skale ocen, wskaźniki psychofizjologiczne (EDA, EEG, EKG; wariograf).

## Status praesens psychicus – 11 wymiarów
**Wygląd · zachowanie i napęd psychoruchowy · zachowania werbalne · nastrój/afekt · świadomość · orientacja · postrzeganie · pamięć · uwaga · myślenie · poczucie choroby.**

- **Zachowanie**: uległy, zbuntowany, agresywny, niewspółpracujący, teatralny; napęd słaby/silny, pobudzenie, bezruch, stereotypie.
- **Werbalne**: intonacja, zaburzenia mowy (mutyzm, jąkanie), rozumienie, ekspresja, interakcja.
- **Świadomość**: ilościowe – **senność patologiczna, półśpiączka (sopor), śpiączka**; jakościowe – **przymglenie, zmącenie, zwężenie**. Skala **Glasgow** (oczy 1–4, odpowiedź słowna 1–5, ruchowa 1–6).
- **Orientacja**: w czasie, przestrzeni, sytuacji, co do własnej osoby. **Derealizacja** – świat nierealny, „sen na jawie”, anhedonia, brak poczucia czasu.
- **Postrzeganie**: **złudzenie (iluzja)** – błędne rozpoznanie **istniejącego** bodźca, zachowany krytycyzm (lampa wzięta za człowieka); **omam** – spostrzeżenie **bez bodźca**, z poczuciem realności, bez krytycyzmu (nie zaprzeczamy, uspokajamy); zaburzenia schematu ciała, bóle fantomowe, objaw sobowtóra; obłęd udzielony.
- **Pamięć**: ilościowe – **amnezja (niepamięć)** wsteczna i następcza, fuga dysocjacyjna, pamięć nadmierna (Szereszewski); jakościowe – **déjà vu** (już widziane; krytycyzm, może współwystępować **prekognicja**), **jamais vu** (nierozpoznanie znanego).
- **Uwaga** (selektywność, trwałość, przerzutność, podzielność, przełączanie). Zaburzenia selektywności: **aproseksja** (niemożność koncentracji) → **hipoproseksja** (ograniczenie) → **hiperproseksja** (nadmierna koncentracja).
- **Myślenie** – **formy**: zaburzenia **toku** (spowolnienie, przyspieszenie, otamowanie, natłok, rozwlekłość, perseweracje) i **struktury** (zubożenie, gubienie wątku, sądy pseudofilozoficzne); **treści**: **myśli nadwartościowe, automatyzmy psychiczne, myśli natrętne (obsesje), urojenia** (nieprawdziwy sąd **niepodlegający sprostowaniu**, wpływający na zachowanie, dotyczący osoby lub otoczenia).
- **Nastrój i emocje**: obniżenie / podwyższenie nastroju, **dysforia** (złość, rozdrażnienie), lęk; zobojętnienie, zubożenie, spłycenie, **anhedonia**; lepkość, zaleganie, chwiejność, nietrzymanie; **hipertymia** (przesadna ekspresja), **hipotymia** (ograniczona), **paratymia** (niedostosowana do okoliczności), **katatymia** (życzeniowe zniekształcenie przeżyć).
- **Poczucie choroby**: brak, przesadne, hipochondria, **agrawacja** (wyolbrzymianie objawów), **symulacja** (udawanie choroby), **dyssymulacja** (ukrywanie choroby), **zespół Münchhausena**.

## Wywiad
Rozmowa w celu uzyskania informacji; różne układy osób (1:1, panel, kwestionariusz bez badacza, grupa fokusowa, rodzina).
- **Ustrukturalizowany** (bodziec–reakcja, wystandaryzowany, bez modyfikacji) · **częściowo ustrukturalizowany** (sygnał–czynnik latentny–reakcja, plastyczny) · **sytuacyjny/poznawczy** (Köhnken) · **biograficzny** (homo fabula – psychologia narracyjna) · **swobodny** (niewidoczna struktura, nagranie, transkrypcja, kodowanie) · **aktywny** (Gubrium i Holstein – współkonstruowanie informacji).
`,
      flashcards: [
        ["Evidence-Based Assessment", "Integracja najlepszych dowodów empirycznych z biegłością praktyczną, z uwzględnieniem cech, preferencji i kultury klienta (APA, 2006)."],
        ["Cechy testu psychologicznego (wiarygodnego narzędzia)", "Wystandaryzowany, zobiektywizowany, trafny, rzetelny, znormalizowany."],
        ["Trafność", "Czy test mierzy to, co ma mierzyć (teoretyczna, diagnostyczna, prognostyczna)."],
        ["Rzetelność", "Dokładność pomiaru – mały błąd, odporność na czynniki zewnętrzne."],
        ["Standaryzacja", "Ujednolicony sposób posługiwania się testem (instrukcja, warunki, pomoce, klucz)."],
        ["Normalizacja", "Opracowanie norm pozwalających przeliczyć wynik surowy i porównać go z populacją."],
        ["Parametry skali stenowej", "M = 5,5; SD = 2; zakres 1–10."],
        ["Jak interpretować steny?", "1–4 wyniki niskie, 5–6 przeciętne, 7–10 wysokie."],
        ["7 sten w ekstrawersji (NEO-FFI)", "Wynik wysoki – osoba bardziej ekstrawertyczna niż przeciętnie."],
        ["2 sten w otwartości na doświadczenie", "Wynik bardzo niski – znacznie mniejsza otwartość niż u większości."],
        ["Kategorie testów w Pracowni Testów PTP", "A – profesjonaliści; B (B1, B2) – po szkoleniach; C – tylko psycholodzy."],
        ["Trzy metody diagnostyczne (Groth-Marnat)", "Wywiad, obserwacja, testowanie."],
        ["Kryteria Dauberta", "Kryteria dopuszczenia opinii biegłego: sprawdzalność, sprawdzenie, ślepa recenzja, ryzyko błędu, standardy, akceptacja środowiska."],
        ["Obserwacja ambulatoryjna", "Monitorowanie zachowań przez całą dobę w codziennym środowisku."],
        ["11 wymiarów status praesens psychicus", "Wygląd, zachowanie i napęd, mowa, nastrój/afekt, świadomość, orientacja, postrzeganie, pamięć, uwaga, myślenie, poczucie choroby."],
        ["Ilościowe zaburzenia świadomości", "Senność patologiczna, półśpiączka (sopor), śpiączka."],
        ["Jakościowe zaburzenia świadomości", "Przymglenie, zmącenie, zwężenie."],
        ["4 rodzaje orientacji", "W czasie, w przestrzeni, w sytuacji, co do własnej osoby."],
        ["Złudzenie (iluzja) vs omam", "Złudzenie – błędne rozpoznanie istniejącego bodźca, z krytycyzmem. Omam – spostrzeżenie bez bodźca, z poczuciem realności."],
        ["Derealizacja", "Odbieranie świata jako nierealnego, zmienionego, oddalonego; „sen na jawie”."],
        ["Déjà vu vs jamais vu", "Déjà vu – „już widziane”, z krytycyzmem. Jamais vu – nierozpoznanie znanej sytuacji."],
        ["Aproseksja, hipoproseksja, hiperproseksja", "Niemożność koncentracji → ograniczenie uwagi → nadmierna koncentracja."],
        ["4 zaburzenia treści myślenia", "Myśli nadwartościowe, automatyzmy psychiczne, myśli natrętne (obsesje), urojenia."],
        ["Urojenie", "Nieprawdziwy sąd niepodlegający sprostowaniu, wpływający na zachowanie."],
        ["Hipertymia, hipotymia, paratymia, katatymia", "Przesadna ekspresja emocji; ograniczona ekspresja; ekspresja niedostosowana do okoliczności; życzeniowe zniekształcenie przeżyć."],
        ["Agrawacja, symulacja, dyssymulacja", "Wyolbrzymianie objawów; udawanie choroby; ukrywanie choroby."],
        ["Zespół Münchhausena", "Uporczywe przekonywanie o chorobie (fałszowanie objawów i dokumentacji), aż do niepotrzebnego leczenia."],
        ["Rodzaje wywiadów", "Ustrukturalizowany, częściowo ustrukturalizowany, sytuacyjny (poznawczy), biograficzny, swobodny, aktywny."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["EBA", "praktyka oparta na dowodach"],
        ["Standaryzacja", "ujednolicony sposób użycia testu"],
        ["Obiektywność testu", "każdy obliczy wynik tak samo"],
        ["Trafność", "czy test mierzy to, co ma mierzyć"],
        ["Rzetelność", "dokładność pomiaru"],
        ["Normalizacja", "normy do przeliczenia wyniku"],
        ["Skala stenowa", "1–10, M = 5,5, SD = 2"],
        ["7 sten", "wynik wysoki"],
        ["Kategoria C testów", "tylko psycholodzy"],
        ["Kryteria Dauberta", "dopuszczenie opinii biegłego"],
        ["Obserwacja ambulatoryjna", "w naturalnym środowisku, całą dobę"],
        ["Sopor", "półśpiączka"],
        ["Złudzenie (iluzja)", "błędne rozpoznanie istniejącego bodźca"],
        ["Omam", "spostrzeżenie bez bodźca"],
        ["Derealizacja", "poczucie nierealności świata"],
        ["Jamais vu", "nierozpoznanie znanego"],
        ["Aproseksja", "niemożność skupienia uwagi"],
        ["Urojenie", "sąd niepodlegający sprostowaniu"],
        ["Dysforia", "złość, rozdrażnienie"],
        ["Katatymia", "życzeniowe zniekształcenie przeżyć"],
        ["Agrawacja", "wyolbrzymianie objawów"],
        ["Dyssymulacja", "ukrywanie choroby"]
      ],
      quiz: [
        { q: "Średnia i odchylenie standardowe skali stenowej to:", o: ["M = 5; SD = 2", "M = 5,5; SD = 2", "M = 10; SD = 3", "M = 50; SD = 10"], a: 1, e: "Zakres 1–10, M = 5,5, SD = 2." },
        { q: "Osoba uzyskała 7 stenów w skali ekstrawersji NEO-FFI. Oznacza to wynik:", o: ["niski", "przeciętny", "wysoki", "nieinterpretowalny"], a: 2, e: "7–10 to wyniki wysokie." },
        { q: "W nocy widzę człowieka, a to tylko lampa – i zaraz to rozumiem. To:", o: ["omam", "złudzenie (iluzja)", "urojenie", "derealizacja"], a: 1, e: "Złudzenie: istniejący bodziec błędnie rozpoznany, zachowany krytycyzm." },
        { q: "Półśpiączka to inaczej:", o: ["zmącenie", "sopor", "przymglenie", "fuga"], a: 1, e: "Ilościowe zaburzenia: senność patologiczna, półśpiączka (sopor), śpiączka." },
        { q: "Ukrywanie przez pacjenta objawów choroby to:", o: ["agrawacja", "symulacja", "dyssymulacja", "katatymia"], a: 2, e: "Dyssymulacja – udawanie zdrowia." },
        { q: "Niemożność skupienia uwagi to:", o: ["hiperproseksja", "hipoproseksja", "aproseksja", "anhedonia"], a: 2, e: "Aproseksja – brak koncentracji." },
        { q: "Testy kategorii C mogą stosować:", o: ["wszyscy profesjonaliści", "osoby po szkoleniu z psychometrii", "tylko psycholodzy", "studenci"], a: 2, e: "C – tylko dla psychologów." },
        { q: "Która cecha NIE jest kryterium testu psychologicznego?", o: ["rzetelność", "trafność", "normalizacja", "popularność"], a: 3, e: "Standaryzacja, obiektywizacja, trafność, rzetelność, normalizacja." },
        { q: "Życzeniowe zniekształcanie przeżyć to:", o: ["hipertymia", "paratymia", "katatymia", "hipotymia"], a: 2, e: "Katatymia." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "testowanie",
      title: "Testowanie i metody projekcyjne",
      notes: `
## Podziały testów
- Testy **osobowości** vs testy **inteligencji i zdolności**; dodatkowo testy w rekrutacji.
- Testy **obiektywne** (spełniają kryteria testu) vs **projekcyjne** (nieznormalizowane – problem dla psychologii).
- Rodzaje zadań: odpowiedź na pytanie lub wyrażenie opinii, wykonanie ustrukturalizowanego zadania (obiektywne); nadanie struktury i znaczenia wieloznacznemu materiałowi (projekcyjne).
- Zachowanie testowe to próbka, znak lub korelat zachowań pozatestowych (Paluchowski).

## Skala vs inwentarz
| Skala | Inwentarz |
|---|---|
| narzędzie **jednorodne** – mierzy **jeden konstrukt** | narzędzie **heterogeniczne** (np. Wielka Piątka – 5 skal) |
| pozycje wysoko skorelowane, **wymienne** | pozycje nieskorelowane, niewymienne – każda wnosi coś ważnego |

Inwentarz może, ale nie musi składać się z kilku skal; nazwa narzędzia nie zawsze odpowiada jego budowie.

## Kwestionariusze
Papier–ołówek lub online; badają osobowość, wartości, postawy, zainteresowania, objawy. Zbiór **itemów** – od **5 (SWLS)** do **567 (MMPI-2)**. Odpowiedzi tak/nie, problem kategorii „nie wiem”, skala Likerta.
- **Samoopis** – badany jest źródłem informacji (pytanie o wgląd i autorefleksję).
- **Skale kontrolne** – potrzeba aprobaty, skłonność do kłamstwa i symulacji.
- Podejście ateoretyczne, aktuarialne (odpowiedź = reakcja na bodziec). Deklaracje ≠ zachowanie. Kwestionariusze są tanie i szybkie, ale nie są jedyną metodą.

## Najważniejsze testy
| Test | Autorzy | Najważniejsze |
|---|---|---|
| **MMPI-2** – Minnesocki Wielowymiarowy Inwentarz Osobowości | Butcher, Graham, Ben-Porath, Tellegen, Dahlstrom | samoopis; 18–69 lat; **567 pozycji**, **121 skal** (kontrolne i kliniczne); normy tenowe dla K i M; osobowość, zaburzenia, rekrutacja (służby mundurowe) |
| **SWLS** – Skala Satysfakcji z Życia | **Ed Diener**; PL: **Juczyński (2001)** | **5 twierdzeń**, skala 1–7; najkrótszy; test przesiewowy, nie do diagnozy |
| **ACL** – Lista Przymiotnikowa | **Gough, Heilbrun** | 15–69 lat; **300 przymiotników**, **37 skal**; Ja realne, **Ja idealne**, skala obserwacyjna, badanie postaci, marek, stereotypów; wada – czasochłonne liczenie |
| **WISC-R** | Wechsler | dzieci **6–16 lat** |
| **WAIS-R (PL)** | Wechsler | dorośli **16–79 lat** (renormalizacja 2004); skala werbalna i niewerbalna |
| **TMK** – Matryce Ravena kolorowe | Raven | **4–10 lat** i osoby z obniżonymi zdolnościami; niewerbalny, akulturowy, czynnik g |
| **TMZ** – Matryce dla Zaawansowanych | Raven | **20–67 lat**, min. wykształcenie średnie |
| **TM S-Plus** | Raven | 15–19 i 20–79 lat |
| **Skala Leitera** | – | **3–15 lat**, dzieci niesłyszące; wykonaniowa, niewerbalna |
| **APIS-P(R), APIS-Z** | polskie | baterie do **badań grupowych** inteligencji; rekrutacja, badania przesiewowe |
| **Test Rysunku Postaci Ludzkiej** | **Goodenough, Harris** | wskaźnik rozwoju intelektualnego dziecka, nawet poniżej 3 r.ż.; **to NIE jest metoda projekcyjna** |

**Etapy rozwoju rysunku** (Szuman): bazgrota bezprzedmiotowa → bazgrota przedmiotowa → schemat uproszczony („głowonogi”, 4–5 r.ż.) → schemat konstrukcji.

Podziały testów inteligencji: indywidualne – grupowe · zamknięte – otwarte · werbalne – wykonaniowe · **szybkości – mocy** · baterie – skale rozwojowe.

**Próby zadaniowe** – zadania wymagające mierzonej zdolności: assessment center (analiza przypadku, koszyk zadań, prezentacja, spotkanie, praca w zespole), wywiad kompetencyjny, próby pracy, Test Mechanizmów Obronnych Kragha.

## Metody projekcyjne
- Człowiek jako **homo symbolicus** – nadaje znaczenie bodźcom; osobowość jako konstruowanie doświadczenia; poznanie utajone, ukryte teorie osobowości.
- **Projekcja** (łac. proicere – wyrzucać) – radzenie sobie z wieloznacznością przez zindywidualizowaną apercepcję i poznawczo-emocjonalną semantyzację.
- Termin: **Lawrence K. Frank (1939)**. Diagnozuje się nie cechy, ale **siły i procesy dynamiczne** (potrzeby, motywy, konflikty, mechanizmy obronne).

**Ze względu na rodzaj zadania** (Lindzey, 1959): **skojarzenia, selekcja, uzupełnianie, tworzenie, ekspresja**.

**Ze względu na stopień ustrukturalizowania** (Łaguna, Lachowska):
| Typ | Przykłady |
|---|---|
| **ustrukturalizowane** | niedokończone zdania, dymki, metafory; **RISB – Test Niedokończonych Zdań Rottera** (Rotter, Lah, Rafferty; **40 zdań**; przesiewowo, nieprzystosowanie; interpretacja ilościowa i jakościowa) |
| **częściowo ustrukturalizowane** | **testy skojarzeń słownych** (niska trafność); **TAT** – Test Apercepcji Tematycznej (**Murray i Morgan, 1935**; 31 plansz, historie do 20; teoria potrzeb Murraya; CAT dla dzieci; silna krytyka); **Scenotest** (von Staabs; figurki, interpretacja psychoanalityczna, brak norm) |
| **nieustrukturalizowane** | **Test plam atramentowych Rorschacha** (1921; System Całościowy Exnera; silna krytyka); **rysunek projekcyjny** (Test Drzewa Kocha, Rysunek Rodziny – **nie spełniają standardów naukowych**) |

## Kiedy stosować metody projekcyjne?
Do nawiązania kontaktu · przy silnym oporze · gdy badany boi się wyrażać opinie lub oceny · gdy może odpowiadać pod aprobatę · przy trudnościach z werbalizacją · przy niskim wglądzie · przy sprawach intymnych i trudnych · (dzieci?).

## Kiedy NIE stosować?
**Do wykrywania nadużyć seksualnych lub fizycznych** · gdy metoda nie ma właściwości psychometrycznych · gdy nie jesteś ekspertem · gdy metoda jest powszechnie dostępna (internet). Biegły sądowy formalnie może, ale nie powinien.
`,
      flashcards: [
        ["Testy obiektywne vs projekcyjne", "Obiektywne spełniają kryteria testu psychologicznego; projekcyjne opierają się na bodźcach wieloznacznych i zwykle nie są znormalizowane."],
        ["Skala vs inwentarz", "Skala – jednorodna, mierzy jeden konstrukt, pozycje wymienne. Inwentarz – heterogeniczny, pozycje niewymienne."],
        ["Najkrótszy i najdłuższy kwestionariusz", "SWLS – 5 pozycji; MMPI-2 – 567 pozycji."],
        ["Skale kontrolne", "Wykrywają potrzebę aprobaty, skłonność do kłamstwa i symulacji."],
        ["MMPI-2 – autorzy", "Butcher, Graham, Ben-Porath, Tellegen, Dahlstrom."],
        ["MMPI-2 – podstawowe dane", "Samoopis, 18–69 lat, 567 pozycji, 121 skal, normy tenowe dla kobiet i mężczyzn."],
        ["SWLS – autor i adaptacja", "Ed Diener; polska adaptacja Z. Juczyński (2001); 5 twierdzeń, skala 1–7."],
        ["ACL – autorzy i budowa", "Gough i Heilbrun; 300 przymiotników, 37 skal, 15–69 lat."],
        ["Jaka skala jest idealna do badania „Ja realnego” i „Ja idealnego”?", "ACL – Lista Przymiotnikowa."],
        ["WISC-R vs WAIS-R", "WISC-R – dzieci 6–16 lat; WAIS-R (PL) – dorośli 16–79 lat."],
        ["Test Matryc Ravena w wersji kolorowej (TMK)", "Dzieci 4–10 lat i osoby z obniżonymi zdolnościami; niewerbalny, akulturowy."],
        ["Skala Leitera", "Niewerbalna, wykonaniowa skala inteligencji dla dzieci 3–15 lat, także niesłyszących."],
        ["APIS-P(R) i APIS-Z", "Polskie baterie testów do grupowego badania inteligencji (rekrutacja, przesiew)."],
        ["Test Rysunku Postaci Ludzkiej", "Goodenough i Harris; wskaźnik rozwoju intelektualnego dziecka; NIE jest metodą projekcyjną."],
        ["Etapy rozwoju rysunku dziecka", "Bazgrota bezprzedmiotowa → przedmiotowa → schemat uproszczony (głowonogi) → schemat konstrukcji."],
        ["Kto wprowadził termin „metody projekcyjne”?", "Lawrence K. Frank (1939)."],
        ["Kategorie metod projekcyjnych wg zadania (Lindzey)", "Skojarzenia, selekcja, uzupełnianie, tworzenie, ekspresja."],
        ["Metody projekcyjne ustrukturalizowane – przykład", "RISB – Test Niedokończonych Zdań Rottera (40 zdań)."],
        ["Metody częściowo ustrukturalizowane – przykłady", "Testy skojarzeń słownych, TAT, Scenotest."],
        ["Metody nieustrukturalizowane – przykłady", "Test plam Rorschacha, rysunek projekcyjny."],
        ["TAT – autorzy i budowa", "Murray i Morgan (1935); 31 plansz (30 obrazków + biała), historie do 20; teoria potrzeb Murraya."],
        ["Kiedy stosować metody projekcyjne?", "Przy nawiązywaniu kontaktu, silnym oporze, lęku przed oceną, trudnościach z werbalizacją, niskim wglądzie, tematach intymnych."],
        ["Kiedy NIE stosować metod projekcyjnych?", "Do wykrywania nadużyć seksualnych/fizycznych, bez właściwości psychometrycznych, bez eksperckiej wiedzy, gdy metoda jest w internecie."],
        ["Czy Test Drzewa Kocha i Rysunek Rodziny są narzędziami diagnozy?", "Nie – nie spełniają standardów naukowych; można je stosować najwyżej do nawiązania kontaktu."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Skala", "narzędzie jednorodne, jeden konstrukt"],
        ["Inwentarz", "narzędzie heterogeniczne"],
        ["Najkrótszy kwestionariusz", "SWLS – 5 twierdzeń"],
        ["MMPI-2", "567 pozycji, samoopis"],
        ["SWLS", "Diener; satysfakcja z życia"],
        ["ACL", "300 przymiotników, Ja realne i idealne"],
        ["WISC-R", "dzieci 6–16 lat"],
        ["WAIS-R", "dorośli 16–79 lat"],
        ["TMK", "Raven – dzieci 4–10 lat"],
        ["Skala Leitera", "dzieci niesłyszące, niewerbalna"],
        ["APIS", "baterie do badań grupowych"],
        ["Test Rysunku Postaci", "rozwój intelektualny, nie projekcja"],
        ["Termin „metody projekcyjne”", "Lawrence K. Frank (1939)"],
        ["Test Niedokończonych Zdań", "Rotter, 40 zdań"],
        ["TAT", "Murray i Morgan, 1935"],
        ["Test Rorschacha", "plamy atramentowe, 1921"],
        ["Kiedy NIE stosować projekcji", "do wykrywania nadużyć"],
        ["Głowonogi", "schemat uproszczony, 4–5 r.ż."]
      ],
      quiz: [
        { q: "Narzędzie jednorodne, którego pozycje są wysoko skorelowane i wymienne, to:", o: ["inwentarz", "skala", "bateria", "kwestionariusz projekcyjny"], a: 1, e: "Inwentarz jest heterogeniczny." },
        { q: "Autorem SWLS jest:", o: ["Gough", "Diener", "Butcher", "Rotter"], a: 1, e: "Ed Diener; polska adaptacja Juczyński (2001)." },
        { q: "Ile pozycji ma MMPI-2?", o: ["300", "121", "567", "40"], a: 2, e: "567 pozycji, 121 skal." },
        { q: "Który test NIE jest metodą projekcyjną?", o: ["TAT", "Test Rysunku Postaci Ludzkiej Goodenough i Harrisa", "Test Rorschacha", "Scenotest"], a: 1, e: "Rysunek postaci ludzkiej służy do oceny rozwoju intelektualnego." },
        { q: "RISB Rottera to test:", o: ["skojarzeń słownych", "niedokończonych zdań", "plam atramentowych", "apercepcji tematycznej"], a: 1, e: "40 niedokończonych zdań; zadanie ustrukturalizowane." },
        { q: "TAT to metoda projekcyjna z zadaniem:", o: ["ustrukturalizowanym", "częściowo ustrukturalizowanym", "nieustrukturalizowanym", "wystandaryzowanym"], a: 1, e: "Częściowo: skojarzenia słowne, TAT, Scenotest." },
        { q: "WAIS-R (PL) służy do badania osób w wieku:", o: ["4–10 lat", "6–16 lat", "16–79 lat", "3–15 lat"], a: 2, e: "WISC-R – 6–16; WAIS-R – 16–79." },
        { q: "Metod projekcyjnych NIE należy stosować do:", o: ["nawiązania kontaktu", "pracy z oporem", "wykrywania nadużyć seksualnych", "tematów intymnych"], a: 2, e: "Metody projekcyjne nie mogą być podstawą diagnozy molestowania." },
        { q: "Do badania „Ja realnego” i „Ja idealnego” najlepiej nadaje się:", o: ["MMPI-2", "SWLS", "ACL", "APIS-Z"], a: 2, e: "ACL – Lista Przymiotnikowa." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "informacja-zwrotna",
      title: "Informacja zwrotna i kompetencje międzykulturowe",
      notes: `
## Informacja zwrotna dla osoby badanej
- Zwieńczeniem procesu jest diagnoza (opinia, orzeczenie). Informacja zwrotna należy się **zleceniodawcy** (np. szkoła, sąd – na piśmie) **i osobie badanej** (przy dziecku lub osobie ubezwłasnowolnionej także opiekunom – osobne spotkania, potem ewentualnie wspólne).
- Na spotkaniu: przypomnienie celu i przebiegu, wątpliwości, **omówienie wyników zrozumiałym językiem** (wyjaśnienie terminów i rozkładu wyników), odpowiedź na pytania z celu badania, przełożenie na zachowanie.
- **Mocne strony** – co najmniej 2 razy więcej pozytywów niż negatywów; potencjał środowiska (rodzina, szkoła).
- **Zalecenia**: konkretne (nie „staranne pisanie”, tylko np. „czytanie 15 minut dziennie”), realne, dopasowane do możliwości, **niewiele (np. 3)**; ewentualnie skierowanie do innych specjalistów.
- Badany powinien wyjść z poczuciem, że jesteśmy po jego stronie.

**Czego nie robić**: dawać „dobrych rad”, oceniać, **etykietować** („ma pani zaburzenia depresyjne” zamiast „ciężką depresję”), szukać problemów na siłę, narzucać rozwiązania i własne wartości, zapominać o rodzicach (zdjęcie poczucia winy).

## Kompetencje międzykulturowe
- **Kompetencja międzykulturowa** – zdolność do przyjęcia **relatywizmu kulturowego** w kontakcie z innymi kulturami i umiejętność praktycznego zastosowania wiedzy o odmienności kultur.
- **Relatywizm kulturowy** – nie ma kultur lepszych i gorszych. **Etnocentryzm** – „moja kultura jest najlepsza”, ocenianie innych według własnych standardów.
- **Etnorelatywizm** – uznanie, że własna kultura jest jedną z wielu równoprawnych; zachowania rozumie się w ich kontekście kulturowym (*pojęcia nie ma w slajdach; wiedza ogólna – model Bennetta: etapy etnocentryczne to zaprzeczenie, obrona, minimalizacja; etnorelatywistyczne – akceptacja, adaptacja, integracja*).
- Kultura w tym kontekście: narody, **mniejszości narodowe** (mają państwo gdzie indziej, np. Ukraińcy), **mniejszości kulturowe** (bez państwowości, np. Kaszubi), grupy (np. orientacja), subkultury.
- **Model Boltena** – kompetencje międzykulturowe nie są odrębne, lecz są częścią kompetencji indywidualnych, społecznych i zawodowych.
- Wysoka kompetencja = zainteresowanie, empatia, otwartość, tolerancja, zrozumienie; uwolnienie od stereotypów i postawy wyższości.
- **„Inny”** (Zygmunt Bauman, *Etyka ponowoczesna*) – byt tajemniczy, bałamutny, kłopotliwy, wieloznaczny; nie wolno go interpretować tylko przez własne stereotypy.
- **Europejski System Kształcenia Językowego** – znajomość języka to też znajomość kultury: rezygnacja z etnocentryzmu, relatywizacja doświadczenia, analiza nieznanych zjawisk, obserwacja i uczestnictwo, wrażliwość na szczegóły (np. schabowy dla muzułmanina czy Żyda), przezwyciężanie stereotypów, język, który nie obraża.
- **Ukryty emigrant (imigrant)** – osoba, która wygląda i mówi jak członek większości, ale wychowała się w innej kulturze, więc inni oczekują od niej „miejscowych” zachowań (*pojęcia nie ma w slajdach; wiedza ogólna – Pollock i Van Reken, „dzieci trzeciej kultury”*).

## Kompetencja kulturowa w diagnozie
- Kontekst kulturowy zachowania (to, co normalne w jednej kulturze, w innej może być objawem).
- Zachowanie może być reakcją na traktowanie przez innych (np. dyskryminację), a nie cechą kultury.
- Uwaga na orientację, religię, płeć; **neutralny język** („czy jest pan w bliskiej relacji?” zamiast „czy ma pan dziewczynę?”).
- Testy muszą mieć **adaptację kulturową**; interpretacja z uwzględnieniem pochodzenia (np. dziecko emigrantów).
- Świadomość własnych uprzedzeń; gesty, dystans, powitania, formy grzecznościowe.
- Błędy atrybucji: **podstawowy błąd atrybucji** (przecenianie czynników dyspozycyjnych), **asymetria aktor–obserwator**, **egotyzm atrybucyjny** (sukcesy – moje, porażki – nie moje).

**Po czym poznać, że jesteśmy kompetentni kulturowo?** Znamy podstawy innych kultur (religie, święta, zwyczaje, dystans, dotyk, tytuły), unikamy etnocentryzmu i stereotypów, pytamy o znaczenie zachowań, dostosowujemy język, gesty i narzędzia, jesteśmy świadomi własnych uprzedzeń.
`,
      flashcards: [
        ["Komu należy się informacja zwrotna z diagnozy?", "Zleceniodawcy (np. szkole, sądowi) i osobie badanej (przy dziecku także rodzicom – osobne spotkania)."],
        ["Proporcja mocnych i słabych stron w informacji zwrotnej", "Co najmniej 2 razy więcej pozytywów niż negatywów."],
        ["Jakie powinny być zalecenia?", "Konkretne, realne, dopasowane do możliwości i nieliczne (np. 3)."],
        ["Czego nie robić przy informacji zwrotnej?", "Dawać dobrych rad, oceniać, etykietować, szukać problemów na siłę, narzucać rozwiązań i wartości."],
        ["Kompetencja międzykulturowa", "Zdolność do przyjęcia relatywizmu kulturowego i praktycznego stosowania wiedzy o odmienności kultur."],
        ["Etnocentryzm vs etnorelatywizm", "Etnocentryzm – moja kultura jest najlepsza. Etnorelatywizm – moja kultura jest jedną z równoprawnych."],
        ["Relatywizm kulturowy", "Przekonanie, że nie ma kultur lepszych i gorszych."],
        ["Mniejszość narodowa vs kulturowa", "Narodowa ma własne państwo gdzie indziej (np. Ukraińcy); kulturowa nie ma państwowości (np. Kaszubi)."],
        ["Model Boltena", "Kompetencje międzykulturowe są częścią kompetencji indywidualnych, społecznych i zawodowych."],
        ["„Inny” według Baumana", "Byt tajemniczy, bałamutny, kłopotliwy i wieloznaczny – nie można go interpretować tylko przez własne stereotypy."],
        ["Ukryty emigrant", "Osoba wyglądająca jak członek większości, ale wychowana w innej kulturze (wiedza ogólna – brak w slajdach)."],
        ["Podstawowy błąd atrybucji", "Przecenianie czynników dyspozycyjnych i niedocenianie sytuacyjnych w wyjaśnianiu cudzych zachowań."],
        ["Egotyzm atrybucyjny", "Przypisywanie sobie sukcesów i wypieranie się odpowiedzialności za porażki."],
        ["Po czym poznać kompetencję kulturową diagnosty?", "Wiedza o kulturach, brak etnocentryzmu i stereotypów, pytanie o znaczenia, dostosowanie języka, gestów i narzędzi, świadomość uprzedzeń."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Komu należy się informacja zwrotna", "zleceniodawcy i osobie badanej"],
        ["Proporcja w informacji zwrotnej", "2× więcej pozytywów niż negatywów"],
        ["Liczba zaleceń", "niewiele, np. 3"],
        ["Dobre zalecenie", "konkretne i realne"],
        ["Czego nie robić", "etykietować, oceniać, dawać „dobrych rad”"],
        ["Kompetencja międzykulturowa", "przyjęcie relatywizmu kulturowego"],
        ["Relatywizm kulturowy", "nie ma kultur lepszych i gorszych"],
        ["Etnocentryzm", "„moja kultura jest najlepsza”"],
        ["Etnorelatywizm", "kultury są równoprawne"],
        ["Mniejszość narodowa", "ma państwo gdzie indziej"],
        ["Mniejszość kulturowa", "bez państwowości, np. Kaszubi"],
        ["Model Boltena", "kompetencje międzykulturowe w indywidualnych"],
        ["„Inny” (Bauman)", "tajemniczy, wieloznaczny"],
        ["Ukryty emigrant", "wygląda jak miejscowy, wychowany gdzie indziej"],
        ["Neutralny język", "„czy jest pan w bliskiej relacji?”"],
        ["Podstawowy błąd atrybucji", "przecenianie dyspozycji"]
      ],
      quiz: [
        { q: "Przekonanie, że własna kultura jest najlepsza, to:", o: ["relatywizm kulturowy", "etnocentryzm", "etnorelatywizm", "akomodacja"], a: 1, e: "Etnocentryzm – przeciwieństwo relatywizmu." },
        { q: "Zalecenia po diagnozie powinny być:", o: ["liczne i ogólne", "nieliczne, konkretne i realne", "zawsze pisemne dla szkoły", "sformułowane językiem specjalistycznym"], a: 1, e: "Np. 3 konkretne, możliwe do wykonania zalecenia." },
        { q: "Kaszubi to przykład:", o: ["mniejszości narodowej", "mniejszości kulturowej", "subkultury", "narodu"], a: 1, e: "Mniejszość kulturowa nie ma własnej państwowości." },
        { q: "Który komunikat przy informacji zwrotnej jest lepszy?", o: ["„Ma pani ciężką depresję”", "„Ma pani zaburzenia depresyjne”", "„Jest pani chora psychicznie”", "„Wszystko będzie dobrze”"], a: 1, e: "Unikamy etykietowania." },
        { q: "Kto opisał „Innego” jako byt tajemniczy i wieloznaczny?", o: ["Bolten", "Zygmunt Bauman", "Meehl", "Corey"], a: 1, e: "Bauman, Etyka ponowoczesna." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "slowniczek",
      title: "Słowniczek pojęć i synonimów (z pytań egzaminacyjnych)",
      notes: `
Na egzaminie często pada pytanie o **synonim** lub definicję jednego pojęcia. Poniżej wszystkie pojęcia z listy pytań z poprzednich lat.

| Pojęcie | Znaczenie / synonim |
|---|---|
| stosowany | aplikacyjny (diagnoza – dział psychologii stosowanej) |
| naukowcy (w diagnostyce) | metodolodzy |
| predykcja | przewidywanie |
| prognoza | przewidywanie przyszłego przebiegu |
| ewaluacja | sprawdzenie, ocena (np. skuteczności interwencji) |
| obligatoryjny | obowiązkowy |
| normalny | prawidłowy |
| kompetencja | **nie** jest synonimem umiejętności |
| protodiagnoza | produkt myśli kolektywnej – wstępna diagnoza klienta i otoczenia |
| reifikacja | uprzedmiotowienie |
| etykietowanie | pozorne wyjaśnienie poprzez nazwanie |
| etiologia | przyczyny powstania zaburzenia |
| diagnoza nozologiczna | diagnoza różnicowa (model medyczny) |
| diagnoza statystyczna | formalna, aktuarialna, algorytmiczna |
| akomodacja | zjawisko dopasowania = konwergencja |
| efekt Pigmaliona | samospełniająca się przepowiednia |
| efekt Galatei / Golema | pozytywne / negatywne pierwsze wrażenie (efekt aureoli) |
| błąd jatrogenny | błąd personelu – szkoda wyrządzona przez diagnozę lub leczenie |
| ambulatoryjna (obserwacja) | prowadzona w naturalnym środowisku, w codziennym funkcjonowaniu, poza szpitalem |
| sopor | półśpiączka |
| amnezja | niepamięć |
| prekognicja | przewidywanie czegoś, co się stanie |
| aproseksja | brak możliwości skupienia uwagi |
| hipoproseksja / hiperproseksja | ograniczona / nadmierna koncentracja |
| dysforia | złość, rozdrażnienie |
| anhedonia | niezdolność do odczuwania przyjemności (radości) |
| agrawacja | wyolbrzymianie objawów |
| symulacja / dyssymulacja | udawanie choroby / ukrywanie choroby |
| hipertymia / hipotymia | przesadna / ograniczona ekspresja emocji |
| paratymia / katatymia | ekspresja niedostosowana do sytuacji / życzeniowe zniekształcenie przeżyć |
| derealizacja | poczucie nierealności świata |
| złudzenie (iluzja) / omam | błędne rozpoznanie istniejącego bodźca / spostrzeżenie bez bodźca |
| déjà vu / jamais vu | „już widziane” / „nigdy niewidziane” |
| ślepa recenzja | ocena pracy bez znajomości autora |
| etnocentryzm / etnorelatywizm | „moja kultura najlepsza” / kultury równoprawne |

## Dobra praktyka
Postępowanie zgodne z **praktyką opartą na dowodach** (EBA) i standardami etycznymi: najlepsze dowody empiryczne + biegłość praktyczna + uwzględnienie właściwości, preferencji i kultury klienta.
`,
      flashcards: [
        ["Synonim: stosowany", "Aplikacyjny."],
        ["Synonim: predykcja", "Przewidywanie."],
        ["Synonim: ewaluacja", "Sprawdzenie, ocena."],
        ["Synonim: normalny", "Prawidłowy."],
        ["Synonim: reifikacja", "Uprzedmiotowienie."],
        ["Czym jest etiologia?", "Przyczyną (przyczynami) powstania zaburzenia."],
        ["Synonim: sopor", "Półśpiączka."],
        ["Synonim: amnezja", "Niepamięć."],
        ["Prekognicja", "Przewidywanie czegoś, co się stanie."],
        ["Dysforia", "Złość, rozdrażnienie."],
        ["Anhedonia", "Niezdolność do odczuwania przyjemności."],
        ["Błąd jatrogenny", "Błąd personelu – szkoda wyrządzona przez diagnozę lub leczenie."],
        ["Obserwacja ambulatoryjna", "Prowadzona w naturalnym, codziennym środowisku osoby (poza szpitalem)."],
        ["Dobra praktyka", "Praktyka oparta na dowodach empirycznych i standardach etycznych, z uwzględnieniem klienta."],
        ["Naukowcy w diagnostyce to inaczej…", "Metodolodzy."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Stosowany", "aplikacyjny"],
        ["Naukowcy w diagnostyce", "metodolodzy"],
        ["Predykcja", "przewidywanie"],
        ["Ewaluacja", "sprawdzenie, ocena"],
        ["Obligatoryjny", "obowiązkowy"],
        ["Normalny", "prawidłowy"],
        ["Etiologia", "przyczyny zaburzenia"],
        ["Amnezja", "niepamięć"],
        ["Prekognicja", "przewidywanie, co się stanie"],
        ["Anhedonia", "niezdolność do odczuwania przyjemności"],
        ["Symulacja", "udawanie choroby"],
        ["Hipertymia", "przesadna ekspresja emocji"],
        ["Hipotymia", "ograniczona ekspresja emocji"],
        ["Paratymia", "emocje niedostosowane do sytuacji"],
        ["Déjà vu", "„już widziane”"],
        ["Ślepa recenzja", "ocena bez znajomości autora"]
      ],
      quiz: [
        { q: "Synonimem słowa „reifikacja” jest:", o: ["etykietowanie", "uprzedmiotowienie", "stygmatyzacja", "ewaluacja"], a: 1, e: "Reifikacja = uprzedmiotowienie." },
        { q: "Dysforia to:", o: ["obniżony nastrój", "złość, rozdrażnienie", "brak odczuwania przyjemności", "lęk"], a: 1, e: "Anhedonia – brak przyjemności." },
        { q: "Błąd jatrogenny to błąd:", o: ["pacjenta", "personelu", "narzędzia", "statystyczny"], a: 1, e: "Szkoda wyrządzona przez personel/leczenie." },
        { q: "Prekognicja to:", o: ["przewidywanie czegoś, co się stanie", "niepamięć wsteczna", "poczucie „już widziane”", "przymglenie świadomości"], a: 0, e: "Może współwystępować z déjà vu." },
        { q: "Ewaluacja oznacza:", o: ["przewidywanie", "sprawdzenie, ocenę", "rozpoznanie", "uprzedmiotowienie"], a: 1, e: "Ewaluacja = sprawdzenie." },
        { q: "Protodiagnoza to:", o: ["diagnoza statystyczna", "produkt myśli kolektywnej", "orzeczenie obligatoryjne", "diagnoza nozologiczna"], a: 1, e: "Wstępna diagnoza klienta i jego otoczenia." }
      ]
    }
  ]
});
