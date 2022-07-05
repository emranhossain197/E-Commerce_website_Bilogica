import { useContext } from "react";
import { BilogicContext } from "../context/BilogicContext";
import '../assets/css/Cart.css'
import { IoMdClose } from 'react-icons/io'
import { useSelector } from "react-redux";
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { GrFormClose } from 'react-icons/gr'
import { Link } from "react-router-dom";

const Cart = () => {

    const CartDispatch = useDispatch()
    const { CartShow, setCartShow, TotalPrice } = useContext(BilogicContext)
    const cart = useSelector(state => state.cart)

    return (
        <div className={CartShow ? "Cart_Contant" : "Cart_contant-none"}>
            <div className="cart-container">
                <div className="cart-icon">
                    <h3>Cart</h3>
                    <IoMdClose onClick={() => setCartShow(false)} />
                </div>
                <div className="cart-item-contant">
                    {cart.map(item => (
                        <div className="cart-item">
                            <div className="cart-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <h2>{item.name}</h2>
                                <p><span> {item.quantity} </span><GrFormClose /> {item.price}</p>
                            </div>
                            <div className="cart-delete-icon">
                                <RiDeleteBin5Line onClick={() => CartDispatch({ type: "DELETE_PRODUCT", payload: item })} />

                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-footer">
                    <h4>Subtotal: $ {TotalPrice}</h4>
                    <button className="view-cart">View Cart</button>
                    <Link to='/checkout'>
                        <button className="check-out">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Cart;
