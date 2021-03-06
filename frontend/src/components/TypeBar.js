import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer(() => {
  const { item } = useContext(Context)
  return (
    <ListGroup>
      {item.types.map(type =>
        <ListGroup.Item
          key={type.id}
          style={{ cursor: 'pointer' }}
          onClick={() => item.setSelectedType(type)}
          active={type.id === item.selectedType.id}
        >
          {type.name}
        </ListGroup.Item>
      )}
      <ListGroup.Item
        key={-1}
        style={{ cursor: 'pointer' }}
        onClick={() => item.setSelectedType({})}
        active={item.selectedType.id == undefined}
      >
        Все товары
      </ListGroup.Item>
    </ListGroup>
  )
})

export default TypeBar;