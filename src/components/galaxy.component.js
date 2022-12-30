import { times } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import galaxy from "../assets/galaxy_5.jpg";
import { PURE_SILVER, SILVER } from "../utility/item.library";
import { UsedSkills } from "./used-skills.component";

const GalaxyContainer = styled.section`
  padding: 1rem;
  flex: 1;
  position: relative;
  background-size: cover;
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

const Inventory = styled.div`
  color: white;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.75);
  width: 18rem;
  height: 28.1rem;
  left: ${(props) => props.location.x + 100}px;
  top: ${(props) => props.location.y - 100}px;
`;

const InventoryHeader = styled.div`
  flex: 0 0 100%;
  font-weight: bold;
  height: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  span {
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
    padding-left: 0.5rem;
  }
`;

const InventoryBackground = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 0.5rem;
  height: calc(100% - 2rem);
  background: rgba(255, 255, 255, 0.2);
`;

const EmptyBackgroundItem = styled.div`
  display: inline-block;
  flex: 0 0 4rem;
  height: 4rem;
  margin: 0 0 0 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

export const Galaxy = () => {
  const [starPoints, setStarPoints] = useState([]);
  const [selectedStarPoint, setSelectStarPoint] = useState(null);
  const [inventory, setInventory] = useState([]);
  const addStarPoint = (starPointX, starPointY) => {
    setStarPoints([
      ...starPoints,
      {
        location: { x: starPointX - 315, y: starPointY - 145 },
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
      location: { x: 1336 - 315, y: 762 - 145 },
      inventory: [SILVER, PURE_SILVER],
    };
    setStarPoints([item]);
    setInventory(item.inventory);
    setSelectStarPoint(item);
  }, []);
  return (
    <GalaxyContainer
      onClick={(e) => addStarPoint(e.clientX, e.clientY)}
      style={{ backgroundImage: `url(${galaxy})` }}
    >
      {starPoints.map((point, i) => {
        return (
          <StarPoint
            onClick={(e) => openInventory(e, point)}
            key={`star-point-${i}`}
            location={point.location}
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
        <Inventory
          onClick={(e) => {
            e.stopPropagation();
          }}
          location={selectedStarPoint.location}
        >
          <InventoryHeader>
            <span>INVENTORY</span>
          </InventoryHeader>
          <InventoryBackground>
            {times(24).map((i) => {
              if (i < inventory.length) {
                return (
                  <EmptyBackgroundItem
                    style={{ backgroundImage: `url(${SILVER.image})` }}
                  ></EmptyBackgroundItem>
                );
              } else {
                return <EmptyBackgroundItem></EmptyBackgroundItem>;
              }
            })}
          </InventoryBackground>
        </Inventory>
      ) : null}
      <UsedSkills skills={["HTML", "CSS", "NodeJS", "ReactJs"]}></UsedSkills>
    </GalaxyContainer>
  );
};
