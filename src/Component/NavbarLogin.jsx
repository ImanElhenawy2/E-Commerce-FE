import React, { useEffect, useState } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
                    <Icon icon="ph:heart" width="30" height="30" color="red" />
                </Link>
            </div>
            <div className="mr-16">
                <Link to="/cart">
                    <Icon
                        icon="teenyicons:bag-outline"
                        width="30"
                        height="30"
                        color="indigo"
                        
                    />
                </Link>
            </div>
        </ul>
    );
}

export function NavbarLogin() {
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
        <Navbar
            variant="gradient"
            color="indigo-gray"
            className="max-h-18 m-0 from-gray-100 to-indigo-100 max-w-screen-3xl px-16 py-3"
        >
            <div className="flex items-center justify-between mx-12 text-blue-gray-900">
                <Link
                    to="/"
                    className="px-6 py-2 mx-10 text-2xl font-extrabold font-serif text-indigo-700"
                >
                    <span className="ml-8 text-4xl">&#x26A1;</span>
                    KICKS-CARTEL
                </Link>
                <div className="hidden lg:block">
                    <NavList />
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
                <Link to="/favorit">
                    <li className="text-lg list-none p-2 ml-6 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                        Favorit
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
}
