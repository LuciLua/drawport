'use client'

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai"

function HandlerMenu() {

    const [showMenu, setShowMenu] = useState(false);

    function controller() {
      setShowMenu(!showMenu);
      console.log(showMenu)
    }

    return (
        <div className="w-[30px] h-[30px] shadow-lg rounded-lg bg-slate-50 text-slate-500 font-normal flex justify-center items-center cursor-pointer hover:bg-[#5a5b65] hover:text-[#fff]"
            onClick={controller}>
            <AiOutlineMenu />
        </div>
    )
}

export default HandlerMenu