import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
  Row,
  Col
} from "reactstrap";
import styles from "./Work.module.css";

const work = props => {
  return (
    <div className={styles.workContainer}>
      <div id="projects" className={styles.title}>
        <h3>My Work</h3>
      </div>
      <Row>
        <Col sm-6>
          <CardGroup>
            <Card className={styles.card}>
              <CardBody>
                <CardTitle>Why Am I A Cleveland Fan</CardTitle>
                <CardSubtitle>whyamiaclevelandfan.com</CardSubtitle>
                <CardText>
                  This project was inspired during the Cleveland Browns 2019
                  season. The expectations for the Browns were high going into
                  the season after a variaty of offseason moves. Nevertheless,
                  like countless times in the past, our team didn't produce.
                </CardText>
                <ul style={{ listStyle: "none" }}>
                  Features:
                  <li> Real-time updates </li>
                  <li> Firebase backend storage</li>
                  <li> Reactstrap frontend</li>
                </ul>

                <ul style={{ listStyle: "none" }}>
                  Future additions:
                  <li> Filter displayed posts based on topic </li>
                  <li> OAuth login</li>
                </ul>
                <Button>Check it out</Button>
              </CardBody>
            </Card>
            <Card className={styles.card}>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default work;
