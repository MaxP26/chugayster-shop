import React from 'react'
import Style from './SocLogo.module.css'
import Img from './Img';
function SocLogo(props){
    let {
        href,
        icon,
        className
    } = props;
    return(
        <a className={Style.icon} href={href}><Img className={Style.iconimg+' '+className} src={icon}/></a>
    );
}

export default SocLogo;