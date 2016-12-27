import React from 'react';
require("./css/style.css");

class CompanyProfile extends React.Component {

	render (){
        const {user} = {currentUser: function() {
            return Meteor.user();
        }};
		return(
			<div className="container">
			<div className="row">
				<div className="col-md-4">		
						<h4>Company Logo</h4>
						<img src="css/img/default-avatar.jpg" alt="avatar"/>
						<form>
							<div className="form-group">
								<input type="file" id="exampleInputFile"/>
							</div>
						</form>
						<button type="submit" className="btn btn-danger">Delete company logo</button>
				</div>
				<div className="col-md-8">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="First name" ref="fname"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Last name" ref="lname"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Company" ref="company"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Company URL" ref="companyURL"/>
							</div>
							<div className="text-center"> 
								<button type="button" className="btn btn-info" onClick={this.edit.bind(this)}>Save</button>
							</div>
						</form>	
				</div>
			</div>
			</div>
		)
	}

	edit(e) {
		e.preventDefault();
		const {editCompanyProfile} = this.props;
		const {fname, lname, company, companyURL} = this.refs;
		const userId = this.props.user._id;
		editCompanyProfile(userId, fname, lname, company, companyURL);
		this.refs.fname.value = '';
        this.refs.lname.value = '';
        this.refs.company.value = '';
        this.refs.companyURL.value = '';
	}
}
export default CompanyProfile;