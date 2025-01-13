import NavBar from "@/app/Component/Navbar/NavBar";
import Image from "next/image";
import Works from "./Component/Howitworks/Features";
import Features from "./Component/Howitworks/Features";
import Workings from "./Component/Howitworks/Workings";
import { Sponsors } from "./Component/Sponsors";
import Security from "./Component/Howitworks/Security";
export default function Home() {
  return (
    <div className="flex flex-col gap-32 md:gap-64 xl:gap-12 h-screen overflow-x-hidden  ">
      <div className="flex flex-col gap-56 md:gap-[14rem] xl:gap-[15rem]">
        <NavBar />
        <Features />
      </div>
      <Workings />
      {/* <Security /> */}
    </div>
  );
}
