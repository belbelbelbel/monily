import NavBar from "@/app/Component/Navbar/NavBar";
import Image from "next/image";
import Works from "./Component/Howitworks/Features";
import Features from "./Component/Howitworks/Features";
import Workings from "./Component/Howitworks/Workings";
import { Sponsors } from "./Component/Sponsors";
export default function Home() {
  return (
    <div className="flex flex-col gap-32 md:gap-12 overflow-x-auto ">
      <div className="flex flex-col gap-52 md:gap-10">
        <NavBar />
        <Features />
      </div>
      {/* <Sponsors/> */}
      <Workings />
    </div>
  );
}
