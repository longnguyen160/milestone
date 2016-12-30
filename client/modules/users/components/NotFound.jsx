import React from 'react';
require("./css/style.css");
require("./css/home.css");

const TOS = ({context} = () => null) => (
    <div className="container flex_item" id="main">
    <title>You are lost!</title>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template go-left">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                    </div>
                    <img src="http://www.buzzhunt.co.uk/wp-content/2012/01/more-cats-wrong2.jpg" width="45%" className="go-left" style={{margin: '0px 5rem'}} alt=""/>
                </div>
            </div>
        </div>
        
    </div>
);


export default TOS;