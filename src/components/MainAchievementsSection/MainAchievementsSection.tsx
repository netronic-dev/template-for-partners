import Image from "next/image";
import bg from "../../../public/images/main-achievements-bg.webp";
import imgOne from "../../../public/images/main-achievements-img-1.webp";
import imgTwo from "../../../public/images/main-achievements-img-2.webp";
import imgThree from "../../../public/images/main-achievements-img-3.webp";
import imgFour from "../../../public/images/welcome-img-4.webp";
import imgFive from "../../../public/images/main-achievements-img-5.webp";
import imgSix from "../../../public/images/main-achievements-img-6.webp";
import {
  mainAchievementsList,
  mainAchievementsListTwo,
} from "@/constants/globalConstants";
import { Icon } from "../Icon";

const MainAchievementsSection = () => {
  return (
    <>
      <section className="relative pt-[94px] pb-[124px] pl-[68px] rounded-[20px] bg-[#1D1D1B] overflow-hidden">
        <div className="absolute top-0 right-[-26%] w-[70%] h-full blur-[150px] rotate-[-89.766deg]">
          <Image
            src={bg}
            alt="Main achievements bg"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
          />
        </div>
        <h2 className="max-w-[422px] text-[var(--primary-text-color)] text-[50px] leading-[normal] font-manrope font-semibold uppercase mb-[54px]">
          Основні досягнення
        </h2>
        <ul className="flex flex-wrap gap-x-[23px] gap-y-[54px] max-w-[570px]">
          {mainAchievementsList.map((item) => (
            <li key={item.id} className="flex flex-col max-w-[270px]">
              <div className="mb-[19px] flex items-center justify-center w-[65px] h-[65px] rounded-full border-[1px] border-solid border-[var(--grey-color)] shrink-0">
                <Icon
                  name={item.icon}
                  width={item.widthLogo ? item.widthLogo : 24}
                  height={item.heightLogo ? item.heightLogo : 24}
                />
              </div>
              <h3 className="mb-[12px] text-[var(--primary-text-color)] text-xl leading-[140%] font-manrope font-semibold">
                {item.title}
              </h3>
              <p className="text-[var(--primary-text-color)] text-lg leading-[133.3%] font-manrope font-medium">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="absolute top-[5%] right-[2%] w-[292px] h-[261px]">
          <Image
            src={imgOne}
            alt="Main achievements img 1"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[14%] right-[24%] w-[350px] h-[312px]">
          <Image
            src={imgTwo}
            alt="Main achievements img 2"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute top-[34%] right-0 w-[360px] h-[322px]">
          <Image
            src={imgThree}
            alt="Main achievements img 3"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[22%] right-[25%] w-[225px] h-[202px]">
          <Image
            src={imgFour}
            alt="Main achievements img 4"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[-2%] right-[1%] w-[346px] h-[310px]">
          <Image
            src={imgFive}
            alt="Main achievements img 5"
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
            className="object-contain"
          />
        </div>
      </section>
      <section className="pt-[34px] pb-[50px]">
        <ul className="flex gap-[20px] justify-center pb-[50px] px-[70px]">
          {mainAchievementsListTwo.map((item) => (
            <li
              key={item.id}
              className="pt-[46px] pb-[40px] pl-[38px] pr-[29px] flex flex-col bg-[#EFF1F3] rounded-[20px]"
            >
              <div className="mb-[21px] flex items-center justify-center w-[65px] h-[65px] rounded-full border-[1px] border-solid border-[var(--grey-color)] shrink-0">
                <Icon
                  name={item.icon}
                  width={item.widthLogo ? item.widthLogo : 24}
                  height={item.heightLogo ? item.heightLogo : 24}
                />
              </div>
              <h3 className="max-w-[300px] uppercase mb-[14px] text-xl leading-[140%] font-manrope font-semibold">
                {item.title}
              </h3>
              <p className="max-w-[300px] text-lg leading-[133.3%] font-manrope font-medium">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="relative w-full h-[468px] rounded-[20px]">
          <Image
            src={imgSix}
            alt="Main achievements img 6"
            loading="lazy"
            fill
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default MainAchievementsSection;
