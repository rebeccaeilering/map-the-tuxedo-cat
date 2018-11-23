import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./footer.module.css"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
    render={data => (
        <footer>
          <small>&copy; 2018 Rebecca Eilering | Dedicated to my sweet {data.site.siteMetadata.title}.</small>
        </footer>
    )}
  />
)
