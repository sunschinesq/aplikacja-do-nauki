// Podstawy pomocy psychologicznej. Opracowane na podstawie plików z Dysku:
// Notatka_Rozmowa_diagnostyczna.pdf (A. Suchańska; H. Grzegołowska-Klarkowska i T. Szustrowa)
// oraz materiałów dr Darii Sucheckiej: PPP_OWRSP_wymagania_25-26.pdf, Studium przypadku_wymagania.pdf,
// PPP Transkrypcja.pdf, studium_przypadku_raport.pdf.
window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: "pomoc",
  name: "Podstawy pomocy psychologicznej",
  short: "Pomoc psychologiczna",
  icon: "🤝",
  color: "#d6336c",
  // format egzaminu orientacyjny – zmień, gdy poznasz zasady
  exam: { questions: 15, minutes: 15, pass: 8, note: "To tylko test do powtórki – według wymagań dr Sucheckiej przedmiot zalicza się pracą praktyczną (rozmowa na forum, studium przypadku z transkrypcją, prezentacja), a nie egzaminem." },
  sources: [
    "Notatka_Rozmowa_diagnostyczna.pdf – na podstawie: A. Suchańska, Rozmowa i obserwacja w diagnozie psychologicznej (rozdz. 2–4) oraz H. Grzegołowska-Klarkowska, T. Szustrowa, Swobodne techniki diagnostyczne (rozdz. 2–3)",
    "PPP_OWRSP_wymagania_25-26.pdf – wymagania, oceny, plan zajęć i literatura (dr D. Suchecka)",
    "Studium przypadku_wymagania.pdf – kliniczne studium przypadku i elementy wywiadu klinicznego (dr D. Suchecka)",
    "PPP Transkrypcja.pdf – transkrypcja wywiadu (dr D. Suchecka)",
    "studium_przypadku_raport.pdf – wskazówki do raportu z badania diagnostycznego (radzenie sobie ze stresem, COPE, EAS)"
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
    },
    // ------------------------------------------------------------------
    {
      id: "zaliczenie",
      title: "Zaliczenie, organizacja zajęć i literatura (dr Suchecka)",
      notes: `
Prowadząca ćwiczenia: **dr n. med. i n. o zdr. Daria Suchecka** (Instytut Psychologii US). Źródło: plik *PPP_OWRSP_wymagania_25-26.pdf* – przedmiot w tej wersji nazywa się „Podstawy pomocy psychologicznej – obserwacja, rozmowa i wywiad, studium przypadku”.

> Uwaga: daty w pliku dotyczą roku 2025/2026 – sprawdź, czy w tym roku obowiązuje ten sam harmonogram.

## Warunki zaliczenia
- **Ćwiczenia: 45 h.** Dozwolona **1 nieobecność nieusprawiedliwiona**; każda kolejna nieusprawiedliwiona = **−0,5 oceny końcowej**. Usprawiedliwienia przez **Teams**.
- **Rozmowa na forum grupy** – odgrywanie ról psycholog – pacjent.
- **Studium przypadku** – praca pisemna **w parach** (termin w pliku: najpóźniej 22.01): obserwacja + wywiad.
- **Transkrypcja wywiadu** – zapis przeprowadzonego wywiadu z „pacjentem/klientem”: **pisemnie + na nośniku** (nagranie).
- **Prezentacja studium przypadku** na forum grupy (w parach).

## Oceny (skrót)
| Ocena | Co trzeba umieć |
|---|---|
| **5,0 (A)** | dokładnie opanowany materiał + wiedza z literatury; samodzielnie przeprowadza wywiad i obserwację i sporządza opis |
| **4,5 (B)** | dosyć dobrze; samodzielnie przeprowadza wywiad i obserwację, nieznaczące błędy |
| **4,0 (C)** | wystarczająco; trudności z trudniejszymi pytaniami i interpretacją, ale radzi sobie z typowymi zadaniami |
| **3,5 (D)** | przeciętnie opanowany materiał i prowadzenie wywiadu oraz obserwacji |
| **3,0 (E)** | minimum; zna zastosowania metod, ale trudno mu odnieść wiedzę do praktyki |
| **2,0 (F)** | nie opanował podstaw, nie potrafi poprawnie i samodzielnie przeprowadzić wywiadu i obserwacji |

## Plan ćwiczeń
| Nr | Treść |
|---|---|
| 1 | wprowadzenie, podstawowe terminy |
| 2 | **obserwacja** – rola w badaniu, rodzaje, nadawanie struktury, ćwiczenia |
| 3 | specyfika **wywiadu**, **kontakt i kontrakt**, **transkrypcja** |
| 4 | forma i struktura **rozmowy diagnostycznej** |
| 5–8 | prowadzenie wywiadu i **instrumenty konwersacyjne** – ćwiczenia |
| 8 | **studium przypadku** – zasady tworzenia, przykłady |
| 9–11 | prezentacje prac własnych |
| 12 | konsultacje prac zaliczeniowych |

## Literatura
- **Kępiński A.** (2002). *Poznanie chorego*.
- **Shaughnessy, Zechmeister, Zechmeister** (2002). *Metody badawcze w psychologii*.
- **Stemplewska-Żakowicz K.** (2013). *Diagnoza psychologiczna. Diagnozowanie jako kompetencja profesjonalna*.
- **Stemplewska-Żakowicz K.** (2005). *Wywiad psychologiczny*, t. 1 i 2.
- **Suchańska A.** (2007). *Rozmowa i obserwacja w diagnozie psychologicznej*.
- **Szustrowa T.** (2005). *Swobodne techniki diagnostyczne. Wywiad i obserwacja*.

> Na pamięć: zaliczenie = obecność + rozmowa na forum + studium przypadku w parach (z transkrypcją) + prezentacja.`,
      flashcards: [
        ["Kto prowadzi ćwiczenia z obserwacji, rozmowy i studium przypadku?", "Dr n. med. i n. o zdr. Daria Suchecka."],
        ["Ile nieobecności nieusprawiedliwionych jest dozwolonych bez kary?", "Jedna; każda kolejna nieusprawiedliwiona obniża ocenę końcową o 0,5."],
        ["Gdzie składa się usprawiedliwienia nieobecności?", "Na Teams."],
        ["Z czego składa się zaliczenie przedmiotu?", "Obecność, rozmowa na forum grupy (psycholog – pacjent), studium przypadku w parach z obserwacją i wywiadem, transkrypcja wywiadu, prezentacja studium przypadku."],
        ["W jakiej formie oddaje się transkrypcję wywiadu?", "Pisemnie i na nośniku (nagranie)."],
        ["Studium przypadku pisze się…", "W parach."],
        ["Czym różni się ocena 5,0 od 4,5?", "Na 5,0 student uzupełnił materiał wiedzą z literatury; na 4,5 popełnia nieznaczące błędy w przygotowaniu wywiadu i obserwacji."],
        ["Co charakteryzuje ocenę 3,0?", "Minimalne opanowanie materiału: zna zastosowania metod, ale ma trudności z odniesieniem wiedzy do praktyki."],
        ["Autor książki „Poznanie chorego”", "Antoni Kępiński (2002)."],
        ["Autorka książki „Rozmowa i obserwacja w diagnozie psychologicznej”", "Aleksandra Suchańska (2007)."],
        ["Autorka książki „Swobodne techniki diagnostyczne. Wywiad i obserwacja”", "Teresa Szustrowa (2005)."],
        ["Autorka „Wywiadu psychologicznego” (t. 1 i 2)", "Katarzyna Stemplewska-Żakowicz (2005)."]
      ],
      pairs: [
        ["Kępiński", "Poznanie chorego"],
        ["Suchańska", "Rozmowa i obserwacja w diagnozie psychologicznej"],
        ["Szustrowa", "Swobodne techniki diagnostyczne"],
        ["Stemplewska-Żakowicz (2005)", "Wywiad psychologiczny, t. 1 i 2"],
        ["Shaughnessy i Zechmeisterowie", "Metody badawcze w psychologii"],
        ["Każda kolejna nieobecność nieusprawiedliwiona", "−0,5 oceny końcowej"],
        ["Transkrypcja wywiadu", "pisemnie + na nośniku"],
        ["Ćwiczenia 5–8", "prowadzenie wywiadu i instrumenty konwersacyjne"],
        ["Ćwiczenie 2", "obserwacja – rodzaje i struktura"],
        ["Ocena 5,0 (A)", "materiał + wiedza z literatury"]
      ],
      quiz: [
        { q: "Ile nieobecności nieusprawiedliwionych można mieć bez obniżenia oceny?", o: ["1", "0", "2", "3"], a: 0, e: "Każda kolejna nieusprawiedliwiona to −0,5 oceny końcowej." },
        { q: "Studium przypadku na zaliczenie przygotowuje się:", o: ["w parach", "indywidualnie", "w grupach 4-osobowych", "całą grupą"], a: 0, e: "Prezentacja również w parach." },
        { q: "Który element NIE należy do zaliczenia przedmiotu?", o: ["egzamin pisemny z testem", "rozmowa na forum grupy", "transkrypcja wywiadu", "prezentacja studium przypadku"], a: 0, e: "Zaliczenie opiera się na pracy praktycznej, nie na teście." },
        { q: "Książkę „Poznanie chorego” napisał:", o: ["Kępiński", "Szustrowa", "Suchańska", "Shaughnessy"], a: 0, e: "A. Kępiński (2002)." },
        { q: "Na ocenę bardzo dobrą student musi m.in.:", o: ["uzupełnić materiał z zajęć wiedzą z literatury", "zdać test na 100%", "przeprowadzić 3 wywiady", "napisać pracę samodzielnie, bez pary"], a: 0, e: "I samodzielnie przeprowadzić wywiad i obserwację oraz sporządzić opis." },
        { q: "Kontakt, kontrakt w wywiadzie i transkrypcja to temat ćwiczeń nr:", o: ["3", "1", "8", "12"], a: 0, e: "Ćw. 3 – specyfika wywiadu psychologicznego." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "studium",
      title: "Kliniczne studium przypadku i wywiad kliniczny",
      notes: `
Źródło: *Studium przypadku_wymagania.pdf* (dr D. Suchecka).

## 7 części klinicznego studium przypadku
| # | Część | Co zawiera |
|---|---|---|
| 1 | **Wstęp** | kontekst zgłoszenia (kto skierował, wcześniejsze leczenie i jego skutek), relacja z wcześniej leczącymi, czy przyszedł **z własnej inicjatywy** (jeśli nie – z czyjej i co to znaczy), **obserwacja** |
| 2 | **Informacje socjometryczne** | wiek, płeć, wykształcenie, miejsce zamieszkania, liczba członków najbliższej rodziny, praca |
| 3 | **Problemy, na które skarży się pacjent** | aktualne problemy i ich historia, jak je przekazuje, **własne teorie pacjenta** o przyczynach, sytuacja wzmacniająca problem, emocjonalny stosunek, cierpienie, **wtórna korzyść z choroby**, hipotezy o funkcjonowaniu |
| 4 | **Aktualna sytuacja** | obraz siebie i bliskich, przyszłość według pacjenta, cechy osobowości i temperamentu, radzenie sobie ze stresem, inteligencja i zdolności |
| 5 | **Informacje medyczne** | aktualne choroby, leki, stan somatyczny, wizyty u psychiatry/psychologa, choroby psychiczne/neurologiczne w rodzinie, historia choroby |
| 6 | **Wnioski i zalecenia** | podsumowanie, **weryfikacja hipotez**, wnioski o funkcjonowaniu i przyczynach problemów, zalecenia psychologiczne |
| 7 | **Transkrypcja** | wybrany fragment wywiadu (**10 min**), z zaznaczonymi przedziałami czasowymi; nagranie + wersja papierowa |

## Obserwacja w studium przypadku
- **Przedmiot**: osoba badana.
- **Cel**: opis zachowania na podstawie wskaźników i hipotezy o cechach osobowości, temperamentu i ewentualnej psychopatologii (wraz z **recypatią** obserwatora – jego własnymi odczuciami wobec badanego).
- **Podstawa teoretyczna**: psychodynamiczne podejście **Kępińskiego**, podejście **integracyjne (Suchańska)** albo inna wybrana teoria.

## Elementy wywiadu klinicznego
| Obszar | Pytamy o… |
|---|---|
| **Dziedziczność** (rodzina biologiczna) | choroby neurologiczne (zwłaszcza **padaczka**), psychiczne, uzależnienie od alkoholu, inne przewlekłe |
| **Leki** | obecne i wcześniejsze – pacjenci często nie znają skutków ubocznych (zwłaszcza poznawczych), więc warto je spisać i sprawdzić w **Pharmindeksie** |
| **Używki** | alkohol, papierosy, narkotyki – od kiedy, ile, jak często |
| **Ciąża i poród** | stosunek emocjonalny do dziecka (chciane?), przebieg ciąży i porodu, choroby noworodka (np. żółtaczka), **skala APGAR** |
| **Wczesne dzieciństwo** | karmienie, trening toaletowy, sen, choroby, rozwój psychomotoryczny |
| **Okres przedszkolny i szkolny** | relacje z rówieśnikami, rodzeństwem, rodzicami; zabawy; czy poszedł do szkoły o czasie; trudności w nauce; adolescencja; etapy rozwoju wg **Freuda, Eriksona, Piageta, Kohlberga** |
| **Dorosłość i praca** | studia, pierwsza praca, konflikty, **frustracje ambicji**, służba wojskowa |
| **Rodzina** | liczba członków, warunki ekonomiczno-społeczne, **układ sił** (kto rządzi), sylwetki rodziców, atmosfera |
| **Trwałe związki** | pierwsze kontakty seksualne, stosunek do partnera, ciąże, źródła konfliktów, rozwiązywanie problemów |
| **Późna dorosłość** | menopauza, kryzys wieku średniego, stosunek do starości i śmierci |
| **Obecna choroba** | pierwsze objawy, czynniki wywoławcze, dokładny przebieg |

## Wymagania wobec pracy
- **Etapy**: I – przygotowawczy (wywiad, obserwacja, materiały), II – sprawozdawczy (prezentacja + praca pisemna).
- **Praca pisemna**: **4–8 stron** A4, Times New Roman 12, interlinia **1,5**; wyczerpujący wstęp teoretyczny, **min. 5 pozycji** w bibliografii; tytuły rozdziałów; **osadzenie przypadku na tle populacji**.
- **Prezentacja**: podstawowe informacje ze studium, **odwołanie do teorii** dotyczących danej patologii, **nie kopia** pracy pisemnej, przejrzysta, z tytułami i spisem piśmiennictwa.
- **Na 5,0**: praca nie jest tylko rozwinięciem informacji ze studium – **oryginalne spojrzenie** i wyjątkowość opisu.

> Na pamięć: W-S-P-A-M-W-T – Wstęp · Socjometryczne · Problemy · Aktualna sytuacja · Medyczne · Wnioski · Transkrypcja.`,
      flashcards: [
        ["7 części klinicznego studium przypadku", "Wstęp, informacje socjometryczne, problemy pacjenta, aktualna sytuacja, informacje medyczne, wnioski i zalecenia, transkrypcja."],
        ["Co zawiera wstęp studium przypadku?", "Kontekst zgłoszenia (kto skierował, wcześniejsze leczenie i skutek), relację z wcześniej leczącymi, czy pacjent przyszedł z własnej inicjatywy, obserwację."],
        ["Informacje socjometryczne to…", "Wiek, płeć, wykształcenie, miejsce zamieszkania, liczba członków najbliższej rodziny, praca."],
        ["Wtórna korzyść z choroby", "Zysk, jaki pacjent ma z objawów (np. uwaga, zwolnienie z obowiązków) – część opisu problemów pacjenta."],
        ["Recypatia", "Uczucia, refleksje i wrażenia badającego wobec osoby badanej – element obserwacji i opisu relacji."],
        ["Podstawy teoretyczne obserwacji w studium przypadku", "Psychodynamiczne podejście Kępińskiego, integracyjne (Suchańska) lub inna wybrana teoria."],
        ["Jak długi fragment wywiadu transkrybuje się do studium przypadku?", "10 minut, z zaznaczonymi przedziałami czasowymi; nagranie + wersja papierowa."],
        ["Dlaczego warto spisać leki pacjenta i sprawdzić je w Pharmindeksie?", "Pacjenci często nie znają skutków ubocznych leków, zwłaszcza wpływu na funkcjonowanie poznawcze."],
        ["Którą chorobę neurologiczną w rodzinie szczególnie się wymienia w wywiadzie?", "Padaczkę."],
        ["Skala APGAR", "Ocena stanu noworodka tuż po porodzie – element wywiadu o ciąży i porodzie."],
        ["Etapy rozwoju w wywiadzie o okresie szkolnym – według jakich teorii?", "Freuda, Eriksona, Piageta, Kohlberga."],
        ["Układ sił w rodzinie", "Kto rządzi i jak podzielone są obowiązki – element wywiadu o rodzinie."],
        ["Objętość pisemnego studium przypadku", "4–8 stron A4, Times New Roman 12, interlinia 1,5."],
        ["Ile pozycji w bibliografii studium przypadku?", "Minimum 5."],
        ["Czego NIE może być prezentacja studium przypadku?", "Prostą kopią pracy pisemnej."],
        ["Co wyróżnia pracę na ocenę bardzo dobrą?", "Nie jest tylko rozwinięciem informacji ze studium – ma oryginalne spojrzenie i wyjątkowość opisu."],
        ["Osadzenie przypadku na tle populacji", "Wymóg pracy pisemnej: odniesienie przypadku do danych o częstości i specyfice problemu w populacji."],
        ["Co obejmuje część „Wnioski i zalecenia”?", "Podsumowanie, weryfikację hipotez, wnioski o funkcjonowaniu i przyczynach problemów, zalecenia psychologiczne."]
      ],
      pairs: [
        ["Wstęp", "kontekst zgłoszenia i obserwacja"],
        ["Informacje socjometryczne", "wiek, płeć, wykształcenie, praca"],
        ["Aktualna sytuacja", "obraz siebie, cechy, radzenie sobie ze stresem"],
        ["Informacje medyczne", "choroby, leki, wizyty u psychiatry"],
        ["Wnioski i zalecenia", "weryfikacja hipotez"],
        ["Transkrypcja w studium", "10-minutowy fragment wywiadu"],
        ["Recypatia", "odczucia obserwatora wobec badanego"],
        ["Pharmindex", "sprawdzanie skutków ubocznych leków"],
        ["Skala APGAR", "stan noworodka po porodzie"],
        ["Padaczka", "dziedziczność – choroby neurologiczne"],
        ["Kryzys wieku średniego", "okres przejściowy – późna dorosłość"],
        ["Frustracje ambicji", "okres dorosłości i praca"],
        ["Układ sił w rodzinie", "kto rządzi, podział obowiązków"],
        ["Praca pisemna", "4–8 stron, min. 5 pozycji literatury"]
      ],
      open: [
        { q: "Omów strukturę klinicznego studium przypadku.", a: "Siedem części: **wstęp** (kontekst zgłoszenia, wcześniejsze leczenie, inicjatywa zgłoszenia, obserwacja), **informacje socjometryczne**, **problemy pacjenta** (historia, własne teorie przyczyn, sytuacje wzmacniające, cierpienie, **wtórna korzyść**, hipotezy), **aktualna sytuacja** (obraz siebie, cechy osobowości i temperamentu, radzenie sobie ze stresem), **informacje medyczne**, **wnioski i zalecenia** (weryfikacja hipotez) oraz **transkrypcja** 10-minutowego fragmentu wywiadu." },
        { q: "Jakie obszary obejmuje wywiad kliniczny?", a: "**Dziedziczność**, **leki** (Pharmindex), **używki**, **ciąża i poród** (APGAR), **wczesne dzieciństwo**, **okres przedszkolny i szkolny** (etapy wg Freuda, Eriksona, Piageta, Kohlberga), **dorosłość i praca**, **rodzina** (układ sił, atmosfera), **trwałe związki**, **późna dorosłość** i **obecna choroba** (pierwsze objawy, czynniki wywoławcze, przebieg)." }
      ],
      quiz: [
        { q: "Ile części ma kliniczne studium przypadku wg dr Sucheckiej?", o: ["7", "5", "4", "10"], a: 0, e: "Wstęp, socjometryczne, problemy, aktualna sytuacja, medyczne, wnioski i zalecenia, transkrypcja." },
        { q: "Wtórna korzyść z choroby jest opisywana w części:", o: ["problemy, na które skarży się pacjent", "informacje socjometryczne", "informacje medyczne", "transkrypcja"], a: 0, e: "Razem z historią problemu, cierpieniem i hipotezami." },
        { q: "Recypatia to:", o: ["odczucia i wrażenia obserwatora wobec badanego", "skala oceny noworodka", "rodzaj transkrypcji", "lek przeciwlękowy"], a: 0, e: "Uwzględniana w obserwacji i opisie relacji diagnostycznej." },
        { q: "Po co spisywać leki pacjenta i sprawdzać je w Pharmindeksie?", o: ["pacjenci często nie znają ich skutków ubocznych, zwłaszcza poznawczych", "żeby zmienić dawkowanie", "bo wymaga tego RODO", "żeby wystawić receptę"], a: 0, e: "Leki mogą wpływać na funkcjonowanie poznawcze w badaniu." },
        { q: "Skala APGAR pojawia się w wywiadzie o:", o: ["ciąży i porodzie", "pracy zawodowej", "trwałych związkach", "używkach"], a: 0, e: "Ocena stanu noworodka po porodzie." },
        { q: "Jakiej długości powinno być pisemne studium przypadku?", o: ["4–8 stron", "1–2 strony", "15–20 stron", "dowolnej"], a: 0, e: "A4, Times New Roman 12, interlinia 1,5." },
        { q: "Ile minimum pozycji w bibliografii studium przypadku?", o: ["5", "1", "3", "10"], a: 0, e: "Plus wyczerpujący wstęp teoretyczny." },
        { q: "Który obszar NIE należy do informacji socjometrycznych?", o: ["przyjmowane leki", "wiek", "wykształcenie", "praca"], a: 0, e: "Leki należą do informacji medycznych." },
        { q: "Prezentacja studium przypadku powinna:", o: ["odwoływać się do teorii dotyczących danej patologii", "być kopią pracy pisemnej", "nie zawierać literatury", "zawierać pełną transkrypcję"], a: 0, e: "Nie może być prostą kopią pracy pisemnej." },
        { q: "Etapy rozwoju w wywiadzie o okresie szkolnym opisuje się wg teorii:", o: ["Freuda, Eriksona, Piageta, Kohlberga", "Maslowa i Rogersa", "Skinnera i Pawłowa", "Eysencka i Cattella"], a: 0, e: "Wymienieni w slajdzie o okresie przedszkolnym i szkolnym." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "transkrypcja",
      title: "Transkrypcja wywiadu",
      notes: `
Źródło: *PPP Transkrypcja.pdf* (dr D. Suchecka).

## Czym jest transkrypcja?
- **Przedstawienie aktów języka mówionego w formie pisemnej** (Davidson, 2006) – zamiana mowy na tekst.
- Badacze traktują ją jako **„surowe dane”**, interpretowane dopiero w analizie (Ritchie i Lewis, 2003).
- W wąskim sensie: „**techniczna procedura przepisywania**, która przedstawia dyskurs mówiony w postaci tekstu” (Bloor, Wood, 2006).
- W szerokim sensie: każdy **przekład z jednego typu danych na inny** (np. wizualnych na tekst) – antropolodzy (Clifford) transkrybują rytuały i czynności.
- Transkrypcja obrazów jest rzadsza, bo **brak skodyfikowanego sposobu** ich zapisu.

## Kto ma transkrybować?
- **Angrosino (2010)**: to „powolne i nudne zajęcie” – przeciętny badacz nie ma czasu ani umiejętności → zlecić osobie trzeciej (drogo).
- Autorzy *„Analizy układów społecznych”* (2009): **lepiej samodzielnie** – transkrypcja pobudza interpretację i krystalizację pojęć. Gdy robi ją ktoś inny, trzeba **szybko przesłuchać nagranie i poprawić błędy**.

## Transkrypcja w sądzie
- Nagranie może być dowodem (np. sprawy rodzinne, alimenty, podział majątku, władza rodzicielska).
- Każde takie nagranie musi mieć **stenogram** – staranny, z uczestnikami rozmowy i **znacznikami czasu** przed wypowiedziami, z **dźwiękami otoczenia i emocjami** rozmówców.

## Funkcje transkrypcji w badaniu
- szczegółowa analiza **bez ciągłego wracania do nagrania**,
- krytyczna analiza przebiegu wywiadu,
- odświeża wspomnienia i uzupełnia notatki terenowe,
- **redukuje uprzedzenia badacza i pobudza refleksyjność**,
- wielokrotna analiza tego samego materiału (ważne w **hermeneutycznym** modelu badań jakościowych),
- **replikacja** badania i powtórna analiza przez innych (bank danych),
- uwiarygodnia wyniki w raportach,
- pozwala używać programów komputerowych (**CAQDAS**).

## Typy transkrypcji
| Podział | Typ | Cechy |
|---|---|---|
| Bucholtz (2000), Mero-Jaffe (2011) | **zdenaturalizowana** | jak tekst pisany, z interpunkcją; łatwa w odbiorze, ale **bardziej odbiega** od oryginału |
| | **znaturalizowana** | kopiuje mowę: **powtórzenia, falstarty, zająknięcia**, błędy; trudniejsza, „drażni niedoskonałością” |
| Evers (2011) | **pragmatyczna** | najsłabiej sformalizowana, dopasowana do potrzeb badania i budżetu |
| | **wg Gail Jefferson** | najczęściej w **analizie konwersacyjnej**; złożona – ok. **20 godzin na 1 godzinę** nagrania |
| | **skondensowana (gisted)** | **streszczenie** rozmowy na podstawie notatek terenowych |

## Prozodia (E. Soroko)
- **Informacje prozodyczne** – akcent, długość samogłosek, **rytm** – trzeba zapisywać odpowiednimi znakami, jeśli mają mówić o **emocjach** rozmówców.
- Znaki przestankowe w transkrypcji pełnią funkcję **intonacyjną**, nie gramatyczną.
- **Pauzy** mierzy się liczeniem sekund w myślach albo licznikiem w odtwarzaczu (ten Have, 2002).

> Na pamięć: zdenaturalizowana = ładna, ale daleka od mowy · znaturalizowana = wierna, ale „brzydka” · Jefferson = analiza konwersacyjna, 20 h na 1 h.`,
      flashcards: [
        ["Transkrypcja (Davidson, 2006)", "Przedstawienie aktów języka mówionego w formie pisemnej – zamiana mowy na tekst."],
        ["Transkrypcja jako „surowe dane”", "Badacze (Ritchie i Lewis) traktują ją jako dane, które interpretuje się dopiero w analizie."],
        ["Transkrypcja w wąskim sensie (Bloor, Wood)", "Techniczna procedura przepisywania, która przedstawia dyskurs mówiony w postaci tekstu."],
        ["Transkrypcja w szerokim sensie", "Każdy przekład z jednego typu danych na inny, np. wizualnych na język pisany."],
        ["Co uważał Angrosino (2010) o transkrypcji?", "Że jest powolna i nudna, a przeciętny badacz nie ma czasu ani umiejętności – lepiej zlecić ją osobie trzeciej."],
        ["Dlaczego warto transkrybować samodzielnie?", "Bo transkrypcja pobudza interpretację i krystalizację pojęć analitycznych („Analiza układów społecznych”)."],
        ["Stenogram w sądzie", "Pisemna wersja nagrania-dowodu: z uczestnikami, znacznikami czasu, dźwiękami otoczenia i emocjami rozmówców."],
        ["Transkrypcja zdenaturalizowana", "Ma formę tekstu pisanego z interpunkcją; łatwiejsza w odbiorze, ale bardziej odbiega od oryginału."],
        ["Transkrypcja znaturalizowana", "Kopiuje mowę z powtórzeniami, falstartami, zająknięciami i błędami; wymaga więcej wysiłku interpretacyjnego."],
        ["Transkrypcja pragmatyczna (Evers)", "Najsłabiej sformalizowana; badacz dopasowuje zapis do potrzeb badania i budżetu."],
        ["Zapis według Gail Jefferson", "Złożony zapis używany w analizie konwersacyjnej; ok. 20 godzin pracy na 1 godzinę nagrania."],
        ["Transkrypcja skondensowana (gisted)", "Streszczenie rozmowy sporządzone na podstawie notatek terenowych."],
        ["Informacje prozodyczne", "Sposób akcentowania, długość samogłosek, rytm wypowiedzi – mówią o emocjach rozmówców."],
        ["Jaką funkcję pełnią znaki przestankowe w transkrypcji?", "Intonacyjną, a nie gramatyczną."],
        ["Jak mierzy się pauzy w transkrypcji?", "Licząc sekundy w myślach albo licznikiem w programie odtwarzającym (ten Have, 2002)."],
        ["CAQDAS", "Komputerowe programy do analizy danych jakościowych – transkrypcja pozwala z nich korzystać."],
        ["Dlaczego transkrypcja redukuje uprzedzenia badacza?", "Bo pozwala wielokrotnie i krytycznie analizować dokładny zapis, pobudzając refleksyjność."]
      ],
      pairs: [
        ["Davidson (2006)", "język mówiony w formie pisemnej"],
        ["Bloor i Wood", "techniczna procedura przepisywania"],
        ["Angrosino", "transkrypcja powolna i nudna"],
        ["Zdenaturalizowana", "tekst z interpunkcją, daleki od oryginału"],
        ["Znaturalizowana", "powtórzenia, falstarty, zająknięcia"],
        ["Pragmatyczna", "dopasowana do potrzeb i budżetu"],
        ["Gail Jefferson", "analiza konwersacyjna, 20 h na 1 h"],
        ["Skondensowana (gisted)", "streszczenie z notatek terenowych"],
        ["Prozodia", "akcent, długość samogłosek, rytm"],
        ["Stenogram", "transkrypcja nagrania dla sądu"],
        ["CAQDAS", "programy do analizy jakościowej"],
        ["ten Have (2002)", "pomiar pauz"]
      ],
      open: [
        { q: "Omów typy transkrypcji i ich wady oraz zalety.", a: "Wg **Bucholtz** i **Mero-Jaffe**: **zdenaturalizowana** – forma tekstu pisanego z interpunkcją, łatwa w odbiorze, ale odbiega od oryginału; **znaturalizowana** – kopiuje mowę z powtórzeniami, falstartami i zająknięciami, wierniejsza, ale trudniejsza. Wg **Eversa**: **pragmatyczna** (dopasowana do potrzeb i budżetu), **zapis wg Gail Jefferson** (analiza konwersacyjna, ok. 20 h na 1 h nagrania) i **skondensowana** (streszczenie z notatek terenowych)." },
        { q: "Jakie funkcje pełni transkrypcja w procesie badawczym?", a: "Pozwala na szczegółową analizę bez wracania do nagrania, krytyczną analizę przebiegu wywiadu, odświeża wspomnienia i uzupełnia notatki, **redukuje uprzedzenia i pobudza refleksyjność**, umożliwia wielokrotną analizę (model hermeneutyczny), **replikację** i powtórną analizę przez innych, uwiarygodnia wyniki i pozwala korzystać z programów **CAQDAS**." }
      ],
      quiz: [
        { q: "Transkrypcja kopiująca mowę z powtórzeniami, falstartami i zająknięciami to transkrypcja:", o: ["znaturalizowana", "zdenaturalizowana", "skondensowana", "pragmatyczna"], a: 0, e: "Zdenaturalizowana ma formę tekstu pisanego z interpunkcją." },
        { q: "Zapis według Gail Jefferson stosuje się najczęściej w:", o: ["analizie konwersacyjnej", "testach psychometrycznych", "sądownictwie", "obserwacji uczestniczącej"], a: 0, e: "Zajmuje ok. 20 godzin na 1 godzinę nagrania." },
        { q: "Transkrypcja skondensowana (gisted) to:", o: ["streszczenie rozmowy na podstawie notatek terenowych", "pełny zapis z prozodią", "zapis tylko pytań badacza", "nagranie wideo"], a: 0, e: "Typ wyróżniony przez Eversa (2011)." },
        { q: "Kto uważał transkrypcję za „powolne i nudne zajęcie”?", o: ["Angrosino", "Davidson", "Jefferson", "Bucholtz"], a: 0, e: "Michael Angrosino (2010) – zalecał zlecanie jej osobie trzeciej." },
        { q: "Znaki przestankowe w transkrypcji pełnią funkcję:", o: ["intonacyjną", "gramatyczną", "ozdobną", "żadną"], a: 0, e: "Oddają intonację mowy, a nie reguły gramatyki." },
        { q: "Stenogram nagrania wykorzystywanego w sądzie powinien zawierać m.in.:", o: ["znaczniki czasowe, dźwięki otoczenia i emocje rozmówców", "tylko słowa bez kontekstu", "streszczenie rozmowy", "wyłącznie wypowiedzi oskarżonego"], a: 0, e: "I oznaczenie uczestników rozmowy." },
        { q: "Która funkcja NIE należy do funkcji transkrypcji?", o: ["zastąpienie nagrania jako jedynego dowodu w sądzie", "redukcja uprzedzeń badacza", "umożliwienie replikacji badania", "korzystanie z programów CAQDAS"], a: 0, e: "W sądzie dowodem jest nagranie, a stenogram musi mu towarzyszyć." },
        { q: "Dlaczego autorzy „Analizy układów społecznych” zalecają samodzielną transkrypcję?", o: ["pobudza interpretację i krystalizację pojęć", "jest tańsza od nagrania", "jest wymagana prawem", "eliminuje potrzebę analizy"], a: 0, e: "Transkrypcja towarzyszy procesowi interpretacji." }
      ]
    },
    // ------------------------------------------------------------------
    {
      id: "raport-stres",
      title: "Raport z badania diagnostycznego: radzenie sobie ze stresem (COPE, EAS)",
      notes: `
Źródło: *studium_przypadku_raport.pdf* – wskazówki do pracy indywidualnej (badania diagnostycznego).

## Strona formalna
Czcionka **12 pt** (Arial lub Times New Roman), odstęp **1,5**, raport (integracja danych) **maks. 4 strony**, strony ponumerowane. Z całości **usuwa się dane identyfikacyjne**.

## Struktura raportu
1. **Dane ogólne** o osobie badanej (inicjały, płeć, wiek, wykształcenie, zawód, miejsce zamieszkania).
2. **Osoba badająca**.
3. **Cel badań** – 4 pytania diagnostyczne:
   - **jak** osoba radzi sobie ze stresem (strategie)?
   - **od czego zależy** wybór strategii (typ sytuacji, stresory)?
   - **dlaczego** stosuje te strategie (uwarunkowania temperamentalne, osobowościowe)?
   - **jak efektywnie** radzi sobie ze stresem?
4. **Przebieg badań** – kiedy i jakimi metodami, odstępstwa od procedury, zakłócenia.
5. **Relacja diagnostyczna** – kontekst, motywacja badanego.
6. **Sposób radzenia sobie ze stresem i weryfikacja hipotez** – **najważniejsza część** (integracja danych z różnych metod).
7. **Zasoby** (zewnętrzne i wewnętrzne) – wykorzystywane i niewykorzystywane.
8. **Prognoza** funkcjonowania w sytuacjach stresowych.
9. **Luki diagnostyczne** – jakich informacji jeszcze brakuje (obszary „diagnostycznej penetracji”).
10. Ewentualne **zalecenia pomocy psychologicznej** (gdy radzi sobie nieefektywnie).
11. Uwagi o **komunikowaniu wyników** (termin trzeciego spotkania) · bibliografia · podpis.

## Mechanizm radzenia sobie ze stresem (schemat)
**Uwarunkowania (temperamentalne i inne)** → **zdarzenie aktywizujące (typ stresora)** → **doświadczanie napięcia** → **strategie radzenia sobie** → **spostrzeganie podobnych zdarzeń w przyszłości**.
Strategie trzeba rozwinąć, np.: przekonania i myśli → emocje → działanie · działanie → emocje · brak działania → przewartościowanie → działanie.

## Ważne zasady interpretacji
- analiza w **jednym paradygmacie** teoretycznym (nie mieszamy teorii z różnych paradygmatów),
- zbieramy i interpretujemy tylko dane **związane z celem** (zachowanie w obliczu stresu),
- hipotezy w **terminach psychologicznych**, nie potocznych; powinny **wyjaśniać**, a nie tylko klasyfikować – **diagnoza funkcjonalna, a nie nozologiczna**,
- warto określać **stopień pewności** („najprawdopodobniej…”, „można przypuszczać…”),
- na wysoką ocenę – dobra **agregacja danych**, która uchwyca indywidualność osoby.

## Portfolio diagnostyczne
- **Obserwacja i rozmowa nr 1**: dane obserwacyjne (gestykulacja, mimika, postawa, emocje, sposób mówienia, wygląd), relacja diagnostyczna z **recypatią**, tabela **hipotez z przesłankami** (numery wypowiedzi z transkrypcji, np. „H1: osoba unika kontaktów towarzyskich w trudnych sytuacjach”).
- Hipotezy dotyczą m.in.: typów stresujących sytuacji, stresorów, reakcji stresowych, **oceny pierwotnej wg Lazarusa** (**wyzwanie czy zagrożenie**), wsparcia społecznego, elastyczności strategii, dominującego stylu.
- **Kwestionariusz nr 1 – COPE** (radzenie sobie w sytuacjach stresowych): procedura, wyniki surowe i przeliczone, **przedziały ufności**, tabela, interpretacja – czy przeważają strategie **aktywne czy unikowe**. Skale m.in.: aktywne radzenie sobie, planowanie, poszukiwanie wsparcia instrumentalnego i emocjonalnego, zwrot ku religii, pozytywne przewartościowanie, akceptacja, koncentracja na emocjach, zaprzeczanie, odwracanie uwagi, zaprzestanie działań, zażywanie środków psychoaktywnych, poczucie humoru.
- **Obserwacja i rozmowa nr 2** – zmiany w zachowaniu w porównaniu z pierwszą rozmową.
- **Kwestionariusz nr 2 – EAS** (temperament): podskale **Emocjonalność, Strach, Złość, Aktywność, Towarzyskość**; przedziały ufności w **stenach**.
- **Metoda projekcyjna** (fakultatywnie) – opowiadania do 2–3 tablic.
- **Tabela wniosków** z różnych źródeł (rozmowa, obserwacja, kwestionariusz) + **załączniki** (arkusze, transkrypcje).

> Na pamięć: raport = 4 pytania (jak? od czego? dlaczego? jak skutecznie?) · COPE = strategie · EAS = temperament · diagnoza funkcjonalna, nie nozologiczna.`,
      flashcards: [
        ["Maksymalna objętość raportu (integracji danych)", "4 strony; czcionka 12 pt, odstęp 1,5, strony ponumerowane."],
        ["4 pytania diagnostyczne w badaniu radzenia sobie ze stresem", "Jak osoba radzi sobie ze stresem? Od czego zależy wybór strategii? Dlaczego stosuje te strategie? Jak efektywnie radzi sobie ze stresem?"],
        ["Najważniejsza część raportu", "Integracja danych z różnych metod i wnioski (pkt 6) – decyduje o ocenie."],
        ["Schemat mechanizmu radzenia sobie ze stresem", "Uwarunkowania → zdarzenie aktywizujące (stresor) → doświadczanie napięcia → strategie radzenia sobie → spostrzeganie podobnych zdarzeń w przyszłości."],
        ["Luki diagnostyczne", "Informacje, których jeszcze brakuje, by w pełni zrealizować cel diagnozy (obszary diagnostycznej penetracji)."],
        ["Diagnoza funkcjonalna vs nozologiczna", "Funkcjonalna wyjaśnia mechanizm i przyczyny zachowania; nozologiczna tylko klasyfikuje (np. do jednostki chorobowej)."],
        ["Czy w raporcie można łączyć teorie z różnych paradygmatów?", "Nie – analiza w ramach jednego paradygmatu teoretycznego."],
        ["Jak formułuje się hipotezy w portfolio?", "W terminach psychologicznych, z przesłankami (numerami wypowiedzi z transkrypcji), związane z celem badania."],
        ["Ocena pierwotna wg Lazarusa", "Czy sytuacja stresowa jest odbierana jako wyzwanie, czy jako zagrożenie."],
        ["Co mierzy kwestionariusz COPE?", "Sposoby (strategie) radzenia sobie w sytuacjach stresowych – np. aktywne radzenie sobie, planowanie, wsparcie, zaprzeczanie, humor."],
        ["Co mierzy kwestionariusz EAS?", "Temperament: Emocjonalność, Strach, Złość, Aktywność, Towarzyskość."],
        ["W jakich jednostkach podaje się przedziały ufności dla EAS?", "W stenach."],
        ["Na co zwrócić uwagę interpretując wyniki COPE?", "Czy przeważają aktywne, czy unikowe sposoby radzenia sobie ze stresem."],
        ["Recypatia w portfolio", "Uczucia, refleksje i wrażenia badającego wobec osoby badanej – opisywane w relacji diagnostycznej."],
        ["Zasoby osoby badanej w raporcie", "Zewnętrzne i wewnętrzne – te, z których korzysta (i jaką pełnią funkcję), oraz te, których nie wykorzystuje."],
        ["Jak wyrażać stopień pewności hipotez?", "Np. „Osoba badana najprawdopodobniej…”, „Można przypuszczać, że…”, „Na podstawie danych z rozmowy można przyjąć…”."]
      ],
      pairs: [
        ["COPE", "strategie radzenia sobie ze stresem"],
        ["EAS", "temperament: emocjonalność, strach, złość, aktywność, towarzyskość"],
        ["Lazarus – ocena pierwotna", "wyzwanie czy zagrożenie"],
        ["Diagnoza funkcjonalna", "wyjaśnia mechanizm, nie tylko klasyfikuje"],
        ["Luki diagnostyczne", "czego jeszcze brakuje do celu diagnozy"],
        ["Pkt 6 raportu", "integracja danych – najważniejsza część"],
        ["Przedziały ufności EAS", "w stenach"],
        ["Raport", "maks. 4 strony"],
        ["Metoda projekcyjna", "fakultatywnie: opowiadania do 2–3 tablic"],
        ["Hipoteza w portfolio", "terminy psychologiczne + przesłanki z transkrypcji"],
        ["Zdarzenie aktywizujące", "typ stresora"],
        ["Dane identyfikacyjne", "trzeba je usunąć z całości materiałów"]
      ],
      quiz: [
        { q: "Kwestionariusz EAS bada:", o: ["temperament", "strategie radzenia sobie ze stresem", "inteligencję", "depresję"], a: 0, e: "Podskale: Emocjonalność, Strach, Złość, Aktywność, Towarzyskość." },
        { q: "Kwestionariusz COPE służy do badania:", o: ["sposobów radzenia sobie w sytuacjach stresowych", "temperamentu", "osobowości wg Wielkiej Piątki", "lęku jako stanu i cechy"], a: 0, e: "Interpretujemy m.in. przewagę strategii aktywnych lub unikowych." },
        { q: "Która część raportu jest najważniejsza dla oceny?", o: ["integracja danych i odpowiedź na pytania diagnostyczne", "dane ogólne o osobie badanej", "bibliografia", "podpis"], a: 0, e: "Liczy się dobra agregacja danych uchwytująca indywidualność osoby." },
        { q: "Hipotezy w raporcie powinny prowadzić do diagnozy:", o: ["funkcjonalnej, a nie nozologicznej", "nozologicznej, a nie funkcjonalnej", "wyłącznie ilościowej", "medycznej"], a: 0, e: "Hipotezy mają wyjaśniać, a nie tylko klasyfikować." },
        { q: "Ocena pierwotna według Lazarusa dotyczy tego, czy sytuacja jest odbierana jako:", o: ["wyzwanie czy zagrożenie", "przyjemna czy nieprzyjemna", "znana czy nowa", "krótka czy długa"], a: 0, e: "Jeden z obszarów hipotez w portfolio." },
        { q: "Czy w interpretacji można łączyć teorie z różnych paradygmatów?", o: ["nie – analiza w jednym paradygmacie", "tak, im więcej, tym lepiej", "tak, ale tylko w bibliografii", "tylko za zgodą osoby badanej"], a: 0, e: "Zasada spójności teoretycznej raportu." },
        { q: "Luki diagnostyczne to:", o: ["informacje, których brakuje do pełnej realizacji celu diagnozy", "błędy w transkrypcji", "nieobecności na zajęciach", "pytania bez odpowiedzi w teście"], a: 0, e: "Pkt 9 raportu – obszary diagnostycznej penetracji." },
        { q: "Maksymalna objętość raportu (integracji danych) to:", o: ["4 strony", "1 strona", "10 stron", "brak limitu"], a: 0, e: "Czcionka 12 pt, odstęp 1,5." },
        { q: "Przedziały ufności dla wyników EAS podaje się w:", o: ["stenach", "procentach", "punktach surowych", "skali IQ"], a: 0, e: "Zgodnie z podręcznikiem testu." }
      ]
    }
  ]
});
