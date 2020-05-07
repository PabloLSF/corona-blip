var PORT = process.env.PORT || 5000
const path = require("path")
const express = require("express")
const app = express()
const router = require("./router")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", router)

app.listen(PORT, () => {
  console.log("The server is now running on Port PORT")
})