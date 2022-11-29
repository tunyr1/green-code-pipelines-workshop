// RATKAISU 1/3: Luodaan skripti, joka tekee seuraavaa:
//
// 1) muokkaa capital-taulua tietokannassa lisäten siihen sarakkeet lat ja long
//    pääkaupungin koordinaattien tallennusta varten
//
// 2) Hakee jokaiselle pääkaupungille koordinaatit geokoodaus-API:sta
//
// 3) Tallentaa koordinaatit capital-tauluun

const axios = require('axios')
const _ = require('lodash')

const Database = require('better-sqlite3')
const db = new Database('database.sqlite', { fileMustExist: true })

const alterCapitalTable = () => {
    db.prepare('alter table capital add lat decimal').run()
    db.prepare('alter table capital add long decimal').run()
}

const getCoordinates = async (cityName, countryCode) => {
    const url = 'http://127.0.0.1:3002/geocode'
    const response = await axios.get(url, { params: { q: `${cityName},${countryCode}` } })
    const coordinates = response.data
    return coordinates
}

const getCapitals = () => {
    const query = db.prepare('select cap.id as capital_id, cap.name as capital_name, co.cca2 as country_code from capital cap join country co on co.id = cap.country_id')
    const rows = query.all()
    return rows;
}

const insertCoordinatesForCapital = (capital_id, lat, long) => {
    console.log(`Inserting coordinates for capital id ${capital_id}: ${lat}, ${long}`)
    const query = db.prepare('update capital set lat = $lat, long = $long where id = $id')
    query.run({id: capital_id, lat, long})
}

(async () => {
    alterCapitalTable()
    const capitals = getCapitals()

    let coordinates = [];
    for (let i = 0; i < capitals.length; i++) {
        const {capital_name, country_code} = capitals[i]
        coordinates[i] = await getCoordinates(capital_name, country_code)
    }

    const capitalsAndCoordinates = _.merge(capitals, coordinates);
    capitalsAndCoordinates.map(({capital_id, lat, long}) => {
        insertCoordinatesForCapital(capital_id, lat, long)
    });
})();
