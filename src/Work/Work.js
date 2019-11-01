import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import styles from './Work.module.css'

//<li className={[activeClass, data.klass, "main-class"].join(' ')} />

const work = (props) => {
  return (
    <div className={styles.workContainer}>
        <div className={styles.title}>
            <h3>My Work</h3>
        </div>
    <Row>
        <Col sm-6>
        <CardGroup>
      <Card className={styles.card}>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card className={styles.card}>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
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