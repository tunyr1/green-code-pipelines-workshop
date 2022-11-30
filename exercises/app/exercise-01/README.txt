Aluekohtaiset rajapintakutsut ovat erittäin hitaita. Sovelluksessa on kaksi
aluekohtaista rajapinta-polkua, joita voi kokeilla esimerkiksi seuraavasti:

Euroopan maiden lämpötilat:
curl 'http://localhost:8080/temperature/region/Europe/country'

Euroopan pääkaupunkien lämpötilat:
curl 'http://localhost:8080/temperature/region/Europe/capital'

1) Tutki kuinka hitaita rajapinnat ovat (käytä jotakin suorituskykytestaustyökalua,
   kuten apachebench (https://httpd.apache.org/docs/2.4/programs/ab.html))

2) Selvitä missä mahdollinen pullonkaula on profiloimalla sovellusta
   profilointityökalun avulla (esim. 0x)

3) Kun olet tunnistanut suurimman pullonkaulan, tee siihen korjaus
   (vinkki: suurin pullonkaula on yhden funktion sisällä. Pohdi lämpötilojen hakua
   ulkoisesta API:sta.)
