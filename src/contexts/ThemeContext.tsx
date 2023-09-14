'use client'

import { createContext, useEffect, useState } from "react"

type TThemeProps = {
    theme: string
    toggleTheme: () => void
}


export const ThemeContext = createContext({} as TThemeProps)

function ThemeContextProvider({ children }: { children }) {

    const [theme, setTheme] = useState('dark')


    useEffect(() => {
        const local_theme = localStorage.getItem("theme");
        ChangeThemeDOM(local_theme);
    }, []);

    function toggleTheme() {
        const local_theme = localStorage.getItem("theme");
        const localSetItemAndChangeDOM = ([item, mode]) => {
            localStorage.setItem(item, mode);
            ChangeThemeDOM(mode);
        };
        local_theme === "dark"
            ? localSetItemAndChangeDOM(["theme", "light"])
            : localSetItemAndChangeDOM(["theme", "dark"]);

    }

    function ChangeThemeDOM(theme: "dark" | "light" | string) {
        const removeAndAddClasses = ([c_remove, c_add]) => {
            document.body.classList.remove(c_remove);
            document.body.classList.add(c_add);
        };
        theme === "dark"
            ? removeAndAddClasses(["light", "dark"])
            : removeAndAddClasses(["dark", "light"]);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider