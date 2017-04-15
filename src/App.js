import React from 'react';
import { hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstPage from './pages/FirstPage';
import InventoryPage from './pages/InventoryPage';
import LaundryPage from './pages/LaundryPage';
import ContactPage from './pages/ContactPage';
import ReportPage from './pages/ReportPage';
import './App.scss';

const Home = () => <FirstPage />;
const Inventory = () => <InventoryPage />;
const Laundry = () => <LaundryPage />;
const Contact = () => <ContactPage />;
const Report = () => <ReportPage />;

const App = () => (
  <Router history={hashHistory}>
    <div className="App">
      <Header />
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
