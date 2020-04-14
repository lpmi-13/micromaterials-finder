import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MicromaterialsList from "../components/MicromaterialsList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Micromaterials</h1>
    <p>These are the micromaterials so far...</p>
    <MicromaterialsList />
  </Layout>
)

export default IndexPage
