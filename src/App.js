import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import OrderDetails from './components/OrderDetails/OrderDetails';
import MenuDetails from './components/MenuDetails/MenuDetails';
import HomePage from './components/HomePage/HomePage';
import './App.css';

function App(props) {

  return (
    <Router>
      <div className="App">
        <Link to="/food-ordering-app">Home</Link> <br/>
        <Link to="/menu">Menu Card</Link> <br/>
        <Link to="/order-details">Order Details</Link> <br/>
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
