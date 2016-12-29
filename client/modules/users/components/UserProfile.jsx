import React from 'react';
require("./css/userprofile.css");

class UserProfile extends React.Component {
    
    render() {
        const {availability} = this.props;
        const {name, status, date, username} = this.props;

        return (        
            <div id="uprofile_container">
                <div id="uprofile">
                    <div id="avatar_user" className="flex_center">
                        <img className="img-responsive img-circle" src="https://s-media-cache-ak0.pinimg.com/236x/10/42/64/10426467e108bfc23e7e56bd65e6bb82.jpg" alt=""/>
                    </div>
                    {
                    availability 
                    ?
                        <div id="name_user" className="flex_center">
                            <h2>{name}</h2>
                        </div>
                    : 
                        <div id="name_user" className="flex_center">
                            <h2>{username}</h2>
                        </div>
                    }
                    {
                    availability 
                    ?
                        status === 'not available'
                         ?
                            <div id="warning_mess" className="flex_center_col">
                                <h4>is not available</h4>
                            </div>
                        : 
                            status === 'available' 
                            ?
                                <div id="success_mess" className="flex_center_col">
                                    <h4>is available</h4>
                                </div> 
                            :
                                <div id="info_mess" className="flex_center_col">
                                    <h4>is available until {date}</h4>
                                </div>   
                    : 
                            <div id="warning_mess" className="flex_center_col">
                                <h4>FREELANCER CANNOT BE FOUND</h4>
                            </div> 
                    }
                </div>
            
            </div>
        )
    }
}

export default UserProfile;   