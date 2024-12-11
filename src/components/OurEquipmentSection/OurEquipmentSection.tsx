"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import {
  ourEquipmentListOne,
  ourEquipmentListTwo,
} from "@/constants/globalConstants";

const OurEquipmentSection = () => {
  const sliderRefTop = useRef<SwiperCore | null>(null);
  const sliderRefBottom = useRef<SwiperCore | null>(null);

  const handleMouseEnter = (slider: "top" | "bottom") => {
    if (slider === "top" && sliderRefTop.current?.autoplay) {
      sliderRefTop.current.autoplay.stop();
    }
    if (slider === "bottom" && sliderRefBottom.current?.autoplay) {
      sliderRefBottom.current.autoplay.stop();
    }
  };

  const handleMouseLeave = (slider: "top" | "bottom") => {
    if (slider === "top" && sliderRefTop.current?.autoplay) {
      sliderRefTop.current.autoplay.start();
    }
    if (slider === "bottom" && sliderRefBottom.current?.autoplay) {
      sliderRefBottom.current.autoplay.start();
    }
  };

  return (
    <section className="bg-[var(--primary-bg-color)] py-[94px] px-[70px] rounded-[20px]">
      <div className="max-w-[1512px] mx-auto">
        <h2 className="text-[var(--secondary-text-color)] text-[50px] leading-[normal] font-manrope font-semibold uppercase mb-[52px]">
          Check our{" "}
          <span className="text-[var(--accent-color)]">equipment</span>
        </h2>
        <Swiper
          className="flex max-w-[1512px] mx-auto"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
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
              spaceBetween: 40,
            },
            1512: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => {
            sliderRefTop.current = swiper;
          }}
        >
          {ourEquipmentListOne.map((item) => (
            <SwiperSlide
              key={item.id}
              className="relative w-[350px] h-[317px] bg-[var(--primary-text-color)] flex list-none rounded-[7px] group"
              onMouseEnter={() => handleMouseEnter("top")}
              onMouseLeave={() => handleMouseLeave("top")}
            >
              <div key={item.id} className="w-[350px] h-[317px]">
                <div className="relative w-full h-full overflow-hidden mt-[-5px]">
                  <div
                    style={{
                      width: item.imgWidth ? item.imgWidth : "197px",
                      height: item.imgHeight ? item.imgHeight : "196px",
                    }}
                    className="relative ml-auto mr-auto mt-[29px]"
                  >
                    <Image
                      src={item.img}
                      alt="Slider img"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                      className="object-cover object-center rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[var(--secondary-text-color)] opacity-0 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute bottom-[70px] left-[20px] transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                    <h3 className="font-manrope text-2xl leading-[normal] text-[bg-[var(--secondary-text-color)]] group-hover:text-[var(--primary-text-color)] transition-all font-semibold pl-[30px] uppercase">
                      {typeof item.title === "string" ? (
                        item.title.split(" ").length === 1 ? (
                          <>
                            <span className="invisible h-0 inline-block">
                              placeholder
                            </span>
                            <br />
                            {item.title}
                          </>
                        ) : (
                          item.title.split(" ").map((word, index) => (
                            <span key={index}>
                              {word}
                              {index === 0 ? <br /> : " "}
                            </span>
                          ))
                        )
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="mt-[16px] text-lg leading-[normal] text-[var(--secondary-text-color)] group-hover:text-[var(--primary-text-color)] transition-all duration-300 opacity-0 group-hover:opacity-100 max-w-[276px] ml-[30px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="flex mt-[40px] max-w-[1280px] mx-auto"
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
          }}
          spaceBetween={10}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => {
            sliderRefBottom.current = swiper;
          }}
        >
          {ourEquipmentListTwo.map((item) => (
            <SwiperSlide
              key={item.id}
              onMouseEnter={() => handleMouseEnter("bottom")}
              onMouseLeave={() => handleMouseLeave("bottom")}
              className="relative w-full h-[317px] bg-[var(--primary-text-color)] flex list-none rounded-[7px] group"
            >
              <div className=" w-full h-[317px]">
                <div className="relative w-full h-full overflow-hidden mt-[-5px]">
                  <div
                    style={{
                      width: item.imgWidth ? item.imgWidth : "197px",
                      height: item.imgHeight ? item.imgHeight : "196px",
                    }}
                    className="relative ml-auto mt-[29px]"
                  >
                    <Image
                      src={item.img}
                      alt="Slider img"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                      className="object-cover object-center rounded-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[var(--secondary-text-color)] opacity-0 transition-opacity duration-300 group-hover:opacity-90"></div>
                  <div className="absolute bottom-[70px] left-[20px] transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                    <h3 className="font-manrope text-2xl leading-[normal] text-[bg-[var(--secondary-text-color)]] group-hover:text-[var(--primary-text-color)] transition-all font-semibold pl-[30px] uppercase">
                      {typeof item.title === "string" ? (
                        item.title.split(" ").length === 1 ? (
                          <>
                            <span className="invisible h-0 inline-block">
                              placeholder
                            </span>
                            <br />
                            {item.title}
                          </>
                        ) : (
                          item.title.split(" ").map((word, index) => (
                            <span key={index}>
                              {word}
                              {index === 0 ? <br /> : " "}
                            </span>
                          ))
                        )
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="mt-[16px] text-lg leading-[normal] text-[var(--secondary-text-color)] group-hover:text-[var(--primary-text-color)] transition-all duration-300 opacity-0 group-hover:opacity-100 max-w-[276px] ml-[30px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurEquipmentSection;
