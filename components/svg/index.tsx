import React                from "react";
import { TimelineNodeInfo } from "./timeline-node";
import { TimelineData }     from "../home/timeline";

export interface SvgTimelineProps extends React.SVGProps<SVGSVGElement> {
  currentNodeRef: any,
  onDateNodeHoverChanged: (date: string, isHovered: boolean) => void,
  onDateNodeClick: (date: string) => void,
  curDate: string,
  data: TimelineData,
  styleClasses: SvgTimelineStyleClasses,
  nodeInfos: TimelineNodeInfo[],
}

export interface SvgTimelineStyleClasses {
  line: string,
  currentNode: string,
  dateNode: string,
  dateNodeSpecific: string,
  outerNode: string,
  underline: string,
  dateLabel: string,
}

export { default as SvgTimeline }    from "./timeline";
export { default as MenuIcon }       from "./menu-icon";
export { default as SectionHandle }  from "./SectionHandle";
export { default as BackToTop }      from "./BackToTop";
export { default as GoToIcon }       from "./GoToIcon";
export { default as FullScreenIcon } from "./full-screen-icon";
export { default as ResumeTimeline } from "./resume-timeline";