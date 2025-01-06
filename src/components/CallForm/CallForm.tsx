import { FC, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { searchParams } from "../../store/searchParamsSlice";
import { useModals } from "@/context/ModalsProvider";
import { ICallFormInputs } from "@/models";
import { Agreement } from "../Agreement";
import { PrimaryButton } from "../PrimaryButton";
import { Input } from "../Input";
import { schema } from "@/constants/callValidate";

interface ICallForm {
  title: JSX.Element;
  destinationURL: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  agreementText: string;
  agreementLinkSpanText: string;
  agreementLink?: string;
  textBtn: string;
  submittingText: string;
}

const CallForm: FC<ICallForm> = ({
  title,
  namePlaceholder,
  emailPlaceholder,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
  textBtn,
  submittingText,
  destinationURL,
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
    },
  });

  const handleAgreementChange = () => {
    setValue("agreement", !getValues("agreement"));
    trigger("agreement");
  };

  const queryParams = useSelector(searchParams);
  const query = useSearchParams();

  const onSubmit = async (values: ICallFormInputs) => {
    modals?.setUserName(values.name);

    const data = {
      ...values,
      phoneNumber: `+${values.phoneNumber}`,
    };

    try {
      const sendToCRMData = {
        data,
        destinationURL: destinationURL,
        orderName: "Call order | LT NET USA",
        pageURL: window.location.href,
        hostname: window.location.hostname,
        queryParams: queryParams || query,
      };

      console.log(sendToCRMData, "sendToCRMData");

      reset();

      modals.closeModal();
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (modals?.region) {
      setRegionCode(modals.region.toLowerCase());
    } else {
      setRegionCode("us");
    }
  }, [modals.region]);

  return (
    <div>
      {title && (
        <h3 className="text-[var(--secondary-text-color)] font-manrope text-[36px] leading-[43px] font-extrabold text-center">
          {title}
        </h3>
      )}
      <form
        className="flex flex-col gap-[20px] w-full mx-auto mt-[46px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          control={control}
          name="name"
          placeholder={namePlaceholder}
          error={errors.name?.message}
          rules={{ required: "Name is required" }}
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
          placeholder={emailPlaceholder}
          error={errors.email?.message}
          rules={{ required: "Email is required" }}
        />
        <Agreement
          agreementText={agreementText}
          agreementLinkSpanText={agreementLinkSpanText}
          agreementLink={agreementLink}
          error={errors.agreement?.message}
          control={control}
          onClick={handleAgreementChange}
          name="agreement"
          isCallForm
        />
        <PrimaryButton
          type="submit"
          disabled={!isValid || isSubmitting}
          size="full"
        >
          {isSubmitting ? submittingText || "Submitting..." : textBtn}
        </PrimaryButton>
      </form>
    </div>
  );
};

export default CallForm;
