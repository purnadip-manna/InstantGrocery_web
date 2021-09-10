import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';
import { Button } from '@material-ui/core';
import OrderSampleData from '../jsonTableData/orderSample';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            { name: "item_name" },
            { name: "quantity" },
            { name: "unit" },
            { name: "price" }
        ];

        this.data = OrderSampleData;

        this.options = {
            filterType: 'checkbox',
        };
    }

    render() {
        return (
            <React.Fragment>
            <div className='orderBill-panel show-menu' id="1">
                <div className='col-12 p-0'>
                <MUIDataTable
                title={"Order Details"}
                columns={this.columns}
                data={this.data}
                options={this.options}
                />
                <div className="modal-footer">
                <a href="#" style={{textDecoration: "none"}}>
                <Button variant="outlined" color="secondary" size="medium">
                    {`Cancel`}
                </Button>
                </a>
                &nbsp;
                <a href="#" style={{textDecoration: "none"}}>
                <Button variant="outlined" color="primary" size="medium">
                    {`Confirm`}
                </Button>
                </a>
                </div>
                </div>
            </div>
            </React.Fragment >
        );
    }
}

export default OrderDetail;