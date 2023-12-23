import React, { useEffect, useState } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavbarList from "./NavbarList";

const NavbarLogin = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="sticky top-0 z-10 max-h-18 m-0 from-gray-100 to-indigo-100 max-w-screen-3xl px-2 py-2">
            <div className="flex items-center justify-between mx-10 text-blue-gray-900">
                <Link
                    to="/"
                    className="px-2 py-2 mx-4 text-xl font-extrabold font-serif text-indigo-700"
                >
                    <span className="ml-8 text-4xl">&#x26A1;</span>
                    KICKS-CARTEL
                </Link>
                <div className="hidden lg:block">
                    <NavbarList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <Link to="/contact-us">
                    <li className="text-lg list-none p-2 ml-6 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                        Contact Us
                    </li>
                </Link>
                <Link to="/login">
                    <li className="text-lg list-none p-2 ml-6 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                        Login
                    </li>
                </Link>
                <Link to="/cart">
                    <li className="text-lg list-none p-2 ml-6 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                        Cart
                    </li>
                </Link>
            </Collapse>
        </Navbar>
    );
};

export default NavbarLogin;
