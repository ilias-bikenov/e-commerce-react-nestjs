import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemList from '../components/ItemList';
import TypeBar from '../components/TypeBar';

function Shop() {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ItemList />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;
