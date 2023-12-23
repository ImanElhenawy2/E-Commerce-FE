import React, { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Uitily/Footer";
import NavbarLogin from "./Components/Uitily/NavbarLogin";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/loginPage";
import Register from "./Pages/Auth/RegisterPage";
import ContactUsPage from "./Pages/Contact-US/ContactUsPage";
import NavbarTab from "./Components/Uitily/NavbarTab";
import ShoppingCart from "./Components/Cart/ShoppingCart";
import ProductsDetails from "./Products/ProductsDetails";
import Women from "./Pages/Women/Women";
import Men from "./Pages/Men/Men";
import Kids from "./Pages/Kids/Kids";
import Brands from "./Components/Brands/Brands";
import { ToastContainer } from "react-toastify";
import SearchPage from "./Components/Uitily/SearchPage";

function App() {
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col items-between h-screen">
                <NavbarLogin />
                <br />
                <NavbarTab />
                <div className="mt-3 md:container md:mx-auto flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contact-us" element={<ContactUsPage />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route
                            path="/products/:id"
                            element={<ProductsDetails />}
                        />
                        <Route path="/women" element={<Women />} />
                        <Route path="/men" element={<Men />} />
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/brands/:id" element={<Brands />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
