import React, { useEffect, useState } from "react";
import apiClient from "../../../apiClient";
import ProductCard from "../../Products/productsCard";
import { useNavigate } from "react-router-dom";

const Women = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        apiClient
            .get("/products/womens", {
                headers: { token: localStorage.getItem("token") },
            }) // get the token from localstorage to authorize our requests
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
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
    );
};

export default Women;