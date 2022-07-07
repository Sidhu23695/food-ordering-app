import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ButtonGroup, Button } from 'react-bootstrap'

import OrderDetails from './components/OrderDetails/OrderDetails';
import MenuDetails from './components/MenuDetails/MenuDetails';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  // const currentPath = window.location.pathname;
  const [currentPath, updateCurrentPath] = useState(window.location.pathname);
  const buttonDetails = [
    {
      id: 1,
      link: '/food-ordering-app',
      title: 'Home',
      variant: 'primary'
    },
    {
      id: 2,
      link: '/menu',
      title: 'Menu Card',
      variant: 'success'
    },
    {
      id: 3,
      link: '/order-details',
      title: 'Order Details',
      variant: 'warning'
    }
  ]
  const exactPath = (path) => {
    return (path === currentPath) ? true : false
  }
  const buttonGenerator =  (button) => {
      return !exactPath(button.link) ? 
      <Link to={button.link}><Button variant={button.variant} onClick={() => updateCurrentPath(button.link)}>{button.title}</Button></Link>
      : <Button variant={button.variant} disabled={true}>{button.title}</Button>
  }

  return (
    <Router>
      <div className="App">
        <ButtonGroup aria-label="Basic example">
          {buttonDetails.map((button, i) => buttonGenerator(button))}
        </ButtonGroup>
        <Routes>
          <Route path="/food-ordering-app" element={<HomePage {...props} />} />
          <Route path="/menu" element={<MenuDetails {...props} />} />
          <Route path="/order-details" element={<OrderDetails {...props} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
