import React from 'react';
import { Link } from 'react-router-dom';
import './HelpPage.scss';

const HelpPage = () => (
  <div className="HelpPage">
    <Link className="HelpPage-link" to="/report">Report missing clothes</Link>
    <Link className="HelpPage-link" to="/contact">Contact Lindström</Link>
  </div>
);

export default HelpPage;
