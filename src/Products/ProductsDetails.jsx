import React, { useEffect, useState } from "react";
import {
    Select,
    Option,
    Button,
    IconButton,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import apiClient from "../../apiClient";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import { useParams } from "react-router-dom";
import { productsFetch } from "../Features/productsSlice";

const ProductsDetails = ({ image, name, price}) => {
    const [open, setOpen] = useState(1);
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        apiClient
            .get(`/products/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        dispatch(productsFetch(productsFetch))
    }, []);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="p-3 m-3 flex" style={{ width: "100%" }}>
                <div style={{ width: "20%", margin: "1rem" }}>
                    <img
                        className="h-40 w-full m-3 object-cover object-center"
                        src={product.image}
                        alt=" image"
                    />
                    <img
                        className="h-40 w-full m-3 object-cover object-center"
                        src={product.image}
                        alt="image"
                    />
                    <img
                        className="h-40 w-full m-3 object-cover object-center"
                        src={product.image}
                        alt="image"
                    />
                    <img
                        className="h-40 w-full m-3 object-cover object-center"
                        src={product.image}
                        alt=" image"
                    />
                </div>
                <div style={{ width: "55%", margin: "1rem" }}>
                    <img
                        className="w-full object-cover m-3"
                        src={product.image}
                        alt="image"
                    />
                </div>
                <div style={{ width: "60%", padding: "2rem" }}>
                    <h1
                        style={{
                            color: "#00aa7a",
                            fontSize: "1.6rem",
                            fontWeight: "700",
                        }}
                    >
                        ${product.price}{" "}
                        <span style={{ color: "#00aa7a", fontSize: "14px" }}>
                            incl.VAT
                        </span>
                    </h1>
                    <h3
                        style={{
                            fontSize: "1.25rem",
                            marginBottom: "1rem",
                            letterSpacing: ".05rem",
                            fontWeight: "300",
                        }}
                    >
                        {product.name}
                    </h3>
                    <p
                        style={{
                            fontSize: ".75rem",
                            fontWeight: "700",
                            marginBottom: "1rem",
                            height: "1rem",
                        }}
                    >
                        {product.description}
                    </p>
                    <hr />
                    <p
                        style={{
                            fontSize: "16px",
                            padding: "1rem 1rem 1rem 0",
                            marginBottom: "1rem",
                            borderBottom: "0.0625rem solid #eceeef",
                        }}
                    >
                        Color:{" "}
                        <span style={{ color: "gray" }}>{product.color}</span>
                    </p>
                    <a
                        href="#"
                        style={{
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            marginTop: "2rem",
                            marginBottom: "2rem",
                            cursor: "pointer",
                        }}
                    >
                        View size chart
                    </a>
                    <div
                        className="w-full"
                        style={{
                            fontSize: "18px",
                            marginTop: "1rem",
                            marginBottom: "0.6rem",
                        }}
                    >
                        <Select label="Select Version">
                            <Option>36/37</Option>
                            <Option>38/39</Option>
                            <Option>40/41</Option>
                        </Select>
                    </div>
                    <div className="flex items-center w-full">
                        <Button
                            className="items-center w-full "
                            onClick={() =>
                                dispatch(addToCart({ image: product.image, name: product.name, price: product.price }))
                            }
                            style={{
                                cursor: "pointer",
                                backgroundColor: "#00aa7a",
                                color: "#fff",
                            }}
                        >
                            Add to Cart
                        </Button>
                        <IconButton
                            className="rounded-full mt-3 ml-4 p-3"
                            color="white"
                        >
                            <Icon
                                icon="ph:heart-light"
                                color="#00aa7a"
                                width="34"
                                height="34"
                            />
                        </IconButton>
                    </div>
                    <div
                        style={{
                            borderBottom: "0.0625rem solid #eceeef",
                            paddingBottom: "1.5rem",
                            fontSize: ".9rem",
                            lineHeight: "1.8",
                            wordSpacing: "1px",
                        }}
                    >
                        <p className="flex m-3 w-full">
                            <Icon
                                icon="material-symbols:check"
                                color="#00aa7a"
                                width="20"
                                height="20"
                            />
                            Free click + collect to over 120 stores. Plus, free
                            instore returns.
                        </p>
                        <p className="flex m-3 w-full">
                            <Icon
                                icon="material-symbols:check"
                                color="#00aa7a"
                                width="20"
                                height="20"
                            />
                            Free home delivery for orders over £39.99. Delivered
                            in 3-5 days by EvRi.
                        </p>
                        <p className="flex m-3 w-full">
                            <Icon
                                icon="material-symbols:check"
                                color="#00aa7a"
                                width="20"
                                height="20"
                            />
                            Next Day delivery on orders made before 4pm
                            Monday-Friday with EvRi
                        </p>
                    </div>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                            <div className="w-full flex justify-between items-center">
                                <span>About this product</span>
                                <Icon
                                    icon="mdi:chevron-down"
                                    color="#00aa7a"
                                    width="40"
                                    height="40"
                                />
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            Colour: Black Item number: 11109015 Heel height
                            (cm):4.5cm Fastening:None Lining:no
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <div className="w-full flex justify-between items-center">
                                <span>Material & care information</span>
                                <Icon
                                    icon="mdi:chevron-down"
                                    color="#00aa7a"
                                    width="40"
                                    height="40"
                                />
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            Outer:Synthetic Inner:Synthetic Inner:Synthetic,
                            Nylex Innersole:Synthetic Outsole:Synthetic
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            {" "}
                            <div className="w-full flex justify-between items-center">
                                <span>Shipping & Returns</span>
                                <Icon
                                    icon="mdi:chevron-down"
                                    color="#00aa7a"
                                    width="40"
                                    height="40"
                                />
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            *Free click & collect to over 120 stores. *Free home
                            delivery for orders over £39.99. Delivered in 3-5
                            days *by EvRi. Next Day delivery on orders made
                            before 4pm *Monday-Friday with EvRi Express for
                            £4.99. Standard *delivery £2.99. Free instore and
                            postal returns.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;
