import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Landing extends Component {
	render() {
		return (
			<div className="container col-12 m-0 p-0">
				<div className="jumbotron jumbotron-fluid">
					<h2 className="text-center">Build a React application with user authentication</h2>
					<h5 className="text-center">via JWTs and passport</h5>
				</div>

				{/* Links to Register & Login */}
				<div className="row">
					<div className="col-sm-10 offset-1 text-center">
						{/* Register */}
						<Link to="/register" className="btn registerButton">Register</Link>

						{/* Login */}
						<Link to="/login" className="btn loginButton">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Landing;