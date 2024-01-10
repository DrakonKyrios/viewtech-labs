import tw from "tailwind-styled-components";
import styled from "styled-components";
import { skills } from "../../utility/skill.library.js";
import { uuidv4 } from "../../utility/uuid.utility.js";

const SkillParent = tw.span`
  ${(c) => (c.parent ? "font-bold" : "")}
`;

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
    <i
      style={{
        color: "#51b6be",
        fontSize: "0.75 rem",
        verticalAlign: "middle",
        display: "inline-block",
      }}
      className="fa-duotone fa-book-sparkles"
    />
  );
  const CauldraonIcon = () => (
    <i style={{ color: "#f34737" }} className="fa-duotone fa-cauldron" />
  );
  const SkillChoice = (skill) => {
    if (skill.isUsed) {
      return DisplayUsedSkill.apply(this, [skill]);
    }
    return DisplaySkill(skill);
  };
  const DisplaySkill = (skill) => (
    <>
      <li
        key={`skill-display-${uuidv4()}`}
        className={skill.parent ? "mb-2" : ""}
      >
        <SkillParent parent={skill.parent}>{skill.name}</SkillParent>
        {skill.isProficient ? (
          <span className="ml-2">
            <SparklesIcon />
          </span>
        ) : null}
      </li>
      {skill.children.length > 0 ? skill.children.map(SkillChoice) : null}
      {skill.parent ? (
        <li className={skill.parent ? "mb-2" : ""}>&nbsp;</li>
      ) : null}
    </>
  );
  const DisplayUsedSkill = (skill) => {
    return (
      <>
        <li style={{ color: "#f34737" }} key={`used-skill-${uuidv4()}`}>
          <strong>{skill.name}</strong>
          &nbsp;
          <CauldraonIcon />
          {skill.isProficient ? (
            <span className="ml-2">
              <SparklesIcon />
            </span>
          ) : null}
        </li>
        {skill.children.length > 0 ? skill.children.map(SkillChoice) : null}
      </>
    );
  };

  return (
    <section
      key={`skill-${uuidv4}`}
      style={{ ...(style || {}), padding: "2rem 0", flex: 1 }}
    >
      <div className="text-left mb-4 pl-8">
        <span>
          <SparklesIcon /> - Proficient
        </span>
        <br />
        <span>
          <CauldraonIcon /> - Used In This App
        </span>
      </div>
      <SkillList>{skills ? skills.map(SkillChoice) : null}</SkillList>
    </section>
  );
};
