const express = require('express')
const movies = require('./movies')
const users = require('./users')

const router = express.Router()

router.use('/movies', movies)
router.use('/users', users)

router.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
  next()
})

module.exports = router
