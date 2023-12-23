import React, { useEffect, useState } from "react";
import SubTitle from "../Uitily/SubTitle";
import ProductCard from "../../Products/productsCard";
import apiClient from "../../../apiClient";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../Cart/ShoppingCart";

const HomeCategory = ({ gender }) => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get(`/products/${gender}`, {
                headers: { token: localStorage.getItem("token") },
            }) // get the token from localstorage to authorize our requests
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="md:container mt-5">
                <SubTitle title="Discover our range" btnTitle="Show more" />
                <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start">
                    {product.map((product) => {
                        return (
                            <div
                                key={product._id}
                                onClick={() => {
                                    navigate(`/products/${product._id}`, {
                                        state: { product },
                                    });
                                }}
                            >
                                <ProductCard
                                    id={product._id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    description={product.description}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <ShoppingCart />*/}
        </>
    );
};

export default HomeCategory;
0;
