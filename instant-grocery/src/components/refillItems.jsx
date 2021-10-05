import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { FormControl, Typography } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";
import ModalOrder from './orderModal';
import ModalEditOrder from './EditModalOrder';
import FinalCheckOut from './finalCheckOutModal';
import itemDetails from '../jsonTableData/refillItemData';


class RefillItems extends React.Component {
    constructor(props){
        super(props);
        this.state={
            leftMargin:10,
            rightMargin:10,
            refillHeader : [
                {
                    name: "LastRefillDate",
                },
                {
                    name: "ItemName",
                    options: {
                        sort: true,
                    }
                },
                {
                    name: "Quantity",
                    options: {
                        sort: true,
                    }
                },
                {
                    name: "amount",
                    options: {
                        sort: true,
                    }
                },
                {
                    name: "Action1",
                    options: {
                      empty: true,
                      customBodyRender: (value, tableMeta, updateValue) =>
                          <Button variant="outlined" color="primary" onClick={(e)=>this.onClickhandle(e,tableMeta.rowIndex,tableMeta.rowData)}>
                            {`Refill`}
                          </Button>
                    }
                },
            ]
        }
        this.onClickhandle=this.onClickhandle.bind(this);
    }
    onClickhandle(sEv,rowIndex,rowData){
        alert((sEv,rowIndex,rowData));
    }
    render() {
        const options = {
            filter: true,
            filterType: "dropdown",
            selectableRows: "none",
            draggableColumns: {
                enabled: true
            },
            responsive: "standard",
            print:false,
            responsive: "scroll", 
            selectableRows: "none",
        };
        return(
            <React.Fragment>
                <div className="container-fluid ml-0 pl-4 mr-0 pl-0 pr-4 pt-2 pb-2 mt-1 mb-1">
                    <span  style={{width:"100%"}}>
                        <h4 className="text-center">
                            Pantry Details
                        </h4>
                    </span>
                    <br></br>
                    <br></br>
                    <div style={{ marginLeft: this.state.leftMargin + "px" , marginRight: this.state.rightMargin + "px" }}>
                        <MUIDataTable
                            data={itemDetails}
                            options={options}
                            columns={this.state.refillHeader}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default RefillItems;