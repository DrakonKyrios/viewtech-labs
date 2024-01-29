import tw from "tailwind-styled-components";
import styled from "styled-components";
import { Algo } from "./algo.component";
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
      className="h-[210px] overflow-auto border-b-2 border-blue-100 [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-slate-700
      dark:[&::-webkit-scrollbar-thumb]:bg-slate-500`;"
    >
      <Statement>
        <FirstLetter>A</FirstLetter>mbitious. <FirstLetter>R</FirstLetter>eady.{" "}
        <FirstLetter>L</FirstLetter>
        ogically <FirstLetter>C</FirstLetter>reative.
      </Statement>
      <ProjectStatement>
        12/12/23 <br />
        <ProjectNote>
          <FirstLetter>C</FirstLetter>reated this small project over the week to
          show my resume. Hope you enjoy.
        </ProjectNote>
        <ProjectNote>
          <FirstLetter>T</FirstLetter>he initial route I think I'll go for is
          React app on a NodeJS - Express Server in Azure Linux environment that
          shows my basic resume.
        </ProjectNote>
        <div className="flex mt-2">
          <span>
            <FontAwesomeIcon icon={faGithubAlt} />
            &nbsp;Github @
            <a
              className="inline-block mr-8 underline"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/DrakonKyrios?tab=repositories"
            >
              DrakonKyrios
            </a>{" "}
          </span>
        </div>
      </ProjectStatement>
    </section>
  );
};
