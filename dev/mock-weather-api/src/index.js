const express = require('express')
const app = (module.exports = express())
const port = 3001

const Database = require('better-sqlite3');
const db = new Database('weather.sqlite', {readonly: true, fileMustExist: true});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/temperature', (req, res) => {
    res.contentType('application/json');
    
    const lat = req.query.lat;
    const long = req.query.long;

    const query = db.prepare('select temperature from temperature where lat = $lat and long = $long');
    const row = query.get({lat, long});

    if (row) {
        res.send(row);
    } else {
        res.status(404);
        res.send();
    }
});

app.listen(port, () => {
  console.log(`Weather API listening on port ${port}`)
})
