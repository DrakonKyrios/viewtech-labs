import logo from "./logo.svg";
import "./App.css";
import { Info } from "./components/info.component";
import styled from "styled-components";

const SideProfile = styled.aside`
  height: 100vh;
  width: 20rem;
`;

function App() {
  return (
    <main>
      <SideProfile>
        <Info></Info>
      </SideProfile>
      <section></section>
    </main>
  );
}

export default App;
