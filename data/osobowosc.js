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
    "Uczeniowe_ujecia_osobowosci.pdf – klasyczny behawioryzm (Pawłow, Watson, Thorndike, Skinner) oraz Dollard i Miller (na podstawie lektury Osobowość i psychoterapia, 1969, s. 32–92) w schemacie osobowość–działanie–rozwój",
    "Teorie_cech_notatka.pdf – Allport, Cattell, Eysenck, Wielka Piątka w schemacie cecha–działanie–rozwój (na podstawie McCrae i Costa, Osobowość dorosłego człowieka, 2005, notatek z kolosa i źródeł dodatkowych)",
    "Psychologia osobowości – wykłady.pdf",
    "to coś na kolosa osobowość.pdf",
    "Jung_Adler_Sullivan_Erikson_notatka.pdf",
    "ćwiczenia: Freud_marzenia_senne.pdf"
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
      id: "marzenia-senne",
      title: "Freud: marzenia senne i symbolika snów (ćwiczenia)",
      notes: `
Ćwiczenia z psychologii osobowości. Źródło: Z. Freud, *Objaśnianie marzeń sennych* (Die Traumdeutung, 1899/1900).

| Część | O co chodzi | Hasła |
|---|---|---|
| Założenie | po co śnimy | spełnienie życzenia, via regia, strażnik snu |
| Dwie warstwy | co widzimy vs co to znaczy | treść jawna, treść utajona, cenzura |
| Praca snu | jak sen się „przebiera” | zagęszczenie, przesunięcie, obrazowanie, opracowanie wtórne |
| Symbolika | stałe symbole | symbole uniwersalne, głównie seksualne |
| Metoda | jak interpretować | wolne skojarzenia, opór, odrzucenie senników |

## Główne założenie
- Każdy sen jest **(zamaskowanym) spełnieniem życzenia** – najczęściej pragnień **wypartych**, sięgających dzieciństwa.
- Sen to **„królewska droga do nieświadomości”** (**via regia**) – najlepszy dostęp do tego, co wyparte.
- Sen powstaje z **konfliktu** między wypartymi pragnieniami (**id**) a **cenzurą psychiczną** (ego i superego).

## Dwie warstwy marzenia sennego
- **Treść jawna (manifestna)** – to, co pamiętasz po przebudzeniu: fabuła, obrazy, dialogi, odczucia; forma zniekształcona i „bezpieczna” dla świadomości.
- **Treść utajona (latentna)** – prawdziwe, ukryte znaczenie snu: nieświadome impulsy, wyparte życzenia (najczęściej seksualne lub agresywne), konflikty z dzieciństwa, lęki.
- **Cenzura psychiczna** nie dopuszcza treści utajonej wprost, bo wywołałaby silny lęk i przerwała sen.
- Dlatego sen to **„strażnik snu”** – rozładowuje napięcie w zawoalowany sposób (**zastępcze spełnienie życzenia**) i chroni przed wybudzeniem.
- Przykład: śnisz, że koleżanka gubi klucze i nie może wejść do kawiarni (treść jawna). W skojarzeniach wychodzi złość, że to ją pochwalił szef, i życzenie, żeby jej się nie udało (treść utajona).

## Praca marzenia sennego (Traumarbeit)
Mechanizmy, które przekształcają surową treść utajoną w znośną treść jawną.

| Mechanizm | Co robi | Przykład |
|---|---|---|
| **Zagęszczenie** (kondensacja, Verdichtung) | wiele myśli, osób lub motywów łączy się w jeden element snu | postać ma oczy taty, płaszcz wykładowcy i głos sąsiada |
| **Przesunięcie** (Verschiebung) | akcent emocjonalny przechodzi z elementu ważnego na błahy | sen o zakupach, a najsilniejsze emocje budzi mijany w tle szpital |
| **Obrazowanie** (plastyczna reprezentacja, wzgląd na przedstawialność) | abstrakcyjne myśli zamieniają się w konkretne obrazy | „nie nadążam za życiem” = ucieczka przed odjeżdżającym autobusem |
| **Opracowanie wtórne** (sekundäre Bearbeitung) | tuż przed przebudzeniem i przy opowiadaniu umysł skleja fragmenty w logiczną historię | dodajesz „i dlatego poszłam…”, choć we śnie tego nie było |

- **Zagęszczenie** i **przesunięcie** to główne mechanizmy **procesu pierwotnego** (sposobu działania nieświadomości).

## Symbolika snów
Freud kładł nacisk na indywidualny kontekst śniącego, ale wyróżniał też **symbole uniwersalne** (zakorzenione w kulturze, języku i mitach), których używa cenzura.

| Co oznacza | Typowe symbole |
|---|---|
| męskie narządy płciowe | przedmioty podłużne, ostre (noże, miecze, parasole, laski, broń); unoszące się (balony, samoloty); kran, fontanna |
| żeńskie narządy płciowe | przestrzenie zamknięte, pojemniki (pudełka, skrzynie, pokoje, jaskinie, kieszenie, szafy, statki); brama, wejście |
| akt seksualny | czynności rytmiczne: wchodzenie po schodach, jazda konna, latanie, przechodzenie przez ciasne przejścia |
| kastracja, lęk kastracyjny | ścinanie włosów, **wypadanie zębów**, obcinanie gałęzi, dekapitacja |
| ciało i rodzina | dom = ciało; król i królowa = rodzice |
| śmierć | podróż, wyjazd pociągiem, odejście w dal |

## Metoda: wolne skojarzenia
- Freud **odrzucał senniki** jako sztywne i nienaukowe – sam symbol nie wystarcza do interpretacji.
- **Wolne skojarzenia**: sen dzieli się na elementy; śniący mówi wszystko, co przychodzi mu na myśl przy każdym z nich, bez oceniania; analityk obserwuje **opory**, pauzy i powtarzające się motywy.
- Nie mylić z Jungiem: u Freuda liczą się **skojarzenia konkretnej osoby**, a symbole są tylko uzupełnieniem; archetypy i nieświadomość zbiorowa to pojęcia Junga.

## Analiza snu krok po kroku
- Zapisz sen zaraz po przebudzeniu (treść jawna).
- Podziel go na elementy: osoby, miejsca, przedmioty, słowa, emocje.
- Do każdego elementu wolne skojarzenia.
- Szukaj **resztek dziennych** – co z ostatnich dni trafiło do snu.
- Odkręć pracę snu: zagęszczenie? przesunięcie? obrazowanie?
- Zwróć uwagę na **opór** – urwane skojarzenia, pustka, zażenowanie.
- Dopiero teraz symbole uniwersalne.
- Odpowiedz: jakie **życzenie** spełnia ten sen? To treść utajona.

> Na pamięć: sen = zamaskowane spełnienie życzenia · jawna vs utajona · praca snu: zagęszczenie, przesunięcie, obrazowanie, opracowanie wtórne · wolne skojarzenia, nie senniki · kolejność: elementy → skojarzenia → resztki dzienne → praca snu → opór → symbole → życzenie.
`,
      flashcards: [
        ["Czym jest sen według Freuda?", "Zamaskowanym spełnieniem (najczęściej wypartego) życzenia."],
        ["Via regia", "„Królewska droga do nieświadomości” – tak Freud nazwał marzenia senne."],
        ["Z jakiego konfliktu powstaje sen?", "Między wypartymi pragnieniami id a cenzurą psychiczną (ego i superego)."],
        ["Treść jawna snu", "To, co pamiętamy po przebudzeniu: fabuła, obrazy, dialogi – forma zniekształcona i bezpieczna."],
        ["Treść utajona snu", "Ukryte znaczenie: wyparte życzenia, impulsy, konflikty z dzieciństwa, lęki."],
        ["Dlaczego sen to „strażnik snu”?", "Rozładowuje napięcie w zawoalowany sposób i chroni przed wybudzeniem."],
        ["Rola cenzury psychicznej we śnie", "Nie dopuszcza treści utajonej wprost, bo wywołałaby lęk i przerwała sen."],
        ["Praca snu (Traumarbeit)", "Mechanizmy przekształcające treść utajoną w znośną treść jawną."],
        ["Zagęszczenie (kondensacja)", "Wiele myśli, osób lub motywów łączy się w jeden element snu."],
        ["Przesunięcie", "Akcent emocjonalny przechodzi z elementu ważnego na błahy."],
        ["Obrazowanie (plastyczna reprezentacja)", "Abstrakcyjne myśli zamieniają się w konkretne obrazy."],
        ["Opracowanie wtórne", "Sklejanie chaotycznych fragmentów w logiczną historię – przed przebudzeniem i przy opowiadaniu snu."],
        ["Mechanizmy procesu pierwotnego w pracy snu", "Zagęszczenie i przesunięcie."],
        ["Wypadanie zębów we śnie (Freud)", "Symbol kastracji / lęku kastracyjnego."],
        ["Symbole żeńskie we śnie", "Przestrzenie zamknięte i pojemniki: pudełka, pokoje, jaskinie, szafy, brama."],
        ["Symbole aktu seksualnego", "Czynności rytmiczne: wchodzenie po schodach, jazda konna, latanie."],
        ["Dom, król i królowa we śnie", "Dom = ciało; król i królowa = rodzice."],
        ["Podróż we śnie", "Symbol śmierci."],
        ["Dlaczego Freud odrzucał senniki?", "Są sztywne i nienaukowe – sam symbol nie wystarcza, liczą się skojarzenia śniącego."],
        ["Metoda wolnych skojarzeń", "Śniący mówi wszystko, co przychodzi mu na myśl przy każdym elemencie snu, bez oceniania."],
        ["Resztki dzienne", "Materiał z ostatnich dni, który trafia do snu."],
        ["Kiedy sięga się po symbole uniwersalne?", "Dopiero gdy skojarzenia nic nie dają – symbole to uzupełnienie."],
        ["Freud a Jung w analizie snów", "Freud: skojarzenia konkretnej osoby; archetypy i nieświadomość zbiorowa to Jung."],
        ["Rok wydania „Objaśniania marzeń sennych”", "1899/1900 (Die Traumdeutung)."]
      ],
      pairs: [
        ["Via regia", "królewska droga do nieświadomości"], ["Treść jawna", "to, co pamiętamy po przebudzeniu"], ["Treść utajona", "ukryte znaczenie snu"],
        ["Strażnik snu", "chroni przed wybudzeniem"], ["Cenzura psychiczna", "nie dopuszcza treści utajonej wprost"], ["Zagęszczenie", "wiele motywów w jednym elemencie"],
        ["Przesunięcie", "emocje na błahym elemencie"], ["Obrazowanie", "myśli zamienione w obrazy"], ["Opracowanie wtórne", "sklejanie snu w logiczną historię"],
        ["Wypadanie zębów", "lęk kastracyjny"], ["Wchodzenie po schodach", "akt seksualny"], ["Dom we śnie", "ciało"], ["Król i królowa", "rodzice"], ["Podróż we śnie", "śmierć"],
        ["Senniki", "Freud je odrzucał"], ["Resztki dzienne", "materiał z ostatnich dni"], ["Wolne skojarzenia", "mówienie wszystkiego, bez oceniania"], ["Die Traumdeutung", "1899/1900"]
      ],
      open: [
        { q: "Czym różni się treść jawna snu od treści utajonej?", a: "- **Treść jawna (manifestna)** – to, co pamiętamy po przebudzeniu: fabuła, obrazy, dialogi; forma zniekształcona i bezpieczna dla świadomości.\n- **Treść utajona (latentna)** – prawdziwe znaczenie: wyparte życzenia (najczęściej seksualne lub agresywne), impulsy, konflikty z dzieciństwa, lęki.\n- Między nimi działa **cenzura psychiczna** i **praca snu**, która przekształca treść utajoną w jawną." },
        { q: "Dlaczego Freud nazywał sen „strażnikiem snu”?", a: "- Treść utajona dopuszczona wprost wywołałaby silny **lęk** i przerwała sen.\n- Sen rozładowuje napięcie w **zawoalowany** sposób – **zastępcze spełnienie życzenia** – i dzięki temu **chroni przed wybudzeniem**." },
        { q: "Omów mechanizmy pracy snu.", a: "- **Zagęszczenie** – wiele myśli, osób lub motywów łączy się w jeden element (postać z oczami taty i głosem sąsiada).\n- **Przesunięcie** – akcent emocjonalny przechodzi z elementu ważnego na błahy.\n- **Obrazowanie** – abstrakcyjne myśli stają się konkretnymi obrazami.\n- **Opracowanie wtórne** – przed przebudzeniem i przy opowiadaniu snu umysł skleja fragmenty w logiczną historię.\n- Zagęszczenie i przesunięcie to główne mechanizmy **procesu pierwotnego**." },
        { q: "Czym różni się zagęszczenie od przesunięcia?", a: "- **Zagęszczenie** łączy wiele elementów w jeden (kondensacja treści).\n- **Przesunięcie** przenosi ładunek emocjonalny z elementu ważnego na nieistotny – centralna scena jest obojętna, a ważne pragnienie to drobiazg w tle." },
        { q: "Opisz metodę wolnych skojarzeń i kolejność analizy snu.", a: "- Freud **odrzucał senniki**; podstawą są **wolne skojarzenia** śniącego.\n- Kolejność: zapis snu (treść jawna) → podział na **elementy** → **skojarzenia** do każdego → **resztki dzienne** → odkręcenie **pracy snu** → analiza **oporu** (urwane skojarzenia, pustka) → dopiero potem **symbole uniwersalne** → jakie **życzenie** spełnia sen (treść utajona)." },
        { q: "Jaką rolę odgrywają symbole uniwersalne w analizie snów według Freuda?", a: "- Freud wyróżniał stałe **symbole uniwersalne** (głównie seksualne), zakorzenione w kulturze, języku i mitach; używa ich **cenzura**.\n- Przykłady: przedmioty podłużne – męskie narządy, pojemniki i pokoje – żeńskie, schody i jazda konna – akt seksualny, **wypadanie zębów – lęk kastracyjny**, dom – ciało, król i królowa – rodzice, podróż – śmierć.\n- Są tylko **uzupełnieniem** – sięga się po nie, gdy skojarzenia nic nie dają." }
      ],
      quiz: [
        { q: "Według Freuda każdy sen jest:", o: ["przypadkowym zapisem wrażeń", "zamaskowanym spełnieniem życzenia", "przekazem archetypów", "przetwarzaniem informacji z dnia"], a: 1, e: "Sen = (zamaskowane) spełnienie wypartego życzenia." },
        { q: "„Królewska droga do nieświadomości” to:", o: ["hipnoza", "marzenia senne", "czynności pomyłkowe", "test Rorschacha"], a: 1, e: "Via regia – tak Freud nazwał sny." },
        { q: "Postać we śnie ma oczy taty, płaszcz wykładowcy i głos sąsiada. To:", o: ["przesunięcie", "zagęszczenie", "obrazowanie", "opracowanie wtórne"], a: 1, e: "Zagęszczenie – wiele elementów w jednym." },
        { q: "Sen dotyczy zakupów, a najsilniejsze emocje budzi mijany w tle szpital. To:", o: ["zagęszczenie", "przesunięcie", "opracowanie wtórne", "projekcja"], a: 1, e: "Przesunięcie akcentu emocjonalnego na element błahy." },
        { q: "Myśl „nie nadążam za życiem” pojawia się we śnie jako ucieczka przed autobusem. To:", o: ["obrazowanie", "zagęszczenie", "regresja", "sublimacja"], a: 0, e: "Obrazowanie – abstrakcja zamieniona w obraz." },
        { q: "Sklejanie fragmentów snu w logiczną historię przy jego opowiadaniu to:", o: ["przesunięcie", "zagęszczenie", "opracowanie wtórne", "cenzura"], a: 2, e: "Opracowanie wtórne." },
        { q: "Wypadanie zębów we śnie Freud wiązał z:", o: ["lękiem przed śmiercią", "lękiem kastracyjnym", "pragnieniem władzy", "aktem seksualnym"], a: 1, e: "Symbol kastracji / lęku kastracyjnego." },
        { q: "Podróż lub wyjazd pociągiem we śnie symbolizuje według Freuda:", o: ["akt seksualny", "rodziców", "śmierć", "ciało"], a: 2, e: "Podróż = śmierć." },
        { q: "Jaki był stosunek Freuda do senników?", o: ["opierał na nich interpretację", "odrzucał je jako sztywne i nienaukowe", "stworzył własny sennik", "uznawał je tylko w snach dzieci"], a: 1, e: "Liczą się skojarzenia śniącego, a symbole są uzupełnieniem." },
        { q: "Kiedy w analizie snu sięga się po symbole uniwersalne?", o: ["na samym początku", "zamiast skojarzeń", "dopiero gdy skojarzenia nic nie dają", "nigdy"], a: 2, e: "Symbole to drugi trop – po skojarzeniach, resztkach dziennych i analizie oporu." },
        { q: "Główne mechanizmy procesu pierwotnego w pracy snu to:", o: ["obrazowanie i opracowanie wtórne", "zagęszczenie i przesunięcie", "wyparcie i projekcja", "cenzura i opór"], a: 1, e: "Zagęszczenie i przesunięcie." },
        { q: "Archetypy i nieświadomość zbiorowa w interpretacji snów to pojęcia:", o: ["Freuda", "Junga", "Adlera", "Kleina"], a: 1, e: "U Freuda liczą się skojarzenia konkretnej osoby." }
      ]
    },
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
Schemat: **1. osobowość (i jej „jednostka”) → 2. jak działa (motyw / dynamika → zachowanie) → 3. rozwój (stały czy zmienny)**.
Źródła: **Dollard i Miller, *Osobowość i psychoterapia* (1969), s. 32–92** (Twoje zdjęcia, numery stron w tekście); **[kolos]** notatki „to coś na kolosa – osobowość” i „_osobowosc_kolos”; **[dod.]** źródła dodatkowe (opracowania podręcznikowe).

| | 1. Osobowość to… | 2. Jak działa? | 3. Rozwój |
|---|---|---|---|
| **Klasyczny behawioryzm** | suma wyuczonych **nawyków** / **repertuar zachowań**; bez struktur wewnętrznych | bodziec → reakcja; **konsekwencje** (wzmocnienie, kara) sterują zachowaniem | **zmienny**: historia wzmocnień przez całe życie |
| **Dollard i Miller** | zespół **nawyków (S–R)**, wrodzonych i wyuczonych | **popęd → sygnał → reakcja → wzmocnienie** (redukcja popędu); **strach jako popęd wyuczony** | zmienny, ale **dzieciństwo krytyczne** (4 sytuacje); nerwica jest wyuczona |

> Zapamiętaj: w ujęciach uczeniowych osobowość jest **wyuczona**. Skinner: patrzymy tylko na zachowanie i jego konsekwencje. Dollard i Miller: liczą się też **popędy i procesy wewnętrzne** (myśli, słowa) – tłumaczą pojęcia Freuda językiem uczenia się.
> Skojarzenia: P-R-S-W – „**P**ani **R**enata **S**maży **W**afle” (Popęd, Reakcja, Sygnał, Wzmocnienie – kolejność z lektury). Sytuacje krytyczne: „**K**ot **C**zysty **S**ię **G**niewa” (Karmienie, Czystość, Seks, Gniew).

## Klasyczny behawioryzm (Pawłow, Watson, Thorndike, Skinner)
**1. Osobowość**
- **Watson**: psychologia bada tylko **obserwowalne zachowanie**. Osobowość to **suma (system) wyuczonych nawyków** – powiązań bodziec–reakcja. Pojęcia „wewnętrzne” (cechy, ja, nieświadomość) są niepotrzebne.
- **Skinner**: osobowość to **repertuar zachowań** wyuczonych przez konsekwencje. Wnętrze człowieka to **„czarna skrzynka”**; zamiast struktury – **analiza funkcjonalna**: jakie warunki środowiska kontrolują dane zachowanie?
- Wspólne założenie: zachowanie, także nieprzystosowane, jest **wyuczone i można je oduczyć**. Najważniejsze jest **środowisko**.

**2. Jak działa? Warunkowanie klasyczne (Pawłow, Watson)**
- **Bodziec bezwarunkowy (BB**, np. jedzenie) wywołuje **reakcję bezwarunkową (RB**, np. ślinienie). Gdy **bodziec obojętny** (dzwonek) wiele razy pojawia się tuż przed BB, staje się **bodźcem warunkowym (BW)** i sam wywołuje **reakcję warunkową (RW)**.
- **Wygaszanie** – BW bez BB, więc RW słabnie. **Samoistne odnowienie** – wygaszona reakcja po przerwie wraca. **Generalizacja** – reagujemy na bodźce podobne. **Różnicowanie** – reagujemy tylko na właściwy bodziec.
- **Watson i Rayner (1920), „Mały Albert”**: lęk przed białym szczurem wyuczony przez łączenie go z głośnym hukiem; lęk **uogólnił się** na inne futrzane rzeczy → **emocje też są wyuczone**.

**2. Jak działa? Warunkowanie instrumentalne (Thorndike, Skinner)**
- **Thorndike – prawo efektu**: zachowania, po których następuje coś przyjemnego, utrwalają się; te, po których następuje coś przykrego, słabną.
- **Skinner – warunkowanie sprawcze**: organizm sam **emituje** zachowanie, a jego **konsekwencje** decydują, czy się powtórzy.

| | coś **DODAJEMY** | coś **ODBIERAMY** |
|---|---|---|
| zachowanie **ROŚNIE** | **wzmocnienie pozytywne** (pochwała, nagroda) | **wzmocnienie negatywne** (ustaje coś przykrego) |
| zachowanie **MALEJE** | **kara pozytywna** (nagana) | **kara negatywna** (zabieramy telefon) |

- **Rozkłady wzmocnień**: **ciągłe** (szybka nauka, szybkie wygaszanie) i **sporadyczne**: stałe/zmienne, **proporcjonalne** (co X reakcji) lub **interwałowe** (co X czasu). Najbardziej odporne na wygaszanie są rozkłady **zmienne** (np. automat do gier, powiadomienia w telefonie).
- **Kształtowanie (shaping)** – nagradzamy kolejne przybliżenia do docelowego zachowania. **Wzmocnienie wtórne** – pieniądze, oceny: bodźce, które zyskały wartość przez skojarzenie z pierwotnymi. **Zachowanie przesądne** – przypadkowo wzmocnione zachowanie („szczęśliwy długopis” na egzamin).

**3. Rozwój: stały czy zmienny?**
- **Zmienny**: osobowość to efekt **historii wzmocnień**, a uczenie się trwa przez całe życie. Gdy zmienią się konsekwencje, zmieni się zachowanie.
- **Watson**: „dajcie mi tuzin zdrowych niemowląt, a wychowam każde na kogo zechcę” – skrajny **determinizm środowiskowy**.
- Zaburzenia też są wyuczone → terapia to **modyfikacja zachowania** (wygaszanie, wzmacnianie zachowań pożądanych, **systematyczna desensytyzacja Wolpego**).

> Uwaga na egzaminie! **Wzmocnienie negatywne to NIE kara.** Wzmocnienie zawsze **zwiększa** zachowanie, „negatywne” znaczy tylko, że coś **odbieramy** (np. wyłączenie budzika wzmacnia wstawanie).

## Dollard i Miller
Teoria bodźca–reakcji: teoria uczenia się **Hulla** + pojęcia **Freuda** + kultura. Numery stron = *Osobowość i psychoterapia* (1969), rozdz. III–V, **s. 32–92** (lektura obowiązkowa). Lektura używa słów **sygnał** (nie „wskazówka”) i **wzmocnienie / nagroda**.

**1. Osobowość**
- **„Zachowanie ludzkie jest wyuczone”** – także lęk, poczucie winy, wstyd, symptomy i racjonalizacje. Nerwica to ich skrajna forma, a psychoterapia stwarza warunki, w których pacjent uczy się zachowań bardziej przystosowawczych i oducza neurotycznych (s. 32).
- Osobowość to **zespół wrodzonych i wyuczonych nawyków** (jednostki S–O–R). **Nawyk** = wyuczony związek **sygnał–reakcja**; „wzmocnienie związku sygnał–reakcja stanowi **istotę procesów uczenia się**” (s. 36).
- **Wyposażenie wrodzone**: popędy pierwotne i **początkowa hierarchia reakcji** (s. 41). Noworodek ma tylko popędy pierwotne (głód, pragnienie, ból, zimno); motywów dorosłego (pieniądze, ambicja, lęki, poczucie winy) uczy się w **socjalizacji** (s. 64).
- **Różnice indywidualne**: każdy wyuczył się innych motywów i wartości, więc nie ma dwóch jednakowych ludzi. **„Siła ego”** to zdolność społecznie wyuczonych popędów do konkurowania z pierwotnymi (s. 65).

**2. Jak działa? Cztery czynniki uczenia się (rozdz. III)**
Kolejność z lektury: **popęd, reakcja, sygnał, wzmocnienie** – w przybliżeniu motywacja, działanie/myślenie, bodziec, nagroda (s. 33). Eksperyment (Miller i Dollard, 1941): **sześcioletnia dziewczynka szuka cukierka** pod książką – w 1. próbie 210 s (37. książka), w 10. próbie już 2 s; błędy są stopniowo eliminowane (s. 34–35).

| Czynnik | Co mówi lektura | W eksperymencie |
|---|---|---|
| **Popęd** | „silne bodźce, które popychają do działania”; każdy bodziec może nim być, jeśli jest dość silny (s. 36). **Pierwotne** (wrodzone): ból, głód, pragnienie, zmęczenie, zimno, seks – siła zależy od deprywacji. **Wtórne** (wyuczone) powstają na podłożu pierwotnych i są ich „fasadą” (s. 37–38) | ochota na cukierek, chęć wykonania polecenia |
| **Sygnał** | decyduje, „**kiedy** jednostka zareaguje, **gdzie** zareaguje i **jaką** wykona reakcję” (s. 38). Każdy bodziec ma **wartość popędu** (zależną od siły) i **wartość sygnału** (zależną od odrębności) (s. 40) | kolor, rozmiar, położenie książki |
| **Reakcja** | zanim zostanie nagrodzona, musi **wystąpić** (s. 41); uczenie to też aranżowanie sytuacji, żeby padła pierwsza poprawna reakcja | wyjmowanie książek |
| **Wzmocnienie** | zdarzenie, które zwiększa tendencję do powtórzenia reakcji (s. 44). Prawo: „**szybka redukcja siły intensywnego popędu działa jako wzmocnienie**” (s. 45) | znalezienie i zjedzenie cukierka |

- **Popęd a wzmocnienie** (s. 45): 1) szybka redukcja popędu = wzmocnienie, 2) **bez popędu wzmocnienie jest niemożliwe**, 3) po wzmocnieniu popęd słabnie – proces **samoograniczający** (najedzona dziewczynka przestaje szukać).
- **Hierarchia reakcji**: reakcje uporządkowane według prawdopodobieństwa. Zasada „**temu, kto już ma, dać jeszcze więcej**” – częstą reakcję łatwo nagrodzić (s. 41). **Reakcja dominująca** – najbardziej prawdopodobna. Uczenie zmienia kolejność → **hierarchia wyuczona (resultant)**. Hierarchia ustalona przez dziedziczność to **hierarchia wrodzona** (dziecku łatwiej krzyczeć na widok łyżki z lekarstwem niż powiedzieć „Nie”) (s. 42).
- Nowość uczenia się = **nowy związek sygnał–reakcja** albo nowa kombinacja starych reakcji (s. 42).
- **Wywołanie pierwszej poprawnej reakcji** (s. 42–43): **próby i błędy** (najmniej skuteczne; zachowanie jest raczej **zmienne niż przypadkowe**), **język** (wskazówka słowna), **naśladowanie**, **kultura** jako „skarbnica rozwiązań” (Ford), **wgląd** i warunkowanie (dziecko cofa rękę od piecyka, zanim się oparzy).
- **Sygnały**: zmiany, różnice i ich kierunek też są sygnałami; reakcja na kombinację bodźców to **strukturalizacja (patterning)**; samo zwracanie uwagi na sygnał jest reakcją wyuczoną (s. 40–41).
- **Wyższe procesy psychiczne**: myśli to **reakcje sygnałotwórcze**, pośredniczące między sygnałami zewnętrznymi a jawną reakcją (s. 47). Wgląd, warunkowanie, naśladowanie i instrukcje słowne to różne sposoby wytwarzania reakcji, które potem podlegają tym samym prawom (s. 44).
- **Wzmocnienie może być nieświadome**: **Greenspoon (1950)** mówił „mhm-hmm” po rzeczownikach w liczbie mnogiej – badani mówili ich coraz więcej, nie wiedząc dlaczego (s. 48).
- **Dylemat skłaniający do uczenia się**: nowe uczenie zachodzi dopiero wtedy, gdy **dawne reakcje przestają być nagradzane** (s. 49–50) – dziecko, którego gesty matka zawsze rozumiała, nie uczyło się mówić.
- Przykład: chłopiec nie nauczył się grać na fortepianie – mama krytykowała każdą próbę, a jedyną nagradzaną reakcją było **odejście od fortepianu** (ulga, redukcja lęku), więc to ono się utrwaliło (s. 48–49).

**2. Jak działa? Ważne szczegóły uczenia się (rozdz. IV)**
- **Wygaszanie**: reakcja powtarzana **bez wzmocnienia** stopniowo słabnie (s. 52). **To nie zapominanie**: zapominanie zachodzi, gdy reakcji się **nie wykonuje**, a wygaszanie – gdy się ją **wykonuje bez nagrody** (s. 53). **Opór na wygaszanie** rośnie przy większej liczbie nagród, silniejszym popędzie, większej nagrodzie i **częściowym wzmacnianiu** (rybak) (s. 53–54).
- **„Samo powtórzenie nie wzmacnia nawyku”**, a nienagradzane powtórzenie go osłabia (s. 54). Przykłady **autonomii funkcjonalnej Allporta** to według autorów albo bardzo silne nawyki, albo nawyki podtrzymywane przez nierozpoznany popęd i nagrodę.
- **Samorzutne odnowienie**: wygaszanie **hamuje** nawyk, a nie niszczy go, więc po przerwie wraca (s. 54–55). Nawyki wyeliminowane karą odnawiają się rzadziej niż wygaszone.
- **Generalizacja**: skutki uczenia przenoszą się na podobne sytuacje; im mniej podobne, tym słabiej (**gradient generalizacji**). Dziecko pogryzione przez psa boi się innych zwierząt; pacjent generalizuje reakcje na terapeutę (s. 55–56). Silniejszy popęd podnosi cały gradient (s. 57).
- **Różnicowanie**: nagradzamy reakcję na jeden układ sygnałów, a na podobny nie – koryguje nieprzystosowawcze generalizacje (s. 57).
- **Gradient wzmocnienia**: nagroda **natychmiastowa** działa silniej niż opóźniona, a reakcje bliższe nagrodzie są silniej wzmacniane – głodny przyspiesza na ostatnim zakręcie przed domem, wybieramy krótszą drogę (s. 57–59). Bodźce symboliczne (pieniądze) i cele pośrednie wypełniają lukę do nagrody.
- **Reakcja antycypacyjna**: reakcje bliskie nagrodzie przesuwają się na początek szeregu; może być przystosowawcza (cofnięcie ręki przed dotknięciem pieca, ślinienie na widok befsztyka) albo nie (strzelec mruga, zanim strzeli); jest **mimowolna** (s. 60–61). Szereg reakcji się **skraca**, a jedzenie to **reakcja spełniająca**.
- Reakcje antycypacyjne służą też **porozumiewaniu się** (dziecko wyciąga ręce, gdy chce być wzięte na ręce; dwa szczury zastępują walkę gestami). Myśli i słowa łatwo stają się antycypacyjne, bo nie kolidują z innymi czynnościami (s. 62–63).

**2. Jak działa? Wyuczone popędy i wzmocnienia (rozdz. V)**
- **Strach to popęd wyuczony**. **Miller (1948)**: szczury dostawały wstrząs w **białym pomieszczeniu**, potem bały się go już bez wstrząsu; uczyły się nowych reakcji (obracanie kółka, naciskanie dźwigni), bo **ucieczka redukowała strach**. Gdy kółko przestało otwierać drzwi, ta reakcja wygasała i wracały próby i błędy (s. 65–69).
- Strach podlega tym samym prawom co reakcje zewnętrzne i ma właściwości **i popędu, i sygnału** (s. 70). Jego fizjologiczne podłoże jest wrodzone, więc lepiej mówić, że strach jest **„wyuczalny”**, a reagowanie strachem na sygnał wcześniej neutralny to popęd wyuczony. Ludzie różnią się siłą strachu i łatwością jego wywołania (s. 70–71).
- Strach jest **wyuczony**, bo wiąże się z wcześniej neutralnymi sygnałami; jest **popędem**, bo motywuje, a jego **redukcja działa jako wzmocnienie** (s. 69). **Lęk** to strach, którego źródło jest **niejasne** albo zaciemnione przez wyparcie (s. 65).
- Strach bywa **silniejszy niż głód** i gra główną rolę w konfliktach prowadzących do nerwic (s. 72). Jest **bardzo odporny na wygaszanie** (szczury naciskały dźwignię setki razy bez wstrząsu), zwłaszcza gdy pacjent nie pamięta sytuacji, w której się go nauczył (s. 72–74).
- **Kara działa przez strach**: myśl o karanej czynności wywołuje strach, a przerwanie czynności go redukuje i jest wzmacniane. **Kara opóźniona działa słabiej**. Gdy redukcja strachu wzmacnia samą karaną czynność, kara może ją nawet **nasilić** (s. 76).
- **Funkcje strachu** (s. 77–78): 1) wywołuje **wrodzone reakcje** (znieruchomienie albo ucieczka); 2) jako **sygnał** wywołuje reakcje wyuczone wcześniej; 3) jako **popęd** motywuje próby i błędy, a jego redukcja wzmacnia nową reakcję; 4) gdy karane są reakcje redukujące inne popędy (agresję, seks), strach je **hamuje** → konflikt → objawy nerwicowe. Lekki strach może poprawiać sprawność (ok. 50% lotników).
- **Reakcje hamujące strach** – reakcja z nim niezgodna, np. jedzenie: **Jones (1924)** przybliżała królika stopniowo do jedzącego dziecka i strach zniknął (s. 74).
- **Strach jako sygnał**: słowo „boję się” przenosi reakcje na nowe sytuacje – **generalizacja wtórna (wyuczona)** (s. 75).
- **Definicje** (s. 78): gdy neutralne sygnały zaczynają pełnić rolę popędów pierwotnych, mają wartość **popędu wyuczonego**; gdy pełnią rolę nagród pierwotnych – są **wtórnym wzmocnieniem (wyuczoną nagrodą)**. **Żetony** (Wolfe 1936, Cowles 1937) mają wartość, bo były powiązane z jedzeniem; nagrody wyuczone bez nagrody pierwotnej **wygasają** (s. 79).
- **Nagrody wtórne**: pieniądze, żetony (szympansy wymieniające żetony na winogrona), **obietnice** – mechanizm „**nadziei**” (s. 80). Ucząc się wartości pieniędzy, dziecko zyskuje też nowy popęd: potrzebę pieniędzy (s. 81). **Gniew** to kolejny popęd „wyuczalny”.
- **Uczenie modyfikuje gniew w 3 punktach**: z jakimi sygnałami łączy się gniew, jakie reakcje agresji są dozwolone w danej sytuacji i jak bodziec gniewu łączy się z agresją. **Frustracja** to zablokowanie celu przez innego osobnika albo przeszkodę fizyczną. Miejsce agresji w hierarchii reakcji zależy od wcześniejszych wzmocnień (u **Kwoma** dzieci atakują młodszych, a starszym ustępują), a redukcja gniewu działa jak wzmocnienie (s. 82–83).
- **Inne popędy wyuczalne**: mdłości i obrzydzenie, podniecenie seksualne (podłoże fetyszyzmu, kulturowe standardy atrakcyjności), **apetyty** (uczymy się lubić piwo czy oliwki), częściowo wyuczona potrzeba ssania (s. 84–85).
- Popędy wyuczone są często **ukierunkowane na cel** (dziecko czuje niepokój z dala od matki i uczy się do niej wracać); sygnałem jest **różnica** między stanem aktualnym a pożądanym (np. stan konta) (s. 85–86).
- **Wrodzone a wyuczone** (s. 86–87): popędy **wyuczone słabną bez wzmocnienia** (pracownik, którego nikt nie nagradza, traci ambicję), a nagrody je wzmacniają (awans); **wrodzone nie wygasają**. Liczba popędów wyuczonych jest **praktycznie nieskończona**, a ten sam sygnał może wzbudzać różne (gniew i strach w różnych proporcjach).
- **Strach jako składnik wielu popędów społecznych**: poczucia winy, wstydu, dumy, konformizmu, pragnienia pieniędzy i władzy – strach przed utratą miłości, krytyką, degradacją, porażką i nędzą (s. 88).
- **Wyuczona towarzyskość**: niemowlę ma w 1. roku życia **ponad 2000 okazji** do skojarzenia matki z zaspokojeniem głodu, więc obecność ludzi staje się nagrodą; owce karmione butelką nie mają popędu stadnego (s. 90). Wyuczone są też potrzeba uznania, naśladowanie osób z prestiżem, duma, uczciwość (bywa sytuacyjna) (s. 90–91). **Sygnały względne** („awans”) motywują ruchliwość społeczną (s. 88–89).

**2. Jak działa? Model konfliktu (spoza s. 32–92)**
- **dążenie–dążenie** (dwa atrakcyjne cele, zwykle łatwy wybór), **unikanie–unikanie** (dwie nieprzyjemne opcje), **dążenie–unikanie** (jeden cel przyciąga i odpycha), **podwójne dążenie–unikanie** (dwa cele, każdy ma plusy i minusy).
- **Gradienty**: im bliżej celu, tym silniejsze obie tendencje, ale **gradient unikania jest bardziej stromy** – daleko przeważa dążenie, pod drzwiami gabinetu przeważa ucieczka; w punkcie przecięcia – wahanie i lęk.

**3. Rozwój: stały czy zmienny?**
- **Zmienny**: osobowość rozwija się przez uczenie się nawyków, popędów i nagród; są one tak trwałe i jednolite, **jak trwałe są warunki uczenia** (s. 89), więc różnią się między **kulturami i klasami społecznymi** (s. 91).
- Ale **wczesne doświadczenia są bardzo ważne** (tysiące skojarzeń z matką, wyuczone lęki trudne do wygaszenia). Według dalszych rozdziałów krytyczne są **4 sytuacje**:
  - **karmienie** – dziecko zostawione z głodem może się uczyć apatii i lęku,
  - **trening czystości** – zbyt szybki lub surowy uczy lęku i unikania,
  - **wczesne wychowanie seksualne** – kara wiąże seksualność z lękiem,
  - **gniew i lęk** – karanie złości uczy, że złość jest groźna.
- **Nerwica** to wyuczony, **nieświadomy konflikt**, w którym główną rolę gra **strach**, a **objawy redukują lęk** (więc są nagradzane i się utrwalają). Nieświadome jest to, czego człowiek nie nazwał albo co tłumi. **Terapia** to również uczenie się: wygaszanie strachu, różnicowanie bodźców, nazwanie tego, co nienazwane (s. 72, 75).

> Uwaga na egzaminie! Pułapki z lektury: **wygaszanie ≠ zapominanie**; **samo powtórzenie nie wzmacnia** nawyku; **bez popędu nie ma wzmocnienia**; **kara działa przez strach**; strach jest **jednocześnie wyuczony i jest popędem**. Różnica ze Skinnerem: Dollard i Miller mają **popędy**, myśli jako **reakcje sygnałotwórcze** i **nieświadomość** („tłumaczą Freuda na język Hulla”: przemieszczenie = generalizacja, wyparcie = wyuczone „niemyślenie”).

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

> Na pamięć: Dollard i Miller = popęd, reakcja, sygnał, wzmocnienie. Bandura = uwaga, przechowywanie, wytwarzanie, motywacja.
`,
      flashcards: [
        ["Osobowość w behawioryzmie", "Zespół wzorców zachowania nabytych przez uczenie się (warunkowanie)."],
        ["Warunkowanie klasyczne vs instrumentalne", "Klasyczne: bodziec neutralny wywołuje reakcję odruchową. Instrumentalne: zachowania nagradzane się utrwalają, karane zanikają."],
        ["Czym jest osobowość dla Dollarda i Millera?", "Konfiguracją nawyków nabytych w procesie uczenia się."],
        ["4 czynniki uczenia się wg Dollarda i Millera", "Popęd, reakcja, sygnał, wzmocnienie (kolejność z lektury, s. 33) – motywacja, działanie, bodziec, nagroda."],
        ["Popędy pierwotne vs wtórne", "Pierwotne – fizjologiczne (ból, głód). Wtórne – wyuczone (np. lęk)."],
        ["Typy konfliktów (Dollard i Miller)", "Dążenie–dążenie, unikanie–unikanie, dążenie–unikanie, podwójne dążenie–unikanie."],
        ["4 procesy modelowania (Bandura)", "Uwagi, przechowywania, wytwarzania (odtwarzania), motywacyjne."],
        ["System Ja u Bandury", "Samoobserwacja, proces oceniania, reakcja na siebie – służą autoregulacji zachowania."],
        ["Poczucie skuteczności własnej", "Przekonanie, że potrafię skutecznie wykonać zachowanie potrzebne do uzyskania wyniku."],
        ["Oczekiwania skuteczności vs wyniku", "Skuteczności: „potrafię to zrobić”. Wyniku: „to zachowanie doprowadzi do efektu”."],
        ["Determinizm wzajemny", "Osoba, środowisko i zachowanie wzajemnie na siebie wpływają."],
        ["Osobowość wg Watsona", "Suma (system) wyuczonych nawyków – powiązań bodziec–reakcja; pojęcia wewnętrzne są niepotrzebne."],
        ["Osobowość wg Skinnera", "Repertuar zachowań wyuczonych przez konsekwencje; wnętrze to „czarna skrzynka”."],
        ["Analiza funkcjonalna (Skinner)", "Szukanie warunków środowiska, które kontrolują dane zachowanie."],
        ["BB, RB, BW, RW", "Bodziec bezwarunkowy → reakcja bezwarunkowa; bodziec obojętny łączony z BB staje się bodźcem warunkowym, który wywołuje reakcję warunkową."],
        ["Wygaszanie", "Bodziec warunkowy podawany bez bezwarunkowego – reakcja warunkowa słabnie."],
        ["Samoistne odnowienie", "Wygaszona reakcja warunkowa wraca po przerwie."],
        ["Generalizacja vs różnicowanie", "Generalizacja – reagujemy na bodźce podobne; różnicowanie – tylko na właściwy bodziec."],
        ["„Mały Albert” (Watson i Rayner, 1920)", "Lęk przed białym szczurem wyuczony przez łączenie z hukiem; uogólnił się na futrzane rzeczy – emocje są wyuczone."],
        ["Prawo efektu (Thorndike)", "Zachowania z przyjemnym skutkiem utrwalają się, z przykrym – słabną."],
        ["Warunkowanie sprawcze (Skinner)", "Organizm sam emituje zachowanie, a konsekwencje decydują, czy się powtórzy."],
        ["Wzmocnienie pozytywne vs negatywne", "Pozytywne – coś dodajemy (nagroda); negatywne – coś przykrego odbieramy. Oba zwiększają zachowanie."],
        ["Kara pozytywna vs negatywna", "Pozytywna – coś dodajemy (nagana); negatywna – coś odbieramy (telefon). Obie zmniejszają zachowanie."],
        ["Czy wzmocnienie negatywne to kara?", "Nie – wzmocnienie zawsze zwiększa zachowanie; „negatywne” znaczy, że coś odbieramy (np. wyłączenie budzika wzmacnia wstawanie)."],
        ["Który rozkład wzmocnień najtrudniej wygasić?", "Zmienny (np. automat do gier, powiadomienia w telefonie)."],
        ["Rozkład proporcjonalny vs interwałowy", "Proporcjonalny – nagroda co X reakcji; interwałowy – co X czasu."],
        ["Kształtowanie (shaping)", "Nagradzanie kolejnych przybliżeń do docelowego zachowania."],
        ["Wzmocnienie wtórne", "Bodziec, który zyskał wartość przez skojarzenie z pierwotnym (pieniądze, oceny)."],
        ["Zachowanie przesądne (Skinner)", "Przypadkowo wzmocnione zachowanie, np. „szczęśliwy długopis” na egzamin."],
        ["Determinizm środowiskowy Watsona", "„Dajcie mi tuzin zdrowych niemowląt, a wychowam każde na kogo zechcę.”"],
        ["Systematyczna desensytyzacja", "Metoda Wolpego – terapia behawioralna wygaszająca lęk."],
        ["Źródła teorii Dollarda i Millera", "Teoria uczenia się Hulla + pojęcia Freuda + wpływ kultury."],
        ["Książki Dollarda i Millera", "Frustracja i agresja (1939), Uczenie się społeczne i naśladownictwo (1941), Osobowość i psychoterapia (1950)."],
        ["Nawyk wg Dollarda i Millera", "Wyuczony związek sygnał–reakcja; jego wzmocnienie to istota uczenia się (s. 36)."],
        ["Wyposażenie wrodzone (Dollard i Miller)", "Popędy pierwotne i początkowa hierarchia reakcji (s. 41)."],
        ["Najważniejszy popęd wtórny", "Lęk (strach) – popęd wyuczony (Miller)."],
        ["Hierarchia reakcji", "Reakcje uporządkowane według prawdopodobieństwa; uczenie się zmienia hierarchię początkową w wyuczoną (resultant)."],
        ["Reakcje sygnałotwórcze (pośredniczące)", "Myśli i słowa, które pośredniczą między sygnałami zewnętrznymi a jawną reakcją i same stają się sygnałami (s. 47)."],
        ["Hipoteza frustracja–agresja (1939)", "Zablokowanie celu prowadzi do agresji; przemieszczenie agresji = generalizacja bodźca."],
        ["Gradienty dążenia i unikania", "Blisko celu oba rosną, ale gradient unikania jest bardziej stromy – blisko celu przeważa unikanie."],
        ["4 krytyczne sytuacje uczenia się w dzieciństwie", "Karmienie, trening czystości, wczesne wychowanie seksualne, gniew i lęk."],
        ["Nerwica wg Dollarda i Millera", "Wynik silnego, nieświadomego konfliktu wyuczonego w dzieciństwie; objawy to reakcje unikania obniżające lęk."],
        ["Nieświadomość wg Dollarda i Millera", "To, czego człowiek nie nazwał (nie zwerbalizował) albo co tłumi."],
        ["Psychoterapia wg Dollarda i Millera", "Uczenie się: nazwać nienazwane, odróżnić przeszłość od teraźniejszości, wygasić lęk."],
        ["Wyparcie i przemieszczenie u Dollarda i Millera", "Wyparcie = wyuczone „niemyślenie”; przemieszczenie = generalizacja bodźca."],
        ["„Zachowanie ludzkie jest wyuczone” (Dollard i Miller)", "Także lęk, poczucie winy, wstyd, symptomy i racjonalizacje; psychoterapia to warunki do uczenia się zachowań przystosowawczych (s. 32)."],
        ["Eksperyment z cukierkiem (Miller i Dollard, 1941)", "Dziewczynka szuka cukierka pod książką: 210 s w 1. próbie, 2 s w 10. – błędy stopniowo eliminowane."],
        ["Sygnał wg Dollarda i Millera", "Decyduje, kiedy jednostka zareaguje, gdzie zareaguje i jaką wykona reakcję (s. 38)."],
        ["Wartość popędu vs wartość sygnału bodźca", "Wartość popędu zależy od siły bodźca, wartość sygnału – od jego odrębności (s. 40)."],
        ["Prawo wzmocnienia (Dollard i Miller)", "„Szybka redukcja siły intensywnego popędu działa jako wzmocnienie” (s. 45)."],
        ["Dlaczego proces wzmacniania jest samoograniczający?", "Po wzmocnieniu popęd słabnie, a bez popędu wzmocnienie jest niemożliwe – najedzona dziewczynka przestaje szukać."],
        ["Reakcja dominująca", "Najbardziej prawdopodobna reakcja w hierarchii reakcji."],
        ["Hierarchia wrodzona", "Kolejność reakcji ustalona przez dziedziczność – dziecku łatwiej krzyczeć na widok łyżki z lekarstwem niż powiedzieć „Nie”."],
        ["Sposoby wywołania pierwszej poprawnej reakcji", "Próby i błędy, język, naśladowanie, kultura jako skarbnica rozwiązań, wgląd i warunkowanie (s. 42–43)."],
        ["Strukturalizacja (patterning)", "Reagowanie na kombinację bodźców, a nie na pojedynczy bodziec (s. 40–41)."],
        ["Greenspoon (1950)", "Mówił „mhm-hmm” po rzeczownikach w liczbie mnogiej – badani mówili ich więcej, nie wiedząc dlaczego: wzmocnienie może być nieświadome."],
        ["Dylemat skłaniający do uczenia się", "Nowe uczenie zachodzi dopiero wtedy, gdy dawne reakcje przestają być nagradzane (s. 49–50)."],
        ["Wygaszanie vs zapominanie", "Zapominanie – reakcji się nie wykonuje; wygaszanie – reakcję się wykonuje, ale bez nagrody (s. 53)."],
        ["Co zwiększa opór na wygaszanie?", "Więcej nagród, silniejszy popęd, większa nagroda i częściowe wzmacnianie (rybak) (s. 53–54)."],
        ["Czy samo powtórzenie wzmacnia nawyk?", "Nie – nienagradzane powtórzenie go osłabia (s. 54)."],
        ["Samorzutne odnowienie (Dollard i Miller)", "Wygaszanie hamuje nawyk, a nie niszczy go, więc po przerwie wraca (s. 54–55)."],
        ["Gradient generalizacji", "Im mniej podobna sytuacja, tym słabiej przenoszą się na nią skutki uczenia; silniejszy popęd podnosi cały gradient."],
        ["Gradient wzmocnienia", "Nagroda natychmiastowa działa silniej niż opóźniona; reakcje bliższe nagrodzie są silniej wzmacniane (s. 57–59)."],
        ["Reakcja antycypacyjna", "Mimowolne przesunięcie reakcji bliskich nagrodzie na początek szeregu, np. ślinienie na widok befsztyka (s. 60–61)."],
        ["Eksperyment Millera (1948)", "Szczury dostawały wstrząs w białym pomieszczeniu, potem bały się go bez wstrząsu i uczyły się nowych reakcji (kółko, dźwignia), bo ucieczka redukowała strach."],
        ["Dlaczego strach jest popędem wyuczonym?", "Wyuczony – wiąże się z wcześniej neutralnymi sygnałami; popęd – motywuje, a jego redukcja działa jako wzmocnienie (s. 69)."],
        ["Strach a lęk (Dollard i Miller)", "Lęk to strach, którego źródło jest niejasne albo zaciemnione przez wyparcie (s. 65)."],
        ["Jak działa kara według Dollarda i Millera?", "Przez strach: myśl o karanej czynności wywołuje strach, a przerwanie czynności go redukuje i jest wzmacniane; kara opóźniona działa słabiej (s. 76)."],
        ["4 funkcje strachu", "Wywołuje wrodzone reakcje; jako sygnał wywołuje reakcje wyuczone; jako popęd motywuje próby i błędy; hamuje inne popędy → konflikt → nerwica (s. 77–78)."],
        ["Jones (1924)", "Królika stopniowo przybliżano do jedzącego dziecka i strach zniknął – reakcja hamująca strach."],
        ["Generalizacja wtórna (wyuczona)", "Słowo „boję się” przenosi reakcje strachu na nowe sytuacje (s. 75)."],
        ["Wtórne wzmocnienie (wyuczona nagroda)", "Neutralny sygnał pełniący rolę nagrody pierwotnej, np. żetony, pieniądze, obietnice (mechanizm nadziei)."],
        ["Uczenie modyfikuje gniew w 3 punktach", "Z jakimi sygnałami łączy się gniew, jakie reakcje agresji są dozwolone i jak bodziec gniewu łączy się z agresją (s. 82–83)."],
        ["Popędy wyuczone vs wrodzone", "Wyuczone słabną bez wzmocnienia, a ich liczba jest praktycznie nieskończona; wrodzone nie wygasają (s. 86–87)."],
        ["Wyuczona towarzyskość", "Niemowlę ma w 1. roku ponad 2000 okazji do skojarzenia matki z zaspokojeniem głodu, więc obecność ludzi staje się nagrodą (s. 90)."],
        ["Siła ego (Dollard i Miller)", "Zdolność społecznie wyuczonych popędów do konkurowania z popędami pierwotnymi (s. 65)."]
      ],
      pairs: [
        ["Watson", "osobowość = suma wyuczonych nawyków"],
        ["Skinner", "repertuar zachowań, „czarna skrzynka”"],
        ["Thorndike", "prawo efektu"],
        ["Pawłow", "warunkowanie klasyczne"],
        ["Mały Albert", "wyuczony lęk przed szczurem"],
        ["Wygaszanie", "BW bez BB – reakcja słabnie"],
        ["Samoistne odnowienie", "wygaszona reakcja wraca"],
        ["Generalizacja", "reakcja na bodźce podobne"],
        ["Wzmocnienie negatywne", "odbieramy coś przykrego"],
        ["Kara negatywna", "odbieramy coś miłego"],
        ["Rozkład zmienny", "najtrudniej wygasić"],
        ["Shaping", "nagradzanie kolejnych przybliżeń"],
        ["Wzmocnienie wtórne", "pieniądze, oceny"],
        ["Zachowanie przesądne", "szczęśliwy długopis"],
        ["Wolpe", "systematyczna desensytyzacja"],
        ["Dollard i Miller", "Hull + Freud"],
        ["Popęd wyuczony", "lęk"],
        ["Wzmocnienie wg Dollarda i Millera", "szybka redukcja popędu"],
        ["Reakcje pośredniczące", "myśli i słowa"],
        ["Frustracja–agresja", "1939"],
        ["Przemieszczenie", "generalizacja bodźca"],
        ["Gradient unikania", "bardziej stromy"],
        ["Nerwica", "nieświadomy wyuczony konflikt"],
        ["Bandura", "modelowanie i self-efficacy"],
        ["Greenspoon (1950)", "nieświadome wzmocnienie „mhm-hmm”"],
        ["Miller (1948)", "szczury i strach w białym pomieszczeniu"],
        ["Jones (1924)", "królik i jedzące dziecko"],
        ["Wygaszanie", "reakcja wykonywana bez nagrody"],
        ["Zapominanie", "reakcja niewykonywana"],
        ["Reakcja antycypacyjna", "ślinienie na widok befsztyka"],
        ["Siła ego", "wyuczone popędy kontra pierwotne"],
        ["Lęk", "strach o niejasnym źródle"]
      ],
      quiz: [
        { q: "Popęd, sygnał, reakcja i wzmocnienie to elementy teorii:", o: ["Bandury", "Dollarda i Millera", "Rottera", "Skinnera"], a: 1, e: "Dollard i Miller połączyli psychoanalizę z teorią uczenia się." },
        { q: "Lęk jako popęd wyuczony to popęd:", o: ["pierwotny", "wtórny", "częściowy", "organizmalny"], a: 1, e: "Popędy wtórne są wyuczone." },
        { q: "Który proces modelowania polega na zakodowaniu zachowania w pamięci?", o: ["uwagi", "przechowywania", "wytwarzania", "motywacyjny"], a: 1, e: "Przechowywanie – symboliczne kodowanie." },
        { q: "Wybór między dwiema nieprzyjemnymi opcjami to konflikt:", o: ["dążenie–dążenie", "unikanie–unikanie", "dążenie–unikanie", "podwójne dążenie–unikanie"], a: 1, e: "Obie opcje odpychają → unikanie–unikanie." },
        { q: "Determinizm wzajemny opisał:", o: ["Bandura", "Mischel", "Dollard", "Kelly"], a: 0, e: "Bandura: osoba ↔ środowisko ↔ zachowanie." },
        { q: "Wzmocnienie negatywne:", o: ["zwiększa zachowanie przez odebranie czegoś przykrego", "zmniejsza zachowanie przez karę", "to inaczej kara negatywna", "polega na dodaniu nagany"], a: 0, e: "Wzmocnienie zawsze zwiększa zachowanie (np. wyłączenie budzika wzmacnia wstawanie)." },
        { q: "Zabranie telefonu za spóźnienie to:", o: ["kara negatywna", "kara pozytywna", "wzmocnienie negatywne", "wzmocnienie pozytywne"], a: 0, e: "Odbieramy coś miłego, a zachowanie ma maleć." },
        { q: "Który rozkład wzmocnień jest najbardziej odporny na wygaszanie?", o: ["zmienny", "ciągły", "stały interwałowy", "brak wzmocnień"], a: 0, e: "Np. automat do gier – nagroda przychodzi „czasem”." },
        { q: "Prawo efektu sformułował:", o: ["Thorndike", "Pawłow", "Watson", "Hull"], a: 0, e: "Skinner rozwinął je w warunkowanie sprawcze." },
        { q: "Eksperyment z „Małym Albertem” pokazał, że:", o: ["emocje mogą być wyuczone", "lęk jest wrodzony", "kara nie działa", "dzieci naśladują dorosłych"], a: 0, e: "Watson i Rayner (1920) – lęk uogólnił się na futrzane rzeczy." },
        { q: "Powrót wygaszonej reakcji po przerwie to:", o: ["samoistne odnowienie", "generalizacja", "różnicowanie", "kształtowanie"], a: 0, e: "Pojęcie z warunkowania klasycznego." },
        { q: "„Szczęśliwy długopis” na egzamin to według Skinnera przykład:", o: ["zachowania przesądnego", "wzmocnienia wtórnego", "kształtowania", "generalizacji"], a: 0, e: "Przypadkowo wzmocnione zachowanie." },
        { q: "Teoria Dollarda i Millera łączy teorię uczenia się:", o: ["Hulla z pojęciami Freuda", "Skinnera z teorią Junga", "Pawłowa z teorią Adlera", "Bandury z teorią Rogersa"], a: 0, e: "„Tłumaczą Freuda na język Hulla”." },
        { q: "Wzmocnienie według Dollarda i Millera to:", o: ["szybka redukcja siły intensywnego popędu", "każdy przyjemny bodziec", "pochwała społeczna", "samo powtórzenie reakcji"], a: 0, e: "Redukcja popędu wzmacnia związek sygnał–reakcja (s. 45)." },
        { q: "Dlaczego blisko celu w konflikcie dążenie–unikanie przeważa unikanie?", o: ["gradient unikania jest bardziej stromy niż gradient dążenia", "dążenie słabnie w pobliżu celu", "popęd znika", "sygnał przestaje działać"], a: 0, e: "W punkcie przecięcia gradientów pojawia się wahanie i lęk." },
        { q: "Która sytuacja NIE należy do 4 krytycznych sytuacji uczenia się w dzieciństwie?", o: ["nauka czytania", "karmienie", "trening czystości", "gniew i lęk"], a: 0, e: "Cztery: karmienie, czystość, wczesne wychowanie seksualne, gniew i lęk." },
        { q: "Przemieszczenie agresji w języku Dollarda i Millera to:", o: ["generalizacja bodźca", "wygaszanie", "redukcja popędu", "reakcja pośrednicząca"], a: 0, e: "Hipoteza frustracja–agresja (1939)." },
        { q: "Nieświadome jest według Dollarda i Millera to, co:", o: ["nie zostało nazwane (zwerbalizowane) albo jest tłumione", "jest biologiczne", "pochodzi z nieświadomości zbiorowej", "jest wzmacniane ciągle"], a: 0, e: "Wyparcie = wyuczone „niemyślenie”." },
        { q: "Kolejność czterech czynników uczenia się w lekturze Dollarda i Millera to:", o: ["popęd, reakcja, sygnał, wzmocnienie", "sygnał, popęd, reakcja, nagroda", "reakcja, bodziec, popęd, kara", "popęd, nagroda, reakcja, sygnał"], a: 0, e: "S. 33 – w przybliżeniu motywacja, działanie, bodziec, nagroda." },
        { q: "Wygaszanie różni się od zapominania tym, że:", o: ["przy wygaszaniu reakcja jest wykonywana bez nagrody, a przy zapominaniu nie jest wykonywana", "wygaszanie jest trwałe, a zapominanie nie", "wygaszanie dotyczy tylko zwierząt", "nie ma między nimi różnicy"], a: 0, e: "S. 53; wygaszony nawyk może samorzutnie odnowić się po przerwie." },
        { q: "Co według Dollarda i Millera dzieje się z nawykiem przy samym powtarzaniu bez nagrody?", o: ["słabnie", "wzmacnia się", "nie zmienia się", "staje się autonomiczny"], a: 0, e: "„Samo powtórzenie nie wzmacnia nawyku” (s. 54)." },
        { q: "Eksperyment Millera (1948) ze szczurami w białym pomieszczeniu pokazał, że:", o: ["strach jest popędem wyuczonym, a jego redukcja wzmacnia nowe reakcje", "szczury nie uczą się po wstrząsie", "kara zawsze wygasza zachowanie", "głód jest silniejszy niż strach"], a: 0, e: "Szczury uczyły się obracać kółko i naciskać dźwignię, bo ucieczka redukowała strach." },
        { q: "Lęk według Dollarda i Millera to:", o: ["strach o niejasnym źródle albo zaciemnionym przez wyparcie", "każdy wrodzony popęd", "kara opóźniona", "reakcja antycypacyjna"], a: 0, e: "S. 65." },
        { q: "Według Dollarda i Millera kara działa:", o: ["przez strach – przerwanie karanej czynności redukuje strach i jest wzmacniane", "bezpośrednio niszcząc nawyk", "tylko wtedy, gdy jest opóźniona", "przez wygaszanie"], a: 0, e: "Kara opóźniona działa słabiej; może nawet nasilić karaną czynność (s. 76)." },
        { q: "Greenspoon (1950) pokazał, że:", o: ["wzmocnienie może działać nieświadomie", "strach jest wrodzony", "sygnały nie mają znaczenia", "naśladowanie nie jest uczeniem się"], a: 0, e: "„Mhm-hmm” po rzeczownikach w liczbie mnogiej zwiększało ich liczbę." },
        { q: "Nagroda natychmiastowa działa silniej niż opóźniona – to:", o: ["gradient wzmocnienia", "gradient generalizacji", "gradient unikania", "dylemat uczenia się"], a: 0, e: "Dlatego głodny przyspiesza na ostatnim zakręcie przed domem (s. 57–59)." },
        { q: "Popędy wyuczone w odróżnieniu od wrodzonych:", o: ["słabną bez wzmocnienia", "nigdy nie wygasają", "są nieliczne", "nie mogą być nagradzane"], a: 0, e: "Pracownik, którego nikt nie nagradza, traci ambicję (s. 86–87)." }
      ],
      open: [
        { q: "Czym różni się warunkowanie klasyczne od instrumentalnego?", a: "W **klasycznym** (Pawłow, Watson) bodziec obojętny łączony z bezwarunkowym staje się **bodźcem warunkowym** i sam wywołuje reakcję (np. dzwonek → ślinienie); organizm reaguje biernie. W **instrumentalnym** (Thorndike, Skinner) organizm sam **emituje zachowanie**, a o jego powtórzeniu decydują **konsekwencje** (wzmocnienie lub kara) – prawo efektu, warunkowanie sprawcze." },
        { q: "Czym różni się wzmocnienie negatywne od kary?", a: "**Wzmocnienie negatywne zwiększa** zachowanie przez **odebranie czegoś przykrego** (wyłączenie budzika wzmacnia wstawanie). **Kara zmniejsza** zachowanie: pozytywna – dodajemy coś przykrego (nagana), negatywna – odbieramy coś miłego (telefon)." },
        { q: "Który rozkład wzmocnień najtrudniej wygasić i dlaczego?", a: "**Rozkład zmienny** (sporadyczny, nieprzewidywalny) – nagroda przychodzi „czasem”, więc brak nagrody nie sygnalizuje, że przestała przychodzić; zachowanie trwa długo (automat do gier, powiadomienia). Rozkład **ciągły** daje szybką naukę, ale i szybkie wygaszanie." },
        { q: "Co Dollard i Miller rozumieją przez nawyk?", a: "**Nawyk** to wyuczony **związek sygnał–reakcja**; „wzmocnienie związku sygnał–reakcja stanowi **istotę procesów uczenia się**” (s. 36). Osobowość to **zespół wrodzonych i wyuczonych nawyków** (jednostki S–O–R). Wrodzone są tylko popędy pierwotne i początkowa hierarchia reakcji – resztę (motywy, wartości, lęki) człowiek nabywa w socjalizacji, dlatego nie ma dwóch jednakowych ludzi." },
        { q: "Wymień cztery czynniki uczenia się i powiedz, dlaczego bez popędu nie ma wzmocnienia.", a: "Kolejność z lektury: **popęd** (silny bodziec popychający do działania), **reakcja** (musi wystąpić, zanim zostanie nagrodzona), **sygnał** (decyduje, kiedy, gdzie i jaka reakcja), **wzmocnienie** (s. 33). Eksperyment: dziewczynka szukająca cukierka pod książką – 210 s w 1. próbie, 2 s w 10. **Wzmocnienie to szybka redukcja siły intensywnego popędu** (s. 45), więc **bez popędu nie ma czego redukować** – wzmocnienie jest niemożliwe. Po wzmocnieniu popęd słabnie, więc proces jest samoograniczający (najedzona dziewczynka przestaje szukać)." },
        { q: "Dlaczego blisko celu w konflikcie dążenie–unikanie przeważa unikanie?", a: "Bo **gradient unikania jest bardziej stromy** niż gradient dążenia: im bliżej celu, tym oba są silniejsze, ale unikanie rośnie szybciej. Daleko od celu przeważa dążenie, blisko – unikanie, a w punkcie przecięcia pojawia się **wahanie i lęk**." },
        { q: "Jakie są cztery krytyczne sytuacje uczenia się w dzieciństwie?", a: "**Karmienie** (zostawienie z głodem uczy apatii i lęku), **trening czystości** (zbyt surowy uczy lęku i unikania), **wczesne wychowanie seksualne** (kara wiąże seksualność z lękiem), **gniew i lęk** (karanie złości uczy, że złość jest groźna). Rodzice, karząc próby redukcji popędu, wywołują konflikty." },
        { q: "Jak Dollard i Miller wyjaśniają nerwicę i nieświadomość?", a: "**Nerwica** to wynik silnego, **nieświadomego konfliktu** wyuczonego w dzieciństwie. **Nieświadome** jest to, czego człowiek **nie nazwał** (nie zwerbalizował) albo co **tłumi** (wyparcie = wyuczone „niemyślenie”). **Objawy** to reakcje unikania, które **obniżają lęk**, więc są nagradzane i utrwalają się. Terapia to uczenie się: nazwanie, różnicowanie przeszłości od teraźniejszości, wygaszenie lęku." },
        { q: "Czym różni się wygaszanie od zapominania?", a: "**Zapominanie** zachodzi, gdy reakcji się **nie wykonuje**; **wygaszanie** – gdy reakcję się **wykonuje, ale bez wzmocnienia**, więc stopniowo słabnie (s. 52–53). Wygaszanie **hamuje** nawyk, a nie niszczy go, dlatego po przerwie może wystąpić **samorzutne odnowienie**. Opór na wygaszanie rośnie przy większej liczbie nagród, silniejszym popędzie, większej nagrodzie i częściowym wzmacnianiu." },
        { q: "Dlaczego strach jest popędem wyuczonym (eksperyment Millera)?", a: "**Miller (1948)**: szczury dostawały wstrząs w białym pomieszczeniu, a potem bały się go już bez wstrząsu i uczyły się nowych reakcji (obracanie kółka, naciskanie dźwigni), bo **ucieczka redukowała strach**. Strach jest więc **wyuczony** (wiąże się z wcześniej neutralnymi sygnałami) i jest **popędem** (motywuje, a jego **redukcja działa jako wzmocnienie**). Jest bardzo odporny na wygaszanie i gra główną rolę w konfliktach prowadzących do nerwic." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "cechy",
      title: "Teorie cech: Allport, Cattell, Eysenck, Wielka Piątka",
      notes: `
Schemat dla każdej teorii: **1. osobowość i cecha → 2. jak działa (motyw / dynamika / cecha → zachowanie) → 3. rozwój (stały czy zmienny)**.
Źródła: **[MC]** McCrae i Costa, *Osobowość dorosłego człowieka* (2005); **[kolos]** notatki „to coś na kolosa – osobowość”; **[dod.]** źródła dodatkowe (Feist i Feist, Boeree, encyklopedie).

| | 1. Cecha to… | 2. Jak działa? | 3. Rozwój |
|---|---|---|---|
| **Allport** | realna struktura neuropsychiczna; kardynalne, centralne, wtórne | cecha = **motyw**, sama inicjuje zachowanie; autonomia funkcjonalna | **zmienny**: rozwój proprium, dorosły ≠ dziecko |
| **Cattell** | **czynnik** z analizy czynnikowej; powierzchniowe vs źródłowe (16 PF) | R = f(S, P); ergi + sentymenty w sieci dynamicznej | częściowo dziedziczne (MAVA), częściowo uczenie się |
| **Eysenck** | skupisko nawykowych reakcji; hierarchia aż do typów (P, E, N) | **biologia**: pobudzenie korowe (E), układ limbiczny (N) | **raczej stały**: silnie dziedziczny |
| **Wielka Piątka** | wymiar różnic indywidualnych w spójnych wzorcach myśli, uczuć, działań | tendencje podstawowe → przystosowania → zachowanie | **stały po 30. r.ż.**, drobne zmiany średnich |

> Zapamiętaj: Allport: cecha = realny **motyw**. Cattell: cecha = **czynnik** (16 PF). Eysenck: cecha = **biologia** (PEN). McCrae i Costa: cecha = **tendencja podstawowa**, stała po 30. r.ż. (5 czynników).

## Gordon Allport
**1. Osobowość i cecha**
- **Osobowość** to **dynamiczna organizacja** wewnątrz jednostki tych systemów psychofizycznych, które wyznaczają jej **unikalne przystosowanie** do środowiska (1937); w wersji z 1961 r.: „…jej charakterystyczne zachowanie i myślenie”.
- **Cecha** to struktura neuropsychiczna, która sprawia, że wiele bodźców staje się **funkcjonalnie równoważnych**, i która inicjuje oraz ukierunkowuje równoważne formy zachowania adaptacyjnego i ekspresyjnego. Cechy **realnie istnieją** (podłoże neurofizjologiczne). Rozpoznajemy je po **częstotliwości, intensywności i zakresie sytuacji**.
- **Cechy wspólne** – pozwalają porównywać ludzi i przewidywać zachowanie. **Dyspozycje osobiste (indywidualne)** – jakościowe:
  - **kardynalne** – jedna, przejawia się prawie w każdym zachowaniu,
  - **centralne** – kilka (ok. 5–10), łatwo je zauważyć,
  - **wtórne** – najliczniejsze, rzadkie i wąskie.
- Dyspozycje **motywacyjne** (same uruchamiają działanie) albo **stylistyczne** (decydują, *jak* działamy).
- **Proprium** – centralna, „ciepła” część osobowości: to, co człowiek uważa za najważniejsze w sobie (zamiast słowa „ja”).
- **Allport i Odbert (1936)**: ok. **18 000** określeń cech w słowniku, wybrali ok. **4000**. Podejście **idiograficzne**.

**2. Jak działa? (motyw / dynamika / cecha → zachowanie)**
- Cecha jest **dynamiczna**: motywuje i kieruje zachowaniem, a nie tylko je opisuje. Osobowość jest zdolna do **autoregulacji**.
- **Intencje** – ambicje, aspiracje, nadzieje i plany; łączą energię biologiczną z osobistymi znaczeniami i kierują działanie ku przyszłości.
- Motywacja **reaktywna** (redukcja napięcia, powrót do równowagi) i **proaktywna** (człowiek sam wzbudza napięcie, żeby się rozwijać). Dobra teoria motywacji uwzględnia aktualne motywy, oba rodzaje motywacji, plany i intencje oraz motywy unikalne.
- **Autonomia funkcjonalna motywów** – dorosłe motywy uniezależniają się od pierwotnego źródła:
  - **perseweracyjna** – nawyki trwają, choć nie służą już pierwotnemu celowi (np. sprawdzanie telefonu „bez powodu”),
  - **proprialna** – motywy związane z proprium, nadają osobowości jedność (np. ktoś zaczął biegać, żeby schudnąć, a po latach biega, bo to kocha).

**3. Rozwój: stały czy zmienny?**
- Rozwija się **proprium**:
  - **1–3 r.ż.** – poczucie cielesnego ja, tożsamości (ciągłości) i szacunku do siebie,
  - **4–6 r.ż.** – rozszerzenie ja i obraz siebie,
  - **6–12 r.ż.** – ja jako istota racjonalna (rozumie świat, radzi sobie z problemami),
  - **od 12 r.ż.** – dążenia proprialne: plany, odległe cele, ideały.
- **Dojrzały dorosły**: poszerzone ja, serdeczne relacje, bezpieczeństwo emocjonalne i samoakceptacja, realizm, **samoobiektywizacja** (wgląd i humor), jednocząca filozofia życia.
- **Typy ludzi według wartości** (za Sprangerem): teoretyczny, ekonomiczny, estetyczny, społeczny, polityczny, religijny.

> Uwaga na egzaminie! W notatkach z kolosa jest zdanie „cechy się nie zmieniają”. Bezpieczna odpowiedź: cechy są **względnie stałe**, ale osobowość jest **dynamiczna** – rozwija się proprium, a motywy się zmieniają (autonomia funkcjonalna). Dorosły nie jest „dużym dzieckiem” – między dzieciństwem a dorosłością jest **nieciągłość**.
> Skojarzenie: K-C-W – „**K**ardynał **C**zyta **W**iersze” (kardynalne, centralne, wtórne).

## Raymond Cattell
**1. Osobowość i cecha**
- **Osobowość** to to, co pozwala **przewidzieć, co człowiek zrobi** w danej sytuacji (w notatkach z kolosa: zespół cech).
- **Cecha** – struktura psychiczna **wywnioskowana z obserwowalnego zachowania**; wyjaśnia, dlaczego zachowanie jest regularne i spójne.
- **Powierzchniowe** – to, co widać: skupiska zachowań, które występują razem. **Źródłowe** – ukryte, jednolite i trwałe **czynniki** z analizy czynnikowej.
- Ze względu na pochodzenie: **konstytucjonalne** (wrodzone) i **środowiskowe**.
- Ze względu na to, o co pytają: **temperamentalne** („jak?” – tempo, energia, wrażliwość), **zdolnościowe** („jak skutecznie?”), **dynamiczne** („dlaczego?” – motywacja).
- Droga do **16 PF**: ok. 4000 słów → 35 wiązek → 12 czynników + 4 z kwestionariuszy (Cattell, Eber i Tatsuoka, 1970). Dane z trzech źródeł: **L** (życiorys), **Q** (kwestionariusze), **T** (testy obiektywne).

**2. Jak działa?**
- **Równanie specyfikacji**: **R = s1·T1 + s2·T2 + … + sn·Tn** – reakcja (R) to suma cech (T) pomnożonych przez **wagi sytuacyjne** (s). Cecha ważna w sytuacji = duża waga; bez znaczenia = waga 0.
- **Sieć dynamiczna** (dynamic lattice):
  - **postawy** – widoczna gotowość, żeby zrobić coś konkretnego wobec obiektu,
  - **ergi** – **wrodzone**, biologiczne źródła dążeń (ciekawość, seks, głód, bezpieczeństwo, samoutwierdzanie),
  - **sentymenty** – **nabyte** struktury motywacyjne skupione wokół obiektów (rodzina, praca, religia); najważniejszy **sentyment ja**, który integruje pozostałe.
- **Subsydiacja**: postawy służą sentymentom, a sentymenty ergom – każde działanie ma pod sobą łańcuch celów (np. „chcę zdać egzamin” → sentyment „studia/kariera” → ergi bezpieczeństwa i ciekawości).
- Zachowanie zależy od **cech i sytuacji**; skoro cechy są stałe, zachowanie w podobnych sytuacjach też jest stałe.

**3. Rozwój**
- W notatkach z kolosa: cechy są stałe. Cattell badał, ile w cechach dziedziczności, a ile środowiska (metoda **MAVA**); uwzględniał uczenie się klasyczne, instrumentalne i integracyjne.
- 16 PF: mężczyźni zbadani dwa razy w odstępie 10 lat – **14 z 16 skal się nie zmieniło** (wzrost inteligencji i niezależności tłumaczony m.in. efektem ćwiczenia) [MC s. 90].

> Uwaga na egzaminie! Częste pomyłki: cecha **powierzchniowa** (to, co widać) a **źródłowa** (przyczyna, czynnik); **erg** (wrodzony) a **sentyment** (nabyty). Cattell stosował **rotację ukośną** (czynniki mogą korelować) → dużo cech; Eysenck **ortogonalną** → mało cech.

## Hans Eysenck
**1. Osobowość i cecha**
- **Osobowość** – względnie trwała organizacja **charakteru, temperamentu, intelektu i właściwości fizycznych**, która wyznacza specyficzne sposoby przystosowania się do otoczenia.
- **Cecha** – względnie stała dyspozycja, definiowana przez istotne **korelacje między różnymi zachowaniami nawykowymi**.
- **Hierarchia**: reakcje specyficzne → reakcje nawykowe → cechy → **typy (supercechy)**.
- Typy (wymiary) **PEN**:
  - **N (neurotyzm)** – niepokój, niestabilność i wrażliwość vs spokój i odporność,
  - **E (ekstrawersja)** – ekstrawertyk dobrze działa przy dużej stymulacji, introwertyk przy małej,
  - **P (psychotyzm, dodany w 1975 r.)** – egocentryzm, chłód, impulsywność, agresja, mała empatia, ale też twórczość.

**2. Jak działa?**
- Cechy działają przez **biologię**, a nie przez motywy; zachowanie wynika z typu i nasilenia wymiarów.
- **E** wynika z poziomu **pobudzenia korowego**, które reguluje **układ siatkowaty (ARAS)**. Introwertyk ma **wyższe** pobudzenie bazowe, więc unika bodźców; ekstrawertyk **niższe**, więc ich szuka. Introwertycy łatwiej się warunkują.
- **N** wynika z reaktywności **mózgowia trzewnego** (układ limbiczny, podwzgórze, autonomiczny układ nerwowy) – osoba neurotyczna silniej i dłużej reaguje na stres.
- Eysenck łączył osobowość z chorobami (np. typ C z nowotworami) – te wyniki zostały później mocno **podważone**.
- Przykład: w bibliotece introwertyk pracuje dobrze w ciszy (mózg i tak „rozbudzony”), ekstrawertyk włącza muzykę i idzie do kawiarni, żeby dojść do optymalnego pobudzenia.

**3. Rozwój**
- **Raczej stały**: wymiary są biologiczne i w dużej mierze **dziedziczne**. Zmieniać się mogą najwyżej **zachowania** (warunkowanie, terapia behawioralna), nie wymiar.

> Skojarzenie: „Eysenck pisze **PEN**-em” – Psychotyzm, Ekstrawersja, Neurotyzm.

## Wielka Piątka – McCrae i Costa
**1. Osobowość i cecha**
- **Cechy** to wymiary różnic indywidualnych pod względem tendencji do wykazywania **spójnych wzorców myślenia, uczuć i działań** (s. 40) – definicja **fenotypowa**: mówi, jak cechy rozpoznać, a nie skąd się biorą.
- Każdy ma każdą cechę w jakimś stopniu, **rozkład normalny**; „typy” to tylko osoby ze skrajnymi wynikami.
- Cecha to **nie nawyk** (wąskie, mechaniczne zachowanie) ani **nastrój** (przemija); bliżej jej do **motywu**, ale jest pojęciem szerszym (obejmuje też style i postawy).
- **5 czynników**: **N**eurotyczność, **E**kstrawertyczność, **O**twartość na doświadczenie, **U**godowość, **S**umienność. W **NEO-PI-R** każdy ma **6 składników** (np. N: lęk, agresywna wrogość, depresyjność, nadmierny samokrytycyzm, impulsywność, nadwrażliwość).
- **Historia**: **Tupes i Christal (1961)** – na 35 skalach Cattella 5 czynników zamiast 12 → **Norman (1963)** – „właściwa taksonomia” → **Goldberg (1981)** – potwierdzenie w słowniku. Costa i McCrae: najpierw **N, E, O** z 16 PF (1976), potem **U i S** → **NEO-PI (1985)**.
- Nazwy Normana (z notatek z kolosa): **surgencja** (= E), ugodowość, sumienność, **stabilność emocjonalna** (odwrotność N), **kultura** (= O).

| Czynnik | Co opisuje |
|---|---|
| **Neurotyczność** | niestabilność emocjonalna vs opanowanie |
| **Ekstrawertyczność** | ilość i intensywność kontaktów, aktywność, potrzeba stymulacji |
| **Otwartość na doświadczenie** | poszukiwanie nowości, tolerancja nieznanego |
| **Ugodowość** | współczucie vs antagonizm w relacjach |
| **Sumienność** | zorganizowanie, wytrwałość, motywacja do celu |

**2. Jak działa?**
- Cechy to **tendencje, a nie absolutne determinanty** – na zachowanie wpływają też rola, sytuacja, nastrój i nawyki.
- Działają **probabilistycznie**: **Mischel (1968)** – cechy wyjaśniają tylko **5–10%** zachowania; McCrae i Costa: tego należy się spodziewać (serdeczność a uśmiech do obcego: r = 0,41).
- Siłę cech widać po **uśrednieniu** wielu zachowań (**agregacja – Epstein, 1979**). **Fleeson (2001)**: zachowanie zmienia się z godziny na godzinę, ale średnia jest bardzo stała („latem zawsze gorąco, zimą zimno, choć każda pora roku ma szeroki zakres temperatur”).
- **Teoria pięcioczynnikowa (FFT)** – system osobowości:
  - składniki **centralne**: **tendencje podstawowe** (cechy, uniwersalny „surowiec”), **charakterystyczne przystosowania** (nawyki, umiejętności, przekonania, role – uwarunkowane kulturowo), **koncepcja siebie** (szczególne przystosowanie),
  - składniki **peryferyjne**: **podstawy biologiczne** (jedyna przyczyna cech), **wpływy zewnętrzne**, **biografia obiektywna** (wszystko, co człowiek robi, myśli i czuje przez całe życie),
  - kierunek: biologia → tendencje podstawowe → (+ wpływy zewnętrzne) przystosowania → zachowanie; łączą to **procesy dynamiczne**.

**3. Rozwój**
- Teza o **stałości po 30. r.ż.**; James (1890): do 30. r.ż. charakter „utrwala się niczym odlew”.
- **Średnie poziomy**: od dorastania do dorosłości **N, E i O spadają, a U i S rosną** (w wielu kulturach), ok. 1/6 SD na 10 lat, głównie **18–30 r.ż.**; po 30. r.ż. zmiany bardzo małe.
- **Stałość rangowa**: r = **0,74 po 12 latach** i **0,65 po 24 latach** (GZTS); u 40-latków mediana **0,83**, u 12–16-latków 0,38, u studentów 0,60; przez dorosłość zachowuje się ok. **60% wariancji**.
- **Spór**: **Roberts i DelVecchio (2000)** – szczyt stałości dopiero ok. **50.–60. r.ż.**; McCrae i Costa krytykują tę metaanalizę.
- Zmiana możliwa, ale nie „sama” – np. skuteczna psychoterapia, poważne doświadczenia, choroba Alzheimera.
- Postulaty FFT o tendencjach podstawowych: **indywidualność**, **pochodzenie** (cechy są **endogenne** – środowisko ich nie kształtuje), **rozwój** (dojrzewają wewnętrznie), **struktura**. Środowisko zmienia **przystosowania**, a nie cechy.

> Uwaga na egzaminie! Rozróżniaj **stałość średnich poziomów** (czy grupa się przesuwa) i **stałość różnic indywidualnych / rangową** (czy zachowujesz swoje miejsce w grupie). Osobowość może się zmieniać średnio, a mimo to pozostawać stała rangowo.
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
        ["Ugodowość w Wielkiej Piątce", "Jakość relacji z innymi: od współczucia do antagonizmu."],
        ["Cecha wg Allporta", "Realna struktura neuropsychiczna, która sprawia, że wiele bodźców jest funkcjonalnie równoważnych, i inicjuje oraz ukierunkowuje równoważne formy zachowania."],
        ["Po czym rozpoznajemy cechę wg Allporta?", "Po częstotliwości, intensywności i zakresie sytuacji, w których się pojawia."],
        ["Cechy wspólne vs dyspozycje osobiste (Allport)", "Wspólne – pozwalają porównywać ludzi; dyspozycje osobiste – indywidualne, jakościowe (kardynalne, centralne, wtórne)."],
        ["Dyspozycje motywacyjne vs stylistyczne (Allport)", "Motywacyjne same uruchamiają działanie; stylistyczne decydują, jak działamy."],
        ["Allport i Odbert (1936)", "Ok. 18 000 określeń cech w słowniku, wybrali ok. 4000."],
        ["Motywacja reaktywna vs proaktywna (Allport)", "Reaktywna – redukcja napięcia; proaktywna – człowiek sam wzbudza napięcie, żeby się rozwijać."],
        ["Autonomia perseweracyjna vs proprialna", "Perseweracyjna – nawyki trwają, choć nie służą już pierwotnemu celowi; proprialna – motywy związane z proprium, nadają osobowości jedność."],
        ["Rozwój proprium (Allport)", "1–3 r.ż. ja cielesne, tożsamość, szacunek do siebie; 4–6 r.ż. rozszerzenie ja, obraz siebie; 6–12 r.ż. ja racjonalne; od 12 r.ż. dążenia proprialne."],
        ["Dojrzała osobowość wg Allporta", "Poszerzone ja, serdeczne relacje, bezpieczeństwo emocjonalne i samoakceptacja, realizm, samoobiektywizacja (wgląd i humor), jednocząca filozofia życia."],
        ["Typy ludzi według wartości (Allport za Sprangerem)", "Teoretyczny, ekonomiczny, estetyczny, społeczny, polityczny, religijny."],
        ["Czy cechy wg Allporta się zmieniają? (bezpieczna odpowiedź)", "Cechy są względnie stałe, ale osobowość jest dynamiczna: rozwija się proprium, motywy się zmieniają (autonomia funkcjonalna); dorosły ≠ duże dziecko."],
        ["Osobowość wg Cattella", "To, co pozwala przewidzieć, co człowiek zrobi w danej sytuacji (zespół cech)."],
        ["Cechy temperamentalne, zdolnościowe i dynamiczne (Cattell)", "Temperamentalne – „jak?”; zdolnościowe – „jak skutecznie?”; dynamiczne – „dlaczego?” (motywacja)."],
        ["Droga do 16 PF", "Ok. 4000 słów → 35 wiązek → 12 czynników + 4 z kwestionariuszy (Cattell, Eber i Tatsuoka, 1970)."],
        ["Dane L, Q i T (Cattell)", "L – życiorys, Q – kwestionariusze, T – testy obiektywne."],
        ["Równanie specyfikacji (Cattell)", "R = s1·T1 + … + sn·Tn – reakcja to suma cech pomnożonych przez wagi sytuacyjne."],
        ["Sieć dynamiczna (Cattell)", "Postawy służą sentymentom (nabytym), a sentymenty ergom (wrodzonym) – subsydiacja."],
        ["Subsydiacja (Cattell)", "Postawy służą sentymentom, a sentymenty ergom – każde działanie ma pod sobą łańcuch celów."],
        ["Metoda MAVA (Cattell)", "Badanie, ile w cechach jest dziedziczności, a ile środowiska."],
        ["Stałość 16 PF po 10 latach", "14 z 16 skal się nie zmieniło."],
        ["Rotacja ukośna vs ortogonalna", "Cattell – ukośna (czynniki mogą korelować) → dużo cech; Eysenck – ortogonalna → mało cech."],
        ["Osobowość wg Eysencka", "Względnie trwała organizacja charakteru, temperamentu, intelektu i właściwości fizycznych."],
        ["Hierarchia osobowości wg Eysencka", "Reakcje specyficzne → reakcje nawykowe → cechy → typy (supercechy)."],
        ["Kiedy Eysenck dodał psychotyzm?", "W 1975 r."],
        ["Biologiczne podłoże ekstrawersji (Eysenck)", "Poziom pobudzenia korowego regulowany przez układ siatkowaty (ARAS); introwertyk ma wyższe pobudzenie bazowe, więc unika bodźców."],
        ["Biologiczne podłoże neurotyzmu (Eysenck)", "Reaktywność mózgowia trzewnego: układu limbicznego, podwzgórza i autonomicznego układu nerwowego."],
        ["Cecha wg McCrae i Costy", "Wymiar różnic indywidualnych pod względem tendencji do spójnych wzorców myślenia, uczuć i działań (definicja fenotypowa)."],
        ["Czym cecha różni się od nawyku i nastroju (McCrae i Costa)?", "Nawyk – wąskie, mechaniczne zachowanie; nastrój – przemija; cecha – szeroka, trwała tendencja, bliska motywowi."],
        ["Historia Wielkiej Piątki", "Tupes i Christal (1961) → Norman (1963) → Goldberg (1981); Costa i McCrae: N, E, O (1976) → NEO-PI (1985)."],
        ["Nazwy czynników Normana", "Surgencja (E), ugodowość, sumienność, stabilność emocjonalna (odwrotność N), kultura (O)."],
        ["Ile składników ma każdy czynnik w NEO-PI-R?", "6 (np. N: lęk, agresywna wrogość, depresyjność, nadmierny samokrytycyzm, impulsywność, nadwrażliwość)."],
        ["Mischel (1968) o cechach", "Cechy wyjaśniają tylko 5–10% zachowania – McCrae i Costa: tego należy się spodziewać, bo cechy działają probabilistycznie."],
        ["Agregacja (Epstein, 1979)", "Siłę cech widać po uśrednieniu wielu zachowań, a nie w pojedynczym zachowaniu."],
        ["Składniki centralne FFT", "Tendencje podstawowe, charakterystyczne przystosowania, koncepcja siebie."],
        ["Składniki peryferyjne FFT", "Podstawy biologiczne, wpływy zewnętrzne, biografia obiektywna."],
        ["Jak zmieniają się cechy między 18. a 30. r.ż.?", "N, E i O spadają, a U i S rosną (ok. 1/6 SD na 10 lat)."],
        ["Stałość rangowa cech (GZTS)", "r = 0,74 po 12 latach, 0,65 po 24 latach; u 40-latków mediana 0,83; ok. 60% wariancji przez dorosłość."],
        ["Roberts i DelVecchio (2000)", "Szczyt stałości cech dopiero ok. 50.–60. r.ż. – McCrae i Costa krytykują tę metaanalizę."],
        ["Stałość średnich poziomów vs stałość rangowa", "Średnie – czy grupa się przesuwa; rangowa – czy zachowujesz swoje miejsce w grupie."],
        ["Pochodzenie cech wg FFT", "Cechy są endogenne – środowisko zmienia przystosowania, a nie cechy."]
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
        ["Ugodowość", "od współczucia do antagonizmu"],
        ["Dyspozycje stylistyczne", "decydują, jak działamy"],
        ["Autonomia perseweracyjna", "nawyk bez pierwotnego celu"],
        ["Autonomia proprialna", "motyw z proprium, daje jedność"],
        ["Motywacja proaktywna", "sam wzbudza napięcie"],
        ["Allport i Odbert (1936)", "18 000 określeń cech"],
        ["Równanie specyfikacji", "R = Σ s·T (wagi sytuacyjne)"],
        ["Subsydiacja", "postawy → sentymenty → ergi"],
        ["Sentyment ja", "integruje pozostałe sentymenty"],
        ["Dane L, Q, T", "życiorys, kwestionariusze, testy"],
        ["MAVA", "dziedziczność vs środowisko"],
        ["ARAS", "pobudzenie korowe – ekstrawersja"],
        ["Mózgowie trzewne", "neurotyzm"],
        ["Psychotyzm", "dodany w 1975 r."],
        ["Tupes i Christal (1961)", "5 czynników na skalach Cattella"],
        ["NEO-PI", "1985 – Costa i McCrae"],
        ["Surgencja", "ekstrawersja u Normana"],
        ["Mischel (1968)", "cechy wyjaśniają 5–10% zachowania"],
        ["Epstein (1979)", "agregacja zachowań"],
        ["Fleeson (2001)", "zmienne zachowanie, stała średnia"],
        ["Tendencje podstawowe", "cechy – surowiec osobowości"],
        ["Charakterystyczne przystosowania", "nawyki, role, przekonania"],
        ["Roberts i DelVecchio", "szczyt stałości 50–60 lat"],
        ["Stałość rangowa po 12 latach", "r = 0,74"]
      ],
      quiz: [
        { q: "Cecha, która przejawia się niemal w każdym zachowaniu człowieka (Allport), to cecha:", o: ["centralna", "kardynalna", "wtórna", "źródłowa"], a: 1, e: "Kardynalna = dominująca." },
        { q: "Test 16PF opracował:", o: ["Eysenck", "Allport", "Cattell", "Costa i McCrae"], a: 2, e: "Cattell – 16 cech źródłowych." },
        { q: "Który wymiar NIE należy do modelu PEN Eysencka?", o: ["psychotyczność", "ekstrawersja", "sumienność", "neurotyczność"], a: 2, e: "Sumienność to czynnik Wielkiej Piątki." },
        { q: "Pojęcie proprium wprowadził:", o: ["Allport", "Rogers", "Cattell", "Kelly"], a: 0, e: "Allport – proprium zamiast „Ja”." },
        { q: "Poszukiwanie nowych doświadczeń i tolerancja nieznanego to:", o: ["ekstrawersja", "otwartość na doświadczenie", "ugodowość", "surgencja"], a: 1, e: "Otwartość na doświadczenie." },
        { q: "Codzienne sprawdzanie telefonu „bez powodu” to przykład autonomii funkcjonalnej:", o: ["perseweracyjnej", "proprialnej", "reaktywnej", "stylistycznej"], a: 0, e: "Perseweracyjna – nawyk trwa, choć nie służy pierwotnemu celowi." },
        { q: "Równanie specyfikacji Cattella opisuje reakcję jako:", o: ["sumę cech pomnożonych przez wagi sytuacyjne", "iloczyn popędu i nawyku", "różnicę między ja realnym a idealnym", "sumę reakcji nawykowych"], a: 0, e: "R = s1·T1 + … + sn·Tn." },
        { q: "Ergi według Cattella są:", o: ["wrodzone", "nabyte", "obserwowalne", "stylistyczne"], a: 0, e: "Sentymenty są nabyte; najważniejszy – sentyment ja." },
        { q: "Introwertyk według Eysencka ma:", o: ["wyższe bazowe pobudzenie korowe, więc unika bodźców", "niższe pobudzenie korowe, więc szuka bodźców", "silniejszą reaktywność układu limbicznego", "niższą neurotyczność"], a: 0, e: "Pobudzenie reguluje układ siatkowaty (ARAS)." },
        { q: "Neurotyzm Eysenck wiązał z reaktywnością:", o: ["mózgowia trzewnego (układu limbicznego)", "kory przedczołowej", "móżdżku", "układu siatkowatego"], a: 0, e: "E – pobudzenie korowe (ARAS); N – układ limbiczny." },
        { q: "Kto (1961) znalazł 5 czynników na skalach Cattella?", o: ["Tupes i Christal", "Costa i McCrae", "Allport i Odbert", "Roberts i DelVecchio"], a: 0, e: "Potem Norman (1963) i Goldberg (1981)." },
        { q: "Jak zmieniają się średnie poziomy cech między 18. a 30. r.ż.?", o: ["N, E i O spadają, U i S rosną", "wszystkie rosną", "wszystkie spadają", "N rośnie, reszta bez zmian"], a: 0, e: "Ok. 1/6 SD na 10 lat; po 30. r.ż. zmiany są bardzo małe." },
        { q: "Według teorii pięcioczynnikowej środowisko zmienia:", o: ["charakterystyczne przystosowania, a nie cechy", "tendencje podstawowe", "podstawy biologiczne", "wyłącznie temperament"], a: 0, e: "Cechy są endogenne." },
        { q: "Mischel (1968) twierdził, że cechy wyjaśniają:", o: ["tylko 5–10% zachowania", "ok. 50% zachowania", "całe zachowanie", "nic"], a: 0, e: "McCrae i Costa: tego należy się spodziewać – cechy działają probabilistycznie." },
        { q: "Stałość rangowa cech to:", o: ["zachowanie swojego miejsca w grupie", "brak zmian średnich w grupie", "stały nastrój", "stałe nawyki"], a: 0, e: "Rozróżniaj stałość średnich poziomów i stałość różnic indywidualnych." },
        { q: "Kto twierdził, że szczyt stałości cech przypada na 50.–60. r.ż.?", o: ["Roberts i DelVecchio", "McCrae i Costa", "James", "Epstein"], a: 0, e: "McCrae i Costa krytykują tę metaanalizę – według nich cechy stabilizują się ok. 30. r.ż." },
        { q: "Wymiar P (psychotyzm) Eysenck dodał w roku:", o: ["1975", "1947", "1985", "1961"], a: 0, e: "PEN: psychotyzm, ekstrawersja, neurotyzm." }
      ],
      open: [
        { q: "Czym różni się cecha kardynalna od centralnej?", a: "**Kardynalna** to jedna, dominująca dyspozycja, która przejawia się prawie w każdym zachowaniu (ma ją niewiele osób). **Centralne** to kilka (ok. 5–10) wyraźnych, łatwo zauważalnych cech, które dobrze opisują człowieka. Trzecia grupa to **wtórne** – najliczniejsze, rzadkie i wąskie (Allport)." },
        { q: "Na czym polega autonomia funkcjonalna motywów?", a: "Dorosłe motywy **uniezależniają się od pierwotnego źródła** (Allport). **Perseweracyjna** – nawyki trwają, choć nie służą już pierwotnemu celowi (np. sprawdzanie telefonu bez powodu). **Proprialna** – motywy związane z proprium, nadające osobowości jedność (np. ktoś zaczął biegać, żeby schudnąć, a teraz biega, bo to kocha)." },
        { q: "Czym różnią się cechy powierzchniowe i źródłowe?", a: "**Powierzchniowe** (Cattell) to to, co widać – skupiska zachowań występujących razem. **Źródłowe** to ukryte, jednolite i trwałe **czynniki** z analizy czynnikowej, które leżą u podłoża zachowania; Cattell wyróżnił ich 16 (**16 PF**)." },
        { q: "Co opisuje równanie specyfikacji?", a: "Równanie Cattella **R = s1·T1 + s2·T2 + … + sn·Tn**: reakcja (R) jest sumą cech (T) pomnożonych przez **wagi sytuacyjne** (s). Gdy cecha jest ważna w danej sytuacji, waga jest duża; gdy nie ma znaczenia – zero. Zachowanie zależy więc od cech i sytuacji." },
        { q: "Jak Eysenck wyjaśnia różnice między ekstrawertykiem a introwertykiem?", a: "Biologicznie – poziomem **pobudzenia korowego** regulowanego przez **układ siatkowaty (ARAS)**. Introwertyk ma **wyższe** pobudzenie bazowe, więc unika bodźców i dobrze działa przy słabej stymulacji; ekstrawertyk ma **niższe**, więc szuka bodźców, by dojść do optymalnego pobudzenia. Introwertycy łatwiej się warunkują." },
        { q: "Dlaczego cechy słabo przewidują pojedyncze zachowanie, a dobrze średnie?", a: "Cechy to **tendencje**, a nie determinanty – na pojedyncze zachowanie wpływają też rola, sytuacja, nastrój i nawyki (**Mischel**: 5–10% wyjaśnionej wariancji). Siłę cech widać po **agregacji** (Epstein, 1979): uśrednienie wielu zachowań daje stały wynik (Fleeson, 2001 – zachowanie zmienia się z godziny na godzinę, ale średnia jest stała)." },
        { q: "Jak zmieniają się N, E, O, U i S między 18. a 30. rokiem życia?", a: "**Neurotyczność, ekstrawertyczność i otwartość spadają**, a **ugodowość i sumienność rosną** – w wielu kulturach, ok. 1/6 odchylenia standardowego na 10 lat. Po 30. r.ż. zmiany są już bardzo małe (McCrae i Costa)." },
        { q: "Czym różni się stałość średnich poziomów od stałości rangowej?", a: "**Stałość średnich poziomów** – czy cała grupa przesuwa się na wymiarze (np. spadek N z wiekiem). **Stałość rangowa (różnic indywidualnych)** – czy osoba zachowuje swoje miejsce względem innych (r = 0,74 po 12 latach, 0,83 u 40-latków). Osobowość może się zmieniać średnio, a mimo to pozostawać stała rangowo." }
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
