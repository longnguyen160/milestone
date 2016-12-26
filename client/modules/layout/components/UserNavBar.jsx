import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const UserNavBar = ({context} = () => null) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-leaf bluue"></span></a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Invite</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    </nav>
);


export default UserNavBar;
