import React from "react"
import { Link, graphql } from "gatsby"
import "../assets/css/main.css"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
\      <section>
        <h1>{data.site.siteMetadata.title} News Reel</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {type: { eq: "news"}}
      }
      sort: {
        fields: [
          frontmatter___date
        ], order: DESC
      }
    ) 
    {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
          }
          fields {
            slug
          }
          excerpt
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