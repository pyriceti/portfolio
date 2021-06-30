import gsap from "gsap"

/** @constant
 * The default scale used for the current node (>1 to mask white bg behind nodes)
 *
 @type {number}
 @default 1.05
 */
const defaultScale = 1.05;

/** @constant
 * The active scale used for the current date text label
 *
 @type {number}
 @default 0.44568
 */
const activeDateLabelScale = 1;

/** @constant
 * The scale used for inactive date text labels
 *
 @type {number}
 @default .65
 */
const inactiveDateLabelRatio = .65;

/**
 * Settings for a timeline
 */
export interface TimelineSettings {
  /**
   * The prefix used for svg attributes, e.g. class
   */
  cssPrefix: string,
  /**
   * The root svg css selector
   */
  rootSvgSelector: string,
  maxNodeYPos: number,
  /**
   * Dates in the timeline in inverted order (top to bottom, recent to old, e.g. 2019, 2018, etc.)
   */
  dates: string[],
}

/**
 * Init states
 *
 * @param currNode
 * @param settings
 */
export const tlInit = (currNode: gsap.TweenTarget, { cssPrefix, rootSvgSelector: rootSvgSel, dates }: TimelineSettings) => {
  gsap.set(currNode, {
    transformOrigin: "center center",
    scale: defaultScale,
  });
  gsap.set(`${rootSvgSel} .${cssPrefix}underline`, {
    transformOrigin: "left center",
    scaleX: "0",
  });
  gsap.set(`${rootSvgSel} g.${cssPrefix}d${dates[0]} .${cssPrefix}underline`, {
    scaleX: "1",
  });
  gsap.set(`${rootSvgSel} g text.${cssPrefix}date-label`, {
    transformOrigin: "left center",
    scale: activeDateLabelScale * inactiveDateLabelRatio,
  });
  gsap.set(`${rootSvgSel} g.${cssPrefix}d${dates[0]} text.${cssPrefix}date-label`, {
    scale: activeDateLabelScale,
  });
  gsap.set(`${rootSvgSel} g path.${cssPrefix}outer-node`, {
    transformOrigin: "center center",
  });
};

/**
 * Rotate start
 *
 * @param elem
 */
const tlStartingRotation = (elem: gsap.TweenTarget) =>
  gsap.to(elem, {
    duration: .300,
    rotate: 210,
    ease: "power1.easeInOut",
  });

/**
 * Grow to 1.5 then scale down to 0.5
 *
 * @param elem
 */
const tlStartingBump = (elem: gsap.TweenTarget) => {
  return gsap.timeline()
    .to(elem, {
      scale: 1.5,
      duration: .300,
      ease: "power1.easeOut",
    })
    .to(elem, {
      scale: .5,
      duration: .150,
      ease: "power1.easeIn",
    });
};


/**
 * Move to a date node
 *
 * @param elem
 * @param date
 * @param settings
 */
const tlMoveToDateNode = (elem: gsap.TweenTarget, date: string, { dates, maxNodeYPos }: TimelineSettings) => {
  const stepY = maxNodeYPos / (dates.length - 1);
  const target = stepY * dates.indexOf(date);
  return gsap.to(elem, {
    duration: .400,
    y: target,
    ease: "power1.easeInOut",
  });
};


/**
 * Rotate end
 *
 * @param elem
 */
const tlEndingRotation = (elem: gsap.TweenTarget) => gsap.to(elem, {
  duration: .300,
  rotate: 0,
  ease: "power1.easeInOut",
});


/**
 * Grow to 1.3 then scale down to default scale
 *
 * @param elem
 */
const tlEndingBump = (elem: gsap.TweenTarget) => {
  return gsap.timeline()
    .to(elem, {
      scale: 1.3,
      duration: .200,
      ease: "power1.easeIn",
    })
    .to(elem, {
      scale: defaultScale,
      duration: .300,
      ease: "power1.easeOut",
    });
};

/**
 * Move to a date node
 *
 * @param currNode
 * @param date
 * @param settings
 */
export const tlToDateNodeFullTl = (currNode: gsap.TweenTarget, date: string, settings: TimelineSettings) => {
  return gsap.timeline({ paused: true })
    .add(tlStartingRotation(currNode), "0")
    .addLabel("postStartingRotation")
    .add(tlStartingBump(currNode), "0")
    .add(tlMoveToDateNode(currNode, date, settings), "postStartingRotation")
    .add(tlHandleDateNodes(date, settings), "postStartingRotation")
    .addLabel("endingRotation", ".500")
    .add(tlEndingRotation(currNode), "endingRotation")
    .add(tlEndingBump(currNode), "endingRotation")
    .add(tlLineColorAccentInOut(settings), "0")
    .add(tlDestDateNodePinchAccent(date, settings), "0")
    ;
}

/**
 * Swap line color to accent then revert
 *
 * @param settings
 */
const tlLineColorAccentInOut = ({ rootSvgSelector: rootSvgSel, cssPrefix }: TimelineSettings) => {
  const line = `${rootSvgSel} .${cssPrefix}line`;
  return gsap.timeline()
    .to(line, {
      fill: "#610b06",
      duration: .200,
      ease: "power1.easeIn",
    })
    .to(line, {
      fill: "#441517",
      duration: .300,
      ease: "power1.easeOut",
    });
};

/**
 * Handle pinch and color accent of destination date node
 *
 * @param date
 * @param settings
 */
const tlDestDateNodePinchAccent = (date: string, {
  rootSvgSelector: rootSvgSel,
  cssPrefix
}: TimelineSettings) => {
  const destDateNode = `${rootSvgSel} g.${cssPrefix}d${date} path.${cssPrefix}outer-node`;

  return gsap.timeline()
    .to(destDateNode, {
      fill: "#610b06",
      scale: .9,
      duration: .100,
      ease: "power2.easeOut",
    })
    .to(destDateNode, {
      fill: "#441517",
      scale: 1,
      duration: .150,
      ease: "power1.easeIn",
    })
    ;
}

/**
 * Handle date labels and underlines
 *
 * @param date
 * @param settings
 */
const tlHandleDateNodes = (date: string, { rootSvgSelector: rootSvgSel, cssPrefix }: TimelineSettings) => {
  const selectedDateUnderline = `${rootSvgSel} g.${cssPrefix}d${date} .${cssPrefix}underline`;
  const otherDateUnderlines = `${rootSvgSel} g:not(.${cssPrefix}d${date}) .${cssPrefix}underline`;
  const activeDateLabel = `${rootSvgSel} g.${cssPrefix}d${date} text.${cssPrefix}date-label`;
  const otherDateLabels = `${rootSvgSel} g:not(.${cssPrefix}d${date}) > text.${cssPrefix}date-label`;

  return gsap.timeline()
    .to(otherDateUnderlines, {
      scaleX: 0,
      duration: .200,
      ease: "power1.easeOut",
    }, 0)
    .to(selectedDateUnderline, {
      scaleX: 1,
      duration: .200,
      ease: "power1.easeOut",
    })
    .to(activeDateLabel, {
      scale: activeDateLabelScale,
      duration: .300,
      ease: "power1.easeOut",
    }, 0)
    .to(otherDateLabels, {
      scale: activeDateLabelScale * inactiveDateLabelRatio,
      duration: .300,
    }, 0)
  ;
};

/**
 * Handle date node hover
 *
 * @param date
 * @param isHover
 * @param settings
 */
export const tlOnDateNodeHoverChanged = (date: string, isHover: boolean, {
  rootSvgSelector: rootSvgSel,
  cssPrefix
}: TimelineSettings) => {
  const dateLabel = `${rootSvgSel} g.${cssPrefix}d${date} text.${cssPrefix}date-label`;
  const dateOuterNode = `${rootSvgSel} g.${cssPrefix}d${date} path.${cssPrefix}outer-node`;

  const vars = {
    fill: isHover ? "#8e2621" : "#441517",
    duration: .150,
    ease: "power1.easeIn",
  };

  return gsap.timeline()
    .to(dateLabel, vars)
    .to(dateOuterNode, vars, 0)
    ;
}
