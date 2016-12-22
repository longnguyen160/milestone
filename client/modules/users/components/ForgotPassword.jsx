import React from 'react';

class ForgotPassword extends React.Component {
  render() {
    const {error} = this.props;
    return (        
        <form>
          {error ? <p style={{color: 'red'}}>{error}</p> : null}
          <div class="form-group has-feedback has-feedback-left">
            <input type="email" ref="email" class="form-control" placeholder="Email Address" />
            <i class="form-control-feedback glyphicon glyphicon-user"></i>
            <input style={error ? {color: 'green'} : {color: 'blue'}} type="submit" onclick={this.sendResetPasswordEmail.bind(this)}
              value={error ? "Please check your email for further instructions" : "Reset Password"} />
          </div>
        </form>
    )
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
