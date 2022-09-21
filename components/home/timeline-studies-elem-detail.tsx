import React                               from "react";
import { StudiesItem }                     from "./studies";
import { animated, useTransition, config } from "@react-spring/web";
import Image                               from "next/image";
import { transparentGifPix }               from "../../util";

interface TimelineStudiesElemDetailProps extends React.HTMLProps<any> {
  studiesItem: StudiesItem,
  curDate: string,
}

/** @constant
 * The minimum scaleX used for detail anim
 *
 @type {number}
 @default 0.85
 */
const studiesDetailMinScaleX = .85;

const TimelineStudiesElemDetail = ({ studiesItem, curDate }: TimelineStudiesElemDetailProps) => {

  const transitions = useTransition(curDate, {
    from: {
      opacity: 0,
      transform: "translate(-98px)",
      scaleX: studiesDetailMinScaleX,
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
    (styles) => <animated.div key={studiesItem.date} className={`d${studiesItem.date} studiesDetail`} style={styles}>
      <div className="illus-container float-none float-sm-start mb-1">
        <Image
          width={192}
          height={192}
          layout="intrinsic"
          quality={100}
          placeholder="blur"
          blurDataURL={transparentGifPix}
          className="illus"
          src={studiesItem.imgSrc}
          alt={studiesItem.imgAlt}
        />
      </div>
      <h3>{studiesItem.diploma}</h3>
      <a
        className="school d-block mb-2"
        href={studiesItem.url}
        target="_blank"
        rel="noopener"
      >
        {studiesItem.school} ({studiesItem.dateRange[0]}{studiesItem.dateRange.length === 2 && ` - ${studiesItem.dateRange[1]}`})
      </a>

      <p className="desc">{studiesItem.contents}</p>
    </animated.div>
  );
};

export default TimelineStudiesElemDetail;