const express = require('express')
const http = require('http')
const response2 = require('../../../../second-exercise/examples/response2.js')
const response3 = require('../../../../second-exercise/examples/response3.js')

const router = express.Router()

router.get('/:imdbId', async (req, res, next) => {
  try {
    res.json(response2);   
  } catch (e) {
    next(e)
  }
})

router.get('/:imdbId/cast', async (req, res, next) => {
  try {
    res.json(response3);   
  } catch (e) {
    next(e)
  }
})

module.exports = router
