import React from 'react'
// import PropTypes from "prop-types"
import css from './ProjectCard.module.css'

const ProjectCard = props => {
  const { title, description, href } = props
  return (
    <a className={css.root} href={href}>
      <span className={css.title}>{title}</span>
      <span className={css.description}>{description}</span>
    </a>
  )
}

export default ProjectCard
