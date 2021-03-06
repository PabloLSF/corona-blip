const axios = require('axios')
var regex = require('./regex')
var uf = require('./uf')
var cidadeRepetida = require('./cidadeRepetida')
const request = require('request')

exports.getScript = async(req, res) => {
    const local = await regex.localFunction(`${req.body.local}`)
    if(local == 0)
        res.send("outro país")
    else
        res.send(local)
}

exports.renderBrasil = async(req, res) => {
    var options = {
        'method': 'GET',
        'url': 'https://corona.lmao.ninja/v2/countries/brazil',
        'headers': { },
        "json": true
    }
    request(options, async(error, response) => {
        //let pais = response.body.data.rows
        let pais = response.body
        res.status(response.statusCode).send(pais)
    })
}

exports.getEstado = async(req, res) => {
    const estado = `${req.body.local}`
    const urlEstado = `https://brasil.io/api/dataset/covid19/caso_full/data/?is_last=true&place_type=state&state=${estado}`
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

exports.getVerificaCidade = async(req, res) => {
    const verificaCidade = await cidadeRepetida.cidadeRepetidaFunction(`${req.body.cidade}`)
    if(verificaCidade == "0")
        res.send("0")
    else
        res.send("1")
}

exports.getCidade = async(req, res) => {
    const cidade = await regex.localFunction(`${req.body.local}`)
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso_full/data/?city=${cidade}`
    axios.get(urlCidade).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}

exports.getCidadeRepetida = async(req, res) => {
    const cidade = await regex.localFunction(`${req.body.local}`)
    const uf = `${req.body.uf}`
    const urlCidade = `https://brasil.io/api/dataset/covid19/caso_full/data/?city=${cidade}&state=${uf}`
    axios.get(urlCidade).then((response) => {
        res.status(response.status).send(response.data.results[0])
    }).catch((error) => {
        console.log(error)
    })
}