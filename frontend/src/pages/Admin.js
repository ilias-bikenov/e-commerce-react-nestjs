import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateItem from '../components/modals/CreateItem';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-2" onClick={() => setTypeVisible(true)}>
        Добавить тип
      </Button>
      <Button variant={'outline-dark'} className="mt-2" onClick={() => setItemVisible(true)}>
        Добавить товар
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)} />
    </Container>
  );
}

export default Admin;
