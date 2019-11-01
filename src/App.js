import React from 'react';
import styles from './App.css';
import Work from './Work/Work'
import NavBar from './NavBar/NavBar'
import Jumbo from './Jumbo/Jumbo'
import About from './About/About'

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Jumbo />
      <About />
      <Work />
    </div>
  );
}

export default App;
