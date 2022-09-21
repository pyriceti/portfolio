import React                               from "react";
import { XpItem }                          from "./experience";
import { animated, useTransition, config } from "@react-spring/web";
import Image                               from "next/image";
import { transparentGifPix }               from "../../util";

interface TimelineXpElemDetailProps extends React.HTMLProps<any> {
  xpItem: XpItem,
  curDate: string,
}

/** @constant
 * The minimum scaleX used for detail anim
 *
 @type {number}
 @default 0.85
 */
const xpDetailMinScaleX = .85;

const TimelineXpElemDetail = ({ xpItem, curDate }: TimelineXpElemDetailProps) => {

  const transitions = useTransition(curDate, {
    from: {
      opacity: 0,
      transform: "translate(-98px)",
      scaleX: xpDetailMinScaleX,
      height: "0%",
      display: "none",
    },
    enter: {
      opacity: 1,
      transform: "translate(0px)",
      scaleX: 1,
      height: "100%",
      display: "block",
    },
    leave: {
      display: "none",
    },
    config: config.gentle,
  });

  return transitions(
    (styles) => <animated.div key={xpItem.date} className={`d${xpItem.date} xpDetail`} style={styles}>
      <div className="illus-container float-none float-sm-start mb-1">
        <Image
          width={192}
          height={192}
          layout="intrinsic"
          quality={100}
          className="illus"
          src={xpItem.imgSrc}
          alt={xpItem.imgAlt}
          placeholder="blur"
          blurDataURL={transparentGifPix}
        />
      </div>
      <h3>{xpItem.job}</h3>
      <a
        className="place d-block mb-2"
        href={xpItem.url}
        target="_blank"
        rel="noopener"
      >
        {xpItem.place} ({xpItem.dateRange[0]}{xpItem.dateRange.length === 2 && ` - ${xpItem.dateRange[1]}`})
      </a>

      <p className="desc">{xpItem.contents}</p>
    </animated.div>
  );
};

export default TimelineXpElemDetail;