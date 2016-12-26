import React from 'react';
require("./css/login.css");

const Login = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <div>
        <div id="Card">
            <form className="centerlize">
                <div className="alert alert-danger alert-dismissable nomargin">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Danger!</strong> Example danger message!
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                    
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="password" type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Submit</button>
                </div>
                <a href="/account/forgot" id="forgotpw" >I forgot my password</a>
            </form>    

        </div>
        <div id="sigup_mess">
            New to SI? Sign up as a <a href="#">freelancer</a> or&nbsp;<a href="#">company </a>
        </div>
    </div>
    </div>
);

export default Login;
