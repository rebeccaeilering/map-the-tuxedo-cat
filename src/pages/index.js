import React from "react"
import { Link, graphql } from "gatsby"
import "../assets/css/main.css"
import Layout from "../components/layout"
import Banner from "../components/banner"

export default ({ data }) => {
  return (
    <Layout>
      <Banner />
      <section>
        <h3>My Mission Statement</h3>
        <p>I'm a cat so I don't have a mission. Unless you consider playing with toys, attacking ankles, looking and bunnies and squirells, and finding a cozy place to nap a mission. If so, I'm down with that.</p>
      </section>
      <section>
        <h3>Latest News</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h4>
                {node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h4>
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
      limit: 3
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

