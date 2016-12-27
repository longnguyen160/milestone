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
        const {role} = this.props;
        return (
        <div id="root">
            <div id="nav">
                {role === null ? <NavBar /> : role === true ? <UserNavBar /> : <AdminNavBar /> }
            </div>
            <div id="content">
            {content()}
            </div>
            { role === null ? 
                <div id="footer">
                    <Footer /> 
                </div>
            : "" }
        </div>
        );
       
    };

};

export default Layout;
