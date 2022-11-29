# Harjoitus 2 - Fail fast

Voi ei! Viimeisimpään muutokseesi oli luikerrellut sisään huolettomasti tyyliteltyä koodia ja jatkuva integraation kaikki valot välkkyvät punaisena. Käy lisäämässä `src/index.js` tiedostoon tilannetta vastaava virhe. Esimerkiksi näin:

```
const app = (module.exports = express())
 const port = 8080
```

- vie muutoksesi Github Actionsin suoritettavaksi
- muuta ajo epäonnistumaan nopeammin koodin tyylittelyyn liittyvissä ongelmissa
