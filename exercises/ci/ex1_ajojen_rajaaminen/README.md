# Harjoitus 1 - Ajojen rajaaminen

Alkutilanteessa jatkuva integraatio ajetaan nyt jokaiselle muutokselle haaroista, tiedostoista ynnä muusta riippumatta. Tehdään ensiksi seuraavat muutokset ratkaisuumme:

- käynnistetään ajot vain päähaaraan (main) ja pull requesteille, jotka kohdistuvat päähaaraan
- asetetaan ajoille 3 minuutin maksimi aikaraja
- ei käynnistetä ajoja tilanteissa, joissa vain README.md ja/tai LICENSE tiedostoihin on tullut muutoksia
- uudet muutokset pull requestin lähdehaaraan peruvat aiemmat keskeneräiset ajot
