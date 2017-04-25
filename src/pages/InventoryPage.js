import React from 'react';
import './InventoryPage.scss';
import Inventory from '../components/Inventory';

const InventoryPage = () => (
  <div className="InventoryPage">
    <div className="title">Your Inventory</div>
    <Inventory />
  </div>
);

export default InventoryPage;
