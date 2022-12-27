import styled from "styled-components";
import galaxy from "../assets/galaxy_5.jpg";

const GalaxyContainer = styled.section`
  padding: 1rem;
  flex: 1;
  background-size: 1600px 900px;
  background-position: 0 0;
  background-repeat: no-repeat;
  img {
    height: calc(100vh - 10rem);
  }
`;
export const Galaxy = () => {
  return (
    <GalaxyContainer
      style={{ backgroundImage: `url(${galaxy})` }}
    ></GalaxyContainer>
  );
};
