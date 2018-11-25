import React from "react"
import "../assets/css/main.css"
import styles from "./friends.module.css"
import Layout from "../components/layout"

const Friend = props => (
  <div className={styles.friend}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.name}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout>
    <section>
      <h1>Friends</h1>
      <p>I have a few friends. It's all I need. They keep me company and they are entertaining sometimes.</p>
      <Friend 
        name="Rebecca Eilering"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="She feeds me and plays with me. She's always talking to me. I like to lay on her legs if she has a blanket on them. She sometimes lets me in the garage or lets me watch her work on the computer or in her drawing room."
      />
      <Friend 
        name="Benjamin Leffler"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="He feeds me and plays with me. He's more chill and I can wait to greet him in the morning. He changes me litter. I don't know what he does with it. It's a mystery to me. He selects cat and bunny videos from YouTube for me to watch."
      />
      <Friend 
        name="Tortie - The Neighbor Cat"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="In the evening she comes up to the window and we look at each other. Sometimes she hisses. I don't know why. I like her though. I haven't seen her in awhile. I think her human doesn't let her out since it gets dark earlier and it's cold. I miss her."
      />
    </section>
  </Layout>
)