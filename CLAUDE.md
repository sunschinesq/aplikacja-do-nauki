# Notatki dla Claude

## Przypomnienia dla Julii
- Gdy Julia doda notatki/fiszki o **Pawłowie, Bandurze lub Piagecie** (lub innych psychologach bez kotka),
  przypomnij jej, że czekają na nie kotki psychologów w albumie (`CATS` w `app.js`, pole `psych: true`,
  odblokowanie przez `x.know(/Nazwisko/, n)` albo `x.topic(tid)`). Zaproponuj ich dodanie.

## Zasady pracy
- Po każdej zmianie widocznej dla Julii dopisz wpis NA GÓRZE `data/zmiany.js` (nowe, rosnące `v`).
- Sprawdzaj `node --check app.js` i testy Playwright przed commitem.
