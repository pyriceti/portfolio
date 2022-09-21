import React from "react";

interface TimelineDetailProps extends React.HTMLProps<any> {
  curDate: string,
}

const TimelineDetail = ({ children }: TimelineDetailProps) => {

  return (
    <>{children}</>
  );
};

export default TimelineDetail;