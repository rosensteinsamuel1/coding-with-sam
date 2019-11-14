import React from "react";
import pic from "../../assets/IMG_1692.JPG";
import clevelandPic from "../../assets/cleveland_website.png";
import styles from "./About.module.css";

const about = props => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <div>
        <div className={styles.leftContainer}>
          <div className={styles.leftAbout}>
            <div className={styles.myPic}>
              <h3>About me</h3>
              <img src={pic} alt="me_and_the_girls"></img>
            </div>
          </div>
          <div className={styles.rightAbout}>
            <p>
              I am a father, rabbi and freelance web developer. My goal is to
              make the world a better place, whether that's via parenting,
              spirituality or clean code. Spreading important ideas across the
              world is my life mission.
            </p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.leftAbout}>
            <h3>Project</h3>
            <div className={styles.clevelandSite}>
              <a href="whyamiaclevelandfan.com">
                <img src={clevelandPic} alt="cleveland_vents"></img>
              </a>
            </div>
          </div>
          <div className={styles.rightAbout}>
            <h5>whyamiaclevelandfan.com</h5>
            <p>
              This project was inspired during the Cleveland Browns 2019 season.
              The expectations for the Browns were high going into the season
              after a variaty of offseason moves. Nevertheless, like countless
              times in the past, our team didn't produce.
            </p>
            <form action="http://whyamiaclevelandfan.com">
              <input type="submit" value="Check it out" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
