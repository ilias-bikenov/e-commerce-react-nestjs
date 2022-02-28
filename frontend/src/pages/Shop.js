import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import ItemList from '../components/ItemList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { getItems, getTypes } from '../http/itemApi';

const Shop = observer(() => {
  const { item } = useContext(Context)

  useEffect(() => {
    getTypes().then(data => item.setTypes(data))
    getItems(null, 1, item.limit).then(data => {
      console.log(data);
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    })
  }, [])

  useEffect(() => {
    getItems(item.selectedType.id, item.page, item.limit).then(data => {
      item.setItems(data.rows);
      item.setTotalCount(data.count);
    })
    console.log(item);
  }, [item.page, item.selectedType])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <ItemList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
