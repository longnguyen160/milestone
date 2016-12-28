import React from 'react';
require("./css/login.css");
require("./css/signup.css");

class AdminInvite extends React.Component {
    render() {
        const {error} = this.props;
        console.log(error);
        return (
            <div id="mainLogin" className="text-center">
                <div id="container">
                    <div className="Card">
                        <form className="centerlize">
                            <label for="email" className="go-left">Generate invite codes</label>
                            <div className="input-group">
                                <input id="amount" type="text" className="form-control" name="amount" placeholder="How many codes?"/>
                            </div>
                            <div className="input-group">
                                <input id="mlen" type="text" className="form-control" name="mlen" placeholder="Maximum usage of each code?"/>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-info">Generate codes</button>
                            </div>
                        </form>
                    </div>
                    <div id="result">
                        <div className="go-left-text">
                            <h4>Result:</h4>
                            <p>code 1</p>
                            <p>code 1</p>
                            <p>code 1</p>
                            <p>code 1</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    };

};
export default AdminInvite;
