import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import apiClient from "../../../apiClient";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    increaseCart,
    removeFromCart,
} from "../../Features/cartSlice";
import { productsFetch } from "../../Features/productsSlice";

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
      };
      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
      };
      const handleClearCart = () => {
        dispatch(clearCart());
      };
    const [product, setProduct] = useState([]);
    // useEffect(() => {
    //     apiClient
    //         .get("/products", {
    //             headers: { token: localStorage.getItem("token") },
    //         }) // get the token from localstorage to authorize our requests
    //         .then((res) => {
    //             setProduct(res.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);
    // useEffect(() => {

    //     dispatch(productsFetch(productsFetch))
    // }, []);

  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  
    useEffect(() => {
        setItems(JSON.parse(localStorage.getItem("cartItems")));
    }, []);

    return (
        <div className="container mx-auto ">
            <h2 className="text-center font-bold text-3xl m-3 text-orange-400 ">
                Shopping cart
            </h2>
            {cart.cartItems.length === 0 ? (
                <div>
                    <p>Your cart is currently empty</p>
                    <div>
                        <Link to="/">
                            <Icon icon="ph:arrow-right-light" />
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="border-t border-grey-300 p-3 flex justify-between text-xl text-indigo-600">
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </div>
                    <div key={product.id}>
                        {items.length !== 0 &&
                            items.map((cartItem) => (
                                <div
                                    key={cartItem.id}
                                    className="border-b border-t border-grey-400 p-3 flex justify-between"
                                >
                                    <div className="flex">
                                        <div>
                                            <img
                                                src={cartItem.image}
                                                alt={cartItem.name}
                                            />
                                        </div>
                                        <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.description}</p>
                                            <button
                                                onClick={() => handleRemoveFromCart(cartItem)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div>${cartItem.price}</div>
                                    <div className="flex items-start justify-between w-32 rounded border h-10  ">
                                        <button
                                            onClick={() => handleDecreaseCart(cartItem)}
                                            className="ml-2 mt-2 w-4"
                                        >
                                            -
                                        </button>

                                        <div className="mt-2 w-4">{cartItem.cartQuantity}</div>

                                        <button
                                            onClick={() => handleAddToCart(cartItem)}
                                            className="mr-2 mt-2 w-4"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div>
                                        $
                                        {cartItem.price * cartItem.cartQuantity}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div>
                        <button onClick={() => handleClearCart()}>
                            Clear Cart
                        </button>
                        <div>
                            <div>
                                <span>Subtotal</span>
                                <span>${cart.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button>Check out</button>
                            <div>
                                <Link to="/">
                                    <Icon icon="ph:arrow-right-light" />
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;

//{products.map((product) => (
//   <div key={product.id}>
//   <img src={product.image} alt={product.name} />
//   <div>
//       <h3>{product.name}</h3>
//       <span>{product.price * product.count}$</span>
//   </div>
//   <select
//       value={product.count}
//       onChange={(event) => {
//           onQuantityChange(
//               product.id,
//               event.target.value
//           );
//       }}
//   >
//       {[...Array(10).keys()].map((number) => {
//           const num = number + 1;
//           return (
//               <option value={num} key={num}>
//                   {num}
//               </option>
//           );
//       })}
//   </select>
//   <button onClick={() => onProductRemove(product)}>
//       <RiDeleteBin6Line size={20} />
//   </button>
///div>
//)}
//products.length > 0 && <button>Proceed to checkout</button>}
