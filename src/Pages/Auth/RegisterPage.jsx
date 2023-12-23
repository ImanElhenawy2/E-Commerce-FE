import { Input, Radio, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "./../../../apiClient.jsx";

const Register = () => {
    const navigate = useNavigate();

    const [gender, setGender] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassord, setConfirmPassord] = useState("");

    const handleChangeGender = (e) => {
        setGender({ selectedOption: e.target.value });
    };
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeConfirmPassord = (e) => {
        setConfirmPassord(e.target.value);
    };
    const handleSubmit = () => {
        if (
            gender &&
            firstName &&
            lastName &&
            username &&
            email &&
            password &&
            password === confirmPassord
        )
            apiClient
                .post("/users/register", {
                    Gender: gender,
                    FirstName: firstName,
                    LastName: lastName,
                    UserName: username,
                    Email: email,
                    Password: password,
                })
                .then((res) => {
                    if (res.data.responseCode === "SUCCESS") {
                        navigate("/login");
                    }
                });
    };

    return (
        <>
            <div className="container mx-auto w-1/2 my-2">
                <div className="grid justify-center grid-cols-2 divide-x h-12">
                    <button
                        className="rounded-none bg-indigo-200 border-slate-400"
                        type="button"
                    >
                        New here
                    </button>
                    <button
                        className="rounded-none bg-gray-200 border-slate-400"
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        Log in{" "}
                    </button>
                </div>
                <h1 className="text-center text-2xl font-semibold m-8">
                    Register
                </h1>

                <div className="flex justify-center gap-10 text-xl">
                    <Radio
                        name="gender"
                        value="Mrs"
                        label="Mrs"
                        onChange={handleChangeGender}
                    />
                    <Radio
                        name="gender"
                        value="Mr"
                        label="Mr"
                        onChange={handleChangeGender}
                    />
                </div>
                <div className="w-[38rem] m-4">
                    <div className="mb-4 ml-6">
                        <Input
                            type="text"
                            label="First Name"
                            value={firstName}
                            onChange={handleChangeFirstName}
                        />
                    </div>
                    <div className="mb-4 ml-6">
                        <Input
                            type="text"
                            label="Last Name"
                            value={lastName}
                            onChange={handleChangeLastName}
                        />
                    </div>
                    <div className="mb-4 ml-6">
                        <Input
                            type="text"
                            label="Username"
                            value={username}
                            onChange={handleChangeUsername}
                        />
                    </div>
                    <div className="mb-4 ml-6">
                        <Input
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="mb-4 ml-6">
                        <Input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className="mb-4 ml-6">
                        <Input
                            type="password"
                            label="Confirm Password"
                            value={confirmPassord}
                            onChange={handleChangeConfirmPassord}
                        />
                    </div>
                </div>
                <div className="ml-10  mb-4">
                    <Button
                        className="block items-center text-lg  w-[36rem] bg-teal-400"
                        onClick={handleSubmit}
                    >
                        Create a new account
                    </Button>
                    <Typography
                        color="gray"
                        className="mt-4 text-center font-normal"
                    >
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="font-medium text-blue-900"
                        >
                            Sign In
                        </Link>
                    </Typography>
                </div>
            </div>
        </>
    );
};
export default Register;
