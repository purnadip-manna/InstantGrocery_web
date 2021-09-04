import React, { Component } from 'react';

class Banner extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}
 
export default Banner;