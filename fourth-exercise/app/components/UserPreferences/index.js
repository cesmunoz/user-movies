import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const UserPreferences = ({ properties }) => (
  <div
    className="jampp__UserPreference"
  >
    {properties.map(property => (
      <div key={property.name}>
        <span className="jampp__UserPreference__Section">{property.name}: </span>
        <span>{property.values.map((value, index) => (
          <span
            key={index}
          >
            {`{${value}}, `}
          </span>))}
        </span>
      </div>
    ))}

  </div>
)

UserPreferences.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  })),
}

UserPreferences.defaultProps = {
  properties: [],
}

export default UserPreferences
