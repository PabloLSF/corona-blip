const axios = require('axios')
var regex = require('./regex')

exports.getScript = (req, res) => {
    const local = regex.estadoFunction(`${req.body.local}`)
    res.send(local)
}

exports.getBrasil = (req, res) => {
    const urlBrasil = `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search`
    axios.get(urlBrasil).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        console.log(error)
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