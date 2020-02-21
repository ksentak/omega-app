import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import './Login.css';


class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			// Push user to dashboard when they login
			this.props.history.push("/dashboard");
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	};
	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3 returnHome">
						<Link to="/" className="link"><i class="fas fa-backspace"></i> Return Home</Link>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center loginText">
						<h3>Log In Below</h3>
						<p>Don't have an account? <Link to="/register" className="link">Register</Link></p>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center">
						<form noValidate onSubmit={this.onSubmit}>
							{/* Email */}
							<div className="col-8 offset-2">
								<label htmlFor="email">Email:</label>
								<span className="text-danger">{errors.email} {errors.emailnotfound}</span>
								<input
									type="email"
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									className={classnames("form-control", { 
										invalid: errors.email || errors.emailnotfound 
									})}
									placeholder="Enter your email..."
								/>
							</div>

							{/* Password */}
							<div className="col-8 offset-2">
								<label htmlFor="password">Password:</label>
								<span className="text-danger">{errors.password} {errors.passwordincorrect}</span>
								<input
									type="password"
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									className={classnames("form-control", {
										invalid: errors.password || errors.passwordincorrect
									})}
									placeholder="Enter your password..."
								/>
							</div>

							{/* Submit button */}
							<div className="col-8 offset-2">
								<button className="btn loginbtn" type="submit">
									Log In
			 	  				</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
