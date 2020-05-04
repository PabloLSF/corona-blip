const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/estado", controller.renderEstado)
router.post("/estado", controller.getEstado)
router.get("/cidade", controller.renderCidade)
router.post("/cidade", controller.getCidade)

module.exports = router