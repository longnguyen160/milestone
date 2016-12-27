import React from 'react';
require("./css/login.css");

class ForgotPassword extends React.Component {
  render() {
    const {error, success} = this.props;
    return (
        <div id="mainLogin" className="text-center">
            <div id="container">
                <h1>Password Recover</h1>
                <div id="Card">
                <form className="centerlize">
                {error ?
                    <div className="alert alert-danger alert-dismissable nomargin">
                        <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                        <strong>{error}</strong>
                    </div>
                : null}
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" className="form-control" name="email" placeholder="Email" ref="email"/>
                    </div>

                    <div className="text-center">
                        <button type="button" className={success ? "btn btn-success btn-md": "btn btn-info btn-md"}
                          onClick={success ? this.exactEmail.bind(this) : this.sendResetPasswordEmail.bind(this)}>

                          {success ? "Please check your email for further instructions" : "Reset Password"}
                        </button>
                    </div>
                    <a href="/account/login" id="forgotpw" >Login</a>
                </form>
              </div>
            </div>
        </div>
    )
  }

  exactEmail(e) {
      /*do nothing*/
  }

  sendResetPasswordEmail(e) {
    e.preventDefault();
    const {sendPassword} = this.props;
    const {email} = this.refs;
    sendPassword(email.value.trim());
    this.refs.email.value = '';
  }
}

export default ForgotPassword;
