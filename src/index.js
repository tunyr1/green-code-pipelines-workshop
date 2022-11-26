const axios = require('axios')

const express = require('express')
const app = (module.exports = express())
const port = 3000

const Database = require('better-sqlite3')
const db = new Database('database.sqlite', { readonly: true, fileMustExist: true })

const _ = require('lodash')

const getTemperature = async (lat, long) => {
  const response = await axios.get(`http://127.0.0.1:3001/temperature?lat=${lat}&long=${long}`)
  const temperature = response.data.temperature
  return temperature
}

const getTemperatureForCountry = async ({ name, lat, long }) => {
  const temperature = await getTemperature(lat, long)
  return { name, temperature }
}

const getTemperatureForCity = async ({ city, country, lat, long }) => {
  const temperature = await getTemperature(lat, long)
  return { city, country, temperature }
}

const getCoordinates = async ({ city, country }) => {
  const url = 'http://127.0.0.1:3002/geocode'
  const response = await axios.get(url, { params: { q: `${city},${country}` } })
  const coordinates = response.data
  return coordinates
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/country', (req, res) => {
  res.contentType('application/json')

  const query = db.prepare('select ctr.name_common as name, cca2 as code from country ctr')
  const rows = query.all()
  res.send(rows)
})

app.get('/temperature/country/:countryCode', async (req, res) => {
  res.contentType('application/json')

  const countryCode = req.params.countryCode

  const query = db.prepare('select name_common as name, lat, long from country where cca2 like $countryCode')
  const row = query.get({ countryCode })

  if (row === undefined) {
    res.status(404)
    res.send()
  } else {
    const result = await getTemperatureForCountry(row)
    res.send(result)
  }
})

app.get('/temperature/country/:countryCode/capital', async (req, res) => {
  res.contentType('application/json')

  const countryCode = req.params.countryCode

  const query = db.prepare('select cap.name as name from capital cap join country ctry on ctry.id = cap.country_id where ctry.cca2 like $countryCode')
  const row = query.get({ countryCode })

  if (row) {
    const cityName = row.name
    const { lat, long } = await getCoordinates({ city: cityName, country: countryCode })
    const result = await getTemperatureForCity({ city: cityName, country: countryCode, lat, long })
    res.send(result)
  } else {
    res.status(404)
    res.send()
  }
})

app.get('/temperature/region/:regionName/country', async (req, res) => {
  res.contentType('application/json')

  const region = req.params.regionName

  const query = db.prepare('select ctr.name_common as name, lat, long from country ctr where region like $region or subregion like $region')
  const rows = query.all({ region })
  const results = await Promise.all(rows.map(getTemperatureForCountry))
  res.send(results)
})

app.get('/temperature/region/:regionName/capital', async (req, res) => {
  res.contentType('application/json')

  const region = req.params.regionName

  const query = db.prepare('select cap.name as city, co.cca2 as country from capital cap join country co on co.id = cap.country_id where co.region like $region or co.subregion like $region')
  const capitals = query.all({ region })
  const coordinates = await Promise.all(capitals.map(getCoordinates))
  const capitalsWithCoordinates = _.merge(capitals, coordinates)
  const results = await Promise.all(capitalsWithCoordinates.map(getTemperatureForCity))
  res.send(results)
})

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
