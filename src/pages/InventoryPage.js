import React from 'react';
import './InventoryPage.scss';
import Inventory from '../components/Inventory';
import { Link } from 'react-router-dom'; 

const InventoryPage = () => (
  <div className="InventoryPage">

    <div className="QR-code-info">
      <Link className="image" to="scan"/>
      <div className="text">
        You can scan QR-code on the clothing tag or search from the list below
      </div>
    </div>

    <Inventory />
  </div>
);

export default InventoryPage;
