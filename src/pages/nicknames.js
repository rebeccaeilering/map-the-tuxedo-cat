import React from "react"
import { graphql } from "gatsby"
import "../assets/css/main.css"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <section>
      <h1>{data.site.siteMetadata.title} Nicknames</h1>
      <p>
        My humans like to call me a lot of things. I don't know why. They are strange cats. I do find it amusing. So much so, I've been compiling a list.
      </p>
      <ul>
        <li>Mapasaurus</li>
        <li>Mappy-poo</li>
        <li>Mappy-pie</li>
        <li>Mr. Meowgi</li>
        <li>Ma-Puma</li>
        <li>Mapzilla</li>
        <li>Mappy-toots</li>
        <li>Mappy-cakes</li>
        <li>Mappenstein</li>
      </ul>
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