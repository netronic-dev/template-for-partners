"use client";

import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { schema } from "@/constants/validate";
import { IFormInputs } from "@/models";
import { Input } from "../Input";
import { ChangeBudgetOptions } from "../ChangeBudgetOptions";
import { Agreement } from "../Agreement";
import { useModals } from "../../context/ModalsProvider";
import { selectBudgetOptions } from "@/constants/globalConstants";
import { PrimaryButton } from "../PrimaryButton";
import { isValidPhoneNumber } from "react-phone-number-input";

interface IFormProps {
  titleForm: string;
  textBtn: string;
  budgetPlaceholder?: string;
  agreementText: string;
  agreementLinkSpanText?: string;
  agreementLink?: string;
  submittingText?: string;
}

const Form: FC<IFormProps> = ({
  textBtn,
  titleForm,
  budgetPlaceholder,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  submittingText,
}) => {
  const [regionCode, setRegionCode] = useState<string>("");
  const modals = useModals();

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      agreement: true,
      name: "",
      email: "",
    },
  });

  const handleAgreementChange = () => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const onSubmit = async (values: IFormInputs) => {
    try {
      console.log(values);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    modals?.region
      ? setRegionCode(modals?.region.toLowerCase())
      : setRegionCode("us");
  }, [modals.region]);

  return (
    <div>
      {titleForm && (
        <h3 className="text-[var(--primary-text-color)] font-manrope text-[40px] font-medium mb-[54px] uppercase">
          {titleForm}
        </h3>
      )}
      <form
        className="flex flex-col gap-[20px] w-full lg:w-[560px] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          control={control}
          name="name"
          error={errors.name?.message}
          rules={{ required: "Name is required" }}
          label="Name"
        />
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="relative w-full">
              <PhoneInput
                inputStyle={{
                  height: "55px",
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: "8px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: errors.phoneNumber
                    ? "#d22e2e"
                    : "rgb(118, 118, 118)",
                  color: "#000",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  outline: "0",
                  fontFamily: "Manrope",
                }}
                buttonStyle={{
                  borderColor: errors.phoneNumber
                    ? "#d22e2e"
                    : "rgb(118, 118, 118)",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  fontFamily: "Manrope",
                  height: "55px",
                }}
                country={regionCode}
                enableSearch
                excludeCountries={["ru"]}
                value={value}
                onChange={onChange}
              />
              {errors.phoneNumber && (
                <p className="absolute text-[var(--error-color)] left-0 bottom-[-18px] text-[12px] font-manrope">
                  {errors.phoneNumber?.message}
                </p>
              )}
              {!errors.phoneNumber &&
                value &&
                !isValidPhoneNumber(`+${value}`) && (
                  <p className="absolute text-[var(--error-color)] left-0 bottom-[-18px] text-[12px] font-manrope">
                    Invalid phone number
                  </p>
                )}
            </div>
          )}
        />
        <Input
          control={control}
          name="email"
          error={errors.email?.message}
          rules={{ required: "Email is required" }}
          label="Email"
        />
        <ChangeBudgetOptions
          options={selectBudgetOptions}
          control={control}
          name="budget"
          error={errors.budget?.message}
          placeholder="Budget range"
        />
        <Agreement
          agreementText={agreementText}
          agreementLinkSpanText={agreementLinkSpanText}
          agreementLink={agreementLink}
          error={errors.agreement?.message}
          control={control}
          onClick={handleAgreementChange}
          name="agreement"
        />
        <PrimaryButton
          type="submit"
          size="full"
          background="blue"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? submittingText || "Submitting..." : textBtn}
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Form;
