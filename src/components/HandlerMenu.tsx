"use client";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function HandlerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function controller() {
    setShowMenu(!showMenu);
    console.log(showMenu);
  }

  return (
    <div
      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-lg bg-slate-50 font-normal text-slate-500 shadow-lg hover:bg-[#5a5b65] hover:text-[#fff]"
      onClick={controller}
    >
      <AiOutlineMenu />
    </div>
  );
}

export default HandlerMenu;
