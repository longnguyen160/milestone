import React from 'react';
require("./css/statusmail.css");

class StatusMail extends React.Component {
	render(){
		return(
			<div id="container">
				<div id="box">
					<h3>Hi fname lname</h3>
					<p>Are you available ?</p>
					<br></br>
					<div id="btn">
						<button id="btn1">YES</button> &nbsp;
						<button id="btn2">NO</button> &nbsp;
						<button id="btn3">SOON</button>
					</div>
				</div>
			</div>
		)
	}
}
export default StatusMail;