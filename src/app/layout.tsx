'use client'

import "../styles/globals.scss"
import { Montserrat } from "next/font/google"
import Menu from "../components/Menu/Menu"

import { AnimatePresence } from "framer-motion"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>LuciLua | Cinema Portfólio</title>
            </head>
            <body className={montserrat.className}>
                <Menu />
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>

            </body>
        </html>
    )
}