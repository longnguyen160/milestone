import React from 'react';
require("./css/login.css");
require("./css/signup.css");

class SelfCare extends React.Component {
    render() {
        const {user, error} = this.props;
        return (
            <div id="mainLogin" className="text-center">
                <div id="container">
                    <div className="Card">
                        <form className="centerlize">
                            <label for="email" className="go-left">Email address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input id="email" type="text" className="form-control" name="email"
                                       placeholder="Email address"
                                       ref="email"
                                       onBlur={this.checkEmail.bind(this)}/>
                                {error[1] == true ? <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                                    : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                                {error[1] == true ? <p className="error-msg">{error[1]}</p> : null}
                            </div>
                            <div className="text-center">
                                {error[5] == true ? <div className="input-group">
                                        <span className="input-group-addon greenpls"><i
                                            className="glyphicon glyphicon-ok colorpls"></i></span>
                                        <input id="greenpls" type="text" className="form-control colorpls"
                                               name="success" value="Change successfully!" readOnly/>
                                    </div> : error[1] == true ?
                                    <button type="submit" className="btn btn-info" onClick={this.editEmail.bind(this)}>Change email address</button>
                                : <button disabled type="submit" className="btn btn-info" onClick={this.editEmail.bind(this)}>Change email address</button>}
                            </div>
                        </form>
                    </div>
                    <div className="Card">
                        <form className="centerlize">
                            <label for="email" className="go-left">Password</label>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="cpass" type="text" className="form-control" name="cpass"
                                       placeholder="Current password" ref="currentPass"
                                       onBlur={this.checkCurrentPass.bind(this)}/>
                                {error[2] == true ? <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                                    : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                                {error[2] == true ? <p className="error-msg">{error[2]}</p> : null}
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="npass" type="text" className="form-control" name="npass"
                                       placeholder="New password"
                                       ref="newPass"
                                       onBlur={this.checkNewPass.bind(this)}/>
                                {error[0] == true ? <i className="form-control-feedback glyphicon glyphicon-ok-sign"></i>
                                    : <i className="form-control-feedback glyphicon glyphicon-exclamation-sign"></i>}
                                {error[0] == true ? <p className="error-msg">{error[0]}</p> : null}
                            </div>
                            <div className="text-center">
                                {error[6] == true ? <div className="input-group">
                                        <span className="input-group-addon greenpls"><i
                                            className="glyphicon glyphicon-ok colorpls"></i></span>
                                        <input id="greenpls" type="text" className="form-control colorpls"
                                               name="success" value="Change successfully!" readOnly/>
                                    </div> : (error[2] == true && error[0] == true) ?
                                        <button type="button" className="btn btn-info" onClick={this.editPass.bind(this)}>Change password</button>

                                        : <button disabled type="button" className="btn btn-info" onClick={this.editPass.bind(this)}>Change password</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    checkEmail(e) {
        e.preventDefault();
        const email = this.refs.email.value;
        const {checkValidation} = this.props;
        checkValidation(email.trim(), 'email');
    }

    checkCurrentPass(e) {
        e.preventDefault();
        const user = this.props.user;
        const currentPass = this.refs.currentPass.value;
        const {checkAvailable} = this.props;
        checkAvailable(user, currentPass.trim());
    }

    checkNewPass(e) {
        e.preventDefault();
        const newPass = this.refs.newPass.value;
        const currentPass = this.refs.currentPass.value;
        const {checkCoincidence} = this.props;
        checkCoincidence(newPass.trim(), currentPass.trim());
    }

    editEmail(e) {
        e.preventDefault();
        const userId = this.props.user._id;
        const email = this.refs.email.value;
        const {edit} = this.props;
        edit(userId, email, 'email');
    }

    editPass(e) {
        e.preventDefault();
        const userId = this.props.user._id;
        const newPass = this.refs.newPass.value;
        const {edit} = this.props;
        edit(userId, newPass, 'pass');
    }
}


export default SelfCare;