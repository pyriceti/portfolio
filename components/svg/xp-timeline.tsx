import React                from "react";
import { SvgTimelineProps } from "./index";

const XpTimeline = React.memo((
  { currentNodeRef, onDateNodeClick, onDateNodeHoverChanged, ...rest }: SvgTimelineProps) => {
  return (
    <svg
      width={156}
      height={720}
      viewBox="0 0 41.275 190.5"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        className="xp-timeline_svg__line"
        d="M12.22 188.731L9.166 190.5l-3.055-1.769V1.77L9.165 0l3.056 1.769z"
        fill="#441517"
      />
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2021", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2021", false)}
        onClick={() => onDateNodeClick("2021")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2021">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 15.875l-4.582 7.938H4.583L0 15.875l4.583-7.938h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 15.875l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 20.373h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 7.938)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2021"}
          </tspan>
        </text>
      </g>
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2019", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2019", false)}
        onClick={() => onDateNodeClick("2019")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2019">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 47.625l-4.582 7.937H4.583L0 47.625l4.583-7.938h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 47.625l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 52.122h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 39.687)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2019"}
          </tspan>
        </text>
      </g>
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2018", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2018", false)}
        onClick={() => onDateNodeClick("2018")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2018">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 79.375l-4.582 7.938H4.583L0 79.375l4.583-7.937h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 79.375l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 83.873h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 71.438)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2018"}
          </tspan>
        </text>
      </g>
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2017", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2017", false)}
        onClick={() => onDateNodeClick("2017")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2017">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 111.125l-4.582 7.938H4.583L0 111.125l4.583-7.937h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 111.125l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 115.623h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 103.188)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2017"}
          </tspan>
        </text>
      </g>
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2016", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2016", false)}
        onClick={() => onDateNodeClick("2016")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2016">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 142.875l-4.582 7.938H4.583L0 142.875l4.583-7.938h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 142.875l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 147.373h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 134.938)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2016"}
          </tspan>
        </text>
      </g>
      <g
        onMouseEnter={() => onDateNodeHoverChanged("2015", true)}
        onMouseLeave={() => onDateNodeHoverChanged("2015", false)}
        onClick={() => onDateNodeClick("2015")}
        className="xp-timeline_svg__date-node xp-timeline_svg__d2015">
        <path
          className="xp-timeline_svg__outer-node"
          d="M18.33 174.625l-4.582 7.938H4.583L0 174.625l4.583-7.938h9.165z"
          fill="#441517"
        />
        <path
          d="M15.276 174.625l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
          fill="#fff"
        />
        <path
          className="xp-timeline_svg__underline"
          fill="#441517"
          d="M22.854 179.123h18.421v.794H22.854z"
        />
        <text
          className="xp-timeline_svg__date-label"
          x={22.49}
          y={10.054}
          fontFamily="Raleway"
          fontSize={8.467}
          strokeWidth={0.265}
          style={{
            lineHeight: 1.25,
          }}
          transform="translate(0 166.688)"
        >
          <tspan x={22.49} y={10.054} fontWeight={500}>
            {"2015"}
          </tspan>
        </text>
      </g>
      <path
        ref={currentNodeRef}
        className="xp-timeline_svg__current-node"
        d="M15.276 15.875l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
        fill="#8e2621"
      />
    </svg>
  );
});

export default XpTimeline;
