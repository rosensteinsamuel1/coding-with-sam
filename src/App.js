import React from 'react';
import styles from './App.css';
import Homepage from './Homepage/Homepage'
import NavBar from './NavBar/NavBar'
import Jumbo from './Jumbo/Jumbo'
import About from './About/About'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Jumbo />
      <About />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
