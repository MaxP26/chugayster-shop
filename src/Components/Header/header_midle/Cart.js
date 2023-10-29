import React from "react";
import CartIcon from "../../Elements/Imgs/Cart.png"
import Img from "../../Elements/Img";
import Style from "./Cart.module.css"
function Cart(props){
    return(<>
    <Img className={Style.cartIcon} src={CartIcon}/>
    </>);
}
export default Cart;