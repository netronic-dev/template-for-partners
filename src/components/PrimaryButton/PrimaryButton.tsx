import { FC, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import style from "./style.module.css";

interface Props {
  children?: ReactNode;
  size?: "standard" | "full";
  background?: "black" | "white" | "blue";
  color?: "black" | "white";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  variant?: VariantProps<typeof button>["intent"];
  disabled?: boolean;
  className?: string;
}

const button = cva("button", {
  variants: {
    intent: {
      order: [
        "flex justify-center items-center",
        "border-[1px] border-solid border-transparent rounded-[100px]",
        "font-semibold uppercase font-manrope",
        "transition-colors cursor-pointer",
      ],
    },
    size: {
      standard: ["text-sm tracking-[0.28px] w-[199px] h-[43px]"],
      full: ["text-base leading-[23px] font-bold w-full h-[56px]"],
    },
    background: {
      black: [
        "bg-[var(--secondary-text-color)] hover:bg-[transparent] hover:border-[var(--secondary-text-color)]",
      ],
      white: [
        "bg-[var(--primary-text-color)] hover:bg-[transparent] hover:border-[var(--primary-text-color)]",
      ],
      blue: [
        "bg-[var(--accent-color)] hover:bg-[var(--primary-text-color)] hover:border-[var(--accent-color)] rounded-[8px]",
      ],
    },
    color: {
      black: [
        "text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)]",
      ],
      white: [
        "text-[var(--primary-text-color)] hover:text-[var(--secondary-text-color)]",
      ],
    },
  },
  defaultVariants: {
    intent: "order",
    size: "standard",
    background: "black",
    color: "white",
  },
});

const PrimaryButton: FC<Props> = ({
  children,
  type,
  onClick,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${button({ ...props, intent: "order" })} ${style.button} ${
        className && className
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
