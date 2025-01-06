import Link from "next/link";
import { PrimaryButton } from "../PrimaryButton";

const HeroSection = () => {
  return (
    <section className="pt-[161px] xl:pt-[133px] pb-[257px] xl:pb-[150px] mt-[60px] bg-mobile-hero-img sm:bg-tablet-hero-img lg:bg-big-tablet-hero-img xl:bg-hero-img bg-center bg-cover bg-no-repeat rounded-b-[20px]">
      <div className="flex flex-col items-center sm:items-start gap-[46px] sm:pl-[21px] xl:pl-[66px] max-w-[1512px] mx-auto">
        <h3 className="text-[var(--primary-text-color)] text-center sm:text-start text-[32px] sm:text-[38px] lg:text-5xl leading-normal lg:leading-[60px] font-manrope font-medium sm:font-semibold uppercase">
          World leader <br />
          <span className="text-[var(--accent-color)]">
            in mobile laser tag
          </span>
          <br />
          solutions
        </h3>
        <Link prefetch href="#contacts">
          <PrimaryButton background="white" color="black">
            Check the price
          </PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
