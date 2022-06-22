import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
type Props = {
  slides:String[]
}

export default function SwiperCustom({slides}: Props) {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {slides.map((slide:String, index) => (
      <SwiperSlide key={index}>
        <Image
          src={slide.toString()}
          height={400}
          width={1280}
          alt={"san pham"}
        ></Image>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}
