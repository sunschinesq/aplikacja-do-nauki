// Dodatkowe, ręcznie napisane pytania do quizu dla tematów, które miały ich najmniej.
// Klucz: "przedmiot/temat"; pytania dopisują się do topic.quiz (plik ładuj PO plikach przedmiotów).
(function () {
  const ADD = {
    // ---------- Pomoc psychologiczna ----------
    "pomoc/przebieg": [
      { q: "Warunki formalne rozmowy to inaczej:", o: ["jak rozmawiać – klimat, relacja, kontakt, taktyka, pytania", "o czym rozmawiać – wynika z celu i teorii", "dokumentacja przed spotkaniem", "koszty i czas badania"], a: 0, e: "Formalne = JAK rozmawiać; treściowe = O CZYM." },
      { q: "Celem rozpoczęcia rozmowy jest przede wszystkim:", o: ["kontakt i motywacja do współpracy", "jak najszybsze postawienie diagnozy", "zebranie danych demograficznych", "konfrontacja z problemem"], a: 0, e: "Początek ogólny i swobodny – badany ma czuć się kompetentnym informatorem [GS]." },
      { q: "Efekt pierwszego wrażenia na początku rozmowy działa jak:", o: ["samowzmacniające się sprzężenie zwrotne", "bodziec neutralny", "mechanizm obronny", "pytanie odroczone"], a: 0, e: "Dlatego początek może być decydujący." },
      { q: "Pytania odroczone to:", o: ["pytania zadane później, by nie przerywać spontanicznej wypowiedzi", "pytania, na które klient odmówił odpowiedzi", "pytania zadawane dopiero na kolejnym spotkaniu", "pytania sugerujące"], a: 0, e: "Pozwalamy mówić bez przerywania, a pytania odkładamy na później." },
      { q: "Dlaczego nie należy zatrzymywać się na pierwszej trudności zgłoszonej przez klienta?", o: ["klient uzna ją za główną, choć może nie być najważniejsza", "pierwsza trudność jest zawsze pozorna", "zabrania tego kontrakt diagnostyczny", "bo to wydłuża rozmowę"], a: 0, e: "Nie zatrzymuj się na pierwszej trudności – klient uzna ją za główną." },
      { q: "Kiedy diagnosta przechodzi ze swobodnego trybu rozmowy do kierowania nią?", o: ["gdy pojawiają się dygresje, ogólniki lub trudność ze spontaniczną wypowiedzią", "zawsze po 10 minutach", "gdy klient mówi na temat", "nigdy – rozmowa zawsze jest swobodna"], a: 0, e: "Swobodny tryb – gdy klient mówi na temat; kierujemy – przy dygresjach i ogólnikach." },
      { q: "Rozpoznanie motywacji w kontrakcie (Markus) oznacza m.in.:", o: ["pokazanie prawa do rezygnacji i pomoc w nazwaniu korzyści", "nakłonienie klienta do udziału za wszelką cenę", "ustalenie wysokości wynagrodzenia", "sprawdzenie ilorazu inteligencji"], a: 0, e: "Udział ma być choć częściowo świadomym wyborem klienta." }
    ],
    "pomoc/pytania": [
      { q: "Funkcja informacyjna pytania wg Grzegołowskiej-Klarkowskiej i Szustrowej oznacza, że:", o: ["pytanie mówi, czego szukamy, więc musi być jasne", "pytanie podtrzymuje chęć mówienia", "pytanie zmniejsza opór", "pytanie zmienia temat rozmowy"], a: 0, e: "Informacyjna – jasność; motywująca – chęć mówienia." },
      { q: "Pytania zamknięte warto stosować m.in. gdy:", o: ["brakuje czasu, motywacja jest mała albo klient jest bardzo gadatliwy", "chcemy poznać styl wypowiedzi klienta", "rozpoczynamy rozmowę", "badamy treści nieświadome"], a: 0, e: "Także przy klasyfikacji i uzupełnianiu braków." },
      { q: "„Jak oceniasz swoje zdrowie?” to pytanie:", o: ["o interpretacje", "o fakty", "uwikłane", "przejściowe"], a: 0, e: "O fakty: „Jakie miałeś oceny?”; o interpretacje: znaczenie, ocena." },
      { q: "Pytanie przejściowe służy do:", o: ["łagodnej zmiany tematu – łączy stary i nowy temat", "sprawdzenia podatności na sugestię", "ukrycia właściwego pytania wśród neutralnych", "zakończenia rozmowy"], a: 0, e: "Np. „Przypuszczam, że z żoną spotykacie się ze znajomymi… Opowie pan o nich?”" },
      { q: "Zamiast pytać „czy ma pan wysoki lęk interpersonalny?” należy pytać:", o: ["o obserwowalne fakty w języku badanego", "o konstrukty teoretyczne", "pytaniem sugerującym", "pytaniem projekcyjnym"], a: 0, e: "Pytamy o fakty, nie o konstrukty." },
      { q: "Pytania alternatywne („A czy B?”) są szczególnie przydatne do:", o: ["wyjaśniania sprzeczności", "nawiązania kontaktu", "zachęcenia do swobodnej narracji", "badania treści nieświadomych"], a: 0, e: "To odmiana pytań zamkniętych." },
      { q: "Pytania sugerujące wg [GS] są dopuszczalne m.in. gdy:", o: ["chcemy sprawdzić podatność na sugestię", "chcemy skrócić rozmowę", "klient jest zmęczony", "rozpoczynamy rozmowę"], a: 0, e: "Drugi wyjątek: zmniejszenie lęku przy zachowaniu nieaprobowanym." },
      { q: "Które pytania Suchańska uważa za najbezpieczniejsze?", o: ["otwarte, neutralne i projekcyjne", "zamknięte i sugerujące", "„dlaczego?” i uwikłane", "alternatywne i przejściowe"], a: 0, e: "[GS] ostrzega jednak, że projekcyjne grożą błędną interpretacją." }
    ],
    "pomoc/kolejnosc": [
      { q: "Taktyka lejka polega na przechodzeniu:", o: ["od pytań ogólnych i otwartych do szczegółów", "od szczegółów do ogólnych wniosków", "od tematów trudnych do łatwych", "od pytań zamkniętych do otwartych"], a: 0, e: "Standardowo; badany sam wybiera, co ważne." },
      { q: "„Rozszerzająca się spirala” w strategii rozmowy [GS] oznacza:", o: ["najpierw szkielet, potem te same tematy coraz dokładniej", "coraz szybsze tempo rozmowy", "przechodzenie od teraźniejszości do przeszłości", "zadawanie coraz bardziej sugerujących pytań"], a: 0, e: "Strategia całej rozmowy wg Grzegołowskiej-Klarkowskiej i Szustrowej." },
      { q: "Facylitacja to:", o: ["zachęcanie do mówienia: „Proszę mówić dalej”, potakiwanie, spojrzenie", "nazywanie ukrytego znaczenia wypowiedzi", "wskazanie rozbieżności między słowami a czynami", "łączenie wątków rozmowy"], a: 0, e: "Jedna z interwencji innych niż pytania [S]." },
      { q: "Klaryfikacja jest potrzebna, gdy:", o: ["nie rozumiemy wypowiedzi – „Nie jest dla mnie jasne…”", "chcemy zakończyć wątek", "klient milczy", "chcemy wskazać niespójność"], a: 0, e: "Ogólniki („nikt”, „każdy”) mogą kryć konflikt." },
      { q: "Podsumowanie jako interwencja:", o: ["łączy wątki i wyłania powtarzające się tematy („skrypt życiowy”)", "nazywa ukryte znaczenie", "zawsze kończy spotkanie", "jest formą pytania zamkniętego"], a: 0, e: "Może też zamknąć zbyt długi wątek." },
      { q: "Interpretacja zbyt odległa od treści wypowiedzi klienta:", o: ["wywołuje opór", "staje się parafrazą", "jest najskuteczniejsza", "zastępuje konfrontację"], a: 0, e: "Za daleko = opór, za blisko = parafraza." },
      { q: "Informacja zwrotna „na gorąco” dotyczy:", o: ["tego, co dzieje się teraz – w 1. osobie i czasie teraźniejszym", "wyników testów po badaniu", "przeszłych doświadczeń klienta", "opinii innych osób o kliencie"], a: 0, e: "Interwencja z listy Suchańskiej." },
      { q: "Sondowanie (Egan) polega na:", o: ["przechodzeniu od ogólników do konkretnych zachowań i uczuć", "milczeniu w oczekiwaniu na odpowiedź", "wskazywaniu sprzeczności", "parafrazowaniu wypowiedzi"], a: 0, e: "Także prośba o przykład i wyobrażenie „filmu” z problemem." }
    ],
    "pomoc/formy": [
      { q: "Dlaczego warto uprzedzić klienta o zbliżającym się końcu rozmowy?", o: ["ważne sprawy często padają właśnie wtedy", "żeby szybciej skończyć", "bo tak każe kodeks etyczny", "żeby klient przygotował pytania o diagnozę"], a: 0, e: "Uprzedzenie o końcu to jedna z zasad zakończenia." },
      { q: "Gdy klient pyta na koniec „jak wypadłem?”, diagnosta [GS]:", o: ["może zrekapitulować mocne i problemowe obszary jego słowami, bez diagnozy, ocen i rad", "podaje wynik liczbowy", "stawia wstępną diagnozę", "odmawia odpowiedzi"], a: 0, e: "Bez diagnozy, ocen i rad." },
      { q: "Ile zwykle trwa rozmowa diagnostyczna wg [GS]?", o: ["do godziny, potem kolejne spotkanie", "dokładnie 15 minut", "3–4 godziny bez przerwy", "tyle, ile chce diagnosta"], a: 0, e: "Zmęczenie lub silne napięcie = kończymy." },
      { q: "Czy diagnosta powinien naśladować slang badanego?", o: ["nie – brzmi to sztucznie; wystarczy akceptacja i chęć zrozumienia", "tak, zawsze", "tak, ale tylko u nastolatków", "tak, bo buduje to kontakt"], a: 0, e: "Gwarę i slang wyjaśniamy taktownie i rzadko." },
      { q: "Rozmowa częściowo ustrukturalizowana:", o: ["ma stałe kategorie i kryteria, a pytania szczegółowe powstają na bieżąco", "ma stałe pytania, kolejność i kodowanie", "nie ma żadnego planu", "polega na wolnych skojarzeniach"], a: 0, e: "Często z arkuszem rozmowy; służy wyjaśnianiu zachowania i motywacji." },
      { q: "Wadą rozmowy swobodnej jest m.in.:", o: ["gorsza zgodność ocen i łatwość przerwania po potwierdzeniu hipotezy", "słaby kontakt z klientem", "brak reakcji niewerbalnych", "ryzyko przesłuchania"], a: 0, e: "Ryzyko przesłuchania to wada formy ustrukturalizowanej." },
      { q: "Według Rogersa najważniejsze pytanie o formę rozmowy brzmi:", o: ["do jakiego celu ta forma służy?", "która forma jest najlepsza?", "która forma jest najkrótsza?", "którą formę lubi klient?"], a: 0, e: "Błąd = złe dopasowanie metody do celu." },
      { q: "Głębokość rozmowy jako cecha strategii [GS] zależy m.in. od:", o: ["celu i teorii (psychoanaliza – najgłębiej)", "długości rozmowy", "wieku diagnosty", "liczby pytań zamkniętych"], a: 0, e: "Doradztwo zawodowe – płytko, emocje – głęboko." }
    ],
    "pomoc/tresc": [
      { q: "W rozmowie ustrukturalizowanej teoria służy przede wszystkim do:", o: ["stworzenia planu rozmowy", "interpretacji po rozmowie", "nawiązania kontaktu", "zakończenia rozmowy"], a: 0, e: "W swobodnej teoria służy do interpretacji po rozmowie [S]." },
      { q: "Częsty błąd przy planowaniu treści wywiadu to:", o: ["mylenie tego, co chcę wiedzieć, z tym, o co pytam", "zbyt dokładne określenie celu", "korzystanie z teorii", "pytanie o konkretne wspomnienia"], a: 0, e: "Pytamy o konkretne wspomnienia, a nie „Czy rodzice wzbudzali w panu winę?”." },
      { q: "W paradygmacie behawioralnym rozmowa szuka przede wszystkim:", o: ["łańcucha bodziec – reakcja – skutki i wtórnych korzyści", "obron i fiksacji", "sensu życia i samorealizacji", "sposobu konstruowania opowieści"], a: 0, e: "Kanfer i Saslow; analiza behawioralna." },
      { q: "Model Becka w paradygmacie poznawczo-behawioralnym zaczyna się od:", o: ["przekonań pierwotnych", "automatycznych myśli", "zachowania", "emocji"], a: 0, e: "Przekonania pierwotne → założenia → wydarzenie krytyczne → automatyczne myśli → emocja → zachowanie." },
      { q: "Para „realne vs wyobrażone” informacji z wywiadu [GS] dotyczy:", o: ["tego, jak jest, a jak klient chciałby, żeby było", "faktów i przeżyć", "jak widzi siebie i jak sądzi, że widzą go inni", "przeszłości i przyszłości"], a: 0, e: "Rozbieżność między realnym a wyobrażonym jest ważna diagnostycznie." },
      { q: "Co jest niedopuszczalne przy nagrywaniu rozmowy?", o: ["ukrywanie nagrywania", "nagrywanie dźwięku", "odsłuchanie nagrania po rozmowie", "poinformowanie klienta o nagraniu"], a: 0, e: "Nagranie daje wierny zapis, ale może budzić lęk; ukrywanie go jest niedopuszczalne." },
      { q: "Diagnozując zaburzenia zachowania w duchu teorii przywiązania [S], pytamy np.:", o: ["„Do kogo zwróciłbyś się po pomoc?”", "„Czy kochasz swoich rodziców?”", "„Jaki masz iloraz inteligencji?”", "„Dlaczego się tak zachowujesz?”"], a: 0, e: "Nie pytamy wprost o rodziców – szukamy bezpiecznej bazy." },
      { q: "Dlaczego własne tabu diagnosty (np. seks, agresja) są ryzykowne?", o: ["sprawiają, że ważne tematy są pomijane", "zwiększają zgodność ocen", "przyspieszają rozmowę", "są wymagane przez kontrakt"], a: 0, e: "Chroni przed tym samoświadomość diagnosty." }
    ],

    // ---------- Diagnoza sprawności poznawczych (etyka) ----------
    "poznawcze/zawod": [
      { q: "Dlaczego psycholog jest zawodem zaufania publicznego?", o: ["pracuje z ludźmi, oddziałuje na nich i podejmuje decyzje ważne dla ich przyszłości", "bo ma wysokie zarobki", "bo jest zatrudniany przez państwo", "bo kończy studia medyczne"], a: 0, e: "Pytanie z wykładu dr Prackiej." },
      { q: "Pojęcie „zawód regulowany” pochodzi z:", o: ["prawa Unii Europejskiej", "Konstytucji RP", "Kodeksu karnego", "kodeksu etyki PTP"], a: 0, e: "Zawód zaufania publicznego to pojęcie tylko polskie (Konstytucja, art. 17)." },
      { q: "Która cecha należy do zawodu zaufania publicznego (Hausner, Długosz)?", o: ["obowiązek tajemnicy", "hierarchia urzędnicza", "brak wymagań co do wykształcenia", "brak kodeksu etycznego"], a: 0, e: "Także: poznawanie intymnych spraw klienta, skodyfikowana etyka, specjalistyczne wykształcenie." },
      { q: "Art. 12 ustawy o zawodzie psychologa (2001) dotyczy:", o: ["zgody klienta na usługę", "tajemnicy zawodowej", "obowiązku informowania", "wpisu na listę psychologów"], a: 0, e: "Art. 12 – zgoda, art. 13 – informowanie, art. 14 – tajemnica." },
      { q: "Art. 13 ustawy z 2001 r. nakłada obowiązek:", o: ["informowania o celu, przebiegu, wynikach i ich udostępnianiu", "zachowania tajemnicy", "odbycia stażu", "przynależności do samorządu"], a: 0, e: "Obowiązek informowania klienta." },
      { q: "Od kiedy ma obowiązywać większość przepisów nowej ustawy o zawodzie psychologa (2026)?", o: ["od maja 2028 r.", "od 1 stycznia 2026 r.", "od 2030 r.", "od dnia podpisania"], a: 0, e: "Ustawa z 23 stycznia 2026 r. – obowiązkowy samorząd i publiczny rejestr." },
      { q: "Ustawa z 2001 r. wymienia jako usługi psychologiczne m.in.:", o: ["diagnozę, opiniowanie, orzekanie, psychoterapię i pomoc psychologiczną", "przepisywanie leków", "wykonywanie badań neurologicznych", "prowadzenie postępowań sądowych"], a: 0, e: "Art. 4 ustawy." }
    ],
    "poznawcze/zasady": [
      { q: "Zasady etyczne w kodeksach to przede wszystkim:", o: ["wskazówki (wzorzec), a nie podstawa sankcji", "przepisy karne", "procedury administracyjne", "wymagania płacowe"], a: 0, e: "Konkretne obowiązki określają standardy postępowania." },
      { q: "Zleceniodawca to:", o: ["ten, kto zleca usługę (rodzic, szkoła, sąd, firma)", "osoba badana", "superwizor psychologa", "autor testu"], a: 0, e: "Klient to osoba w relacji z psychologiem; zasady chronią przede wszystkim klienta." },
      { q: "Hasło „psycholog pracuje sobą” odnosi się do zasady:", o: ["dobra klienta i nieszkodzenia", "sprawiedliwości", "prywatności", "integralności"], a: 0, e: "Jakość pracy zależy od kondycji psychicznej i fizycznej psychologa." },
      { q: "Dlaczego diagnosta-orzecznik nie prowadzi terapii tej samej osoby?", o: ["to konflikt ról w obrębie jednej roli zawodowej", "zabrania tego Konstytucja", "bo terapia jest płatna", "bo diagnoza trwa zbyt długo"], a: 0, e: "Zasada odpowiedzialności zawodowej (Lazari-Pawłowska)." },
      { q: "Zasada integralności i uczciwości zawodowej oznacza m.in., że:", o: ["nie z każdym klientem psycholog może pracować", "psycholog może stosować dowolne metody", "psycholog zawsze ujawnia wyniki rodzinie", "psycholog nie musi się doskonalić"], a: 0, e: "Silne emocje ograniczają obiektywizm; tylko metody naukowo uzasadnione." },
      { q: "Wymóg kompetencji kulturowych (praca z migrantami, uchodźcami) wynika z zasady:", o: ["sprawiedliwości", "odpowiedzialności", "nieszkodzenia", "prywatności"], a: 0, e: "Jednakowe traktowanie niezależnie od pochodzenia, poglądów, wyznania." },
      { q: "„Oddzielamy czyn od osoby” – to wyraz poszanowania:", o: ["godności", "autonomii", "prywatności", "sprawiedliwości"], a: 0, e: "Godność jest bezwarunkowa i niezbywalna." },
      { q: "Prawo do prywatności oznacza, że psycholog:", o: ["ingeruje tylko w zakresie kontraktu i nie zbiera zbędnych danych", "nie może zadawać pytań osobistych", "musi nagrywać każdą rozmowę", "nie prowadzi dokumentacji"], a: 0, e: "Konstytucja, art. 47 i 51." }
    ],
    "poznawcze/tajemnica": [
      { q: "Tajemnica zawodowa psychologa obejmuje:", o: ["wszystko, czego dowiedział się w związku z pracą", "tylko wyniki testów", "tylko informacje o przestępstwach", "tylko dane osobowe"], a: 0, e: "Diagnozy, wyniki, sytuację rodzinną i materialną (Stepulak)." },
      { q: "Czy tajemnica obowiązuje po śmierci klienta?", o: ["tak", "nie", "tylko przez 5 lat", "tylko za zgodą rodziny"], a: 0, e: "Bez granic czasowych, ale nie bezwzględna." },
      { q: "Który przepis wprowadza bezwzględny zakaz dowodowy w ochronie zdrowia psychicznego?", o: ["art. 52 ustawy o ochronie zdrowia psychicznego", "art. 266 KK", "art. 180 KPK", "art. 17 Konstytucji"], a: 0, e: "Ustawa o ochronie zdrowia psychicznego, art. 50–52." },
      { q: "Co psycholog powinien zrobić przed sądem, gdy chce zachować tajemnicę?", o: ["wyraźnie oświadczyć, że odmawia zeznań z powodu tajemnicy, i wskazać przepisy", "milczeć bez wyjaśnień", "przekazać dokumentację stronom", "poprosić klienta o zeznania za siebie"], a: 0, e: "Np. KPC art. 261 § 2, KPA art. 83 § 2." },
      { q: "Obowiązek zawiadomienia przy podejrzeniu przemocy w rodzinie wynika z:", o: ["ustawy o przeciwdziałaniu przemocy w rodzinie (art. 12)", "art. 47 Konstytucji", "kodeksu etyki PTP", "ustawy o prawach pacjenta"], a: 0, e: "Niezwłocznie Policja lub prokurator; od 2023 r. „przemoc domowa”." },
      { q: "Zwolnienie z tajemnicy na podstawie art. 180 KPK jest możliwe:", o: ["tylko w procedurze karnej, gdy to niezbędne dla dobra wymiaru sprawiedliwości", "w każdej sprawie cywilnej", "na prośbę rodziców dziecka", "na życzenie pracodawcy"], a: 0, e: "Postanowienie na piśmie; od postanowienia sądu brak odwołania." },
      { q: "Punktem odniesienia w stanie wyższej konieczności (art. 26 KK) jest:", o: ["życie i zdrowie", "majątek klienta", "dobre imię psychologa", "interes zleceniodawcy"], a: 0, e: "Poświęcamy dobro niższe dla ratowania wyższego; decyzja wymaga konsultacji." }
    ],
    "poznawcze/standardy": [
      { q: "Ile części mają Standardy diagnozy psychologicznej Sekcji Diagnozy PTP (2014)?", o: ["5", "3", "7", "10"], a: 0, e: "Warunki wstępne, planowanie, badanie, integracja danych, komunikowanie i dokumentacja." },
      { q: "Integracja danych w Standardach diagnozy oznacza:", o: ["łączenie danych ilościowych i jakościowych oraz ocenę, na ile można im ufać", "wpisanie wyników do rejestru", "przekazanie wyników zleceniodawcy", "wybór narzędzi"], a: 0, e: "Czwarta część Standardów." },
      { q: "Wyjątkiem od zasady „nie udzielamy pomocy w trakcie diagnozy” jest:", o: ["informacja zwrotna na końcu, która może być formą pomocy", "wspólna sesja terapeutyczna", "udzielenie porady prawnej", "przepisanie leków"], a: 0, e: "Obiektywizm ≠ bezduszność." },
      { q: "Hipotezy w pracy terapeuty (Ackerman) weryfikuje:", o: ["klient i proces terapii", "wyłącznie psycholog i testy", "sąd", "pracodawca"], a: 0, e: "U diagnosty: psycholog i dane obiektywne." },
      { q: "Dlaczego nie diagnozujemy osób, które znamy?", o: ["konflikt ról i trwała zmiana relacji", "bo to zbyt czasochłonne", "bo zabrania tego Konstytucja", "bo znajomi nie płacą"], a: 0, e: "Diagnoza byłaby nieobiektywna, a relacja trwale by się zmieniła." },
      { q: "Negatywne oczekiwania psychologa wobec badanego to efekt:", o: ["Golema", "Galatei", "Pigmaliona", "Hawthorne"], a: 0, e: "Galatea – pozytywne, Golem – negatywne (Rosenthal)." },
      { q: "Lęk przed oceną u badanego opisał:", o: ["Rosenberg", "Rosenthal", "Ackerman", "Daubert"], a: 0, e: "Czy sprostam zadaniom? Czy skutki diagnozy będą korzystne?" },
      { q: "Przykładem badania z przymusu prawnego są:", o: ["badania oskarżonych (KPK art. 74)", "badania z ciekawości", "badania w poradni na prośbę klienta", "badania naukowe ochotników"], a: 0, e: "Dobrowolność ma różne stopnie – od pełnej do przymusu prawnego." }
    ],
    "poznawcze/kontrakt": [
      { q: "Jakie są trzy etapy diagnozy?", o: ["zawarcie kontraktu → badanie → zakończenie (informacja zwrotna i opinia)", "wywiad → test → terapia", "obserwacja → eksperyment → raport", "rekrutacja → selekcja → zatrudnienie"], a: 0, e: "Trzy etapy diagnozy wg wykładu." },
      { q: "Pytanie „czy problem jest dobrze zaadresowany do psychologa?” zadajemy w kontrakcie z:", o: ["zleceniodawcą", "klientem", "superwizorem", "wydawcą testów"], a: 0, e: "Np. pytania o konfabulację czy depresję – raczej do psychiatry." },
      { q: "Czy zgoda klienta może być domniemana?", o: ["nie", "tak, zawsze", "tak, przy badaniu przymusowym", "tak, gdy płaci zleceniodawca"], a: 0, e: "Nawet przy badaniu przymusowym klient musi zaakceptować metody." },
      { q: "Za co płaci się w kontrakcie diagnostycznym?", o: ["za badanie i czas, nie za pozytywną ocenę", "za korzystny wynik", "za liczbę testów z dobrym wynikiem", "wyłącznie za opinię na piśmie"], a: 0, e: "Piąta kwestia kontraktu z klientem – wynagrodzenie." },
      { q: "Czy klient może odmówić wykonania testu?", o: ["tak – to wyraz jego autonomii", "nie, nigdy", "tylko za zgodą sądu", "tylko gdy jest pełnoletni"], a: 0, e: "Uwaga na pokusę przekonywania z pozycji przewagi." },
      { q: "Która zasada informacji zwrotnej polega na przeplataniu informacji pozytywnych z negatywnymi?", o: ["kanapka", "bez etykiet", "bez wyników liczbowych", "zrozumiały język"], a: 0, e: "6 zasad informacji zwrotnej dr Prackiej." },
      { q: "Ryzyko informacji zwrotnej (Hornowska) to m.in.:", o: ["labelling – klient dopasowuje obraz siebie do diagnozy", "zbyt szybkie zakończenie badania", "wzrost kosztów badania", "zmniejszenie liczby testów"], a: 0, e: "Diagnoza bywa też „usprawiedliwieniem” trudnych zachowań." }
    ],
    "poznawcze/testy": [
      { q: "Test psychologiczny wg Standardów AERA/APA/NCME daje:", o: ["próbkę zachowania ocenianą według wystandaryzowanych reguł", "pełną diagnozę osoby", "wynik prawdziwy bez błędu", "opinię sądową"], a: 0, e: "Diagnoza jest szersza – integruje wiele źródeł." },
      { q: "Który test podano jako przykład narzędzia z rażącymi brakami psychometrycznymi?", o: ["Test Drzewa Kocha", "WAIS-R", "MMPI-2", "NEO-FFI"], a: 0, e: "Nie każdy zestaw pytań to test." },
      { q: "Kryterium Dauberta „znana wielkość błędu” oznacza, że:", o: ["podaje się przedział ufności", "test nie może mieć błędu", "błąd zależy od psychologa", "błąd liczy się tylko w badaniach naukowych"], a: 0, e: "Kryteria z amerykańskiej sprawy sądowej z 1993 r." },
      { q: "Za spełnienie warunków badania i „gotowość psychologiczną” odpowiada:", o: ["osoba badana (test taker)", "wydawca testu", "twórca testu", "zleceniodawca"], a: 0, e: "Trzy źródła nieetycznego użycia testu: test, psycholog, osoba badana." },
      { q: "Do kategorii A dostępu do testów mają dostęp:", o: ["psycholodzy i inni profesjonaliści pracujący z ludźmi", "tylko magistrowie psychologii", "każda osoba bez ograniczeń", "tylko lekarze"], a: 0, e: "Np. LWO, IZZ, Mini-MAC." },
      { q: "Wniosek Komisji PAN (2017) brzmi:", o: ["ani wiarygodny test u niekompetentnego psychologa, ani niewiarygodny u kompetentnego nie dadzą wiarygodnych wyników", "wystarczy dobry test", "wystarczy kompetentny psycholog", "testy są niepotrzebne w diagnozie"], a: 0, e: "Potrzebne są oba warunki naraz." },
      { q: "Art. 12 Kodeksu PTP dotyczy:", o: ["nieudostępniania technik diagnostycznych osobom nieprzygotowanym", "tajemnicy zawodowej", "wynagrodzenia psychologa", "superwizji"], a: 0, e: "Ochrona testów: bezpieczne przechowywanie, prawa autorskie." }
    ],
    "poznawcze/trafnosc": [
      { q: "Wynik otrzymany w klasycznej teorii testów to:", o: ["wynik prawdziwy + błąd", "wynik prawdziwy − rzetelność", "średnia + odchylenie", "wynik prawdziwy × trafność"], a: 0, e: "Xt = X∞ + Xe (Gulliksen, 1950)." },
      { q: "Im wyższa rzetelność testu, tym SEM jest:", o: ["mniejszy", "większy", "taki sam", "równy zero zawsze"], a: 0, e: "SEM = SDt · √(1 − rtt)." },
      { q: "Wartość z dla przedziału ufności 99% wynosi:", o: ["2,58", "1,96", "1,64", "1,00"], a: 0, e: "95% = 1,96; 90% = 1,64; 68% = 1,00." },
      { q: "Według Standardów mówimy o trafności:", o: ["interpretacji wyniku, a nie testu jako takiego", "samego testu, niezależnie od celu", "autora testu", "wydawcy testu"], a: 0, e: "Standard 1.2 – żaden test nie jest trafny do wszystkich celów." },
      { q: "Macierz wielu cech i wielu metod (trafność zbieżna i różnicowa) zaproponowali:", o: ["Campbell i Fiske", "Cronbach i Meehl", "Gulliksen", "Messick"], a: 0, e: "Campbell i Fiske (1959)." },
      { q: "Który test ma dobrą trafność teoretyczną dzięki poznawczej teorii depresji?", o: ["BDI (Beck)", "WAIS", "MMPI", "fotografie Szondiego"], a: 0, e: "WAIS, WISC i MMPI powstały praktycznie, a teorię dobudowano wtórnie." },
      { q: "Czy test rzetelny musi być trafny?", o: ["nie – rzetelność nie oznacza trafności", "tak, zawsze", "tak, jeśli ma polskie normy", "tak, jeśli jest kategorii C"], a: 0, e: "Czas reakcji mierzony dokładnie nie musi mierzyć inteligencji." },
      { q: "Jak należy podawać wynik IQ z przykładu z WAIS-R?", o: ["jako przedział, np. „IQ między 57 a 81 (90%)”", "jako jedną liczbę, np. „IQ = 69”", "tylko słownie, bez liczb", "jako percentyl bez przedziału"], a: 0, e: "Nigdy „IQ = 69” – zawsze przedział ufności." }
    ],
    "poznawcze/adaptacja": [
      { q: "Elementy wspólne dla różnych kultur to:", o: ["etic", "emic", "pseudoadaptacja", "culture-free"], a: 0, e: "eMic = Miejscowe · eTic = Tożsame wszędzie (Pike, 1967)." },
      { q: "Kompendium wiedzy o adaptacji testów w Polsce napisał:", o: ["R. Drwal (1995)", "Cattell (1940)", "Pike (1967)", "Płużek (1971)"], a: 0, e: "Drwal – „Adaptacja kulturowa kwestionariuszy osobowości”." },
      { q: "Dlaczego całkowita neutralność kulturowa testu to utopia?", o: ["bo doświadczenia kulturowe zawsze wpływają na wynik (np. Lego a „Klocki” z WISC-R)", "bo testów nie da się tłumaczyć", "bo normy są zawsze amerykańskie", "bo testy mają zbyt mało pozycji"], a: 0, e: "Brzeziński, Kostrzewski, Matczak." },
      { q: "Który przykład pokazuje nadużycie przy adaptacji testów w Polsce?", o: ["WISKAD-MMPI (1971) z normami z USA", "Test Matryc Ravena", "tłumaczenie wsteczne", "nowe polskie normy"], a: 0, e: "Także skala Wechslera z 1939 r. z normami amerykańskimi przez dziesiątki lat." },
      { q: "Równoważność funkcjonalna adaptacji (Drwal) oznacza, że test:", o: ["mierzy to samo w obu kulturach", "ma tę samą formę i instrukcję", "ma takie same średnie i wariancje", "jest wiernie przetłumaczony"], a: 0, e: "5 kryteriów: fasadowa, psychometryczna, funkcjonalna, wierność tłumaczenia, wierność rekonstrukcji." },
      { q: "Źle przeprowadzona adaptacja prowadzi do:", o: ["stronniczości testu i błędnej diagnozy", "zwiększenia rzetelności", "lepszych norm", "trafności teoretycznej"], a: 0, e: "Hornowska – stronniczość testu → postępowanie nieetyczne." },
      { q: "Według Drwala optymalny test do badań międzykulturowych zawiera:", o: ["zadania emiczne dla kultury A, emiczne dla B i etyczne dla obu", "wyłącznie zadania emiczne", "wyłącznie zadania przetłumaczone", "wyłącznie zadania niewerbalne"], a: 0, e: "Test do lokalnej praktyki – więcej pozycji emicznych." }
    ],

    // ---------- Psychologia osobowości ----------
    "osobowosc/metody": [
      { q: "Podejście dedukcyjne w badaniu osobowości polega na:", o: ["przechodzeniu od ogólnej teorii do hipotez, które się sprawdza", "uogólnianiu z danych empirycznych", "opisie pojedynczych przypadków", "tworzeniu kwestionariuszy"], a: 0, e: "Indukcyjne – od faktów do uogólnień." },
      { q: "Która metoda badania osobowości jest typowa dla psychoanalizy?", o: ["kliniczna", "korelacyjna", "eksperymentalna", "sondażowa"], a: 0, e: "Systematyczne, dogłębne badanie pojedynczych osób." },
      { q: "Wadą metody korelacyjnej jest m.in. to, że:", o: ["pokazuje współwystępowanie, a nie przyczyny", "nie pozwala badać dużych prób", "jest najbardziej sztuczna", "nie używa statystyki"], a: 0, e: "Opiera się też na samoopisie i sztywnych pytaniach." },
      { q: "Wadą metody eksperymentalnej jest:", o: ["sztuczna sytuacja laboratoryjna", "brak związków przyczynowych", "subiektywna interpretacja", "opieranie się wyłącznie na wywiadzie"], a: 0, e: "Nie wszystkie zjawiska da się badać w laboratorium." },
      { q: "Dla psychologii humanistycznej osobowość to:", o: ["całość doświadczania siebie", "zespół nawyków", "zespół cech", "struktura świadomych i nieświadomych procesów"], a: 0, e: "Behawioryzm – nawyki; teorie cech – cechy; psychoanaliza – procesy (nie)świadome." },
      { q: "Autorem podziału na metody kliniczną, korelacyjną i eksperymentalną jest:", o: ["Pervin", "Freud", "Allport", "Seligman"], a: 0, e: "Trzy metody badania osobowości wg Pervina." }
    ],
    "osobowosc/uczenie": [
      { q: "Warunkowanie klasyczne polega na tym, że:", o: ["bodziec neutralny zaczyna wywoływać reakcję odruchową", "nagradzane zachowania się utrwalają", "uczymy się przez obserwację modelu", "osoba sama się nagradza"], a: 0, e: "Warunkowanie instrumentalne – nagradzane się utrwalają, karane zanikają." },
      { q: "Według Dollarda i Millera osobowość to:", o: ["konfiguracja nawyków nabytych w procesie uczenia się", "zespół cech dziedzicznych", "historia życia", "system znaczeń osobistych"], a: 0, e: "Schemat: popęd → sygnał → reakcja → wzmocnienie." },
      { q: "Które reakcje są nagradzane według Dollarda i Millera?", o: ["te, które redukują popęd", "te, które go zwiększają", "wszystkie reakcje", "tylko reakcje społeczne"], a: 0, e: "Redukcja popędu = wzmocnienie." },
      { q: "Proces motywacyjny w modelowaniu (Bandura) oznacza, że:", o: ["wykonujemy zachowanie, gdy daje satysfakcję lub jest użyteczne", "zauważamy zachowanie modelu", "kodujemy zachowanie w pamięci", "potrafimy fizycznie wykonać zachowanie"], a: 0, e: "Kolejność: uwaga → przechowywanie → wytwarzanie → motywacja." },
      { q: "Przekonanie „potrafię to zrobić” to wg Bandury oczekiwanie dotyczące:", o: ["skuteczności", "wyniku", "wzmocnienia", "popędu"], a: 0, e: "Oczekiwanie wyniku: „to zachowanie da określony efekt”." },
      { q: "Kolejne etapy systemu Ja (autoregulacji) Bandury to:", o: ["samoobserwacja → ocena → reakcja na siebie", "popęd → sygnał → reakcja", "uwaga → przechowywanie → motywacja", "ton → wyobrażenia → temat"], a: 0, e: "Ocena przez porównanie ze standardami i porównania społeczne." },
      { q: "Konflikt, w którym ten sam cel ma zarówno zalety, jak i wady, to konflikt:", o: ["dążenie–unikanie", "dążenie–dążenie", "unikanie–unikanie", "podwójne unikanie"], a: 0, e: "Typy konfliktów Dollarda i Millera." }
    ],
    "osobowosc/cechy": [
      { q: "Cechy wtórne wg Allporta są:", o: ["najliczniejsze, ujawniają się rzadko i w wąskim zakresie sytuacji", "jedną dominującą cechą", "kilkoma wyraźnymi cechami", "cechami wspólnymi wszystkim ludziom"], a: 0, e: "Kardynalna – jedna dominująca; centralne – kilka wyraźnych." },
      { q: "Funkcjonalna autonomia motywów (Allport) oznacza, że:", o: ["motyw może się usamodzielnić od pierwotnego źródła", "motywy są zawsze biologiczne", "motywy zanikają z wiekiem", "każdy motyw redukuje napięcie"], a: 0, e: "Pojęcie Gordona Allporta." },
      { q: "Cechy źródłowe wg Cattella to cechy:", o: ["ukryte, leżące u podłoża zachowania", "obserwowalne w zachowaniu", "wyłącznie środowiskowe", "wyłącznie temperamentalne"], a: 0, e: "16 czynników źródłowych mierzy test 16PF." },
      { q: "Ergi w teorii Cattella to:", o: ["biologiczne popędy", "wyuczone sentymenty", "cechy zdolnościowe", "cechy powierzchniowe"], a: 0, e: "Ergi, sentymenty i postawy to cechy dynamiczne." },
      { q: "Ekstrawertyk wg Eysencka:", o: ["potrzebuje silnej stymulacji", "dobrze działa przy słabej stymulacji", "jest niestabilny emocjonalnie", "jest chłodny i egocentryczny"], a: 0, e: "Introwertyk dobrze działa przy słabej stymulacji." },
      { q: "Twórcami Wielkiej Piątki są:", o: ["Costa i McCrae", "Dollard i Miller", "Cronbach i Meehl", "Seligman i Csikszentmihalyi"], a: 0, e: "OCEAN; wersja leksykalna – Goldberg." },
      { q: "Zorganizowanie, wytrwałość i motywacja do celu to w Wielkiej Piątce:", o: ["sumienność", "ugodowość", "otwartość na doświadczenie", "ekstrawersja"], a: 0, e: "Conscientiousness – sumienność." }
    ],
    "osobowosc/pozytywna-egzystencjalna": [
      { q: "Do przedstawicieli psychologii pozytywnej należą:", o: ["Seligman, Csikszentmihalyi, Haidt", "Freud, Jung, Adler", "Frankl, May, Yalom", "Dollard, Miller, Bandura"], a: 0, e: "Psychologia pozytywna bada to, co czyni życie wartościowym." },
      { q: "Szczęśliwe życie wg Seligmana jest:", o: ["przyjemne, zaangażowane i znaczące", "bogate, zdrowe i długie", "spokojne, samotne i proste", "pełne sukcesów zawodowych"], a: 0, e: "Trzy filary szczęśliwego życia." },
      { q: "Jaki udział w poziomie szczęścia ma intencjonalna aktywność?", o: ["ok. 40%", "ok. 10%", "ok. 50%", "ok. 90%"], a: 0, e: "Geny ok. 50%, aktywność ok. 40%, okoliczności ok. 10%." },
      { q: "Podstawą pesymizmu prowadzącego do depresji jest wg Seligmana:", o: ["wyuczona bezradność", "wola sensu", "lęk egzystencjalny", "nerwica egzystencjalna"], a: 0, e: "Przekonanie, że działania nie mają wpływu na to, co się dzieje." },
      { q: "Wina egzystencjalna to:", o: ["poczucie zaprzepaszczenia szans rozwoju", "lęk przed śmiercią", "brak sensu życia", "poczucie winy za przestępstwo"], a: 0, e: "Nerwica egzystencjalna – niezrealizowanie wartości nadających sens." },
      { q: "Wymiar duchowy człowieka wg Frankla to wymiar:", o: ["noetyczny", "somatyczny", "psychiczny", "społeczny"], a: 0, e: "Trzy wymiary: somatyczny, psychiczny, duchowy (noetyczny)." },
      { q: "Wola sensu wg Frankla to:", o: ["pierwotna, wrodzona potrzeba sensu", "wyuczona motywacja społeczna", "dążenie do przyjemności", "dążenie do władzy"], a: 0, e: "Sens trzeba odkryć – prowadzi to do autotranscendencji." },
      { q: "Pesymista w wymiarze personalizacji tłumaczy sukcesy jako:", o: ["przypadek", "swoją zasługę", "trwałe", "ogólne"], a: 0, e: "Porażki – moja wina, sukcesy – przypadek." }
    ],
    "osobowosc/narracyjne": [
      { q: "Myślenie narracyjne opisuje zmienność:", o: ["intencji, pragnień i celów w czasie", "cech biologicznych", "nawyków warunkowanych", "wyników testów"], a: 0, e: "Nie w kategoriach przyczynowo-skutkowych." },
      { q: "Ostatni etap rozwoju tożsamości narracyjnej wg McAdamsa (połowa życia) to:", o: ["skrypt generatywny", "ton narracyjny", "imago", "układ wartości"], a: 0, e: "Troska o kolejne pokolenia." },
      { q: "Dwa główne motywy w narracjach wg McAdamsa to:", o: ["siła i władza oraz miłość i intymność", "lęk i wina", "przyjemność i ból", "dążenie i unikanie"], a: 0, e: "Autonomia, osiągnięcia, kontrola vs bliskość, więź." },
      { q: "Według Tomkinsa o sile motywacji decydują:", o: ["emocje", "popędy", "nawyki", "cechy"], a: 0, e: "Popęd działa, gdy wzmocni go afekt." },
      { q: "Sceny w teorii skryptów Tomkinsa to:", o: ["zapamiętane zdarzenia z co najmniej jedną emocją", "reguły interpretowania zdarzeń", "cechy osobowości", "role społeczne"], a: 0, e: "Sceny łączą się przez skrypty." },
      { q: "Sceny negatywne przeżywamy wg Tomkinsa na zasadzie:", o: ["analogii – wciąż „ten sam scenariusz”", "różnic (wariantów)", "przypadku", "wzmocnienia"], a: 0, e: "Pozytywne – na zasadzie różnic." },
      { q: "Dwa motywy w teorii wartościowania Hermansa to:", o: ["umacnianie siebie (S) i pragnienie kontaktu z innymi (O)", "siła i miłość", "ergi i sentymenty", "popęd i wzmocnienie"], a: 0, e: "Osobowość jako system znaczeń osobistych." },
      { q: "Dysfunkcja w teorii Hermansa to:", o: ["dysocjacja – pomijanie ważnych doświadczeń w systemie wartościowań", "wyuczona bezradność", "skrypt jądrowy", "funkcjonalna autonomia"], a: 0, e: "Także brak uczuć tam, gdzie treść je sugeruje." }
    ],

    // ---------- Metodologia ----------
    "metodologia/podstawy": [
      { q: "Ile poprawnych odpowiedzi trzeba, żeby zaliczyć egzamin z metodologii (30 pytań)?", o: ["16", "15", "20", "25"], a: 0, e: "30 pytań w 30 minut, zaliczenie od 16 poprawnych." },
      { q: "Metodologia to zbiór reguł dotyczących:", o: ["jak, kogo, czym i gdzie badać", "jak pisać bibliografię", "jak prowadzić terapię", "jak liczyć średnią"], a: 0, e: "Celem jest tworzenie coraz lepszych sposobów pomiaru (Shaughnessy i in.)." },
      { q: "Statystyka jest nauką:", o: ["służebną – jej narzędzia dopasowuje się do dziedziny", "nadrzędną wobec psychologii", "wyłącznie teoretyczną", "zajmującą się pojedynczymi przypadkami"], a: 0, e: "Analiza i prezentacja danych ze zjawisk masowych." },
      { q: "Badanie empiryczne wg Brzezińskiego to:", o: ["usystematyzowany sposób obserwacji i pomiaru zjawisk w celu ich obiektywizacji", "przegląd literatury", "rozważanie filozoficzne", "opinia eksperta"], a: 0, e: "Np. obserwacja, eksperyment, sondaż, wywiad." },
      { q: "Jak poprawnie opisać wyniki zgodne z hipotezą?", o: ["„wyniki wspierają hipotezę”", "„udowodniono hipotezę”", "„hipoteza jest prawdziwa”", "„potwierdzono teorię na zawsze”"], a: 0, e: "Teorii nie da się udowodnić – można wykazać, że jest błędna (Feynman)." },
      { q: "Psychologia wg Kozieleckiego to nauka o:", o: ["funkcjonowaniu psychicznym człowieka – procesach i zachowaniu", "chorobach psychicznych", "mózgu i układzie nerwowym", "społeczeństwie"], a: 0, e: "Procesy emocjonalne, poznawcze, społeczne i zachowanie." }
    ],
    "metodologia/raport": [
      { q: "Jak zatytułować rozdział z opisem badania w raporcie APA?", o: ["Metoda", "Metodologia", "Metodyka", "Procedury badawcze"], a: 0, e: "Metoda, nie Metodologia." },
      { q: "Ile słów może mieć streszczenie raportu?", o: ["maks. 250", "maks. 100", "maks. 500", "dowolnie dużo"], a: 0, e: "Co najmniej 4 akapity, bez liczb." },
      { q: "Ile słów kluczowych podaje się pod streszczeniem?", o: ["3–7", "1–2", "10–15", "dokładnie 5"], a: 0, e: "Inne niż w tytule." },
      { q: "Nagłówkiem wprowadzenia w raporcie APA jest:", o: ["ponownie tytuł pracy", "słowo „Wstęp”", "słowo „Wprowadzenie teoretyczne”", "brak nagłówka i brak tytułu"], a: 0, e: "Nie piszemy „Wstęp”." },
      { q: "Hipotezy w raporcie formułujemy:", o: ["o zmiennych i populacji, w czasie teraźniejszym", "o wynikach testów i próbie", "w czasie przeszłym", "z użyciem terminów statystycznych"], a: 0, e: "„Większe” – zawsze niż co; unikamy słowa „wpływ”." },
      { q: "Poprawne określenie w podrozdziale Procedura to:", o: ["dobór próby badanej", "dobór próby badawczej", "wybór populacji badawczej", "selekcja badaczy"], a: 0, e: "Nigdy „próby badawczej”!" },
      { q: "Część „Uczestnicy” opisuje:", o: ["już zbadaną próbę (liczebność, wiek, płeć…)", "planowaną populację", "autorów narzędzi", "kryteria oceny raportu"], a: 0, e: "Opis faktyczny, po badaniu." },
      { q: "Przedmiotem badań jest:", o: ["mechanizm, proces lub zjawisko psychologiczne", "„związek między…”", "„osoby z…”", "hipoteza badawcza"], a: 0, e: "Np. inteligencja studentów, facylitacja społeczna." }
    ]
  };
  Object.keys(ADD).forEach((path) => {
    const [sid, tid] = path.split("/");
    const sub = (window.SUBJECTS || []).find((s) => s.id === sid);
    const topic = sub && sub.topics.find((t) => t.id === tid);
    if (topic) topic.quiz = (topic.quiz || []).concat(ADD[path]);
  });
})();
