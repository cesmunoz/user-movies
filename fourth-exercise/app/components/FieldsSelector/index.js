import React from 'react'
import PropTypes from 'prop-types'
import FieldFilterDropdown from '../FieldFilterDowndown'
import FilterListSelected from '../FilterListSelected'
import './styles.sass'

const FieldsSelector = ({ selectedFilters, unselectedFilters, toggleFilter }) => (
  <div className="jampp__FieldsSelector">
    <FilterListSelected filters={selectedFilters} toggleFilter={toggleFilter} />
    <FieldFilterDropdown filters={unselectedFilters} toggleFilter={toggleFilter} />
  </div>
)

FieldsSelector.propTypes = {
  selectedFilters: PropTypes.arrayOf(PropTypes.string),
  unselectedFilters: PropTypes.arrayOf(PropTypes.string),
  toggleFilter: PropTypes.func.isRequired,
}

FieldsSelector.defaultProps = {
  selectedFilters: [],
  unselectedFilters: [],
}

export default FieldsSelector
