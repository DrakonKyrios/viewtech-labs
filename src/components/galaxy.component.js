import { useState } from "react";
import styled from "styled-components";
import galaxy from "../assets/galaxy_5.jpg";

const GalaxyContainer = styled.section`
  padding: 1rem;
  flex: 1;
  position: relative;
  background-size: 1600px 900px;
  background-position: 0 0;
  background-repeat: no-repeat;
  img {
    height: calc(100vh - 10rem);
  }
`;

const StarPoint = styled.span`
  position: absolute;
  left: ${(props) => props.location.x}px;
  top: ${(props) => props.location.y}px;
  display: inline-block;
  transform: rotate3d(8, -3, 1, 75deg);
`;
export const Galaxy = () => {
  const [starPoints, setStarPoints] = useState([]);

  const addStarPoint = (starPointX, starPointY) => {
    setStarPoints([
      ...starPoints,
      { location: { x: starPointX - 310, y: starPointY - 126 } },
    ]);
  };
  return (
    <GalaxyContainer
      onClick={(e) => addStarPoint(e.clientX, e.clientY)}
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      {starPoints.map((point, i) => {
        return (
          <StarPoint key={`star-point-${i}`} location={point.location}>
            <svg
              width="81"
              height="81"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <circle
                cx="40"
                cy="40"
                r="39"
                stroke="rgba(181, 61, 93, 1)"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </StarPoint>
        );
      })}
    </GalaxyContainer>
  );
};
