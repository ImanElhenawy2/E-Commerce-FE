import { Navbar, Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "../../Products/products";

const NavbarTab = () => {
    const [searchString, setSearchString] = useState("");
    //const [filteredItem, setFilteredItem] = useState(Products);
    //const [productList, setProductList] = useState(Products);
    const navigate = useNavigate();
    
   // const handleChangeAdd = (e) => {
   //     e.preventDefault();
   //     setProductList(prev =>[
   //         ...prev, {name, price, image, description},
   //     ])
   //     setFilteredItem([]);
   //     };
   // 
   // useEffect(() => {
   //     setFilteredItem(Products);
   // }, [Products]);
//
   // useEffect(() => {
   //     setFilteredItem([...productList]);
   // }, [productList]);
//


    return (
        <>
            <Navbar className="tab shadow-none border-b-gray-300 mx-auto max-h-18 max-w-screen-2xl px-2 py-2">
                <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
                    <ul className="flex justify-start text-indigo-900 my-2">
                        <Link to="/women">
                            <li className="text-xl p-2 ml-3 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Women
                            </li>
                        </Link>
                        <Link to="/men">
                            <li className="text-xl p-2 ml-6 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Men
                            </li>
                        </Link>
                        <Link to="/kids" state={{}}>
                            <li className="text-xl p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Kids
                            </li>
                        </Link>

                        <Link to="/brands">
                            <li className="text-xl p-2 ml-9 hover:border-b-2 border-indigo-600 cursor-pointer font-serif">
                                Brands
                            </li>
                        </Link>
                    </ul>

                    <div className="relative flex w-full gap-2 md:w-max">
                        <input
                            className="w-[24rem] text-black h-10 bg-gray-100 border-2 border-solid mr-4 my-2 rounded-md py-0 pl-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            color="black"
                            type="search"
                            value={searchString}
                            onChange={(e) => {
                                e.preventDefault();
                                setSearchString(
                                    e.target.value.split(" ").join("+")
                                );
                            }}
                            placeholder="Type here..."
                        />
                        <Button
                            size="sm"
                            color="orange"
                            className="!absolute right-5 top-3  rounded"
                            onClick={() => {
                                navigate(`/search/${searchString}`);
                                setSearchString("");                               
                            }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </Navbar>
        </>
    );
};
export default NavbarTab;
