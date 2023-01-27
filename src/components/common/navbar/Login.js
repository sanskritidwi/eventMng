import React, { useState } from "react";

export const Login = () => {
	const [inputs, setInputs] = useState({});

	const [loggedIn, setLoggedIn] = useState(true);

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			Object.keys(inputs).length === 0 ||
			inputs.name === "" ||
			inputs.password === ""
		) {
			console.log("cannot submit form");
		} else {
			console.log(inputs);
			setInputs({});
		}
	};

	const inputArrLogin = [
		{
			label: "Your Email",
			type: "email",
			name: "username",
		},
		{
			label: "Password",
			type: "password",
			name: "password",
		},
	];

	const renderInputField = (arr) => {
		return (
			<>
				{arr.map((item, index) => {
					return (
						<div className="field" key={index}>
							<label>{item.label}</label>
							<input
								type={item.type}
								name={item.name}
								defaultValue=""
								onChange={handleInput}
								required
							/>
						</div>
					);
				})}
			</>
		);
	};

	const renderCustomForm = () => {
		return (
			<>
				<div className="newHere">
					New Here ?
					<div className="signUpBtn" onClick={() => setLoggedIn(!loggedIn)}>
						Sign Up
					</div>
				</div>
			</>
		);
	};

	const renderLoginForm = () => {
		if (!loggedIn) return null;
		console.log(loggedIn);
		return (
			<>
				<div className="title"> LOGIN</div>
				{renderInputField(inputArrLogin)}
				<button className="submit" type="submit">
					Submit
				</button>
				{renderCustomForm()}
			</>
		);
	};

	const renderSignUp = () => {
		if (loggedIn) return null;
		console.log(loggedIn);

		return (
			<>
				<div className="title"> SIGN UP</div>
				<div className="field">
					<label>Your Email</label>
					<input
						type="text"
						name="username"
						defaultValue={inputs.username || ""}
						onChange={handleInput}
						required
					/>
				</div>
				<div className="field">
					<label>Name</label>
					<input
						type="text"
						name="firstname"
						defaultValue={inputs.firstname || ""}
						onChange={handleInput}
						required
					/>
				</div>
				<div className="field">
					<label>Password</label>
					<input
						type="password"
						name="password"
						defaultValue={inputs.password || ""}
						onChange={handleInput}
						required
					/>
				</div>
				<button className="submit" type="submit">
					Submit
				</button>
				<div className="newHere">
					{" "}
					Already a User ?{" "}
					<div className="signUpBtn" onClick={() => setLoggedIn(!loggedIn)}>
						Login
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="LoginModalWrapper">
			<div className="login">
				<form className="loginForm" onSubmit={handleSubmit}>
					{renderLoginForm()}
					{renderSignUp()}
				</form>
			</div>
		</div>
	);
};
