"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { NetworksCompanies } from "../NetworksCompanies";
import bg from "../../../public/images/footer-bg.webp";
import { FooterInfo } from "../FooterInfo";
import style from "./style.module.css";

const Form = dynamic(() => import("@/components/Form/Form"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="bg-[#0C0C0C] pt-[126px] pb-[142px] lg:pb-[40px] px-[15px] sm:px-[22px] lg:px-[29px] xl:px-[60px] relative sm:overflow-x-hidden"
    >
      <div className="hidden sm:block absolute top-[24%] sm:top-[21%] sm:right-[-25%] right-[2%] lg:right-[-2%] lg:top-[24%] mb-[53px]">
        <Image
          src={bg}
          alt="Types of equipment background"
          className="w-[405px] h-[404px]"
        />
      </div>
      <div
        className={`${style.footer_container} flex flex-col gap-[24px] lg:gap-[27px] xl:gap-[48px] justify-center`}
      >
        <Form
          textBtn="Contact us"
          titleForm="Contact Us:"
          agreementText="I confirm that I have read and agree to"
          agreementLinkSpanText="the terms of the privacy policy"
        />
        <div className="hidden sm:block w-[1px] bg-[var(--primary-text-color)]"></div>
        <NetworksCompanies />
      </div>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
