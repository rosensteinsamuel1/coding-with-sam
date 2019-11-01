import React from 'react';
import pic from '../assets/IMG_1692.JPG'
import styles from './About.module.css'

const about = (props) => {
  return (
    <div class="container">
  <div class="row">
    <div class="col-sm">
    <div className= {styles.myPic}>
        <img src={pic} alt="Card cap"/>
      </div>
    </div>
    <div class="col-sm">
      About me
    </div>
  </div>
</div>
  );
};

export default about;