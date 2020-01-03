import React from 'react'
import { Link } from 'gatsby'
import twitterSvg from '../images/twitter.svg'
import githubSvg from '../images/github.svg'
import css from './nav.module.css'

const Nav = props => {
  const { active } = props
  return (
    <nav className="flex py-2 px-0">
      <Link className="flex-1 text-xl hover:bg-blue-500" to="/">
        Home
      </Link>
      <Link className="flex-1 text-xl hover:bg-blue-500 mr-1" to="/about">
        About
      </Link>
      <Link className="flex-1 text-xl hover:bg-blue-500 mr-1" to="/projects">
        Projects
      </Link>
      <a className="flex-1 text-xl" href="http://twitter.com/brycecore">
        <img src={twitterSvg} alt="twitter logo" />
      </a>
      <a className="flex-1 text-xl" href="http://github.com/brycehill">
        <img src={githubSvg} alt="github logo" />
      </a>
    </nav>
  )
}
export default Nav
