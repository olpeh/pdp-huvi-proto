import React from 'react';
import { hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import InventoryPage from './components/InventoryPage';
import LaundryPage from './components/LaundryPage';
import ContactPage from './components/ContactPage';
import ReportPage from './components/ReportPage';
import './App.scss';

const Home = () => <FirstPage />;
const Inventory = () => <InventoryPage />;
const Laundry = () => <LaundryPage />;
const Contact = () => <ContactPage />;
const Report = () => <ReportPage />;

const App = () => (
  <Router history={hashHistory}>
    <div className="App">
      <div className="header">
        <Link className="logo" to="/" />
      </div>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/laundry" component={Laundry} />
        <Route path="/contact" component={Contact} />
        <Route path="/report" component={Report} />
      </div>
    </div>
  </Router>
);

export default App;
