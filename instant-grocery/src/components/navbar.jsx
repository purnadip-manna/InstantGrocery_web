import React, { Component } from 'react';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import MainArea from './mainArea';
import UserProfile from './userProfile';
import Home from './home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



const routes = [
    {
        path: "/dashboard",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <MainArea/>
    },
    {
        path: "/profile",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <UserProfile/>
    },
    {
        path: "/",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <Home/>
    }
];
class Navbar extends Component {
    render() { 
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
                    <div className="container-fluid">
                        <button className="btn" id="sidebarToggle"> 
                            <ArrowForwardIos/>
                        </button>
                        <span className="h5" id="appTitle">Instant Grocery</span>
                        <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" height="30" width="30"></img>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link to='/dashboard'>
                                <span className="dropdown-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer2 mb-1 mr-2" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                                        <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                                    </svg> 
                                    Dashboard
                                </span>
                            </Link>
                            <Link to='/'>
                                <span className="dropdown-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house mb-1 mr-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg> 
                                    Home
                                </span>
                            </Link>
                            <Link to='/profile'>
                                <span className="dropdown-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mb-1 mr-2" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg> 
                                    Profile
                                </span>
                            </Link>
                            <span className="dropdown-item">
                                <svg viewBox="64 64 896 896" focusable="false" className="mr-2" data-icon="logout" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path></svg> 
                                Log Out
                            </span>
                        </div>
                        </div>
                    </div>
                </nav>
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
            </Router>
        );
    }
}
 
export default Navbar;
