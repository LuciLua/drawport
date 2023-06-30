"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { AiOutlineMenu } from "react-icons/ai";
import HandlerMenu from "./HandlerMenu";

function Menu() {
  function open() {
    let ham = document.getElementById("ham");

    if (ham.classList.contains("flex")) {
      ham.classList.remove("flex");
      ham.classList.add("hidden");
    } else if (ham.classList.contains("hidden")) {
      ham.classList.remove("hidden");
      ham.classList.add("flex");
      ham.classList.add("flex-col");
    }
  }

  return (
    <div className="relative z-[20] flex h-[fit-content] min-h-[50px] w-full justify-center overflow-x-hidden dark:text-[#fff] lg:h-heightMenu">
      <div className="h-full flex w-full max-w-max-w-content items-center justify-between px-[30px] py-3">
        <ul className="hidden gap-[50px] lg:flex">
          <li className="font-[900]">
            <a href="/">LuciFilms</a>
          </li>
        </ul>
        <ul
          className="mt-[50px] hidden w-full items-center justify-center gap-[50px] text-[#000] dark:text-[#fff] lg:mt-0 lg:flex"
          id="ham"
        >
          <li>
            <Link className="font-[500] text-inherit" href={"/#"}>
              Start
            </Link>
          </li>
          <li>
            <Link className="font-[500] text-inherit" href={"#"}>
              Festivais
            </Link>
          </li>
          <li>
            <Link className="font-[500] text-inherit" href={"/projetos"}>
              Projetos
            </Link>
          </li>
          <li>
            <Link className="font-[500] text-inherit" href={"/experimentos"}>
              Experimentos
            </Link>
          </li>
          <li>
            <Link className="font-[500] text-inherit" href={"#"}>
              Trabalhos
            </Link>
          </li>
        </ul>
        <ul className="absolute right-5 top-5 mr-3 flex gap-3">
          <li className="flex font-[600] lg:hidden" onClick={open}>
            <HandlerMenu />
          </li>
          <li className="font-[600]">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
