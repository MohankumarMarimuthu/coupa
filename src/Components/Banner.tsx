import React from 'react'
import bannerImage from "../assets/banner.png"
import styles from "../styles/Home.module.css"

const Banner = () => {
  return (
    <section>
      <div className='' style={{ position: "relative"}}>
        <img alt='' src={bannerImage} className={styles.bannerImg}/>
      </div>
      <div className="container">
        <div className={styles.bannerContents}>
        <h5>THE INAUGURAL STATE OF SUPPLY CHAINS REPORT</h5>
        <h1>Supply Chain Agility in an Ever-Changing World</h1>
        <p>Learn how 1,000 supply chain decision makers plan to improve their supply chain agility</p>
        <button className='download'>Download the Report</button>
        </div>
      </div>
    </section>
  )
}

export default Banner