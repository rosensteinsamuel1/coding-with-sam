import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const navBar = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Sam Rosenstein</Navbar.Brand>
    </Navbar>
  );
};

export default navBar;
