import React from 'react';
import NavBar from '../../layout/components/NavBar.jsx';
import Footer from '../../layout/components/Footer.jsx';
import UserNavBar from '../../layout/components/UserNavBar.jsx'
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
