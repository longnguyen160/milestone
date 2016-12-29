import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const UserNavBar = ({context} = () => null) => (

    <nav className="navbar navbar-default bluee">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-leaf user-icon"></span></a>
                <button type="button" className="navbar-toggle collapsed user-btn" data-toggle="collapse" data-target="#collapse-me" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="collapse-me">
                <ul className="nav navbar-nav">
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">Invite</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">My Account</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>

);


export default UserNavBar;
