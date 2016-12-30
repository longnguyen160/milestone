import React from 'react';
require("./css/login.css");

class ForgotPassword extends React.Component {
  render() {
    const {error, success, role, emails} = this.props;
    return (
        <div id="mainLogin" className="text-center" onLoad={this.reupdate.bind(this)}>
        <title>Forgot Password</title>
            <div id="container">
                <h1>Password Recover</h1>
                <div id="Card">
                <form className="centerlize">
                {error ?
                    <div className="alert alert-danger nomargin">
                        <strong>{error}</strong>
                    </div>
                : null}
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        {emails ?
                        <input id="email" type="text" className="form-control" name="email" placeholder="Email" ref="email"
                        value={emails} disabled/>
                        : <input id="email" type="text" className="form-control" name="email" placeholder="Email" ref="email"
                        />
                        }
                    </div>
                    {success  ?
                    <div className="input-group">
                        <span className="input-group-addon greenpls"><i className="glyphicon glyphicon-ok colorpls"></i></span>
                        <input id="greenpls" type="text" className="form-control colorpls" name="success" value='Reset password link has been sent' disabled/>
                    </div>
                    :
                    <div className="text-center">
                        <button type="button" className={success ? "btn btn-success btn-md": "btn btn-info btn-md"}
                          onClick={success ? this.exactEmail.bind(this) : this.sendResetPasswordEmail.bind(this)}>
                         Reset Password
                        </button>
                    </div>
                    }
                    {role === null ? <a href="/account/login" id="forgotpw" >Login</a> : "" }
                </form>
              </div>
            </div>
        </div>
    )
  }

  reupdate(e) {
      this.role = this.props;
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
