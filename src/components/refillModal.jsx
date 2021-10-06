import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';



class RefillModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open:this.props.open,
            RefillItemData:this.props.itemData
        }
        this.handleClose=this.handleClose.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleClose(){
        this.setState({
            open:false
        })
    }
    handleCancel(){
        this.setState({
            open:false
        })
        this.props.onCancelRefill();
    }
    handleSubmit(){
        this.setState({
            open:false
        })
        this.props.onSubmitRefill();
    }
    render() { 
        return(
            <React.Fragment>
                <Dialog open={this.state.open} onClose={this.handleClose}  aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                                    <Typography gutterBottom variant="h4" align="center">
                                        Refill
                                    </Typography>
                            </DialogTitle>
                            <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Item Name"
                                type="text"
                                value={this.state.RefillItemData.ItemName}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Item Quantity"
                                type="text"
                                value={this.state.RefillItemData.Quantity}
                                fullWidth
                            />
                            
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Price for EachItem"
                                type="text"
                                value='12'
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Unit"
                                type="text"
                                value="kg"
                                fullWidth
                            /> 
                            <TextField
                                autoFocus
                                margin="dense"
                                id="nameVal"
                                label="Refill Date"
                                type="datetime-local"
                                value={this.state.RefillItemData.LastRefillDate}
                                fullWidth
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
 
export default RefillModal;