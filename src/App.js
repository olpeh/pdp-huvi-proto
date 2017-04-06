import React from 'react';
import { hashHistory } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import HelpPage from './components/HelpPage';
import RepairPage from './components/RepairPage';
import './App.less';

const Home = () => <FirstPage />;
const Help = () => <HelpPage />;
const Repair = () => <RepairPage />;

const App = () => (
  <Router history={hashHistory}>
    <div>
      <Link to="/">Lindström logo here!</Link>

      <Route exact path="/" component={Home} />
      <Route path="/help" component={Help} />
      <Route path="/repair" component={Repair} />

      <ul>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/repair">Repair</Link></li>
      </ul>
    </div>
  </Router>
);

export default App;
