import React from 'react';

class FreelancerRegister extends React.Component {
  render() {
    const {error, success} = this.props;
    return (
      <div id="mainLogin text-center">
        <div id="Card">
          <form className="centerlize">
            <p>You need an invitation to join SI</p>
            {error ?
                <div className="alert alert-danger alert-dismissable nomargin">
                    <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{error}</strong>
                </div> : null}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Invite Code" ref="inviteCode"/>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-info btn-md" onClick={this.sendInviteCode.bind(this)}>Continue</button>
            </div>
            <br />
            <p>No invitation? <a href="/register/freelancer/finish">Apply here</a></p> 
          </form>
        </div>
      </div>
    )
  }

  sendInviteCode(e) {
    e.preventDefault();
    const {sendCode} = this.props;
    const {inviteCode} = this.refs;
    sendCode(inviteCode.value);
    this.refs.inviteCode.value = '';
  }
}

export default FreelancerRegister;
