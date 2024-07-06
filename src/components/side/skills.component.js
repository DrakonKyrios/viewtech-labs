import tw from "tailwind-styled-components";
import { skills } from "../../utility/skill.library.js";
import { uuidv4 } from "../../utility/uuid.utility.js";
import Skill from "./skill-tree.component.js";
import SkillTree from "./skill-tree.component.js";

const SkillList = tw.section``;

export const Skills = ({ style }) => {
  return (
    <section
      key={`skill-${uuidv4}`}
      style={{ ...(style || {}), padding: "2rem 0", flex: 1 }}
    >
      <SkillList>{skills.map((skill) => <SkillTree skill={skill} />)}</SkillList>
    </section>
  );
};
