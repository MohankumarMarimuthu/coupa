import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import styles from "../styles/Home.module.css"

const Footer = () => {
  return (
    <footer>
      <div style={{ backgroundColor: "#2a4788" , padding: "20px 0px"}}>
        <div className='container'>
        <div className={styles.Overall}>
        <p>Connect with Coupa</p>
        <div className={styles.socialIcons}>
          <FaFacebookSquare className={styles.icons}/>
          <FaXTwitter className={styles.icons} />
          <FaLinkedin className={styles.icons} />
          <FaYoutube className={styles.icons} />
        </div> 
      </div> 
        </div> 
      </div>
      <div className="container" style={{ textAlign: "center"}}>
        <p className={styles.copyRight}>&#169; Coupa software Inc, /1855 Grant Street, San Mateo, CA 94402 United States <br/>
          Contact Us / Privacy Policy / Unsubscribe / Update your Preferences / Forward to a Friend
        </p>
      </div> 
    </footer>
  )
}

export default Footer