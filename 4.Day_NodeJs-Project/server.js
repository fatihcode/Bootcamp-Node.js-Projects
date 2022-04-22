//node-express

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./db')()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", require("./routes/user.route"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))