const axios = require('axios')
var regex = require('./regex')
const request = require('request')
const urlCidade= `https://brasil.io/api/dataset/covid19/caso/data/?format=json`

exports.getEstado = (req, res) => {
    const data = "${req.body.date}"
    const estado = estadoFunction(`${req.body.local}`)
    const urlEstado = `https://brasil.io/api/dataset/covid19/obito_cartorio/data/?state=${estado}&date=${data}`
    axios.get(url).then((response) => {
        console.log(response)
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
        let payload = response.body["results"].filter((e) => {
            return e.date == req.param.data && e.state == req.param.estado
        });
        res.status(response.statusCode).send(payload)
    })
}

exports.getCidade = (req, res) => {
    const data = "${req.body.date}"
    const cidade = estadoFunction(`${req.body.local}`)
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso/data/?city=${cidade}&date=${data}`
    axios.get(url).then((response) => {
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