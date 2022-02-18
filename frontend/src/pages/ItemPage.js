import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

function Item() {
  const item = {
    "id": 4,
    "name": "Apple Iphone",
    "price": 5501,
    "rating": 4.3,
    "img": "https://cdn1.ozone.ru/s3/multimedia-p/wc1200/6122043985.jpg",
    "typeId": 4,
    "createdAt": "2022-02-16T05:47:04.141Z",
    "updatedAt": "2022-02-16T05:47:04.141Z",
    "itemInfo": [{ id: 1, title: 'Best functionality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }, { id: 2, title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },]
  };
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={item.img} />
        </Col>
        <Col md={8} className='align-contents-left'>
          <Row className='d-flex'>
            <p >{item.name}</p>
          </Row>
          <Row className='d-flex'>
            <p className='ms-2' style={{ 'fontWeight': 'bold' }}>{item.rating} <FontAwesomeIcon className='ms-1' icon={faStar} /></p>
          </Row>
          <Row>
            <p>Price: {item.price} som</p>

          </Row>
          <Button variant={"outline-dark"}>Add to Cart</Button>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3 ms-0'>
        {item.itemInfo.map((info, index) =>
          <div key={info.id} style={{ background: index % 2 !== 0 ? 'lightgray' : 'transparent', }}>
            <Row style={{ 'fontWeight': 'bold' }}>
              {info.title}
            </Row>
            <Row>
              {info.description}
            </Row>
          </div>
        )}
      </Row>
    </Container >
  );
}

export default Item;
