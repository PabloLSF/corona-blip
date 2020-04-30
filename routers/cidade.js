var express = require('express');
var router = express.Router()
const request = require('request');
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://brasil.io/api/dataset/covid19/caso/data/?format=json'
const api = apiAdapter(BASE_URL)

router.get('/cidade/:cidade', (req, res) => {
  var options = {
      'method': 'GET',
      'url': 'https://brasil.io/api/dataset/covid19/caso/data/?format=json',
      'headers': { },
      "json": true
  };
  request(options, (error, response) => {
      let payload = response.body["results"].filter((e) => {
          return e.date == "2020-04-29" && e.city == "Acrelândia"
      });
      res.status(response.statusCode).send(payload);
  });
});

module.exports = router