import Link from "next/link"
import ToggleTheme from "./ToggleTheme"
import { AiOutlineMenu } from "react-icons/ai"

function Menu() {
    return (
        <div className="w-full h-heightMenu justify-center overflow-x-hidden hidden lg:flex z-[20] relative dark:text-[#fff]">
            <div className="w-full h-full max-w-max-w-content flex items-center justify-between py-0 px-[30px]">
                <ul className="gap-[50px]">
                    <li className="font-[900]"><a href="/">LuciFilms</a></li>
                </ul>
                <ul className="flex gap-[50px] dark:text-[#fff] text-[#000]">
                    <li><Link className="font-[500] text-inherit" href={'/#'}>Start</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Festival</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Curtas</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'/experimentos'}>Experimentos</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Trabalhos</Link></li>
                </ul>
                <ul className="flex gap-3">
                    <li className="w-[30px] h-[30px] shadow-lg rounded-lg bg-slate-50 text-slate-500 font-normal flex justify-center items-center">
                        <AiOutlineMenu />
                    </li>
                    <li className="font-[600]">
                        <ToggleTheme />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu