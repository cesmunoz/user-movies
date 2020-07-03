const express = require('express')
const routes = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

if (process.env.ENABLE_LOG === 'true') {
  app.use(morgan(':date[iso] :method :url :remote-addr'))
}

app.use(cors())
app.use('/', routes)

app.listen(3000)

module.exports = app
