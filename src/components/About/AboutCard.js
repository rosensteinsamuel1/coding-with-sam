import React from "react";
import { Card } from "react-bootstrap";
import pic from "../../assets/IMG_1692.JPG";

const aboutCard = () => {
  return (
    <Card style={{ margin: "10px 0 20px 0" }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Who I Am</Card.Title>
        <Card.Text>
          I am a father, rabbi and freelance web developer. My goal is to make
          the world a better place, whether that's via parenting, spirituality
          or clean code. Spreading important ideas across the world is my life
          mission.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default aboutCard;
