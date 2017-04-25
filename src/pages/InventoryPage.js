import React from 'react';
import './InventoryPage.scss';
import Inventory from '../components/Inventory';

const InventoryPage = () => (
  <div className="InventoryPage">
    <div className="title">My Workwear</div>
    <Inventory />
  </div>
);

export default InventoryPage;
