import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class Contact extends Component {
  render() {

  let style = {
    "backgroundColor": "white",
    "backgroundSize": "cover",
    "height": "100%",
    "padding": "100px",

  }

    return (
      <div>
        <section className="row" style={style}>
          <div id="contact-info">
            <h6>.</h6>
                <img src="http://www.dccomics.com/sites/default/files/styles/featured_pane_wide/public/featured_pane_images/616x250_Rebirth_589d010982ea68.92071500_58bdeb223162b4.02516399.jpg" alt = "Contact DC" height="250" width="508" />
              </div>

              <h4>Here are a few ways to contact me:</h4>

              <div id="contacts">
                <ul id="thecontacts">
                    <li>email: <a href="mailto:Phils89144@gmail.com" >Phil Schwartz</a></li>
                    <li>Phone / Text: <a href="tel:516.884.0756">516.884.0756</a></li>

                    <li>
                      <NavLink to="https://github.com/PhilCodeIY" target="_blank" textDecoration= "none">
                        Git Hub
                      </NavLink>
                    </li>

                    <li>
                      <Link to="https://www.facebook.com/phil.schwartz.73" target="_blank">
                        Facebook
                      </Link>
                    </li>

                    <li>
                      <Link to="https://www.linkedin.com/in/philip-schwartz-45a744146/" target="_blank">
                        linkedin
                      </Link>
                    </li>
                </ul>
          </div>
        </section>
      </div>
      )
    }
  }
