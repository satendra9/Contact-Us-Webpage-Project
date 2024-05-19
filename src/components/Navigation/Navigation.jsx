import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
        <nav className={`${styles.navigation} container`}>
            <div className='nav-image'>
                <img src='images/Frame 2 1.png' alt='Navigator-image'/>
            </div>
            <div className='lists'>    
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </nav>
    
  )
}

export default Navigation