import React, { Component } from 'react';
import AddOrders from './addOrder';
import ControlBar from './controlBar';

class MainArea extends React.Component {
    render() { 
        return (
            <div className='row'>
                <div className='col-sm-2 mr-0 pr-0 pl-0 mt-1 mb-1 ml-0'>
                    <ControlBar/>
                </div>
                <div className="col-sm-10 mr-0 pr-0 ml-0 pl-0 mt-1 mb-1">
                    <AddOrders/>
                </div>
            </div>
        );
    }
}
 
export default MainArea;