"use client";

import Apresentation from "../components/Apresentation";
import Services from "../components/Services/Services";

export default function HomePage() {
  return (
    <>
      <div className="h-fit flex w-full flex-col items-center justify-center dark:bg-[#2c2d36]">
        <Apresentation />
        <Services />
      </div>
    </>
  );
}
