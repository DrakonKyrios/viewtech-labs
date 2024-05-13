import tw from "tailwind-styled-components";
import styled from "styled-components";
import { Algo } from "./algo.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import pay2win from "../assets/pay-2-win.png";
import everythingbutwater from "../assets/everything-but-water.png";
import npmjs from "../assets/reveling-text-npmjs.png";

import { faArrowAltCircleRight } from "@fortawesome/pro-duotone-svg-icons";

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

const ProjectWork = tw.div`flex flex-row`;
const ProjectWorkItem = tw.div`flex flex-1 flex-col cursor-pointer mr-4`;
const ProjectWorkItemTitle = tw.div`text-center flex items-center justify-center`;

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
      <div className="flex text-faded-blue">
        <div className="mr-8">
          <Statement>
            <FirstLetter>A</FirstLetter>mbitious. <FirstLetter>R</FirstLetter>
            eady. <FirstLetter>L</FirstLetter>
            ogically <FirstLetter>C</FirstLetter>reative.
          </Statement>
          <ProjectStatement>
            12/12/23 <br />
            <ProjectNote>
              <FirstLetter>C</FirstLetter>reated this small project over the
              week to show my resume. Hope you enjoy.
            </ProjectNote>
            <ProjectNote>
              <FirstLetter>T</FirstLetter>he initial route I think I'll go for
              is React app on a NodeJS - Express Server in Azure Linux
              environment that shows my basic resume.
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
        </div>
        <ProjectWork>
          <ProjectWorkItem
            onClick={() =>
              window.open(
                "https://www.p2win.gg",
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <div className="w-48">
              <img className="w-full" alt="Pay-2-Win" src={pay2win} />
            </div>
            <ProjectWorkItemTitle>
              <span className="inline-block mr-2">Pay 2 Win (In Progress)</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </ProjectWorkItemTitle>
            <ProjectWorkItemTitle>
              React Typescript Node.js
            </ProjectWorkItemTitle>
          </ProjectWorkItem>
          <ProjectWorkItem
            onClick={() =>
              window.open(
                "https://www.npmjs.com/package/@viewtech-labs/revealing-text",
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <div className="w-48">
              <img className="w-full" alt="Revealing Text NPMJs" src={npmjs} />
            </div>
            <ProjectWorkItemTitle>
              <span className="inline-block mr-2">Revealing Text NPMjs</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </ProjectWorkItemTitle>
            <ProjectWorkItemTitle>React Typescript</ProjectWorkItemTitle>
          </ProjectWorkItem>
          <ProjectWorkItem
            onClick={() =>
              window.open(
                "https://www.everythingbutwater.com",
                "_blank",
                "noopener, noreferrer"
              )
            }
          >
            <div className="w-48">
              <img
                className="w-full max-h-[120px]"
                alt="Everything But Water"
                src={everythingbutwater}
              />
            </div>
            <ProjectWorkItemTitle>
              <span className="inline-block mr-2">Everything But Water</span>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </ProjectWorkItemTitle>
            <ProjectWorkItemTitle>jQuery KnockoutJs C#</ProjectWorkItemTitle>
          </ProjectWorkItem>
        </ProjectWork>
      </div>
    </section>
  );
};
