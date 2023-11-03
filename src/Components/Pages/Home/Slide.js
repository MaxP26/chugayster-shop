import React from "react";
import Img from "../../Elements/Img";
import Style from './Slide.module.css';
import { Link } from "react-router-dom";
function Slide(props){
    let {product}=props;
    return(
        <Link to={'/Product/'+product.id} style={{textDecoration:'none'}}>
            <Img className={Style.slideImg} src={product.img}/>
            <h6 className={Style.title}>{product.name}</h6>
            <span className={Style.description}>{product.description}</span>
        </Link>
    )
}
export default Slide;