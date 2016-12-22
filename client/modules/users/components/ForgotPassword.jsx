import React from 'react';

class ForgotPassword extends React.Component {
  render() {
    const {error, success} = this.props;
    return (
        <div id="mainLogin text-center">
        <div id="Card">
            <form className="centerlize">
            {error ?
                <div className="alert alert-danger alert-dismissable nomargin">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>Danger!</strong> {error}!
                </div>
            : null}
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
                </div>
                <div className="text-center"> 
                    <button type="submit" className={success ? "btn btn-success btn-md": "btn btn-info" }>
                      {success ? "Please check your email for further instructions" : "Reset Password"}
                    </button>
                </div>
                <a href="/account/login" id="forgotpw" >Login</a>
            </form>    
        </div>
    </div>
    )
  }

  exactEmail(e) {

  }

  sendResetPasswordEmail(e) {
    e.preventDefault();
    const {sendPassword} = this.props;
    const {email} = this.refs;
    sendPassword(email.value);
    this.refs.email.value = '';
  }
}

export default ForgotPassword;
