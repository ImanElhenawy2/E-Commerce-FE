import { React, useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import apiClient from "../../../apiClient";
import { Link, useNavigate } from "react-router-dom";

const Brands = () => {
    const [brand, setBrand] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get("/brands")
            .then((res) => {
                setBrand(res.data);
                console.log(brand);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                {brand.map((brand) => {
                    return (
                        <div
                            key={brand._id}
                            style={{ width: "33%" }}
                            onClick={() =>
                                navigate("/brands/:id", { state: { brand } })
                            }
                        >
                            <BrandCard
                                name={brand.name}
                                image={brand.image}
                                description={brand.description}
                            />
                        </div>
                    );
                })}

            </div>
        </>
    );
};

export default Brands;