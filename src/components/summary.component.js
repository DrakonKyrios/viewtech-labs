import styled from "styled-components";

const Statement = styled.div`
  color: #becee7;
`;
const ProjectStatement = styled.div`
  margin-top: 0.5rem;
  color: rgba(190, 206, 231, 0.8);
  span {
    display: inline-block;
    padding-top: 0.5rem;
    padding-left: 1rem;
  }
`;

export const Summary = () => {
  return (
    <section
      style={{
        padding: "1rem 1rem",
        backgroundColor: "#16253b",
      }}
    >
      <Statement>
        <strong>A</strong>mbitious. <strong>R</strong>eady. <strong>L</strong>
        ogically <strong>C</strong>reative.
      </Statement>
      <ProjectStatement>
        Recently started creating a small project to exhibit some of my skills
        and creativity. Hope you enjoy.
        <br />
        <span>
          Next step to Proof of Concept buying and trading items through smart
          contracts
        </span>
      </ProjectStatement>
    </section>
  );
};
