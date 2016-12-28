import React from 'react';
import NavBar from '../../users/components/NavBar.jsx';
import Footer from '../../users/components/Footer.jsx';
import UserNavBar from '../../users/components/UserNavBar.jsx'
import AdminNavBar from '../../users/components/AdminNavBar.jsx'
import DatePicker from 'react-datepicker';
require("./style.css");

class Layout  extends React.Component {
    constructor(props, context){
        super(props)
        this.state = {}
    }
    render() {
        const {content} = this.props;
        let {role} = this.props;
        let {foot} = this.props;
        return (
        <div id="root" onLoad={this.reupdate.bind(this)}>
            <div id="nav">
                {role === null ? <NavBar /> : role === true ? <UserNavBar /> : <AdminNavBar /> }
            </div>
            <div id="mainlayout">
                {content()}
            </div>
            {!foot ?
                <div id="footer">
                    <Footer /> 
                </div>
                : ""
            }
        </div>
        );

    };

    reupdate(e) {
        this.role = this.props;
    };

};

export default Layout;
