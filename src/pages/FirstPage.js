import React from 'react';
import './FirstPage.scss';
import { Link } from 'react-router-dom';

const FirstPage = () => (
  <div className="FirstPage">
    <Link className="FirstPage-link" to="/inventory">Inventory</Link>
    <Link className="FirstPage-link" to="/laundry">Laundry information</Link>
    <Link className="FirstPage-link" to="/contact">Contact Lindström</Link>
    <Link className="FirstPage-link" to="/report">Report broken clothes</Link>
    <Link className="FirstPage-link" to="/store">Store</Link>
  </div>
);

export default FirstPage;
