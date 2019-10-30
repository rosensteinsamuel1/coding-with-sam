import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';
import pic from '../assets/IMG_1692.JPG'
import styles from './About.module.css'

const about = (props) => {
  return (
    <div>
      <Card>
        <CardImg className={styles.myPic}top width="50%" src= {pic} alt="Card image cap" />
      </Card>
    </div>
  );
};

export default about;