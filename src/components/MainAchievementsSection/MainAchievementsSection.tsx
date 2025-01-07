"use client";

import Image from "next/image";
import bg from "../../../public/images/main-achievements-bg.webp";
import imgOne from "../../../public/images/main-achievements-img-1.webp";
import imgTwo from "../../../public/images/main-achievements-img-2.webp";
import imgThree from "../../../public/images/main-achievements-img-3.webp";
import imgFour from "../../../public/images/welcome-img-4.webp";
import imgFive from "../../../public/images/main-achievements-img-5.webp";
import {
  mainAchievementsList,
  mainAchievementsListTwo,
} from "@/constants/globalConstants";
import { Icon } from "../Icon";
import style from "./style.module.css";

const MainAchievementsSection = () => {
  return (
    <>
      <section
        id="achievements"
        className="relative pt-[94px] pb-[65px] lg:pb-[124px] pl-[15px] sm:pl-[68px] rounded-[20px] bg-[#1D1D1B] overflow-hidden"
      >
        <div className="absolute top-[-18%] sm:top-0 right-[-73%] sm:right-[-67%] w-[89%] sm:w-[70%] h-full blur-[150px] rotate-[-89.766deg] lg:right-[-40%] xl:right-[-32%]">
          <Image
            src={bg}
            alt="Main achievements bg"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
          />
        </div>
        <h2 className="max-w-[422px] text-[var(--primary-text-color)] text-[40px] sm:text-[50px] leading-[normal] font-manrope font-semibold uppercase mb-[80px] lg:mb-[54px]">
          Key achievements
        </h2>
        <ul className="relative flex flex-wrap gap-x-[23px] gap-y-[54px] max-w-[570px]">
          {mainAchievementsList.map((item) => (
            <li key={item.id} className="flex flex-col max-w-[270px]">
              <div className="mb-[19px] flex items-center justify-center w-[65px] h-[65px] rounded-full border-[1px] border-solid border-[var(--grey-color)] shrink-0">
                <Icon
                  name={item.icon}
                  width={item.widthLogo ? item.widthLogo : 24}
                  height={item.heightLogo ? item.heightLogo : 24}
                />
              </div>
              <h3 className="mb-[12px] text-[var(--primary-text-color)] text-xl leading-[140%] font-manrope font-semibold z-[2]">
                {item.title}
              </h3>
              <p className="sm:max-w-[258px] text-[var(--primary-text-color)] text-base leading-[150%] lg:text-lg lg:leading-[133.3%] font-manrope font-medium z-[2]">
                {item.text}
              </p>
              <div
                className={`${style.img_achievements_one} absolute top-[-7%] right-[-11%] w-[224px] h-[224px] sm:w-[203px] sm:h-[182px] sm:top-[-19%] sm:left-[91%] lg:w-[233px] lg:h-[233px] lg:top-[-40%] lg:left-[140%] xl:w-[292px] xl:h-[261px] xl:top-[-38%] xl:left-[158%] 2xl:left-[195%]`}
              >
                <Image
                  src={imgOne}
                  alt="Main achievements img 1"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <div
                className={`${style.img_achievements_two} hidden sm:block absolute top-[4%] left-[72%] w-[178px] h-[178px] sm:w-[198px] sm:h-[177px] sm:top-[-47%] sm:left-[68%] lg:w-[237px] lg:h-[237px] lg:top-[-14%] lg:left-[109%] xl:w-[350px] xl:h-[312px] xl:left-[104%] 2xl:left-[139%]`}
              >
                <Image
                  src={imgTwo}
                  alt="Main achievements img 2"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <div
                className={`${style.img_achievements_three} absolute top-[45%] right-[-12%] sm:top-[48%] sm:left-[97%] w-[213px] h-[190px] lg:w-[272px] lg:h-[243px] lg:top-[21%] lg:left-[135%] xl:w-[360px] xl:h-[322px] xl:top-[15%] xl:left-[156%] 2xl:left-[192%]`}
              >
                <Image
                  src={imgThree}
                  alt="Main achievements img 3"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <div
                className={`${style.img_achievements_four} absolute bottom-[68%] right-[3%] w-[135px] h-[121px] sm:w-[143px] sm:h-[129px] sm:bottom-[61%] sm:left-[101%] lg:w-[225px] lg:h-[202px] lg:bottom-[14%] lg:left-[105%] xl:left-[120%] 2xl:left-[135%]`}
              >
                <Image
                  src={imgFour}
                  alt="Main achievements img 4"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
              <div
                className={`${style.img_achievements_five} absolute bottom-[13%] right-[-6%] w-[221px] h-[198px] sm:hidden lg:block lg:w-[220px] lg:h-[198px] lg:left-[133%] lg:bottom-[-14%] xl:w-[346px] xl:h-[310px] xl:bottom-[-27%] xl:left-[149%] 2xl:left-[165%]`}
              >
                <Image
                  src={imgFive}
                  alt="Main achievements img 5"
                  fill
                  sizes="100%"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="pt-[34px] sm:pb-[50px] lg:pb-0">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap  gap-[30px] lg:gap-[17px] xl:gap-[20px] justify-center xl:px-[70px]">
          {mainAchievementsListTwo.map((item) =>
            item.src ? (
              <li
                key={item.id}
                className={`${style.item_width_two_part} relative w-full h-[152px] sm:h-[auto] lg:w-full lg:h-[353px] xl:h-[468px] rounded-[20px]`}
              >
                <Image
                  src={item.src}
                  alt="Main achievements img"
                  loading="lazy"
                  fill
                  sizes="100%"
                  className={`object-cover rounded-[20px] ${style.achievements_img}`}
                />
              </li>
            ) : (
              <li
                key={item.id}
                className={`${style.item_width_two_part} ${style.item_width_three_part} py-[28px] px-[25px] lg:pt-[46px] lg:pb-[40px] lg:pl-[38px] lg:pr-[29px] flex flex-col bg-[#EFF1F3] rounded-[20px]`}
              >
                <div className="mb-[21px] flex items-center justify-center w-[65px] h-[65px] rounded-full border-[1px] border-solid border-[var(--grey-color)] shrink-0">
                  <Icon
                    name={item.icon}
                    width={item.widthLogo ? item.widthLogo : 24}
                    height={item.heightLogo ? item.heightLogo : 24}
                  />
                </div>
                <h3 className="max-w-[297px] uppercase mb-[14px] text-xl leading-[140%] font-manrope font-semibold">
                  {item.title}
                </h3>
                <p className="lg:max-w-[261px] text-base leading-[150%] lg:text-lg lg:leading-[133.3%] font-manrope font-medium">
                  {item.text}
                </p>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default MainAchievementsSection;
