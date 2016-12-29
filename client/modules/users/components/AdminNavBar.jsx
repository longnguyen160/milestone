import React from 'react';
require("./css/style.css");
require("./css/navbar.css");

const UserNavBar = ({context} = () => null) => (

     <nav className="navbar navbar-default redd">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/"><span className="glyphicon glyphicon-leaf admin-icon"></span></a>
                <button type="button" className="navbar-toggle collapsed admin-btn" data-toggle="collapse" data-target="#collapse-me" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="collapse-me">
                <ul className="nav navbar-nav">
                    <li><a href="#">MOTD</a></li>
                    <li><a href="/admin/invites">Invites</a></li>
                    <li><a href="#">Positions</a></li>
                    <li><a href="#">Sectors</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Rates</a></li>
                    <li><a href="/admin/apply">Application</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>

);


export default UserNavBar;
