const express = require('express')
const app = (module.exports = express())
const port = 3002

const Database = require('better-sqlite3');
const db = new Database('geocoding.sqlite', {readonly: true, fileMustExist: true});


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/geocode', (req, res) => {
    res.contentType('application/json');

    const searchQuery = req.query.q;
    
    if (!searchQuery) {
        res.status(404);
        res.send();
    } else {
        const [cityName, countryCode] = searchQuery.split(',');
        const query = db.prepare('select lat, long from city where name like $cityName and country_code like $countryCode');
        const coordinates = query.get({cityName, countryCode});
        if (coordinates) {
            res.send(coordinates);
        } else {
            res.status(404);
            res.send();
        }
    }
})

app.listen(port, () => {
    console.log(`Application listening on port ${port}`)
})
  