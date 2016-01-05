import React from 'react';  
import {RouteHandler, Link} from 'react-router';

class Home extends React.Component {  
    render() {
        return (
            <section id="app--home">
                <h3>HOME Page</h3>

                <div className="row">
                    <div className="col-md-8">
                        This is me
                    </div>

                    <div className="col-md-4">
                        Another here
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;  
