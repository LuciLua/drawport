import Link from "next/link"
import styles from "./Menu.module.scss"

function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.logo}>
                    <li>LuciFilms</li>
                </ul>
                <ul className={styles.nav}>
                    <li><Link href={'#'}>Start</Link></li>
                    <li><Link href={'#'}>Festival</Link></li>
                    <li><Link href={'#'}>Curtas</Link></li>
                    <li><Link href={'#'}>Experimentos</Link></li>
                    <li><Link href={'#'}>Trabalhos</Link></li>
                </ul>
                <ul className={styles.menu}>
                    <li>=</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu