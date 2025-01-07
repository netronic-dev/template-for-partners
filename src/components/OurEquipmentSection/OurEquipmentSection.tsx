"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import Image from "next/image";
import {
  ourEquipmentList,
  ourEquipmentListThree,
  ourEquipmentListTwo,
} from "@/constants/globalConstants";
import { Icon } from "../Icon";
import { useIsTablet } from "@/hooks";

const OurEquipmentSection = () => {
  const sliderRef = useRef<SwiperCore | null>(null);
  const isTablet = useIsTablet(744);

  const handlePrev = () => {
    sliderRef.current?.slidePrev();
  };

  const handleNext = () => {
    sliderRef.current?.slideNext();
  };

  return (
    <section className="bg-[var(--primary-bg-color)] pt-[84px] sm:pt-[104px] sm:pb-[157px] pb-[72px] px-[15px] sm:px-[26px] lg:pt-[94px] lg:pb-[134px] lg:px-[33px] xl:py-[94px] xl:px-[70px] rounded-[20px]">
      <div className="max-w-[1512px] mx-auto">
        <h2 className="text-[var(--secondary-text-color)] text-[30px] sm:text-[40px] lg:text-[50px] leading-[normal] font-manrope font-semibold uppercase mb-[28px] sm:mb-[55px] xl:mb-[52px]">
          Check our{" "}
          <span className="text-[var(--accent-color)]">equipment</span>
        </h2>
        {isTablet ? (
          <>
            <ul className="flex flex-wrap justify-center xl:justify-between gap-5 lg:gap-[17px] xl:gap-[40px] max-w-[1280px] mx-auto">
              {ourEquipmentListTwo.map((item) => (
                <li
                  key={item.id}
                  className="relative w-[308px] xl:w-[350px] h-[317px] bg-[var(--primary-text-color)] flex list-none rounded-[7px] group"
                >
                  <div
                    key={item.id}
                    className="w-[308px] xl:w-[350px] h-[317px]"
                  >
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
                          alt="Product img"
                          fill
                          sizes="100%"
                          className="object-cover object-center rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-[var(--secondary-text-color)] opacity-0 transition-opacity duration-300 group-hover:opacity-90"></div>
                      <div className="absolute bottom-[70px] left-[20px] transition-transform duration-300 transform translate-y-[100%] group-hover:translate-y-0">
                        <h3 className="font-manrope text-2xl leading-[normal] text-[bg-[var(--secondary-text-color)]] group-hover:text-[var(--primary-text-color)] transition-all font-semibold xl:pl-[30px] uppercase">
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
                </li>
              ))}
            </ul>
            <ul className="flex justify-center mt-[20px] xl:mt-[40px] gap-[20px] max-w-[1280px] mx-auto">
              {ourEquipmentListThree.map((item) => (
                <li
                  key={item.id}
                  className="relative w-[308px] lg:w-[472px] xl:w-full h-[317px] bg-[var(--primary-text-color)] flex list-none rounded-[7px] group"
                >
                  <div className="w-[308px] lg:w-[472px] xl:w-full h-[317px]">
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
                          alt="Product img"
                          fill
                          sizes="100%"
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
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <Swiper
              className="flex"
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
                470: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                500: {
                  slidesPerView: 1.5,
                  spaceBetween: 10,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              onSwiper={(swiper) => {
                sliderRef.current = swiper;
              }}
            >
              {ourEquipmentList.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="relative w-[350px] h-[317px] bg-[var(--primary-text-color)] flex list-none rounded-[7px] group"
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
                          sizes="100%"
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
            <div className="flex items-center gap-[15px] mt-[28px] justify-end overflow-hidden">
              <div
                onClick={handlePrev}
                className="cursor-pointer transition-all bg-[var(--primary-text-color)] hover:bg-[var(--accent-color)] group w-[50px] h-[50px] border-solid border-[1px] border-[var(--accent-color)] flex items-center justify-center rounded-[50%]"
              >
                <Icon
                  name="icon-arrow-left"
                  width={7}
                  height={12}
                  className="group-hover:text-[var(--primary-text-color)] text-[var(--accent-color)]"
                />
              </div>
              <div
                onClick={handleNext}
                className="cursor-pointer transition-all bg-[var(--primary-text-color)] hover:bg-[var(--accent-color)] group w-[50px] h-[50px] border-solid border-[1px] border-[var(--accent-color)] flex items-center justify-center rounded-[50%]"
              >
                <Icon
                  name="icon-arrow-right"
                  width={7}
                  height={12}
                  className="group-hover:text-[var(--primary-text-color)] text-[var(--accent-color)]"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OurEquipmentSection;
