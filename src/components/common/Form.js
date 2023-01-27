import React, {useState} from 'react'

export const Form = ({fromSchema}) => {
    const [inputs, setInputs] = useState({});


    const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		
			console.log(inputs);
			setInputs({});
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

  return (
    <div>

<div className="login">
				<form className="loginForm" onSubmit={handleSubmit}>
				{renderInputField(inputArrLogin)}
				</form>
			</div>
    </div>
  )
}
