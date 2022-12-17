import styled from "styled-components";

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    text-align: center;
  }
`;
export const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Javascript",
    "Typescript",
    "Vue.js",
    "Storybook",
    "jQuery",
    "C#",
    ".Net",
    "EF",
    "Dapper",
    "Java",
    "Kotlin",
    "Spring",
    "Hibernate",
    "Flyway",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "Go",
    "MSSQL",
    "MySQL",
    "MongoDB",
    "CosmosDB",
    "Azure",
    "AWS",
    "Docker",
    "Git",
    "TensorFlow",
    "CI/CD",
  ];

  return (
    <section style={{ padding: "2rem 0" }}>
      <SkillList>
        {skills
          ? skills.map((skill) => {
              return <li>{skill}</li>;
            })
          : null}
      </SkillList>
    </section>
  );
};
