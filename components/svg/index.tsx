import React from "react";

export interface SvgTimelineProps extends React.SVGProps<SVGSVGElement> {
  currentNodeRef: any,
  onDateNodeHoverChanged: (date: string, isHovered: boolean) => void,
  onDateNodeClick: (date: string) => void,
}

export { default as SvgStudiesTimeline } from "./studies-timeline";
export { default as SvgXpTimeline }      from "./xp-timeline";
export { default as MenuIcon }           from "./menu-icon";
export { default as SectionHandle }      from "./SectionHandle";
export { default as BackToTop }          from "./BackToTop";
export { default as GoToIcon }           from "./GoToIcon";
export { default as FullScreenIcon }     from "./full-screen-icon";