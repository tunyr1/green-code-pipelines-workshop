# Green ICT-työpaja

Green ICT -ekosysteemi 30.11 kestävän koodauksen työpaja #2

## Sovelluksen ajaminen

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
