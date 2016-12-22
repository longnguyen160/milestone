import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const NavBar = ({context} = () => null) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="http://localhost:3000"><span className="glyphicon glyphicon-leaf bluue"></span></a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#">For broadcaster</a></li>
                <li><a href="#">For subcribers</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/account/forget">Login</a></li>
            </ul>
        </div>
    </nav>
);


export default NavBar;
