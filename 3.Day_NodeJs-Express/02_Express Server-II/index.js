const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/users', require("./routes/api/users"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))