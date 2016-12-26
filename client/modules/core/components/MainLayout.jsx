import React from 'react';
import NavBar from '../../users/components/NavBar.jsx';
import Footer from '../../users/components/Footer.jsx';
import UserNavBar from '../../users/components/UserNavBar.jsx'
import AdminNavBar from '../../users/components/AdminNavBar.jsx'
import DatePicker from 'react-datepicker';
require("./style.css");


const Layout = ({content}) => (
    <div id="root">
        <div id="nav">
            <NavBar />
        </div>
        <div id="content">
        {content()}
        </div>
        <div id="footer">
            <Footer />
            {/* <DatePicker inline selected={this.state.startDate} onChange={this.handleChange} /> */}
        </div>
    </div>
);

export default Layout;
