import React from 'react';
require("./css/userprofile.css");

const UserProfile = ({context} = () => null) => (
    <div id="mainLogin" className="text-center">
    <div id="container">
        <div id="uprofile">
            <div id="avatar_user">
                <img src="./img/avatar/giphy.gif" alt=""/>
            </div>
            <div id="name_user">
            </div>
            <div id="warning_mess">
            </div>
        </div>
    </div>
    </div>
);


export default UserProfile;   