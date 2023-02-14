import styles from "./Header.module.css"
import Navbar from "./Navbar"
import Button from "./Button"

export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar/>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>
            <Button>Awesome!</Button>
        </header>
    )
}