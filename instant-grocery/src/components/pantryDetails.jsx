import React, { Component } from 'react'

export default class pantryDetails extends Component {
    state = {
        pantry : [
            {   "item_id" : 1,
                "item_name" : "Maida",
                "available_Quantity": 20,
                "quantity" : 100,
                "unit" : "Kg"
            },
            {   "item_id" : 2,
                "item_name" : "Sugar",
                "available_Quantity": 30,
                "quantity" : 80,
                "unit" : "Kg"
            },
            {   "item_id" : 3,
                "item_name" : "Ghee",
                "available_Quantity": 80,
                "quantity" : 80,
                "unit" : "Gm"
            },
            {   "item_id" : 4,
                "item_name" : "Mustard oil",
                "available_Quantity": 50,
                "quantity" : 69,
                "unit" : "Lt"
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.pantry.map(i => 
                        <div className="col-sm-3 mt-3 mb-3 wrapper">
                            <div class="card text-center shadow">
                                <div class="card-body p-0">
                                    <div className="progress progress-bar-vertical mr-0" style={{width: "100%", height: "10rem"}}>
                                    <div className={this.getProgressBar(this.getPercentage(i.available_Quantity, i.quantity))}role="progressbar" aria-valuenow={this.getPercentage(i.available_Quantity, i.quantity)} aria-valuemin="0" aria-valuemax="100" style={{height: this.getPercentage(i.available_Quantity, i.quantity)+"%"}}>
                                    </div>
                                    </div>
                                </div>
                                <div class="card-footer text-muted">
                                <h6>{i.item_name}</h6>
                                {i.available_Quantity}{i.unit}
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    getProgressBar = (value) =>{
        if(value <= 20){
            return "progress-bar bg-danger";
        }
        else if(value > 20 && value < 50){
            return "progress-bar bg-warning";
        }
        else{
            return "progress-bar bg-success";
        }
    }

    getPercentage = (l, h) =>{
        return (l/h * 100);
    }
}
