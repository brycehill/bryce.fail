import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/nav'

const Header = () => (
  <header className="text-center">
    <div className="inline-block">
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
