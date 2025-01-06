import Image from "next/image";
import imgOne from "../../../public/images/company_mission_1.webp";
import imgTwo from "../../../public/images/company_mission_2.webp";

const CompanyMissionSection = () => {
  return (
    <section className="py-[96px] lg:py-[89px] lg:px-[65px]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-[57px] gap-x-8">
        <div className="flex flex-col justify-center gap-4 max-w-[500px] pl-[15px] pr-[40px] sm:pl-[22px] sm:pr-[16px] lg:pl-0">
          <h2 className="text-[40px] lg:text-[50px] leading-[130%] font-semibold uppercase">
            Netronic’s <br />
            <span className="text-[var(--accent-color)]">Mission:</span>
          </h2>
          <p className="text-base lg:text-lg leading-[24px] font-medium">
            Create unique, high-tech solutions that bring people together all
            over the world.
          </p>
        </div>
        <div>
          <Image
            src={imgOne}
            alt="Команда Netronic"
            className="rounded-xl object-cover w-full"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={imgTwo}
            alt="Child with Netronic"
            className="rounded-xl object-cover w-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 max-w-[500px] pl-[15px] sm:pl-[22px] pr-[40px] sm:pr-[16px] lg:pl-0">
          <h2 className="text-[40px] lg:text-[50px] leading-[130%] font-semibold uppercase">
            NETRONIC’s <br />
            <span className="text-[var(--accent-color)]">Goals:</span>
          </h2>
          <p className="text-base lg:text-lg leading-[24px] font-medium">
            To enhance people’s leisure time by making them active, cheerful,
            willing to unite and communicate, through the creation of high-tech
            solutions for sports and entertainment that have a positive impact.
          </p>
        </div>
        <div className="sm:hidden">
          <Image
            src={imgTwo}
            alt="Child with Netronic"
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyMissionSection;
