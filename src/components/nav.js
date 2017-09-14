import React, {Component} from 'react';

import {NavLink, Link} from 'react-router-dom';
import '../styles/index.css';

export default class NavBar extends Component {
  render() {

    let navTitle = {
      "display": "inline",
    }
    return (
    <div>
      <nav>
            <ul className="Categories">
                <li id ="listing">
                  <h1><Link to="/">Las Vegas Collectibles</Link></h1>
                </li>
                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/Comics">Comic Books</NavLink>
                </li>

                <li style={navTitle}>
                  <NavLink activeClassName="selected" className="nav-link" to="/ActionFigures">Action Figures</NavLink>
                </li>

                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/TradingCards">Trading Cards</NavLink>
                </li>

              
            </ul>
              <ul className="info">
                <li style={navTitle}>
                    <NavLink activeClassName="selected" className="nav-link" to="/About">About</NavLink>
                </li>

                <li style={navTitle}>
                  <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contacts</NavLink>
                </li>
            </ul>
      </nav>
      {this.props.children}
    </div>
    )
  }
}
