import React, { Component } from 'react';
import OrderDetail from './order_detail';
import OrderList from './order_list';

class ShowOrders extends Component {
    render() {
        return (
            <React.Fragment>
                <OrderList/>
                <OrderDetail/>
            </React.Fragment>
        );
    }
}

export default ShowOrders;