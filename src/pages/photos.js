import React from "react"
import { graphql } from "gatsby"
import "../assets/css/main.css"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section>
      <h1>{data.site.siteMetadata.title}'s Photo Gallery</h1>
      <div className="gallery-container">
      <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "assets/img/art-map.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
     siteMetadata {
      title
    }
   }
  }
`