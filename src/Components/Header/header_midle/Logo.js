import React from "react";
import Img from "../../Elements/Img";
import Style from "./Logo.module.css"
import ChLogo from "../../Elements/ChLogo";
function Logo(props){
    return(<div className={Style.logo}>
    <ChLogo className={Style.logoImg}/>
    <h1 className={Style.title}>Чугайстер</h1>
    </div>);
}
export default Logo;