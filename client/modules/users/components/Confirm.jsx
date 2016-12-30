import React from 'react';
require("./css/login.css");
require("./css/confirm.css");

class Confirm extends React.Component {
    render() {
        const {verified} = this.props;
        return (
        <div id="mainLogin" className="text-center">
        <title>Update Status</title>
        <div id="container">
        <div id="confirm">
                <h1>Welcome on board</h1>
                {/* reaplce value with your message */}
                {verified === true ? 
                    <div className="input-group">
                        <span className="input-group-addon greenpls"><i className="glyphicon glyphicon-ok colorpls"></i></span>
                        <input id="greenpls" type="text" className="form-control colorpls" name="success" value="Your emails has been confirmed" readOnly/> 
                    </div>
                :
                    <div>
                        <div className="input-group">
                            <span className="input-group-addon redpls"><i className="glyphicon glyphicon-remove colorpls"></i></span>
                            <input id="redpls" type="text" className="form-control colorpls" name="warning" value="Your emails hasn't been confirmed" readOnly/>    
                        </div>
                        <p>Please recheck your email again!<br />Your you can try to resend verify email!</p>
                    </div>
                }
                {verified === true ? 
                    <div className="text-center"> 
                        <button type="submit" className="btn btn-info "><b>Continue</b></button>
                    </div>
                :
                    <div className="text-center"> 
                        <button onClick={this.resendpls.bind(this)} type="submit" className="btn btn-info "><b>Resend</b></button>
                    </div>
                }
            </div>
        </div>
        </div>
        );
    };

    resendpls(e) {
        e.preventDefault();
        const {resend, emails} = this.props;
        resend(emails);
    }

} 

export default Confirm;
