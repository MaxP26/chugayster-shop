import React, { useState, useEffect } from 'react';
import Style from  './Portions.module.css'
function Portions(props) {
    let {portions}=props;
    const [portion, setPortion] = useState(0);
  useEffect(() => {
    if(props.onChange){
        props.onChange(portion);
    }
  }, [portion]);
  return (<div className={`${Style.container} ${props.className}`}>
  <span>Вага:</span>
    <div className={Style.btns}>
    {portions.map((item,key) => 
      <button 
      key={item.weight}
      onClick={()=>{
          setPortion(key)
        }} 
        className={`${Style.btn} ${portion==key? Style.btnSelected:''}`}
        >
          {item.weight}
      </button>
  )}
  </div>
  <br />
  <span className={Style.price}>{portions[portion].price}</span>
</div>
  );
}

export default Portions;



