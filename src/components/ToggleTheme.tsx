'use client'

import { BsMoonStars } from "react-icons/bs"

function ToggleTheme() {

    function toggleClass() {
        // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        //     document.documentElement.classList.add('dark')
        // } else {
        //     document.documentElement.classList.remove('dark')
        // }

        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark'

        if(document.body.classList.contains('dark')){
            document.body.classList.remove('dark')
            document.body.classList.add('light')
        }
        else if(document.body.classList.contains('light')){
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        } else {
            document.body.classList.add('dark')
        }

    }

    return (
        <div className="absolute w-[30px] h-[30px] shadow-lg rounded-lg bg-slate-50 text-slate-500 font-normal flex justify-center items-center cursor-pointer"
            onClick={() => toggleClass()}>
            <BsMoonStars />
        </div>
    )
}

export default ToggleTheme