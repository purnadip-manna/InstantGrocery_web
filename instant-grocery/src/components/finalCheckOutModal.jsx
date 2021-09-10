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
                                    <div className="row">
                                        <div className="col-sm-12 p-0 m-0">
                                            {this.props.finalOrderedItems.map((element,index)=>
                                                <div className="row ml-1 mr-0 pl-0 pr-0 pt-1 mt-0 mb-0 pb-0">
                                                    <List>
                                                        <ListItem>
                                                            <div className="col-sm-4 col-md-4 mr-1 pr-3 mt-1 mb-1 pt-0 pb-1 ml-0 pl-0">
                                                                
                                                                <ListItemText  primary={this.props.finalOrderedItems[index][0]} />
                                                                &nbsp;
                                                            </div>
                                                            <div className="col-sm-4 col-md-4 mr-1 pr-1 mt-1 mb-1 pt-0 pb-1 ml-1 pl-2">
                                                                
                                                            <ListItemText style={{textAlign:"center"}} primary={ this.props.finalOrderedItems[index][2] }/>
                                                            &nbsp;
                                                            </div>
                                                            <div className="col-sm-4 col-md-4 mr-1 pr-1 mt-1 mb-1 pt-0 pb-1 ml-2 pl-0">
                                                                
                                                                <ListItemText primary={"₹"+this.props.finalOrderedItems[index][1]} />
                                                                &nbsp;
                                                            </div>
                                                        </ListItem>
                                                    </List>
                                                </div>
                                                 
                                            )}
                                        </div>
                                    </div>
                                    
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