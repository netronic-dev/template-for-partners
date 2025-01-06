"use client";

import { equipmentBtnList } from "@/constants/globalConstants";
import { Icon } from "../Icon";

const TypesOfEquipmentBtnsList = () => {
  return (
    <ul className="flex flex-wrap gap-[20px] justify-center lg:justify-start">
      {equipmentBtnList.map((item) => (
        <li
          onClick={() => window.open(item.link, "_blank")}
          style={{
            backgroundColor: item.bgBtnColor,
          }}
          key={item.id}
          className={`cursor-pointer flex items-center justify-center gap-[5px] border-[1px] border-solid ${
            item.id === 3
              ? "border-[var(--secondary-text-color)]"
              : "border-[transparent]"
          } rounded-[100px] w-[300px] sm:w-[220px] h-[54px]`}
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
  );
};

export default TypesOfEquipmentBtnsList;
