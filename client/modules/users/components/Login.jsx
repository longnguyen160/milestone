import React from 'react';
class Login extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <inpput ref="email" type="text" className="form-control" placeholder="Email address"/>
          <input ref="password" type="password" className="form-control" placeholder="Password"/>
          <button onClick={this.login.bind(this)} type="button" className="btn btn-default navbar-btn">Login</button>
        </div>
      </div>
    )
  }
  login(e) {
    e.preventDefault();
    const {loginUser} = this.props;
    const {email,password} = this.refs;
    loginUser(email.value, password.value);
  }
}
export default Login;
