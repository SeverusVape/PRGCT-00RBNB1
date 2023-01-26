import axios from "axios";
import React, { useState, useContext } from "react";

import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const { setUser } = useContext(UserContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/login", {
                email,
                password,
            });
            setUser(data);
            setRedirect(true);
        } catch (error) {
            console.log(error);
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-3xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
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
                    <button className="login-btn">Log In</button>
                    <div className=" text-center py-2 text-gray-600">
                        {" "}
                        Don't have an account yet?{" "}
                        <Link
                            className="underline text-rose-500 font-semibold"
                            to={"/register"}
                        >
                            Register now!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
