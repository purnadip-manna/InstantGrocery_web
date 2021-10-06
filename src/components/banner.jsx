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
                <div className="row mb-2 ml-1" id="banner">
                    <div className="col-sm-10">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="container-fluid">
                                <h1 className="display-4">{this.props.shopName}</h1>
                                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2" >
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