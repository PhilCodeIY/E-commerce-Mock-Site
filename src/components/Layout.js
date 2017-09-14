import React, {Component} from 'react';


export default class BaseLayout extends Component {
  render(){
    return (
      <div>

        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">&copy;Phil The Great </span>

        </footer>
      </div>
    );
  }
}
