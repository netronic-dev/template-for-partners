import { Icon } from "../Icon";
import Image from "next/image";
import imgOne from "../../../public/images/falcon-f1.webp";
import imgTwo from "../../../public/images/falcon-f2.webp";
import imgThree from "../../../public/images/falcon-lux.webp";

const FalconVersionsSection = () => {
  return (
    <section className="bg-[var(--primary-text-color)] pt-[94px] pb-[114px] pl-[68px] pr-[60px]">
      <h2 className="text-[var(--secondary-text-color)] text-[50px] leading-[normal] font-manrope font-semibold uppercase max-w-[751px]">
        Тагер FALCON доступний{" "}
        <span className="text-[var(--accent-color)]">
          у версіях F1, F2 та LUX
        </span>
      </h2>
      <ul className="mt-[60px] flex">
        <li className="flex">
          <div>
            <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold">
              FALCON F1
            </h3>
            <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
              універсальна модель яка підійде як дітям від 5-6 років, так і
              дорослим
            </p>
            <div className="flex items-center gap-[11px] mt-[13px]">
              <Icon name="icon-two-sided-arrow" width={24} height={12} />
              <p className="text-[#1D1D1B] font-manrope text-[text-lg] font-normal">
                54 sm
              </p>
            </div>
          </div>
          <div className="relative h-[469px] w-[213px] mt-[-23px]">
            <Image
              src={imgOne}
              alt="FALCON F1"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
              className="object-contain"
            />
          </div>
        </li>
        <li className="border-l-[1px] border-[var(--accent-color)] flex pl-[19px]">
          <div>
            <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold">
              FALCON F2
            </h3>
            <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
              повнорозмірна модель яка буде зручна дітям від 12 років і дорослим
            </p>
            <div className="flex items-center gap-[11px] mt-[13px]">
              <Icon name="icon-two-sided-arrow" width={24} height={12} />
              <p className="text-[#1D1D1B] font-manrope text-[text-lg] font-normal">
                66 sm
              </p>
            </div>
          </div>
          <div className="relative h-[469px] w-[213px] mt-[-39px]">
            <Image
              src={imgTwo}
              alt="FALCON F2"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 361px"
              className="object-contain"
            />
          </div>
        </li>
        <li className="border-l-[1px] border-[var(--accent-color)] flex pl-[19px]">
          <div>
            <h3 className="text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-bold">
              FALCON LUX
            </h3>
            <p className="max-w-[217px] text-[var(--secondary-text-color)] font-manrope text-lg leading-[24px] font-normal">
              компактний тагер з яскравою ілюмінацією для роботи з дітьми та гри
              у приміщенні
            </p>
            <div className="flex items-center gap-[11px] mt-[13px]">
              <Icon name="icon-two-sided-arrow" width={24} height={12} />
              <p className="text-[#1D1D1B] font-manrope text-[text-lg] font-normal">
                42 sm
              </p>
            </div>
          </div>
          <div className="relative h-[392px] w-[220px] mt-[39px]">
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
    </section>
  );
};

export default FalconVersionsSection;
