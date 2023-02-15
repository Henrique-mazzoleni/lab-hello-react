import Section from './Section'

import styles from './Main.module.css'

export default function Main () {
    return (
        <main className={styles.main}>
            <Section sectionImage="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" sectionTitle="Declarative">
                React makes it painles to create interactive UIs.
            </Section>
            <Section sectionImage="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" sectionTitle="Components">
                Build encapsulated components that manage their state.
            </Section>
            <Section sectionImage="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" sectionTitle="Single-Way">
                A set of immutable values are passed to the components.
            </Section>
            <Section sectionImage="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" sectionTitle="JSX">
                Statically-typed, designed to run on modern browsers.
            </Section>
        </main>
    )
}