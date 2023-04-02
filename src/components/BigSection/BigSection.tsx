import Image from "next/image"
import styles from "./BigSection.module.scss"
import { Acme } from "next/font/google"
const acme = Acme({ weight: ["400"], subsets: ["latin"] })
function BigSection() {
    return (
        <div className={`${styles.container} ${acme.className}`}>
            <div className={styles.content}>
                <div className={styles.c_img}>
                    <Image src={'/morcego.png'} fill alt="beco" />
                </div>
                <div className={styles.sections}>
                    <section>
                        <h1>Hello</h1>
                        <h2>LuciLua</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ipsam dolor!</p>
                    </section>
                    <section>
                        <p>Lorem ipsum dolor sit amet</p>
                        <div>
                            <button>1</button>
                            <button>2</button>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default BigSection