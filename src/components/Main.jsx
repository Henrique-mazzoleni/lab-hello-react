import Section from "./Section";
import styles from "./Main.module.css";

export default function Main() {
  const sectionsInfo = [
    {
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png",
      title: "Declarative",
      content: "React makes it painles to create interactive UIs.",
    },
    {
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png",
      title: "Components",
      content: "Build encapsulated components that manage their state.",
    },
    {
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png",
      title: "Single-Way",
      content: "A set of immutable values are passed to the components.",
    },
    {
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png",
      title: "JSX",
      content: "Statically-typed, designed to run on modern browsers.",
    },
  ];

  return (
    <main className={styles.main}>
      {sectionsInfo.map((section) => (
        <Section
          sectionImage={section.image}
          sectionTitle={section.title}
          sectionContent={section.content}
        />
      ))}
    </main>
  );
}
