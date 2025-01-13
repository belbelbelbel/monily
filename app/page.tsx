import NavBar from "@/app/Component/Navbar/NavBar";
import Image from "next/image";
import Works from "./Component/Features";
import Features from "./Component/Features";
import Workings from "./Component/Workings";
import { Sponsors } from "./Component/Sponsors";
import Security from "./Component/Security";
import React from "react";
export default function Home() {
  return (
    <div className="flex flex-col md:gap-8 gap-8  lg:gap-24 2xl:gap-2 xl:gap-12 h-screen overflow-x-hidden  ">
      <div className="flex flex-col gap-32 lg:gap-20 md:gap-[0rem] xl:gap-0">
        <NavBar />
        <Features />
      </div>
      <Workings />
      {/* <Security /> */}
    </div>
  );
}
