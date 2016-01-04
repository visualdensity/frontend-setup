import React from 'react';  
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {  
  render() {
    return (
      <div>
            <h1>Welcome to App</h1>
            
            <ul>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="about">About</Link></li>
            </ul>

            <section>
                { this.props.children}
            </section>
      </div>
    );
  }
}

export default Main;  
