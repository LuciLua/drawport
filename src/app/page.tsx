"use client";

import { DiPhotoshop } from "react-icons/di";
import { MdOutlineAnimation, MdOutlineVideoSettings } from "react-icons/md";
import Apresentation from "../components/Apresentation";
import Services from "../components/Services/Services";

export default function HomePage() {
  return (
    <>
      <div className="h-fit flex w-full flex-col items-center justify-center dark:bg-[#2c2d36]">
        <Apresentation />
        <Services />
        <div className="mb-40 flex min-h-[200px] w-full max-w-max-w-content flex-col items-center justify-center">
          <h1 className="mb-20 text-[30px] font-[400]">
            Ultimo Projeto Realizado
          </h1>
          <iframe
            className="h-[100dvh] max-h-[100dvh] w-[100dvw] p-5"
            src="https://www.youtube.com/embed/ZKyUkvllalY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {/* <div className={styles.sections}>
                    <Section img={'/pernalonga2.png'} title="pernalonga" />
                    <Section img={'/morcego.png'} title="morcego" />
                    <Section img={'/morcego.png'} title="morcego" />
                </div> */}
      </div>
    </>
  );
}
