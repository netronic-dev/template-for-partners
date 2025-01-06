import { FC } from "react";
import { Controller } from "react-hook-form";
import style from "./style.module.css";

interface IAgreement {
  error?: string;
  agreementText: string;
  agreementLinkSpanText: string | undefined;
  agreementLink?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  onClick: () => void;
  isCallForm?: boolean;
  isWinnerForm?: boolean;
}
const Agreement: FC<IAgreement> = ({
  error,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  control,
  name,
  onClick,
}) => {
  return (
    <div className="relative mb-[15px]">
      <div className="flex items-start lg:items-center gap-[11px]">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className={`${style.agreement}`}>
              <button
                aria-label="Change checkbox"
                type="button"
                onClick={onClick}
                className={`${style.checkBox} ${
                  field.value ? style.checkBox_active : ""
                }`}
              >
                <div className={style.checkBox_inside} />
              </button>
            </div>
          )}
        />
        <label
          className="font-manrope text-[var(--primary-text-color)] text-xs
           leading-[23px]"
          htmlFor={name}
        >
          {agreementText}{" "}
          <span
            className="text-[var(--accent-color)]
             cursor-pointer underline"
          >
            <a href={agreementLink ? agreementLink : "/privacy"}>
              {agreementLinkSpanText}
            </a>
          </span>
        </label>
      </div>
      {error && (
        <p className="absolute text-[var(--error-color)] left-0 bottom-[-16px] text-[12px] font-manrope">
          {error}
        </p>
      )}
    </div>
  );
};
export default Agreement;
