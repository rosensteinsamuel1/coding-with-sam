import React from "react";
import styles from "./App.module.css";
import Work from "./components/Work/Work";
import NavBar from "./components/NavBar/NavBar";
import Jumbo from "./components/Jumbo/Jumbo";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

//TODO: disable extra scrolling on html, body elements to remove whitespace above and below
// TODO: remove extra whitespace below footer

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Jumbo />
      <About />
      {/* <div className={styles.workContainer}>
        <Work />
        
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
