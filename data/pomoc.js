// Podstawy pomocy psychologicznej. Opracowane na podstawie pliku z Dysku:
// Notatka_Rozmowa_diagnostyczna.pdf (A. Suchańska; H. Grzegołowska-Klarkowska i T. Szustrowa).
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "pomoc",
  name: "Podstawy pomocy psychologicznej",
  short: "Pomoc psychologiczna",
  icon: "🤝",
  color: "#d6336c",
  // format egzaminu orientacyjny – zmień, gdy poznasz zasady
  exam: { questions: 15, minutes: 15, pass: 8, note: "Format orientacyjny (15 pytań, 15 minut, próg 8) – nie znam dokładnych zasad zaliczenia." },
  sources: [
    "Notatka_Rozmowa_diagnostyczna.pdf – na podstawie: A. Suchańska, Rozmowa i obserwacja w diagnozie psychologicznej (rozdz. 2–4) oraz H. Grzegołowska-Klarkowska, T. Szustrowa, Swobodne techniki diagnostyczne (rozdz. 2–3)"
  ],
  topics: [
    // ------------------------------------------------------------------
    {
      id: "przebieg",
      title: "Przebieg rozmowy: wprowadzenie, kontrakt, problem",
      notes: `
Oznaczenia źródeł: **[S]** – Suchańska, **[GS]** – Grzegołowska-Klarkowska i Szustrowa.

- **Warunki formalne** = **jak** rozmawiać (klimat, relacja, kontakt, taktyka, pytania).
- **Warunki treściowe** = **o czym** rozmawiać (wynika z celu i teorii diagnosty).
- Przed spotkaniem: **dokumentacja** (skierowanie, wcześniejsze badania, akta, historia choroby).

| Etap | Co obejmuje |
|---|---|
| **A. Część wprowadzająca** | rozpoczęcie, kontrakt diagnostyczny, wstępne sformułowanie problemu |
| **B. Część zasadnicza** | główne tematy, techniki i pytania |
| **C. Zakończenie** | podsumowanie i dalsze kroki |

## A1. Rozpoczęcie
- Wpływają na nie czynniki sprzed spotkania (Paluchowski, Hornowska): wcześniejsze doświadczenia, oczekiwania, stereotypy o „szczególnych zdolnościach” psychologa, mylenie psychologii z psychiatrią, lęk przed etykietą chorego – warto o nie zapytać.
- **Efekt pierwszego wrażenia** działa jak samowzmacniające się sprzężenie zwrotne – początek może być decydujący.
- Cel: **kontakt i motywacja do współpracy**. Początek ogólny, swobodny, tematy niezagrażające; badany ma czuć się **kompetentnym informatorem** [GS].
- Przywitanie, przedstawienie się; klient sam wybiera dystans.
- Wyjątek [GS]: przy bardzo silnym lęku można zacząć od tematu trudnego, żeby badany się „wygadał”, ale go nie drążyć.

## A2. Kontrakt diagnostyczny
Umowa między diagnostą a badanym (w razie potrzeby negocjowana), jedna z zasad etycznych; zawierana po wstępnym rozeznaniu celu (Trzebińska).
**Lista Groth-Marnata**:
- warunki zewnętrzne (światło, cisza),
- przedstawienie się i forma zwracania się,
- cel rozmowy i sprawdzenie, czy klient rozumie go tak samo,
- jak zostaną wykorzystane wnioski,
- poufność, jej granice i prawo do odmowy odpowiedzi,
- procedura i czas,
- koszty (jeśli nie są ustalone instytucjonalnie).

Kontrakt obejmuje też **rozpoznanie motywacji** (Markus, 1993): udział ma być, choć częściowo, świadomym wyborem klienta; przy skierowaniu poznajemy stosunek do niego, pokazujemy prawo do rezygnacji i pomagamy nazwać korzyści.

## A3. Wstępne sformułowanie problemu
- Otwarcie: „Co skłoniło Pana do zgłoszenia się?” albo nawiązanie do rozmowy telefonicznej.
- Pozwolić mówić bez przerywania; pytania odłożyć (**pytania odroczone**). Sposób mówienia, kolejność i przerwy to ważne obserwacje.
- Nie zatrzymywać się na **pierwszej** trudności – klient uzna ją za główną.
- **Skarga ≠ problem**: trzeba ustalić, czy to rzeczywisty problem klienta (problem pozorny lub „cudzy” = brak zaangażowania). Przykład: nadwaga – „W jaki sposób doświadczasz tego problemu?” (praca? związek? samoakceptacja?); trudności szkolne dziecka to inny problem niż to, że matka nie umie ich zaakceptować.
- **Swobodny tryb** kontynuujemy, gdy klient mówi na temat; **kierujemy**, gdy są dygresje, ogólniki lub trudność ze spontaniczną wypowiedzią.
`,
      flashcards: [
        ["Warunki formalne vs treściowe rozmowy", "Formalne – jak rozmawiać (klimat, relacja, pytania); treściowe – o czym rozmawiać (cel i teoria)."],
        ["Trzy części rozmowy diagnostycznej", "Wprowadzająca (rozpoczęcie, kontrakt, problem), zasadnicza, zakończenie."],
        ["Cel rozpoczęcia rozmowy", "Kontakt i motywacja do współpracy; badany ma czuć się kompetentnym informatorem."],
        ["Kiedy zacząć od tematu trudnego? [GS]", "Przy bardzo silnym lęku – żeby badany się „wygadał” (bez drążenia)."],
        ["Kontrakt diagnostyczny wg Groth-Marnata (elementy)", "Warunki zewnętrzne, przedstawienie się, cel, wykorzystanie wniosków, poufność i prawo do odmowy, procedura i czas, koszty."],
        ["Rozpoznanie motywacji w kontrakcie (Markus)", "Udział w badaniu ma być choć częściowo świadomym wyborem klienta."],
        ["Pytania odroczone", "Pytania odłożone na później, by nie przerywać wypowiedzi lub gdy są zbyt zagrażające."],
        ["Skarga a problem", "Skarga to to, z czym klient przychodzi; trzeba ustalić, czy to jego rzeczywisty problem."],
        ["Dlaczego nie zatrzymywać się na pierwszej trudności?", "Bo klient uzna ją za główną, choć może nią nie być."],
        ["Kiedy kierować rozmową zamiast trybu swobodnego?", "Przy dygresjach, ogólnikach lub trudności ze spontaniczną wypowiedzią."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Warunki formalne rozmowy", "jak rozmawiać"],
        ["Warunki treściowe rozmowy", "o czym rozmawiać"],
        ["Części rozmowy", "wprowadzająca, zasadnicza, zakończenie"],
        ["Cel rozpoczęcia", "kontakt i motywacja do współpracy"],
        ["Temat trudny na początek", "przy bardzo silnym lęku"],
        ["Kontrakt diagnostyczny", "umowa diagnosty z badanym"],
        ["Motywacja w kontrakcie (Markus)", "choć częściowo świadomy wybór"],
        ["Pytania odroczone", "odłożone na później"],
        ["Skarga", "to, z czym klient przychodzi"],
        ["Pierwsza trudność", "nie musi być główną"],
        ["Kierowanie rozmową", "przy dygresjach i ogólnikach"],
        ["Efekt pierwszego wrażenia", "samowzmacniające się sprzężenie zwrotne"]
      ],
      quiz: [
        { q: "Warunki treściowe rozmowy dotyczą:", o: ["klimatu rozmowy", "tego, o czym rozmawiać", "sposobu zadawania pytań", "miejsca spotkania"], a: 1, e: "Formalne – jak; treściowe – o czym." },
        { q: "Kontrakt diagnostyczny NIE obejmuje:", o: ["celu rozmowy", "granic poufności", "diagnozy klienta", "procedury i czasu"], a: 2, e: "Diagnoza jest wynikiem, nie elementem kontraktu." },
        { q: "Klient skarży się na nadwagę. Co powinien zrobić diagnosta?", o: ["od razu zaproponować dietę", "zapytać, w jaki sposób klient doświadcza tego problemu", "uznać nadwagę za główny problem", "skierować do lekarza"], a: 1, e: "Skarga ≠ problem – trzeba ustalić, czego naprawdę dotyczy." },
        { q: "Badany z bardzo silnym lękiem – od czego można zacząć wg [GS]?", o: ["od testów", "od tematu trudnego, bez drążenia", "od pytań zamkniętych", "od podsumowania"], a: 1, e: "Wyjątek: badany może się „wygadać”." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "pytania",
      title: "Pytania: funkcje, rodzaje, zasady",
      notes: `
## Funkcje pytań
| Suchańska | Grzegołowska-Klarkowska i Szustrowa |
|---|---|
| zmniejszanie oporu, ułatwianie dostępu do treści psychicznych | **informacyjna** – pytanie mówi, czego szukamy, więc musi być jasne |
| organizowanie i kierowanie rozmową | **motywująca** – wywołać i podtrzymać chęć mówienia (obniżają ją pytania zagrażające, zaskakujące, niezrozumiałe, podważające kompetencję) |

- Niejasne: „Czy mógłby pan opowiedzieć coś o ojcu?” → jasne: „Jak ojciec się do pana odnosi, jaki jest dla pana?”
- Pytamy o **obserwowalne fakty w języku badanego**, nie o konstrukty (nie „czy ma pan wysoki lęk interpersonalny?”).

## Rodzaje pytań
| Rodzaj | Na czym polega | Przykład |
|---|---|---|
| **otwarte** | rozwinięta wypowiedź, pokazuje styl; dobre na początek | „Co było dla ciebie ważne w tym czasie?” |
| **zamknięte** | tak/nie; przy klasyfikacji, braku czasu, małej motywacji, gadatliwym kliencie, uzupełnianiu braków; **alternatywne** (A czy B?) wyjaśniają sprzeczności | |
| **„dlaczego?”** | sugeruje ocenę i tłumaczenie się; badany często nie zna przyczyn | lepiej: „Interesuje mnie, jak tłumaczysz sobie…” |
| **o fakty / o interpretacje** | co się stało vs jakie to ma znaczenie | „Jakie miałeś oceny?” vs „Jak oceniasz swoje zdrowie?” |
| **uwikłane** | właściwe pytanie ukryte wśród neutralnych | kary: odsyłanie do pokoju, kieszonkowe, klaps… |
| **projekcyjne** | opis innej osoby lub sytuacji zamiast siebie; tylko jako **wstęp** do pytań bezpośrednich [GS] | „Czego ludzie najbardziej się wstydzą?” |
| **sugerujące** | narzucają odpowiedź – zasadniczo unikać; wyjątki: sprawdzenie podatności na sugestię, zmniejszenie lęku przy zachowaniu nieaprobowanym | „Jak często kłóci się pani z mężem?” |
| **odroczone** | nie forma, tylko moment – pytanie zadane później | |
| **przejściowe** | łagodna zmiana tematu – zdanie łączy stary i nowy temat | „Przypuszczam, że z żoną spotykacie się ze znajomymi… Opowie pan o nich?” |

Kategorie się nakładają. Najbezpieczniejsze: otwarte, neutralne, projekcyjne [S].

## Zasady zadawania pytań
- Pytaj tylko w **jasnym celu** – nadmiar pytań robi z rozmowy przesłuchanie.
- **Jedno pytanie na raz** („Czy stosuje pani antykoncepcję i czy przerywała ciążę?” – „tak” nic nie mówi).
- Upewnij się, że rozumiesz; nieprecyzyjną odpowiedź doprecyzuj (może kryć opór).
- **Słuchanie przed pytaniem** – pytanie wynika z tego, co klient powiedział; czas na odpowiedź; parafraza przed kolejnym pytaniem (Cormier, Nurius).
- Brzmienie **neutralne**, bez oceny; odróżniaj pytania o **uczucia** i o **myśli**.
- Pełny obraz: aspekt poznawczy, emocjonalny, motywacyjny, behawioralny.

## Rozbieżności między książkami
- Sugerujące: [S] dopuszcza, gdy to jedyny sposób; [GS] każe unikać, z dwoma wyjątkami.
- Projekcyjne: [S] – bezpieczniejsze; [GS] – ryzyko błędnej interpretacji, tylko jako wstęp.
`,
      flashcards: [
        ["Funkcje pytań wg [GS]", "Informacyjna (pytanie musi być jasne) i motywująca (podtrzymuje chęć mówienia)."],
        ["Funkcje pytań wg Suchańskiej", "Zmniejszanie oporu i ułatwianie dostępu do treści oraz organizowanie i kierowanie rozmową."],
        ["O co pytać – fakty czy konstrukty?", "O obserwowalne fakty w języku badanego, nie o konstrukty teoretyczne."],
        ["Kiedy stosować pytania zamknięte?", "Przy klasyfikacji, braku czasu, małej motywacji, gadatliwym kliencie, uzupełnianiu braków."],
        ["Dlaczego unikać pytania „dlaczego?”", "Sugeruje ocenę i zmusza do tłumaczenia się; badany często nie zna przyczyn."],
        ["Pytanie uwikłane", "Właściwe pytanie ukryte wśród neutralnych lub bardziej aprobowanych."],
        ["Pytanie projekcyjne", "Pytanie o inną osobę lub sytuację zamiast o siebie (np. „Czego ludzie najbardziej się wstydzą?”)."],
        ["Kiedy pytania sugerujące mogą być przydatne?", "Do sprawdzenia podatności na sugestię i do zmniejszenia lęku przy zachowaniu nieaprobowanym."],
        ["Pytanie przejściowe", "Zdanie łączące stary i nowy temat – łagodna zmiana tematu."],
        ["Zasada „jedno pytanie na raz”", "Pytanie podwójne daje niejednoznaczną odpowiedź (np. „tak” na dwa pytania)."],
        ["4 aspekty pełnego obrazu człowieka w rozmowie", "Poznawczy, emocjonalny, motywacyjny, behawioralny."],
        ["Pytanie o fakty vs o interpretacje", "Fakty – co się stało; interpretacje – jakie to ma dla osoby znaczenie."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Funkcje pytań [GS]", "informacyjna i motywująca"],
        ["Funkcje pytań (Suchańska)", "zmniejszanie oporu, kierowanie rozmową"],
        ["O co pytać", "o fakty w języku badanego"],
        ["Pytania zamknięte", "przy klasyfikacji i braku czasu"],
        ["Pytanie „dlaczego?”", "sugeruje ocenę – unikać"],
        ["Pytanie uwikłane", "właściwe ukryte wśród neutralnych"],
        ["Pytanie projekcyjne", "o innych zamiast o siebie"],
        ["Pytanie sugerujące", "sprawdza podatność na sugestię"],
        ["Pytanie przejściowe", "łagodna zmiana tematu"],
        ["Pytanie podwójne", "niejednoznaczna odpowiedź"],
        ["4 aspekty obrazu człowieka", "poznawczy, emocjonalny, motywacyjny, behawioralny"],
        ["Pytanie o interpretacje", "jakie znaczenie ma to dla osoby"]
      ],
      quiz: [
        { q: "„Jak często kłóci się pani z mężem?” to pytanie:", o: ["otwarte neutralne", "sugerujące", "projekcyjne", "uwikłane"], a: 1, e: "Zakłada, że kłótnie są normalne – może zmniejszać lęk." },
        { q: "„Czego ludzie najbardziej się wstydzą?” to przykład pytania:", o: ["zamkniętego", "projekcyjnego", "sugerującego", "przejściowego"], a: 1, e: "Opis innych zamiast siebie." },
        { q: "Pytanie o kary (odsyłanie do pokoju, kieszonkowe, klaps…) ukryte wśród innych to pytanie:", o: ["uwikłane", "odroczone", "alternatywne", "dlaczego"], a: 0, e: "Właściwe pytanie wśród neutralnych, bez podkreślania." },
        { q: "Który błąd popełnia diagnosta pytający: „Czy pali pan i pije alkohol?”", o: ["zadaje pytanie otwarte", "zadaje dwa pytania naraz", "zadaje pytanie projekcyjne", "nie popełnia błędu"], a: 1, e: "Jedno pytanie na raz." },
        { q: "Zamiast „Dlaczego to zrobiłeś?” lepiej powiedzieć:", o: ["„Czemu tak?”", "„Interesuje mnie, jak tłumaczysz sobie tę sytuację”", "„To był błąd”", "„Czy zrobiłeś to celowo?”"], a: 1, e: "„Dlaczego?” sugeruje ocenę." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "kolejnosc",
      title: "Kolejność pytań i inne interwencje",
      notes: `
## Taktyki kolejności pytań
| Taktyka | Kierunek | Kiedy |
|---|---|---|
| **lejek** (zawężanie) | od ogólnego i otwartego do szczegółów (na końcu nawet zamknięte) | standardowo; badany sam wybiera, co ważne |
| **odwrócony lejek** (poszerzanie) | od konkretów do ogólnych wniosków | trudność w mówieniu ogólnie, niski poziom abstrakcji, ubogi słownik, **silny lęk** (konkret uspokaja) |
| **progresja** | od tematów mniej zagrażających do właściwego | np. narkotyki u licealisty: muzyka → atmosfera → papierosy → alkohol → „trawka” |

**Progresja vs pytanie uwikłane**: w uwikłanym pytanie właściwe stoi wśród neutralnych; w progresji dochodzimy do niego stopniowo.

## Strategia całej rozmowy [GS]
- **Logika badającego vs logika badanego** – diagnosta ma plan, ale nie burzy sposobu opowiadania badanego.
- Od tematów neutralnych do trudnych; trudnych nie stawiać po kilka pod rząd.
- **Rozszerzająca się spirala** – najpierw szkielet, potem te same tematy coraz dokładniej.
- Wstępna wiedza pomaga ustalić kolejność (np. Test Zdań Niedokończonych Rottera – luki w autoprezentacji to tematy trudne).
- Zmiana tematu łagodnie, pytaniem przejściowym.

## Inne interwencje (oprócz pytań) [S]
| Interwencja | Istota |
|---|---|
| **facylitacja** | zachęcanie: „Proszę mówić dalej”, potakiwanie, spojrzenie |
| **parafraza** | skrót wypowiedzi klienta własnymi słowami + „Czy tak?”; sprawdza zrozumienie |
| **klaryfikacja** | gdy nie rozumiemy: „Nie jest dla mnie jasne…”; ogólniki („nikt”, „każdy”) mogą kryć konflikt |
| **podsumowanie** | łączy wątki, wyłania powtarzające się tematy („skrypt życiowy”), zamyka zbyt długi wątek |
| **milczenie** | czas na refleksję i uczucia; zbyt długie utrudnia kontakt |
| **interpretacja** | nazywa **ukryte** znaczenie, jako hipoteza; za daleko od treści = opór, za blisko = parafraza („Nie mam pretensji do szefa” + zaciśnięte pięści) |
| **konfrontacja** | tylko **wskazuje rozbieżność** (mówi vs robi), bez wyjaśniania; dyrektywna, lękotwórcza, **nigdy na początku**; łagodzi ją „Zauważyłem, że…” |
| **informacja zwrotna „na gorąco”** | o tym, co dzieje się teraz, w 1. osobie i czasie teraźniejszym |
| **sondowanie** (Egan) | od ogólników do konkretnych zachowań i uczuć; także prośba o przykład i wyobraźnia („film” z problemem) |

- **Parafraza vs interpretacja**: parafraza oddaje treść **jawną**, interpretacja proponuje **ukrytą**.
- **Konfrontacja vs interpretacja**: konfrontacja wskazuje niespójność, interpretacja nadaje jej znaczenie.
- **Czego unikać (Wolberg)**: moralizowania, oceniania, fałszywych obietnic, grożenia, zniecierpliwienia, ośmieszania, zawstydzania, przedwczesnych interpretacji, drążenia urazów przy dużym oporze, niepotrzebnego uspokajania, rad. Zamiast oceny: „Co sądzisz o tej sytuacji?”; zamiast uspokajania: odzwierciedlenie uczuć.

> Na pamięć: lejek (ogólne → szczegóły) · odwrócony lejek (szczegóły → ogólne: lęk, słaba abstrakcja) · progresja (od mniej zagrażających). Parafraza = jawne · interpretacja = ukryte · konfrontacja = rozbieżność.
`,
      flashcards: [
        ["Taktyka lejka", "Od pytań ogólnych i otwartych do szczegółowych (na końcu nawet zamkniętych)."],
        ["Odwrócony lejek – kiedy?", "Przy trudności w mówieniu ogólnie, niskim poziomie abstrakcji, ubogim słowniku i silnym lęku."],
        ["Progresja", "Dochodzenie do tematu właściwego stopniowo, od tematów mniej zagrażających."],
        ["Progresja a pytanie uwikłane", "Uwikłane – pytanie właściwe wśród neutralnych; progresja – dochodzimy do niego stopniowo."],
        ["Rozszerzająca się spirala [GS]", "Najpierw szkielet tematów, potem te same tematy coraz dokładniej."],
        ["Facylitacja", "Zachęcanie do mówienia: „Proszę mówić dalej”, potakiwanie, spojrzenie."],
        ["Parafraza", "Skrót wypowiedzi klienta własnymi słowami z pytaniem o potwierdzenie."],
        ["Klaryfikacja", "Prośba o wyjaśnienie, gdy czegoś nie rozumiemy („Nie jest dla mnie jasne…”)."],
        ["Interpretacja", "Nazwanie ukrytego znaczenia wypowiedzi jako hipotezy do przyjęcia lub odrzucenia."],
        ["Konfrontacja", "Wskazanie rozbieżności (mówi vs robi) bez wyjaśniania; nigdy na początku rozmowy."],
        ["Parafraza vs interpretacja", "Parafraza oddaje treść jawną, interpretacja proponuje treść ukrytą."],
        ["Sondowanie (Egan)", "Pomoc w przejściu od ogólników do konkretnych zachowań i uczuć."],
        ["Czego unikać w rozmowie (Wolberg)", "Moralizowania, oceniania, fałszywych obietnic, grożenia, ośmieszania, przedwczesnych interpretacji, niepotrzebnego uspokajania, rad."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Lejek", "od ogólnych do szczegółowych"],
        ["Odwrócony lejek", "od konkretów do uogólnień"],
        ["Progresja", "od mniej zagrażających tematów"],
        ["Rozszerzająca się spirala", "najpierw szkielet, potem szczegóły"],
        ["Facylitacja", "„Proszę mówić dalej”"],
        ["Parafraza", "treść klienta własnymi słowami"],
        ["Klaryfikacja", "prośba o wyjaśnienie"],
        ["Interpretacja", "nazwanie ukrytego znaczenia"],
        ["Konfrontacja", "wskazanie rozbieżności"],
        ["Sondowanie (Egan)", "od ogólników do konkretów"],
        ["Czego unikać (Wolberg)", "moralizowania i fałszywych obietnic"],
        ["Logika badanego", "diagnosta jej nie burzy"]
      ],
      quiz: [
        { q: "Badany z silnym lękiem i ubogim słownikiem – jaką taktykę wybrać?", o: ["lejek", "odwrócony lejek", "konfrontację", "pytania projekcyjne"], a: 1, e: "Od konkretów do ogólnych wniosków – konkret uspokaja." },
        { q: "„Nie mam pretensji do szefa” + zaciśnięte pięści. Nazwanie ukrytej złości to:", o: ["parafraza", "interpretacja", "facylitacja", "klaryfikacja"], a: 1, e: "Interpretacja proponuje ukryte znaczenie." },
        { q: "Konfrontacja:", o: ["wyjaśnia przyczyny zachowania", "tylko wskazuje rozbieżność i nie stosuje się jej na początku", "jest najlepsza na rozpoczęcie", "polega na zachęcaniu do mówienia"], a: 1, e: "Jest dyrektywna i lękotwórcza." },
        { q: "Dochodzenie do pytania o narkotyki przez muzykę, papierosy i alkohol to:", o: ["pytanie uwikłane", "progresja", "lejek odwrócony", "sondowanie"], a: 1, e: "Od tematów mniej zagrażających do właściwego." },
        { q: "Czego NIE robić według Wolberga?", o: ["odzwierciedlać uczuć", "dawać rad i fałszywych obietnic", "parafrazować", "milczeć"], a: 1, e: "Też: moralizowanie, ocenianie, niepotrzebne uspokajanie." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "formy",
      title: "Zakończenie, czas, język i formy rozmowy",
      notes: `
## Zakończenie
- Sprawdź z listą tematów, czy czegoś nie pominięto [S].
- **Uprzedź o końcu** – ważne sprawy często padają właśnie wtedy.
- **Nie kończ w szczycie kontaktu ani w silnym napięciu** – przejdź do tematów neutralnych, daj czas na emocje.
- **5 warunków Chevalier-Beaumel**: podsumuj, sprawdź, czy podsumowanie pasuje i czy klient chce coś dodać, omów dalsze kroki i terminy, podziękuj.
- Gdy pyta „jak wypadłem?” [GS] – można zrekapitulować mocne i problemowe obszary jego słowami, ale **bez diagnozy, ocen i rad**.
- **Czas** [GS]: zależy od celu, diagnosty i stanu badanego; zwykle **do godziny**, potem kolejne spotkanie; zmęczenie lub silne napięcie = kończymy.

## Język [GS]
- Zrozumiały, bez żargonu (termin fachowy trzeba wyjaśnić), ale bez nadmiernego upraszczania.
- **Nie naśladować slangu** badanego (brzmi sztucznie) – wystarczy akceptacja i chęć zrozumienia.
- Za trudno: „Czy długo utrzymywał się w panu wysoki poziom agresji?” → „Czy długo gniewał się pan na szefa?”
- Gwara, slang, grypsera – prosić o wyjaśnienie taktownie i rzadko; w razie wątpliwości parafraza.

## Formy rozmowy wg stopnia strukturalizacji (Suchańska, za Rogersem)
| Forma | Na czym polega | Kiedy | Podejście |
|---|---|---|---|
| **ustrukturalizowana** | stałe pytania, kolejność i kodowanie, bez dopytywania | opis, klasyfikacja objawów, badania naukowe, porównania w czasie, mniej doświadczony diagnosta | ilościowe, nomotetyczne |
| **częściowo ustrukturalizowana** | stałe kategorie i kryteria, pytania szczegółowe na bieżąco; arkusz rozmowy | wyjaśnianie zachowania, dynamika, motywacja | nomotetyczne i idiograficzne |
| **swobodna (otwarta)** | plan tematów, klient decyduje o długości i kolejności | kontakt, wstępne określenie problemu, styl, opór | idiograficzne, jakościowe |
| **w pełni swobodna** | minimum interwencji (skrajnie: wolne skojarzenia) | treści nieświadome, spontaniczna narracja | psychodynamiczne, narracyjne |

- **Ustrukturalizowana**: mniejszy wpływ diagnosty, wyższa zgodność ocen (Rogers: niezgodność wynika głównie z kryteriów oceny – 62,5% i sposobu pytania – 32,5%, tylko 5% ze zmian u badanego); wady – gubi indywidualność, słabszy kontakt, ryzyko przesłuchania.
- **Swobodna**: naturalny kontakt, widać reakcje niewerbalne; wady – gorsza zgodność, łatwo przerwać po potwierdzeniu hipotezy.
- **Rogers**: nie pytaj, która forma jest lepsza, tylko **do jakiego celu**; błąd = złe dopasowanie metody do celu. Formy można łączyć.

## Trzy cechy strategii [GS]
| Cecha | Co to | Od czego zależy |
|---|---|---|
| **standaryzacja** | ujednolicenie warunków | sztywny kwestionariusz w badaniach i selekcji, nie w klinice |
| **kierowanie** | ile steruje diagnosta, a ile badany | motywacja (wysoka – prowadzi badany, niska – psycholog), cel, czas |
| **głębokość** | jak daleko w treści intymne | cel (doradztwo zawodowe – płytko, emocje – głęboko), teoria (psychoanaliza najgłębiej), wgląd, etyka |

Bardzo wylewny badany też wymaga kierowania – inaczej godzina monologu da mało informacji.
`,
      flashcards: [
        ["Dlaczego trzeba uprzedzić o końcu rozmowy?", "Bo ważne sprawy często padają właśnie pod koniec."],
        ["Kiedy nie kończyć rozmowy?", "W szczycie kontaktu ani w silnym napięciu – najpierw tematy neutralne."],
        ["5 warunków zakończenia (Chevalier-Beaumel)", "Podsumowanie, sprawdzenie, czy pasuje, możliwość dodania czegoś, dalsze kroki i terminy, podziękowanie."],
        ["Badany pyta „jak wypadłem?” – co robić?", "Zrekapitulować mocne i problemowe obszary jego słowami, bez diagnozy, ocen i rad."],
        ["Typowy czas rozmowy diagnostycznej [GS]", "Zwykle do godziny; potem kolejne spotkanie."],
        ["Czy naśladować slang badanego?", "Nie – brzmi sztucznie; wystarczy akceptacja i chęć zrozumienia."],
        ["4 formy rozmowy wg stopnia strukturalizacji", "Ustrukturalizowana, częściowo ustrukturalizowana, swobodna, w pełni swobodna."],
        ["Kiedy wybrać rozmowę ustrukturalizowaną?", "Do opisu i klasyfikacji objawów, badań naukowych, porównań w czasie; dla mniej doświadczonego diagnosty."],
        ["Kiedy wybrać rozmowę swobodną?", "Do nawiązania kontaktu, wstępnego określenia problemu, poznania stylu i oporu."],
        ["Zasada Rogersa przy wyborze formy rozmowy", "Nie ma lepszej formy – liczy się dopasowanie do celu."],
        ["Trzy cechy strategii wywiadu [GS]", "Standaryzacja, kierowanie, głębokość."],
        ["Od czego zależy stopień kierowania rozmową?", "Od motywacji badanego, celu i czasu."],
        ["Od czego zależy głębokość wywiadu?", "Od celu, teorii, wglądu badanego i etyki."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["Uprzedzenie o końcu rozmowy", "ważne sprawy padają na końcu"],
        ["Kiedy nie kończyć", "w szczycie kontaktu lub napięcia"],
        ["Warunki zakończenia", "Chevalier-Beaumel – 5 warunków"],
        ["Pytanie „jak wypadłem?”", "rekapitulacja bez ocen i rad"],
        ["Typowy czas rozmowy", "zwykle do godziny"],
        ["Slang badanego", "nie naśladować"],
        ["Rozmowa ustrukturalizowana", "klasyfikacja objawów, badania naukowe"],
        ["Rozmowa swobodna", "kontakt i wstępny problem"],
        ["Zasada Rogersa", "liczy się dopasowanie formy do celu"],
        ["3 cechy strategii [GS]", "standaryzacja, kierowanie, głębokość"],
        ["Stopień kierowania", "motywacja, cel i czas"],
        ["Głębokość wywiadu", "cel, teoria, wgląd, etyka"]
      ],
      quiz: [
        { q: "Rozmowa ze stałymi pytaniami, kolejnością i kodowaniem, bez dopytywania, to rozmowa:", o: ["swobodna", "częściowo ustrukturalizowana", "ustrukturalizowana", "w pełni swobodna"], a: 2, e: "Podejście ilościowe, nomotetyczne." },
        { q: "Według Rogersa niezgodność ocen w wywiadach wynika głównie z:", o: ["zmian u badanego", "kryteriów oceny", "zmęczenia diagnosty", "pory dnia"], a: 1, e: "62,5% – kryteria, 32,5% – sposób pytania, 5% – zmiany u badanego." },
        { q: "Przy niskiej motywacji badanego rozmową powinien kierować:", o: ["badany", "psycholog", "nikt", "zleceniodawca"], a: 1, e: "Wysoka motywacja – prowadzi badany; niska – psycholog." },
        { q: "Rozmowę najlepiej zakończyć:", o: ["w szczycie kontaktu", "po przejściu do tematów neutralnych, z podsumowaniem", "nagle, gdy minie czas", "diagnozą i radami"], a: 1, e: "Uprzedzić, podsumować, omówić dalsze kroki." },
        { q: "Wolne skojarzenia to skrajna postać rozmowy:", o: ["ustrukturalizowanej", "częściowo ustrukturalizowanej", "w pełni swobodnej", "kierowanej"], a: 2, e: "Minimum interwencji – podejście psychodynamiczne." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "tresc",
      title: "Teoria i treść rozmowy, paradygmaty, model Lazarusa",
      notes: `
## Po co teoria?
- Nie ma uniwersalnej listy tematów – o treści decydują **cel diagnozy i kategorie teoretyczne**.
- Całkowicie neutralne słuchanie to złudzenie – lepiej nazwać swoje „okulary”.
- W rozmowie ustrukturalizowanej teoria tworzy **plan**, w swobodnej służy do **interpretacji** po rozmowie [S].
- **6 korzyści z teorii** [S]: kategorie opisu, wskaźniki, sposób zbierania danych, hipotezy o genezie, mechanizmy zmiany, kierunek interwencji.

## Planowanie treści – 5 kroków [GS]
| Krok | Pytanie | Przykład |
|---|---|---|
| 1. **Cel** | Po co prowadzę wywiad? | opis problemów emocjonalnych |
| 2. **Kategorie** | W jakim języku opiszę człowieka? | superego, schematy, wzmocnienia |
| 3. **Pytania, hipotezy** | Na co chcę znać odpowiedź? | jak silne jest superego? |
| 4. **Informacje** | Co muszę wiedzieć? | jak często czuje winę, jakie były kary w domu |
| 5. **Tematy** | O czym rozmawiać? | konkretne wspomnienia, nie „Czy rodzice wzbudzali w panu winę?” |

Częsty błąd: **mylenie tego, co chcę wiedzieć, z tym, o co pytam**.

## Ten sam problem – różne paradygmaty
| Paradygmat | Czego szuka | Forma |
|---|---|---|
| **behawioralny** | łańcuch bodziec – reakcja – skutki (Kanfer, Saslow), zachowanie konfliktowe, wtórne korzyści | ustrukturalizowana, analiza behawioralna |
| **poznawczo-behawioralny** | Beck: przekonania pierwotne → kluczowe założenia → wydarzenie krytyczne → automatyczne myśli → emocja → zachowanie | ustrukturalizowana + głośne myślenie |
| **psychodynamiczny** | id, ego, superego, obrony, fiksacje, relacje z obiektem, self | swobodna z ramą kategorii; interpretacja |
| **społecznego uczenia się** | relacje z rodzicami i innymi modelami | diagnosta bywa „modelem” |
| **humanistyczny** | przeżywanie siebie, sens, samorealizacja | niedyrektywna; parafraza, odzwierciedlenie |
| **narracyjny** | jak osoba konstruuje opowieść | wstęp → swobodna narracja → pytania uzupełniające |

## Model integrujący Lazarusa (wg Cormier i Nurius)
- Dwie osie: **ABC** (czynniki poprzedzające – zachowanie – konsekwencje) × **BASIC ID** (Behavior, Affect, Sensation, Imagery, Cognition, Interpersonal, Drugs).
- **11 zagadnień**: cel badania, zakres problemów, priorytety · aktualne zachowanie, antecedenty, konsekwencje, **wtórne korzyści** · wcześniejsze próby rozwiązania, mocne strony · jak klient rozumie problem, nasilenie (częstość, czas).

## Przykłady planowania
- **Zaburzenia zachowania** [S] – teoria przywiązania: nie pytamy wprost o rodziców, tylko „kogo wybrałbyś na rodzica?”, „do kogo zwróciłbyś się po pomoc?” (bezpieczna baza).
- Przeszłość tylko na tyle, na ile wyjaśnia teraźniejszość; rodzina to system.

## Jakie informacje daje wywiad – 5 par [GS]
| Para | Przykład |
|---|---|
| obiektywne vs subiektywne | jedynactwo (fakt) + jak to przeżywa |
| realne vs wyobrażone | jak jest vs jak chciałby (ważna rozbieżność) |
| własne vs odzwierciedlone | jak sam siebie widzi vs jak sądzi, że widzą go inni |
| jednostkowe vs uogólnione | reakcja na konkretną sytuację vs ogólne poglądy |
| teraźniejsze vs przeszłe i przyszłe | przeszłość wyjaśnia, przyszłość prognozuje |

## Rejestrowanie, etyka, osobowość diagnosty [GS]
| Sposób zapisu | Plus | Minus |
|---|---|---|
| nagranie | pełna uwaga, wierny zapis | może budzić lęk; **ukrywanie nagrywania niedopuszczalne** |
| notatki w trakcie | wierniejsze | zakłócają kontakt |
| notatki po | najlepsze dla kontaktu | zniekształcenia – notować od razu |

- Etyka: informować o celu i wykorzystaniu wyników, uzyskać zgodę; szanować intymność, ale nie racjonalizować własnego lęku jako „etyki”. Dane są poufne.
- **Osobowość diagnosty**: własny lęk i tabu (seks, agresja) sprawiają, że tematy są pomijane – chroni samoświadomość.
`,
      flashcards: [
        ["Co decyduje o treści rozmowy diagnostycznej?", "Cel diagnozy i przyjęte kategorie teoretyczne."],
        ["Rola teorii w rozmowie ustrukturalizowanej vs swobodnej [S]", "W ustrukturalizowanej tworzy plan; w swobodnej służy do interpretacji po rozmowie."],
        ["5 kroków planowania treści wywiadu [GS]", "Cel → kategorie → pytania i hipotezy → potrzebne informacje → tematy rozmowy."],
        ["Częsty błąd początkujących w planowaniu", "Mylenie tego, co chcę wiedzieć, z tym, o co pytam."],
        ["Poziomy poznawcze wg Becka", "Przekonania pierwotne → kluczowe założenia → wydarzenie krytyczne → automatyczne myśli → emocja → zachowanie."],
        ["Czego szuka paradygmat behawioralny?", "Łańcucha bodziec – reakcja – skutki, zachowań konfliktowych i wtórnych korzyści."],
        ["Model Lazarusa – dwie osie", "ABC (antecedenty – zachowanie – konsekwencje) × BASIC ID."],
        ["Co oznacza BASIC ID?", "Behavior, Affect, Sensation, Imagery, Cognition, Interpersonal, Drugs."],
        ["Wtórne korzyści", "Zyski z utrzymywania problemu (np. dziecko zyskuje pozycję w klasie)."],
        ["Dlaczego w teorii przywiązania nie pytamy wprost o rodziców?", "Lepiej pytać pośrednio (np. „kogo wybrałbyś na rodzica?”), by dotrzeć do bezpiecznej bazy."],
        ["5 par informacji z wywiadu [GS]", "Obiektywne/subiektywne, realne/wyobrażone, własne/odzwierciedlone, jednostkowe/uogólnione, teraźniejsze/przeszłe i przyszłe."],
        ["Informacje odzwierciedlone", "Jak badany sądzi, że widzą go inni (działają jak dane projekcyjne)."],
        ["Czy można nagrywać rozmowę bez wiedzy badanego?", "Nie – ukrywanie nagrywania jest niedopuszczalne."]
      ],
      // krótkie pary do gier (Gra w pary, Memory, Prawda czy fałsz, Wisielec)
      pairs: [
        ["O treści rozmowy decyduje", "cel i kategorie teoretyczne"],
        ["Teoria w rozmowie swobodnej", "służy do interpretacji po rozmowie"],
        ["Błąd w planowaniu", "mylenie „co chcę wiedzieć” z „o co pytam”"],
        ["Poziomy poznawcze", "Beck – od przekonań pierwotnych"],
        ["Paradygmat behawioralny", "bodziec – reakcja – skutki"],
        ["Model Lazarusa", "ABC × BASIC ID"],
        ["BASIC ID", "Behavior, Affect, Sensation, Imagery…"],
        ["Wtórne korzyści", "zyski z utrzymywania problemu"],
        ["Przywiązanie – jak pytać", "pośrednio, nie wprost o rodziców"],
        ["Informacje odzwierciedlone", "jak badany sądzi, że widzą go inni"],
        ["Nagrywanie bez wiedzy", "niedopuszczalne"],
        ["5 par informacji [GS]", "obiektywne/subiektywne itd."]
      ],
      quiz: [
        { q: "Pierwszy krok planowania treści wywiadu to:", o: ["dobór tematów", "określenie celu", "wybór narzędzi", "sformułowanie hipotez"], a: 1, e: "Cel → kategorie → pytania → informacje → tematy." },
        { q: "BASIC ID to element modelu:", o: ["Becka", "Lazarusa", "Rogersa", "Kanfera i Saslowa"], a: 1, e: "Model integrujący Lazarusa." },
        { q: "„Jak sądzisz, jak widzą cię koledzy?” dotyczy informacji:", o: ["obiektywnych", "odzwierciedlonych", "uogólnionych", "przeszłych"], a: 1, e: "Własne vs odzwierciedlone." },
        { q: "Który paradygmat stosuje rozmowę niedyrektywną z parafrazą i odzwierciedlaniem?", o: ["behawioralny", "humanistyczny", "poznawczo-behawioralny", "narracyjny"], a: 1, e: "Paradygmat humanistyczny." },
        { q: "Który sposób zapisu jest najlepszy dla kontaktu, ale grozi zniekształceniami?", o: ["nagranie", "notatki w trakcie", "notatki po rozmowie", "kwestionariusz"], a: 2, e: "Trzeba notować od razu po rozmowie." }
      ]
    }
  ]
});
