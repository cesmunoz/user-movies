import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'
import FilterSelected from '../FilterSelected'

const FilterListSelected = ({ filters, toggleFilter }) => (
  <div className="jampp__FilterListSelected">
    {filters.map(filter => (<FilterSelected
      key={filter}
      name={filter}
      toggleFilter={() => toggleFilter(filter)}
    />))}
  </div>
)

FilterListSelected.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  toggleFilter: PropTypes.func.isRequired,
}

FilterListSelected.defaultProps = {
  filters: [],
}

export default FilterListSelected
