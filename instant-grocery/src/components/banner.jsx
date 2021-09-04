import React, { Component } from 'react';

class Banner extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="row" id="banner">
                    <div className="col-sm-2 order-sm-1">
                        <img src="https://i.pinimg.com/originals/5d/26/a1/5d26a173f443cbd190e34481438d474b.png" id="shopLogo"></img>
                    </div>
                    <div className="col-sm-8 order-sm-2">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container-fluid">
                                <h1 className="display-4">{this.props.shopName}</h1>
                                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 order-sm-3">
                        <p id="timeDiv" onLoad={this.getTimeNow()}>00</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    getTimeNow = () =>{
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("timeDiv").innerText = time;
        document.getElementById("timeDiv").textContent = time;
        
        setTimeout(this.getTimeNow, 1000);
    }
}

 
export default Banner;