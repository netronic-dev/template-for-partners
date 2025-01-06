"use client";

import Image from "next/image";
import { Icon } from "../Icon";
import logoGalaxy from "../../../public/images/types-of-equipment-2.png";
import { equipmentList } from "@/constants/globalConstants";
import bg from "../../../public/images/types-of-equipment-bg.webp";
import TypesOfEquipmentBtnsList from "./TypesOfEquipmentBtnsList";
import { useIsTablet } from "@/hooks";

const TypesOfEquipmentSection = () => {
  const isTablet = useIsTablet();
  return (
    <section
      id="equipment"
      className="relative pt-[105px] pb-[78px] lg:pb-[166px] px-[15px] xl:pl-[71px] xl:pr-[146px] bg-[#EFF1F3] rounded-[20px] overflow-x-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="absolute top-[6px] left-[69%] w-[367px] h-[367px] sm:w-[649px] sm:h-[649px] sm:left-[90%] lg:left-[65%] lg:top-0">
            <Image
              src={bg}
              fill
              sizes="100%"
              alt="Types of equipment background"
              className="w-[649px] h-auto relative z-[1]"
            />
          </div>
          <h4 className="sm:hidden text-[30px] font-manrope font-semibold uppercase mb-[41px] z-[2]">
            EQUIPMENT IS <br />
            <span className="text-[var(--accent-color)]">
              AVAILABLE FOR FOUR <br /> BUSINESS AREAS:
            </span>
          </h4>
          <ul className="flex flex-wrap justify-center sm:justify-start max-w-[380px] lg:max-w-fit">
            <li className="flex justify-center items-center w-[181px] h-[181px] lg:w-[238px] lg:h-[238px] shrink-0 bg-[var(--primary-text-color)] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
              <Icon
                name="icon-logo"
                width={isTablet ? 125 : 95}
                height={isTablet ? 44 : 33}
              />
            </li>
            <li className="flex justify-center items-center ml-[-21px] w-[181px] h-[181px] lg:w-[238px] lg:h-[238px] shrink-0 bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
              <Image
                src={logoGalaxy}
                alt="Types of equipment"
                className="w-[108px] lg:w-[142px] h-auto"
              />
            </li>
            <li className="flex justify-center items-center mt-[-21px] w-[181px] h-[181px] lg:w-[238px] lg:h-[238px] shrink-0 bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
              <Icon
                name="icon-logo-airbunker"
                width={isTablet ? 140 : 107}
                height={isTablet ? 27 : 21}
                className="text-[var(--secondary-text-color)]"
              />
            </li>
            <li className="flex justify-center items-center ml-[-21px] mt-[-21px] w-[181px] h-[181px] lg:w-[238px] lg:h-[238px] shrink-0 bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
              <Icon
                name="icon-logo-vion"
                width={isTablet ? 140 : 107}
                height={isTablet ? 35 : 26}
                className="text-[var(--error-color)]"
              />
            </li>
          </ul>
          <div className="flex flex-col z-[2]">
            <h4 className="hidden sm:block text-[30px] lg:text-[40px] sm:font-manrope sm:font-semibold sm:uppercase sm:mb-[25px]">
              EQUIPMENT IS <br />
              <span className="text-[var(--accent-color)]">
                AVAILABLE FOR FOUR <br /> BUSINESS AREAS:
              </span>
            </h4>
            <ul className=" flex flex-col gap-[10px] mb-[39px] mt-[32px] sm:mt-0">
              {equipmentList.map((item) => (
                <li key={item.id} className="">
                  <p className="font-manrope text-base lg:text-lg leading-[24px]">
                    <span className="font-bold">{item.titleSpan}</span>{" "}
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
            <div className="hidden lg:block">
              <TypesOfEquipmentBtnsList />
            </div>
          </div>
        </div>
        <div className="sm:block sm:mt-[40px] sm:max-w-[600px] sm:mx-auto lg:hidden">
          <TypesOfEquipmentBtnsList />
        </div>
      </div>
    </section>
  );
};

export default TypesOfEquipmentSection;
