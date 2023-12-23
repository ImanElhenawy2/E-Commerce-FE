import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productsCard";
import apiClient from "../../apiClient";

const Products = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get("/products")
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div>
                {product.map((product) => {
                        return (
                            <div
                                key={product._id}
                                style={{ width: "33%" }}
                                onClick={() => {
                                    navigate("/kids", {
                                        state: { product },
                                    });
                            }}
                        >
                            <ProductCard
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                description={product.description}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Products;
