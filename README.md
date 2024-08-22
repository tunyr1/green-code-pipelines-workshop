Knowit JS Guild presents: Green code pipelines workshop
=======================================================

### Forked shamelessly from: Koura - Green ICT-työpaja

- Original repo: https://github.com/Koura/greenict-tyopaja
- [Original tieke workshop video (Katsaus käytännön koodioptimoinnin tekniikoihin)](https://www.youtube.com/watch?v=fpWtVumCP80) 
    - Video contains spoilers: you can use it to get past difficult exercises 


--------------------------
🇬🇧 Running the application
--------------------------

In order to run the application and the background services it needs, you need the following tools on your computer:

- docker
- docker-compose
- nodejs (recommended: nvm)

You can easily use the node version that matches the application from the command line as follows:

```
nvm install 18.12.1
nvm use
```

You can enable the background services needed by the application by running the command:

```
docker-compose -f dev/docker-compose.yml up -d
```

This will start the following services:

- mock-geocode-api: geocoding service from which coordinates of capital cities are retrieved
- mock-weather-api: weather service from which temperature is retrieved based on coordinates

The application itself can be started by running the command:

```
npm start
```

------------------------
🇫🇮 Sovelluksen ajaminen
------------------------

Jotta voit ajaa sovellusta ja sen tarvitsemia taustapalveluja tarvitset koneellesi seuraavat työkalut:

- docker
- docker-compose
- nodejs (suositus: nvm)

Sovelluksen kanssa sopivan node version saat helposti käyttöön komentoriviltä seuraavasti:

```
nvm install 18.12.1
nvm use
```

Saat sovelluksen tarvitsemat taustapalvelut käyttöön ajamalla komennon:

```
docker-compose -f dev/docker-compose.yml up -d
```

Tämä käynistää seuraavat palvelut:

- mock-geocode-api: geokoodauspalvelu, josta haetaan pääkaupunkien koordinaatit
- mock-weather-api: sääpalvelu, josta haetaan lämpötila koordinaattien perusteella

Itse sovelluksen saa käyntiin ajamalla komento:

```
npm start
```