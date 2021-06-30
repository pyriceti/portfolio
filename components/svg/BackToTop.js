import * as React from "react";

function BackToTop(props) {

  const realProps = { ...props };
  delete realProps.forwardedRef;

  return (
    <svg width={60} height={69.282} {...realProps} ref={props.forwardedRef} viewBox="0 0 15.875 18.331" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.608 13.594l-7.67 4.428-7.67-4.428V4.737L7.937.308l7.67 4.429z" fill="#fff" stroke="#441517"
            strokeWidth=".53438602"/>
      <path d="M7.938 6.874l-3.97 2.291v1.176l3.97-2.292 3.968 2.292V9.165z" fill="#441517"/>
    </svg>
  );
}

export default BackToTop;
