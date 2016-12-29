import React from 'react';
import FreelancerProfile from '../../users/containers/FreelancerProfile.js';
import CompanyProfile from '../../users/containers/CompanyProfile.js';

class ProfileEdit extends React.Component {
    render() {
        const {role, error} = this.props;
        if (role !== undefined)
            return (
                role == 'company' ? <CompanyProfile /> : <FreelancerProfile />
            )
        else return null;
    }
}

export default ProfileEdit;