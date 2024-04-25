// GoogleAnalytics.tsx

import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
    // console.log('GoogleAnalytics');
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-TQQ519GY91"}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config','G-TQQ519GY91', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
