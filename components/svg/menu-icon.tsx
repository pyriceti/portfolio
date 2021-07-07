import React from "react";

const MenuIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <g fill="none" stroke="#fff" strokeWidth="3">
        <path d="M 0,3 36,3"/>
        <path d="M 0,33 36,33"/>
        <path d="m0 18h22.5"/>
      </g>
    </svg>
  );
});

export default MenuIcon;
