import React from "react";
import { Navbar } from "react-bootstrap";

const footer = props => {
  return (
    <Navbar sticky="bottom" bg="light" expand="lg">
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          Shoot me an email at{" "}
          <a href="mailto: rosenstein.samuel1@gmail.com">
            rosenstein.samuel1@gmail.com
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            href="https://github.com/rosensteinsamuel1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/samuel-rosenstein-b1136b115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default footer;
