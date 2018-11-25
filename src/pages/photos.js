import React from "react"
import { graphql } from "gatsby"
import "../assets/css/main.css"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section>
      <h1>{data.site.siteMetadata.title}'s Photo Gallery</h1>
      <div className="gallery">
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`