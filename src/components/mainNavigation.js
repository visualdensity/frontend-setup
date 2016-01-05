import React from 'react';  
import {RouteHandler, Link} from 'react-router';

class MainNavigation extends React.Component {  
  render() {
    return (
        <ul className="nav nav-tabs">
            <li role="presentation" className="active"><Link to="Home">Home</Link></li>
            <li role="presentation"><Link to="about">About</Link></li>
        </ul>
    );
  }
}

export default MainNavigation;  
