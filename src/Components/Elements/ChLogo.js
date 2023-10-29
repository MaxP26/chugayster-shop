import React from "react";
import Img from "./Img";
import Chugayster from './Imgs/ChugaysterLogo.png'
function ChLogo(props){
    let{
        alt,
        className
    }=props;
    return(<Img src={Chugayster} alt={alt} className={className}/>);
}

export default ChLogo;