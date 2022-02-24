import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { signUp, signIn } from '../http/userApi';
import { SHOP_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts';

function Auth() {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname == SIGNIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await signIn(email, password);
      } else {
        data = await signUp(email, password);
      }
      console.log(user);
      user.setUser(user);
      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e);
    }
  };

  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5 ">
        <h2 className="m-auto">{isLogin ? 'Sign-In' : 'Sign-Up'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3 "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
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
            <Button variant={'dark'} onClick={auth}>
              {isLogin ? 'Sign-In' : 'Sign-Up'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
