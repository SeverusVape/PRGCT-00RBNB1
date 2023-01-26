import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        axios.post("/register", {
            name,
            email,
            password,
        });
    };

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-3xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder="Your_Name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="your_password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="login-btn">Register</button>
                    <div className=" text-center py-2 text-gray-600">
                        Already a member?{" "}
                        <Link
                            className="underline text-rose-500 font-semibold"
                            to={"/login"}
                        >
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
