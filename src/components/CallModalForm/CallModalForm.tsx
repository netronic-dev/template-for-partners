import { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { Icon } from "../Icon";

const CallForm = dynamic(() => import("../CallForm/CallForm"), {
  ssr: false,
});

interface ICallModalForm {
  isOpen: boolean;
  closeModal: () => void;
  titleForm: JSX.Element;
  destinationURL: string;
  textBtn: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  agreementText: string;
  agreementLinkSpanText: string;
  agreementLink?: string;
  submittingText: string;
}

const CallModalForm: FC<ICallModalForm> = ({
  isOpen,
  closeModal,
  titleForm,
  submittingText,
  destinationURL,
  textBtn,
  namePlaceholder,
  emailPlaceholder,
  agreementText,
  agreementLinkSpanText,
  agreementLink,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="flex justify-center relative w-full rounded-[25px] md:w-[590px] bg-[var(--primary-text-color)] pt-[50px] pb-[74px] md:pb-[81px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          onClick={closeModal}
          className="absolute top-[21px] right-[26px] bg-[var(--secondary-text-color)] w-[27px] h-[27px] rounded-full cursor-pointer flex items-center justify-center group transition-all"
        >
          <Icon
            className="text-[var(--primary-text-color)] group-hover:text-[#A9A9A9]"
            name="icon-cross"
            width={10}
            height={10}
          />
        </div>
        <div className="w-full md:w-[420px] px-[22px] md:px-0">
          <CallForm
            title={titleForm}
            namePlaceholder={namePlaceholder}
            emailPlaceholder={emailPlaceholder}
            destinationURL={destinationURL}
            textBtn={textBtn}
            submittingText={submittingText}
            agreementText={agreementText}
            agreementLinkSpanText={agreementLinkSpanText}
            agreementLink={agreementLink}
          />
        </div>
      </div>
    </div>
  );
};

export default CallModalForm;
