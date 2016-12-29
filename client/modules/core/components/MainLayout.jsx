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
        const {content, isNotShowFooter, changeBackground} = this.props;
        let {role} = this.props;
        return (
        <div id="root">
            <div id="nav">
                {role === null ? <NavBar /> : role === true ? <UserNavBar /> : <AdminNavBar /> }
            </div>
            
            <div id="mainlayout" className={
                changeBackground !== undefined && changeBackground !== null ?
                    changeBackground === true ? 'background_free_profile'
                    : 'background_comp_profile'
                : ""}
            >
                <div id="maincontent">
                    {content()}
                </div>
                
                {isNotShowFooter !== true ?
                <div id="footer">
                    <Footer /> 
                </div>
                : ""
            }
            </div>  
        </div>
        );
    };

    reupdate(e) {
        
        this.role = this.props.role;
    };

};

export default Layout;
