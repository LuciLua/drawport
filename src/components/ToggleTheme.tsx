'use client'

import { BsMoonStars } from "react-icons/bs"
import { useState, useEffect } from "react"

function ToggleTheme() {

    const [theme, setTheme] = useState<'light' | 'dark' | any>(localStorage.getItem('theme') || 'dark');

    function light() {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }

    function dark() {
        localStorage.setItem('theme', 'dark');
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    }

    useEffect(() => {
        theme === 'dark' ? dark() : light()
    }, [theme]);

    function toggleClass() {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
        <div className="absolute w-[30px] h-[30px] shadow-lg rounded-lg bg-slate-50 text-slate-500 font-normal flex justify-center items-center cursor-pointer hover:bg-[#5a5b65] hover:text-[#fff]"
            onClick={toggleClass}>
            <BsMoonStars />
        </div>
    )
}

export default ToggleTheme