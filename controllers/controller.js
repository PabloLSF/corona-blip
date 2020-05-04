const axios = require('axios')
var regex = require('./regex')
const request = require('request')

exports.getEstado = (req, res) => {
    const data = `${req.body.date}`
    const estado = regex.estadoFunction(`${req.body.local}`)
    const urlEstado = `https://brasil.io/api/dataset/covid19/obito_cartorio/data/?state=${estado}&date=${data}`
    axios.get(urlEstado).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}

exports.renderEstado = (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://brasil.io/api/dataset/covid19/obito_cartorio/data/?state=${estado}&date=${data}',
        'headers': { },
        "json": true
    }
    request(options, (error, response) => {
        let payload = response.body["results"]
        res.status(response.statusCode).send(payload)
    })
}

exports.getCidade = (req, res) => {
    const data = `${req.body.date}`
    const cidade = regex.estadoFunction(`${req.body.local}`)
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso/data/?city=${cidade}&date=${data}`
    axios.get(urlCidade).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

exports.renderCidade = (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://brasil.io/api/dataset/covid19/caso/data/?city=${cidade}&date=${data}',
        'headers': { },
        "json": true
    }
    request(options, (error, response) => {
        let payload = response.body["results"].filter((e) => {
            return e.date == req.param.data && e.city == req.param.cidade
        });
        res.status(response.statusCode).send(payload)
    })
}