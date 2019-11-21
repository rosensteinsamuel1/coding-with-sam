import React from "react";
import { Card } from "react-bootstrap";
import clevelandPic from "../../assets/cleveland_website.png";

const workCard = () => {
  return (
    <Card style={{ margin: "10px 0 20px 0" }}>
      <Card.Img variant="top" src={clevelandPic} cap />
      <Card.Body>
        <Card.Title>What I Have Done</Card.Title>
        <Card.Text>
          This project was inspired during the Cleveland Browns 2019 season. The
          expectations for the Browns were high going into the season after a
          variaty of offseason moves. Nevertheless, like countless times in the
          past, our team didn't produce.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link target="_blank" href="http://whyamiaclevelandfan.com">
          whyamiaclevelandfan.com
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default workCard;
