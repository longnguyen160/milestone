import React from 'react';
require("./css/login.css");
require("./css/signup.css");
require("./css/apply.css");

class FreelancerApply extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div id="mainLogin" className="text-center">
          <div id="container">
              <h1>No invite code?</h1>

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

                          <input onBlur={this.checkEmail.bind(this)} ref="email" id="email" type="text" className="form-control" name="email" placeholder="Email" />
                            {!error[2] ? null : error[2] == true ?  <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i> : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                            {!error[2] ? null : error[2] != true ? <p className="error-msg">{error[2]}</p> : null}
                      </div>

                      <h3>Your yourself</h3>

                    <div className="input-group">

                          <input ref="link" id="link" type="text" className="form-control" name="link" placeholder="Link" />

                      </div>

                      <div className="input-group">

                          <textarea ref="des" className="form-control" rows="3" id="descript" placeholder="Introduce yourself in 300 characters" maxLength="300"></textarea>

                      </div>

                      <div className="checkbox">

                            {error[3] === true ? <label><input checked onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/tos">terms of service</a></label>
                          : <label><input onChange={this.checkCheckedBox.bind(this)} ref="checkbox" type="checkbox" /> I agree to the <a href="/tos">terms of service</a></label>}

                    </div>

                      <div className="text-center">

                        {error[4] ? <button onClick={this.createApplication.bind(this)} type="submit" className="btn btn-info">Apply</button>
                      : <button disabled type="submit" className="btn btn-info">Apply</button>}

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
        checkValidation(firstName.value.trim(),'firstName');
    };
      checkLastName(e) {
        e.preventDefault();
        const{lastName} = this.refs;
        const{checkValidation} = this.props;
        checkValidation(lastName.value.trim(),'lastName');
      };
      checkEmail(e){
        e.preventDefault();
        const{email} = this.refs;
        const{checkValidation} = this.props;
        checkValidation(email.value.trim(),'email');
      };
      createApplication(e) {
        e.preventDefault();
        const {create} = this.props;
        const {firstName, lastName, email, link, des} = this.refs;
        create(firstName.value.trim(), lastName.value.trim(), email.value.trim(), link.value.trim(), des.value.trim());
    };
      checkCheckedBox(e) {
        e.preventDefault();
        const {checkbox} = this.refs;
        const {checkValidation} = this.props;
        checkValidation(checkbox.checked,'checkbox');
      };
};
export default FreelancerApply;
