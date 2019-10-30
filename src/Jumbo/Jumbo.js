import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">I don't bite, I promise!</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;