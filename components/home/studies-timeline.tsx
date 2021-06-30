export {}

// import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
// import { SvgStudiesTimeline }                                                     from "../svg";
// import { TimelineSettings, tlInit, tlOnDateNodeHoverChanged, tlToDateNodeFullTl } from "../../animations/timeline";
//
// interface StudiesTimelineProps {
//   className?: string,
//   onDateNodeHoverChanged?: (date: string, isHovered: boolean) => void,
//   onDateNodeClick?: (date: string) => void,
// }
//
// const StudiesTimeline = forwardRef((
//   { onDateNodeClick, onDateNodeHoverChanged, ...rest }: StudiesTimelineProps,
//   ref) => {
//   const tlSettings: TimelineSettings = {
//     rootSvgSelector: "svg.timeline.studies-timeline",
//     cssPrefix: "studies-timeline_svg__",
//     dates: ["2019", "2018", "2017", "2016", "2013"],
//     maxNodeYPos: 127,
//   }
//
//   const [curDate, setCurDate] = useState<string>(tlSettings.dates[0]);
//   const [currentGsapTl, setCurGsapTl] = useState<GSAPTimeline>(null);
//
//   const currentNode = useRef(null);
//
//   useImperativeHandle(ref, () => ({
//     currentNode,
//   }));
//
//   useEffect(() => {
//     tlInit(currentNode.current, tlSettings);
//   }, []);
//
//   /**
//    * Click handle on a date node
//    *
//    * @param date
//    */
//   const handleDateNodeClick = useCallback((date: string) => {
//     // Don't process if clicked on current date
//     if (curDate !== date) {
//       if (currentGsapTl)
//         currentGsapTl.kill();
//
//       const newGsapTl = tlToDateNodeFullTl(currentNode.current, date, tlSettings);
//       setCurGsapTl(newGsapTl);
//       newGsapTl.play();
//
//       setCurDate(date);
//     }
//
//     // Propagate to parent
//     if (onDateNodeClick)
//       onDateNodeClick(date);
//
//   }, [currentGsapTl, curDate]);
//
//   const handleDateNodeHoverChanged = useCallback((date: string, isHovered: boolean) => {
//     if (isHovered && curDate === date)
//       return;
//
//     tlOnDateNodeHoverChanged(date, isHovered, tlSettings);
//
//     // Propagate to parent
//     if (onDateNodeHoverChanged)
//       onDateNodeHoverChanged(date, isHovered);
//   }, [curDate]);
//
//   return (
//     <SvgStudiesTimeline
//       currentNodeRef={currentNode}
//       onDateNodeClick={handleDateNodeClick}
//       onDateNodeHoverChanged={handleDateNodeHoverChanged}
//       {...rest}
//     />
//   );
// });
//
// export default StudiesTimeline;