import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Context } from '..';
import { ADMIN_ROUTE, SHOP_ROUTE, SIGNIN_ROUTE, } from '../utils/consts';
import { useNavigate } from 'react-router-dom'

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          E-commerce
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Admin panel</Button>
            <Button variant={'outline-light'} onClick={() => navigate(SIGNIN_ROUTE)} className="ms-2">
              Sign-Out
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Sign-In
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
