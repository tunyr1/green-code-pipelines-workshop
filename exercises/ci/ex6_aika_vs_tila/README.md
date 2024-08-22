
# Exercise 6 - Time vs space

After parallelization, the downloading of dependencies is repeated in several places.
Could we sacrifice a little extra disk space in order to shorten the execution time?

- separate the downloading of dependencies into its own job
- package node_modules as a tar archive and save it using https://github.com/actions/upload-artifact
- set saved tar archives to be automatically deleted after 1 day
- download the tar archive in the other jobs of the pipeline https://github.com/actions/download-artifact

What happens if you try to save the node_modules folder without packaging?

### Note on the exercise
If you struggle to find the answer to this exercise, don't worry – just read the solution and do your best to
understand it. Then copy the solution and move on. We are not here to learn the ins and outs of Docker images and  
GitHub Action syntax. It is much more important start to think about the principles of how and when can we avoid
unnecessary computation, and when does it make sense.

---------------------------------------------------------------------------------

# Harjoitus 6 - Aika vs tila

Käydään seuraavaksi algoritmit ja tietorakenteet kursseiltakin tuttu periaate. Voisimmeko uhrata hieman lisätilaa 
levyltä säästääksemme aikaa suorituksen aikana? Rinnakkaistusten jäljiltä riippuvuuksien hakeminen toistuu useassa 
kohdassa, joten koitetaan soveltaa tätä periaatetta siihen.

- eriytä riippuvuuksien hakeminen omaksi jobikseen
- paketoi node_modules tar-arkistoksi ja tallenna se https://github.com/actions/upload-artifact avulla
- aseta tallennetut tar-arkistot poistumaan automaattisesta 1 päivän jälkeen
- lataa tar-arkisto muissa jobeissa https://github.com/actions/download-artifact

Mitä tapahtuu jos yrität tallentaa node_modules kansion ilman paketointia?

### Huomio tehtävästä
Jos tämä harjoitus tökkii pahasti, älä huoli – lue tehtävän ratkaisu ajatuksen kanssa, kopioi se ja siirry sitten eteenpäin.
Workshopin tarkoitus ei ole opettaa Docker-imagen luonti läpikotaisin, saatika paasata GitHub Action -syntaksista.
On paljon hyödyllisempää alkaa miettimään, miten ja milloin voimme välttää turhaa laskentaa, ja milloin se on jokseenkin
järkevää.