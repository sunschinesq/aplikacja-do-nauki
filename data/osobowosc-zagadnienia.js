// Prawdziwe zagadnienia egzaminacyjne z psychologii osobowości (79 pytań)
// Źródło: Dysk „drugi rok JULIA / 1 semestr / psychologia osobowości / psychologia-osobowości-egzamin.pdf”
// Pytania trafiają do tematów jako pytania otwarte oznaczone „real: true” (📌 w aplikacji).
(function () {
  const subject = (window.SUBJECTS || []).find((s) => s.id === "osobowosc");
  if (!subject) return;
  const add = (topicId, list) => {
    const t = subject.topics.find((x) => x.id === topicId);
    if (!t) return;
    t.open = (t.open || []).concat(list.map(([q, a]) => ({ q, a, real: true })));
  };

  add("metody", [
    ["1. Co jest przedmiotem badań psychologii osobowości?", `
- Bada to, co sprawia, że różne procesy psychiczne, dyspozycje i funkcje tworzą w człowieku **specyficzną całość**, a ich aktywność ma charakter **spójny i zintegrowany**.
- Przedmiot zależy od kierunku:
  - **psychoanaliza** – złożona i dynamiczna struktura nieświadomych i świadomych procesów,
  - **behawioryzm** – zespół nawyków,
  - **teorie cech** – zespół cech,
  - **psychologia humanistyczna** – całość doświadczania siebie.`],
    ["2. Czym charakteryzują się dwa podejścia do badań w psychologii osobowości?", `
- **Podejście dedukcyjne** – ujmuje osobowość w struktury i ogólne zasady funkcjonowania; sprawdza, czy hipotezy wyprowadzone z ogólnego poziomu się potwierdzają.
- **Podejście indukcyjne** – opisuje fakty i gromadzi dane empiryczne, a potem uogólnia je w modelach osobowości (strukturalnych, funkcjonalnych).`],
    ["3. Na czym polega metoda kliniczna w badaniu osobowości?", `
- Odrębne, systematyczne analizowanie i badanie **jednostek**.
- Wyjaśnianie polega na **interpretacji zachowania** na podstawie twierdzeń i założeń teorii.
- Pozwala ujawnić nowe zjawiska i inspiruje nowe badania.
- Nastawiona na **terapię i diagnozę**; łączy dane z obserwacji, wywiadów i badań.
- Charakterystyczna dla teorii **psychoanalitycznych i dynamicznych**.`],
    ["4. Na czym polega metoda korelacyjna w badaniu osobowości?", `
- Cel: porządkowanie danych o **wymiarach i cechach** osobowości i szukanie **zależności** między nimi.
- Weryfikacja danych technikami **statystycznymi**; teoria cech służy do formułowania hipotez.
- Służy do opisu osobowości i poznawania **różnic i podobieństw** między ludźmi.
- Bazuje na danych **samoobserwacyjnych** z dużych prób (**kwestionariusze**).`],
    ["5. Na czym polega metoda eksperymentalna w badaniu osobowości?", `
- Bazuje na **teorii poznawczej** i teorii **społecznego uczenia się**.
- Stosuje **przyczynowo-skutkowy** paradygmat wyjaśniania: teoria → zależność → testowanie zależności w eksperymencie.
- Przedmiot: procesy aktywności człowieka, zwłaszcza powiązania procesów poznawczych, emocjonalnych i motywacyjnych.
- Dane pobierane **obiektywnie**; metoda najbardziej naukowa, dąży do wykrycia **ogólnych praw** funkcjonowania osobowości.`],
    ["6. Porównaj zalety i wady metody klinicznej, korelacyjnej i eksperymentalnej.", `
| | Zalety | Wady |
|---|---|---|
| **Kliniczna** | badanie w sposób naturalny, dogłębne poznanie jednostki, funkcjonowanie jako całość, nowe hipotezy, rozumienie ukrytego sensu zachowań, wgląd w źródła psychopatologii | nie da się empirycznie sprawdzić trafności spostrzeżeń, subiektywna interpretacja, małe próby |
| **Korelacyjna** | badanie wielu osób, szeroki zakres zmiennych, wykrywanie powiązań między cechami | tylko współwystępowanie, nie przyczynowość; dane z samoopisu; sztywne pytania; wątpliwa rzetelność i trafność |
| **Eksperymentalna** | związki **przyczynowo-skutkowe**, kontrolowana manipulacja zmiennymi, obiektywna rejestracja danych | **sztuczna sytuacja** laboratoryjna, nie obejmuje zjawisk niemożliwych do badania w laboratorium |`],
    ["7. Cele psychologii osobowości.", `
- **Integracja wiedzy** o człowieku z różnych podejść.
- Formułowanie **statycznych i dynamicznych modeli** osobowości pozwalających przewidywać funkcjonowanie.
- Tworzenie programów **psychoedukacyjnych, profilaktycznych** i wspierających rozwój.
- Tworzenie podstaw dla **terapii**.
- Rozwijanie **metod badawczych**.`]
  ]);

  add("freud", [
    ["8. Model topograficzny osobowości.", `
- Trzy poziomy psychiki: **świadomość** (to, co aktualnie przeżywamy) → **przedświadomość** (treści dostępne, które łatwo przywołać) → **nieświadomość** (treści wyparte, popędy – największa i najważniejsza część).
- Metafora góry lodowej: większość życia psychicznego przebiega poza świadomością.`],
    ["9. Strukturalny model osobowości.", `
| **Id** | **Ego** | **Superego** |
|---|---|---|
| wrodzony system pierwotny, dziedziczone wyposażenie, zbiór popędów | organ wykonawczy id, w większości świadome | instancja krytyczna i moralna, rozwija się ostatnia |
| **zasada przyjemności** | **zasada rzeczywistości** | **zasada doskonałości** |
| wewnętrzny świat subiektywnych doznań, bez wiedzy obiektywnej | odróżnia umysł od rzeczywistości, proces wtórny, szuka obiektu zaspokojenia; energia z id | wewnętrzna reprezentacja wartości i ideałów, karze **poczuciem winy i wstydu**, hamuje impulsy id |`],
    ["10. Na czym polega dynamika osobowości?", `
- Konflikty wewnętrzne: **popęd życia vs popęd śmierci** oraz **id vs superego**.
- Konflikt → **lęk**, który odczuwa ego przepełnione stymulacją (presja, niemożność zaspokojenia potrzeby).
- **Kateksja** – zainwestowanie energii popędu w działanie lub wyobrażenie, które go zaspokoi.
- Rodzaje lęku: **realistyczny**, **neurotyczny**, **moralny**.
- Ego radzi sobie z lękiem za pomocą **mechanizmów obronnych**.`],
    ["11. Teoria popędów.", `
- **Popęd** – siła kierująca działaniem ku celowi; ma **źródło** (stan braku), **cel** (usunięcie pobudzenia), **przedmiot** (obiekt zaspokajający) i **siłę** (natężenie).
- **Popędy życia (libido, eros)** – pozytywna, twórcza siła służąca przetrwaniu: głód, pragnienie, popęd seksualny i samozachowawczy; energia = **libido**.
- **Popędy śmierci (tanatos, destrudo)** – dążą do zniszczenia, redukcji napięć i powrotu do stanu nieorganicznego; do wewnątrz → samozniszczenie, na zewnątrz → **agresja**.`],
    ["12. Na czym polega psychiczny determinizm?", `
- Wszystko, co robimy, czujemy, myślimy i śnimy, jest **motywowane przez wewnętrzne siły**, których **nie jesteśmy świadomi** – nic w psychice nie dzieje się przypadkiem.`],
    ["13. Dlaczego osobowość jest systemem ekonomicznym?", `
- Osobowość działa na zasadzie **dystrybucji ograniczonej energii** psychicznej na różne zadania.
- Zachodzi nieświadoma **analiza kosztów i korzyści** „inwestowania” energii w konkretne zadanie.`],
    ["14. Co to są mechanizmy obronne osobowości i jakie są ich rodzaje?", `
**Mechanizmy obronne** chronią ego przed lękiem i bólem.
- **Wyparcie** – zepchnięcie do nieświadomości treści związanych z nieakceptowanym popędem (powraca w snach, fantazjach).
- **Reakcja upozorowana** – zastąpienie impulsu jego przeciwieństwem (pociąg → wstręt).
- **Projekcja** – przypisanie własnych nieakceptowanych pragnień i cech obiektowi zewnętrznemu.
- **Introjekcja** – wchłonięcie cech obiektu zewnętrznego do Ja.
- **Identyfikacja** – przejęcie cech obiektu i częściowe upodobnienie się do niego.
- **Internalizacja** – uwewnętrznienie zasad, nakazów i zakazów jako własnych.
- **Sublimacja** – przeniesienie energii popędu na cel społecznie akceptowany.
- **Regresja** – cofnięcie się do wcześniejszej fazy rozwoju; **fiksacja** – zatrzymanie się na danej fazie.`],
    ["15. Teoria lęku.", `
- **Konflikt → lęk**; odczuwa go ego przepełnione stymulacją (presja, naciski, niemożność zaspokojenia potrzeby).
- **Lęk realistyczny** – obawa przed rzeczywistym niebezpieczeństwem.
- **Lęk neurotyczny** – obawa, że popędy wymkną się spod kontroli ego, i obawa przed karą.
- **Lęk moralny** – obawa przed własnym sumieniem (superego).`],
    ["16. Stadia rozwoju psychoseksualnego.", `
- **Oralne** (1. r.ż.) → **analne** (2–3 r.ż.) → **falliczne** (4–6 r.ż.) → **latencji** (7–13 r.ż.) → **genitalne** (adolescencja i dorosłość).
- Rozwój psychiki to rozwój energii **libido** i reakcji na napięcia; zablokowanie na danym etapie = **fiksacja**.`],
    ["17. Psychoanaliza jako metoda badania osobowości.", `
- Posługuje się **metodą kliniczną**.
- Analizuje **wzorce zachowania**, a nie pojedyncze epizody.
- Obejmuje interpretację **czynności pomyłkowych**, analizę **przeżyć z dzieciństwa** i interpretację **marzeń sennych**.`]
  ]);

  add("relacje-z-obiektem", [
    ["18. Co to są obiekty wewnętrzne i zewnętrzne?", `
- **Obiekt zewnętrzny** – realna osoba (np. matka).
- **Obiekt wewnętrzny** – psychiczna reprezentacja cech obiektu zewnętrznego, **uwewnętrzniona** w strukturze psychicznej.`],
    ["19. Czym jest nieświadoma fantazja?", `
- Forma funkcjonowania **procesu pierwotnego**.
- **Organizuje przeżycia emocjonalne** dziecka i wpływa na przeżywanie relacji z obiektami.
- Stanowi podstawę **mechanizmów obronnych**.`],
    ["20. Na czym polegają mechanizmy obronne: rozszczepienie, identyfikacja projekcyjna, identyfikacja introjekcyjna?", `
- **Rozszczepienie (splitting)** – oddzielenie dobrych i złych aspektów self i obiektu.
- **Identyfikacja projekcyjna** – odszczepione części self są projektowane na obiekt i przez niego kontrolowane.
- **Identyfikacja introjekcyjna** – fantazja o psychicznym wchłonięciu obiektu i utożsamieniu się z nim.`],
    ["21. Co to jest self-obiekt?", `
- **Self-obiekt** – obiekt relacyjny, z którym self tworzy więź i przez który **reguluje swoje napięcia** oraz **poczucie istnienia** (Kohut).`],
    ["22. Na czym polega wpływ fantazji na rzeczywistość i rzeczywistości na fantazje według M. Klein?", `
- **Nieświadome fantazje** wpływają na sposób postrzegania obiektu.
- **Doświadczenia rzeczywiste** modyfikują fantazje.
- Relacja jest **dwukierunkowa**.`],
    ["23. Scharakteryzuj pozycję schizoparanoidalną i depresyjną (M. Klein).", `
| **Paranoidalno-schizoidalna** | **Depresyjna** |
|---|---|
| **rozszczepienie** | **integracja** dobra i zła |
| lęk **prześladowczy** i anihilacyjny | lęk **separacyjny**, **poczucie winy** |
| dominacja **projekcji** | dominacja **introjekcji** |`],
    ["24. Główne założenia teorii Fairbairna.", `
- Podstawową motywacją są **relacje z obiektem**, a nie popędy.
- **Libido jest ukierunkowane na obiekt**, a nie na rozładowanie napięcia.
- Psychopatologia wynika z **zaburzonych relacji z obiektem**, nie z konfliktów popędowych.
- **Ego** od początku jest zorganizowane i relacyjne.
- **Internalizacja złych obiektów** prowadzi do patologii osobowości.`],
    ["25. Co to jest kontener i kontenerowanie według Biona?", `
- **Kontener** – zdolność obiektu (zwykle matki) do przyjmowania, przetwarzania i nadawania sensu surowym przeżyciom dziecka.
- **Kontenerowanie**: dziecko projektuje nieprzetworzone stany (**elementy beta**) do obiektu → obiekt je przyjmuje, przetwarza i oddaje w znośnej formie (**elementy alfa**).
- Umożliwia rozwój **myślenia i regulacji emocji**.`],
    ["26. Jak rozwija się proces myślenia według Biona?", `
- Myślenie rozwija się jako reakcja na **frustrację**.
- Dziecko doświadcza napięć, których nie potrafi samo przetworzyć; dzięki **kontenerowaniu** elementy beta zamieniają się w **elementy alfa**.
- **Internalizacja funkcji kontenerującej** → rozwój aparatu myślenia, **symbolizacji** i **tolerancji frustracji**.`],
    ["27. Cechy mechanizmów psychicznych osobowości psychotycznej.", `
- Dominacja **rozszczepienia**; przewaga **projekcji** nad introjekcją.
- Silny lęk **prześladowczy** i **anihilacyjny**.
- **Fragmentaryzacja** psychiki, niestabilne **granice Ja**.
- Trudność w integracji dobrych i złych aspektów obiektu.`],
    ["28. Wkład Winnicotta: obiekt przejściowy, zjawiska przejściowe i holding.", `
- **Obiekt przejściowy** – pierwszy obiekt „nie-ja” (np. kocyk); pomaga przejść od symbiozy z matką do **autonomii**.
- **Zjawiska przejściowe** – obszar między rzeczywistością wewnętrzną a zewnętrzną; fundament **zabawy, twórczości i kultury**.
- **Holding** – fizyczne i psychiczne „trzymanie” dziecka przez opiekuna; daje **poczucie bezpieczeństwa i ciągłości istnienia**.`],
    ["29. Psychologia self Kohuta: obiekty self, ich typy i powstawanie osobowości narcystycznej.", `
- **Obiekty self** – obiekty pełniące funkcje regulujące strukturę self.
- Typy: **lustrzany** (potwierdza wartość i wyjątkowość), **idealizowany** (daje siłę i bezpieczeństwo), **bliźniaczy** (poczucie podobieństwa).
- **Osobowość narcystyczna** powstaje z **deficytów w relacjach self–obiekt**: brak adekwatnego odzwierciedlenia i idealizacji → **kruchość self** i potrzeba kompensacji.`],
    ["30. Teoria popędowo-strukturalna Kernberga: internalizacja, jej formy i fazy.", `
- **Internalizacja** – tworzenie struktur psychicznych na podstawie relacji z obiektem.
- Formy: **introjekcja**, **identyfikacja**, **internalizacja superego** (tożsamość ego).
- Fazy: relacja z **obiektem częściowym** → **integracja** reprezentacji self i obiektu → ukształtowanie **stabilnych struktur** osobowości.`]
  ]);

  add("humanistyczne", [
    ["31. Podstawowe założenia nurtu humanistycznego.", `
- Człowiek to **unikalna całość**, więcej niż suma części; spójny system Ja + organizm.
- Podstawowa właściwość natury ludzkiej to **rozwój**; główna motywacja – **samorealizacja**.
- Człowiek jest z natury **dobry**, jego dążenia są konstruktywne.
- Zachowanie zależy od doświadczenia **„tu i teraz”**.
- Człowiek kieruje się **świadomością**, ma **wolny wybór** i działa **celowo**.`],
    ["32. Przedmiot dociekań psychologii humanistycznej.", `
- **Sens kondycji ludzkiej** i wartości wynikające z doświadczenia człowieka.
- Wiedza jako **względna** i zmienna.
- Kluczowe **podejście fenomenologiczne** – badanie subiektywnego doświadczenia.`],
    ["33. Wyjaśnij dylemat między obroną a rozwojem (Maslow).", `
- Rozwój wymaga zaspokojenia podstawowych potrzeb, zwłaszcza **bezpieczeństwa**.
- Człowiek wybiera między skupieniem na **zapewnianiu bezpieczeństwa** (obrona) a dążeniem ku **nowym doświadczeniom** (rozwój) – przy zapewnionym bezpieczeństwie rozwój staje się atrakcyjniejszy.`],
    ["34. Jak przebiega spontaniczny rozwój według Maslowa i jakie są jego warunki?", `
- Zachodzi, gdy kolejny krok jest odczuwany jako **bardziej satysfakcjonujący**.
- Cykl: **krok naprzód → zadowolenie → satysfakcja → przesyt → kolejny krok**.
- Warunki: **poczucie bezpieczeństwa**, samoakceptacja, zaufanie do siebie, poczucie własnej wartości, rozwiązanie dylematu obrona–rozwój, **spontaniczny, samodzielny wybór**, satysfakcja z wyboru i potrzeba kolejnego wolnego wyboru.`],
    ["35. Omów hierarchię potrzeb według Maslowa.", `
- **Fizjologiczne** (pożywienie, tlen, odpoczynek) → **bezpieczeństwa** (spokój, wolność od strachu) → **przynależności i miłości** → **szacunku** (poczucie własnej wartości) → **poznawcze** (wiedza, rozumienie).
- **Metapotrzeby**: **estetyczne** (harmonia, piękno), **samorealizacji** (spełnienie potencjału), **transcendencji** (duchowe utożsamienie z kosmosem).`],
    ["36. Czym cechują się ludzie twórczy, samorealizujący się według Maslowa?", `
- Realizm, **akceptacja siebie**, duża **spontaniczność**, koncentracja na problemach, nie na sobie.
- Dystans i potrzeba odosobnienia, **autonomia**, niekonwencjonalne widzenie świata.
- Doznania mistyczne (**doświadczenia szczytowe**), identyfikacja z innymi, głębokie związki.
- Demokratyczne postawy, filozoficzne i niezłośliwe **poczucie humoru**, duże zdolności twórcze, niezależność od wpływów kulturowych, nie mylą środków z celami.`],
    ["37. Czym jest Ja według Rogersa?", `
- **Ja** – centralny konstrukt teorii; od niego zależą zdrowie lub patologia.
- Kształtuje się w dzieciństwie z doświadczeń reprezentowanych w świadomości; rozwój napędza **potrzeba samoakceptacji**.
- Negatywne doświadczenia są wypierane lub **zniekształcane** (racjonalizacje, fantazje, projekcje); zachowanie bywa zdeterminowane oczekiwaniami innych.
- **Zdrowa osobowość** = zintegrowana: **spójność Ja z doświadczeniem**.`],
    ["38. Wyjaśnij związek potrzeby samoakceptacji z rozwojem Ja.", `
- **Potrzeba samoakceptacji** (pozytywnej oceny) **stymuluje rozwój Ja**: dziecko włącza do Ja doświadczenia, które pozwalają mu czuć się akceptowanym.
- Gdy akceptacja jest **warunkowa**, doświadczenia niezgodne z oczekiwaniami innych są zniekształcane lub wypierane – powstaje rozbieżność Ja i doświadczenia.`],
    ["39. Omów cechy terapii skoncentrowanej na kliencie.", `
- Umożliwia **integrację** i wolne doświadczanie siebie.
- Skuteczność zależy od trzech postaw terapeuty: **bezwarunkowej akceptacji**, **empatii**, **autentyczności**.
- **Klient jest ekspertem**, a terapeuta pomaga mu wykorzystać własny potencjał.`],
    ["40. Co odróżnia ludzi wolnych wewnętrznie od niewolnych według Rogersa?", `
Osoby **w pełni funkcjonujące** cechuje:
- **otwartość na doświadczenia**, radość z każdego nowego momentu,
- **zaufanie do siebie** (do organizmu),
- rosnąca **samoświadomość**,
- zdolność do **wolnych wyborów** i brania za nie **odpowiedzialności**.`],
    ["41. Czym różni się zdrowa osobowość od chorej według Perlsa?", `
- Ludzie organizują doświadczenie w całości – **figury**, które tworzą się i rozpadają w **cyklu doświadczenia**.
- **Psychopatologia** = zaburzenie tworzenia i rozpadu figur; źródła: stagnacja, niedojrzałość, działanie zgodnie z oczekiwaniami innych, a nie ze sobą.
- Osobowość neurotyczna ma dwie warstwy: **Pan (top dog)** i **Poddany (bottom dog)**.`],
    ["42. Scharakteryzuj cykl doświadczenia według Perlsa i Zinkera.", `
- **Doznanie pobudzenia → formowanie się figury → mobilizacja → działanie → kontakt → wycofanie** → kolejne doznanie…
- **Pobudzenie** – potrzebny dostęp do pełnego zakresu odczuć; bez tego człowiek nie wie, czego chce.
- **Figura** wyłania się z tła; niedomknięta figura (brak połączenia odczucia z myślą) – podstawa psychopatologii, dysocjacji.
- **Mobilizacja** – energia i gotowość; **działanie** – ruch ku kontaktowi (siła mięśni, oddech).
- **Kontakt** zachodzi na **granicy organizm–środowisko**; **wycofanie** – odłączenie, uspokojenie, włączenie doświadczenia do Ja, **domknięcie**.`],
    ["43. Czym jest samorealizacja według Deciego i Ryana?", `
- Teoria **autodeterminacji**: samorealizacja to immanentny proces osobowości.
- Trzy równorzędne **potrzeby psychologiczne**: **kompetencji**, **związków z innymi**, **autonomii**.
- Motywacja **wewnętrzna** (autonomiczna, z Ja) i **zewnętrzna** (kary, nagrody) – może się uwewnętrzniać.
- Kontinuum regulacji zewnętrznej: **zewnętrzna** → **introjekcja** → **identyfikacja** → **integracja** (najbardziej autonomiczna).
- Motywacja wewnętrzna potrzebuje **wsparcia społecznego**; nadmiar **kontroli** szkodzi.`]
  ]);

  add("poznawcze", [
    ["44. Ogólne założenia podejścia poznawczego do osobowości.", `
- Człowiek, jak **naukowiec, przetwarza informacje**.
- Działanie zależy od przyjętych **założeń i reguł**.
- Ludzie indywidualnie kształtują relacje ze środowiskiem.
- Człowiek działa **intencjonalnie i planowo**, kontroluje swoje zachowanie.
- Dynamikę osobowości wyznaczają procesy **poznawcze, motywacyjne i afektywne**.`],
    ["45. Cechy charakterystyczne poznawczej analizy osobowości.", `
- Zachowanie zależy od tego, jak człowiek **spostrzega i reprezentuje** świat i siebie.
- Osobowość = system **struktur i procesów poznawczych** z wiedzą o świecie, o sobie i o relacjach.
- Ludzie gromadzą informacje i uogólniają je w **schematy poznawcze** (wiedza wyabstrahowana z doświadczenia, służąca interpretacji i reagowaniu).
- Umysł szuka znaczeń i organizuje bodźce w całości; osobowość to **niepowtarzalna jedność**.
- Skłonność do **kategoryzowania** hierarchicznego; szczególną rolę mają **schematy społeczne** (osób, cech, zdarzeń).`],
    ["46. Założenia teorii konstruktów Kelly’ego.", `
- **Konstrukty osobiste** pozwalają rozumieć siebie, innych i świat.
- Na ich podstawie ludzie tworzą **antycypacje** (przewidywania).
- Konstrukty wpływają na zachowanie – podobne sytuacje rozumiane tym samym konstruktem → podobne zachowanie.
- System konstruktów jest **elastyczny** i jednocześnie **stabilny** w czasie.`],
    ["47. Rodzaje i funkcje konstruktów według Kelly’ego.", `
- **Werbalne** i **niewerbalne** (np. obrazowe).
- System **złożony** (wiele powiązanych, wielopoziomowych) lub **prosty** (nieliczne, niepowiązane).
- **Centralne** (podstawowe) i **peryferyjne** (mniej ważne).
- Konstrukty są **bipolarne**: odpowiedzialny – lekkomyślny, życzliwy – chłodny itd.
- Razem tworzą **system poznawczy osobowości**.`],
    ["48. Systemy przetwarzania informacji według Epsteina.", `
- **System doświadczeniowy** – automatyczne uczenie się, elementarne przystosowanie; tworzy **ukrytą teorię rzeczywistości** (Ja, świat, powiązania).
- **System racjonalny** – świadome przetwarzanie, wymaga myślenia i rozumowania.
- Oba działają **równolegle** i wpływają na zachowanie; informacje tworzą hierarchiczną **sieć poznawczo-emocjonalną** (wyższy rząd – przekonania, stabilność; niższy – reakcje, giętkość).`],
    ["49. Podstawowe potrzeby i przekonania w teorii Epsteina.", `
- **Przyjemność i unikanie bólu** – przekonanie, że świat jest źródłem przyjemności i bezpieczeństwa (lub nie).
- **Stabilny, spójny system reprezentacji** – przekonanie, że życie jest sensowne, przewidywalne, kontrolowalne i sprawiedliwe.
- **Kontakt z innymi** – przekonanie, że ludzie są godni zaufania i pomocni.
- **Umacnianie samooceny** – przekonanie o byciu wartościowym, kompetentnym i godnym miłości.`],
    ["50. Wkład Rottera w psychologię osobowości.", `
- Teoria **wartości i możliwości**: prawdopodobieństwo zachowania zależy od **wartości** celu (W) i **możliwości** jego realizacji (M).
- **Umiejscowienie kontroli**: **wewnętrzne** (efekty zależą ode mnie i mojego wysiłku) vs **zewnętrzne** (zależą od innych ludzi, okoliczności, szczęścia).`],
    ["51. Założenia poznawczo-afektywnego systemu osobowości Mischela i Shody.", `
- Osobowość to wiedza o sobie i świecie zorganizowana w **system poznawczo-afektywny** (CAPS).
- Elementy poznawcze i emocjonalne są **wzajemnie powiązane** i współdziałają.
- System pozwala **przewidywać zachowanie**, które jest wynikiem **interakcji osoby, sytuacji i zachowania**.`],
    ["52. Poznawcze wzorce zachowania i podpis behawioralny.", `
- Sytuacja ↔ osoba ↔ zachowanie – wzajemne oddziaływanie.
- **Podpis behawioralny** – charakterystyczny dla osoby **wzorzec zachowania w określonej klasie sytuacji** („jeśli… to…”).`],
    ["53. Główne funkcje osobowości.", `
- **Planowanie i wybór** działań.
- **Koordynacja i integracja** działań.
- **Samokontrola** zapewniająca realizację działań.
- **Funkcja obronna** – ochrona przed skutkami porażek, traum i frustracji.`]
  ]);

  add("ja", [
    ["54. Scharakteryzuj Ja podmiotowe i Ja przedmiotowe według W. Jamesa.", `
- **Ja podmiotowe (I)** – aktywny podmiot doświadczenia: doświadcza, myśli, odczuwa, działa; daje poczucie **ciągłości** i **sprawstwa**.
- **Ja przedmiotowe (Me)** – wszystko, co człowiek może uczynić przedmiotem refleksji: wiedza o sobie, cechy, role, relacje, zasoby; może być oceniane i wartościowane.`],
    ["55. Opisz elementy składowe Ja przedmiotowego.", `
- **Ja materialne** – ciało, wygląd, ubiór, posiadane przedmioty uznawane za „swoje”.
- **Ja społeczne** – obraz siebie w relacjach; wiele Ja społecznych zależnie od grupy odniesienia.
- **Ja duchowe** – cechy psychiczne, wartości, przekonania, cele, postawy.`],
    ["56. Rola oceniania samego siebie w Ja.", `
- Ma funkcję **regulacyjną**: porównanie aktualnego obrazu siebie z **własnymi standardami**, ocena zgodności z **Ja idealnym i powinnościowym**, kierowanie działań ku spójnemu obrazowi siebie.
- Wywołuje **emocje samooceniające**: dumę, wstyd, poczucie winy, satysfakcję.`],
    ["57. Czym są działania powodowane przez Ja?", `
- Zachowania wynikające bezpośrednio z **reprezentacji Ja**: ukierunkowane na cele ważne dla **tożsamości**, zgodne z obrazem siebie, podtrzymujące **spójność i ciągłość Ja**.`],
    ["58. Jak zorganizowana jest wielość Ja według Jamesa?", `
- Ja nie jest jednorodne – człowiek ma **wiele Ja**, zwłaszcza **społecznych**.
- Są one aktywizowane **zależnie od sytuacji**, odpowiadają różnym rolom i relacjom i współistnieją w jednej osobie.`],
    ["59. Czym jest tożsamość człowieka i jakie są jej rodzaje?", `
- **Tożsamość** – względnie trwałe poczucie, **kim jestem**: ciągłość, spójność obrazu siebie, przynależność do grup.
- Rodzaje: **osobista**, **społeczna**, **kulturowa**, **narracyjna**.`],
    ["60. Istota teorii prototypu Ja T. B. Rogersa.", `
- Reprezentacja Ja ma **strukturę prototypową**: zbiór cech, zachowań i właściwości uporządkowanych **hierarchicznie**.
- Najbardziej typowe cechy są w **centrum**, mniej typowe – na **peryferiach**.`],
    ["61. Czym charakteryzują się efekty prototypowe dla struktury Ja?", `
- **Lepsze zapamiętywanie** informacji zgodnych z prototypem Ja (efekt odniesienia do Ja).
- **Szybsze przetwarzanie** informacji prototypowych.
- Większa **odporność na zmianę** cech prototypowych.`],
    ["62. Formy wpływu prototypu Ja na spostrzeganie innych ludzi.", `
- Prototyp Ja jest **punktem odniesienia** w interpretacji cech innych.
- Wpływa na **organizowanie informacji** o innych.
- Oddziałuje na ocenę **podobieństw i różnic** między ludźmi.`],
    ["63. Czym jest system schematów Ja?", `
- Zbiór poznawczych struktur **wiedzy o sobie** w różnych dziedzinach funkcjonowania.
- Schematy Ja **organizują przetwarzanie** informacji, wpływają na percepcję, pamięć i ocenę własnych zachowań; są względnie **trwałe** i **zhierarchizowane**.`],
    ["64. Jak rozumieć schemat Ja?", `
- **Schemat Ja** (Markus) – poznawcza reprezentacja **uogólnionych doświadczeń** dotyczących siebie w określonej dziedzinie; działa jak **filtr interpretacyjny** nowych informacji.`],
    ["65. Różnice między osobami posiadającymi i nieposiadającymi schematu Ja w danej dziedzinie.", `
Osoby **ze schematem** (schematycy):
- **szybciej przetwarzają** informacje z tej dziedziny,
- przywołują **więcej przykładów** własnych zachowań,
- lepiej **przewidują** swoje przyszłe działania,
- **odrzucają informacje sprzeczne** ze schematem.`],
    ["66. Implikacje badań H. Markus.", `
- Schematy Ja zwiększają **dostępność informacji** o sobie.
- Wpływają na **selektywność uwagi**.
- Mają **strukturę hierarchiczną**.`],
    ["67. Rola schematów Ja w spostrzeganiu innych ludzi.", `
- Wpływają na **interpretację zachowań** innych.
- Zwiększają liczbę **wniosków** o osobach (w dziedzinie schematu).
- Włączają **komponent emocjonalny** do percepcji społecznej.`],
    ["68. Scharakteryzuj i porównaj model niezależnego i zewnątrzzależnego Ja.", `
| **Niezależne Ja** | **Zewnątrzzależne (współzależne) Ja** |
|---|---|
| silne granice Ja | słabe granice Ja |
| niezależność od kontekstu | Ja zależne od **relacji i norm** |
| zachowanie wynika z **postaw** i cech | zachowanie wynika z **oczekiwań społecznych** |
| typowe dla kultur indywidualistycznych | typowe dla kultur kolektywistycznych |`],
    ["69. Jak rozumiane jest Ja w teorii Cantor i Kihlstroma?", `
- Ja to **poznawcza reprezentacja umysłowa**, część systemu wiedzy o świecie społecznym i fizycznym.`],
    ["70. Czym jest rodzina Ja?", `
- **Hierarchicznie zorganizowany** system reprezentacji Ja na różnych poziomach abstrakcji, obejmujący **Ja w relacjach** z innymi oraz Ja „sam”.`],
    ["71. Powiązania Ja z pamięcią deklaratywną, epizodyczną i proceduralną.", `
- **Deklaratywna** – cechy i przekonania o sobie.
- **Epizodyczna** – wspomnienia własnych zachowań i zdarzeń.
- **Proceduralna** – strategie działania i **autoprezentacji**.`],
    ["72. Czym jest autoprezentacja i jakie są jej typy?", `
- **Autoprezentacja** – sposób przedstawiania siebie innym.
- **Autentyczna** – zgodna z Ja; **strategiczna** – nastawiona na wywołanie określonego wrażenia.`],
    ["73. Czym są możliwe Ja i jakie są ich rodzaje?", `
- **Możliwe Ja** – reprezentacje tego, kim człowiek **może się stać**, chciałby być lub boi się zostać; dotyczą przyszłości.
- **Ja idealne** (pożądane) – aspiracje i cele.
- **Ja powinnościowe** – normy i oczekiwania społeczne.
- **Ja niechciane** (negatywne) – funkcja ostrzegawcza i regulacyjna.`],
    ["74. Geneza i funkcje możliwych Ja.", `
- **Geneza**: doświadczenia osobiste, informacje zwrotne od innych, normy kulturowe, wcześniejsze sukcesy i porażki; rozwój poznawczy i **socjalizacja**.
- **Funkcje**: **motywacyjna** (cele), **regulacyjna** (wybór zachowań), **emocjonalna** (nadzieja, lęk, duma, wstyd), **organizująca tożsamość** (łączy przeszłość, teraźniejszość i przyszłość).`],
    ["75. Scharakteryzuj ukierunkowania Ja i ich typy.", `
- **Ukierunkowania Ja** – względnie trwałe **standardy**, według których człowiek ocenia siebie, reguluje zachowanie i interpretuje sukcesy i porażki (Higgins).
- Typy: **Ja aktualne**, **Ja idealne**, **Ja powinnościowe** – każde w wersji **własnej** i w wersji **innych** (standardy przypisywane innym).`],
    ["76. Czym różni się koncepcja Ja od ukierunkowań Ja?", `
- **Koncepcja Ja** – szeroka, zintegrowana struktura (cechy, role, wartości, wspomnienia, samoocena); charakter **opisowy** – „kim jestem”.
- **Ukierunkowania Ja** – część koncepcji Ja o funkcji **normatywnej i regulacyjnej** – „według jakich standardów siebie oceniam”.`],
    ["77. Funkcje ukierunkowań Ja.", `
- **Motywacyjna** – dążenie do redukcji rozbieżności.
- **Regulacyjna** – kierowanie zachowaniem ku zgodności ze standardem.
- **Emocjonalna** – różne rozbieżności wywołują różne emocje.
- **Tożsamościowa** – stabilizują tożsamość i sens działania.`],
    ["78. Czym są rozbieżności Ja i jakie są ich główne typy?", `
- **Rozbieżności Ja** – różnice między **Ja aktualnym** a innymi reprezentacjami Ja.
- **Ja aktualne – Ja idealne**: kim jestem vs kim chcę być.
- **Ja aktualne – Ja powinnościowe**: kim jestem vs kim powinnam być.
- Mogą dotyczyć wersji **własnych** lub **przypisywanych innym**.`],
    ["79. Jak rozbieżności Ja wiążą się z dyskomfortem psychicznym i jakie mają konsekwencje?", `
- **Aktualne – idealne** → **smutek**, rozczarowanie, obniżony nastrój; sprzyja **depresyjności** i spadkowi samooceny (emocje przygnębienia).
- **Aktualne – powinnościowe** → **lęk**, napięcie, **poczucie winy i wstydu**; sprzyja zaburzeniom lękowym, chronicznemu stresowi, nadmiernej kontroli (emocje pobudzenia).
- Ogólnie: długotrwały dyskomfort, problemy z motywacją lub nadmierna presja, obniżona integracja Ja.`]
  ]);
})();
