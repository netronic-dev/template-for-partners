"use client";

import Head from "next/head";
import { useEffect } from "react";
import { useModals } from "../../context/ModalsProvider";
import { getLocationData } from "@/utils/getLocationData";

const PageLayout = (props: any) => {
  const modals = useModals();

  useEffect(() => {
    getLocationData().then((data: any) => {
      modals.setRegionName(data.region);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{props.title || "Lasertag"}</title>
        <meta name="description" content={props.description || ""} />
        {props.title && <meta property="og:title" content={props.title} />}
        {props.description && (
          <meta property="og:description" content={props.description} />
        )}
        <meta property="og:type" content={props.ogType} />
        {props.ogUrl && <meta property="og:url" content={props.ogUrl} />}
        {props.ogImage && <meta property="og:image" content={props.ogImage} />}
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
      <main>{props.children}</main>
    </>
  );
};

export default PageLayout;
