import { filterMap } from '../constants'

const getKeyFilter = name => filterMap[name]

export const getUsers = (state) => {
  const users = Object.values(state.users)
  const movies = Object.values(state.movies)
  const selected = Object.values(state.filters).filter(f => f.selected)

  const result = users.map((user) => {
    const userResult = {
      name: user.name,
      avatarUrl: user.avatarUrl,
      properties: [],
    }

    const userMovies = movies.filter(movie => user.movies.includes(movie.imdbID))

    selected.forEach((filter) => {
      const property = {
        name: filter.name,
      }

      const values = []
      userMovies.forEach((movie) => {
        const key = getKeyFilter(filter.name);
        values.push(movie[key].split(','))
      })

      property.values = values.reduce((a, b) => a.concat(b), [])
      userResult.properties.push(property)
    })

    return userResult
  })

  return result
}
