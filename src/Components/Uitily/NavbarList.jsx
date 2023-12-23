import { Tooltip, Badge } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NavbarList = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Tooltip
                content="Contact"
                placement="bottom-start"
                className="bg-indigo-200"
            >
                <div>
                    <Link to="/contact-us">
                        <Icon
                            icon="clarity:map-marker-line"
                            width="30"
                            height="30"
                            color="orange"
                        />
                    </Link>
                </div>
            </Tooltip>

            <Tooltip
                content="Log in"
                placement="bottom-start"
                className="bg-indigo-200"
            >
                <div>
                    <Link to="/login">
                        <Icon
                            icon="octicon:person-24"
                            width="30"
                            height="30"
                            color="orange"
                        />
                    </Link>
                </div>
            </Tooltip>
            <Tooltip
                content={cartTotalQuantity}
                placement="bottom-start"
                className="bg-indigo-200"
            >
                <div className="mr-16">
                    <Link to="/cart">
                        <Badge
                            content={cartTotalQuantity}
                            color="green"
                            withBorder
                        >
                            <Icon
                                icon="ph:shopping-cart-light"
                                color="orange"
                                width="30"
                                height="30"
                            />
                        </Badge>
                    </Link>
                </div>
            </Tooltip>
        </ul>
    );
};

export default NavbarList;
