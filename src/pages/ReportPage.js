import React from 'react';
import { Link } from 'react-router-dom';

const ReportPage = () => (
  <div className="ReportPage">
    Select from a list of garments
    <Link className="ReportPage-link" to="scan">Scan broken garment</Link>
  </div>
);

export default ReportPage;
