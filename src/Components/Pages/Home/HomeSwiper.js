import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay,Navigation,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Style from './HomeSwiper.module.css'
import Slide from "./Slide";
function HomeSwiper(props){
    let {products}=props;
    return(
    <Swiper
        className={Style.swiper}
        modules={[Autoplay,Navigation,Pagination]}
        spaceBetween={0}
        slidesPerView={2}
        speed={2200}
        loop={true}
        pagination={{
            dynamicBullets:true,
        }}
        // cssMode={true}
        navigation={true}
        autoplay={{
            delay:4000,
            disableOnInteraction:false
        }}
    >
        {products.map(item=><SwiperSlide key={item.id}><Slide product={item}/></SwiperSlide>)}   
    </Swiper>);
}
export default HomeSwiper;