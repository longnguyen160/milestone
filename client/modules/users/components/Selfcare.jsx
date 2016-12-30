import React from 'react';
require("./css/login.css");
require("./css/signup.css");

const Selfcare = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <title>Selfcare</title>
    <div id="container">
        <div className="Card">
            <form className="centerlize">
            <label for="email" className="go-left">Email address</label>
                <div className="input-group">   
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email address" />
                    <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>
                </div>
                <p className="error-msg">Invalid example</p>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Change email address</button>
                </div>
            </form>   
        </div>
        <div className="Card">
            <form className="centerlize">
            <label for="email" className="go-left">Password</label>
                <div className="input-group">   
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="cpass" type="text" className="form-control" name="cpass" placeholder="Current password" />
                    <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                </div>
                <div className="input-group">   
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="npass" type="text" className="form-control" name="npass" placeholder="New password" />
                </div>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Change password</button>
                </div>
            </form>    
        </div>
    </div>
    </div>
);


export default Selfcare;   