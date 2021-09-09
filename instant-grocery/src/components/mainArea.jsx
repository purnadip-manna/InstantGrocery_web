import React, { Component } from 'react';
import ControlBar from './controlBar';
import OrderDetail from './order_detail';
import OrderList from './order_list';

class MainArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isShown": false
        };
        this.changeState = this.changeState.bind(this);
        this.showOrderView = this.showOrderView.bind(this);
        this.loadOrderDetailView = this.loadOrderDetailView.bind(this);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-2 mr-0 pr-0 pl-0 mt-1 mb-1 ml-0'>
                    <ControlBar />
                </div>
                <div className={this.loadOrderDetailView()}>
                    <OrderList
                        showDetails={this.changeState}
                    />
                </div>
                <div id={this.showOrderView()} className="col-sm-3 mr-0 pr-0 ml-0 pl-0 mt-1 mb-1">
                    <OrderDetail
                        hideDetails={this.changeState}
                    />
                </div>
            </div>
        );
    }

    changeState(val) {
        this.setState({ "isShown": val });
    }

    loadOrderDetailView() {
        console.log("state.isShown: " + this.state.isShown);
        return this.state.isShown ? "col-sm-7 mr-0 pr-0 ml-0 pl-0 mt-1 mb-1" : "col-sm-10 mr-0 pr-0 ml-0 pl-0 mt-1 mb-1";
    }

    showOrderView() {
        console.log("state.isShown: " + this.state.isShown);
        return this.state.isShown ? "text" : "hidden";
    }
}

export default MainArea;