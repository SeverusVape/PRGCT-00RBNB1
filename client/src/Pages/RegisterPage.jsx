import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-3xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Your_Name" required />
                    <input type="email" placeholder="your@email.com" required />
                    <input
                        type="password"
                        placeholder="your_password"
                        required
                    />
                    <button className="login-btn">Log In</button>
                    <div className=" text-center py-2 text-gray-600">
                        Already a member?{" "}
                        <Link className="underline text-rose-500" to={"/login"}>
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
