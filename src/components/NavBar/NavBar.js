import React from "react";
import styles from "./NavBar.module.css";

const navBar = props => {
  return (
    <div>
      <nav>
        <div className={styles.leftAlign}>
          <p>Sam Rosenstein</p>
        </div>
        <div className={styles.rightAlign}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
