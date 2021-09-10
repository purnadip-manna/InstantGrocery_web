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
        this.props.handleCheckOut();
    }

    handleClose(ev){
        // console.log(this.props.finalOrderedItems[0][0]);
        this.props.handleCheckOut();
        this.setState({open:false});
    }

    
    render() { 
        const OrderedData=this.props.finalOrderedItems;
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
                                    {this.props.finalOrderedItems.map((element,index)=>
                                        <List>
                                            <ListItem>
                                                <ListItemText primary={this.props.finalOrderedItems[index][0]} />
                                                &nbsp;&nbsp;&nbsp; 
                                                <ListItemText primary={ this.props.finalOrderedItems[index][2] }/>
                                                &nbsp;&nbsp;&nbsp;
                                                <ListItemText secondary="₹"/>
                                                <ListItemText primary={this.props.finalOrderedItems[index][1]} />
                                                &nbsp;&nbsp;&nbsp;
                                            </ListItem>
                                        </List> 
                                    )}
                                </Paper> 
                            </DialogContentText>
                            <br/>
                            <Divider variant="middle" />
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
 
export default FinalCheckOut;