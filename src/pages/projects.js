import React from 'react'
// import { Link } from "gatsby"
import Layout from '../components/layout'
// import Nav from "../components/nav"
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/seo'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <section>
      <h1 className="text-6xl flex-1 justify-center my-auto mr-auto m0 font-bold">
        Projects{' '}
        <span role="img" aria-label="Building construction">
          🏗
        </span>
      </h1>
      <p className="text-4xl">
        Here are some things I built. Don't expect much. Who has the time?
      </p>
    </section>
    <section style={{ display: 'flex' }}>
      <ProjectCard
        href="http://css.bryce.fail"
        title="css.bryce.fail"
        description="Randomly generate a named CSS color. This was primarily to play with Elm."
      />
    </section>
  </Layout>
)

export default ProjectsPage
