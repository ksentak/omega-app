import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
	render() {
		return (
			<div className="container col-12 m-0 p-0">
				<div className="jumbotron jumbotron-fluid">
					<h4 className="text-center">Build a React application with user authentication</h4>
					<h6 className="text-center">via JWTs and passport</h6>
				</div>

				{/* Links to Register & Login */}
				<div className="row">
					<div className="col-sm-10 offset-1 text-center">
						{/* Register */}
						<Link to="/register" className="btn bg-success">Register</Link>

						{/* Login */}
						<Link to="/login" className="btn bg-primary">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Landing;