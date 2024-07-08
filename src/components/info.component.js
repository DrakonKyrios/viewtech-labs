import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImage from "../assets/profile.jpg";
import styled from "styled-components";
import tw from "tailwind-styled-components";

const ProfileBackground = tw.div`w-full absolute h-[calc(50%_+_1rem)] top-0 -z-1`;

const ProfileImageContainer = styled.div`
  border-radius: 10rem;
  border: 3px solid #becee7;
  height: 10rem;
  width: 10rem;
  padding-top: 0;
  margin: 0 auto;
  > div {
    border-radius: 10rem;
    height: 10rem;
    width: 10rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin: 0 auto;
  }
`;
const ProfileContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  position: relative;
`;

export const Info = () => {
  return (
    <section className="bg-primary pb-8">
      <ProfileContainer className="pb-4">
        <ProfileBackground></ProfileBackground>
        <ProfileImageContainer>
          <div style={{ backgroundImage: `url(${profileImage})` }}>&nbsp;</div>
        </ProfileImageContainer>
      </ProfileContainer>
      <div className="text-center text-2xl font-futura-medium">
        Andres R Toro
      </div>
      <div>
        <div className="text-center text-primary-lighter">
          Senior Full Stack Engineer
        </div>
      </div>
    </section>
  );
};
