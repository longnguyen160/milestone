import React from 'react';
require("./css/login.css");
require("./css/signup.css");
require("./css/apply.css");

const SignUp = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
        <h1>No invite code?</h1>
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
                <h3>Your yourself</h3>
                <div className="input-group">   
                    <input id="link" type="text" className="form-control" name="link" placeholder="Link" />
                    
                </div>
                <div className="input-group">   
                    <textarea className="form-control" rows="4" id="descript" placeholder="Introduce yourself in 300 characters" maxLength="300"></textarea>

                </div>

                <div className="checkbox">
                    <label><input type="checkbox" value="" /> I agree to the <a href="/tos">terms of service</a></label>
                </div>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Apply</button>
                </div>
            </form>    
        </div>
    </div>
);


export default SignUp;   