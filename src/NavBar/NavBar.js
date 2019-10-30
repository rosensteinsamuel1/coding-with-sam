import React from 'react';
import styles from './NavBar.module.css'

const NavBar = (props) => (
    <nav>
        <div className={styles.navLeft}>
            <ul>
                <li>Sam Rosenstein</li>
            </ul>
        </div>
        <div className={styles.navRight}>
            <ul >
                <li><a href="/">About</a></li>
                <li><a href="/">Work</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </nav>
    
)

export default NavBar;