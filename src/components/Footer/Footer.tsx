"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { NetworksCompanies } from "../NetworksCompanies";
import bg from "../../../public/images/footer-bg.webp";
import { FooterInfo } from "../FooterInfo";

const Form = dynamic(() => import("@/components/Form/Form"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer
      id="orderDemo"
      className="bg-[#0C0C0C] pt-[126px] pb-[40px] px-[60px] relative overflow-x-hidden"
    >
      <div className="absolute top-[24%] right-[2%] mb-[53px]">
        <Image
          src={bg}
          alt="Types of equipment background"
          className="w-[405px] h-[404px]"
        />
      </div>
      <div className="flex gap-[48px] justify-center">
        <Form
          textBtn="Contact us"
          titleForm="Зв’язатись з нами"
          agreementText="I confirm that I have read and agree to"
          agreementLinkSpanText="the terms of the privacy policy"
        />
        <div className="w-[1px] bg-[var(--primary-text-color)]"></div>
        <NetworksCompanies />
      </div>
      <FooterInfo />
    </footer>
  );
};

export default Footer;
