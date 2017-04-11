import React from 'react';
import './ArrowDiv.scss';

const ArrowDiv = ({ text }) => (
  <div className="ArrowDiv">
    <div className="ArrowDiv-wrapper">
      <div className="arrow" />
      <h2 className="ArrowDiv-heading">{text}</h2>
    </div>
  </div>
);

export default ArrowDiv;
