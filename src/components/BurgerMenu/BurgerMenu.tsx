"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { headerNavList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import { useModals } from "@/context/ModalsProvider";
import { useIsTablet } from "@/hooks";
import { PrimaryButton } from "../PrimaryButton";

interface IBurger {
  isOpenMenu: boolean;
  handleOpenMenu: () => void;
}

const BurgerMenu: FC<IBurger> = ({ handleOpenMenu }) => {
  const isTablet = useIsTablet();
  const modals = useModals();

  const [, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [tabletStyles, setTabletStyles] = useState<boolean>(false);

  useEffect(() => {
    setTabletStyles(isTablet);
  }, [isTablet]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    handleOpenMenu();
  };

  const handleActiveSection = (ref: string) => {
    setActiveSection(ref);
    handleOpenMenu();
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center absolute top-0 left-[-1%] w-[103%] h-screen bg-[var(--primary-text-color)] z-20 py-[13px]">
      <div className="container w-full flex justify-center lg:justify-between items-center relative">
        {tabletStyles ? (
          <Icon name="icon-logo" size={"0px"} className=" w-[139px] h-[49px]" />
        ) : (
          <div className="flex-1 flex justify-center">
            <Icon
              name="icon-logo"
              size={"0px"}
              className="w-[180px] h-[66px] md:w-[179px]"
            />
          </div>
        )}
        <Icon
          name="icon-cross"
          width={28}
          height={28}
          onClick={handleClick}
          className="cursor-pointer ml-auto mr-[20px] text-[#1C1B1F]"
        />
      </div>
      <nav>
        <ul className="flex flex-col items-center pt-[71px] md:pt-[59px] gap-[50px] md:mb-[30px] lg:gap-[26px] lg:mb-[26px] lg:pt-[10px]">
          {headerNavList.map((item) => (
            <li
              onClick={() => handleActiveSection(item.ref)}
              key={item.id}
              className="cursor-pointer relative group"
            >
              <Link
                prefetch
                href={item.ref}
                aria-label={item.name}
                className="text-[var(--grey-color)] active:text-[#040E18] font-manrope text-xs font-semibold xl:text-[14px] tracking-[0.24px] uppercase transition-all group-hover:text-[#040E18]"
              >
                {item.name}
              </Link>
              <span
                className={`${
                  item.ref === activeSection ? "w-full" : "w-0"
                } block h-[2px] bg-[var(--primary-text-color)] absolute bottom-[-2px] left-0 transition-all duration-300 group-hover:w-full`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-[42px] md:mt-[23px] lg:mt-[51px]">
        <PrimaryButton onClick={() => modals.formCallChangeVisibility()}>
          Contact us
        </PrimaryButton>
      </div>
    </div>
  );
};

export default BurgerMenu;
