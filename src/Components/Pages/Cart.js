import React, { Component } from "react";
import Style from "./Cart.module.css";
import Cookies from "js-cookie";
import CartItem from "./Cart/CartItem";
class Cart extends Component {
    constructor(props){
        super(props);
        const cookie=Cookies.get('CartItems');
        this.state={items:[]}
        if(cookie){
            this.state={items:JSON.parse(cookie)};
        }
        this.remove = this.remove.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.items !== this.state.items) {
            Cookies.set('CartItems',JSON.stringify(this.state.items));
        }
        const cookie=Cookies.get('CartItems');
        this.state={items:JSON.parse(cookie)};
    }
    static add(product){
        const cookie=Cookies.get('CartItems');
        let items;
        if(cookie){
            items=[...JSON.parse(cookie),product];
        }
        else{
            items=[product];
        }
        Cookies.set('CartItems',JSON.stringify(items));
        console.log(JSON.stringify(items));
        console.log(items);
    }
    remove(id){
        const newitems=this.state.items.filter(item=>item.id!==id)
    }
    render() {
        return (
            <div className={Style.back} onClick={this.props.onExit}>
                <div className={`${Style.cart}`}>
                    <div className={Style.exit} onClick={this.props.onExit}></div>
                    <ul className={Style.products}>
                    {this.state.items.map(item => <li key={item.id}><CartItem product={item} /></li>)}
                    </ul>
                    <div className={Style.btns}>
                    <button className={Style.btnclear}>Очистити кошик</button>
                    <button className={Style.btnorder}>Зробити замовлення</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;