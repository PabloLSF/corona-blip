const axios = require('axios')
var regex = require('./regex')
var converterJson = require('./converterJson')
const request = require('request')

exports.getScript = (req, res) => {
    const local = regex.estadoFunction(`${req.body.local}`)
    if(local == 0)
        res.send("Outro país")
    else
        res.send(local)
}

exports.renderBrasil = (req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search',
        'headers': { },
        "json": true
    }
    request(options, (error, response) => {
        let payload = response.body.data.rows
        let pais = converterJson.convert(payload)
        res.status(response.statusCode).send(pais);
    })
}
 
exports.getEstado = (req, res) => {
    const data = `${req.body.date}`
    const estado = `${req.body.local}`
    const urlEstado = `https://brasil.io/api/dataset/covid19/obito_cartorio/data/?state=${estado}&date=${data}`
    axios.get(urlEstado).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}

exports.getCidade = (req, res) => {
    const data = `${req.body.date}`
    const cidade = regex.estadoFunction(`${req.body.local}`)
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso/data/?city=${cidade}&date=${data}`
    axios.get(urlCidade).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}