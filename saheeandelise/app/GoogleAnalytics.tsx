"use client";
import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
  return (
    <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    onLoad={() => {
      const win: any = window;
      win.dataLayer = win.dataLayer || [];
      function gtag(...args: (string | Date)[]) {
        win.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_TRACKING_ID);
    }}
  />
  );
};

export default GoogleAnalytics;