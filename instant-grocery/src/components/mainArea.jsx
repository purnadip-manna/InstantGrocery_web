import React, { Component } from 'react';
import ControlBar from './controlBar';
import ShowOrders from './showOrders';

class MainArea extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-sm-2 mr-0 pr-0 pl-0 mt-1 mb-1 ml-0'>
                    <ControlBar />
                </div>
                <div className='col-sm-10 mr-0 pr-0 pl-0 mt-1 mb-1 ml-0'>
                    <ShowOrders />
                </div>
            </div>
        );
    }
}

export default MainArea;