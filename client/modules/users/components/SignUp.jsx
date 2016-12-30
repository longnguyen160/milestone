import React from 'react';
require("./css/login.css");
require("./css/signup.css");
require("./css/confirm.css");

const SignUp = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <title>Registration</title>
        <h1>Sample text</h1>
        <div id="containers">
        <div id="information" className="go-left">
        asfjhkasf
        adsf
        asd
        fa
        dsf
        adsfas
        dfa
        sf
        asdf
        asdfas
        f
        </div>
        <div id="Card" className="go-left">
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
                <div className="input-group">   
                    <input id="company" type="text" className="form-control" name="company" placeholder="Company" />
                    
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
                <div className="input-group">
                    <span className="input-group-addon greenpls moreheightpls"><i className="glyphicon glyphicon-ok colorpls"></i></span>
                    <input id="greenpls" type="text" className="form-control colorpls moreheightpls" name="warning" value="Your emails hasn't been confirmed" readOnly/> 
                </div>
            </form>    
        </div>
        </div>
    </div>
);


export default SignUp;   