import React from 'react';
require("./css/login.css");
require("./css/confirm.css");

const Confirm = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <div id="container">
    <div id="confirm">
            <h1>Welcome on board</h1>
            {/* reaplce value with your message */}
            <div className="input-group">
                <span className="input-group-addon greenpls"><i className="glyphicon glyphicon-ok colorpls"></i></span>
                <input id="greenpls" type="text" className="form-control colorpls" name="success" value="Your emails has been confirmed" readOnly/> 
                
            </div>
            <div className="input-group">
                <span className="input-group-addon redpls"><i className="glyphicon glyphicon-remove colorpls"></i></span>
                <input id="redpls" type="text" className="form-control colorpls" name="warning" value="Your emails hasn't been confirmed" readOnly/> 
                
            </div>
            <div className="text-center"> 
                   <button type="submit" className="btn btn-info "><b>Continue</b></button>
            </div>
        </div>
    </div>
    </div>
);

export default Confirm;
