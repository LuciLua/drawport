import Image from "next/image"
import Link from "next/link"
import styles from "./Section.module.scss"

function Section({img, title}){
    return(
        <section className={styles.section}>
        <div className={styles.c_content}>
            <div className={styles.c_img}>
                <Image fill alt="draw" src={img} />
            </div>
            <div className={styles.c_about}>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et nulla hic perspiciatis, non ipsum molestiae quis nobis, ducimus minus sint ab a veritatis tempore aut cum dignissimos, quos nam.</p>
                <Link href={'/'}>Click Here</Link>
            </div>
        </div>
    </section>
    )
}
export default Section