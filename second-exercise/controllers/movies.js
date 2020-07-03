const { searchMovies, searchMovie } = require('../services/imdbService')

const filterProperties = (item, properties) => Object.keys(item)
  .filter(key => properties.includes(key))
  .reduce((obj, key) => ({
    ...obj,
    [key]: item[key],
  }), {})

const searchTerm = async (req, res, next) => {
  try {
    const { term, sort, order } = req.params
    const response = await searchMovies(term)
    if (sort !== undefined) {
      response.sort((a, b) => (order === undefined || order === 'Asc' ? a[sort].localeCompare(b[sort]) : b[sort].localeCompare(a[sort])))
    }

    return res.json(response)
  } catch (e) {
    next(e)
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const { fields } = req.query
    const listFields = fields !== undefined ? fields.split(',') : []

    const response = await searchMovie(id)

    const result = !listFields.length ? response : filterProperties(response, listFields)
    return res.json(result)
  } catch (e) {
    next(e)
  }
}

const getCast = async (req, res, next) => {
  try {
    const { id } = req.params
    const listFields = ['Director', 'Writer', 'Actors']

    const response = await searchMovie(id)

    const filtered = !listFields.length ? response : filterProperties(response, listFields)
    const result = Object.keys(filtered)
      .reduce((obj, key) => ({
        ...obj,
        [key]: filtered[key].split(','),
      }), {})

    return res.json(result)
  } catch (e) {
    next(e)
  }
}

const getMovies = async (req, res, next) => {
  try {
    const { ids } = req.query

    if (!ids) {
      return res.status(400).json({
        message: 'Missing ids parameter',
      })
    }

    const listMovies = ids.split(',')
    const result = await Promise.all(listMovies.map(async movie => searchMovie(movie)))

    return res.json(result)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  searchTerm,
  getMovies,
  getCast,
  getById,
}
