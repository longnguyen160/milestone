import React from 'react';
class Login extends React.Component {
  render() {
    const {error} = this.props;
    console.log(error);
    return (
      <div className="panel panel-default">
        <p>{error}</p>
        <div className="panel-body">
          <input ref="email" type="text" className="form-control" placeholder="Email address"/>
          <input ref="password" type="password" className="form-control" placeholder="Password"/>
<<<<<<< HEAD
          <button onClick={this.login.bind(this)} type="button" className="btn btn-default navbar-btn">Login</button>
=======
          <button onClick={this.loginUser.bind(this)} type="button" className="btn btn-default navbar-btn">Login</button>
>>>>>>> e81aefe8f0641a38b6c7096a71faa21e4fb22e39
        </div>
      </div>
    )
  };
  loginUser(e) {
    e.preventDefault();
    const {loginUser} = this.props;
    const {email,password} = this.refs;
    loginUser(email.value, password.value);
  };
}
export default Login;
