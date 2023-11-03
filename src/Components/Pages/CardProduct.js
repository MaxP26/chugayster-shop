import { Link } from "react-router-dom";
import Img from "../Elements/Img";
import Style from './CardProduct.module.css'
function CardProduct(props){
    let {product}=props;
    return(<Link key={product.id} className={Style.cardProduct} to={'/Product/'+product.id}>
        <Img src={product.img} className={Style.productImg}/>
        <h6>{product.name}</h6>
        {product.portions.length==1?
        <span className={Style.price}>{product.portions[0].price}₴</span>
        :
        <span className={Style.price}>{product.portions[0].price}₴-{product.portions[product.portions.length-1].price}₴</span>
        }
    </Link>);
}
export default CardProduct;