import { BsInstagram } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { FiTwitter, FiGithub } from "react-icons/fi"
import { SlSocialYoutube } from "react-icons/sl"
import Link from "next/link"

function Apresentation() {
    return (
        <div className="w-full max-w-max-w-content flex justify-center items-center flex-wrap gap-[60px] min-h-[80dvh] my-10 relative
        before:bg-[#96969611] before:w-[50em] before:h-[50em] before:absolute before:top-[-200px] before:left-[-400px] before:content-['a'] z-[1] before:rounded-[60%]
        dark:bg-[#2c2d36]">
            <div className="max-w-[250px] flex flex-col dark:text-[#bbb]">
                <h1 className="text-[20px] font-[600] text-[#bbbbbb] flex">Olá, sou <br /></h1>
                <h1 className="text-[60px] font-[600] text-[#424242] flex mb-[20px] dark:text-[#fff]">Luci</h1>
                <h2 className="text-[14px] flex mt-[30px]">Crio experiências visuais e sonoras, gosto de entregar valor com o meu trabalho e me sinto confortável em explorar diferentes formas de arte.</h2>
                <div className="flex gap-[10px] mt-[30px]">
                    <Link className="rounded-[30px] border-[#121212] px-[15px] py-[20px] bg-[#ececec69] w-fit h-[30px] text-[#121212] flex justify-center items-center text-[15px]" href={'#'}>Contate-me</Link>
                    <Link className="rounded-[30px] border-[#3c3c3c] px-[15px] py-[20px] bg-[#3c3c3c] w-fit h-[30px] text-[#fff] flex justify-center items-center text-[15px]" href={'#'}>Projetos</Link>
                </div >
            </div >
            <div className="absolute flex-col gap-[30px] left-[20px] z-[2] hidden lg:flex">
                <Link href={'https://www.instagram.com/luci_lua81/'} className="dark:text-[#fff] text-[#121212] text-[20px] opacity-[0.8] transition-[0.3s] hover:opacity-[1] hover:scale-[1.1] hover:transition-[0.3s]">
                    <BsInstagram />
                </Link>
                <a className="dark:text-[#fff] text-[#121212] text-[20px] opacity-[0.8] transition-[0.3s] hover:opacity-[1] hover:scale-[1.1] hover:transition-[0.3s]" href="mailto:luci.lua81@gmail.com?subject=LuciLua | Cinema Portfólio&cc=luci.lua81@gmail.com&body=Olá, sou _____. Vim através do seu portfólio de artes e gostaria de entrar em contato com você!">
                    <AiOutlineMail />
                </a>
                <Link href={'https://github.com/lucilua'} className="dark:text-[#fff] text-[#121212] text-[20px] opacity-[0.8] transition-[0.3s] hover:opacity-[1] hover:scale-[1.1] hover:transition-[0.3s]">
                    <FiGithub />
                </Link>
                <Link href={'https://twitter.com/L4dev'} className="dark:text-[#fff] text-[#121212] text-[20px] opacity-[0.8] transition-[0.3s] hover:opacity-[1] hover:scale-[1.1] hover:transition-[0.3s]">
                    <FiTwitter />
                </Link>
                <Link href={'https://www.youtube.com/@lucia8161'} className="dark:text-[#fff] text-[#121212] text-[20px] opacity-[0.8] transition-[0.3s] hover:opacity-[1] hover:scale-[1.1] hover:transition-[0.3s]">
                    <SlSocialYoutube />
                </Link>
            </div >
            <div className="rounded-[60%] overflow-hidden w-[250px] h-[250px] max-w-[250px] max-h-[250px] min-w-[250px] min-h-[250px]">
                <img src="https://avatars.githubusercontent.com/u/43728964?v=4" className="object-cover w-[250px] h-[300px]" alt="img" />
            </div >
        </div >
    )
}

export default Apresentation