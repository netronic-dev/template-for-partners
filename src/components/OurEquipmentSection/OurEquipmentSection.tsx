'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import { ourEquipmentListOne } from "@/constants/globalConstants";

const OurEquipmentSection = () => {
  const sliderRef = useRef(null);
  return (
    <section className="bg-[var(--primary-bg-color)] py-[94px] px-[70px]">
      <h2 className="text-[var(--secondary-text-color)] text-[50px] leading-[normal] font-manrope font-semibold uppercase">
        Check our <span className="text-[var(--accent-color)]">equipment</span>
      </h2>
      <Swiper
        className="flex gap-[14px]"
        modules={[Autoplay]}
        loop={true}
        autoplay={true}
        ref={sliderRef}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {ourEquipmentListOne.map((item) => (
          <SwiperSlide key={item.id}>
            <li
              key={item.id}
              className="w-full py-[29px] pl-[50px] flex gap-[14px] list-none rounded-3xl shadow-cardShadow"
            >
              <div className="relative w-[104px] h-[104px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                  className="object-cover object-center rounded-2xl"
                />
              </div>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OurEquipmentSection;
