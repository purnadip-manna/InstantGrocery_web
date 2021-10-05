import React, { Component } from 'react';
import rows from "../jsonTableData/tableData";
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";
import ModalOrder from './orderModal';
import ModalEditOrder from './EditModalOrder';
import FinalCheckOut from './finalCheckOutModal';

class AddOrders extends Component {
    
    constructor(props){
        super(props);
        this.state={rowData:{},leftMargin:10,rightMargin:10,orderedItems:[],addedItems:false,
                    customerColums:[],
                    columnsCustomer : [
                        {
                            name: "Items",
                        },
                        {
                            name: "Value",
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
                            name: "Action",
                            options: {
                              empty: true,
                              customBodyRender: (value, tableMeta, updateValue) =>
                                  <Button variant="outlined" color="secondary" onClick={(e)=>this.deleteItemsOrder(e,tableMeta.rowIndex,tableMeta.rowData)}>
                                    {`Delete`}
                                  </Button>
                            }
                        },
                        {
                            name: "Action1",
                            options: {
                              empty: true,
                              customBodyRender: (value, tableMeta, updateValue) =>
                                  <Button variant="outlined" color="primary" onClick={(e)=>this.onEdithandle(e,tableMeta.rowIndex,tableMeta.rowData)}>
                                    {`Edit`}
                                  </Button>
                            }
                        },
                    ],modalShow:false,editDialog:false,editRowData:{},selectedRow:0,finalCheckOut:false};
        this.LeftmarginSet=this.LeftmarginSet.bind(this);
        this.RightMarginSet=this.RightMarginSet.bind(this);
        this.PrintData=this.PrintData.bind(this);
        this.deleteItemsOrder=this.deleteItemsOrder.bind(this);
        this.handleFinalOrderItem=this.handleFinalOrderItem.bind(this);
        this.handleDialog=this.handleDialog.bind(this);
        this.timeOutId = null;
        this.editTimeOutId=null;

        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onFocusHandler = this.onFocusHandler.bind(this); 
        this.onEdithandle=this.onEdithandle.bind(this);
        this.handleEditDialog=this.handleEditDialog.bind(this);
        this.onFinalOrderEditChange=this.onFinalOrderEditChange.bind(this);

        this.cancelOrder=this.cancelOrder.bind(this);
        this.handleCheckOut=this.handleCheckOut.bind(this);
        this.handleFinalOrder=this.handleFinalOrder.bind(this);
    }
    
    
    LeftmarginSet(val){
        this.setState({leftMargin:val})
    }
    RightMarginSet(val){
        this.setState({rightMargin:val})
    }
    //handle the dialoge open and close event
    handleDialog(){
        this.setState(currState=>({
            modalShow : !currState.modalShow
        }))
    }
    handleEditDialog(){
        this.setState({editDialog:!this.state.editDialog})
    }

    PrintData(ev,val,rowData){
        // console.log(rowData);
        this.setState({rowData:rowData});
        
        this.state.modalShow=true;
    }

    handleFinalOrderItem(val){
        // console.log(val);
        const amount=val[0];
        const quantity=val[1];
        
        const orderdItem=[this.state.rowData[0],quantity,amount];
        this.state.orderedItems.push(orderdItem);
        this.state.addedItems=true;
        if(this.state.addedItems==true){
            this.state.customerColums=this.state.columnsCustomer.map(obj=> obj);
        }
        this.setState({rowData:this.state.rowData.push(val)});
        this.setState({modalShow:false});
        
    }

    onFinalOrderEditChange(value){
        const am=value[1];
        const qua=value[2];

        const orderdItem=[value[0],qua,am];
        const newOrderObj=this.state.orderedItems;
        newOrderObj[this.state.selectedRow]=orderdItem;

        this.setState({orderedItems:newOrderObj})

       

        this.setState({editDialog:false});
    }


    deleteItemsOrder(ev,rowIndex,delRowData){
        this.state.orderedItems.splice(rowIndex,1);
        this.setState({orderedItems:this.state.orderedItems});
        // console.log(rowIndex);
    }

    onEdithandle(ev,rowIndex,RowData){
        console.log("edit is happening at row: "+rowIndex);
        this.setState({selectedRow:rowIndex});
        this.setState({editDialog:true});
        this.setState({editRowData:RowData})
        
    }

    //after opening the dialog if we clicked out side we have to set the modalShow to false
    onBlurHandler() {    
        this.timeOutId = setTimeout(() => {   
            this.setState({ modalShow: false
                 });
        }); 
    }
    //when we clicked the button we add a timeOut
    onFocusHandler() {    
        clearTimeout(this.timeOutId);  
        // clearTimeout(this.editTimeOutId);
    }

    cancelOrder(ev){
        alert("all Orders will be deleted");
        this.setState({orderedItems:[]});
    }

    handleCheckOut(){
        this.setState({finalCheckOut:!this.state.finalCheckOut});
    }


    handleFinalOrder(){
        this.setState({orderedItems:[]})
        this.setState({finalCheckOut:false});
    }

    render() { 
        const columns = [
            {
                name: "Items",
                options: { 
                  customBodyRender: val => {
                    let parentStyle = {
                      position: "absolute",
                      top: 0,
                      right: "1px",
                      bottom: 0,
                      left: "2px",
                      boxSizing: "border-box",
                      display: "block",
                      width: "100%"
                    };
                    return (
                      <div style={{ position: "relative", height: "20px" }}>
                        <div style={parentStyle}>
                          <div>{val}</div>
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
                }
            },
            {
                name: "Action",
                options: {
                  empty: true,
                  customBodyRender: (value, tableMeta, updateValue) =>
                      <Button variant="outlined" color="secondary" size="small"  onClick={(e)=>this.PrintData(e,value,tableMeta.rowData)}>
                        {`Add`}
                      </Button>
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
            selectableRows: "none",
        };

        const optionsCustomer={
            filter: false,
            filterType: "dropdown",
            selectableRows: "none",
            draggableColumns: {
                enabled: true
            },
            responsive: "scroll",
            print:false, 
            
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
                        <div className="col-sm-4 col-md-4 offset-sm-1 offset-md-1 ml-0 pl-0 mr-1 pr-0 pb-2 mb-1">
                                <React.Fragment>
                                    <div style={{ marginLeft: 10 + "px" , marginRight: 10 + "px" }}>
                                        <MUIDataTable
                                            title={"Mudidar Data"}
                                            data={rows}
                                            options={options}
                                            columns={columns}
                                        />
                                    </div>
                                </React.Fragment>
                            </div>
                        <div className="col-sm-2 col-md-1 ml-0 pl-0 mr-1 pr-0"></div>
                        <div className="col-sm-4 col-md-4 offset-sm-2 offset-md-2 ml-0 pl-0 mr-1 pr-0">
                            <div className="row ml-0 mr-0 pl-0 pr-0" style={{width:"100%"},{maxWidth:"100%"}}>
                                <div className="col-sm-12 col-md-12 ml-1 pl-0 mr-1 pr-0 mt-3 pt-2 pl-0 ml-1">
                                    <React.Fragment>
                                        <div style={{ marginLeft: 10 + "px" , marginRight: 10 + "px" }}>
                                            <MUIDataTable
                                                title={"Ordered Data"}
                                                data={this.state.orderedItems}
                                                options={optionsCustomer}
                                                columns={this.state.customerColums}
                                            />
                                        </div>
                                    </React.Fragment>
                                </div>
                            </div>
                            <div className="row mt-1 pt-3 mb-1 pb-1 pl-0 pr-0 ml-1 mr-1">
                                <Button variant="contained" color="secondary" size="medium" onClick={this.cancelOrder}>
                                    Cancel Order
                                </Button>
                                <Button className="ml-1 pl-3" variant="contained" color="primary" size="medium" onClick={this.handleCheckOut}>
                                    CheckOut
                                </Button>
                            </div>
                        </div>
                        <div className="col-sm-1 col-md-1 ml-0 pl-0 mr-1 pr-0"></div>
                    </div>
                </div>
                  
                <div 
                onBlur={this.onFocusHandler}          
                onFocus={this.onBlurHandler}>

                    {this.state.editDialog ? 
                    <ModalEditOrder
                    openEv={this.state.editDialog}
                    eventName={'edit'}
                    orderData={this.state.editRowData}
                    onFinalOrderEditChange={this.onFinalOrderEditChange}
                    handleDialog={this.handleEditDialog}
                    /> : null}

                </div>

                <div 
                onBlur={this.onBlurHandler}          
                onFocus={this.onFocusHandler}>

                    {this.state.modalShow ?
                    <ModalOrder
                    openEv={this.state.modalShow}
                    orderData={this.state.rowData}
                    onFinalOrderChange={this.handleFinalOrderItem}
                    handleDialog={this.handleDialog}
                    /> : null}
                </div>

                <div >

                    {this.state.finalCheckOut ?
                    <FinalCheckOut
                    openEv={this.state.finalCheckOut}
                    finalOrderedItems={this.state.orderedItems}
                    handleCheck={this.handleFinalOrder}
                    onCancel={this.handleCheckOut}
                    /> : null}
                </div>

            </React.Fragment>
        );
    }
}
 
export default AddOrders;