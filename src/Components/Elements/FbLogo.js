import React from "react";
import FbIcon from "./Imgs/facebook-logo.svg";
import SocLogo from "./SocLogo";
import Style from './FbLogo.module.css'
function FbLogo(props)
{
    let {
        className
    }=props;
    return(
    <SocLogo className={Style.fbicon+' '+className} href="https://facebook.com/" icon={FbIcon}/>
    )
}
export default FbLogo;