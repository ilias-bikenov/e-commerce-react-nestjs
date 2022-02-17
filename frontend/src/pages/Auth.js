import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { SIGNIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname == SIGNIN_ROUTE;
  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5 ">
        <h2 className="m-auto">{isLogin ? 'Sign-In' : 'Sign-Up'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Email" />
          <Form.Control className="mt-3 " placeholder="Password" />
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                No account? <NavLink to={SIGNUP_ROUTE}>Sign-Up</NavLink>
              </div>
            ) : (
              <div>
                Already have account?{' '}
                <NavLink to={SIGNIN_ROUTE}>Sign-In</NavLink>
              </div>
            )}
            <Button variant={'dark'}>{isLogin ? 'Sign-In' : 'Sign-Up'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
