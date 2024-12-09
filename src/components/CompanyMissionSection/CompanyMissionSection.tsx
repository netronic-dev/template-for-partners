import Image from "next/image";
import imgOne from "../../../public/images/company_mission_1.webp";
import imgTwo from "../../../public/images/company_mission_2.webp";

const CompanyMissionSection = () => {
  return (
    <section className="grid grid-cols-2 gap-y-[57px] gap-x-8 py-[89px] px-[65px]">
      <div className="flex flex-col justify-center gap-4 max-w-[500px]">
        <h2 className="text-[50px] leading-[130%] font-semibold uppercase">
          МІСІЯ КОМПАНІЇ <br />
          <span className="text-[var(--accent-color)]">NETRONIC:</span>
        </h2>
        <p className="text-lg leading-[24px] font-medium">
          Створювати унікальні hi-tech рішення, які об&apos;єднують людей у
          команди в усьому світі.
        </p>
      </div>

      <div>
        <Image
          src={imgOne}
          alt="Команда Netronic"
          className="rounded-xl object-cover w-full"
        />
      </div>
      <div>
        <Image
          src={imgTwo}
          alt="Child with Netronic"
          className="rounded-xl object-cover w-full"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 max-w-[500px]">
        <h2 className="text-[50px] leading-[130%] font-semibold uppercase">
          ЦІЛЬ КОМПАНІЇ <br />
          <span className="text-[var(--accent-color)]">NETRONIC:</span>
        </h2>
        <p className="text-lg leading-[24px] font-medium">
          Поліпшити дозвілля людей, роблячи їх активними, життєрадісними,
          охочими об’єднуватися та спілкуватися, створюючи високотехнологічні
          рішення для розваг і спорту, що викликають wow-ефект.
        </p>
      </div>
    </section>
  );
};

export default CompanyMissionSection;
