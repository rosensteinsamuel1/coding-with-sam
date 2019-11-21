import React from "react";
import WorkCard from "./WorkCard";
import AboutCard from "./AboutCard";
import { Container, Row, Col } from "react-bootstrap";

const cards = () => {
  return (
    <Container>
      <Row>
        <Col style={{ display: "flex" }} md={6}>
          <AboutCard />
        </Col>
        <Col style={{ display: "flex" }} md={6}>
          <WorkCard />
        </Col>
      </Row>
    </Container>
  );
};

export default cards;
