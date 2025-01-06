import { FC, useState } from "react";
import { Controller } from "react-hook-form";
import { Icon } from "../Icon";
import style from "./style.module.css";

interface IInput {
  name: string;
  error?: string;
  rules?: object;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<IInput> = ({
  name,
  error,
  rules = {},
  control,
  label,
  onBlur,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    fieldOnBlur: () => void
  ) => {
    if (!e.target.value) {
      setIsFocused(false);
    }

    fieldOnBlur();

    onBlur?.(e);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="w-full relative">
          {label ? (
            <label className={`${style.label_wrapper}`}>
              <span
                className={`${style.label} ${
                  isFocused || field.value ? style.label_active : ""
                }`}
              >
                {label}
                <Icon name="icon-label-star" width={7} height={7} />
              </span>
              <input
                className={`outline-none placeholder:font-manrope placeholder:text-[#000] w-full rounded-[8px] h-[55px] py-[16px] px-[14px] border-solid border-[1px] ${
                  error ? "border-[var(--error-color)]" : "border-[#000]"
                } bg-[#fff]`}
                {...field}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, field.onBlur)}
              />
            </label>
          ) : (
            <input
              className={`outline-none placeholder:font-manrope placeholder:text-[#000] w-full rounded-[8px] h-[55px] py-[16px] px-[14px] border-solid border-[1px] ${
                error ? "border-[var(--error-color)]" : "border-[#000]"
              } bg-[#fff]`}
              {...field}
              placeholder={placeholder}
            />
          )}
          <p className="absolute text-[var(--error-color)] left-0 bottom-[-16px] text-[12px] font-manrope">
            {error}
          </p>
        </div>
      )}
    />
  );
};

export default Input;
