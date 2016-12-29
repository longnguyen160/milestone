import React from 'react';

class StatusMail extends React.Component {
	render(){
		return(
			<div className="container">
				
					<div className="row">
						<div className="col-md-6 col-md-offset-3 well">
							<h3 className="text-center">Hi fname lname</h3>
							<p className="text-center">Are you available ?</p>
							<br></br>
							<div className="row text-center">
								<button type="submit" className="btn btn-success">YES</button> &nbsp;
								<button type="submit" className="btn btn-danger">NO</button> &nbsp;
								<button type="submit" className="btn btn-info">SOON</button>
							</div>
						</div>
					</div>
			</div>
		)
	}
}
export default StatusMail;