import React from 'react';
import Style from './Prices.module.css';

function Prices(props) {
    let { prices } = props;
    return (
        <>
            <span className={`${Style.prices} ${props.className}`}>
                <span className={`${Style.price} ${props.priceClass}`}>{prices[0]}</span>
                {prices.length > 1 && (
                    <>
                    {' - '}
                    <span className={`${Style.price} ${props.priceClass}`}>{prices[prices.length - 1]}</span>
                    </>
                )}
            </span>
        </>
    );
}

export default Prices;