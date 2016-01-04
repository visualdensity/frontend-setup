import React from 'react';  
import {RouteHandler, Link} from 'react-router';

class About extends React.Component {  
  render() {
    return (
      <div>
            <h1>About Page</h1>

            <p>This is about me! Yay!!</p>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
      </div>
    );
  }
}

export default About;  
