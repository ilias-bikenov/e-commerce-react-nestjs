import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
