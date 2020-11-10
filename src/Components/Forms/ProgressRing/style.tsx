import styled from "styled-components";

export const RingWrapper = styled.div<{ size?: number | null }>`
  position: relative;

  width: ${(props) =>
    !!props.size ? `${props.size}px` : props.theme.progressRing.ringSize};
  height: ${(props) =>
    !!props.size ? `${props.size}px` : props.theme.progressRing.ringSize};
`;

export const RingSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
`;

interface IRingCircle {
  progress?: boolean;
}
export const RingCircle = styled.circle<IRingCircle>`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;

  stroke-width: ${(props) => props.theme.progressRing.strokeWidth};
  stroke: ${(props) =>
    !!props.progress
      ? props.theme.progressRing.strokeProgressColor
      : props.theme.progressRing.strokeColor};
  fill: ${(props) => props.theme.progressRing.ringFill};

  transition: stroke-dasharray 0.3s, stroke-dashoffset 0.3s;
`;

export const RingValue = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  font-size: ${(props) => props.theme.progressRing.fontSize};
  color: ${(props) => props.theme.progressRing.fontColor};
`;
