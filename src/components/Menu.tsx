import Link from "next/link"

function Menu() {
    return (
        <div className="w-full h-heightMenu justify-center overflow-x-hidden hidden lg:flex">
            <div className="w-full h-full max-w-max-w-content flex items-center justify-between py-0 px-[30px]">
                <ul className="gap-[50px]">
                    <li className="font-[900]">LuciFilms</li>
                </ul>
                <ul className="flex gap-[50px]">
                    <li><Link className="text-[#000] font-[500]" href={'/#'}>Start</Link></li>
                    <li><Link className="text-[#000] font-[500]" href={'#'}>Festival</Link></li>
                    <li><Link className="text-[#000] font-[500]" href={'#'}>Curtas</Link></li>
                    <li><Link className="text-[#000] font-[500]" href={'/experimentos'}>Experimentos</Link></li>
                    <li><Link className="text-[#000] font-[500]" href={'#'}>Trabalhos</Link></li>
                </ul>
                <ul>
                    <li className="font-[600]">=</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu