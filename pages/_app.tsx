import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6Lftcz8lAAAAAENjjkwEmLbgSSFzHW143DVodfmW"
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}>
      <Component {...pageProps} />
      <GoogleReCaptchaProvider />
    </>
  );
}

export default MyApp;
