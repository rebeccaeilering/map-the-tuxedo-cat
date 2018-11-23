import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.module.css"
import Header from "../components/header"
import Footer from "../components/footer"



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
      <Header></Header>
        <main>
          {children}
        </main>
      <Footer></Footer>
      </div>
      
    )}
    
  />
)