const express = require('express')
const controller = require('../../controllers/movies')

const router = express.Router()

router.get('/search/:term/sort/:sort?/order/:order?', controller.searchTerm)
router.get('/:id', controller.getById)
router.get('/:id/cast', controller.getCast)
router.get('/', controller.getMovies)

module.exports = router
