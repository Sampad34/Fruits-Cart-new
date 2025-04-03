import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const Header=()=>{

    const {cart}=useContext(CartContext)
    return (
        <header>
            <h1 className="heading">Shopping Cart</h1>
            <p className="cart-item">Cart Items: <span>{cart.length}</span></p>
        </header>
    )
}