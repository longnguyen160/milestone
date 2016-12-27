import React from 'react';
require("./css/login.css");
require("./css/signup.css");

class CompanyRegister extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div id="mainLogin" className="text-center">
      <div id="container">
          <h1>Sample text</h1>
          <div id="information" className="go-left">
          asfjhkasf
          adsf
          asd
          fa
          dsf
          adsfas
          dfa
          sf
          asdf
          asdfas
          f
          </div>
          <div id="Card" className="go-left">
              <form className="centerlize">
                  <h3>Your basic information</h3>
                  <div className="input-group">
                      <input onBlur={this.checkFirstName.bind(this)} ref="firstName" id="fname" type="text" className="form-control" name="fname" placeholder="First name" />
                      {!error[0] ? null : error[0] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                      {!error[0] ? null : error[0] != true ? <p className="error-msg">{error[0]}</p> : null}
                  </div>
                  <div className="input-group">
                      <input onBlur={this.checkLastName.bind(this)} ref="lastName" id="lname" type="text" className="form-control" name="lname" placeholder="Last name" />
                        {!error[1] ? null : error[1] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[1] ? null : error[1] != true ? <p className="error-msg">{error[1]}</p> : null}
                  </div>
                  <div className="input-group">
                      <input onBlur={this.checkCompany.bind(this)} ref="company" id="company" type="text" className="form-control" name="company" placeholder="Company" />
                        {!error[2] ? null : error[2] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[2] ? null : error[2] != true ? <p className="error-msg">{error[2]}</p> : null}
                  </div>
                  <h3>Your Account Information</h3>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input onBlur={this.checkEmail.bind(this)} ref="email" id="email" type="text" className="form-control" name="email" placeholder="Email" />
                        {!error[3] ? null : error[3] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[3] ? null : error[3] != true ? <p className="error-msg">{error[3]}</p> : null}
                  </div>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                      <input onBlur={this.checkPassword.bind(this)} ref="password" id="password" type="password" className="form-control" name="pasword" placeholder="Password" />
                        {!error[4] ? null : error[4] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                        {!error[4] ? null : error[4] != true ? <p className="error-msg">{error[4]}</p> : null}
                  </div>
                  <div className="checkbox">
                    {error[5] === true ? <label><input checked onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/">terms of service</a></label>
                  : <label><input onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/">terms of service</a></label>}

                </div>
                  <div className="text-center">
                      {error[6] ? <button onClick={this.createUser.bind(this)} type="submit" className="btn btn-info">Register</button>
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
        console.log("firstName:");
        console.log(firstName.value);
        const{checkValidation} = this.props;
        checkValidation(firstName.value,'firstName');
    };
      checkLastName(e) {
        e.preventDefault();
        const{lastName} = this.refs;
        console.log("lastName:");
        console.log(lastName.value);
        const{checkValidation} = this.props;
        checkValidation(lastName.value,'lastName');
      };
      checkCompany(e){
        e.preventDefault();
        const{company} = this.refs;
        console.log("company:");
        console.log(company.value);
        const{checkValidation} = this.props;
        checkValidation(company.value,'company');
      };
      checkEmail(e){
        e.preventDefault();
        const{email} = this.refs;
        console.log("email:");
        console.log(email.value);
        const{checkValidation} = this.props;
        checkValidation(email.value,'email');
      };
      checkPassword(e){
        e.preventDefault();
        const{password} = this.refs;
        console.log("password:");
        console.log(password.value);
        const{checkValidation} = this.props;
        checkValidation(password.value,'password');
      };
      createUser(e) {
        e.preventDefault();
        const {create} = this.props;
        const {firstName,lastName,email,password,company,checkbox} = this.refs;
        console.log(this.refs);
        create(firstName.value,lastName.value,company.value,email.value,password.value);
    };
      checkCheckedBox(e) {
        e.preventDefault();
        const {checkbox} = this.refs;
        const {checkValidation} = this.props;
        console.log(checkbox.checked);
        checkValidation(checkbox.checked,'checkbox');
      };
};
export default CompanyRegister;
