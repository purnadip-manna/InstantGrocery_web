import React, { Component } from 'react';
import rows from "../jsonTableData/tableData";
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";


class AddOrders extends React.Component {
    constructor(props){
        super(props);
        this.state={rowData:{},leftMargin:10,rightMargin:10};
        this.LeftmarginSet=this.LeftmarginSet.bind(this);
        this.RightMarginSet=this.RightMarginSet.bind(this);
        this.PrintData=this.PrintData.bind(this);
    }
    LeftmarginSet(val){
        this.setState({leftMargin:val})
    }
    RightMarginSet(val){
        this.setState({rightMargin:val})
    }

    PrintData(ev,val,rowData){
        console.log({ev,rowData});
        this.setState({rowData:rowData});
    }
    render() { 
        const columns = [
            {
                name: "Action",
                options: {
                  empty: true,
                  customBodyRender: (value, tableMeta, updateValue) =>
                      <Button variant="outlined" color="secondary" onClick={(e)=>this.PrintData(e,value,tableMeta.rowData)}>
                        {`Add`}
                      </Button>
                }
            },
            {
                name: "Items",
                options: {
                  hint: "?",
                  customBodyRender: val => {
                    let parentStyle = {
                      position: "absolute",
                      top: 0,
                      right: "2px",
                      bottom: 0,
                      left: "4px",
                      boxSizing: "border-box",
                      display: "block",
                      width: "100%"
                    };
                    let cellStyle = {
                      boxSizing: "border-box",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    };
                    return (
                      <div style={{ position: "relative", height: "20px" }}>
                        <div style={parentStyle}>
                          <div style={cellStyle}>{val}</div>
                        </div>
                      </div>
                    );
                  }
                }
            },
            {
                name: "Value",
                options: {
                    sort: true,
                    hint: "?",
                }
            }
            ];

        
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
            // selectableRows: true,
            selectableRows: "none",
            };
        const optionsCustomer={
            filter: false,
            filterType: "dropdown",
            selectableRows: "none",
            draggableColumns: {
                enabled: true
            },
            responsive: "standard",
            print:false,
            responsive: "scroll",
            // selectableRows: true,
            selectableRows: "none",
        }

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
                            <React.Fragment>
                                    <div className="ml-3 pl-4">
                                        <FormControl>
                                            <TextField
                                                label="Left Margin"
                                                type="number"
                                                value={this.state.leftMargin}
                                                onChange={e => this.LeftmarginSet(e.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <TextField
                                                label="Right Margin"
                                                type="number"
                                                value={this.state.rightMargin}
                                                onChange={e => this.RightMarginSet(e.target.value)}
                                            />
                                        </FormControl>
                                    </div>
                                    <div style={{ marginLeft: this.state.leftMargin + "px" , marginRight: this.state.rightMargin + "px" }}>
                                        <MUIDataTable
                                            title={"Mudidar Data"}
                                            data={rows}
                                            options={options}
                                            columns={columns}
                                        />
                                    </div>
                                </React.Fragment>
                            </div>
                        <div className="col-sm-2 col-md-2 ml-0 pl-0 mr-1 pr-0"></div>
                        <div className="col-sm-4 col-md-4 ml-0 pl-0 mr-1 pr-0">
                            <React.Fragment>
                                <div className="ml-3 pl-4">
                                    <FormControl>
                                        <TextField
                                            label="Left Margin"
                                            type="number"
                                            value={this.state.leftMargin}
                                            onChange={e => this.LeftmarginSet(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            label="Right Margin"
                                            type="number"
                                            value={this.state.rightMargin}
                                            onChange={e => this.RightMarginSet(e.target.value)}
                                        />
                                    </FormControl>
                                </div>
                                <div style={{ marginLeft: this.state.leftMargin + "px" , marginRight: this.state.rightMargin + "px" }}>
                                    <MUIDataTable
                                        title={"Mudidar Data"}
                                        data={rows}
                                        options={optionsCustomer}
                                        columns={columns}
                                    />
                                </div>
                            </React.Fragment>
                        </div>
                        <div className="col-sm-1 col-md-1 ml-0 pl-0 mr-1 pr-0"></div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AddOrders;