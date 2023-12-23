import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./productsCard";
import ShoppingCart from "../Components/Cart/ShoppingCart";
import apiClient from "../../apiClient";
import { useGetAllProductsQuery } from "../Features/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch } from "../Features/productsSlice";
import { accordion } from "@material-tailwind/react";

const Products = () => {
    //const [product, setProduct] = useState([]);
    //const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const { items: products, status } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetAllProductsQuery();

    useEffect(() => {
        //apiClient
        //    .get("/products", {
        //        headers: { token: localStorage.getItem("token") },
        //    }) // get the token from localstorage to authorize our requests
        //    .then((res) => {
        //        setProduct(res.data);
        //    })
        //    .catch((error) => console.log(error));
        dispatch(productsFetch(productsFetch))



    }, [dispatch]);

    const AddToCart = (product) => {
        setCart([...Card, product]);
    };

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occured..</p>
            ) : (
                <div className="flex gap-2">
                    {data.map((product) => {
                        return (
                            <>
                                <div
                                    key={product._id}
                                    style={{ width: "33%" }}
                                    onClick={() => {
                                        navigate(`/products/${product._id}`, {
                                            state: { product },
                                        });
                                    }}
                                >
                                    <ProductCard
                                        id={product._id}
                                        name={product.name}
                                        image={product.image}
                                        price={product.price}
                                        description={product.description}
                                        handelOnAddToCart={() =>
                                            AddToCart(product)
                                        }
                                    />
                                </div>
                                <ShoppingCart />
                            </>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Products;
