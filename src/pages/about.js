import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 className="text-6xl flex-1 justify-center my-auto mr-auto m0 font-bold">
      Whoami{' '}
      <span role="img" aria-label="Building construction">
        ⁉️
      </span>
    </h1>
    <p className="text-4xl">This is a website</p>
  </Layout>
)

export default AboutPage
