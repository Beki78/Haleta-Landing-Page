// pages/_app.tsx
import "../styles/globals.css"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

