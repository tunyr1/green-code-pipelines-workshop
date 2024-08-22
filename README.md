Knowit JS Guild presents: Green code pipelines workshop
=======================================================

### Forked shamelessly from: Koura – Green ICT-työpaja

- Original repo: https://github.com/Koura/greenict-tyopaja
- [Original tieke workshop video (Katsaus käytännön koodioptimoinnin tekniikoihin)](https://www.youtube.com/watch?v=fpWtVumCP80) 
    - Video contains spoilers: you can use it to get past difficult exercises 


First, you do not need to run this demo app locally to complete thius workshop!
----------------------------------------------------------------------------
For this pipeline workshop, 

__we will only do the exercises in  `./exercises/ci`, which are about Docker containers and GitHub Actions__. 

The results are verified on GitHub-hosted runners for the most part. 
So you don't have to install anything, unless you want to.

The third exercise (`exercises/ci/ex3_docker`) can be easier if you have a local Docker installation, 
for example you can use the dive tool or Docker desktop to inspect the sizes of each docker layer. 

However, you don't really need to do that, if you don't want to – you can just make the changes to the Dockerfile and 
run the GitHub Action, and hope for the best. 

Finally, you can take a look at the solution and check if your answer was correct, pretty close or... 
maybe today just wasn't your day ¯\_(ツ)_/¯. Just copy the exercise solution and move on. 

### Remember!

The exercises are here to make your brain think about the general principles of green computing. The key is not in 
memorising GitHub Actions syntax or mastering the use of its (surprisingly horrible) documentation. Also you might 
struggle with Docker, but remember that's not the essence of the exercise.

So don't panic if you get stuck, just **copy the solution**, **understand the solution** (at least the main idea) and ask yourself: 

Why would we want to do these things? When would they make sense?

Enough yapping, let's get on with it!
-------------------------------------

Proceed to the first exercise: [exercises/ci/ex1_ajojen_rajaaminen/README.md](exercises/ci/ex1_ajojen_rajaaminen/README.md)

------------------------------------------------------------------------

# ...


🇬🇧 If you nevertheless want to run the application....
------------------------------------------------------------------------

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


------------------------------------------------------------------------


🇫🇮 Jos kaikesta huolimatta haluat käynnistää sovelluksen....
------------------------------------------------------------------------

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