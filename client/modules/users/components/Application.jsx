import React from 'react';
require("./css/application.css");

class Application extends React.Component {
  render() {
      const {apply} = this.props;
      return (
          <div className="panel panel-default">
              <div className="panel-heading">
                  <div className="panel-title">
                      <div className="container-fluid">
                          <div className="title">
                              <h4>
                                  <a data-toggle="collapse" href={'#collapse' + apply._id}>{apply.firstName + ' ' + apply.lastName}</a>
                              </h4>
                          </div>
                          <div className="decision">
                              <button type="button" className="btn btn-success more-spacing">Accept</button>
                              <button type="button" className="btn btn-danger">Decline</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div id={'collapse' + apply._id} className="panel-collapse collapse">
                  <div className="panel-body">
                      <p>First Name</p>
                      <p>{apply.firstName}</p>
                  </div>
                  <div className="panel-body">
                      <p>Last Name</p>
                      <p>{apply.lastName}</p>
                  </div>
                  <div className="panel-body">
                      <p>Email</p>
                      <p>{apply.email}</p>
                  </div>
                  <div className="panel-body">
                      <p>Link Details</p>
                      <p>{apply.link}</p>
                  </div>
                  <div className="panel-body">
                      <p>Introduction</p>
                      <p>{apply.introduction}</p>
                  </div>
                  <div className="panel-body">
                      <p>Apply at</p>
                      <p>{apply.createAt.toString()}</p>
                  </div>
              </div>
          </div>
      )
    };
  }
export default Application;
