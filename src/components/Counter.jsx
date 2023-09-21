import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{ backdropFilter: blur("10px") }}
      >
        <SwiperSlide>
          <img
            src="https://images.indianexpress.com/2023/08/Vidit-Gujrathi.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.chess24.com/ScatJTw4TzSIVgDvDxEz8Q/original/anish-giri-lo.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/183/360/933/chess-magnus-carlsen-wallpaper-preview.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/news/1257645.bb6e0069.5000x5000o.adea648886cc.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.tnn.in/thumb/msid-102942862,thumbsize-390600,width-800,height-450,resizemode-75/102942862.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cbin.b-cdn.net/img/SA/Sagar%20chessbase_G2BMV_720x480.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.chesscomfiles.com/uploads/v1/blog/430212.ca68c752.5000x5000o.9c4132776580.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
