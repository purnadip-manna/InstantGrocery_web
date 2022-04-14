import { Button } from '@material-ui/core';
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
                <div className="container-fluid" style={{marginTop : "61px", height : "90vh"}}>
                    <div className='loginForm'>
                        <h1 className="h3 text-center">Welcome to Instant Grocery!</h1>
                        <br/>
                        <div className='row'>
                            <label>Enter Your Email:</label>
                            <input type={'email'} className='form-control' placeholder='abc123@mail.com'></input>
                        </div>
                        <br/>
                        <div className='row'>
                            <label>Enter Your Password:</label>
                            <input type={'password'} className='form-control'></input>
                        </div>
                        <br/>
                        <div className='row'>
                        <Button variant="contained" style={{backgroundColor : "#77ff77"}}>Login</Button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Home;