import React from 'react';

import './App.css';
import OrderDetails from './components/OrderDetails/OrderDetails';
import MenuDetails from './components/MenuDetails/MenuDetails';

function App(props) {

  return (
    <div className="App">
      <p>
        Coming Soon - Food Apps
      </p>
      <OrderDetails {...props} />
      <MenuDetails />
    </div>
  );
}

export default App;
