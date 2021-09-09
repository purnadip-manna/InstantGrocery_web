import React, { Component } from 'react';
import AddOrders from './addOrder';
import PantryDetails from './pantryDetails'
import ShowOrders from './showOrders';

class MainArea extends Component {
    render() {
        return (
            <div className="container-fluid">
                <AddOrders />
                {/* <PantryDetails /> */}
                {/* <ShowOrders /> */}
            </div>
        );
    }
}

export default MainArea;