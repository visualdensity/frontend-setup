import React from 'react';  
import {RouteHandler, Link} from 'react-router';

import '../styles/stylesheets/main.scss'

class Main extends React.Component {  
  render() {
    return (
      <div className="container">
            <h1>Welcome to App</h1>
            
            <ul className="list-inline">
                <li><Link className="btn btn-default" to="Home">Home</Link></li>
                <li><Link className="btn btn-default" to="about">About</Link></li>
            </ul>

            <section>
                { this.props.children}
            </section>
      </div>
    );
  }
}

export default Main;  
