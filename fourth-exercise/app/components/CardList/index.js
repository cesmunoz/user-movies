import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import UserPreferences from '../UserPreferences'
import './styles.sass'

class CardList extends Component {
  render() {
    return (
      <div className="jampp__CardList" >
        {
          this.props.users.length > 0 ? this.props.users.map(user => (
            <Card
              key={user.name}
              title={user.name}
              avatar={user.avatarUrl}
            >
              {user.properties.length > 0 ? <UserPreferences properties={user.properties} /> : 'Filters...'}
            </Card>)) : null
        }
      </div>
    )
  }
}

CardList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      values: PropTypes.arrayOf(PropTypes.string),
    })),
  })),
}

CardList.defaultProps = {
  users: {},
};

export default CardList;
