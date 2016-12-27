import React from 'react';
require("./css/login.css");
require("./css/signup.css");

class FreelancerRegisterWithInvitationCode extends React.Component {
  render() {
    const {error} = this.props;
    console.log(error);
    return (
      <div id="mainLogin" className="text-center">
          <h1>Joining SI</h1>
          <div id="Card">
              <div id="container">
              <form className="centerlize">
                  <h3>Your basic information</h3>
                  <div className="input-group">
                      <input onBlur={this.checkFirstName.bind(this)} ref="firstName" id="fname" type="text" className="form-control" name="fname" placeholder="First name" />
                        {!error[0] ?
                          null
                          : error[0] == true
                          ? <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                          : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign">
                        </i>}
                        {!error[0]
                          ? null
                          : error[0] != true
                          ? <p className="error-msg">{error[0]}</p>
                          : null}
                  </div>
                  <div className="input-group">
                      <input onBlur={this.checkLastName.bind(this)} ref="lastName" id="lname" type="text" className="form-control" name="lname" placeholder="Last name" />
                        {!error[1] ? null
                           : error[1] == true
                           ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                           : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[1]
                          ? null
                          : error[1] != true
                          ? <p className="error-msg">{error[1]}</p>
                          : null}
                  </div>
                  <h3>Your Account Information</h3>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input onBlur={this.checkEmail.bind(this)} ref="email" id="email" type="text" className="form-control" name="email" placeholder="Email" />
                        {!error[2]
                          ? null
                          : error[2] == true
                          ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                          : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[2]
                          ? null
                          : error[2] != true
                          ? <p className="error-msg">{error[2]}</p>
                          : null}

                  </div>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                      <input onBlur={this.checkPassword.bind(this)} ref="password" id="password" type="password" className="form-control" name="pasword" placeholder="Password" />
                        {!error[3]
                          ? null
                          : error[3] == true
                          ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                          : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[3]
                          ? null
                          : error[3] != true
                          ? <p className="error-msg">{error[3]}</p>
                          : null}
                  </div>
                  <div className="checkbox">
                    {error[4] === true
                      ? <label><input ref="checkbox" checked onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/">terms of service</a></label>
                      : <label><input ref="checkbox" onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/">terms of service</a></label>}
                  </div>
                  <div className="text-center">
                    {error[5]
                      ? <button onClick={this.createUser.bind(this)} type="submit" className="btn btn-info">Register</button>
                      : <button disabled type="submit" className="btn btn-info">Register</button>}
                  </div>
              </form>
              </div>
          </div>
      </div>
        )
    };
    checkFirstName(e) {
      e.preventDefault();
      const{firstName} = this.refs;
      const{checkValidation} = this.props;
      checkValidation(firstName.value.trim(),'text');
  };
    checkLastName(e) {
      e.preventDefault();
      const{lastName} = this.refs;
      const{checkValidation} = this.props;
      checkValidation(lastName.value.trim(),'text');
    };
    checkEmail(e){
      e.preventDefault();
      const{email} = this.refs;
      const{checkValidation} = this.props;
      checkValidation(email.value.trim(),'email');
    };
    checkPassword(e){
      e.preventDefault();
      const{password} = this.refs;
      const{checkValidation} = this.props;
      checkValidation(password.value,'password');
    };
    createUser(e) {
      e.preventDefault();
      const {create} = this.props;
      const {firstName,lastName,email,password} = this.refs;
      console.log(this.refs);
      create(firstName.value.trim(),lastName.value.trim(),email.value.trim(),password.value);
  };
    checkCheckedBox(e) {
      e.preventDefault();
      const {checkbox} = this.refs;
      const {checkValidation} = this.props;
      console.log(checkbox.checked);
      checkValidation(checkbox.checked,'checkbox');
    };
};
export default FreelancerRegisterWithInvitationCode;
