import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className=" mt-5 bg-white rounded border-b border-t md:px-6 md:py-8 dark:bg-gray-800">
                <div className="container mt-0 md:container md:mx-auto sm:flex sm:items-center sm:justify-between">
                    <Link
                        to="/"
                        className="pt-2 mt-3 text-xl font-extrabold font-serif text-indigo-700"
                    >
                        <span className="text-2xl ">&#x26A1;</span>
                        KICKS-CARTEL
                    </Link>
                    <ul className="flex flex-wrap items-center m-4 sm:mb-0">
                        <Link to="/about">
                            <li className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                                About
                            </li>
                        </Link>
                        <Link to="/privacy-policy">
                            <li className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                                Privacy Policy
                            </li>
                        </Link>
                        <Link to="/licensing">
                            <li className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
                                Licensing
                            </li>
                        </Link>
                        <Link to="/contact-us">
                            <li className="text-sm text-gray-500 hover:underline dark:text-gray-400">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="p-4 text-center text-neutral-700 dark:text-neutral-200 block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022{" "}
                    <Link to="/" className="text-neutral-800 dark:text-neutral-400 hover:underline">
                        Kicks-Cartel
                    </Link>
                    . All Rights Reserved.
                </span>
            </footer>
        </>
    );
};

export default Footer;
