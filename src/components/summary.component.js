import tw from "tailwind-styled-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Statement = styled.div`
  color: #becee7;
`;
const ProjectStatement = styled.div`
  margin-top: 0.5rem;
  color: rgba(190, 206, 231, 0.8);
  div {
    display: block;
    padding-left: 1rem;
  }
`;
const ProjectNote = styled.div`
  display: block;
`;

const FirstLetter = tw.span`font-bold text-lg`;
export const Summary = () => {
  return (
    <section
      style={{
        padding: "1rem 1rem",
        backgroundColor: "#16253b",
      }}
      className="overflow-auto border-b-2 border-primary-lighter/10 [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-slate-700
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`;"
    >
      <div className="flex text-primary-lighter">
        <div className="mr-8 flex">
          <Statement>
            <FirstLetter>A</FirstLetter>mbitious. <FirstLetter>R</FirstLetter>
            eady. <FirstLetter>L</FirstLetter>
            ogically <FirstLetter>C</FirstLetter>reative.
          </Statement>
          <ProjectStatement> </ProjectStatement>
        </div>
      </div>
    </section>
  );
};
