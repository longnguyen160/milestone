import React from 'react';
import NavBar from '../../layout/components/NavBar.jsx';
import Footer from '../../layout/components/Footer.jsx';

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
        </div>
    </div>
);

export default Layout;
