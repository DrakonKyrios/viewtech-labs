import profileImage from "../assets/profile.jpg";
import styled from "styled-components";

const ProfileImage = styled.img`
  width: 100%;
`;
const ProfileContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  background-color: blue;
`;
export const Info = () => {
  return (
    <ProfileContainer>
      <ProfileImage alt="Andres R Toro" src={profileImage} />
    </ProfileContainer>
  );
};
