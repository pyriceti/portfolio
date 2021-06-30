import { ReactElement } from "react";

interface ProjectDataContent {
  title: string,
  content:
    {
      p?: ReactElement<any, any>,
      media?: {
        type: "image" | "video" | "audio",
        src: string
      }
    }[],
}

export interface ProjectData {
  title: string,
  date: string,
  cat: string,
  roles: string,
  content: ProjectDataContent[],
  credits: {
    name: string,
    surname: string,
    roles: string
  }[],
  externalLinks?: ReactElement<any, any>[],
}