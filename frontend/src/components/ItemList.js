import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import Item from './Item';

const ItemList = observer(() => {
  const { item } = useContext(Context)
  return (
    <Row className='d-flex'>
      {item.items.map(item =>
        <Item key={item.id} item={item} />
      )}
    </Row>
  )
})

export default ItemList;