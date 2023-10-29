import React from "react";

function Img(props){
    let{
        alt,
        src,
        className
    }=props;
    return(
        <img alt={alt} src={src} className={className}/>
    )
}
export default Img;