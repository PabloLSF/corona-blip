const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/script", controller.getScript)
router.post("/estado", controller.getEstado)
router.post("/cidade", controller.getCidade)

module.exports = router