import React from "react";
import Layout from "../Layout/Layout";
import productsList from "../Data/Products";
import ProductSwiper from "./ProductPage/ProductSwiper";
import { useParams } from "react-router-dom";
import Style from './ProductPage.module.css'
import Counter from "../Elements/Counter";
import Portions from "./ProductPage/Portions";
import Prices from "../Elements/Prices";
import Cart from "./Cart";
function ProductPage(props){
    const addToCart=(product)=>{
        Cart.add(product);
    };

    const [count, setCount] = React.useState(1);
    const [portion, setPortion] = React.useState(0);
    let params=useParams();
    let product=productsList[params.id];
    return(<Layout>
        <div className={Style.prodpage}>
            <ProductSwiper className={Style.prodswiper} imgList={product.imgList}/>
            <div className={Style.prodinfo}>
                <h4 className={Style.title}>{product.name}</h4>
                <Prices className={Style.prices} prices={product.portions.map(item=>item.price)}/>
                <div className={Style.cartform}>
                    <Portions className={Style.portions} portions={product.portions} onChange={setPortion}/>
                    <Counter 
                        className={Style.counter}  
                        onChange={setCount}
                        min={1}
                        max={99}
                        value={1}
                    />
                    <button className={Style.tocart} onClick={
                        ()=>{
                            addToCart({
                                id:crypto.randomUUID(),
                                name:product.name,
                                portion:product.portions[portion].weight,
                                price:product.portions[portion].price,
                                info:product,
                                count:count
                            })
                        }
                    }>До кошика</button>
                </div>
                <span className={Style.desch}>Опис:</span>
                <p className={Style.desc}>{product.description}</p>
            </div>
        </div>        
    </Layout>)
}
export default ProductPage;