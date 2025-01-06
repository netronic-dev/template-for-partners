import { networksCompaniesList } from "@/constants/globalConstants";
import { Icon } from "../Icon";
import Link from "next/link";
import { useIsTablet } from "@/hooks";
import style from "./style.module.css";

const NetworksCompanies = () => {
  const isTablet = useIsTablet(1280);

  return (
    <div>
      <p className="text-[var(--primary-text-color)] text-[19px] mb-[30px] max-w-[411px]">
        Follow us on social media for updates and behind-the-scenes content:
      </p>
      <ul
        className={`${style.networks_companies_list} flex flex-wrap justify-between items-baseline gap-[20px]`}
      >
        {networksCompaniesList.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col ${
              item.titleIcon === "icon-logo"
                ? "lg:flex-col lg:items-start xl:flex-row xl:items-center"
                : "lg:flex-row lg:items-center"
            }`}
            style={{
              gap: isTablet ? item.insideListGap : "20px",
            }}
          >
            <Icon
              name={item.titleIcon}
              width={item.widthLogo}
              height={item.heightLogo}
              className="text-[var(--primary-text-color)]"
            />
            <ul className="w-fit flex items-center gap-[30px] py-[10px] px-[20px] rounded-[20px] border-solid border-[1px] border-[#787878] cursor-pointer">
              {item.list.map((item) => (
                <li key={item.id}>
                  <Link
                    aria-label="Link to social network"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--primary-text-color)] hover:text-[var(--grey-color)] cursor-pointer transition-all"
                  >
                    <Icon
                      name={item.icon}
                      width={item.widthLogo ? item.widthLogo : 26}
                      height={item.heightLogo ? item.heightLogo : 26}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NetworksCompanies;
