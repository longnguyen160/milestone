import React from 'react';
require("./css/userprofile.css");

const UserProfile = ({context} = () => null) => (
    
    <div id="container">
        <div id="uprofile">
            <div id="avatar_user" className="flex_center">
                <img className="img-responsive img-circle" src="http://4.bp.blogspot.com/-fYJrkNWec08/T9EYOmNGPNI/AAAAAAAAC04/UtdRRM8a3hc/s640/cat-fat-dancing-cat-gif.gif" alt=""/>
            </div>
            <div id="name_user" className="flex_center">
                <h2>Firstname Lastname</h2>
            </div>
            <div id="warning_mess" className="flex_center_col">
                <h4>Err! Something gone wrong with the kitty!</h4>
            </div>
            <div id="success_mess" className="flex_center_col">
                <h4>Err! Something gone wrong with the kitty!</h4>
            </div>
            <div id="info_mess" className="flex_center_col">
                <h4>Err! Something gone wrong with the kitty!</h4>
            </div>
        </div>
    
    </div>
);


export default UserProfile;   