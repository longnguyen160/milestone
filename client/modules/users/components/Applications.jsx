import React from 'react';
import Application from './Application.jsx';

class Applications extends React.Component {
  render() {
    const {list} = this.props;
    console.log(list);
    return (
        <div id="mainLogin" className="text-center">
        <title>Admin Panel - Apply Account</title>
        <div id="container">
            <h1>Application</h1>
            <div id="freelancer">
                <div className="panel-group">
                    {list ? list.map(apply => (<Application key={apply._id} apply={apply}/>)) : null}
                </div>
            </div>
        </div>
        </div>
    )
  };
  }

export default Applications;
