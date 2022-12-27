import logo from "./logo.svg";
import "./App.css";
import { Info } from "./components/info.component";
import { Skills } from "./components/skills.component";
import styled from "styled-components";
import { Summary } from "./components/summary.component";
import { Galaxy } from "./components/galaxy.component";

const SideProfile = styled.aside`
  height: 100vh;
  width: 20rem;
  display: flex;
  flex-direction: column;
`;

const SideFooter = styled.div`
  justify-self: flex-end;
  text-align: center;
  font-weight: bold;
`;

function App() {
  return (
    <main style={{ display: "flex" }}>
      <SideProfile>
        <Info></Info>
        <Skills style={{ flex: 1 }}></Skills>
        <SideFooter>December 2022</SideFooter>
      </SideProfile>
      <section
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Summary></Summary>
        <Galaxy></Galaxy>
      </section>
    </main>
  );
}

export default App;
