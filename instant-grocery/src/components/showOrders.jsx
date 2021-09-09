import React, { Component } from 'react';
import OrderDetail from './order_detail';
import OrderList from './order_list';

class ShowOrders extends Component {
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
            <React.Fragment>
                <div className='row'>
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
            </React.Fragment >
        );
    }

    changeState(val) {
        this.setState({ "isShown": val });
    }

    loadOrderDetailView() {
        return this.state.isShown ? "col-sm-9 mr-0 pr-0 ml-0 pl-0 mt-1 mb-1" : "col-sm-12 mr-0 pr-2 ml-0 pl-0 mt-1 mb-1";
    }

    showOrderView() {
        return this.state.isShown ? "text" : "hidden";
    }
}

export default ShowOrders;