import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  // console.log('I am loging the page')
  return <>
    <Navbar/>
  <Component {...pageProps} />

  </>
  
}
