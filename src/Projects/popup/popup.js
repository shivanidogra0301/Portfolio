import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination} from 'swiper';
import "swiper/swiper-bundle.css"
import "./popup.css"

const Popup = (props) => {

    let images = props.slides ? props.slides.map((img,index)=>(
        <SwiperSlide  key={index}>
            <img  src={img} alt=""/>
        </SwiperSlide>
    )):null
    SwiperCore.use([Navigation , Pagination])
    return (
        <>
        <div onClick={props.close} className={"popup" +" "+(props.show ?"popup_show":null)}></div>
        <div className="popup__content">

        {props.slides ?<Swiper id = "main"
        slidesPerView={1}
        effect="fade"
        pagination= {{clickable:true}}
        navigation
        >
            {images}
        </Swiper>:null}
    </div>
    </>
    )
}

export default Popup
