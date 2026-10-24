# aplikacja-do-nauki

Prosta aplikacja webowa do nauki na II roku psychologii (1 semestr). Działa w przeglądarce, także w Safari na iPadzie. Nie potrzebuje instalacji ani serwera: to same pliki HTML, CSS i JS.

## Przedmioty

Podział odpowiada folderom z Dysku Google („drugi rok JULIA / 1 semestr”):

| Przedmiot | Stan |
|---|---|
| Psychologia osobowości | 11 tematów: notatki, 164 fiszki, 62 pytania quizowe |
| Metodologia badań i statystyka | w przygotowaniu |
| Wprowadzenie do diagnostyki psychologicznej | w przygotowaniu |
| Diagnoza sprawności poznawczych | w przygotowaniu |
| Podstawy pomocy psychologicznej | w przygotowaniu |

## Funkcje

- **Notatki** – przejrzyste opracowanie każdego tematu (tabele, listy, „Na pamięć”).
- **Fiszki** – dotknij karty, żeby zobaczyć odpowiedź, i oceń się: „Umiem” albo „Nie umiem”. Działa system pudełek (Leitnera): fiszki, których nie umiesz, wracają częściej.
- **Quiz** – pytania jednokrotnego wyboru z wyjaśnieniem i zapisem najlepszego wyniku.
- **Postępy** zapisują się w przeglądarce na tym urządzeniu (localStorage). Wyczyszczenie danych Safari je kasuje.

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
data/pozostale.js     pozostałe przedmioty (szkielet)
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

`a` to numer poprawnej odpowiedzi, liczony od 0.
