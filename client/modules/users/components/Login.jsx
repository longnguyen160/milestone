import React from 'react';
require("./css/login.css");

class Login extends React.Component {
    render() {
        const {error} = this.props;
        return (
            <div id="mainLogin" className="text-center">
            <title>Login</title>
                <div className="container">
                    <h1>Welcome to SI</h1>
                    <div id="Card">
                        <form className="centerlize">
                            { error ? <div className="alert alert-danger  nomargin">

                                    <strong>{error}!</strong>
                                </div> : null
                            }
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input ref="email" id="email" type="text" className="form-control" name="email"
                                       placeholder="Email"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input ref="password" id="password" type="password" className="form-control"
                                       name="password" placeholder="Password"/>
                            </div>
                            <div className="text-center">
                                <button onClick={this.loginUser.bind(this)} type="submit"
                                        className="btn btn-info btn-md">Login
                                </button>
                            </div>
                            <a href="/account/forgot" id="forgotpw">I forgot my password</a>
                        </form>
                    </div>
                    <div id="sigup_mess">
                        New to SI Sign up as a <a href="/register/company"> Company </a> or <a
                        href="/register/freelancer"> Freelancer </a>
                    </div>
                </div>
            </div>
        )
    };

    loginUser(e) {
        e.preventDefault();
        const {login} = this.props;
        const {email, password} = this.refs;
        login(email.value.trim(), password.value);
    };
};

export default Login;
