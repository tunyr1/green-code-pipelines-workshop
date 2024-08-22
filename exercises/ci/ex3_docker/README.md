# 🇬🇧 Exercise 3 - Docker

Creating the Docker image seems to take the most time. Let's make the following changes to it:

- change the docker base image to a smaller option
- change the content of the Dockerfile so that the parts that change less frequently are defined in the file first
- enable multi-stage when creating a Docker image. Install the dependencies in the first part and move to the production image only the necessary files.
- isolate the creation of the Docker image as its own job, which is run in parallel with the previous job

These links might make this section easier (or not):

- https://hub.docker.com/_/node/tags?page=1&name=18
- https://github.com/wagoodman/dive
- https://docs.docker.com/build/building/multi-stage/
- https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow

### Note
If you struggle to find the answer to this exercise, don't worry – just read the solution and do your best to 
understand it. Then copy the solution and move on. We are not here to learn the ins and outs of Docker images and  
GitHub Action syntax. It is much more important start to think about the principles of how and when can we avoid 
unnecessary computation, and when does it make sense.


-------------------------------------------------------------------------------------


# 🇫🇮 Harjoitus 3 - Docker

Docker-kuvan luontiin vaikuttaisi menevän eniten aikaa. Tehdään siihen seuraavat muutokset:

- vaihda docker pohjakuva pienempään vaihtoehtoon
- muuta Dockerfilen sisältöä siten, että harvemmin muuttuvat osat ovat on määritelty tiedostossa ensin
- ota multi-stage käyttöön Docker-kuvan luonnissa. Asenna riippuvuudet ensimmäisessä osassa ja siirrä tuotantokuvaan vain välttämättömät tiedostot.
- eristä Docker-kuvan luonti omaksi job:ksi, joka ajetaan aiemman jobin kanssa rinnakkain

Nämä linkit saattavat helpottaa tämän osion tekemistä (taikka sitten ei):

- https://hub.docker.com/_/node/tags?page=1&name=18
- https://github.com/wagoodman/dive
- https://docs.docker.com/build/building/multi-stage/
- https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow

### Huomio tehtävästä
Jos tämä harjoitus tökkii pahasti, älä huoli – lue tehtävän ratkaisu ajatuksen kanssa, kopioi se ja siirry sitten eteenpäin. 
Workshopin tarkoitus ei ole opettaa Docker-imagen luonti läpikotaisin, saatika paasata GitHub Action -syntaksista. 
On paljon hyödyllisempää alkaa miettimään, miten ja milloin voimme välttää turhaa laskentaa, ja milloin se on jokseenkin 
järkevää.
