import { PrimaryButton } from "../PrimaryButton";

const HeroSection = () => {
  return (
    <section className="pt-[133px] pb-[150px] mt-[60px] bg-hero-img bg-center bg-cover bg-no-repeat rounded-b-[20px]">
      <div className="flex flex-col gap-[46px] pl-[66px] max-w-[1512px] mx-auto">
        <h3 className="text-[var(--primary-text-color)] text-5xl leading-[60px] font-manrope font-semibold uppercase">
          World leader <br />
          <span className="text-[var(--accent-color)]">
            in mobile laser tag
          </span>
          <br />
          solutions
        </h3>
        <PrimaryButton background="white" color="black">
          Check the price
        </PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;
