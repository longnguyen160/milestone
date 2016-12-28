import React from 'react';

class InvitationCode extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <div id="mainLogin" className="text-center">
      <div id="container">
          <h1>Joining SI</h1>
          <div id="information" className="go-left">
          asfjhkasf
          adsf
          asd
          </div>
          <div id="Card" className="go-left">
            <form className="centerlize">
              <p>You need an invitation to join SI</p>
              {!error ? null
                : <div className="alert alert-danger alert-dismissable nomargin">
                  <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                  <strong>{error}</strong>
              </div>}
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Invite Code" ref="inviteCode"/>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-info btn-md" onClick={this.checkInvitationCode.bind(this)}>Continue</button>
              </div>
              <br />
              <p>No invitation? <a href="/register/freelancer/apply">Apply here</a></p>
            </form>
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

export default InvitationCode;
