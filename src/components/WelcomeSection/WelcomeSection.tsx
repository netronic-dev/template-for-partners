import Image from "next/image";
import imgOne from "../../../public/images/welcome-img-1.webp";
import imgTwo from "../../../public/images/welcome-img-2.webp";
import imgThree from "../../../public/images/welcome-img-3.webp";
import imgFour from "../../../public/images/welcome-img-4.webp";
import bg from "../../../public/images/welcome-bg.webp";
import VideoPlayBtn from "./VideoPlayBtn";
import style from "./style.module.css";

const WelcomeSection = () => {
  return (
    <section
      id="about"
      className="relative pt-[82px] 2xl:pt-[126px] pb-[508px] sm:pb-[108px] lg:pb-[68px] 2xl:pb-[65px] overflow-hidden xl:mt-[-17px]"
    >
      <div className={style.bg_image}>
        <Image
          src={bg}
          alt="Welcome section bg"
          className="w-[1918px] h-auto"
          loading="lazy"
        />
      </div>
      <div className="max-w-[1512px] mx-auto">
        <div className="px-[15px] xl:pl-[68px] xl:pr-0">
          <div className="flex items-center gap-1 sm:gap-[61px] mb-[28px] sm:mb-[24px]">
            <h3 className="max-w-[344px] text-[var(--secondary-text-color)] text-[35px] sm:text-[40px] lg:text-[50px] font-manrope font-semibold uppercase]">
              WELCOME <br />
              <span className="text-[var(--accent-color)]">
                TO NETRONIC UNIVERSE
              </span>
            </h3>
            <VideoPlayBtn />
          </div>
          <div className="relative flex flex-col gap-5 max-w-[344px] lg:max-w-[410px] 2xl:max-w-[513px]">
            <div className="absolute top-[134%] right-[43%] sm:top-[1%] sm:left-[92%] lg:top-[-18%] lg:left-[116%] 2xl:top-[-48%] w-[203px] h-[181px] sm:w-[274px] sm:h-[245px] lg:w-[311px] lg:h-[278px] 2xl:w-[361px] 2xl:h-[323px]">
              <Image
                src={imgOne}
                alt="img-one"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
            <div className="absolute top-[116%] right-[2%] sm:top-[-17%] sm:left-[161%] lg:top-[-39%] lg:left-[185%] 2xl:top-[-76%] 2xl:left-[180%] w-[163px] h-[145px] sm:w-[176px] sm:h-[157px] lg:w-[252px] lg:h-[225px] 2xl:w-[292px] 2xl:h-[261px]">
              <Image
                src={imgTwo}
                alt="img-two"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[-98%] right-[-2%] sm:bottom-[7%] sm:left-[158%] lg:bottom-[23%] lg:left-[179%] 2xl:bottom-[21%] 2xl:left-[174%] w-[174px] h-[155px] sm:w-[234px] sm:h-[210px] lg:w-[310px] lg:h-[277px] 2xl:w-[360px] 2xl:h-[322px]">
              <Image
                src={imgThree}
                alt="img-three"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-[-123%] right-[43%] sm:right-[-62%] sm:bottom-[-6%] w-[175px] h-[157px] lg:bottom-[11%] lg:right-[-85%] sm:w-[180px] sm:h-[162px] lg:w-[205px] lg:h-[184px] 2xl:bottom-[8%] 2xl:left-[132%] 2xl:w-[238px] 2xl:h-[213px]">
              <Image
                src={imgFour}
                alt="img-four"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
            <p className="font-manrope text-base lg:text-lg leading-[24px] font-medium">
              We offer NETRONIC laser tag equipment. For over 19 years NETRONIC
              has been operating in the market. Their team has grown from a
              simple paintball club to a globally recognized manufacturer of
              laser tag equipment, VR attractions, and inflatable shelters.
            </p>
            <p className="font-manrope text-base lg:text-lg leading-[24px] font-medium">
              Today’s NETRONIC - is a group of companies that includes such
              brands as: LASERTAG.NET, GALAXY, VION VR, AІRBUNKER. This company
              is a manufacturer of innovative equipment for both arena and
              mobile lasertag.
            </p>
            <p className="font-manrope text-base lg:text-lg leading-[24px] font-medium">
              We provide full business support at every stage, from the
              evaluation and development of a business idea, to assistance with
              the opening of a laser tag center and its further development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
