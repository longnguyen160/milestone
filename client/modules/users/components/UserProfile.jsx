import React from 'react';
require("./css/userprofile.css");

const UserProfile = ({context} = () => null) => (
    
    <div id="uprofile_container">
        <div id="uprofile">
            <div id="avatar_user" className="flex_center">
                <img className="img-responsive img-circle" src="https://s-media-cache-ak0.pinimg.com/236x/10/42/64/10426467e108bfc23e7e56bd65e6bb82.jpg" alt=""/>
            </div>
            <div id="name_user" className="flex_center">
                <h2>Firstname Lastname</h2>
            </div>
            <div id="warning_mess" className="flex_center_col">
                <h4>is not available</h4>
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