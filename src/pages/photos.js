import React from "react"
import { graphql } from "gatsby"
import "../assets/css/main.css"
import styles from "./photos.module.css"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section>
      <h1>{data.site.siteMetadata.title}'s Photo Gallery</h1>
      <div className={styles.gallerycontainer}>
      <Img fluid={data.imageOne.childImageSharp.fluid} />
      <Img fluid={data.imageTwo.childImageSharp.fluid} />
      <Img fluid={data.imageThree.childImageSharp.fluid} />
      <Img fluid={data.imageFour.childImageSharp.fluid} />
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "assets/img/art-map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "assets/img/box-map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "assets/img/halloween-map.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "assets/img/tongue-map.jpg" }) {
      childImageSharp {
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