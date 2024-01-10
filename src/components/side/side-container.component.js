import styled from "styled-components";
import { Info } from "../info.component";
import { Skills } from "./skills.component";

const SideProfile = styled.aside`
  height: 100vh;
  width: 20rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const SideFooter = styled.div`
  justify-self: flex-end;
  text-align: center;
  font-weight: bold;
`;

export const SideContainer = () => {
  return (
    <SideProfile>
      <Info></Info>
      <Skills style={{ flex: 1 }}></Skills>
      <SideFooter>December 2022</SideFooter>
    </SideProfile>
  );
};
