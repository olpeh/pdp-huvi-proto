import React from 'react';
import './FirstPage.scss';
import { Link } from 'react-router-dom';
import LaundryInfo from '../components/LaundryInfo';

const FirstPage = () => (
  <div className="FirstPage">
    <LaundryInfo />
    <div className="FirstPage-nav">
      <Link className="FirstPage-nav-link" to="/contact">
        <div className="FirstPage-nav-link-icon icon-contact" />
        <div>
          Customer service
        </div>
      </Link>
      <Link className="FirstPage-nav-link" to="/inventory">
        <div className="FirstPage-nav-link-icon icon-inventory" />
        <div>
          My workwear
        </div>
      </Link>
      <Link className="FirstPage-nav-link" to="/store">
        <div className="FirstPage-nav-link-icon icon-store" />
        <div>
          Workwear Store
        </div>
      </Link>
    </div>
  </div>
);

export default FirstPage;
