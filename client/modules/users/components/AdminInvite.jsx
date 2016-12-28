import React from 'react';
require("./css/login.css");
require("./css/signup.css");

class AdminInvite extends React.Component {
    render() {
        const {error,list} = this.props;
        console.log(list);
        console.log(error);
        return (
            <div id="mainLogin" className="text-center">
            <title>Admin Panel - Invite</title> 
                <div id="container">
                    <div className="Card">
                        <form className="centerlize">
                            <label for="email" className="go-left">Generate invite codes</label>
                            <div className="input-group">
                                <input ref='count' id="amount" type="text" className="form-control" name="amount" placeholder="How many codes?"/>
                            </div>
                            <div className="input-group">
                                <input ref='usage' id="mlen" type="text" className="form-control" name="mlen" placeholder="Maximum usage of each code?"/>
                            </div>
                            <div className="text-center">
                                <button onClick={this.generateCode.bind(this)} type="submit" className="btn btn-info">Generate codes</button>
                            </div>
                        </form>
                    </div>
                    <div id="result">
                        <div className="go-left-text">
                            <h4>Result:</h4>
                            {list ? list.map((result,index) => (<li key={index} >{result.code}</li>)) : null}

                        </div>
                    </div>
                </div>
            </div>
        )
    };
    generateCode(e) {
      e.preventDefault();
      const {generateCode} = this.props;
      const {count,usage} = this.refs;
      // console.log(count.value);
      // console.log(usage);
      generateCode(count.value, usage.value);
    };

};
export default AdminInvite;
