import React from "react";
import CartIcon from "../../Elements/Imgs/Cart.png"
import Img from "../../Elements/Img";
import Style from "./Cart.module.css"
import Cart from "../../Pages/Cart";
function HeaderCart(props){
    const [openCart, setOpenCart] = React.useState(false);
    return(<>
    <button onClick={()=>{setOpenCart(true)}}>
    <Img className={Style.cartIcon} src={CartIcon}/>
    </button>
    {openCart && <Cart onExit={()=>{setOpenCart(false)}}/>}
    </>);
}
export default HeaderCart;