import React from 'react';
require("./css/login.css");

const FinishJoin = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
        <h1>Joining SI</h1>
        <div id="Card">
            
            <form className="centerlize">
                <h3>Your basic information</h3>
                <div className="input-group">   
                    <input id="fname" type="text" className="form-control" name="fname" placeholder="First name" />
                    <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                </div>
                <div className="input-group">
                    <input id="lname" type="text" className="form-control" name="lname" placeholder="Last name" />
                    <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>
                    <p className="error-msg">Invalid example</p>
                </div>
                
                <h3>Your Account Information</h3>
                <div className="input-group">   
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                    
                </div>
                <div className="input-group">   
                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                    <input id="password" type="text" className="form-control" name="pasword" placeholder="Password" />

                </div>

                <div className="checkbox">
                    <label><input type="checkbox" value="" /> I agree to the <a href="/tos">terms of service</a></label>
                </div>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Register</button>
                </div>
            </form>    

        </div>
    </div>
);

export default FinishJoin;
