import React from 'react';
require("./css/login.css");

class NewPassword extends React.Component {
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
                            { error ? <div className="alert alert-danger alert-dismissable nomargin">
                                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    <strong>{error}!</strong>
                                </div> : null
                            }
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input ref="password" id="password" type="password" className="form-control"
                                       name="password" placeholder="New Password"/>
                            </div>
                            
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input ref="repassword" id="password" type="password" className="form-control"
                                       name="password" placeholder="Re-enter New Password"/>
                            </div>
                            <div className="text-center">
                                <button onClick={this.newpassword.bind(this)} type="submit"
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
        
        const {resetpassword, Token} = this.props;
        const {password, repassword} = this.refs;
        console.log(resetpassword);
        resetpassword(password.value, repassword.value, Token);
    };
};

export default NewPassword;
