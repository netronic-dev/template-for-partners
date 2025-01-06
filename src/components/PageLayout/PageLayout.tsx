"use client";

import Head from "next/head";
import { FC, useEffect } from "react";
import { useModals } from "../../context/ModalsProvider";
import { getLocationData } from "@/utils/getLocationData";
import { CallModalForm } from "../CallModalForm";

interface IPageLayout {
  title?: string;
  description?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({
  title,
  description,
  ogType,
  ogUrl,
  ogImage,
  children,
}) => {
  const modals = useModals();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getLocationData().then((data: any) => {
      modals.setRegionName(data.region);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title || "Lasertag"}</title>
        <meta name="description" content={description || ""} />
        {title && <meta property="og:title" content={title} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta property="og:type" content={ogType} />
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Head>
      {/* <CookieBanner
        title={
          <>
            We use{" "}
            <Link prefetch href="/privacy">
              cookies
            </Link>{" "}
            on our site
          </>
        }
        text="On our website, cookies are used to collect information about traffic on the site and to analyze the usage of our site by visitors."
        decline_btn_text="Decline"
        allow_btn_text="Allow Cookie"
      /> */}
      {modals.callFormVisibility ? (
        <CallModalForm
          isOpen={modals.callFormVisibility}
          closeModal={modals.formCallChangeVisibility}
          titleForm={
            <>
              Fill out the form and <br />{" "}
              <span className="text-[var(--accent-color)]">get request</span>
            </>
          }
          destinationURL=""
          textBtn="Get request"
          submittingText="Sending..."
          namePlaceholder="Name*"
          emailPlaceholder="Email*"
          agreementText="I confirm that I have read and agree to"
          agreementLinkSpanText="the terms of the privacy policy"
        />
      ) : (
        ""
      )}
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
