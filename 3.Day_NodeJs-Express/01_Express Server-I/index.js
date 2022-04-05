const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/about', (req, res) => res.send('About page'))

app.get('/hobbies', (req, res) => res.send('<h1>Hobbies</h1>'))

app.get("/friends", (req, res) => res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))