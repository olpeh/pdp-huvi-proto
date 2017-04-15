import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="Footer">
    <ul className="Footer-nav">
      <li><Link className="Footer-back-link" to="/">Back</Link></li>
    </ul>
  </div>
);

export default Footer;
