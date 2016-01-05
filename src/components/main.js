import React from 'react';  
import {RouteHandler, Link} from 'react-router';

import MainNavigation from 'components/mainNavigation';

import '../styles/stylesheets/main.scss'

class Main extends React.Component {  
    render() {
        return (
            <div className="container" id="top-container">
                <h2 id="top-heading">ReactJS Boilerplate</h2>

                <MainNavigation />

                <div id="main--sub-component">
                    { this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;  
