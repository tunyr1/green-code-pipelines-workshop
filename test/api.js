var app = require('../src/index.js')
var request = require('supertest')

describe('Testing hello world response', function () {
  describe('GET /', function () {
    it('should respond with message', function (done) {
      request(app).get('/').expect(200, 'Hello World!', done)
    })
  })

  describe('Call non-existent path', function () {
    it('should return missing response', function (done) {
      request(app).get('/unknown').expect(404, done)
    })
  })
})
