import React from 'react';
require("./css/login.css");

class Login extends React.Component {
    render() {
        const {error} = this.props;
        console.log(error);
        return (
            <div id="mainLogin" className="text-center">
                <div className="container">
                    <h1>Recovery New Password</h1>
                    <div id="Card">
                        <form className="centerlize">
                            <label>New Password</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input ref="password" id="password" type="password" className="form-control"
                                       name="password" placeholder="New Password"/>
                            </div>
                            
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input ref="password" id="password" type="password" className="form-control"
                                       name="password" placeholder="Re-enter New Password"/>
                            </div>
                            <div className="text-center">
                                <button onClick="" type="submit"
                                        className="btn btn-info btn-md">Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    };

    newpassword(e) {
        e.preventDefault();
        // const {login} = this.props;
        // const {email, password} = this.refs;
        // login(email.value.trim(), password.value);
    };
};

export default Login;
