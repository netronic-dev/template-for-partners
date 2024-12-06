import Image from "next/image";
import { Icon } from "../Icon";
import logoGalaxy from "../../../public/images/types-of-equipment-2.png";
import { equipmentBtnList, equipmentList } from "@/constants/globalConstants";
import bg from "../../../public/images/types-of-equipment-bg.webp";

const TypesOfEquipmentSection = () => {
  return (
    <section className="relative pt-[105px] pb-[166px] pl-[71px] pr-[146px] bg-[#EFF1F3] rounded-[20px] flex items-center overflow-x-hidden">
      <div className="absolute top-[-4px] right-[-7%]">
        <Image
          src={bg}
          alt="Types of equipment background"
          className="w-[649px] h-auto relative z-[1]"
        />
      </div>
      <ul className="flex flex-wrap">
        <li className="flex justify-center items-center w-[238px] h-[238px] bg-[var(--primary-text-color)] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
          <Icon name="icon-logo" width={125} height={44} />
        </li>
        <li className="flex justify-center items-center ml-[-21px] w-[238px] h-[238px] bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
          <Image
            src={logoGalaxy}
            alt="Types of equipment"
            className="w-[142px] h-auto"
          />
        </li>
        <li className="flex justify-center items-center mt-[-21px] w-[238px] h-[238px] bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
          <Icon name="icon-logo-airbunker" width={140} height={27} />
        </li>
        <li className="flex justify-center items-center ml-[-21px] mt-[-21px] w-[238px] h-[238px] bg-[transparent] border-[3px] border-solid border-[var(--primary-text-color)] rounded-full">
          <Icon name="icon-logo-vion" width={140} height={35} />
        </li>
      </ul>
      <div className="flex flex-col z-[2]">
        <h4 className="text-[40px] font-manrope font-semibold uppercase mb-[25px]">
          ІСНУЄ ОБЛАДНАННЯ <br />
          <span className="text-[var(--accent-color)]">
            ДЛЯ 4 НАПРЯМКІВ БІЗНЕСУ:
          </span>
        </h4>
        <ul className="flex flex-col gap-[10px] mb-[39px]">
          {equipmentList.map((item) => (
            <li key={item.id} className="">
              <p className="font-manrope text-lg leading-[24px] font-medium">
                <span className="font-bold">{item.titleSpan}</span> {item.title}
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-[20px]">
          {equipmentBtnList.map((item) => (
            <li
              style={{
                backgroundColor: item.bgBtnColor,
              }}
              key={item.id}
              className={`flex items-center justify-center gap-[10px] border-[1px] border-solid ${
                item.id === 3
                  ? "border-[var(--secondary-text-color)]"
                  : "border-[transparent]"
              } rounded-[100px] w-[220px] h-[54px]`}
            >
              <Icon
                name={item.logo}
                width={item.widthLogo ? item.widthLogo : 26}
                height={item.heightLogo ? item.heightLogo : 30}
              />
              <p
                className={`${
                  item.id === 3
                    ? "text-[var(--secondary-text-color)]"
                    : "text-[var(--primary-text-color)]"
                } font-manrope text-sm font-semibold tracking-[0.28px]`}
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TypesOfEquipmentSection;
