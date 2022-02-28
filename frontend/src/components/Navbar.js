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

  const logout = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white', fontSize: 28, textDecoration: 'none' }} to={SHOP_ROUTE}>
          BRIGO
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ. панель</Button>
            <Button variant={'outline-light'} onClick={() => logout()} className="ms-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(SIGNIN_ROUTE)}
            >
              Войти
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
