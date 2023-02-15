import styles from './Section.module.css'

export default function Section (props) {
    return (
        <section className={styles.section}>
            <img src={props.sectionImage} alt={`${props.sectionTitle} image`} />
            <h2>{props.sectionTitle}</h2>
            <p>{props.children}</p>
        </section>
    )
}