const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/script", controller.getScript)
router.get("/brasil", controller.renderBrasil)
router.post("/estado", controller.getEstado)
router.post("/uf", controller.getUf)
router.post("/cidade", controller.getCidade)
router.post("/verificaCidade", controller.getVerificaCidade)
router.post("/cidadeRepetida", controller.getCidadeRepetida)

module.exports = router