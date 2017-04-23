import React from 'react';
import moment from 'moment';
import './LaundryInfo.scss';

const LaundryInfo = () => (
  <div className="LaundryInfo">
    <h1 className="LaundryInfo-heading">My week</h1>
    <span className="LaundryInfo-week-number">{moment().format('W')}</span>
    <div className="LaundryInfo-date-info">
      {moment().format('LLLL')}
    </div>
    <div className="LaundryInfo-visual-info">
      TODO: LaundryInfo here!
    </div>
  </div>
);

export default LaundryInfo;
