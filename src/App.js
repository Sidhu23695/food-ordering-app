import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import OrderDetails from './components/OrderDetails/OrderDetails';
import MenuDetails from './components/MenuDetails/MenuDetails';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/food-ordering-app" element={<HomePage {...props} />} />
          <Route path="/menu" element={<MenuDetails {...props} />} />
          <Route path="/cart" element={<MenuDetails {...props} isCart={true} />} />
          <Route path="/order-details" element={<OrderDetails {...props} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
