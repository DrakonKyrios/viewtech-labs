import { useEffect, useState } from "react";
import styled from "styled-components";
import galaxy from "../../assets/galaxy_6.png";
import underConstructionImage from "../../assets/ImgCreator.ai  under construction, city building themed, 8bit art, city cyber punk, city wide view updated.png";
import { PURE_SILVER, SILVER } from "../../utility/item.library";
import { Inventory } from "./inventory.component";
import { UsedSkills } from "./used-skills.component";
import { Algo } from "../../components/algo.component";

const GalaxyContainer = styled.section`
  padding: 1rem;
  flex: 1;
  position: relative;
  background-size: 100% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  img {
    width: 100%;
    height: calc(100vh - 10rem);
  }
`;

const StarPoint = styled.span`
  position: absolute;
  left: ${(props) => props.location.x * props.size.width}px;
  top: ${(props) => props.location.y * props.size.height}px;
  display: inline-block;
  transform: rotate3d(8, -3, 1, 75deg);
`;

export const Galaxy = () => {
  const [starPoints, setStarPoints] = useState([]);
  const [selectedStarPoint, setSelectStarPoint] = useState(null);
  const [galaxySize, setGalaxySize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const addStarPoint = (starPointX, starPointY) => {
    setStarPoints([
      ...starPoints,
      {
        location: { x: 0.6, y: 0.6 },
        inventory: [SILVER, PURE_SILVER],
      },
    ]);
  };
  const openInventory = (e, point) => {
    setSelectStarPoint(point);
    e.stopPropagation();
  };

  useEffect(() => {
    const item = {
      location: { x: 0.484, y: 0.505 },
      bank: 5000,
      inventory: [
        { id: 1, value: 100, ...SILVER },
        { id: 2, value: 50, ...PURE_SILVER },
      ],
    };
    setStarPoints([item]);
    setSelectStarPoint(item);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGalaxySize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return (
    <GalaxyContainer
      onClick={(e) => addStarPoint(e.clientX, e.clientY)}
      style={{ backgroundImage: `url('${galaxy}')` }}
    >
      <Algo />
      {starPoints.map((point, i) => {
        return (
          <StarPoint
            onClick={(e) => openInventory(e, point)}
            key={`star-point-${i}`}
            location={point.location}
            size={galaxySize}
          >
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
      {selectedStarPoint !== null ? (
        <Inventory starPoint={selectedStarPoint}></Inventory>
      ) : null}
      <UsedSkills skills={["HTML", "CSS", "NodeJS", "ReactJs"]}></UsedSkills>
    </GalaxyContainer>
  );
};
