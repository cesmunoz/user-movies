const express = require('express')
const routes = require('./routes')
const cors = require('cors');

const app = express()

app.use(cors())
app.use(routes)

app.listen(3000)

module.exports = app
