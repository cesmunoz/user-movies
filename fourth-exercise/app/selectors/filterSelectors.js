export const getFilterByStatus = (state, status) => {
  const filters = Object.values(state.filters).filter(f => f.selected === status)
  const result = filters.reduce((a, { name }) => a.concat(name), [])
  return result
}
