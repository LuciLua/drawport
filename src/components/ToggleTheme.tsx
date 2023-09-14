"use client";

import { BsMoonStars } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ToggleTheme() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div
      className="absolute flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-lg bg-slate-50 font-normal text-slate-500 shadow-lg hover:bg-[#5a5b65] hover:text-[#fff]"
      onClick={toggleTheme}
    >
      <BsMoonStars />
    </div>
  );
}

export default ToggleTheme;
