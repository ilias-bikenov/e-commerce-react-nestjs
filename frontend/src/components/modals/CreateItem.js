import { number } from 'mathjs';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createItem, getTypes } from '../../http/itemApi';

const CreateItem = observer(({ show, onHide }) => {
  const { item } = useContext(Context);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [type, setType] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getTypes().then(data => item.setTypes(data))
  }, [])

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const selectFile = e => {
    setFile(e.target.files[0]);
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const addItem = () => {
    const formData = new FormData();
    formData.append('name', name)
    formData.append('price', price.toString())
    formData.append('img', file)
    formData.append('typeId', item.selectedType.id)
    formData.append('itemInfo', JSON.stringify(info))
    createItem(formData).then(data => onHide())
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown>
            <Dropdown.Toggle>{item.selectedType.name || 'Choose type'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {item.types.map((type) => (
                <Dropdown.Item onClick={() => item.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            placeholder="Enter item name"
            className="mt-3"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Control
            placeholder="Enter item price"
            className="mt-3"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))} />
          <Form.Control className="mt-3" type="file" onChange={selectFile} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Add new article
          </Button>
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Enter article title"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Enter article text"
                />
              </Col>
              <Col md={4}>
                <Button
                  variant="outline-danger"
                  onClick={() => removeInfo(i.number)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addItem}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateItem;
