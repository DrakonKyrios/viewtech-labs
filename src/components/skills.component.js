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
  return (
    <section style={{ padding: "2rem 0" }}>
      <SkillList>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Angular</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>Vue.js</li>
        <li>Storybook</li>
        <li>jQuery</li>
        <li></li>
        <li>C#</li>
        <li>.Net</li>
        <li>EF</li>
        <li>Dapper</li>
        <li>Java</li>
        <li>Kotlin</li>
        <li>Spring</li>
        <li>Hibernate</li>
        <li>Flyway</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Python</li>
        <li>Django</li>
        <li>Go</li>
        <li>MSSQL</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>CosmosDB</li>
        <li>Azure</li>
        <li>AWS</li>
        <li>Docker</li>
        <li>Git</li>
        <li>TensorFlow</li>
        <li>CI\CD</li>
      </SkillList>
    </section>
  );
};
