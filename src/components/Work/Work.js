import React from "react";
import styles from "./Work.module.css";

const work = props => {
  return (
    <div id="about" className={styles.workContainer}>
      <div className={styles.leftContainer}>
        <h3>Featured Project</h3>
      </div>
      <div className={styles.card}>
        <div className={styles.projectDescription}>
          <div className={styles.container}>
            <h2>Why Am I A Cleveland Fan</h2>
            <h4>whyamiaclevelandfan.com</h4>
            <p>
              This project was inspired during the Cleveland Browns 2019 season.
              The expectations for the Browns were high going into the season
              after a variaty of offseason moves. Nevertheless, like countless
              times in the past, our team didn't produce.
            </p>
            <ul style={{ listStyle: "none" }}>
              Features:
              <li> Real-time updates </li>
              <li> Firebase backend storage</li>
              <li> Reactstrap frontend</li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              Future additions:
              <li> Filter displayed posts based on topic </li>
              <li> OAuth login</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default work;
