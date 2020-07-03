import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import './styles.sass'

const FieldFilterDropdown = ({ filters, toggleFilter }) => (
  <div className="jampp__FieldFilterDropdown">
    <Dropdown
      text=""
      icon="plus circle"
      floating
      button
      className="jampp__FieldFilterDropdown__Dropdown"
    >
      <Dropdown.Menu>
        {filters.map(filter => <Dropdown.Item key={filter} onClick={() => toggleFilter(filter)}>{filter}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  </div>
)

FieldFilterDropdown.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  toggleFilter: PropTypes.func.isRequired,
}

FieldFilterDropdown.defaultProps = {
  filters: [],
}

export default FieldFilterDropdown
