# 🇬🇧 Exercise 1 - Limiting runs

In the initial situation, continuous integration is now run for every change regardless of branches, files, etc. First, let's make the following changes to our solution:

- jobs are started only for the main branch (main) and for pull requests that target the main branch
- set a maximum runtime limit of 3 minutes
- no jobs are started in situations where only the README.md and/or LICENSE files have changed
- new changes to the pull request's source branch cancel previous unfinished jobs

Bonus: What happens is you make the following change to the package.json file
`"test": "mocha --exit true"` -> `"test": "mocha"`

# 🇫🇮 Harjoitus 1 - Ajojen rajaaminen

Alkutilanteessa jatkuva integraatio ajetaan nyt jokaiselle muutokselle haaroista, tiedostoista ynnä muusta riippumatta. Tehdään ensiksi seuraavat muutokset ratkaisuumme:

- käynnistetään ajot vain päähaaraan (main) ja pull requesteille, jotka kohdistuvat päähaaraan
- asetetaan ajoille 3 minuutin maksimi aikaraja
- ei käynnistetä ajoja tilanteissa, joissa vain README.md ja/tai LICENSE tiedostoihin on tullut muutoksia
- uudet muutokset pull requestin lähdehaaraan peruvat aiemmat keskeneräiset ajot

Bonus: Mitä tapahtuu teet seuraavanlaisen muutoksen package.json tiedostoon
`"test": "mocha --exit true"` -> `"test": "mocha"`

