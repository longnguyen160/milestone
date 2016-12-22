import React from 'react';

class ForgotPassword extends React.Component {
  render() {
    const {error, success} = this.props;
    return (
        <form className="form-horizontal">
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <div className="input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input type="email" ref="email" className="form-control" placeholder="Email Address" />
          </div><br />
          <button className={success ? "btn btn-success btn-md" : "btn btn-info btn-md"} type="button"
            onClick={success ? this.exactEmail.bind(this) : this.sendResetPasswordEmail.bind(this)}>
            {success ? "Please check your email for further instructions" : "Reset Password"}
          </button><br /><br />
          <a href="/login">Login</a>
        </form>
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
