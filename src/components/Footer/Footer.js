import React from "react";
import styles from "./Footer.module.css";

const footer = props => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          Shoot me an email at{" "}
          <a href="mailto: rosenstein.samuel1@gmail.com">
            rosenstein.samuel1@gmail.com
          </a>
        </li>
        <li>
          Checkout out my{" "}
          <a
            href="https://github.com/rosensteinsamuel1"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/samuel-rosenstein-b1136b115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default footer;
