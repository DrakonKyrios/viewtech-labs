import styled from "styled-components";

const Statement = styled.div``;
const ProjectStatement = styled.div`
  margin-top: 1rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const Summary = () => {
  return (
    <section style={{ padding: "1rem 1rem" }}>
      <Statement>
        <strong>A</strong>mbitious. <strong>R</strong>eady. <strong>L</strong>
        ogically <strong>C</strong>reative.
      </Statement>
      <ProjectStatement>
        Creating a small project to exhibit some of my skills and creativity.
        Hope you enjoy
      </ProjectStatement>
    </section>
  );
};
