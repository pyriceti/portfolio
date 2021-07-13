import { ReactElement } from "react";

interface ProjectDataContent {
  title: string,
  isSubTitle?: boolean,
  content:
    {
      p?: ReactElement<any, any>,
      media?: {
        type: "image" | "video" | "audio" | "embedded_video",
        src: string
      }
    }[],
}

interface CreditEntry {
  name: string,
  surname: string,
  roles: string
}

export interface ProjectData {
  title: string,
  date: string,
  cat: string,
  techno?: string,
  roles?: string,
  content: ProjectDataContent[],
  credits?: CreditEntry[],
  creditsComplex?: {
    title: string,
    credits: CreditEntry[],
  }[],
  externalLinks: ReactElement<any, any>[],
  bgImg?: string,
  bgImgOverlay?: number,
}