# aplikacja-do-nauki

Prosta aplikacja webowa do nauki na II roku psychologii (1 semestr). Działa w przeglądarce, także w Safari na iPadzie. Nie potrzebuje instalacji ani serwera: to same pliki HTML, CSS i JS.

## Przedmioty

Podział odpowiada folderom z Dysku Google („drugi rok JULIA / 1 semestr”):

| Przedmiot | Stan |
|---|---|
| Psychologia osobowości | 11 tematów: notatki, 188 fiszek, 73 pytania quizowe, 79 prawdziwych zagadnień egzaminacyjnych z odpowiedziami |
| Metodologia badań i statystyka | 11 tematów (wykład + ćwiczenia): notatki, 201 fiszek, 165 pytań (w tym wszystkie 100 pytań ze statystyki z kluczem) |
| Wprowadzenie do diagnostyki psychologicznej | 10 tematów (9 wykładów + słowniczek): notatki, 182 fiszki, 66 pytań, 51 zagadnień z listy pytań egzaminacyjnych |
| Diagnoza sprawności poznawczych | 8 tematów (etyka diagnozy, testy, trafność i SEM, adaptacja): notatki, 86 fiszek, 36 pytań |
| Podstawy pomocy psychologicznej | 5 tematów (rozmowa diagnostyczna): notatki, 61 fiszek, 24 pytania |

Cała aplikacja jest w różowej kolorystyce (jasny i ciemny motyw).

## Funkcje

- **Notatki** – przejrzyste opracowanie każdego tematu (tabele, listy, „Na pamięć”).
- **Fiszki** – dotknij karty, żeby zobaczyć odpowiedź, i oceń się: „Umiem” albo „Nie umiem”. Działa system pudełek (Leitnera): fiszki, których nie umiesz, wracają częściej.
- **Quiz** – pytania jednokrotnego wyboru z wyjaśnieniem i zapisem najlepszego wyniku.
- **Dzienny cel i seria dni** – na stronie głównej kółko „Cel na dziś” (domyślnie 20 odpowiedzi: fiszki, quizy, pytania otwarte, egzamin) i 🔥 seria dni z osiągniętym celem (plus rekord). Cel można zmienić w statystykach (10–100).
- **Statystyki tygodnia** – ostatnie 7 dni: wykres odpowiedzi dziennie z linią celu (dotknij słupka, żeby zobaczyć szczegóły dnia), skuteczność, nowo opanowane fiszki, dni z celem, porównanie z poprzednim tygodniem i podział na przedmioty.
- **Szukaj** – jedno pole na stronie głównej przeszukuje notatki, fiszki i pytania ze wszystkich przedmiotów (bez znaczenia wielkość liter, polskie znaki i końcówki). Wynik z notatki przenosi od razu do właściwej sekcji.
- **Zakładki w notatkach** – gwiazdka ☆ przy każdym nagłówku sekcji. Lista zakładek (⭐ na stronie głównej) prowadzi prosto do zaznaczonego fragmentu.
- **Pytania otwarte w stylu egzaminu** – „Omów: …” dla każdej sekcji notatek (seria 10 pytań z przedmiotu albo z tematu). Piszesz odpowiedź, a aplikacja pokazuje, które kluczowe pojęcia z notatki udało się użyć, wzorcową odpowiedź i ocenę: umiałam / częściowo / nie umiałam. Najpierw trafiają pytania nieprzerobione i te, z którymi było trudno. Temat może mieć też własne pytania w polu `open`.
- **Próbny egzamin z metodologii** – 30 losowych pytań, 30 minut, zaliczenie od 16 – jak na prawdziwym egzaminie. Można zmieniać odpowiedzi i skakać między pytaniami, wynik i błędy z wyjaśnieniami pojawiają się po oddaniu (albo po końcu czasu). Historia podejść zapisuje się w aplikacji. Inny przedmiot dostanie egzamin po dopisaniu `exam: { questions, minutes, pass }` w jego pliku.
- **Plan na dziś** – z dat egzaminów i postępów aplikacja codziennie układa listę: ile fiszek (nowe + powtórki, ostatni dzień przed egzaminem zostaje na powtórkę), quiz z najsłabszego tematu, pytania otwarte (od 3 tygodni przed egzaminem), próbny egzamin (od 10 dni przed). Fiszki odhaczają się same, resztę odhacza się ręcznie.
- **Tryb skupienia (pomodoro)** – 15/25/45/50 minut nauki i przerwa; kotek śpi, gdy się uczysz, i budzi się na przerwę. Licznik działa w tle w całej aplikacji (🍅 w rogu ekranu), na koniec rundy krótki dźwięk. Minuty i sesje są w statystykach.
- **Fiszki inaczej** – „🔄 na odwrót” (widzisz odpowiedź, przypominasz sobie pojęcie) i „⌨️ z pisaniem” (wpisujesz odpowiedź, aplikacja podświetla trafione słowa kluczowe i podpowiada, czy umiesz).
- **Co nowego** – po każdej aktualizacji przy otwarciu aplikacji pokazuje się okienko z nowościami (lista w `data/zmiany.js`, nowy wpis dopisuje się na górze); historia zmian pod „✨ Co nowego” na dole strony głównej.
- **Gra w pary** – 6 krótkich fiszek (oraz par z pola `pairs` tematu – skróconych wersji dłuższych fiszek) z przedmiotu albo tematu: łączysz pytania z odpowiedziami na czas; zapisuje się rekord.
- **🏠 Wirtualny kotek** (jak Pou) – za naukę zbiera się łapki 🐾 (2 za dobrą odpowiedź, 1 za próbę, 20 za cel dnia, 15 za sesję skupienia, 10–20 za wyzwanie dnia, 1 za pogłaskanie kotka na ekranie). W zakładce „🏠 Kotek” kotka się karmi (jedzenie za łapki), kąpie, bawi się z nim i kładzie spać; najedzenie, energia, zabawa i czystość powoli spadają, a podczas snu energia rośnie. W sklepie są czapki, okulary, ozdoby na szyję i tła pokoju, a wygląd kotka wybiera się spośród kotków z albumu. Przy pierwszym uruchomieniu aplikacja pyta o imię użytkowniczki i kotka; kotki zwracają się po imieniu.
- **🎮 Gry** (strona główna → „🎮 Gry”, przycisk w przedmiocie albo zakładka „🎮 Gry” w każdym temacie; zakres: cały przedmiot lub jeden temat): gra w pary, **Kto to powiedział?** (pojęcie → autor), **Prawda czy fałsz** (60 s, przesuwanie karty), **Ułóż po kolei** (stadia, etapy, fazy), **Memory** (4×4), **Wisielec** (kotek zjada rybki za pomyłki), **Pojedynek z kotkiem** (quiz na punkty), **Uzupełnij lukę** (zdania z notatek bez słowa kluczowego) oraz **Kotkowe wyzwanie dnia** (5 tych samych pytań przez cały dzień ze wszystkich przedmiotów; za 5/5 smakołyk 🐟, 7 dni z rzędu odblokowuje kotka Smakosza). Autorzy i sekwencje są w `data/gry.js`, reszta gier korzysta z fiszek, notatek i quizów.
- **Zadania ze statystyki** (metodologia) – generowane za każdym razem na nowo: stopnie swobody, istotność, wynik z, rozkład normalny i IQ, steny, wybór testu, wielkość efektu, siła korelacji, zapis APA, błędy I/II rodzaju, skale pomiarowe, średnia i mediana, η². Każde z wyjaśnieniem.
- **Zagadnienia egzaminacyjne 📌** – prawdziwe pytania z egzaminów (osobowość: 79 z pliku psychologia-osobowości-egzamin.pdf; diagnostyka: 51 z listy „Pytania egzamin”) z wzorcowymi odpowiedziami, jako pytania otwarte ze sprawdzaniem pojęć.
- **Próbne egzaminy** – test na czas we wszystkich przedmiotach (metodologia: 30 pytań/30 min/próg 16 jak na egzaminie; w pozostałych format orientacyjny, opisany na ekranie egzaminu) oraz **egzamin pisemny** z prawdziwych zagadnień (osobowość, diagnostyka): losowe pytania otwarte na czas, potem wzorce i samoocena 0–2 pkt.
- **Album kotków 🐱** – 18 kotków do odblokowania nauką (seria dni, cel dnia, opanowane fiszki, quiz na 100%, gry, zadania ze statystyki, zdany egzamin…), w tym abstrakcyjne (miętowy, błękitny, tęczowy, kosmiczny, złoty) i 7 świątecznych: Halloween, Boże Narodzenie, Sylwester, Walentynki, Dzień Kota, Wielkanoc i urodzinowy (data urodzin w albumie). Odblokowane kotki odwiedzają ekran, a w święta częściej zagląda świąteczny.
- **Kotek, który reaguje** – w fiszkach, quizach i pytaniach otwartych obok siedzi szary kotek z chmurką: chwali za dobre odpowiedzi (i serie „3 z rzędu!”), pociesza przy błędach – a gdy nie wychodzi kilka razy pod rząd, podpowiada notatkę albo przerwę. Na koniec serii komentuje wynik.
- **Kotek na paskach postępu** – szary kotek przechodzi po każdym pasku do Twojego wyniku (w fiszkach i quizie idzie dalej po każdej odpowiedzi), a w spoczynku macha ogonkiem i mruga.
- **Kotki do głaskania** – co jakiś czas (mniej więcej co 1–2 minuty) zza krawędzi ekranu wygląda kotek w losowym kolorze: szary, rudy, czarny, biały, kremowy, szylkretowy, bury albo liliowy. Dotknij go, żeby go pogłaskać: zmruży oczka, zamruczy, puści serduszka i zniknie. Jeśli go nie pogłaszczesz, sam odejdzie po kilku sekundach. Liczba pogłaskanych kotków jest na dole strony głównej (i w kopii zapasowej).
- **Odliczanie do egzaminu** – w każdym przedmiocie przycisk „Ustaw datę egzaminu” (kalendarz iPada). Na stronie głównej najbliższy egzamin jest wyróżniony dużą kartą (licznik dni, postęp, plan fiszek na dzień, przyciski „Ucz się teraz” i „Quiz”, lista kolejnych egzaminów), a przedmioty z egzaminami są na górze listy, od najbliższego. Aplikacja podpowiada też, ile fiszek zostało do opanowania i ile to dziennie. Datę można zmienić lub usunąć w każdej chwili.
- **Postępy** zapisują się w przeglądarce na tym urządzeniu (localStorage) – razem z datami egzaminów, celem, statystykami, zakładkami i podejściami do egzaminu (wszystko to trafia też do kopii zapasowej). Odświeżanie strony ich nie kasuje; znikają tylko po wyczyszczeniu danych Safari, w trybie prywatnym albo (w zwykłej karcie Safari) po ok. 7 dniach bez otwierania strony.
- **Tryb offline** – po pierwszym otwarciu z internetem aplikacja zapisuje swoje pliki na urządzeniu (`sw.js`) i działa też bez sieci (na dole pojawia się wtedy plakietka „Brak internetu”). Z internetem zawsze pobiera najnowszą wersję, więc aktualizacje przychodzą same – najpóźniej przy kolejnym otwarciu.
- **Kopia zapasowa** – link na dole strony głównej. „Zapisz kopię” tworzy plik `nauka-kopia-RRRR-MM-DD.json` (na iPadzie: Zachowaj w Plikach → iCloud Drive), „Wybierz plik kopii” przywraca z niego wszystkie postępy. Gdy kopia jest starsza niż 7 dni, link przypomina o nowej.

## Uruchomienie na iPadzie (GitHub Pages)

1. Na GitHubie wejdź w repozytorium → **Settings** → **Pages**.
2. W „Build and deployment” wybierz **Source: Deploy from a branch**, gałąź z aplikacją i folder **/ (root)**, a potem **Save**.
3. Po 1–2 minutach aplikacja będzie pod adresem `https://<login>.github.io/aplikacja-do-nauki/`.
4. W Safari: **Udostępnij → Do ekranu początkowego**. Aplikacja otworzy się wtedy na pełnym ekranie, jak zwykła aplikacja.

Przy darmowym koncie GitHub Pages działa tylko w repozytoriach publicznych, więc treść notatek będzie widoczna dla każdego, kto zna adres.

## Struktura

```
index.html            strona
style.css             wygląd (jasny i ciemny motyw)
app.js                logika: nawigacja, fiszki, quiz, zapis postępów
data/osobowosc.js     treść: psychologia osobowości
data/metodologia.js   treść: metodologia i statystyka
data/metodologia-statystyka100.js   100 pytań ze statystyki (wygenerowane z PDF-ów z kluczem)
data/osobowosc-zagadnienia.js   79 zagadnień egzaminacyjnych z osobowości (pytania otwarte „real”)
data/diagnostyka.js   treść: wprowadzenie do diagnostyki psychologicznej
data/diagnostyka-zagadnienia.js 51 zagadnień egzaminacyjnych z diagnostyki
data/poznawcze.js     treść: diagnoza sprawności poznawczych
data/pomoc.js         treść: podstawy pomocy psychologicznej
data/gry.js           dane do gier: autorzy pojęć i sekwencje do układania
data/zmiany.js        lista zmian do okienka „Co nowego”
sw.js                 tryb offline (lista plików zapisywanych na urządzeniu)
```

Nowy plik z treścią trzeba dopisać w `index.html` i na liście `FILES` w `sw.js`. Po każdej zmianie widocznej dla użytkowniczki dopisz wpis na górze `data/zmiany.js`.

### Jak dodać treść do przedmiotu

Każdy temat w `data/*.js` ma postać:

```js
{
  id: "freud",
  title: "Psychoanaliza klasyczna (Freud)",
  notes: `## Nagłówek\n- punkt\n> Na pamięć: ...`,
  flashcards: [["pytanie", "odpowiedź"]],
  quiz: [{ q: "pytanie", o: ["A", "B", "C"], a: 1, e: "wyjaśnienie" }],
  open: [{ q: "pytanie otwarte (opcjonalnie)", a: "wzorcowa odpowiedź" }]
}
```

`a` to numer poprawnej odpowiedzi, liczony od 0. Opcjonalne `src` to źródło pytania (widoczne po odpowiedzi). Pytanie otwarte z `real: true` jest oznaczone jako prawdziwe zagadnienie egzaminacyjne.

Ustawienia egzaminów są w pliku przedmiotu: `exam: { questions, minutes, pass, note }` (test na czas) i `openExam: { questions, minutes, note }` (egzamin pisemny z pytań `real`).

## Dodawanie nowych materiałów

Nowe pliki najlepiej wrzucać do odpowiedniego folderu przedmiotu na Dysku („drugi rok JULIA / 1 semestr / …”) i napisać Claude'owi, do którego przedmiotu należą. Treść zostanie opracowana i dopisana do pliku przedmiotu w `data/`.
