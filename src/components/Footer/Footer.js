import React from "react";
import styles from "./Footer.module.css";

const footer = props => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>Shoot me an email at rosenstein.samuel1@gmail.com</li>
        <li>
          Checkout out my{" "}
          <a href="https://github.com/rosensteinsamuel1">github</a> and{" "}
          <a href="https://www.linkedin.com/in/samuel-rosenstein-b1136b115/">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
