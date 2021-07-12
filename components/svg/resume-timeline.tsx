import React from "react";

type ResumeTimelineProps = {
  className?: string,
  height?: number,
  color?: string,
};

const ResumeTimeline = React.memo<ResumeTimelineProps>(({ height = 150.88976, color = "#8e2621", ...rest }) => {
  const bottomSideYOffset = 0.71478;
  const bottomSideY = height - bottomSideYOffset;

  return (
    <svg width="2.4694541mm" height={`${height}mm`} viewBox={`0 0 2.4694541 ${height}`}
         xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path className="line"
            d={`M 2.46945,${bottomSideY} 1.234725,${height} 0,${bottomSideY} 3e-6,0.714774 1.234729,0 2.469454,0.714774 Z`}
            fill={color}/>
    </svg>
  );
});

export default ResumeTimeline;
