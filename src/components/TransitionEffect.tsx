'use client'

import { motion } from "framer-motion"
import styles from "./TransitionEffect.module.scss"

function TransitionEffect() {
    return (
        <>
            <motion.div
                className={styles.divEffect}
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ zIndex: 30, backgroundColor: "#121212" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}

            />
            <motion.div
                className={styles.divEffect}
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                style={{ zIndex: 20, backgroundColor: "#444" }}

            />
            <motion.div
                className={styles.divEffect}
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                style={{ zIndex: 10, backgroundColor: "#393939" }}
            />
        </>
    )
}

export default TransitionEffect