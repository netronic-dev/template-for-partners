"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { blogList } from "@/constants/globalConstants";
import { Icon } from "../Icon";

const BlogSection = () => {
  const sliderRef = useRef<SwiperCore | null>(null);

  const handleChangePrevImg = () => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  };

  const handleChangeNextImg = () => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  };

  return (
    <section className="pt-[126px] pb-[114px]">
      <div className="flex items-center gap-[20px] pl-[68px] mb-[35px]">
        <h2 className="text-[50px] leading-[130%] font-semibold uppercase">
          Блог
        </h2>
        <div className="flex items-center gap-[18px] mb-[38px] md:mb-0 justify-center">
          <button
            aria-label="Arrow left"
            onClick={handleChangePrevImg}
            className="cursor-pointer transition-all hover:bg-[var(--accent-color)] group w-[50px] h-[50px] border-solid border-[1px] border-[var(--accent-color)] flex items-center justify-center rounded-[50%]"
          >
            <Icon
              name="icon-arrow-left"
              width={7}
              height={12}
              className="group-hover:text-[var(--primary-text-color)] text-[var(--accent-color)]"
            />
          </button>
          <button
            aria-label="Arrow right"
            onClick={handleChangeNextImg}
            className="cursor-pointer hover:bg-[var(--accent-color)] transition-all group w-[50px] h-[50px] border-solid border-[1px] border-[var(--accent-color)] flex items-center justify-center rounded-[50%]"
          >
            <Icon
              name="icon-arrow-right"
              width={7}
              height={12}
              className="group-hover:text-[var(--primary-text-color)] text-[var(--accent-color)]"
            />
          </button>
        </div>
      </div>
      <Swiper
        className="flex overflow-x-hidden"
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.25,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
      >
        {blogList.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex-shrink-0 w-full md:w-[300px]"
          >
            <div className="relative w-full h-[303px] mb-[15px] ">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="100%"
                className="object-cover rounded-[20px]"
              />
            </div>
            <p className="text-[var(--accent-color)] font-manrope text-sm leading-[normal] font-light mb-[15px]">
              {item.date}
            </p>
            <h3 className="font-manrope text-[26px] leading-[normal] font-semibold mb-[7px]">
              {item.title}
            </h3>
            <p className="text-[#848484] font-manrope text-sm leading-[normal] font-normal">
              {item.text}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogSection;
