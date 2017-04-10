import React from 'react';
import { hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import HelpPage from './components/HelpPage';
import RepairPage from './components/RepairPage';
import './App.scss';

const Home = () => <FirstPage />;
const Help = () => <HelpPage />;
const Repair = () => <RepairPage />;

const App = () => (
  <Router history={hashHistory}>
    <div className="App">
      <div className="header">
        <Link className="logo" to="/" />
      </div>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/help" component={Help} />
        <Route path="/repair" component={Repair} />
      </div>
      <div className="footer">
        <ul className="nav">
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/repair">Repair</Link></li>
        </ul>
      </div>
    </div>
  </Router>
);

export default App;
