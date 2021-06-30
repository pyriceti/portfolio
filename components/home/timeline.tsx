import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import {
  TimelineSettings,
  tlInit,
  tlOnDateNodeHoverChanged,
  tlToDateNodeFullTl
}                                            from "../../animations/timeline";
import { SvgStudiesTimeline, SvgXpTimeline } from "../svg";

interface TimelineProps {
  className?: string,
  onDateNodeHoverChanged?: (date: string, isHovered: boolean) => void,
  onDateNodeClick?: (date: string) => void,
  timelineTag: string,
  settings: TimelineSettings,
}

interface SvgTimelineProps extends React.SVGProps<SVGSVGElement> {
  currentNodeRef: any,
  onDateNodeHoverChanged: (date: string, isHovered: boolean) => void,
  onDateNodeClick: (date: string) => void,
}

const Timeline = forwardRef((
  { onDateNodeClick, onDateNodeHoverChanged, timelineTag, settings, ...rest }: TimelineProps,
  ref) => {
  const [curDate, setCurDate] = useState<string>(settings.dates[0]);
  const [currentGsapTl, setCurGsapTl] = useState<GSAPTimeline>(null);

  const currentNode = useRef(null);

  useImperativeHandle(ref, () => ({
    currentNode,
  }));

  useEffect(() => {
    tlInit(currentNode.current, settings);
  }, []);

  /**
   * Click handle on a date node
   *
   * @param date
   */
  const handleDateNodeClick = useCallback((date: string) => {
    // Don't process if clicked on current date
    if (curDate !== date) {
      if (currentGsapTl)
        currentGsapTl.kill();

      const newGsapTl = tlToDateNodeFullTl(currentNode.current, date, settings);
      setCurGsapTl(newGsapTl);
      newGsapTl.play();

      setCurDate(date);
    }

    // Propagate to parent
    if (onDateNodeClick)
      onDateNodeClick(date);

  }, [currentGsapTl, curDate]);

  const handleDateNodeHoverChanged = useCallback((date: string, isHovered: boolean) => {
    if (isHovered && curDate === date)
      return;

    tlOnDateNodeHoverChanged(date, isHovered, settings);

    // Propagate to parent
    if (onDateNodeHoverChanged)
      onDateNodeHoverChanged(date, isHovered);
  }, [curDate]);


  const tlComponents = {
    experience: SvgXpTimeline,
    studies: SvgStudiesTimeline,
  };

  const TlTagName: React.MemoExoticComponent<(props: SvgTimelineProps) => JSX.Element> = tlComponents[timelineTag];

  return (
    <TlTagName
      currentNodeRef={currentNode}
      onDateNodeClick={handleDateNodeClick}
      onDateNodeHoverChanged={handleDateNodeHoverChanged}
      {...rest}
    />
  );
});

export default Timeline;