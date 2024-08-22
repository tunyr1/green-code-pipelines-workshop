# 🇬🇧 Exercise 5 - Parallel drives

We've already gone through one way to parallelize our runs using jobs, but with Github Actions we can also parallelize 
jobs using [matrices](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your -jobs) using

- form a matrix from `test` and `lint` stages
- run the pipeline again

What kind of problems does this simple parallelism bring?


### Note on the exercise
If you struggle to find the answer to this exercise, don't worry – just read the solution and do your best to
understand it. Then copy the solution and move on. We are not here to learn the ins and outs of Docker images and  
GitHub Action syntax. It is much more important start to think about the principles of how and when can we avoid
unnecessary computation, and when does it make sense.

---------------------------------------------------------------------------------


# 🇫🇮 Harjoitus 5 - Rinnakkaisajot

Olemme jo käyneet läpi yhden tavan rinnakkaistaa ajojamme jobien avulla, mutta Github Actionsin avulla voimme myös 
rinnakkaistaa jobeja [matriisien](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) avulla.

- muodosta `test` ja `lint` vaiheista matriisi
- vie muutokset ajoon

Millaisia ongelmia tämä yksinkertainen rinnakkaisuus tuo tullessaan?

### Huomio tehtävästä
Jos tämä harjoitus tökkii pahasti, älä huoli – lue tehtävän ratkaisu ajatuksen kanssa, kopioi se ja siirry sitten eteenpäin.
Workshopin tarkoitus ei ole opettaa Docker-imagen luonti läpikotaisin, saatika paasata GitHub Action -syntaksista.
On paljon hyödyllisempää alkaa miettimään, miten ja milloin voimme välttää turhaa laskentaa, ja milloin se on jokseenkin
järkevää.