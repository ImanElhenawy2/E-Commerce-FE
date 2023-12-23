import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
    CardFooter,
    Button,
} from "@material-tailwind/react";

const ProductCard = ({image, name, price, description}) => {
    return (
        <>
            <section
                style={{
                    gridTemplateColumns: "auto",
                    gap: "10px",
                    width: "100%",
                }}
            >
                <img
                    className="h-100 w-full rounded-lg object-cover"
                    src="https://www.deichmann.com/en-gb/medias/09-TheBootStop-H6-desktop-main-banner-split-1280x450-Ladies.jpg?context=bWFzdGVyfGltYWdlc3wxMTkzMTV8aW1hZ2UvanBlZ3xpbWFnZXMvaDk1L2g3Ni84OTQ2NjMzNDQxMzEwLmpwZ3xmYTlhYmUxNzI3MmQ5YTA1YzZhNThlYWM2ZGE4MThkNWNkODczNjY3MDBlOTYyMGJhY2IzMDcxNjU1N2Q1YTkx"
                    alt="product-image"
                    style={{ gridColumns: "1/7" }}
                />
                <div className="m-0 overflow-hidden rounded-none bg-transparent bg-[url('https://www.deichmann.com/en-gb/medias/09-WomensAnkleBoots-H6-desktop-main-banner-split-1280x450.jpg?context=bWFzdGVyfGltYWdlc3w2MjcwMDV8aW1hZ2UvanBlZ3xpbWFnZXMvaDlmL2g0Ny84OTQ1NjkwODA0MjU0LmpwZ3wyMzA3ODkwMzU4OTcwNjA3MzVlMDQzYjljMTYyNTk0MmUyOTAwOTkzY2FiMDFmNjAwNjIyMjE0MTVlY2QxOWVk')] bg-cover  bg-center text-gray-700 shadow-none"></div>

                <div>
                    <Card className="w-96">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="h-96"
                        >
                            <img
                                src={image}
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                             <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            <IconButton
                                size="sm"
                                color="white"
                                variant="text"
                                className="!absolute top-4 right-4 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                            </IconButton>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    {price}
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                               {description}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default ProductCard;
