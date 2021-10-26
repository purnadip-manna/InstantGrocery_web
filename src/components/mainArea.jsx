import React, { Component } from 'react';
import Banner from "./banner";
import AddOrders from './addOrder';
import PantryDetails from './pantryDetails';
import ShowOrders from './showOrders';
import Categories from './categories';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import RefillItems from './refillItems';

const routes = [
{
    path: "/dashboard",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <ShowOrders/>
},
{
    path: "/dashboard/add",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <AddOrders/>
},
{
    path: "/dashboard/pantry",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <PantryDetails/>
},
{
    path: "/dashboard/categories",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <Categories/>
},
{
    path:"/dashboard/refill",
    sidebar:()=><div></div>,
    main : ()=><RefillItems/>
}
];

class MainArea extends Component {
    render() {
        return (
            <Router>
                <div className="d-flex" id="wrapper">
                    <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="list-group list-group-flush">
                        <p className="list-group-item" align="center">
                        <img src="https://i.pinimg.com/originals/5d/26/a1/5d26a173f443cbd190e34481438d474b.png" width="100"/>
                        </p>
                        <Link to="/dashboard">
                            <span className="list-group-item list-group-item-action list-group-item-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check mb-1 mr-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg> Order Details<span className="badge badge-success ml-2">9</span>
                            </span>
                        </Link>

                        <Link to="/dashboard/add">
                            <span className="list-group-item list-group-item-action list-group-item-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle mb-1 mr-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg> Add Order
                            </span>
                        </Link>

                        <Link to="/dashboard/pantry">
                            <span className="list-group-item list-group-item-action list-group-item-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-checklist mb-1 mr-2" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                </svg> Pantry Details
                            </span>
                        </Link>

                        <Link to="/dashboard/categories">
                            <span className="list-group-item list-group-item-action list-group-item-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-back mb-1 mr-2" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
                            </svg> Categories
                            </span>
                        </Link>

                        <Link to="/dashboard/refill">
                            <span className="list-group-item list-group-item-action list-group-item-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-plus mb-1 mr-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg> Refill
                            </span>
                        </Link>
                    </div>
                </div>
                <div id="page-content-wrapper">
                    <Banner shopName="Grocery Store" />
                        <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                        </Switch>
                </div>
            </div>
        </Router>
        );
    }
}

export default MainArea;