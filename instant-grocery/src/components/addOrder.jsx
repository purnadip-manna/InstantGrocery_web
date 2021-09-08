import React, { Component } from 'react';
 

class AddOrders extends React.Component {
    render() { 
        return(
            <React.Fragment>
                <div className="container-fluid ml-0 pl-4 mr-0 pl-0 pr-4 pt-2 pb-2 mt-1 mb-1">
                    <div className="row justify-content-center">
                        <div className="justify-content-center align-items-center">
                            <h2>Add Order</h2>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-2 mt-1 ml-0 pl-0 mr-0 pr-0">
                        <div className="col-sm-1 col-md-1 ml-0 pl-0 mr-1 pr-0"></div>
                            <div className="col-sm-4 col-md-4 ml-0 pl-0 mr-1 pr-0">
                                <strong>AvailableItems</strong>
                            </div>
                        <div className="col-sm-2 col-md-2 ml-0 pl-0 mr-1 pr-0"></div>
                        <div className="col-sm-4 col-md-4 ml-0 pl-0 mr-1 pr-0">
                            {/* <div className="card ml-0 pl-0 mr-0 pr-0"> */}
                                <strong>ordered-items</strong>
                            {/* </div> */}
                        </div>
                        <div className="col-sm-1 col-md-1 ml-0 pl-0 mr-1 pr-0"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AddOrders;