import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const UserNavBar = ({context} = () => null) => (
    <nav className="navbar navbar-default redd">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-leaf bluue"></span></a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#">MOTD</a></li>
                <li><a href="#">Invites</a></li>
                <li><a href="#">Positions</a></li>
                <li><a href="#">Sectors</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Rates</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    </nav>
);


export default UserNavBar;
