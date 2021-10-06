import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import TextField from '@material-ui/core/TextField';
import { FormControl, Typography } from '@material-ui/core'; 
import Button from "@material-ui/core/Button";
import ModalOrder from './orderModal';
import ModalEditOrder from './EditModalOrder';
import FinalCheckOut from './finalCheckOutModal';
import itemDetails from '../jsonTableData/refillItemData';
import RefillModal from './refillModal';

const customButtonStyle={
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius:"15px"
}
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
                        customBodyRender:(value,tableMeta,updateValue)=> 
                            <TextField id="standard-basic" variant="standard" defaultValue={value} 
                            onChange={(event)=>this.onChangeHandle(event,tableMeta.rowIndex,tableMeta.rowData)}/>
                    }
                },
                {
                    name: "Refill",
                    options: {
                      empty: true,
                      customBodyRender: (value, tableMeta, updateValue) =>
                          <Button variant="outlined" color="primary" onClick={(e)=>this.onClickhandle(e,tableMeta.rowIndex,tableMeta.rowData)}>
                            {`Refill`}
                          </Button>
                    }
                },
            ],
            allItems:itemDetails,
            openRefillDialogue:false,
            currentRefilItemDets:{}
        }
        this.onClickhandle=this.onClickhandle.bind(this);
        this.onChangeHandle=this.onChangeHandle.bind(this);
        this.onBlurHandler=this.onBlurHandler.bind(this);
        this.onFocusHandler=this.onFocusHandler.bind(this);
        this.onCancelRefill=this.onCancelRefill.bind(this);
        this.onSubmitRefill=this.onSubmitRefill.bind(this);


    }
    onClickhandle(sEv,rowIndex,rowData){
        this.setState({
            openRefillDialogue:true
        })
        this.setState({
            currentRefilItemDets:itemDetails[rowIndex]
        })
        // alert((rowIndex,rowData));
    }
    onChangeHandle(synEv,rowIndex,rwoMetaData){
        var newAmount=synEv.target.value;
        console.log(newAmount);
        var changedAmount=this.state.allItems;
        changedAmount[rowIndex].amount=newAmount;
        this.setState({allItems:changedAmount});
    }
    onCancelRefill(){
        this.setState({
            openRefillDialogue:!this.state.openRefillDialogue
        })
    }

    // handle the final submitted data from refill modal (or) dialogue
    onSubmitRefill(){
        this.setState({
            openRefillDialogue:!this.state.openRefillDialogue
        });
        alert("succfully changed the data");
    }

    // handle the click outside of the dialogue
    onBlurHandler() {    
        this.timeOutId = setTimeout(() => {   
            this.setState({ openRefillDialogue: ! this.state.openRefillDialogue
                 });
        }); 
    }
    onFocusHandler() {    
        clearTimeout(this.timeOutId);  
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
                    <span style={{ marginLeft:"5px" }}>
                        <button class="button" style={customButtonStyle}>
                            Add Item
                        </button>
                    </span>
                    <br></br>
                    <div style={{ marginLeft: this.state.leftMargin + "px" , marginRight: this.state.rightMargin + "px" }}>
                        <MUIDataTable
                            data={this.state.allItems}
                            options={options}
                            columns={this.state.refillHeader}
                        />
                    </div>

                    <div
                    onFocus={this.onFocusHandler}          
                    onBlur={this.onBlurHandler}>
                        {this.state.openRefillDialogue ?
                        <RefillModal
                        open={this.state.openRefillDialogue}
                        onCancelRefill={this.onCancelRefill}
                        onSubmitRefill={this.onSubmitRefill}
                        itemData={this.state.currentRefilItemDets}
                        /> : null}
                    </div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default RefillItems;