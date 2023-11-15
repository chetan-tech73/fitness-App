
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

    const navigate = useNavigate();

	const onSubmit = (data) => {
		const userData = JSON.parse(localStorage.getItem(data.email));
		if (userData) { // getItem can return actual value or null
			alert(userData.name + " You Are Successfully Logged In");
				navigate("/mainDashboard");

		} else {
			alert("Email or Password is not matching with our record");
		}
	};
	return (
		<div className="Form">
			<p className="title">Login Form</p>

			<form className="App" onSubmit={handleSubmit(onSubmit)}>
				<input type="email" {...register("email", { required: true })} />
				{errors.email && <span style={{ color: "red" }}>
					*Email* is mandatory </span>}
				<input type="password" {...register("password")} />
				<input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
		</div>
	);
}
export default LoginPage;
