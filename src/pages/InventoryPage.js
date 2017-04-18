import React from 'react';
import Footer from '../components/Footer';
import './InventoryPage.scss';
import Inventory from '../components/Inventory';

const InventoryPage = () => (
  <div className="InventoryPage">
	<div className="title">Your Inventory</div>
	<Inventory />
    <Footer />
  </div>
);

export default InventoryPage;
