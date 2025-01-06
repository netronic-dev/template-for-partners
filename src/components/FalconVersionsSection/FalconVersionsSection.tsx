import { Icon } from "../Icon";
import Image from "next/image";
import imgOne from "../../../public/images/falcon-f1.webp";
import imgTwo from "../../../public/images/falcon-f2.webp";
import imgThree from "../../../public/images/falcon-lux.webp";
import style from "./style.module.css";

const FalconVersionsSection = () => {
  return (
    <section className="bg-[var(--primary-text-color)] pt-[94px] pb-[44px] px-[15px] xl:pb-[114px] xl:pl-[68px] xl:pr-[60px]">
      <div className="max-w-[1512px] mx-auto">
        <h2 className="text-[var(--secondary-text-color)] text-[30px] sm:text-[40px] lg:text-[50px] leading-[normal] font-manrope font-semibold uppercase max-w-[751px]">
          FALCON TAGER IS AVAILABLE <br />
          <span className="text-[var(--accent-color)]">
            IN F1, F2 AND LUX VERSIONS
          </span>
        </h2>
        <ul className="mt-[32px] sm:mt-[86px] lg:mt-[60px] flex flex-col xl:flex-row">
          <li className="relative flex border-b-[1px] xl:border-b-0 border-solid border-[var(--accent-color)] border-opacity-40 pb-[45px] xl:pb-0">
            <div>
              <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold mb-[10px] xl:mb-0">
                FALCON F1
              </h3>
              <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
                universal model suitable for both children from 5-6 years old
                and adults
              </p>
              <div className="flex items-center gap-[11px] mt-[20px] xl:mt-[13px]">
                <Icon name="icon-two-sided-arrow" width={24} height={12} />
                <p className="text-[#1D1D1B] font-manrope text-lg font-normal">
                  54 cm
                </p>
              </div>
            </div>
            <div className="absolute right-[14%] sm:right-[18%] bottom-[-27%] sm:bottom-[-48%] xl:static h-[209px] w-[86px] sm:h-[412px] sm:w-[171px] rotate-[-90deg] xl:rotate-0 xl:h-[469px] xl:w-[213px] mt-[32px] xl:mt-[-23px]">
              <Image
                src={imgOne}
                alt="FALCON F1"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
          </li>
          <li className="relative mt-[32px] xl:mt-0 border-b-[1px] xl:border-b-0 border-solid xl:border-l-[1px] border-[var(--accent-color)] border-opacity-40 flex xl:pl-[19px] pb-[45px] xl:pb-0">
            <div>
              <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold mb-[10px] xl:mb-0">
                FALCON F2
              </h3>
              <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
                full-size model convenient for children from 12 years old and
                adults
              </p>
              <div className="flex items-center gap-[11px] mt-[20px] xl:mt-[13px]">
                <Icon name="icon-two-sided-arrow" width={24} height={12} />
                <p className="text-[#1D1D1B] font-manrope text-lg font-normal">
                  66 cm
                </p>
              </div>
            </div>
            <div
              className={`${style.img_two} absolute right-[18%] bottom-[-38%] sm:bottom-[-55%] xl:static h-[256px] w-[116px] xl:h-[469px] xl:w-[213px] mt-[-39px] rotate-[-90deg] xl:rotate-0`}
            >
              <Image
                src={imgTwo}
                alt="FALCON F2"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
          </li>
          <li className="relative mt-[32px] xl:mt-0 xl:border-l-[1px] border-[var(--accent-color)] border-opacity-40 flex xl:pl-[19px] pb-[45px] xl:pb-0">
            <div>
              <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold mb-[10px] xl:mb-0">
                FALCON LUX
              </h3>
              <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
                compact tagger with bright illumination for working with
                children and indoor playing
              </p>
              <div className="flex items-center gap-[11px] mt-[20px] xl:mt-[13px]">
                <Icon name="icon-two-sided-arrow" width={24} height={12} />
                <p className="text-[#1D1D1B] font-manrope text-lg font-normal">
                  42 cm
                </p>
              </div>
            </div>
            <div className="absolute right-[13%] sm:right-[14%] bottom-[-21%] xl:static h-[195px] w-[110px] sm:h-[409px] sm:w-[230px] sm:bottom-[-49%] xl:h-[392px] xl:w-[220px] mt-[39px] rotate-[-90deg] xl:rotate-0">
              <Image
                src={imgThree}
                alt="FALCON LUX"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
                className="object-contain"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FalconVersionsSection;
