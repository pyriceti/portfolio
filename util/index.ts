import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const jumpToSection = (href: string) => gsap.to(window, {
  duration: 1,
  scrollTo: `#${href}`,
  ease: "power2.inOut"
});

// noinspection SpellCheckingInspection
export const transparentGifPix: string = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";