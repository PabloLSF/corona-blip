var express = require('express')
var router = express.Router()
var estado = require('./estado')
var cidade = require('./cidade')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(estado)
router.use(cidade)

module.exports = router