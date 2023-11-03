import React from "react";
import Style from "./CartItem.module.css";
import Counter from "../../Elements/Counter";

function CartItem(props){
    let {product}=props;
    return(<>
    <span className={Style.title}>{product.name}</span>
    <span className={Style.portion}>{product.portion}</span>
    <Counter value={product.count} min={1} max={99}/>
    <span className={Style.prise}>{product.prise}</span>
    <button className={Style.removebtn}></button>
    </>)
}
export default CartItem;
