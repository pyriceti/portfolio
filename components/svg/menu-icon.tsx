import React from "react";

const MenuIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <g fill="none" stroke="#fff" strokeWidth="3">
        <path d="M 0,9 48,9"/>
        <path d="M 0,39 48,39"/>
        <path d="m0 24h30"/>
      </g>
    </svg>
  );
});

export default MenuIcon;





