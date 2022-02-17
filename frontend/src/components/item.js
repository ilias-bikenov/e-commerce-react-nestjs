import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Item = observer(({ item }) => {

  return (
    <Col md='3'>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={'https://pressgazette.co.uk/wp-content/uploads/2020/11/shutterstock.jpg'} />
        <div className='d-flex justify-content-between align-items-center'>
          <div>Something</div>
          <div className='d-flex align-items-center'>
            <div>{item.rating}</div>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
      </Card>
    </Col>
  )
})

export default Item;