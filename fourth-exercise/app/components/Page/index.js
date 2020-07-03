import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

const Page = ({ title, children }) => (
  <div className="jampp__Page">
    <div className="jampp__Page__Title">{title}</div>
    {children}
  </div>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Page
