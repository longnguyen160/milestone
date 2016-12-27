import React from 'react';
require("./css/login.css");

class CompanyProfile extends React.Component {

	render (){
		return(
			<div className="row">
				<div className="Card">
					<div className="col-sm-4">
						<h4>Company Logo</h4>
						<img src="css/img/default-avatar.jpg" alt="avatar"/>
						<form>
							<div className="form-group">
								<input type="file" id="exampleInputFile"/>
							</div>
						</form>
						<button type="submit" className="btn btn-danger">Delete company logo</button>
					</div>
				</div>

				<div className="Card">
					<div className="col-sm-8">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="First name"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Last name"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Company"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Company URL"/>
							</div>
							<div className="text-center"> 
								<button type="submit" className="btn btn-info">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default CompanyProfile;