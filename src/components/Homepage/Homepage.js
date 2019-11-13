import React, {Component} from 'react';
import styles from './Homepage.module.css'

class Homepage extends Component {
    render() {
        return(
            <div className={styles.Homepage}>
                <h1>Welcome to my site</h1>
            </div>
        )
    }
}

export default Homepage;
