const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const getMovies = ids => fetch(`${BASE_URL}/movies?ids=${ids}`).then(res => res.json());
