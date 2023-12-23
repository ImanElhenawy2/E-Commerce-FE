import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";
import { useState } from "react";
import apiClient from "../apiClient";

const Navbar = () => {
    //const [username, setUsername] = useState;
    //apiClient.get("/user", { UserName: username }).then((res) => {
    //    if (res.data.responseCode === "SUCCESS") {
    //        setUsername();
    //    }
    //});
    return (
        <>
            {/*/className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4"*/}
            <nav className="max-h-20">
                <div className="flex justify-between md:container md:mx-auto">
                    <Link
                        to="/"
                        className=" p-2 my-3 text-3xl font-extrabold font-serif text-indigo-700"
                    >
                        <span className="text-4xl">&#x26A1;</span>
                        KICKS-CARTEL
                    </Link>
                    <ul className="flex justify-center text-indigo-900 my-2">
                        <Link to="/women">
                            <li className="text-xl p-2 m-3 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Women
                            </li>
                        </Link>
                        <Link to="/men">
                            <li className="text-xl p-2 m-3 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                ProductsDetails
                            </li>
                        </Link>
                        <Link to="/kids" state={{}}>
                            <li className="text-xl p-2 m-3 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Kids
                            </li>
                        </Link>
                    </ul>
                    <div className="flex justify-end m-6 my-6 gap-3">
                        <div>
                            <Link to="/map">
                                <Icon
                                    icon="clarity:map-marker-line"
                                    width="30"
                                    height="30"
                                    color="green"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/login">
                                <Icon
                                    icon="octicon:person-24"
                                    width="30"
                                    height="30"
                                    color="indigo"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/favorit">
                                <Icon
                                    icon="ph:heart"
                                    width="30"
                                    height="30"
                                    color="red"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link to="/cart">
                                <Icon
                                    icon="teenyicons:bag-outline"
                                    width="30"
                                    height="30"
                                    color="indigo"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="flex justify-between border-y border-solid border-2 my-0 max-h-14">
                <div className=" flex justify-between md:container md:mx-auto">
                    <ul className="flex justify-start text-indigo-900 my-2">
                        <Link to="/shoes">
                            <li className="text-lg p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Shoes
                            </li>
                        </Link>
                        <Link to="/bag-accessories">
                            <li className="text-lg p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Bags & Accessories
                            </li>
                        </Link>
                        <Link to="/brands">
                            <li className="text-lg p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Brands
                            </li>
                        </Link>
                        <Link to="/sale">
                            <li className="text-lg p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Sale
                            </li>
                        </Link>
                    </ul>
                    <input
                        className=" placeholder:text-slate-400 block w-3/12 bg-gray-200 border-slate-300 mr-4 my-2 rounded-md py-0 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="&#xF002; Search..."
                        type="text"
                        name="search"
                    />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
// //localStorage.getItem("token") ? (
//    <span></span>
//) : ()
