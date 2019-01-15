import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styles from "./header.module.css"


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
        <header>
          <Link to={`/`}>
            <h1 className={styles.title}>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <nav>
            <Link to={`/about/`} className={styles.link}>About</Link>
            <Link to={`/nicknames/`} className={styles.link}>Nicknames</Link>
            <Link to={`/friends/`} className={styles.link}>Friends</Link>
            <Link to={`/photos/`} className={styles.link}>Photos</Link>
            <Link to={`/fun-facts/`} className={styles.link}>Fun Facts</Link>
            <Link to={`/blog/`} className={styles.link}>Blog</Link>
          </nav>
        </header>
    )}
    
  />
)