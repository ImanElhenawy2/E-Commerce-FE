import React from "react";

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">{item.name}</div>
                        <div className="col-2">
                            <button
                                onClick={() => onRemove(item)}
                                className="remove"
                            >
                                -
                            </button>{" "}
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>

                        <div className="col-2 text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">Items Price</div>
                            <div className="col-1 text-right">
                                ${itemsPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Tax Price</div>
                            <div className="col-1 text-right">
                                ${taxPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">Shipping Price</div>
                            <div className="col-1 text-right">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button
                                onClick={() => alert("Implement Checkout!")}
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}

// <div>
//<h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
//{/* <div>
//        <p>Your cart is currently empty</p>
//        <Link to="/">
//            <Icon icon="ph:arrow-right-light" />
//            <span>Start Shopping</span>
//        </Link><li key={item.id}>{item.name}</li>
//    </div>*/}
//{products.length === 0 ? (
//    <div>
//        <p>Your cart is currently empty</p>
//        <Link to="/">
//            <Icon icon="ph:arrow-right-light" />
//            <span>Start Shopping</span>
//        </Link>
//    </div>
//) : (
//    <>
//        {products.map((product) => {
//            <div className="container" key={product.id}>
//                <ul
//                    role="list"
//                    className="-my-6 divide-y divide-gray-200"
//                >
//                    <li>
//                        <img src={product.image} alt={product.name} />
//                        <h3>{product.name}</h3>
//                        <span>{product.price * product.count}</span>
//                    </li>
//                    <select value={product.count} onChange={(e) => {onQuantityChange(product.id, e.target.value);
//                    }}>
//                        {}
//                    </select>
//                    <button>remove</button>
//                </ul>
//            </div>;
//        })}
//    </>
//)}
//</div>
//const getItemQuantity = (id) => {
//    return cartItems.find((item) => item.id === id)?.quantity || 0;
//};
//const increasCartQuantity = () => {};
// const cartItems = useSelector((state) => state.cart.cart);
// useEffect(() => {
//     console.log(cartItems);
// }, []);
//visibilty,
//products,
//onProductRemove,
//onClose,
//onQuantityChange,
