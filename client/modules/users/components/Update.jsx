import React from 'react';
require("./css/login.css");
require("./css/confirm.css");

const Update = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
        <div>
            <div id="confirm">
                <h1>Your status has been updated</h1>
                {/* reaplce value with your message */}
                <div className="input-group">
                    <span className="input-group-addon greenpls"><i
                        className="glyphicon glyphicon-ok colorpls"></i></span>
                    <input id="greenpls" type="text" className="form-control colorpls" name="success"
                           value="You are now listed as available" readOnly/>

                </div>
                <div className="input-group">
                    <span className="input-group-addon redpls"><i
                        className="glyphicon glyphicon-remove colorpls"></i></span>
                    <input id="redpls" type="text" className="form-control colorpls" name="warning"
                           value="You are now listed as not available" readOnly/>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info"><b>Continue to your profile</b></button>
                </div>
            </div>
        </div>
    </div>
);

export default Update;
