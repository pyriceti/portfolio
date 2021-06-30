import * as React from "react";

function GoToIcon(props) {

  const realProps = { ...props };
  delete realProps.forwardedRef;

  return (
    <svg width={13.103} height={30} {...realProps} ref={props.forwardedRef} viewBox="0 0 3.467 7.938"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M3.467 3.969L1.175 0H0l2.291 3.969L0 7.938h1.175z" fill="#fff"/>
    </svg>
  );
}

export default GoToIcon;
