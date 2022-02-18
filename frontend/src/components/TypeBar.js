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
          style={{ cursor: '  ' }}
          onClick={() => item.setSelectedType(type)}
          active={type.id === item.selectedType.id}
        >
          {type.name}
        </ListGroup.Item>

      )}
    </ListGroup>
  )
})

export default TypeBar;