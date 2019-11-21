import React from "react";
import styles from "./App.module.css";

import NavBar from "./components/NavBar/NavBar";
import Jumbo from "./components/Jumbo/Jumbo";
import Cards from "./components/About/Cards";
import Footer from "./components/Footer/Footer";

//TODO: disable extra scrolling on html, body elements to remove whitespace above and below
// TODO: remove extra whitespace below footer

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Jumbo />
      <Cards />
      {/* <div className={styles.workContainer}>
        <Work />
        
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
