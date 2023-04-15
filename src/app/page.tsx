'use client'

import { DiPhotoshop } from "react-icons/di"
import { MdOutlineAnimation, MdOutlineVideoSettings } from "react-icons/md"
import Apresentation from "../components/Apresentation"

export default function HomePage() {
    return (
        <>
            <div className="w-full h-fit flex justify-center items-center flex-col">
                <Apresentation />
                <div className="flex flex-col max-w-max-w-content w-full min-h-[200px] justify-center items-center mb-40">
                    <h1 className="font-[400] text-[30px] mb-20">Ultimo Projeto Realizado</h1>
                    <iframe
                        className="w-full max-h-[100dvh] h-[700px] p-5"
                        src="https://www.youtube.com/embed/ZKyUkvllalY"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen />
                </div>
                {/* <div className={styles.services}>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <DiPhotoshop />
                        </div>
                        <div className={styles.txt}>
                            <h1>Imagens Estáticas</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, fuga! Illo perferendis magnam vel ullam voluptates dicta cum nesciunt quos voluptatum quam eligendi, minima veniam vero autem maiores expedita quod.
                            </p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <MdOutlineAnimation />
                        </div>
                        <div className={styles.txt}>
                            <h1>Animações Diversas</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, fuga! Illo perferendis magnam vel ullam voluptates dicta cum nesciunt quos voluptatum quam eligendi, minima veniam vero autem maiores expedita quod.
                            </p>
                        </div>
                    </div>
                    <div className={styles.service}>
                        <div className={styles.icon}>
                            <MdOutlineVideoSettings />
                        </div>
                        <div className={styles.txt}>
                            <h1>Montagem e Edição</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, fuga! Illo perferendis magnam vel ullam voluptates dicta cum nesciunt quos voluptatum quam eligendi, minima veniam vero autem maiores expedita quod.
                            </p>
                        </div>
                    </div>
                </div > */}
                {/* <div className={styles.sections}>
                    <Section img={'/pernalonga2.png'} title="pernalonga" />
                    <Section img={'/morcego.png'} title="morcego" />
                    <Section img={'/morcego.png'} title="morcego" />
                </div> */}
            </div >
        </>
    )
}
