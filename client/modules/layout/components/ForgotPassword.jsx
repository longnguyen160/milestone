import React from 'react';
require("./css/login.css");

const Login = ({context} = () => null) => (
    <div id="mainLogin text-center">
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
                <div className="text-center"> 
                    <button type="submit" className="btn btn-default">Reset Password</button>
                </div>
                <a href="/account/login" id="forgotpw" >Login</a>
            </form>    
        </div>
    </div>
);


export default Login;   