const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const getUsers = () => fetch(`${BASE_URL}/users`).then(res => res.json())
