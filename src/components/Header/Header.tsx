"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { headerNavList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import { PrimaryButton } from "../PrimaryButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  console.log(isScrolled);

  const handleActiveSection = (ref: string) => {
    setActiveSection(ref);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      id="main"
      className="fixed z-20 top-0 left-0 bg-[var(--primary-text-color)] py-[14px] border-[1px] border-solid border-[#C4C4C4] rounded-b-[20px] w-[100vw]"
    >
      <div className="flex justify-between items-center px-[71px] mx-auto">
        <Link
          prefetch
          href="#main"
          aria-label="Main"
          onClick={() => handleActiveSection("#main")}
        >
          <Icon name="icon-logo" width={139} height={49} />
        </Link>
        <nav className="hidden xl:flex">
          <ul className="flex gap-[20px] flex-row">
            {headerNavList.map(({ id, ref, name }) => (
              <li
                key={id}
                className={`cursor-pointer relative group`}
                onClick={() => handleActiveSection(ref)}
              >
                <Link
                  prefetch
                  href={ref}
                  aria-label={name}
                  className="text-[var(--grey-color)] font-manrope text-xs tracking-[0.24px] font-semibold transition-all group-hover:text-[#040E18] uppercase"
                >
                  {name}
                </Link>
                <span
                  className={`${
                    ref === activeSection ? "w-full" : "w-0"
                  } block h-[1px] bg-[#040E18] absolute bottom-[-2px] left-0 transition-all duration-300 group-hover:w-full`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>
        <PrimaryButton>Check the price</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
