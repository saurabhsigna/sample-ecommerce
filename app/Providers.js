"use client";
import dynamic from "next/dynamic";
// import Navbar from "@components/navbar/Navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
const Navbar = dynamic(() => import("@components/navbar/Navbar"), {
  ssr: false,
});
import { RecoilRoot } from "recoil";

export default function Providers({ children }) {
  return (
    <RecoilRoot>
      <ProgressBar
        height="4px"
        color="#e76731"
        options={{ showSpinner: true }}
        shallowRouting
      />
      <Navbar />
      {children}
    </RecoilRoot>
  );
}
