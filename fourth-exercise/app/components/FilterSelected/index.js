import React from 'react'
import { Icon, Label } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './styles.sass'

const FilterSelected = ({ name, toggleFilter }) => (
  <Label
    size="large"
    className="jampp__FilterSelected"
  >
    <span>{name}</span>
    <button
      className="jampp__FilterSelected__DeleteFilter"
      onClick={() => toggleFilter(name)}
    >
      <Icon name="times circle" />
    </button>
  </Label>
)

FilterSelected.propTypes = {
  name: PropTypes.string.isRequired,
  toggleFilter: PropTypes.func.isRequired,
}

export default FilterSelected
