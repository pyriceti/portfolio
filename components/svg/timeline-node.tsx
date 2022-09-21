import React, { useEffect, useCallback, useState } from "react";
import { a, useSpring, config }                    from "@react-spring/web";
import { SvgTimelineStyleClasses }                 from "./index";

export interface TimelineNodeInfo {
  date: string,
  nodeY: string,
  underlineY: string,
  labelY: string,
}

interface TimelineNodeProps extends React.SVGProps<SVGSVGElement> {
  curDate: string,
  nodeInfo: TimelineNodeInfo,
  onClick: () => void,
  styleClasses: SvgTimelineStyleClasses,
}

const getOuterNodeD = (nodeY: string) => `M18.33 ${nodeY}l-4.582 7.937H4.583L0 ${nodeY}l4.583-7.938h9.165z`;
const getInnerNodeD = (nodeY: string) => `M15.276 ${nodeY}l-3.055 5.292H6.11l-3.056-5.292 3.055-5.292h6.11z`;
const getUnderlineD = (underlineY: string) => `M22.854 ${underlineY}h18.421v.794H22.854z`;

/** @constant
 * The active scale used for the current date text label
 *
 @type {number}
 @default 0.44568
 */
const activeDateLabelScale: number = 1;

/** @constant
 * The scale used for inactive date text labels
 *
 @type {number}
 @default .65
 */
const inactiveDateLabelRatio: number = .65;

const TimelineNode = React.memo((
  { curDate, nodeInfo, onClick, styleClasses }: TimelineNodeProps) => {

  const [hovered, setHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    if (curDate !== nodeInfo.date)
      setHovered(true);
  }, [curDate]);

  const onMouseLeave = useCallback(() => setHovered(false), []);

  const hoverFillStyle = useSpring({
    fill: hovered ? "#8e2621" : "#441517",
    config: config.stiff,
  });

  const [destNodeScale, destNodeScaleApi] = useSpring(() => ({ from: { dns: 0 }, dns: 1 }));

  const destNodeScaleInterpolator = destNodeScale.dns.to({
    range: [0, 0.5, 0.75, 1],
    output: [1, .9, .9, 1],
  });

  const destNodeTrOrigin = useSpring({
    transformOrigin: `9.165px ${nodeInfo.nodeY}px`,
  });

  const [nodeUnderline, nodeUnderlineApi] = useSpring(() => ({
    from: { scaleX: 0, transformOrigin: `22.854px ${nodeInfo.underlineY}px` },
  }));

  const [nodeLabel, nodeLabelApi] = useSpring(() => ({
    from: {
      translateY: `${nodeInfo.labelY}px`,
      scale: activeDateLabelScale * inactiveDateLabelRatio,
      transformOrigin: "0px 0px",
    },
  }));

  useEffect(() => {
    if (curDate !== nodeInfo.date) {
      nodeUnderlineApi.start({ scaleX: 0, config: config.default });
      nodeLabelApi.start({
        translateY: `${nodeInfo.labelY}px`,
        scale: activeDateLabelScale * inactiveDateLabelRatio,
        transformOrigin: "0px 6px",
      });
    } else {
      nodeUnderlineApi.start({ scaleX: 1, delay: 200 });
      nodeLabelApi.start({
        translateY: `${nodeInfo.labelY}px`,
        scale: activeDateLabelScale,
        transformOrigin: "0px 0px",
      });
    }
  }, [curDate]);

  const onClickHandler = () => {
    destNodeScaleApi.start({ from: { dns: 0 }, dns: 1, config: config.stiff });
    nodeUnderlineApi.start({ scaleX: 1, delay: 200, config: config.stiff });
    nodeLabelApi.start({
      translateY: `${nodeInfo.labelY}px`,
      scale: activeDateLabelScale,
      config: config.gentle,
    });

    onClick();
  };

  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClickHandler}
      className={`${styleClasses.dateNode} ${styleClasses.dateNodeSpecific}${nodeInfo.date}`}>
      <a.path
        className={styleClasses.outerNode}
        d={getOuterNodeD(nodeInfo.nodeY)}
        style={{
          transform: destNodeScaleInterpolator.to(dns => `scale(${dns})`),
          ...hoverFillStyle,
          ...destNodeTrOrigin,
        }}
      />
      <path
        d={getInnerNodeD(nodeInfo.nodeY)}
        fill="#fff"
      />
      <a.path
        className={styleClasses.underline}
        fill="#441517"
        d={getUnderlineD(nodeInfo.underlineY)}
        style={nodeUnderline}
      />
      <a.text
        className={styleClasses.dateLabel}
        x={22.49}
        y={10.054}
        fontFamily="Raleway"
        fontSize={8.467}
        strokeWidth={0.265}
        style={{
          lineHeight: 1.25,
          transformBox: "fill-box",
          ...nodeLabel,
        }}
        fill={hoverFillStyle.fill}
      >
        <tspan x={22.49} y={10.054} fontWeight={500}>
          {nodeInfo.date}
        </tspan>
      </a.text>
    </g>
  );
});

export default TimelineNode;
