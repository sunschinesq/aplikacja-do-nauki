// Dane do gier: „Kto to powiedział?” (pojęcie → autor) i „Ułóż po kolei” (sekwencje).
// Pozostałe gry (prawda/fałsz, memory, wisielec, luki, wyzwanie dnia, pojedynek) biorą treść z fiszek, notatek i quizów.
window.GAME_AUTHORS = {
  osobowosc: [
    ["model strukturalny: id, ego, superego", "Freud"], ["model topograficzny psychiki", "Freud"], ["fazy rozwoju psychoseksualnego", "Freud"], ["kateksja", "Freud"], ["sen jako „królewska droga do nieświadomości”", "Freud"], ["praca snu: zagęszczenie i przesunięcie", "Freud"], ["determinizm psychiczny", "Freud"],
    ["nieświadomość zbiorowa i archetypy", "Jung"], ["persona i cień", "Jung"], ["anima i animus", "Jung"], ["indywiduacja", "Jung"], ["introwersja i ekstrawersja jako postawy", "Jung"],
    ["poczucie niższości i kompensacja", "Adler"], ["styl życia", "Adler"], ["fikcyjna celowość", "Adler"], ["twórcze Ja", "Adler"], ["konstelacja rodzinna i kolejność urodzeń", "Adler"],
    ["system Ja: dobre Ja, złe Ja, nie-Ja", "Sullivan"], ["personifikacje i dynamizmy", "Sullivan"], ["chumship – przyjaciel tej samej płci", "Sullivan"], ["tryby: prototaksyczny, parataksyczny, syntaksyczny", "Sullivan"],
    ["8 stadiów psychospołecznych", "Erikson"], ["kryzys tożsamości", "Erikson"], ["zasada epigenetyczna", "Erikson"], ["generatywność vs stagnacja", "Erikson"],
    ["lęk podstawowy", "Horney"], ["ku ludziom, przeciw ludziom, od ludzi", "Horney"], ["tyrania powinności", "Horney"], ["Ja wyidealizowane", "Horney"],
    ["potrzeby i presje", "Murray"], ["kompleks Ikara", "Murray"], ["personologia", "Murray"],
    ["pozycja schizoparanoidalna i depresyjna", "Klein"], ["nieświadoma fantazja", "Klein"],
    ["libido szuka obiektu, nie rozładowania", "Fairbairn"], ["kontener i kontenerowanie", "Bion"], ["elementy alfa i beta", "Bion"],
    ["obiekt przejściowy", "Winnicott"], ["holding", "Winnicott"], ["self-obiekty: lustrzany, idealizowany, bliźniaczy", "Kohut"], ["teoria popędowo-strukturalna", "Kernberg"],
    ["determinizm wzajemny", "Bandura"], ["poczucie własnej skuteczności", "Bandura"], ["uczenie się przez modelowanie", "Bandura"],
    ["cechy kardynalne, centralne i wtórne", "Allport"], ["proprium", "Allport"], ["16 czynników osobowości", "Cattell"], ["cechy źródłowe i powierzchniowe", "Cattell"],
    ["model PEN: psychotyzm, ekstrawersja, neurotyczność", "Eysenck"], ["Wielka Piątka (NEO-PI-R)", "Costa i McCrae"],
    ["hierarchia potrzeb", "Maslow"], ["dylemat obrona – rozwój", "Maslow"], ["terapia skoncentrowana na kliencie", "Rogers"], ["bezwarunkowa akceptacja, empatia, autentyczność", "Rogers"],
    ["cykl doświadczenia, top dog i bottom dog", "Perls"], ["teoria autodeterminacji", "Deci i Ryan"], ["logoterapia i wola sensu", "Frankl"],
    ["konstrukty osobiste", "Kelly"], ["system doświadczeniowy i racjonalny", "Epstein"], ["umiejscowienie kontroli", "Rotter"], ["podpis behawioralny (CAPS)", "Mischel i Shoda"],
    ["Ja podmiotowe (I) i przedmiotowe (Me)", "James"], ["schematy Ja i możliwe Ja", "Markus"], ["rozbieżności Ja", "Higgins"],
    ["tożsamość narracyjna", "McAdams"], ["teoria skryptów", "Tomkins"], ["Ja dialogowe", "Hermans"], ["przyjemne, zaangażowane i znaczące życie", "Seligman"]
  ],
  diagnostyka: [
    ["podręcznik „Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna”", "Stemplewska-Żakowicz"], ["diagnoza jako kompetencja", "McClelland"],
    ["podejście nomotetyczne vs idiograficzne", "Windelband"], ["predykcja kliniczna vs statystyczna", "Meehl"], ["model decyzyjny podwójnych relacji", "Gottlieb"],
    ["procedura pięciu pytań", "Szustrowa"], ["7 faz procesu diagnostycznego", "Maloney i Ward"], ["iteracyjny model procesu diagnozy", "Paluchowski"], ["model GAP", "Fernández-Ballesteros"],
    ["model kontaktu: uwaga, nastawienie, koordynacja", "Tickle-Degnen i Rosenthal"], ["cechy dobrego diagnosty", "Corey i Corey"], ["zarządzanie kontekstem badania", "Krishnamurthy"],
    ["termin „metody projekcyjne”", "Frank"], ["podział metod projekcyjnych wg rodzaju zadania", "Lindzey"], ["TAT – Test Apercepcji Tematycznej", "Murray i Morgan"],
    ["test niedokończonych zdań (RISB)", "Rotter"], ["test plam atramentowych", "Rorschach"], ["SWLS – Skala Satysfakcji z Życia", "Diener"], ["ACL – Lista Przymiotnikowa", "Gough i Heilbrun"],
    ["WISC-R i WAIS-R", "Wechsler"], ["Test Matryc", "Raven"], ["Test Rysunku Postaci Ludzkiej", "Goodenough i Harris"], ["etapy rozwoju rysunku dziecka", "Szuman"],
    ["„Inny” w etyce ponowoczesnej", "Bauman"], ["kompetencje międzykulturowe jako część kompetencji indywidualnych", "Bolten"], ["konceptualizacja przypadku", "Sperry i Sperry"]
  ],
  metodologia: [
    ["8 etapów procesu badawczego", "Brzeziński"], ["język nauki", "Feynman"], ["d – różnica średnich w jednostkach SD", "Cohen"], ["g – SD z wariancji wspólnej", "Hedges"],
    ["SD grupy kontrolnej we wielkości efektu", "Glass"], ["poprawka na niejednorodność wariancji", "Welch"], ["test normalności rozkładu", "Shapiro i Wilk"],
    ["korelacja liniowa r", "Pearson"], ["korelacja rangowa rho", "Spearman"], ["test U dla dwóch prób niezależnych", "Mann i Whitney"], ["test dla dwóch prób zależnych (rangi)", "Wilcoxon"],
    ["nieparametryczny odpowiednik ANOVA", "Kruskal i Wallis"], ["nieparametryczna ANOVA z powtarzanymi pomiarami", "Friedman"], ["eksperyment z konformizmem", "Asch"]
  ],
  poznawcze: [
    ["kryteria dopuszczenia dowodu naukowego w sądzie", "Daubert"], ["podejście emic i etic", "Pike"], ["5 kryteriów równoważności adaptacji testu", "Drwal"],
    ["stronniczość testu przy złej adaptacji", "Hornowska"], ["diagnosta a terapeuta", "Ackerman"], ["konflikt ról w zawodzie psychologa", "Lazari-Pawłowska"]
  ],
  pomoc: [
    ["model integrujący (BASIC ID)", "Lazarus"], ["analiza behawioralna: bodziec – reakcja – skutki", "Kanfer i Saslow"], ["przekonania pierwotne i zniekształcenia poznawcze", "Beck"],
    ["formy rozmowy wg stopnia strukturalizacji", "Suchańska"], ["kontrakt zawierany po rozeznaniu celu", "Trzebińska"], ["czynniki sprzed spotkania", "Paluchowski i Hornowska"]
  ]
};

window.GAME_SEQUENCES = {
  osobowosc: [
    { title: "Stadia rozwoju psychoseksualnego (Freud)", items: ["oralne", "analne", "falliczne", "latencji", "genitalne"] },
    { title: "Kryzysy psychospołeczne (Erikson)", items: ["zaufanie vs nieufność", "autonomia vs wstyd", "inicjatywa vs poczucie winy", "przedsiębiorczość vs niższość", "tożsamość vs pomieszanie ról", "bliskość vs izolacja", "generatywność vs stagnacja", "integralność vs rozpacz"] },
    { title: "Cnoty Eriksona (od 1. stadium)", items: ["nadzieja", "wola", "celowość", "kompetencja", "wierność", "miłość", "troska", "mądrość"] },
    { title: "Hierarchia potrzeb Maslowa (od podstawy)", items: ["fizjologiczne", "bezpieczeństwa", "przynależności i miłości", "szacunku", "samorealizacji"] },
    { title: "Epoki rozwojowe Sullivana", items: ["niemowlęctwo", "dzieciństwo", "wiek młodzieńczy (szkolny)", "wczesna adolescencja (chumship)", "właściwa adolescencja", "późna adolescencja i dojrzałość"] },
    { title: "Cykl doświadczenia (Perls, Zinker)", items: ["doznanie pobudzenia", "formowanie się figury", "mobilizacja", "działanie", "kontakt", "wycofanie"] },
    { title: "Regulacja motywacji – od najmniej autonomicznej (Deci i Ryan)", items: ["regulacja zewnętrzna", "introjekcja", "identyfikacja", "integracja", "motywacja wewnętrzna"] },
    { title: "Analiza snu krok po kroku (Freud)", items: ["zapis snu (treść jawna)", "podział na elementy", "wolne skojarzenia", "resztki dzienne", "odkręcenie pracy snu", "analiza oporu", "symbole uniwersalne", "życzenie (treść utajona)"] },
    { title: "Model topograficzny – od powierzchni (Freud)", items: ["świadomość", "przedświadomość", "nieświadomość"] },
    { title: "Fazy internalizacji (Kernberg)", items: ["relacja z obiektem częściowym", "integracja reprezentacji self i obiektu", "stabilne struktury osobowości"] }
  ],
  diagnostyka: [
    { title: "Procedura pięciu pytań Szustrowej (planowanie)", items: ["cel badania", "orientacja teoretyczna", "pytania i hipotezy", "dobór wskaźników", "operacjonalizacja wskaźników"] },
    { title: "Fazy modelu Maloneya i Warda", items: ["wyjściowy zbiór danych, protodiagnoza", "hipotezy cząstkowe", "badania – weryfikacja hipotez", "hipotezy ogólne", "dynamiczny model osoby", "zmienne sytuacyjne", "predykcja zachowania"] },
    { title: "Model Paluchowskiego", items: ["etap prediagnostyczny", "badanie diagnostyczne", "opis i interpretacja", "interwencja"] },
    { title: "Model GAP", items: ["analiza przypadku", "organizowanie i raportowanie wyników", "planowanie interwencji", "ocena interwencji i badanie kontrolne"] },
    { title: "Relacja diagnostyczna", items: ["kontakt", "kontrakt", "przymierze w działaniu"] },
    { title: "Etapy rozwoju rysunku (Szuman)", items: ["bazgrota bezprzedmiotowa", "bazgrota przedmiotowa", "schemat uproszczony („głowonogi”)", "schemat konstrukcji"] },
    { title: "Zaburzenia selektywności uwagi – od najsłabszej koncentracji", items: ["aproseksja", "hipoproseksja", "hiperproseksja"] },
    { title: "Ilościowe zaburzenia świadomości – od najlżejszego", items: ["senność patologiczna", "półśpiączka (sopor)", "śpiączka"] }
  ],
  metodologia: [
    { title: "Etapy procesu badawczego (Brzeziński)", items: ["problem i hipoteza", "obraz przestrzeni zmiennych", "operacjonalizacja", "model badawczy", "dobór próby", "model statystyczny", "akceptacja lub odrzucenie hipotezy", "ocena, interpretacja, generalizacja"] },
    { title: "Procedura weryfikacji hipotezy", items: ["sformułuj H0 i H1", "oblicz statystykę testową", "oblicz p i podejmij decyzję", "oszacuj wielkość efektu", "oszacuj przedział ufności", "opisz wyniki słownie (APA)"] },
    { title: "Skale pomiarowe – od najsłabszej", items: ["nominalna", "porządkowa", "interwałowa", "ilorazowa"] },
    { title: "Siła korelacji |r| – od najsłabszej", items: ["brak (< 0,1)", "znikoma (0,1–0,3)", "umiarkowana (0,3–0,5)", "silna (0,5–0,7)", "bardzo silna (0,7–0,9)"] },
    { title: "d Cohena – od najmniejszego efektu", items: ["znikomy (< 0,2)", "mały (0,2)", "średni (0,5)", "duży (0,8)"] },
    { title: "Poziomy postępowania badawczego – od najogólniejszego", items: ["metoda", "technika", "narzędzie"] },
    { title: "Istotność – od najsłabszej", items: ["* p < 0,05", "** p < 0,01", "*** p < 0,001"] }
  ],
  poznawcze: [
    { title: "Tłumaczenie wsteczne (back translation)", items: ["tłumaczenie z języka A na B", "inny tłumacz przekłada B z powrotem na A", "porównanie wersji", "analizy psychometryczne i równoważność"] }
  ],
  pomoc: [
    { title: "Początek rozmowy diagnostycznej", items: ["rozpoczęcie (kontakt)", "kontrakt diagnostyczny", "wstępne sformułowanie problemu"] },
    { title: "Planowanie treści wywiadu – 5 kroków", items: ["cel", "kategorie (język opisu)", "pytania i hipotezy", "potrzebne informacje", "tematy rozmowy"] },
    { title: "Progresja – przykład: narkotyki u licealisty", items: ["muzyka", "atmosfera w szkole", "papierosy", "alkohol", "„trawka”"] }
  ]
};
