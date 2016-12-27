import React from 'react';
import FreelancerProfile from '../../profile/component/FreelancerProfile';
import CompanyProfile from '../../profile/component/CompanyProfile';

class ProfileEdit extends React.Component {
    render() {
        const {user} = {currentUser};
        return (
            user.role == 'company' ? <CompanyProfile /> : <FreelancerProfile />        )
    }
}

export default ProfileEdit;