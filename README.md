# aplikacja-do-nauki

Prosta aplikacja webowa do nauki na II roku psychologii (1 semestr). Działa w przeglądarce, także w Safari na iPadzie. Nie potrzebuje instalacji ani serwera: to same pliki HTML, CSS i JS.

## Przedmioty

Podział odpowiada folderom z Dysku Google („drugi rok JULIA / 1 semestr”):

| Przedmiot | Stan |
|---|---|
| Psychologia osobowości | 11 tematów: notatki, 164 fiszki, 62 pytania quizowe |
| Metodologia badań i statystyka | 11 tematów (wykład + ćwiczenia): notatki, 201 fiszek, 165 pytań (w tym wszystkie 100 pytań ze statystyki z kluczem) |
| Wprowadzenie do diagnostyki psychologicznej | 10 tematów (9 wykładów + słowniczek): notatki, 182 fiszki, 66 pytań |
| Diagnoza sprawności poznawczych | 8 tematów (etyka diagnozy, testy, trafność i SEM, adaptacja): notatki, 86 fiszek, 36 pytań |
| Podstawy pomocy psychologicznej | 5 tematów (rozmowa diagnostyczna): notatki, 61 fiszek, 24 pytania |

Cała aplikacja jest w różowej kolorystyce (jasny i ciemny motyw).

## Funkcje

- **Notatki** – przejrzyste opracowanie każdego tematu (tabele, listy, „Na pamięć”).
- **Fiszki** – dotknij karty, żeby zobaczyć odpowiedź, i oceń się: „Umiem” albo „Nie umiem”. Działa system pudełek (Leitnera): fiszki, których nie umiesz, wracają częściej.
- **Quiz** – pytania jednokrotnego wyboru z wyjaśnieniem i zapisem najlepszego wyniku.
- **Odliczanie do egzaminu** – w każdym przedmiocie przycisk „Ustaw datę egzaminu” (kalendarz iPada). Na stronie głównej pojawia się baner z najbliższym egzaminem, a przy przedmiotach licznik dni. Aplikacja podpowiada też, ile fiszek zostało do opanowania i ile to dziennie. Datę można zmienić lub usunąć w każdej chwili.
- **Postępy** zapisują się w przeglądarce na tym urządzeniu (localStorage) – razem z datami egzaminów. Wyczyszczenie danych Safari je kasuje.

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
data/diagnostyka.js   treść: wprowadzenie do diagnostyki psychologicznej
data/poznawcze.js     treść: diagnoza sprawności poznawczych
data/pomoc.js         treść: podstawy pomocy psychologicznej
```

### Jak dodać treść do przedmiotu

Każdy temat w `data/*.js` ma postać:

```js
{
  id: "freud",
  title: "Psychoanaliza klasyczna (Freud)",
  notes: `## Nagłówek\n- punkt\n> Na pamięć: ...`,
  flashcards: [["pytanie", "odpowiedź"]],
  quiz: [{ q: "pytanie", o: ["A", "B", "C"], a: 1, e: "wyjaśnienie" }]
}
```

`a` to numer poprawnej odpowiedzi, liczony od 0. Opcjonalne `src` to źródło pytania (widoczne po odpowiedzi).

## Dodawanie nowych materiałów

Nowe pliki najlepiej wrzucać do odpowiedniego folderu przedmiotu na Dysku („drugi rok JULIA / 1 semestr / …”) i napisać Claude'owi, do którego przedmiotu należą. Treść zostanie opracowana i dopisana do pliku przedmiotu w `data/`.
