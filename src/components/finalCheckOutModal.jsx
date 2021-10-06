import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Input, Paper } from '@material-ui/core'; 
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




class FinalCheckOut extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:this.props.openEv
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClose=this.handleClose.bind(this);
        // this.finalOrderSubmit=this.onInputChange.bind(this);
    }
    

    handleSubmit(event){
        this.setState({open:false});
        this.props.handleCheck();
    }

    handleClose(ev){
        // console.log(this.props.finalOrderedItems[0][0]);
        this.setState({open:false});
        this.props.onCancel();
    }

    
    render() { 
        const OrderedData=this.props.finalOrderedItems;
        return(
            <React.Fragment>
                    <Dialog open={this.state.open} onClose={this.handleClose}  aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                                    <Typography gutterBottom variant="h4" align="center">
                                        Final Orders List
                                    </Typography>
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                <Paper elevation={5}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Items</th>
                                                <th scope="col">Amt</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">Rs(₹)</th>
                                            </tr>
                                        </thead>
                                    {this.props.finalOrderedItems.map((element,index)=>                                        
                                        <tbody>
                                            <tr>
                                                <th scope="row">{this.props.finalOrderedItems[index][0]}</th>
                                                <td>{ this.props.finalOrderedItems[index][2] }</td>
                                                <td>Kg</td>
                                                <td>{this.props.finalOrderedItems[index][1]}</td>
                                            </tr>
                                        </tbody>
                                            
                                    )}   
                                    </table>                                 
                                </Paper> 
                            </DialogContentText>
                            <br/>
                            <Divider variant="middle" />
                            </DialogContent>
                            <DialogActions>
                            <Button variant="outlined" onClick={this.handleClose} color="warning" size="medium">
                                Cancel
                            </Button>
                            <Button variant="outlined" onClick={this.handleSubmit} color="primary" size="medium">
                                Confirm
                            </Button>
                            </DialogActions>
                    </Dialog>
            </React.Fragment>
        );
    }
}
 
export default FinalCheckOut;