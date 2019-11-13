import React from "react";
import styles from "./Jumbo.module.css";

const jumbo = props => {
  return (
    <div className={styles.jumboFullScreen}>
      <div className={styles.jumboText}>
        <h3>I promise i don't bite!</h3>
      </div>
    </div>
  );
};

export default jumbo;
