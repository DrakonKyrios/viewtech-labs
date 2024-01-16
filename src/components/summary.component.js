import styled from "styled-components";
import { Algo } from "./algo.component";

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
const ProjectNote = styled.span`
  display: block;
`;

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
        <strong>A</strong>mbitious. <strong>R</strong>eady. <strong>L</strong>
        ogically <strong>C</strong>reative.
      </Statement>
      <ProjectStatement>
        12/12/23 <br />
        <ProjectNote>
          <strong>R</strong>ecently started creating a small project to exhibit
          some of my skills and creativity. Hope you enjoy.{" "}
        </ProjectNote>
        <ProjectNote>
          <strong>T</strong>he initial route I think I'll go for is React app on
          a NodeJS - Express Server in Azure Linux environment that will deploy
          automatically using a pipeline setup from Dev Azure Portal.
        </ProjectNote>
        <ProjectNote>
          <strong>A</strong>fterwards the plan will be for a automated "ship" to
          go to each starpoint and buy the resources that it needs based on it's
          budget and gas costs, data will be kept in a NoSQL databse with a C#
          Microservice to handle trade requests based on smart contracts on the
          Algorand Test Network (beacuse why not). So at the end of the day
          HTML, CSS, Javascript(React | NodeJs), C# (.Net), Python will be used
          in this particular app.
        </ProjectNote>
      </ProjectStatement>
    </section>
  );
};
