import BigSection from "../components/BigSection/BigSection"
import Section from "../components/Section/Section"
import styles from "../styles/pages/Home.module.scss"

export default function HomePage() {
    return (
        <div className={styles.container}>
            {/* <BigSection /> */}
            <div className={styles.sections}>
                <Section img={'/pernalonga2.png'} title="pernalonga" />
                <Section img={'/morcego.png'} title="morcego" />
                <Section img={'/morcego.png'} title="morcego" />
            </div>
        </div>
    )
}
