import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');
require("./css/login.css");
require("./css/confirm.css");

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <div id="mainLogin" className="text-center">
        <div id="container">
            <div id="confirm">
                <h1 id="morespace">Your status has been updated</h1>
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
                <DatePicker inline
                    selected={this.state.startDate}
                    onChange={this.handleChange.bind(this)}
                    className=""
                />
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
                <div className="input-group">
                    <span className="input-group-addon orangepls"><i
                        className="glyphicon glyphicon-calendar colorpls"></i></span>
                    <input id="orangepls" type="text" className="form-control colorpls" name="warning"
                           value="You will be available from DD.MM.YYYY" readOnly/>

                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-info"><b>Continue to your profile</b></button>
                </div>
            </div>
        </div>
    </div>
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default Update;