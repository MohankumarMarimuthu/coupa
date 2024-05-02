import React from 'react'
import logo from "../assets/logo.svg"
import styles from "../styles/Home.module.css"

const Header = () => {
  return (
    <header className='container'> 
      <div className={styles.headerWrap}> 
        <div>
        <img alt='logo' src={logo} className={styles.headerLogo}/>
        </div>
        <div className={styles.headerDep}>
          <p>Supply chain <br />
          Design & Planning</p>
          <span>Powered by LLAMASOFT</span>
        </div>
      </div>
    </header>
  )
}

export default Header