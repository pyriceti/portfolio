import gsap from "gsap";

/** @constant
 * The minimum scaleX used for detail anim
 *
 @type {number}
 @default 0.85
 */
const eduDetailMinScaleX = .85;

/**
 * Settings for a timeline detail
 */
export interface TimelineDetailSettings {
  /**
   * The detail css selector
   */
  detailSelector: string,
  /**
   * Default date on init
   */
  defaultDate: string,
}

/**
 * Init states
 *
 * @param settings
 */
export const tlDetailInit = ({ detailSelector, defaultDate }: TimelineDetailSettings) => {
  gsap.set(detailSelector, {
    transformOrigin: "left center",
  });
  gsap.set(`${detailSelector}.d${defaultDate}`, {
    display: "block",
    height: "100%",
    scaleX: 1,
    opacity: 1,
    x: 0,
  });
};

/**
 * Open timeline detail
 *
 * @param date
 * @param settings
 */
export const tlDetailIn = (date: string, { detailSelector }: TimelineDetailSettings) => {
  const elem = `${detailSelector}.d${date}`;
  return gsap.timeline()
    .to(elem, { duration: 0, delay: .300, display: "block" })
    .fromTo(elem, {
      duration: .300,
      height: 0,
      scaleX: eduDetailMinScaleX,
      x: -32,
      ease: "power2.inOut",

    }, {
      scaleX: 1,
      opacity: 1,
      x: 0,
      height: "100%",
    });
};

/**
 * Close timeline detail
 *
 * @param date The date of the elem to be hidden
 * @param settings
 */
export const tlDetailOut = (date: string, { detailSelector }: TimelineDetailSettings) => {
  const elems = `${detailSelector}:not(.d${date})`;
  return gsap.timeline()
    .to(elems, {
      duration: .200,
      height: 0,
      opacity: 0,
      x: 32,
      ease: "power3.in",
    })
    .set(elems, { duration: 0, display: "none" });
};