import React from 'react';
import FreelancerProfile from '../../profile/component/FreelancerProfile';
import CompanyProfile from '../../profile/component/CompanyProfile';

class ProfileEdit extends React.Component {
    render() {
        const {user} = {currentUser};
        let renderComponent = null;
        if(user.role == 'company')
            renderComponent = return (
                <CompanyProfile />
            )
        else
            renderComponent = return (
                <FreelancerProfile />
            )
        return (
            {renderComponent}
        )
    }
}

export default ProfileEdit;