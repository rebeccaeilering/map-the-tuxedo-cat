import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styles from "./hp-layout.module.css"
import Banner from "../components/banner"


export default ({ children }) => (
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
      <div className={styles.container}>
        <header>
          <Link to={`/`}>
            <h1 className={styles.title}>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <nav>
            <Link to={`/about/`} className={styles.link}>About</Link>
            <Link to={`/nicknames/`} className={styles.link}>Nicknames</Link>
            <Link to={`/photos/`} className={styles.link}>Photos</Link>
            <Link to={`/fun-facts/`} className={styles.link}>Fun Facts</Link>
          </nav>
        </header>
        <Banner></Banner>
        <main>
          <section>
            {children}
          </section>
        </main>
        <footer>
          <small>&copy; Rebecca Eilering | Dedicated to my sweet {data.site.siteMetadata.title}.</small>
        </footer>
      </div>
      
    )}
    
  />
)
