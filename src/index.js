import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import {NavLink, Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/Layout';


//IMPORT COMPONENTS

import About from './components/About'
import ActionFigures from './components/ActionFigures';
import Comics from './components/Comics'
import Contact from './components/Contact';
import Home from './components/Home';
import TradingCards from './components/TradingCards';
import NavBar from './components/nav';


ReactDOM.render(
  <div>
    <Router>
      <BaseLayout>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
            <Route path="/Comics" component={Comics} />
            <Route path="/TradingCards" component={TradingCards} />
            <Route path="/ActionFigures" component={ActionFigures} />
          </Switch>
        </NavBar>
      </BaseLayout>
    </Router>
</div>
	, document.getElementById('root'));
registerServiceWorker();
