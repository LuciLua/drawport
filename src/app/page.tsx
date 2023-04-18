'use client'

import { DiPhotoshop } from "react-icons/di"
import { MdOutlineAnimation, MdOutlineVideoSettings } from "react-icons/md"
import Apresentation from "../components/Apresentation"
import Services from "../components/Services/Services"

export default function HomePage() {
    return (
        <>
            <div className="w-full h-fit flex justify-center items-center flex-col">
                <Apresentation />
                <Services />
                <div className="flex flex-col max-w-max-w-content w-full min-h-[200px] justify-center items-center mb-40">
                    <h1 className="font-[400] text-[30px] mb-20">Ultimo Projeto Realizado</h1>
                    <iframe
                        className="w-[100dvw] max-h-[100dvh] h-[100dvh] p-5"
                        src="https://www.youtube.com/embed/ZKyUkvllalY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>
                {/* <div className={styles.sections}>
                    <Section img={'/pernalonga2.png'} title="pernalonga" />
                    <Section img={'/morcego.png'} title="morcego" />
                    <Section img={'/morcego.png'} title="morcego" />
                </div> */}
            </div >
        </>
    )
}
