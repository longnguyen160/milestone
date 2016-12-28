import React from 'react';

require("./css/application.css");

class Application extends React.Component {
  render() {
    const {error} = this.props;
    return (
          
        <div id="mainLogin" className="text-center">
        <title>Admin Panel - Apply Account</title>  
        <div id="container">
            <h1>Application</h1>
            <div id="freelancer">
                <div className="panel-group">
                    {/*Start here*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">
                            <div className="container-fluid">
                                <div className="title">
                                    <h4>
                                        <a data-toggle="collapse" href="#collapse1">Collapsible panel</a>
                                    </h4>
                                </div>
                                <div className="decision">
                                    <button type="button" className="btn btn-success more-spacing">Accept</button>
                                    <button type="button" className="btn btn-danger">Decline</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                             <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                             <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                        </div>
                    </div>
                    {/*End here*/}
                    {/*Start here*/}
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="panel-title">
                            <div className="container-fluid">
                                <div className="title">
                                    <h4>
                                        {/*Replace href*/}
                                        <a data-toggle="collapse" href="#collapse2">Collapsible panel</a>
                                    </h4>
                                </div>
                                <div className="decision">
                                    <button type="button" className="btn btn-success more-spacing">Accept</button>
                                    <button type="button" className="btn btn-danger">Decline</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/*Replace ID to show from href above*/}
                        <div id="collapse2" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                             <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                             <div className="panel-body">
                                <p>Name</p>
                                <p>Long Hoang</p>
                            </div>
                        </div>
                    </div>
                    {/*End here*/}
                </div>
            </div>
        </div>
        </div>
    )
  };
  checkInvitationCode(e) {
    e.preventDefault();
    const {inviteCode} = this.refs;
    const {checkInvitationCode} = this.props;
    console.log(inviteCode.value.toUpperCase());
    checkInvitationCode(inviteCode.value.toUpperCase());
  }
}

export default Application;
