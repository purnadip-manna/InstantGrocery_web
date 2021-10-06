import React, { Component } from 'react';
import OrderDetail from './order_detail';
import OrderList from './order_list';

class ShowOrders extends Component {
    render() {
        return (
            <div className="container-fluid">
                <OrderList/>
                <OrderDetail/>
            </div>
        );
    }
}

export default ShowOrders;