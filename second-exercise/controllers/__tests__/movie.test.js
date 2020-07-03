const supertest = require('supertest')
const matrixWithTitleAsc = require('./movies-data/matrix-with-title-asc.json')
const matrixReloaded = require('./movies-data/matrix-reloaded.json')
const matrixReloadedCast = require('./movies-data/matrix-reloaded-cast.json')
const moviesOneIds = require('./movies-data/movie-one-ids.json')
const moviesTwoIds = require('./movies-data/movie-two-ids.json')

const app = require('../../index')

const request = supertest(app)

describe('Movies Endpoints', () => {
  it('Should work search term with sort & order', async (done) => {
    const response = await request.get('/movies/search/matrix/sort/Title/order/Asc')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(matrixWithTitleAsc)
    done()
  })

  it('Should work search with id', async (done) => {
    const response = await request.get('/movies/tt0234215')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(matrixReloaded)
    done()
  })

  it('Should work search with id cast', async (done) => {
    const response = await request.get('/movies/tt0234215/cast')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(matrixReloadedCast)
    done()
  })

  it('Should get movies with one id', async (done) => {
    const response = await request.get('/movies?ids=tt0234215')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(moviesOneIds)
    done()
  })

  it('Should get movies with two ids', async (done) => {
    const response = await request.get('/movies?ids=tt0234215,tt0093058')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(moviesTwoIds)
    done()
  })

  it('Should send 400 if missing ids', async (done) => {
    const response = await request.get('/movies')
    expect(response.status).toBe(400)
    done()
  })
})
