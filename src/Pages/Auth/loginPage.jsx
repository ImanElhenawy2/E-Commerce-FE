import { Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "./../../../apiClient.jsx";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        if (username && email && password)
            apiClient
                .post("/users/login", {
                    UserName: username,
                    Email: email,
                    Password: password,
                })
                .then((res) => {
                    if (res.data.responseCode === "SUCCESS") {
                        let token = res.data.AccessToken;
                        localStorage.setItem("token", token);

                        navigate("/");
                    }
                });
    };

    return (
        <>
            <div className="container mx-auto w-2/5 my-2 p-2">
                <div className="grid justify-center grid-cols-2 divide-x h-12">
                    <button
                        className="rounded-none bg-gray-200 border-slate-400"
                        type="button"
                        onClick={() => navigate("/register")}
                    >
                        New here
                    </button>
                    <button
                        className="rounded-none bg-indigo-200 border-slate-400"
                        type="button"
                    >
                        Log in
                    </button>
                </div>
                <h1 className="text-center text-2xl font-semibold m-8">
                    Log-in
                </h1>

                <div className="w-[32rem] m-0 ">
                    <div className="mb-4">
                        <Input
                            id="username"
                            type="text"
                            label="Username*"
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            id="email"
                            type="email"
                            label="Email address*"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            id="password"
                            type="password"
                            label="Password*"
                            value={password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className=" ml-0  mb-4">
                        <Button
                            className="block items-center text-lg w-[32rem] bg-teal-400"
                            onClick={handleSubmit}
                        >
                            LOG IN
                        </Button>{" "}
                        <Typography
                            color="gray"
                            className="mt-4 text-center font-normal"
                        >
                            Don't have an account yet?{" "}
                            <Link
                                to={"/login"}
                                className="font-medium text-blue-900"
                            >
                                Register now
                            </Link>
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
