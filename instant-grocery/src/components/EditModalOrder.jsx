import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Input, Paper } from '@material-ui/core'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PaymentIcon from '@material-ui/icons/Payment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




class ModalEditOrder extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:this.props.openEv,
            value:this.props.orderData[1],
            selectedAmount:this.props.orderData[2]
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.onInputChange=this.onInputChange.bind(this);
    }
    

    handleSubmit(event){
        const newItemList=[this.props.orderData[0],this.state.selectedAmount,this.state.value];
        this.props.onFinalOrderEditChange(newItemList);
        console.log(newItemList);
        this.setState({open:false});
    }

    handleClose(ev){
        this.setState({open:false});
        this.props.handleDialog();
    }

    onInputChange(e){
        const am=e.target.value;
        this.setState({value:(am*(this.props.orderData[1]/this.props.orderData[2]))});
        this.setState({selectedAmount:e.target.value});
    }
    
    render() { 
        const OrderedData=this.props.orderData;
        return(
            <React.Fragment>
                    <Dialog open={this.state.open} onClose={this.handleClose}  aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                                    <Typography gutterBottom variant="h4" align="center">
                                        Edit Orders
                                    </Typography>
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                                <Paper elevation={5}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <LocalMallIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Item" secondary={OrderedData[0]} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <PaymentIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Cost Of single Item" secondary={OrderedData[1]/OrderedData[2]} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <PaymentIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary="Previously Selected Amonut" secondary={this.props.orderData[2]}/>
                                        </ListItem>
                                    </List> 
                                </Paper> 
                            </DialogContentText>
                            <br/>
                            <Divider variant="middle" />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Value"
                                type="number"
                                fullWidth
                                value={this.state.value}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameQuan"
                                label="Amount"
                                type="number"
                                fullWidth
                                onChange={this.onInputChange}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose} color="warning">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} color="primary">
                                Confirm
                            </Button>
                            </DialogActions>
                    </Dialog>
            </React.Fragment>
        );
    }
}
 
export default ModalEditOrder;