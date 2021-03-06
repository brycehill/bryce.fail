import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-6xl flex-1 justify-center my-auto mr-auto m0 font-bold">
      Hi!{' '}
      <span role="img" aria-label="Hand waving hello">
        👋🏻{' '}
      </span>
    </h1>
    <p className="text-4xl"> I built this site</p>
  </Layout>
)

export default IndexPage
