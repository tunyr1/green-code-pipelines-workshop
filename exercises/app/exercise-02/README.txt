Suurin pullonkaula on korjattu, mikä paljastaa nyt pienemmän, mutta
merkityksellisen poikkeavuuden suorituskyvyssä. Pääkaupunki-kohtaiset
rajapintapolut ovat noin 2x hitaampia kuin maa-kohtaiset. Vertaa esim
seuraavien komentojen tuloksia keskenään:

ab -n 100 -c 10 'http://127.0.0.1:8080/temperature/country/FI'

ab -n 100 -c 10 'http://127.0.0.1:8080/temperature/country/FI/capital'

1) Tutki pystytkö profilointityökalulla (esim. 0x) selvittämään mistä ero
   johtuu? (vinkki: profiloi esim. yo. polkuja erikseen ja katso näkyykö niissä
   eroja.)

2) Pohdi, voidaanko me välttyä ylimääräiseltä työltä pääkaupunkien osalta?
   (vinkki: haetaanko me esim. jostakin ulkopuolisesta API:sta staattista
    dataa, joka voitaisiin säilöä paikallisesti?)

3) Ratkaise pullonkaula (vaatii tietokantaskeeman muutosta ja datan hakemista
   yhdestä meidän sovelluksen ulkopuolisesta API-rajapinnasta.)
