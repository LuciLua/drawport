'use client'

import Link from "next/link"
import ToggleTheme from "./ToggleTheme"
import { AiOutlineMenu } from "react-icons/ai"
import HandlerMenu from "./HandlerMenu"

function Menu() {


    function open() {
        let ham = document.getElementById('ham')

        if (ham.classList.contains('flex')) {
            ham.classList.remove('flex')
            ham.classList.add('hidden')
        }
        else if (ham.classList.contains('hidden')) {
            ham.classList.remove('hidden')
            ham.classList.add('flex')
            ham.classList.add('flex-col')
        }
    }

    return (
        <div className="w-full lg:h-heightMenu justify-center overflow-x-hidden flex z-[20] relative dark:text-[#fff] h-[fit-content] min-h-[50px]">
            <div className="w-full h-full max-w-max-w-content flex items-center justify-between px-[30px] py-3">
                <ul className="gap-[50px] hidden lg:flex">
                    <li className="font-[900]"><a href="/">LuciFilms</a></li>
                </ul>
                <ul className="gap-[50px] dark:text-[#fff] text-[#000] hidden lg:flex lg:mt-0 mt-[50px] w-full items-center justify-center" id="ham">
                    <li><Link className="font-[500] text-inherit" href={'/#'}>Start</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Festival</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Curtas</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'/experimentos'}>Experimentos</Link></li>
                    <li><Link className="font-[500] text-inherit" href={'#'}>Trabalhos</Link></li>
                </ul>
                <ul className="flex gap-3 mr-3 top-5 right-5 absolute">
                    <li className="font-[600] lg:hidden flex" onClick={open}>
                        <HandlerMenu />
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