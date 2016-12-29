import React from 'react';
require("./css/style.css");
require("./css/footer.css");

const Footer = ({context} = () => null) => (
    <div className="text-center container-fluid footer">
        <a href="/">Home</a>
        <a href="#">About</a>
        <a href="#">Apply</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
        <a href="#">Imprint</a>
        <a href="#">Terms</a>
    </div>

);


export default Footer;
