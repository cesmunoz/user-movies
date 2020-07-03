import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'
import './styles.sass'

const Card = ({ title, children, avatar }) => (
  <div className="jampp__Card">
    <div className="jampp__Card__Profile">
      <Image src={avatar} avatar className="jampp__Card__Profile__Avatar" />
      <div className="jampp__Card__Profile__Title">{title}</div>
    </div>
    {children}
  </div>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string,
}

Card.defaultProps = {
  avatar: '',
}

export default Card
