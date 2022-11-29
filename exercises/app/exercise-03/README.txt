Kaikki rajapintapolut palauttavat nyt dataa yhtä nopeasti. Voitaisiinko me
nopeuttaa rajapintaa vielä esim. kyseenalaistamalla datan reaaliaikaisuus-
vaatimukset? Jos oletetaan, että lämpötila-datan ei tarvitse olla täysin reaali-
aikaista, vaan olisi hyväksyttävää että se on esim. 15 min vanhaa tietoa, niin
voimme suhtautua siihen eri tavalla. Silloin meidän ei tarvitsisi hakea
lämpötiloja kohteilla joka kerta sää-API:sta ja voisimme säilöä jo kerran
haetut lämpötilat välimuistissa.

1) Tutki esim. memoisoinnin (https://en.wikipedia.org/wiki/Memoization) avulla,
   miten paljon hyötyisimme siitä, jos lämpötiloja ei tarvitsisi hakea
   sää-API:sta kuin kerran (vinkki: lodashin memoize-funktio). Tämä on vain
   kokeilu, joten tässä ei tarvitse huolehtia välimuistin invalidoinnista esim.
   tietyn ajan kuluttua. Tässä riittää että saadaan kuva siitä, mitä hyötyjä tästä
   voisi olla.

BONUS: toteuta sellainen välimuistitus, joka invalidoi välimuistin tietyn ajan
       kuluttua (jonka jälkeen tuoreet lämpötilat haetaan uudestaa sää-apista).
