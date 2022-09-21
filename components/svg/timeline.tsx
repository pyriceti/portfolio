import React, { useEffect }              from "react";
import { SvgTimelineProps }              from "./index";
import TimelineNode                      from "./timeline-node";
import { a, useSpring, easings, config } from "@react-spring/web";

const Timeline = React.memo((
  {
    currentNodeRef,
    onDateNodeClick,
    onDateNodeHoverChanged,
    curDate,
    styleClasses,
    nodeInfos,
    data,
    ...rest
  }: SvgTimelineProps) => {

  const targetYByDate: (date: string) => number = (date: string) => {
    const stepY = data.maxNodeYPos / (data.dates.length - 1);
    return stepY * data.dates.indexOf(date);
  };

  const [scale, scaleApi] = useSpring({ from: { s: 0 }, s: 1 }, [curDate]);

  const curNodeRotateAndTranslate = useSpring({
    to: async (next) => {
      await next({
        rotate: 90,
        config: {
          duration: 200,
          easing: easings.easeInOutQuart,
        },
      });
      await next({
        rotate: 0,
        y: targetYByDate(curDate),
        scale: 1.05,
        config: config.stiff,
      });
    },
    from: {
      rotate: 0,
      transformOrigin: "9.165px 15.875px",
      scale: 1.05,
    },
  });

  const [lineFill, lineFillApi] = useSpring({
      from: { lf: 0 },
      lf: 1,
    },
    [curDate]);

  const lineFillInterpolator = lineFill.lf.to({
    range: [0, 0.5, 0.75, 1],
    output: ["#441517", "#610b06", "#610b06", "#441517"],
  });

  useEffect(() => {
    scaleApi.start({ from: { s: 0 }, s: 1 });
    lineFillApi.start({ from: { lf: 0 }, lf: 1 });
  }, [curDate]);

  return (
    <svg
      width={156}
      height={720}
      viewBox="0 0 41.275 190.5"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      style={{ overflow: "visible" }}
    >
      <a.path
        className={styleClasses.line}
        d="M12.22 188.731L9.166 190.5l-3.055-1.769V1.77L9.165 0l3.056 1.769z"
        fill={lineFillInterpolator.to(lf => lf)}
      />
      {nodeInfos.map((nodeInfo) =>
        <TimelineNode
          key={nodeInfo.date}
          curDate={curDate}
          nodeInfo={nodeInfo}
          onClick={() => onDateNodeClick(nodeInfo.date)}
          styleClasses={styleClasses}>
        </TimelineNode>,
      )}
      <a.path
        ref={currentNodeRef}
        className={styleClasses.currentNode}
        d="M15.276 15.875l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z"
        fill="#8e2621"
        style={{
          transform: scale.s
            .to({
              range: [0, 0.5, 0.75, 0.85, 1],
              output: [1.05, 1.5, 1.05, 0.5, 1.05],
            })
            .to((s) => `scale(${s})`),
          ...curNodeRotateAndTranslate,
        }}
      />
    </svg>
  );
});

export default Timeline;
