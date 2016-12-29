import React from 'react';
import Application from './Application.jsx';

class Applications extends React.Component {
  render() {
    const {list,accept, decline} = this.props;

    return (
        <div id="mainLogin" className="text-center">
        <title>Admin Panel - Apply Account</title>
        <div id="container">
            {list.length !== 0 ? <h1>Application</h1> : <h1>No records</h1>}
            <div id="freelancer">
                <div className="panel-group">
                    {
                      list.length !== 0 ? list.map(apply => (<Application key={apply._id} apply={apply} accept={accept} decline={decline}/>))
                            : null
                    }
                </div>
            </div>
        </div>
        </div>
    )
  };
  }

export default Applications;
