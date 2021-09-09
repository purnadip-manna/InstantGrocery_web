import React, { Component } from 'react';
import AddOrders from './addOrder';
import PantryDetails from './pantryDetails'

class MainArea extends React.Component {
    render() { 
        return (
            <div className="container-fluid">
                <AddOrders/>
                {/* <PantryDetails /> */}

            </div>
        );
    }
}
 
export default MainArea;