const axios = require('axios')

const express = require('express')
const app = (module.exports = express())
const port = 8080

const Database = require('better-sqlite3')
const db = new Database('database.sqlite', { readonly: true, fileMustExist: true })

const _ = require('lodash')

const respond = (res, status, body) => {
  res.contentType('application/json')
  res.status(status)
  res.send(body)
}

const getTemperature = async (lat, long) => {
  const response = await axios.get(`http://127.0.0.1:3001/temperature?lat=${lat}&long=${long}`)
  const temperature = response.data.temperature
  return temperature
}

const getTemperatures = async (coordinates) => {
  const temperatures = []
  for (let i = 0; i < coordinates.length; i++) {
    const { lat, long } = coordinates[i]
    const temperature = await getTemperature(lat, long)
    temperatures[i] = { temperature }
  }
  return temperatures
}

const getCoordinates = async (cityName, countryCode) => {
  const url = 'http://127.0.0.1:3002/geocode'
  const response = await axios.get(url, { params: { q: `${cityName},${countryCode}` } })
  const coordinates = response.data
  return coordinates
}

app.get('/', (req, res) => {
  respond(res, 200, { msg: 'Hello World!' })
})

app.get('/country', (req, res) => {
  const query = db.prepare('select ctr.name_common as name, cca2 as code from country ctr')
  const rows = query.all()
  respond(res, 200, rows)
})

app.get('/temperature/country/:countryCode', async (req, res) => {
  const countryCode = req.params.countryCode

  const query = db.prepare('select name_common as country, lat, long from country where cca2 like $countryCode')
  const row = query.get({ countryCode })

  if (row) {
    const { country, lat, long } = row
    const temperature = await getTemperature(lat, long)
    respond(res, 200, { country, temperature })
  } else {
    respond(res, 404)
  }
})

app.get('/temperature/country/:countryCode/capital', async (req, res) => {
  const countryCode = req.params.countryCode

  const query = db.prepare('select cap.name as city_name from capital cap join country ctry on ctry.id = cap.country_id where ctry.cca2 like $countryCode')
  const row = query.get({ countryCode })

  if (row) {
    const cityName = row.city_name
    const { lat, long } = await getCoordinates(cityName, countryCode)
    const temperature = await getTemperature(lat, long)
    respond(res, 200, { city: cityName, country: countryCode, temperature })
  } else {
    respond(res, 404)
  }
})

app.get('/temperature/region/:regionName/country', async (req, res) => {
  const region = req.params.regionName

  const query = db.prepare('select ctr.name_common as country, lat, long from country ctr where region like $region or subregion like $region')
  const rows = query.all({ region })

  const temperatures = await getTemperatures(rows)
  const countryNames = rows.map((row) => {
    return { country: row.country }
  })
  const result = _.merge(countryNames, temperatures)
  respond(res, 200, result)
})

app.get('/temperature/region/:regionName/capital', async (req, res) => {
  const region = req.params.regionName

  const query = db.prepare('select cap.name as city, co.cca2 as country from capital cap join country co on co.id = cap.country_id where co.region like $region or co.subregion like $region')
  const capitals = query.all({ region })

  const coordinates = await Promise.all(capitals.map(({ city, country }) => getCoordinates(city, country)))
  const temperatures = await getTemperatures(coordinates)
  const result = _.merge(capitals, temperatures)
  respond(res, 200, result)
})

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
