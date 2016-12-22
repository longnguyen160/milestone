import React from 'react';
require("./login.css");
class Login extends React.Component {
  render() {
    const {error} = this.props;
    console.log(error);
    return (
      <div id="mainLogin text-center">
          <div id="Card">
              <form className="centerlize">
                { error ? <div className="alert alert-danger alert-dismissable nomargin">
                      <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                      <strong>{error}!</strong>
                  </div> : ''
                }



                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input ref="email" id="email" type="text" className="form-control" name="email" placeholder="Email" />
                  </div>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                      <input ref="password" id="password" type="password" className="form-control" name="password" placeholder="Password" />
                  </div>
                  <div className="text-center">
                      <button onClick={this.loginUser.bind(this)} type="submit" className="btn btn-default">Submit</button>
                  </div>
                  <a href="/account/forgot" id="forgotpw" >I forgot my password</a>
              </form>
          </div>
          <div id="sigup_mess">
              New to SI  Sign up as a <a href="#"> Broadcaster </a> or <a href="#"> Freelancer </a>
          </div>
        </div>
        )
      };
      loginUser(e) {
        e.preventDefault();
        const {login} = this.props;
        const {email,password} = this.refs;
        login(email.value, password.value);
    };
    };

export default Login;
