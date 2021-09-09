import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";

class OrderList extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                name: "order_id",
                options: {
                    display: false,
                }
            },
            { name: "Name" },
            { name: "Contact" },
            { name: "Time" },
            { name: "Status" },
            { name: "Total" },
            {
                name: "View",
                // options: {
                //     customBodyRender: () => {
                //         <Button variant="outlined" color="secondary" onClick={(e) => this.revealDetailWindow()}>
                //             {`View`}
                //         </Button>
                //     }
                // }
            }
        ];

        this.data = [
            [0, "Joe James", "1234567890", "12:00",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 120,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [1, "John Walsh", "2587413690", "12:50",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 250,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [1, "John Walsh", "2587413690", "12:50",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 250,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [1, "John Walsh", "2587413690", "12:50",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 250,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [1, "John Walsh", "2587413690", "12:50",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 250,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [1, "John Walsh", "2587413690", "12:50",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 250,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [2, "Bob Herm", "7410258963", "6:30",
                <h5><span className="badge badge-pill badge-success">Cleared</span></h5>, 670,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ],
            [3, "James Houston", "7539148602", "8:00",
                <h5><span className="badge badge-pill badge-warning">Pending</span></h5>, 520,
                <Button variant="outlined" color="primary" onClick={(e) => this.revealDetailWindow()}>{`View`} </Button>
            ]
        ];

        this.options = {
            filterType: 'checkbox',
            selectableRows: false,
            paging: false
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="pl-3 pr-3 pt-2">
                    <MUIDataTable
                        title={"Order List"}
                        columns={this.columns}
                        data={this.data}
                        options={this.options}
                    />
                </div>
            </React.Fragment>
        );
    }

    revealDetailWindow() {
        this.props.showDetails(true);
    }
}

export default OrderList;