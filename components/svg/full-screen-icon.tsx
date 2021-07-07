import React from "react";

const FullScreenIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="40" height="40" viewBox="0 0 10.583 10.583" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" stroke="#000" strokeWidth=".547">
        <path
          d="M.006 10.304h2.646m-2.372.273V7.931M.193 10.39l4.304-4.303M10.577.28H7.931m2.373-.274v2.646M10.39.193L6.087 4.497"/>
      </g>
    </svg>
  );
});

export default FullScreenIcon;
