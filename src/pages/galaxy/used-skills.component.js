import styled from "styled-components";

const SkillsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border: 1px solid rgb(81, 182, 190);
  display: inline-block;
  color: rgba(190, 206, 231, 0.8);
  padding: 0 0.25rem;
`;
export const UsedSkills = ({ skills }) => {
  const usedSkills = [...skills];
  return <SkillsContainer>{usedSkills.join(", ")}</SkillsContainer>;
};
