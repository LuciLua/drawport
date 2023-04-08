import BigSection from "../components/BigSection/BigSection"
import Section from "../components/Section/Section"
import styles from "../styles/pages/Home.module.scss"
import { DiPhotoshop } from "react-icons/di"
import { MdOutlineAnimation, MdOutlineVideoSettings } from "react-icons/md"

import { BsInstagram } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter, FiGithub } from "react-icons/fi"
import { SlSocialYoutube } from "react-icons/sl"

import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
    return (
        <div className={styles.container}>
            {/* <BigSection /> */}
            <div className={styles.apresentation}>
                <div className={styles.txt}>
                    <h1>Olá, sou <br /></h1>
                    <h1>Luci</h1>
                    <h2>Crio experiências visuais e sonoras, gosto de entregar valor com o meu trabalho e me sinto confortável em explorar diferentes formas de arte.</h2>
                    <div className={styles.btn_collection}>
                        <Link href={'#'}>Contate-me</Link>
                        <Link href={'#'}>Projetos</Link>
                    </div >
                </div >
                <div className={styles.c_social}>
                    <Link href={'https://www.instagram.com/luci_lua81/'}>
                        <BsInstagram />
                    </Link>
                    <a href="mailto:luci.lua81@gmail.com?subject=LuciLua | Cinema Portfólio&cc=luci.lua81@gmail.com&body=Olá, sou _____. Vim através do seu portfólio de artes e gostaria de entrar em contato com você!">
                        <AiOutlineMail />
                    </a>
                    <Link href={'https://github.com/lucilua'}>
                        <FiGithub />
                    </Link>
                    <Link href={'https://twitter.com/L4dev'}>
                        <FiTwitter />
                    </Link>
                    <Link href={'https://www.youtube.com/@lucia8161'}>
                        <SlSocialYoutube />
                    </Link>
                </div >
                <div className={styles.c_img}>
                    <img src="https://avatars.githubusercontent.com/u/43728964?v=4" alt="img" />
                </div >
            </div >
            <div className={styles.services}>
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
            </div >
            <div className={styles.sections}>
                <Section img={'/pernalonga2.png'} title="pernalonga" />
                <Section img={'/morcego.png'} title="morcego" />
                <Section img={'/morcego.png'} title="morcego" />
            </div>
        </div >
    )
}
