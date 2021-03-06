import React from 'react';
import { hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FirstPage from './pages/FirstPage';
import InventoryPage from './pages/InventoryPage';
import LaundryPage from './pages/LaundryPage';
import ContactPage from './pages/ContactPage';
import ChatPage from './pages/ChatPage';
import ReportPage from './pages/ReportPage';
import ScanPage from './pages/ScanPage';
import StorePage from './pages/StorePage';
import './App.scss';

const Home = () => <FirstPage />;
const Inventory = () => <InventoryPage />;
const Laundry = () => <LaundryPage />;
const Contact = () => <ContactPage />;
const Chat = ({ location }) => <ChatPage {...location} />;
const Report = props => <ReportPage {...props} />;
const Scan = () => <ScanPage />;
const Store = () => <StorePage />;

const App = props => (
  <Router history={hashHistory}>
    <div className="App">
      <Route path="*" component={Header} />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/laundry" component={Laundry} />
        <Route path="/contact" component={Contact} />
        <Route path="/chat" component={Chat} />
        <Route path="/report/:garment" component={Report} />
        <Route path="/scan" component={Scan} />
        <Route path="/store" component={Store} />
      </div>
      <Route path="*" component={Footer} />
    </div>
  </Router>
);

export default App;
