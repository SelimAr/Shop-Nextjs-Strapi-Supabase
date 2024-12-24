"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { ProductsType } from "@/type";

export default function Carousel({
  sliderData,
}: {
  sliderData: ProductsType[];
}) {
  const [isSliderData, setIsSliderData] = useState<ProductsType[]>(sliderData);
  return (
    <>
      <Swiper
        modules={[Scrollbar, Autoplay, EffectFade]}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        effect="coverflow"
        className="rounded-lg max-w-96"
      >
        {isSliderData.length > 0 &&
          isSliderData?.map((data) => (
            <SwiperSlide key={data.uid} className="cursor-pointer">
              <Image
                src={`http://localhost:1337${data.media_single.url}`}
                alt={data.title}
                width={525}
                height={525}
                className=" rounded-lg object-cover"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
