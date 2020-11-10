// Dependencies
import React, { createRef, useCallback, useEffect } from "react";

// Styles
import { RingWrapper, RingSvg, RingCircle, RingValue } from "./style";

// Component Logout
const ProgressRing = ({
  percentage,
  size,
}: {
  percentage?: number;
  size?: number;
}) => {
  // Attributes
  const ringRef = createRef<SVGCircleElement>();

  // Functions
  const fillRing = useCallback(
    (percentage: number) => {
      if (ringRef.current) {
        const circle = ringRef.current;

        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percentage / 100) * circumference;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${offset}`;
      }
    },
    [ringRef]
  );

  useEffect(() => {
    fillRing(percentage || 0);
  }, [fillRing, percentage]);

  // DOM
  return size ? (
    <RingWrapper size={size}>
      <RingSvg>
        <RingCircle
          r={`${size / 2 - 10}`}
          cx={`${size / 2}`}
          cy={`${size / 2}`}
        />
      </RingSvg>

      <RingSvg>
        <RingCircle
          ref={ringRef}
          r={`${size / 2 - 10}`}
          cx={`${size / 2}`}
          cy={`${size / 2}`}
          progress={true}
        />
      </RingSvg>

      <RingValue>{percentage}%</RingValue>
    </RingWrapper>
  ) : (
    <RingWrapper>
      <RingSvg>
        <RingCircle ref={ringRef} r='40' cx='50' cy='50' />
      </RingSvg>

      <RingSvg>
        <RingCircle ref={ringRef} r='40' cx='50' cy='50' progress={true} />
      </RingSvg>

      <RingValue>{percentage}%</RingValue>
    </RingWrapper>
  );
};

export default ProgressRing;
