import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { item_ROUTE } from '../utils/consts';

const Item = observer(({ item }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} className={'mt-3'} onClick={() => navigate(`${item_ROUTE}/${item.id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={item.img} />
        <div className='mt-1 d-flex justify-content-between align-items-center'>
          <div className='text-black-50'>Samsung</div>
          <div className='d-flex align-items-center'>
            <div>{item.rating}</div>
            <FontAwesomeIcon className='ms-1' icon={faStar} />
          </div>
        </div>
        <div>{item.name}</div>
      </Card>
    </Col>
  )
})

export default Item;