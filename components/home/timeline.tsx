import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { SvgTimelineStyleClasses, SvgTimeline }                        from "../svg";
import { TimelineNodeInfo }                                            from "../svg/timeline-node";

export interface TimelineData {
  rootSvgSelector: string,
  cssPrefix: string,
  dates: string[],
  maxNodeYPos: number,
}

interface TimelineProps {
  className?: string,
  onDateNodeHoverChanged?: (date: string, isHovered: boolean) => void,
  onDateNodeClick?: (date: string) => void,
  timelineTag: string,
  curDate: string,
  data: TimelineData,
}

const xpTimelineNodeInfos: TimelineNodeInfo[] = [
  {
    date: "2021",
    nodeY: "15.875",
    underlineY: "20.373",
    labelY: "7.938",
  },
  {
    date: "2019",
    nodeY: "47.625",
    underlineY: "52.122",
    labelY: "39.687",
  },
  {
    date: "2018",
    nodeY: "79.375",
    underlineY: "83.873",
    labelY: "71.438",
  },
  {
    date: "2017",
    nodeY: "111.125",
    underlineY: "115.623",
    labelY: "103.188",
  },
  {
    date: "2016",
    nodeY: "142.875",
    underlineY: "147.373",
    labelY: "134.938",
  },
  {
    date: "2015",
    nodeY: "174.625",
    underlineY: "179.123",
    labelY: "166.688",
  },
];

const studiesTimelineNodeInfos: TimelineNodeInfo[] = [
  {
    date: "2019",
    nodeY: "15.875",
    underlineY: "20.373",
    labelY: "7.938",
  },
  {
    date: "2018",
    nodeY: "47.625",
    underlineY: "52.122",
    labelY: "39.687",
  },
  {
    date: "2017",
    nodeY: "79.375",
    underlineY: "83.873",
    labelY: "71.438",
  },
  {
    date: "2016",
    nodeY: "111.125",
    underlineY: "115.623",
    labelY: "103.188",
  },
  {
    date: "2013",
    nodeY: "142.875",
    underlineY: "147.373",
    labelY: "134.938",
  },
];

const Timeline = forwardRef((
  { onDateNodeClick, onDateNodeHoverChanged, timelineTag, curDate, data, ...rest }: TimelineProps,
  ref) => {
  const currentNode = useRef(null);

  useImperativeHandle(ref, () => ({
    currentNode,
  }));

  /**
   * Click handle on a date node
   *
   * @param date
   */
  const handleDateNodeClick = useCallback((date: string) => {
    // Propagate to parent
    if (onDateNodeClick)
      onDateNodeClick(date);

  }, [curDate]);

  const handleDateNodeHoverChanged = useCallback((date: string, isHovered: boolean) => {
    if (isHovered && curDate === date)
      return;

    // Propagate to parent
    if (onDateNodeHoverChanged)
      onDateNodeHoverChanged(date, isHovered);
  }, [curDate]);

  const getNodeInfosByTag: () => (TimelineNodeInfo[]) = () => {
    switch (timelineTag) {
      case "experience":
        return xpTimelineNodeInfos;
      case "studies":
        return studiesTimelineNodeInfos;
      default:
        throw "Not implemented";
    }
  };

  const tagToStyleClassPrefix = (timelineTag: string) => {
    switch (timelineTag) {
      case "experience":
        return "xp";
      case "studies":
        return "studies";
      default:
        throw "Not implemented";
    }
  };

  const styleClasses: SvgTimelineStyleClasses = {
    currentNode: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__current-node`,
    dateLabel: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__date-label`,
    dateNode: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__date-node`,
    dateNodeSpecific: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__d`,
    line: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__line`,
    outerNode: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__outer-node`,
    underline: `${tagToStyleClassPrefix(timelineTag)}-timeline_svg__underline`,
  };

  return <SvgTimeline
    currentNodeRef={currentNode}
    onDateNodeClick={handleDateNodeClick}
    onDateNodeHoverChanged={handleDateNodeHoverChanged}
    curDate={curDate}
    styleClasses={styleClasses}
    nodeInfos={getNodeInfosByTag()}
    data={data}
    {...rest}
  />;
});

export default Timeline;