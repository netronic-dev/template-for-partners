import { footerInfoList } from "@/constants/globalConstants";
import style from "./style.module.css";

const FooterInfo = () => {
  return (
    <ul className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-between xl:justify-center xl:gap-[140px] mt-[53px]">
      {footerInfoList.map((item) => (
        <li key={item.id} className="flex flex-col">
            <h2 className="text-[var(--accent-color)] font-manrope text-sm leading-normal uppercase mb-[14px]">
              {item.title}
            </h2>
            {item.address && (
              <>
                <h3 className="text-[var(--primary-text-color)] font-manrope text-xs leading-normal">
                  {item.addressTitle}
                </h3>
                <h4 className="max-w-[312px] text-[var(--primary-text-color)] font-medium font-manrope text-2xl leading-[28px] mb-[30px]">
                  {item.address}
                </h4>
              </>
            )}
            <h3 className="text-[var(--primary-text-color)] font-manrope text-xs leading-normal">
              {item.emailTitle}
            </h3>
            <a
              href={`mailto:${item.email}`}
              className="text-[var(--primary-text-color)] hover:text-[var(--grey-color)] transition-all font-medium font-manrope text-2xl leading-[28px] mb-[30px]"
            >
              {item.email}
            </a>
            {item.phone && (
              <>
                <h3 className="text-[var(--primary-text-color)] font-manrope text-xs leading-normal">
                  {item.phoneTitle}
                </h3>
                <a
                  href={`tel:${item.phone.replace(/\s+/g, "")}`}
                  className="text-[var(--primary-text-color)] transition-all hover:text-[var(--grey-color)] font-medium font-manrope text-2xl leading-[28px] mb-[30px]"
                >
                  {item.phone}
                </a>
              </>
            )}
            <h3 className="text-[var(--primary-text-color)] font-manrope text-xs leading-normal">
              {item.whatsAppTitle}
            </h3>
            <a
              href={`https://wa.me/${item.whatsApp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-text-color)] hover:text-[var(--grey-color)] transition-all font-medium font-manrope text-2xl leading-[28px] mb-[30px]"
            >
              {item.whatsApp}
            </a>
          {item.text && (
            <>
              <h3 className="max-w-[223px] text-[var(--primary-text-color)] font-manrope text-sm leading-normal mb-[9px]">
                {item.text}
              </h3>
              <a
                href={`mailto:${item.secondEmail}`}
                className={`${style.underline} text-[var(--primary-text-color)] transition-all hover:text-[var(--grey-color)] font-medium font-manrope text-2xl leading-[22px]`}
              >
                {item.secondEmail}
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterInfo;
