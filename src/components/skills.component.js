import styled from "styled-components";
import { skills } from "../utility/skill.library.js";

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    text-align: center;
  }
`;
export const Skills = ({ style }) => {
  const SparklesIcon = () => (
    <i style={{ color: "#51b6be" }} className="fa-duotone fa-book-sparkles" />
  );
  const CauldraonIcon = () => (
    <i style={{ color: "#f34737" }} className="fa-duotone fa-cauldron" />
  );
  const DisplayProficientSkill = (skill) => (
    <li>
      {skill.name}&nbsp;
      <SparklesIcon />
    </li>
  );
  const DisplaySkill = (skill) => <li>{skill.name}</li>;
  const DisplayUsedSkill = (skill) => (
    <li style={{ color: "#f34737" }}>
      <strong>{skill.name}</strong>&nbsp;
      <CauldraonIcon />
    </li>
  );

  return (
    <section style={{ ...(style || {}), padding: "2rem 0", flex: 1 }}>
      <div style={{ textAlign: "center" }}>
        <span>
          <SparklesIcon /> - Proficient
        </span>
        <br />
        <span>
          <CauldraonIcon /> - Used In This App
        </span>
      </div>
      <br />
      <br />
      <SkillList>
        {skills
          ? skills.map((skill) => {
              if (skill.isUsed) {
                return DisplayUsedSkill(skill);
              }
              if (skill.isProficient) {
                return DisplayProficientSkill.apply(this, [skill]);
              }
              return DisplaySkill(skill);
            })
          : null}
      </SkillList>
    </section>
  );
};
