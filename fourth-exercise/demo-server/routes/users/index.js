const express = require('express')
const http = require('http')
const response1 = require('../../../../second-exercise/examples/response1.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    res.json(response1);   
  } catch (e) {
    next(e)
  }
})

module.exports = router
