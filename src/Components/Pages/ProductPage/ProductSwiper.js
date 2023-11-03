import React,{useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { Thumbs,Navigation,FreeMode } from 'swiper/modules'
import Img from '../../Elements/Img'
import './ProductSwiper.css'
function ProductSwiper(props){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(<div className={'productswiper '+props.className}>
        <Swiper className='swiper-1'
        loop={true}
        navigation={true}
        modules={[Thumbs,Navigation]}
        thumbs={thumbsSwiper?{swiper:thumbsSwiper}:undefined}>
            {props.imgList.map(item=><SwiperSlide key={crypto.randomUUID()}><Img src={item} className='slide-img-1'/></SwiperSlide>)}
        </Swiper>
        <Swiper
        className='swiper-2'
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slidesPerView={props.imgList.length>=4?4:props.imgList.length}
        modules={[Thumbs,Navigation,FreeMode]}
        >           
         {props.imgList.map(item=><SwiperSlide key={crypto.randomUUID()}><Img src={item} className='slide-img-2'/></SwiperSlide>)}
        </Swiper>
    </div>)
}

export default ProductSwiper;