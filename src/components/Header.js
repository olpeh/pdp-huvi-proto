import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="Header">
    <Link className="Header-logo" to="/" />
  </div>
);

export default Header;
