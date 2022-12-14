import profileImage from "../assets/profile.jpg";
import styled from "styled-components";

const ProfileBackground = styled.div`
  width: 100%;
  position: absolute;
  background-color: #16253b;
  height: calc(50% + 1rem);
  top: 0;
  z-index: -1;
`;
const ProfileBackPlate = styled.div`
  border-radius: 10rem;
  border: 3px solid #becee7;
  height: 10rem;
  width: 10rem;
  padding-top: 0;
  margin: 0 auto;
`;
const ProfileImageContainer = styled.div`
  border-radius: 10rem;
  height: 10rem;
  width: 10rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 0 auto;
`;
const ProfileContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  position: relative;
`;
const ProfileIdentity = styled.div`
  text-align: center;
  font-size: 1.4rem;
  font-family: FuturaMedium;
`;
const ProfileAddress = styled.div`
  text-align: center;
`;
export const Info = () => {
  return (
    <section>
      <ProfileContainer>
        <ProfileBackground></ProfileBackground>
        <ProfileBackPlate>
          <ProfileImageContainer
            style={{ backgroundImage: `url(${profileImage})` }}
          >
            &nbsp;
          </ProfileImageContainer>
        </ProfileBackPlate>
        <ProfileIdentity>Andres R Toro</ProfileIdentity>
        <ProfileAddress>Newark, DE</ProfileAddress>
      </ProfileContainer>
    </section>
  );
};
