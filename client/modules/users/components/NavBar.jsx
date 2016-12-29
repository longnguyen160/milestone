import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const NavBar = ({context} = () => null) => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-leaf bluue"></span></a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="/register/freelancer">For freelancer</a></li>
                <li><a href="/register/company">For company</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/account/login">Login</a></li>
            </ul>
        </div>
    </nav>
);


export default NavBar;
