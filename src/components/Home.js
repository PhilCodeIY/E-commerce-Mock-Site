import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {

    let style = {
      "backgroundColor": "white",
      "backgroundSize": "cover",
      "height": "100%",
      "padding": "100px"
    }

    return (
        <div>
          <section className="row" style={style}>
                <hr/>
                  <p>
                    Welcome to Las Vegas Collectibles!!
                    Check out our products and bid on our auctions.
                  </p>
                  <img src="./images/frontpage.png"  alt = "Front Page" height="400" width="900" />

          </section>
        </div>
      );
    }
  }
