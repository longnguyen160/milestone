import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');
require("./css/login.css");
require("./css/confirm.css");

class Update extends React.Component {
  constructor() {
    super();
    const today = moment();
    this.state = {
        today: today,
        startDate: moment(),
        error: ''
    };
  }

  render() {
    const {status} = this.props;
    const {username} = this.props;
    return (
      <div id="mainLogin" className="text-center">
        <div id="container">
            <div id="confirm">
                <h1 id="morespace">{status === 'soon' ? 'Select a date you want to available' : 'Your status has been updated'}</h1> 
                {/* reaplce value with your message 
                <div className="input-group">
                    <span className="input-group-addon greenpls"><i
                        className="glyphicon glyphicon-ok colorpls"></i></span>
                    <input id="greenpls" type="text" className="form-control colorpls" name="success"
                           value="You are now listed as available" readOnly/>

                </div>
                <div className="input-group">
                    <span className="input-group-addon redpls"><i
                        className="glyphicon glyphicon-remove colorpls"></i></span>
                    <input id="redpls" type="text" className="form-control colorpls" name="warning"
                           value="You are now listed as not available" readOnly/>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info"><b>Continue to your profile</b></button>
                </div>*/}
                {status === 'yes' 
                ?
                    <div className="input-group">
                        <span className="input-group-addon greenpls"><i
                            className="glyphicon glyphicon-ok colorpls"></i></span>
                        <input id="greenpls" type="text" className="form-control colorpls" name="success"
                            value="You are now listed as available" style={{fontWeight: 'bold'}} readOnly/>

                    </div>
                :
                    status === 'no' 
                        ?
                            <div className="input-group">
                                <span className="input-group-addon redpls"><i
                                    className="glyphicon glyphicon-remove colorpls"></i></span>
                                <input id="redpls" type="text" className="form-control colorpls" name="warning"
                                    value="You are now listed as not available" style={{fontWeight: 'bold'}} readOnly/>        
                            </div>
                        :
                    status === 'soon'
                        ?
                        <span>
                            <DatePicker inline
                                selected={this.state.startDate}
                                onChange={this.handleChange.bind(this)}
                                className=""
                            />
                            <div className="input-group">
                                <span className="input-group-addon orangepls"><i
                                    className="glyphicon glyphicon-calendar colorpls"></i></span>
                                <input id="orangepls" type="text" style={{fontWeight: 'bold'}} className="form-control colorpls" name="warning"
                                    value={!this.state.error 
                                                ? 'You will be available from '+ moment(this.state.startDate).format("MM.DD.YYYY")
                                                : this.state.error}  readOnly/>

                            </div>
                        </span>
                        :
                            ""
                }
                <div className="text-center">
                    <a href={'/profile/'+username} className="btn btn-info" style={{marginTop: '2rem'}}><b>Continue to your profile</b></a>
                </div>
                
            </div>
        </div>
    </div>
    );
  }

  movebitch(e) {
      e.preventDefault();

      FlowRouter("/profile/"+username);
  }

  handleChange(date) {
    if(moment(date).isBefore(this.state.today, "day")) {
        this.setState({
            error: 'Your selected date is not allowed!'
        })    
        return;
    }
    this.setState({
        startDate: date,
        error: ''
    });
}
}

export default Update;