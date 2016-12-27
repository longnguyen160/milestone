import React from 'react';
require("./css/login.css");
require("./css/style.css");

class FreelancerProfile extends React.Component{
	render (){
		return(
			<div className="row">
				<div className="col-sm-4">
					<div id="Card">
						<div className="card card-block text-xs-center">
							<h4 className="card-title">Are you available?</h4>
							<a href="#" className="btn btn-info">Y/N Toggle</a>
							<a href="#">Seen</a>
						</div>
					</div>

					<div className="Card">	
						<h4>Profile image</h4>
						<img src="css/img/default-avatar.jpg" alt="avatar"/>
						<form>
							<div className="form-group">
								<input type="file" id="exampleInputFile"/>
							</div>
						</form>
						<button type="submit" className="btn btn-danger">Delete profile logo</button>
					</div>

					<div className="Card">	
						<h4>Background image</h4>
						<form>
							<div className="form-group">
								<input type="file" id="exampleInputFile"/>
							</div>
						</form>
						<button type="submit" className="btn btn-danger">Delete Background company logo</button>
					</div>

				</div>

				<div className="col-sm-8">
					<div className="Card">
						<div className="col-sm-6">
							<fieldset>
								<form>
									<h2>Your basic information</h2>
									<div className="form-group">
										<input type="text" class="form-control" placeholder="First name"/>
									</div>
									<div className="form-group">
										<input type="text" class="form-control" placeholder="Last name"/>
									</div>
									<div className="form-group">
										<select class="form-control">
											<option>Position</option>
											<option>Position 1</option>
											<option>Position 2</option>
										</select>
									</div>
									<div className="form-group">
										<select class="form-control">
											<option>Location</option>
											<option>Location 1</option>
											<option>Location 2</option>
										</select>
									</div>

									<div class="checkbox">
										<label>
											<input type="checkbox"/> Travel is possible
										</label>
									</div>
								</form>
							</fieldset>
						</div>

						<div className="col-sm-6">
							<fieldset>
								<h3>Experience in this Position</h3>
								<div className="form-group">
									<select class="form-control">
										<option>Experience in this Position</option>
										<option>Experience in this Position 1</option>
										<option>Experience in this Position 2</option>
									</select>
								</div>

								<div className="form-group">
									<select class="form-control">
										<option>Rate</option>
										<option>Rate 1</option>
										<option>Rate 2</option>
									</select>
									<span class="glyphicon glyphicon-lock" aria-hidden="true"></span> This is only visible to subscribers
								</div>

								<div className="form-group">
									<input type="text" class="form-control" placeholder="Link"/>
								</div>
							</fieldset>
						</div>

						<div className="col-sm-12">
							<hr/>
							<fieldset>
								<h2>Your details</h2>
								<div className="form-group">
									<input type="text" class="form-control" placeholder="Headline"/>
								</div>
								<div className="form-group">
									<textarea class="form-control" rows="5" placeholder="Introduce yourself in 300 characters"></textarea>
									<p>243 characters left</p>
								</div>
								<div className="form-group">
									<select class="form-control">
										<option>Skills you have</option>
										<option>Skills you have 1</option>									
										<option>Skills you have 2</option>
									</select>
								</div>
								<div className="form-group">
									<select class="form-control">
										<option>Sectors you have worked in</option>
										<option>Sectors you have worked in 1</option>
										<option>Sectors you have worked in 2</option>
									</select>
								</div>
								<button type="submit" className="btn btn-primary">Save</button>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default FreelancerProfile;