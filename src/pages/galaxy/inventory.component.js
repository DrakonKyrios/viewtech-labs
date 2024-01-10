import styled from "styled-components";
import { times } from "lodash";
import { SILVER } from "../../utility/item.library";
import { useEffect, useState } from "react";
import { ALGO_WHITE_ICON } from "../../utility/icon.library";

const InventoryContainer = styled.div`
  color: white;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.75);
  width: 18rem;
  height: 28.1rem;
  left: ${({ location, size }) => location.x * size.width + 100}px;
  top: ${({ location, size }) => location.y * size.height - 100}px;
`;

const InventoryHeader = styled.div`
  width: 100%;
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
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 0.5rem;
  height: calc(100% - 2rem);
  background: rgba(255, 255, 255, 0.2);
`;

const Bank = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  text-align: right;
  font-weight: bold;
`;

const EmptyBackgroundItem = styled.span`
  display: inline-block;
  flex: 0 0 3.8rem;
  height: 3.8rem;
  margin: 0 0 0 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 0.1rem solid transparent;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  &.item-selected {
    border: 2px solid white;
  }
  span {
    position: absolute;
    bottom: 0;
    text-align: right;
    width: 100%;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const Inventory = ({ starPoint }) => {
  const [galaxySize, setGalaxySize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGalaxySize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return (
    <InventoryContainer
      location={starPoint.location}
      onClick={(e) => {
        e.stopPropagation();
      }}
      size={galaxySize}
    >
      <InventoryHeader>
        <span>INVENTORY</span>
      </InventoryHeader>
      <InventoryBackground>
        {times(24).map((i) => {
          if (i < starPoint.inventory.length) {
            const item = starPoint.inventory[i];
            return (
              <EmptyBackgroundItem
                onClick={() => setSelected(item)}
                className={`${selected?.id === item.id ? "item-selected" : ""}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <span>x{item.value}</span>
              </EmptyBackgroundItem>
            );
          } else {
            return <EmptyBackgroundItem></EmptyBackgroundItem>;
          }
        })}
      </InventoryBackground>
      <Bank>Galatic Algo Holdings: {ALGO_WHITE_ICON}20000</Bank>
    </InventoryContainer>
  );
};
