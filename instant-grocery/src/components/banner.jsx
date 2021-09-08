import React, { Component } from 'react';

class Banner extends Component {
    constructor(props){
        super(props);
        this.state={date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }

    render() { 
        return (
            <React.Fragment>
                <div className="row" id="banner">
                    <div className="col-sm-2 order-sm-1">
                        <img src="https://i.pinimg.com/originals/5d/26/a1/5d26a173f443cbd190e34481438d474b.png" id="shopLogo" alt="Logo"></img>
                    </div>
                    <div className="col-sm-8 order-sm-2 pl-0">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container-fluid">
                                <h1 className="display-4">{this.props.shopName}</h1>
                                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 order-sm-3" >
                        <p id="timeDiv">
                            <strong>{this.state.date.toLocaleTimeString()} <br/></strong>
                            {this.state.date.toDateString()}<br/>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
        
    }
    
    
}

 
export default Banner;