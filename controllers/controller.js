const axios = require('axios')
var regex = require('./regex')
var uf = require('./uf')
var converterJson = require('./converterJson')
const request = require('request')

exports.getScript = async(req, res) => {
    const local = await regex.estadoFunction(`${req.body.local}`)
    if(local == 0)
        res.send("outro país")
    else
        res.send(local)
}

exports.renderBrasil = async(req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search',
        'headers': { },
        "json": true
    }
    request(options, async(error, response) => {
        let payload = response.body.data.rows
        let pais = await converterJson.convert(payload)
        res.status(response.statusCode).send(pais)
    })
}

exports.getEstado = async(req, res) => {
    const estado = `${req.body.local}`
    const urlEstado = `https://brasil.io/api/dataset/covid19/obito_cartorio/data/?state=${estado}`
    axios.get(urlEstado).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}

exports.getUf = async(req, res) => {
    const estado = await uf.ufFunction(`${req.body.uf}`)
    if(estado == 0)
        res.send("estado não localizado")
    else
        res.send(estado)
}

exports.getCidade = async(req, res) => {
    const cidade = await regex.estadoFunction(`${req.body.local}`)
    console.log("ciii : ", cidade)
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso/data/?city=${cidade[0]}`
    axios.get(urlCidade).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}