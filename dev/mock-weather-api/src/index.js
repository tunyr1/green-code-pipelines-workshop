const express = require('express')
const app = (module.exports = express())
const port = 3001

const Database = require('better-sqlite3');
const db = new Database('weather.sqlite', {readonly: true, fileMustExist: true});

const sleep = ms => new Promise(r => setTimeout(r, ms));

const respond = async (res, status, body) => {
    await sleep(100); // Simulate network latency
    res.contentType('application/json');
    res.status(status);
    res.send(body)
}

app.get('/', async (req, res) => {
    await respond(res, 200, {msg: 'Hello World!'});
});

app.get('/temperature', async (req, res) => {
    const lat = req.query.lat;
    const long = req.query.long;

    const query = db.prepare('select temperature from temperature where lat = $lat and long = $long');
    const row = query.get({lat, long});

    if (row) {
        await respond(res, 200, row);
    } else {
        await respond(res, 404);
    }
});

app.listen(port, () => {
  console.log(`Mock weather API listening on port ${port}`)
})
