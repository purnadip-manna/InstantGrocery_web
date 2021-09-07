import React, { Component } from 'react';
import ControlBar from './controlBar';

class MainArea extends React.Component {
    render() { 
        return (
            <div className='row'>
                <div className='col-sm-2 mr-0 pr-2 mt-1 mp-1 mb-1 mp-1 ml-1 pl-2'>
                    <ControlBar/>
                </div>
            </div>
        );
    }
}
 
export default MainArea;