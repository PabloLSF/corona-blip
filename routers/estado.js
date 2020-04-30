var express = require('express');
var router = express.Router()
const request = require('request');
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://brasil.io/api/dataset/covid19/obito_cartorio/data/?format=json'
const api = apiAdapter(BASE_URL)

router.get('/estado/:estado', (req, res) => {
  var options = {
      'method': 'GET',
      'url': 'https://brasil.io/api/dataset/covid19/obito_cartorio/data/?format=json',
      'headers': { },
      "json": true
  };
  request(options, (error, response) => {
      let payload = response.body["results"].filter((e) => {
          return e.date == "2020-04-30" && e.state == "RS"
      });
      res.status(response.statusCode).send(payload);
  });
});

module.exports = router