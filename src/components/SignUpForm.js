import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
     const navigate = useNavigate(); 
     const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration success


     const onSubmit = (data) => {
        // Handle form submission here, you can access form data via the 'data' parameter
        console.log(data);

        //store email and password in localStorage.
        localStorage.setItem(data.email, JSON.stringify({password:
        data.password, name: data.name}));

        setRegistrationSuccess(true);

        // Redirect to the login page after a successful registration
         navigate("/login");
     }

	return (

        <div className="Form">
        <p className="title">Registration Form</p>
           
            {registrationSuccess ? (
             <div>
                <p  style={{ color: "green" }}>Successfully Registered!</p>
                 
                </div>
            ) : (
			<form className="SignUpForm" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Name" {...register("name")} />
				<input type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
				<input type="password" placeholder="Password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
			</form>
            )}
        </div>
           
	);
}

export default SignUp;
