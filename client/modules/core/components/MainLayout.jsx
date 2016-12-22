import React from 'react';
import NavBar from '../../layout/components/NavBar.jsx';
import Footer from '../../layout/components/Footer.jsx';

const Layout = ({content}) => (

	<div id="mother">
        <header>
            <NavBar />
        </header>
        <div className="container-fluid">
            <div className="row">
                <div className="row-md-12">
                    {content()}
                </div>
            </div>
        </div>
        <footer>
            <Footer />
        </footer>
	</div>
);

export default Layout;
