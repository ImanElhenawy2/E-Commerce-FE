import { Input, Radio, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "./../../apiClient.jsx";

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
                        <Typography
                            variant="small"
                            color="gray"
                            className="mt-2 flex items-center gap-1 font-normal"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-px h-4 w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Use at least 8 characters, one uppercase, one
                            lowercase and one number.
                        </Typography>
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
                <div className=" flex justify-center mb-4">
                    <Button
                        className=" items-center text-lg  w-[36rem] bg-teal-400"
                        onClick={handleSubmit}
                    >
                        Create a new account
                    </Button>
                </div>
            </div>
        </>
    );
};
export default Register;

//<div _ngcontent-duk-c252="" class="gender-radio-button center-content"><span _ngcontent-duk-c252="" class="input-radio"><label _ngcontent-duk-c252=""><input _ngcontent-duk-c252="" formcontrolname="gender" type="radio" id="0" class="ng-untouched ng-pristine ng-valid"><span _ngcontent-duk-c252="" class="radio-button"><span _ngcontent-duk-c252="" class="checked"></span></span><span _ngcontent-duk-c252="" data-key="register.component.gendertype.woman" data-value="Frau" class="message-pipe"> Ms </span><!----><!----><!----><!----><!----></label></span></div>
