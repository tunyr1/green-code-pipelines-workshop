# Harjoitus 3 - Docker

Docker-kuvan luontiin vaikuttaisi menevän eniten aikaa. Tehdään siihen seuraavat muutokset:

- vaihda docker pohjakuva pienempään vaihtoehtoon
- muuta Dockerfilen sisältöä siten, että harvemmin muuttuvat osat ovat on määritelty tiedostossa ensin
- ota multi-stage käyttöön Docker-kuvan luonnissa. Asenna riippuvuudet ensimmäisessä osassa ja siirrä tuotantokuvaan vai välttämättömät tiedostot.
- eristä Docker-kuvan luonti omaksi job:ksi, joka ajetaan aiemman jobin kanssa rinnakkain

Nämä linkit saattavat helpottaa tämän osion tekemistä:
https://hub.docker.com/_/node/tags?page=1&name=18
https://github.com/wagoodman/dive
https://docs.docker.com/build/building/multi-stage/
https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow
