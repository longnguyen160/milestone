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
        </div>
        <div id="Card" className="go-left">
          <form className="centerlize">
            <p>You need an invitation to join SI</p>
            {error ?
                <div className="alert alert-danger alert-dismissable nomargin">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{error}</strong>
                </div> : null}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Invite Code" ref="inviteCode"/>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-info btn-md" onClick={this.sendInviteCode.bind(this)}>Continue</button>
            </div>
            <br />
            <p>No invitation? <a href="/register/freelancer/finish">Apply here</a></p> 
          </form>
        </div>
    </div>
    </div>
);


export default Join;   