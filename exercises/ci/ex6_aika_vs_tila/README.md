# Harjoitus 6 - Aika vs tila

Käydään seuraavaksi algoritmit ja tietorakenteet kursseiltakin tuttu periaate. Voisimmeko uhrata hieman lisätilaa levyltä säästääksemme hieman aikaa suorituksen aikana? Rinnakkaistusten jäljiltä riippuvuuksien hakeminen toistuu useassa kohdassa, joten koitetaan soveltaa tätä periaatetta siihen.

- eriytä riippuvuuksien hakeminen omaksi jobikseen
- paketoi node_modules tar-arkistoksi ja tallenna se https://github.com/actions/upload-artifact avull
- lataa tar-arkisto muissa jobeissa https://github.com/actions/download-artifact

Mitä tapahtuu jos yrität tallentaa node_modules kansion ilman paketointia?
