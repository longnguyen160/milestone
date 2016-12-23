import React from 'react';
require("./css/login.css");
require("./css/signup.css");

const Join = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <div id="container">
        <h1>Joining SI</h1>
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
                <h3>You need an invitation to join SI</h3>
                <div className="input-group">   
                    <input id="invite-code" type="text" className="form-control" name="invite-code" placeholder="Invite Code" />
                    <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                </div>
                <div className="text-center"> 
                    <button type="submit" className="btn btn-info">Continue</button>
                </div>
                <a href="/account/login" id="forgotpw" >Login</a>
            </form>    
        </div>
    </div>
    </div>
);


export default Join;   