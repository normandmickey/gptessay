import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="process.env.reCAPTCHA_Site_key"
      scriptProps={{
      }}>
      <Component {...pageProps} />
      <GoogleReCaptchaProvider />
    </>
  );
}

export default MyApp;
