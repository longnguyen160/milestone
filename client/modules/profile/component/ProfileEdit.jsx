import React from 'react';
import FreelancerProfile from '../../users/containers/FreelancerProfile.js';
import CompanyProfile from '../../users/containers/CompanyProfile.js';

class ProfileEdit extends React.Component {
    render() {
        const {role, error} = this.props;
        if (role !== null)
            return (
                role == 'company' ? <CompanyProfile /> : <FreelancerProfile />
            )
    }
}

export default ProfileEdit;