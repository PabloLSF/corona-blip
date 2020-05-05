const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/script", controller.getScript)
router.post("/estado", controller.getEstado)
router.get("/estado", controller.renderEstado)
router.post("/cidade", controller.getCidade)
router.get("/cidade", controller.renderCidade)

module.exports = router