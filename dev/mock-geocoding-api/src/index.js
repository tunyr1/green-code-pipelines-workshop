const express = require('express')
const app = (module.exports = express())
const port = 3002

const Database = require('better-sqlite3');
const db = new Database('geocoding.sqlite', {readonly: true, fileMustExist: true});

const sleep = ms => new Promise(r => setTimeout(r, ms));

const respond = async (res, status, body) => {
    await sleep(100); // Simulate network latency
    res.contentType('application/json');
    res.status(status);
    res.send(body)
}

app.get('/', async (req, res) => {
  await respond(res, 200, {msg: 'Hello World!'});
})

app.get('/geocode', async (req, res) => {
    res.contentType('application/json');

    const searchQuery = req.query.q;
    
    if (!searchQuery) {
        await respond(res, 404);
    } else {
        const [cityName, countryCode] = searchQuery.split(',');
        const query = db.prepare('select lat, long from city where name like $cityName and country_code like $countryCode');
        const coordinates = query.get({cityName, countryCode});
        if (coordinates) {
            await respond(res, 200, coordinates);
        } else {
            await respond(res, 404);
        }
    }
})

app.listen(port, () => {
    console.log(`Mock geocoding API listening on port ${port}`)
})
