const fetch = require('node-fetch')

const IMDB_URL = process.env.IMDB_URL || 'http://www.omdbapi.com'
const API_KEY = process.env.OMDBAPIKEY || '59a59aed'

const searchMovies = async (term) => {
  const response = await fetch(`${IMDB_URL}/?s=${term}&apikey=${API_KEY}`)
  const result = await response.json()
  return result.Search
}

const searchMovie = async (id) => {
  const response = await fetch(`${IMDB_URL}/?i=${id}&apikey=${API_KEY}`)
  return response.json()
}

module.exports = {
  searchMovies,
  searchMovie,
}
