import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getItem } from '../http/itemApi';

const Item = () => {
  const [item, setItem] = useState({ itemInfo: [] });
  const { id } = useParams()
  useEffect(() => {
    getItem(id).then(data => setItem(data))
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_URL + item.img} />
        </Col>
        <Col md={8} className='align-contents-left'>
          <Row className='d-flex'>
            <p >{item.name}</p>
          </Row>
          <Row className='d-flex'>
            <p className='ms-2' style={{ 'fontWeight': 'bold' }}>{item.rating} <FontAwesomeIcon className='ms-1' icon={faStar} /></p>
          </Row>
          <Row>
            <p>Цена: {item.price} с.</p>

          </Row>
          <Button variant={"outline-dark"}>В Корзину</Button>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3 ms-0'>
        {item.itemInfo.map((info, index) =>
          <div key={info.id} style={{ background: index % 2 !== 0 ? '#EAECEB' : 'transparent', }}>
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
