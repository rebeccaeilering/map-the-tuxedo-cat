import React from "react"
import styles from "./banner.module.css"
// import "./banner.css"

export default () => (
  // <div className="banner-main">
  //  <div className="banner-half banner-img"></div>
  //  <div className="banner-half banner-content">
    
  //  </div>
  <div className={styles.container}>
    <div className={styles.halfimage}></div>
    <div className={styles.halfcontent}>
      <h2>I'm Map<span>I'm fucking majestic.</span></h2>

    </div>
  </div>
)