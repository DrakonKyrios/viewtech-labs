import styled from "styled-components";

export const ALGO_WHITE_ICON = ALGO_SVG("#fff");

function ALGO_SVG(fill) {
  const Style = styled.svg`
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.1rem;
  `;
  return (
    <Style
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      fill={fill}
      viewBox="180 190 280 280"
    >
      <defs></defs>
      <title>ALGO_Logos_190320</title>
      <g id="lINT7W">
        <polygon
          class="cls-1"
          points="444.18 444.32 406.81 444.32 382.54 354.04 330.36 444.33 288.64 444.33 369.29 304.57 356.31 256.05 247.56 444.36 205.82 444.36 343.64 205.64 380.18 205.64 396.18 264.95 433.88 264.95 408.14 309.71 444.18 444.32"
        />
      </g>
    </Style>
  );
}
