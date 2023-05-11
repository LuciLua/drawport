"use client";

import { BsMoonStars } from "react-icons/bs";
import { useEffect } from "react";

function ToggleTheme() {
  function changeDOM(theme: "dark" | "light" | string) {
    const removeAndAddClasses = ([c_remove, c_add]) => {
      document.body.classList.remove(c_remove);
      document.body.classList.add(c_add);
    };
    theme === "dark"
      ? removeAndAddClasses(["light", "dark"])
      : removeAndAddClasses(["dark", "light"]);
  }

  function handleTheme() {
    const local_theme = localStorage.getItem("theme");
    const localSetItemAndChangeDOM = ([item, mode]) => {
      localStorage.setItem(item, mode);
      changeDOM(mode);
    };
    local_theme === "dark"
      ? localSetItemAndChangeDOM(["theme", "light"])
      : localSetItemAndChangeDOM(["theme", "dark"]);
  }

  useEffect(() => {
    const local_theme = localStorage.getItem("theme");
    changeDOM(local_theme);
  }, []);

  return (
    <div
      className="absolute flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-lg bg-slate-50 font-normal text-slate-500 shadow-lg hover:bg-[#5a5b65] hover:text-[#fff]"
      onClick={handleTheme}
    >
      <BsMoonStars />
    </div>
  );
}

export default ToggleTheme;
