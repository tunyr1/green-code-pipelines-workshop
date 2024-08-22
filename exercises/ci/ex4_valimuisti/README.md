# Harjoitus 4 - Välimuisti

Tällä hetkellä haemme kaikki riippuvaisuudet aina eri puolilta internetin syövereitä vaikka ne eivät olisikaan muuttuneet sitten viime ajon. Muutetaan tilannetta ottamalla välimuistit käyttöön.

- aseta actions/setup-node@v4 hyödyntämään npm välimuistia
- tallenna node_modules kansion sisältö välimuistiin https://github.com/actions/cache avulla
- suorita `npm ci` vain mikäli riippuvuuksia ei löydy välimuistista
