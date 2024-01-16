import tw from "tailwind-styled-components";
import styled from "styled-components";
import { Info } from "../info.component";
import { Skills } from "./skills.component";

const SideProfile = tw.aside`
  h-[100vh]
  w-[20rem]
  overflow-auto
  flex
  flex-col
  [&::-webkit-scrollbar]:w-2
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-track]:bg-gray-100
[&::-webkit-scrollbar-thumb]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gray-300
dark:[&::-webkit-scrollbar-track]:bg-slate-700
dark:[&::-webkit-scrollbar-thumb]:bg-slate-500
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
