import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            { name: "Items" },
        ];

        this.data = [
            ["ANmzcFWsUx"],
            ["JjzxYghjAc"],
            ["ocuGMnBLqJ"],
            ["fndvibjtUz"],
            ["kNAkOhVhQw"],
            ["xHsXpaqukF"],
            ["agCwbzdtYs"],
            ["clFkXzJpCo"],
            ["JVxWsKMCip"],
            ["gkNZDpUdIT"],
            ["TuFjDRpUso"],
            ["AebgZViYhB"],
            ["vYZmTVpVzK"],
            ["GooqYRBtYl"],
            ["CTPYwRDwpP"],
            ["YKEOBUbvWr"],
            ["ZJAhyCtFoM"],
            ["MLNpIEwAEG"],
            ["kpLRYBypRQ"],
            ["cYJyxUxguA"],
            ["LSqYfdzMyq"],
            ["ZyOepXWrmG"],
            ["OodvGyJCZZ"],
            ["PMyKakVjLH"],
            ["WHapAUYnWB"],
            ["PlZBpFQBpz"],
            ["BfbEUdrsXt"],
            ["EMEdAfjmGc"],
            ["ijXSaPRJmy"],
            ["ZqIaCPXIuC"],
            ["PRYyZbSoup"],
            ["kvMrvfHuss"],
            ["cCyVLwGoju"],
            ["rlEdaUtGRw"],
            ["WnhboBqYvD"],
            ["jTMONYDiaF"],
            ["syfIMddlab"],
            ["WjfyiPSdLT"],
            ["YhgaIFznsx"],
            ["SNjjlXsKkt"],
            ["dmDKbBimZr"],
            ["tSEEyspgKw"],
            ["jbgpWdDIVp"],
            ["BZxVFTcVjJ"],
            ["uCtlSLzWDY"],
            ["YpxajlMeaK"],
            ["dymRXvEwBV"],
            ["jMxGArNesh"],
            ["dAzGcbSXvX"],
            ["pIlNAPBHbl"]
        ];

        this.options = {
            filterType: 'checkbox',
        };

        this.collapseDetailWindow = this.collapseDetailWindow.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div className="conatiner-fluid">
                    <div className="ml-1 mb-2 pl-2">
                    </div>
                    <MUIDataTable className="m-2 p-2"
                        title={"Order Details"}
                        columns={this.columns}
                        data={this.data}
                        options={this.options}
                    />
                    <div>
                        <button id="confirm-order" className="btn btn-success" onClick={this.collapseDetailWindow}>Confirm Order</button>
                    </div>
                </div>
            </React.Fragment >
        );
    }

    collapseDetailWindow() {
        this.props.hideDetails(false);
    }
}

export default OrderDetail;