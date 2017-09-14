import React, { Component } from 'react';
//import the link ------
import { Link } from 'react-router-dom';
//import About from '../components/About';

//IMPORT STYLES
import '../styles/App.css';

export default class About extends Component {
  render() {
    // INLINE STYLING

    let aboutStyle = {
      "backgroundColor": "white",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px",
    }
    return (
      <div className="app-body about offset col-lg-10 col-lg-offset-1">
        <section className="row" style={aboutStyle}>
          <article className="col-lg-6 col-lg-offset-3">
            <h4 className="headings">
              The History of Las Vegas Collectibles
              On May 15, 1905, Las Vegas officially was founded as a city, when 110 acres (45 ha), in what would later become downtown, were auctioned to ready buyers. Las Vegas was the driving force in the creation of Clark County, Nevada in 1909 and the city was incorporated in 1911 as a part of the county.
            </h4>
            <hr/>


          </article>
        </section>
      </div>
    );
  }
}
