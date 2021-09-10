import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import OrderListData from "../jsonTableData/orderList";

class OrderList extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                name: "order_id",
                options: {
                    display: false,
                }
            },
            { name: "Name" },
            { name: "Contact" },
            { name: "Time" },
            { name: "Status" },
            { name: "Total" },
            {
                name: "View",
                options: {
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <Button variant="outlined" color="secondary" onClick={(e) => this.revealDetailWindow(tableMeta.rowIndex)}>
                            {`View`}
                            </Button>
                        )
                    }
                }
            }
        ];

        this.data = OrderListData;

        this.options = {
            filterType: 'checkbox',
            selectableRows: false,
            paging: false
        };
    }

    render() {
        return (
            <React.Fragment>
                    <MUIDataTable
                        title={"Order List"}
                        columns={this.columns}
                        data={this.data}
                        options={this.options}
                    />
            </React.Fragment>
        );
    }

    revealDetailWindow(id) {
        let order_id = this.data[id].order_id;
        window.location = "/#"+order_id;
    }
}

export default OrderList;