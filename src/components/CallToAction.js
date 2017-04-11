import React from 'react';
import './CallToAction.scss';

const CallToAction = ({ text }) => (
  <div className="CallToAction">
    <div className="CallToAction-wrapper">
      <h2 className="CallToAction-heading">{text}</h2>
    </div>
  </div>
);

export default CallToAction;
