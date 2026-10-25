// Prawdziwe zagadnienia egzaminacyjne z wprowadzenia do diagnostyki (dr Małgorzata M. Kulik)
// Źródło pytań: Dysk „drugi rok JULIA / 1 semestr / wprowadzenie do diagnostyki / Pytania egzamin.pdf”
// (lista spisana przez studentów po egzaminie + lista zagadnień z prezentacji).
// Wzorcowe odpowiedzi oparte na notatkach z wykładów (data/diagnostyka.js).
(function () {
  const subject = (window.SUBJECTS || []).find((s) => s.id === "diagnostyka");
  if (!subject) return;
  const add = (topicId, list) => {
    const t = subject.topics.find((x) => x.id === topicId);
    if (!t) return;
    t.open = (t.open || []).concat(list.map(([q, a]) => ({ q, a, real: true })));
  };

  add("czym-jest", [
    ["Kto jest autorką podręcznika, z którego się uczymy?", `
- **Katarzyna Stemplewska-Żakowicz**, *Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna* (2013).`],
    ["Co znaczy pojęcie „diagnoza” na trzech poziomach (trzy znaczenia terminu)?", `
- **Dziedzina nauki i praktyki** (psychological assessment) – **dział psychologii stosowanej (aplikacyjnej)**.
- **Proces diagnozowania** (assessment) – badanie, diagnozowanie.
- **Efekt procesu** (diagnosis) – rozpoznanie, wyjaśnienie, **prognoza**, plan interwencji i jej **ewaluacja**.`],
    ["Diagnoza jako kompetencja – trzy filary. Czym różni się wiedza od zdolności?", `
- Kompetencja diagnostyczna (McClelland) = umiejętność posłużenia się metodami (wywiad, testy, obserwacja), by określić ważne właściwości osoby, organizacji lub sytuacji.
- **Trzy filary: wiedza, umiejętności, wartości (etyka)**; fundament: **zdolności i osobowość**.
- **Wiedza** – to, co nabyte („co wiem”); **zdolności** – potencjał, na którym się opiera (fundament).
- **Kompetencja to nie umiejętność** – umiejętność jest tylko jednym z filarów.`],
    ["Czym jest norma w psychologii? Wymień i opisz rodzaje norm.", `
- **Norma** – konstrukt naukowy pozwalający wnioskować o **normalnych (= prawidłowych)** zachowaniach.
- **Statystyczna (ilościowa)** – normalne jest to, co przeciętne, najczęstsze.
- **Społeczno-kulturowa (przystosowawcza)** – normalne jest to, co powszechne w danej kulturze; jednostka spełnia powinności społeczne.
- **Teoretyczna** – wzorzec idealny wyprowadzony z koncepcji biopsychospołecznej natury człowieka.`],
    ["Czym jest uspołeczniona kultura i optymalne funkcjonowanie jednostki?", `
- **Uspołeczniona kultura** – jednostka, zachowując się zgodnie z normami: **nie narusza ładu społecznego, nie zagraża innym, może się rozwijać i przyczyniać do rozwoju społeczeństwa**.
- **Optymalne funkcjonowanie** (Lewicki) – jednostka zaspokaja ważne dla siebie potrzeby **zgodnie z normami społecznymi**.`],
    ["Klasyfikacje: ICD-10, DSM-5, DC:0-3R, ICD-11.", `
- **ICD-10** (WHO) – opisowa, ateoretyczna, **alfanumeryczna** (np. F33), **wieloosiowa** (I rozpoznanie, II niesprawność, III czynniki kontekstowe).
- **DSM-5** (Amerykańskie Towarzystwo Psychiatryczne, 2013) – drzewa decyzyjne do diagnozy różnicowej; obowiązuje w USA.
- **DC:0-3R** – dzieci **do 3 r.ż.**, **5 osi** (m.in. zaburzenia relacji, stresory, poziom rozwoju emocjonalnego).
- **ICD-11** – nowsza wersja klasyfikacji WHO.`],
    ["Omów trzy modele diagnozy: nozologiczny, funkcjonalny i interakcyjny.", `
- **Nozologiczny (różnicowy)** – model **medyczny**, psycholog pomocniczy, kluczowe **różnicowanie**; wady: **reifikacja**, **etykietowanie**, stygmatyzacja, efekt Rumpelstilzchena.
- **Funkcjonalny** – wyjaśnia problem i jego **etiologię** w kategoriach teorii psychologicznej, uwzględnia **zasoby i mocne strony**; pomija kontekst społeczny, czasochłonny.
- **Interakcyjny (psychospołeczny)** – **uzgadnianie** rozumienia problemu z klientem: **protodiagnoza** → badania → ustosunkowanie klienta → negocjacje → uzgodnienie znaczeń.`]
  ]);

  add("paradygmaty", [
    ["Orzeczenie vs opinia. Co to znaczy, że są obligatoryjne lub nieobligatoryjne?", `
- **Orzeczenie** – rozstrzyga, trzeba je wykonać; **opinia** ma charakter **wspierający**, można ją podważyć.
- **Obligatoryjne (= obowiązkowe)** – wymagane ustawą (np. pozwolenie na broń, kierowcy kat. C i D, sędziowie, kształcenie specjalne).
- **Nieobligatoryjne** – mogą, ale nie muszą być wydane; zawsze nierozstrzygające (np. opinie biegłych, RODK).
- Dodatkowo: samodzielne / niesamodzielne (zespół), rozstrzygające / nierozstrzygające.`],
    ["Podejście nomotetyczne i idiograficzne.", `
- **Nomotetyczne** – nauki przyrodnicze, **prawa ogólne**, procedury wystandaryzowane i znormalizowane, **skala normatywna**.
- **Idiograficzne** – nauki humanistyczne, **jednostka** i jej indywidualność, wywiad, obserwacja, studium przypadku, **skala ipsatywna**.
- Rozróżnienie: Windelband (1884).`],
    ["Skala normatywna i ipsatywna.", `
- **Normatywna** – wynik porównujemy z **innymi osobami** (rozkład normalny, normy) → różnice **interindywidualne**.
- **Ipsatywna** – wynik porównujemy z **innymi wynikami tej samej osoby** (np. przed i po terapii) → różnice **intraindywidualne**, mocne i słabe strony.`],
    ["Ilościowe i jakościowe metody badawcze.", `
| **Ilościowe** | **Jakościowe** |
|---|---|
| wyjaśnienie i kontrola | zrozumienie |
| świat obiektywnie istniejący, wiedza obiektywna | konstruowanie świata, wiedza subiektywna |
| badacz – ekspert | badacz – świadek, uczestnik |
| generalizacja, trafność, rzetelność, replikowalność | „lokalny” aspekt wiedzy |`],
    ["Diagnoza kliniczna a diagnoza statystyczna.", `
- **Kliniczna** – diagnosta łączy dane i wnioskuje metodami **nieformalnymi, subiektywnymi**.
- **Statystyczna = formalna = aktuarialna = algorytmiczna** – wnioski według określonego **algorytmu**.
- **Paul Meehl** (1954) – porównanie predykcji klinicznej i statystycznej.`]
  ]);

  add("kontekst", [
    ["Cechy dobrego psychologa (diagnosty).", `
Według Coreya i Corey: **uważne słuchanie**, **odwaga** (przyznanie się do błędu), **emocjonalna obecność**, **dystans psychologiczny**, **dobra wola i troska**, **elastyczność**, **gotowość do modelowania**, **szczerość** (spójność komunikatów werbalnych i niewerbalnych).`],
    ["Co to jest efekt Pigmaliona, Galatei i Golema?", `
- **Efekt Pigmaliona** – **samospełniająca się przepowiednia**: moje przekonanie → moje działanie → przekonania i zachowanie drugiej osoby.
- **Efekt Galatei** (efekt nimbu) – **pozytywne** pierwsze wrażenie → diagnosta bardziej otwarty.
- **Efekt Golema** – **negatywne** pierwsze wrażenie → diagnosta usztywniony.`],
    ["Zjawisko dopasowania (akomodacja) i behawioralne potwierdzenie.", `
- **Akomodacja = dopasowanie = konwergencja** (teoria akomodacji komunikacji) – nieświadome dostosowanie się rozmówców; otwartość psychologa sprzyja otwartości badanego.
- **Behawioralne potwierdzenie** – badany nieświadomie zachowuje się tak, jak **oczekuje diagnosta**.`],
    ["Co to jest błąd jatrogenny? Jakie są inne błędy diagnostyczne?", `
- **Błąd jatrogenny** – szkoda wyrządzona przez **personel** lub sam proces diagnozy/leczenia.
- Inne: **techniczne** (np. test bez norm w diagnozie indywidualnej), **obserwacji** (nie widzi objawów lub widzi nieistniejące), **rozumowania** (niezupełnej eliminacji, fałszywej przyczyny, atrybucji, pomieszania walorów objawów).`]
  ]);

  add("etyka", [
    ["Standardy etyczno-zawodowe psychologa – dwa kodeksy.", `
- **Kodeks Etyczno-Zawodowy Psychologa** (PTP, 1991).
- **Meta-Kodeks Etyczny EFPA** – 4 zasady: **poszanowanie praw i godności osoby, kompetencja, odpowiedzialność, prawość**.`],
    ["Okoliczności świadomej zgody na badanie (wymień i opisz).", `
Klient musi znać (13 okoliczności, Stemplewska-Żakowicz):
- **cel i charakter** badania, **opłatę**,
- zakres odpowiedzialności własnej i psychologa, udział **strony trzeciej**,
- **poufność** i jej ograniczenia, spodziewane **korzyści**, **ryzyko**,
- **alternatywy** i konsekwencje niepoddania się badaniu,
- możliwość zadawania pytań, **odmowy lub wycofania się** w każdej chwili,
- okres, którego dotyczy zgoda, i sposób jej unieważnienia.
Zgoda **pisemna** i **dobrowolna** (bez presji i obietnic korzyści).`],
    ["Czy można zbadać dziecko? Kiedy potrzebna jest zgoda rodzica?", `
- **Każde badanie dziecka (do 18 r.ż.) wymaga pisemnej zgody rodzica lub opiekuna prawnego** (podkreślane na wykładzie).
- Standardy Diagnozy Psychologicznej w Edukacji (2018): **powyżej 16 r.ż. podwójna zgoda** (rodzic i dziecko); osobna zgoda na nagrywanie i lustro weneckie.`],
    ["Art. 240 Kodeksu karnego – obowiązek zawiadomienia.", `
- Przy **wiarygodnej informacji** o poważnych przestępstwach wobec dzieci (np. ciężki uszczerbek, zgwałcenie, wykorzystanie seksualne) – ich popełnieniu, przygotowaniu lub usiłowaniu – **każdy** ma obowiązek zawiadomić organy ścigania.
- Za niezawiadomienie grozi **do 3 lat** pozbawienia wolności.`],
    ["Model decyzyjny Gottlieba. Konflikty ról i interesów.", `
- **Model Gottlieba** (1993) ocenia ryzyko podwójnej relacji: **rozkład władzy**, **czas trwania relacji**, **jednoznaczność jej zakończenia**. Podwójne relacje nie są z definicji nieetyczne.
- **Konflikt ról** – psycholog jest wobec osoby jednocześnie w roli zawodowej i innej.
- **Konflikt interesów** – usługi dla kilku klientów, strona trzecia, klient w sensie **prawnym** (płaci) vs **moralnym** (podmiot oddziaływań).`],
    ["Diagnoza jako spotkanie i jako interwencja.", `
- **Spotkanie** – co najmniej 2 osoby; **setting** (czas, miejsce, osoby, cel); ingerencja w sposób istnienia drugiego człowieka.
- **Interwencja** – diagnoza **zawsze coś zmienia**; jeśli nie ma pomóc, **nie może zaszkodzić**.`]
  ]);

  add("proces", [
    ["Hipoteza i jej rodzaje. Czym jest wskaźnik?", `
- **Hipoteza** – domysł wymagający weryfikacji; sprawdzalny i racjonalny. **Opisowa** (np. obniżony nastrój) lub **wyjaśniająca** (np. depresja po śmierci matki).
- **Wskaźnik** – empiryczny, obserwowalny lub mierzalny przejaw stanu lub procesu (np. wynik testu) – to, po czym poznajemy odpowiedź.`],
    ["Procedura pięciu pytań Szustrowej.", `
Model **normatywny** (1987); przy planowaniu pytania w tej kolejności, przy analizie wyników – **w odwrotnej**:
- **Cel badania** – po co?
- **Orientacja teoretyczna** – jakie kategorie i terminy?
- **Pytania i hipotezy diagnostyczne**.
- **Dobór wskaźników** – jakich informacji potrzebuję?
- **Operacjonalizacja wskaźników** – jakimi metodami je uzyskam?`],
    ["Model Maloneya i Warda.", `
Model **opisowy**, 7 faz: wyjściowy zbiór danych i **protodiagnoza** → hipotezy **cząstkowe** (z uwzględnieniem **proporcji podstawowej**) → badania (odrzucenie, modyfikacja, akceptacja hipotez) → hipotezy **ogólne** → integracja w **dynamiczny model osoby** → zmienne sytuacyjne → **predykcja zachowania** i decyzje.`],
    ["Model Paluchowskiego i model GAP.", `
- **Paluchowski** – model opisowy, **iteracyjny**, 4 etapy: **prediagnostyczny** → **badanie diagnostyczne** → **opis i interpretacja** → **interwencja**.
- **GAP** (Fernández-Ballesteros) – model **integracyjny**: analiza przypadku → organizowanie i raportowanie wyników → planowanie interwencji → **ocena interwencji** i badanie kontrolne.`],
    ["Konceptualizacja przypadku.", `
- = sformułowanie **diagnostyczne** (jak jest?) + **kliniczne** (dlaczego?) + **dotyczące interwencji** (co zrobić?) – Sperry i Sperry.
- Uporządkowany zbiór **hipotez** o czynnikach **etiologicznych, predysponujących i podtrzymujących**, uzasadnionych teorią i danymi.`]
  ]);

  add("relacja", [
    ["Model kontaktu Tickle-Degnen i Rosenthala. Wskaźniki kontaktu.", `
- 3 procesy: **wzajemna uwaga** (ważna cały czas), **pozytywne nastawienie** (znaczenie **maleje**), **koordynacja zachowań** (znaczenie **rośnie**).
- Wskaźniki z zewnątrz: dopasowanie postawy ciała, zsynchronizowane ruchy i gesty, dopasowanie mimiki i intonacji; od wewnątrz: zainteresowanie, poczucie harmonii, ciepło.`],
    ["Kontakt pozorny.", `
- Wydaje się, że kontakt jest, a go **nie ma** (np. za wcześnie zadane pytania zagrażające); rozmówca nie jest szczery.
- **Wskaźniki introspekcyjne**: znudzenie, trudność z koncentracją, **odpowiedzi fasadowe**, poczucie, że badany „nie mówi nic ważnego”, chęć przerwania.`],
    ["Kontrakt (umowa) w relacji diagnostycznej.", `
- Dobrowolna, świadoma, negocjowalna umowa z czytelnymi prawami i zobowiązaniami; ma funkcję terapeutyczną.
- Elementy: **cel, sposoby osiągnięcia, zyski, koszty**; wiąże się ze **świadomą zgodą** i poufnością.
- Kolejność: **kontakt → kontrakt → przymierze w działaniu**.`],
    ["Opór i sposoby radzenia sobie z nim.", `
- **Opór** – świadoma lub nieświadoma niechęć do eksplorowania treści; stan lub cecha; też **źródło informacji**.
- Przejawy: **no-show**, milczenie, „nie wiem”, zmiana tematu, ironizowanie.
- Radzenie sobie: **kontrakt**, nazywanie uczuć, **dawanie wyboru**, przeformułowanie pytań, **pytanie projekcyjne**, mówienie o sobie; bez polemiki i tłumaczenia się.`]
  ]);

  add("narzedzia", [
    ["Co to jest trafność i rzetelność? Cechy testu psychologicznego.", `
- **Trafność** – czy test mierzy to, co ma mierzyć (teoretyczna, diagnostyczna, prognostyczna).
- **Rzetelność** – **dokładność pomiaru**: mały błąd, odporność na czynniki zewnętrzne.
- Test psychologiczny musi być: **wystandaryzowany, zobiektywizowany, trafny, rzetelny, znormalizowany**; daje **reprezentatywną próbkę zachowań**.`],
    ["Jak działa skala stenowa? Co oznacza wynik 7 sten w ekstrawersji, a co 2 sten w otwartości (NEO-FFI)?", `
- Skala stenowa: **1–10, M = 5,5, SD = 2**; **1–4 niskie, 5–6 przeciętne, 7–10 wysokie**.
- **7 sten w ekstrawersji** – wynik **wysoki**: osoba jest bardziej ekstrawertyczna niż przeciętna osoba w normie.
- **2 sten w otwartości** – wynik **bardzo niski**: znacznie mniejsza otwartość na doświadczenie niż u większości.`],
    ["Opis statusu pacjenta (status praesens psychicus) – wypisz i opisz.", `
**11 wymiarów**: **wygląd · zachowanie i napęd psychoruchowy · zachowania werbalne · nastrój i afekt · świadomość · orientacja · postrzeganie · pamięć · uwaga · myślenie · poczucie choroby**.
Np. świadomość: ilościowe zaburzenia (senność patologiczna, **sopor**, śpiączka) i jakościowe; orientacja: w czasie, miejscu, sytuacji i co do własnej osoby.`],
    ["Odróżnij złudzenie (iluzję) od omamu.", `
- **Złudzenie (iluzja)** – błędne rozpoznanie **istniejącego bodźca**, krytycyzm zachowany (lampa wzięta za człowieka).
- **Omam** – spostrzeżenie **bez bodźca**, z poczuciem realności i **bez krytycyzmu**.`],
    ["Zaburzenia uwagi: aproseksja, hipoproseksja, hiperproseksja.", `
- **Aproseksja** – brak możliwości skupienia uwagi.
- **Hipoproseksja** – ograniczona koncentracja.
- **Hiperproseksja** – nadmierna koncentracja (na jednym bodźcu).`],
    ["Zaburzenia emocji: hipertymia, hipotymia, paratymia, katatymia; dysforia, anhedonia.", `
- **Hipertymia** – przesadna ekspresja emocji; **hipotymia** – ograniczona.
- **Paratymia** – ekspresja **niedostosowana** do sytuacji; **katatymia** – **życzeniowe zniekształcenie** przeżyć.
- **Dysforia** – złość, rozdrażnienie; **anhedonia** – niezdolność do odczuwania przyjemności.`],
    ["Poczucie choroby: agrawacja, symulacja, dyssymulacja, zespół Münchhausena.", `
- **Agrawacja** – **wyolbrzymianie** istniejących objawów.
- **Symulacja** – **udawanie** choroby; **dyssymulacja** – **ukrywanie** choroby.
- **Zespół Münchhausena** – wywoływanie lub zmyślanie objawów, by uzyskać opiekę medyczną.`],
    ["Co to jest dobra praktyka (EBA)?", `
- **Praktyka oparta na dowodach** (Evidence-Based Assessment): integracja **najlepszych dowodów empirycznych** z **biegłością praktyczną**, z uwzględnieniem **właściwości, preferencji i kultury klienta** (APA, 2006).`]
  ]);

  add("testowanie", [
    ["Czym się różni skala od inwentarza?", `
- **Skala** – narzędzie **jednorodne**, mierzy **jeden konstrukt**; pozycje wysoko skorelowane i wymienne.
- **Inwentarz** – narzędzie **heterogeniczne** (np. Wielka Piątka – 5 skal); pozycje nieskorelowane, każda wnosi coś ważnego.`],
    ["Wymień 5 testów i opisz je (z autorami).", `
- **MMPI-2** (Butcher, Graham, Tellegen, Dahlstrom) – samoopis, **567 pozycji**, skale kontrolne i kliniczne.
- **SWLS** (Ed Diener; PL Juczyński) – **5 twierdzeń**, satysfakcja z życia, przesiewowo.
- **ACL** (Gough, Heilbrun) – **300 przymiotników**, 37 skal, Ja realne i idealne.
- **WISC-R / WAIS-R** (Wechsler) – inteligencja dzieci 6–16 / dorosłych 16–79 lat.
- **Matryce Ravena** (TMK, TMZ, TM S-Plus) – niewerbalne, czynnik g; **Test Rysunku Postaci** (Goodenough, Harris) – rozwój intelektualny dziecka.`],
    ["Jaka skala jest idealna do badania „Ja realnego”?", `
- **ACL – Lista Przymiotnikowa** (Gough, Heilbrun): badany wybiera przymiotniki opisujące **Ja realne** (a w innej instrukcji **Ja idealne**).`],
    ["Testy obiektywne i projekcyjne. Kategorie metod projekcyjnych.", `
- **Obiektywne** spełniają kryteria testu; **projekcyjne** – nadawanie znaczenia wieloznacznemu materiałowi, zwykle **nieznormalizowane**.
- Ze względu na stopień ustrukturalizowania: **ustrukturalizowane** (np. **Test Niedokończonych Zdań Rottera**), **częściowo** (TAT, skojarzenia słowne, Scenotest), **nieustrukturalizowane** (**Rorschach**, rysunek projekcyjny).`],
    ["Kiedy stosować metody projekcyjne, a kiedy nie?", `
- **Tak**: do nawiązania kontaktu, przy **silnym oporze**, lęku przed oceną, odpowiadaniu pod aprobatę, trudnościach z werbalizacją, niskim wglądzie, sprawach intymnych.
- **Nie**: do **wykrywania nadużyć seksualnych lub fizycznych**, gdy metoda nie ma właściwości psychometrycznych, gdy nie jesteś ekspertem, gdy metoda jest powszechnie dostępna.`]
  ]);

  add("informacja-zwrotna", [
    ["Etnocentryzm a etnorelatywizm.", `
- **Etnocentryzm** – „moja kultura jest najlepsza”, ocenianie innych według własnych standardów.
- **Etnorelatywizm** – własna kultura jest **jedną z wielu równoprawnych**; zachowania rozumie się w ich kontekście kulturowym.`],
    ["Co to są kompetencje międzykulturowe i co wskazuje, że jesteśmy kompetentni kulturowo?", `
- **Kompetencja międzykulturowa** – zdolność do przyjęcia **relatywizmu kulturowego** i praktycznego stosowania wiedzy o odmienności kultur.
- Wskaźniki: znamy podstawy innych kultur (religie, święta, zwyczaje, dystans, dotyk), **unikamy etnocentryzmu i stereotypów**, pytamy o znaczenie zachowań, dostosowujemy język, gesty i narzędzia, jesteśmy świadomi **własnych uprzedzeń**.`],
    ["Podaj konkretne przykłady kompetencji międzykulturowych (np. wobec muzułmanów).", `
- Nie proponujemy **wieprzowiny** (np. schabowego) ani alkoholu; szanujemy **post** (ramadan) i czas modlitwy przy umawianiu terminu.
- Uwaga na **dotyk i podawanie ręki** osobie innej płci, dystans, formy grzecznościowe; dopuszczamy obecność członka rodziny, jeśli to dla klienta ważne.
- Używamy **neutralnego języka**, testów z **adaptacją kulturową**, interpretujemy zachowanie w kontekście kultury (to, co normalne w jednej, w innej może wyglądać na objaw).`],
    ["Kim jest ukryty emigrant?", `
- **Ukryty emigrant (imigrant)** – osoba, która **wygląda i mówi jak członek większości**, ale wychowała się w **innej kulturze**, więc inni oczekują od niej „miejscowych” zachowań (dzieci trzeciej kultury).`]
  ]);

  add("slowniczek", [
    ["Podaj synonimy: stosowany, predykcja, obligatoryjny, normalny, ewaluacja, ambulatoryjny.", `
- **stosowany** = aplikacyjny; **predykcja** = przewidywanie; **obligatoryjny** = obowiązkowy; **normalny** = prawidłowy; **ewaluacja** = sprawdzenie, ocena; **ambulatoryjny** – w naturalnym środowisku, poza szpitalem.`],
    ["Wyjaśnij: reifikacja, etykietowanie, etiologia, protodiagnoza, diagnoza nozologiczna.", `
- **Reifikacja** = uprzedmiotowienie; **etykietowanie** = pozorne wyjaśnienie poprzez nazwanie.
- **Etiologia** – przyczyny powstania zaburzenia.
- **Protodiagnoza** – **produkt myśli kolektywnej**: wstępna diagnoza klienta i otoczenia.
- **Diagnoza nozologiczna** – diagnoza różnicowa (model medyczny).`],
    ["Wyjaśnij: sopor, amnezja, prekognicja, déjà vu, jamais vu, derealizacja.", `
- **Sopor** = półśpiączka; **amnezja** = niepamięć; **prekognicja** = przewidywanie czegoś, co się stanie.
- **Déjà vu** – „już widziane”; **jamais vu** – nierozpoznanie znanego.
- **Derealizacja** – poczucie nierealności świata („sen na jawie”).`]
  ]);
})();
