import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";
import Link from "next/link";

function Apresentation() {
  return (
    <div
      className="relative z-[1] my-10 flex min-h-[80dvh] w-full max-w-max-w-content flex-wrap items-center justify-center
        gap-[60px] before:absolute before:left-[-400px] before:top-[-200px] before:h-[50em] before:w-[50em] before:rounded-[60%] before:bg-[#96969611] before:content-['a']
        dark:bg-[#2c2d36]"
    >
      <div className="flex max-w-[250px] flex-col dark:text-[#bbb]">
        <h1 className="flex text-[20px] font-[600] text-[#bbbbbb]">
          Olá, sou <br />
        </h1>
        <h1 className="mb-[20px] flex text-[60px] font-[600] text-[#424242] dark:text-[#fff]">
          Luci
        </h1>
        <h2 className="mt-[30px] flex text-[14px]">
          Crio experiências visuais e sonoras, gosto de entregar valor com o meu
          trabalho e me sinto confortável em explorar diferentes formas de arte.
        </h2>
        <div className="mt-[30px] flex gap-[10px]">
          <Link
            className="flex h-[30px] w-fit items-center justify-center rounded-[30px] border-[#121212] bg-[#ececec69] px-[15px] py-[20px] text-[15px] text-[#121212]"
            href={"#"}
          >
            Contate-me
          </Link>
          <Link
            className="flex h-[30px] w-fit items-center justify-center rounded-[30px] border-[#3c3c3c] bg-[#3c3c3c] px-[15px] py-[20px] text-[15px] text-[#fff]"
            href={"#"}
          >
            Projetos
          </Link>
        </div>
      </div>
      <div className="absolute left-[20px] z-[2] flex flex-col gap-[30px]  lg:flex-col">
        <Link
          href={"https://www.instagram.com/luci_lua81/"}
          className="text-[20px] text-[#121212] opacity-[0.8] transition-[0.3s] hover:scale-[1.1] hover:opacity-[1] hover:transition-[0.3s] dark:text-[#fff]"
        >
          <BsInstagram />
        </Link>
        <a
          className="text-[20px] text-[#121212] opacity-[0.8] transition-[0.3s] hover:scale-[1.1] hover:opacity-[1] hover:transition-[0.3s] dark:text-[#fff]"
          href="mailto:luci.lua81@gmail.com?subject=LuciLua | Cinema Portfólio&cc=luci.lua81@gmail.com&body=Olá, sou _____. Vim através do seu portfólio de artes e gostaria de entrar em contato com você!"
        >
          <AiOutlineMail />
        </a>
        <Link
          href={"https://github.com/lucilua"}
          className="text-[20px] text-[#121212] opacity-[0.8] transition-[0.3s] hover:scale-[1.1] hover:opacity-[1] hover:transition-[0.3s] dark:text-[#fff]"
        >
          <FiGithub />
        </Link>
        <Link
          href={"https://twitter.com/L4dev"}
          className="text-[20px] text-[#121212] opacity-[0.8] transition-[0.3s] hover:scale-[1.1] hover:opacity-[1] hover:transition-[0.3s] dark:text-[#fff]"
        >
          <FiTwitter />
        </Link>
        <Link
          href={"https://www.youtube.com/@lucia8161"}
          className="text-[20px] text-[#121212] opacity-[0.8] transition-[0.3s] hover:scale-[1.1] hover:opacity-[1] hover:transition-[0.3s] dark:text-[#fff]"
        >
          <SlSocialYoutube />
        </Link>
      </div>
      <div className="h-[250px] max-h-[250px] min-h-[250px] w-[250px] min-w-[250px] max-w-[250px] overflow-hidden rounded-[60%]">
        <img
          src="https://avatars.githubusercontent.com/u/43728964?v=4"
          className="h-[300px] w-[250px] object-cover"
          alt="img"
        />
      </div>
    </div>
  );
}

export default Apresentation;
