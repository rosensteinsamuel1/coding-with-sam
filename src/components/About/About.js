import React from "react";
import pic from "../../assets/IMG_1692.JPG";
import styles from "./About.module.css";

const about = props => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <h3>About me</h3>
      <div>
        <div className={styles.picContainer}>
          <div className={styles.myPic}>
            <img src={pic} alt="me_and_the_girls"></img>
          </div>
        </div>

        <div className={styles.aboutText}>
          <p>I am a father, rabbi and freelance web developer.</p>
        </div>
      </div>
    </div>
  );
};

export default about;
