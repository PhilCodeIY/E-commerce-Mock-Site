import React, { Component } from 'react';
//import the link ------
import { Link } from 'react-router-dom';
//import About from '../components/About';
import data from '../data.js';
//IMPORT STYLES
import '../styles/index.css';

export default class ActionFigures extends Component {

  render() {
    return (
      <div>
        <div className="card-title"></div>
        <div>&nbsp;</div>
        {data.filter(AF => AF.category === 'actionfigure').map(item => (
          <div>
            <ul id ="listing">
              <li>&nbsp;&nbsp;</li>
              <li>&nbsp;&nbsp;</li>
              <li>&nbsp;&nbsp;</li>
              <li><img className="img-list" src={item.img}></img></li>
              <li>&nbsp;{item.title}</li>
              <li>&nbsp;{item.description}</li>
              <li>&nbsp;{item.price}</li>
              <li><Link target="_blank" to={item.link}>Check out the eBay auction</Link></li>
            </ul>
          </div>
        ))}
      </div>

    )}}
