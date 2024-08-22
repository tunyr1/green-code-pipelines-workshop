# 🇬🇧 Exercise 4 - Cache

At the moment, we always search for all the dependencies from different parts of the internet, 
even if they haven't changed since the last time. 

Let's change the situation by enabling caches.

- set actions/setup-node@v4.0.3 to use npm cache
- cache the contents of the node_modules folder using https://github.com/actions/cache
- run `npm ci` only if the dependencies are not found in the cache

### Note
If you struggle to find the answer to this exercise, don't worry – just read the solution and do your best to
understand it. Then copy the solution and move on. We are not here to learn the ins and outs of Docker images and  
GitHub Action syntax. It is much more important start to think about the principles of how and when can we avoid
unnecessary computation, and when does it make sense.


---------------------------------------------------------------------------------


# 🇫🇮 Harjoitus 4 - Välimuisti

Tällä hetkellä haemme kaikki riippuvaisuudet aina eri puolilta internetin syövereitä vaikka ne eivät olisikaan 
muuttuneet sitten viime ajon. 

Muutetaan tilannetta ottamalla välimuistit käyttöön.

- aseta actions/setup-node@v4.0.3 hyödyntämään npm välimuistia
- tallenna node_modules kansion sisältö välimuistiin https://github.com/actions/cache avulla
- suorita `npm ci` vain mikäli riippuvuuksia ei löydy välimuistista

### Huomio tehtävästä
Jos tämä harjoitus tökkii pahasti, älä huoli – lue tehtävän ratkaisu ajatuksen kanssa, kopioi se ja siirry sitten eteenpäin.
Workshopin tarkoitus ei ole opettaa Docker-imagen luonti läpikotaisin, saatika paasata GitHub Action -syntaksista.
On paljon hyödyllisempää alkaa miettimään, miten ja milloin voimme välttää turhaa laskentaa, ja milloin se on jokseenkin
järkevää.