import React from 'react'
import styles from "../styles/Home.module.css"
import book from "../assets/book.png"

const Content = () => {

  const downloadclick = () => {
    alert("downloading")
  }
  console.log('w' , window.innerWidth)
  return (
    <section className='container'>
     <div className={styles.yearStyle}>
      <p>2022 Reflections and 2023 Priorities</p>
     </div>
     <div className={styles.supplyContent}>
      <p>
        We all know about the supply chain disruptions of the past few years and most 
        leading analysts agree challenges lie ahead. But we wanted to offer supply chain 
        leaders a quantitative read on supply chain realities: what are decision-makers’ top concerns 
        and how are they preparing? What are the differences between countries and regions? How can we 
        track these shifts in priorities, and how can we spur each other on to greater supply chain 
        excellence?
      </p>
     </div>
     {window.innerWidth > 767  ? ( // i used this for deploying purpose otherwise css is not taking
       <div style={{ display: "flex" , justifyContent: "center" , alignItems : "center"}}>
       <div className={styles.bookpoints}>
         <p>
           This <span>2023 state of supply chains report</span> is a reference point for leaders who want to:
         </p>
         <ul>
           <li>Insights from 1,000 supply chain leaders across France, Germany, the United Kingdom, and the United States.</li>
           <li>A global assessment and regional breakdown of top challenges from 2022, priorities for 2023, and focus areas to achieve supply chain resilience.</li>
           <li>Recommendations for how leaders can embrace technology and digital solutions that actually work.</li>
         </ul>
       </div>
       <div className={styles.bookImg}>
         <img src={book} alt='book'/>
       </div>
      </div>
     ) : (
      <div className={styles.bookSection}>
      <div className={styles.bookpoints}>
        <p>
          This <span>2023 state of supply chains report</span> is a reference point for leaders who want to:
        </p>
        <ul>
          <li>Insights from 1,000 supply chain leaders across France, Germany, the United Kingdom, and the United States.</li>
          <li>A global assessment and regional breakdown of top challenges from 2022, priorities for 2023, and focus areas to achieve supply chain resilience.</li>
          <li>Recommendations for how leaders can embrace technology and digital solutions that actually work.</li>
        </ul>
      </div>
      <div className={styles.bookImg}>
        <img src={book} alt='book'/>
      </div>
     </div>
     )}
     <div className={styles.downloadOption}>
     <button className='download' onClick={downloadclick}>Download the Report</button>
     </div>
    </section>
  )
}

export default Content