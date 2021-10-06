import React, { Component } from 'react';


class Home extends Component {
    componentDidMount() {
        document.getElementById("sidebarToggle").style.display = "none";
        document.getElementById("appTitle").style.marginLeft = "auto";
        document.getElementById("appTitle").style.marginRight = "auto";
    }
    componentWillUnmount(){
        document.getElementById("sidebarToggle").style.display = "block";
    }

    render() { 
        return (
            <React.Fragment>
                <div className="container-fluid" style={{marginTop : "61px"}}>
                    <h1>Home</h1>
                    <p>this is home Div</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;