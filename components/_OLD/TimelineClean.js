import * as React from "react";

function SvgTimelineClean(props) {

  const realProps = { ... props };
  delete realProps.currentNodeRef;
  delete realProps.lineRef;
  delete realProps.onDateNodeClick;

  return (
    <svg
      width={179.067}
      height={540.192}
      viewBox="0 0 47.378 142.926"
      xmlns="http://www.w3.org/2000/svg"
      {...realProps}
    >
      <g
        className="timeline-clean_svg__line"
        ref={props.lineRef}
        fill="#441517"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path
          d="M10.583 0l-3.3 1.903v139.12l3.3 1.903 3.3-1.904V1.903L10.584 0z" />
        <path
          ref={props.underline2016Ref}
          d="M47.23 128.233H26.457"
          fill="none"
          stroke="#441517"
          style={{
            mixBlendMode: "normal",
          }}
        />
        <g
          className="timeline-clean_svg__date-node d2016"
          onClick={() => props.onDateNodeClick("2016")}
          style={{
            mixBlendMode: "normal",
          }}
        >
          <text
            className="timeline-clean_svg__date-label"
            transform="translate(15.009 101.742) scale(.44568)"
            fill="#000"
            fontFamily="Raleway"
            fontSize={22.164}
          >
            <tspan x={24.734} y={54.407}>
              <tspan
                fontWeight={500}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "discretionary-ligatures",
                  fontVariantNumeric: "normal",
                  fontVariantPosition: "normal",
                }}
              >
                {" 2016 "}
              </tspan>
            </tspan>
          </text>
          <path d="M5.292 131.685L0 122.508l5.292-9.177h10.583l5.291 9.177-5.291 9.177z"/>
          <path
            d="M7.282 128.233l-3.3-5.725 3.3-5.725h6.602l3.3 5.725-3.3 5.725z"
            fill="#fff"
          />
        </g>
        <g
          className="timeline-clean_svg__date-node d2017"
          onClick={() => props.onDateNodeClick("2017")}
          style={{
            mixBlendMode: "normal",
          }}
        >
          <path
            ref={props.underline2017Ref}
            d="M47.23 93.703H26.457"
            fill="none"
            stroke="#441517"
            style={{
              mixBlendMode: "normal",
            }}
          />
          <text
            className="timeline-clean_svg__date-label"
            transform="translate(15.009 66.051) scale(.44568)"
            fill="#000"
            fontFamily="Raleway"
            fontSize={22.164}
          >
            <tspan x={24.734} y={54.407}>
              <tspan
                fontWeight={500}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "discretionary-ligatures",
                  fontVariantNumeric: "normal",
                  fontVariantPosition: "normal",
                }}
              >
                {" 2017 "}
              </tspan>
            </tspan>
          </text>
          <path d="M5.292 97.155L0 87.978 5.292 78.8h10.583l5.291 9.177-5.291 9.177z" />
          <path
            d="M7.282 93.703l-3.3-5.725 3.3-5.725h6.602l3.3 5.725-3.3 5.725z"
            fill="#fff"
          />
        </g>
        <g
          className="timeline-clean_svg__date-node d2018"
          onClick={() => props.onDateNodeClick("2018")}
          style={{
            mixBlendMode: "normal",
          }}
        >
          <path
            ref={props.underline2018Ref}
            d="M47.23 59.172H26.457"
            fill="none"
            stroke="#441517"
            style={{
              mixBlendMode: "normal",
            }}
          />
          <text
            className="timeline-clean_svg__date-label"
            transform="translate(15.009 32.657) scale(.44568)"
            fill="#000"
            fontFamily="Raleway"
            fontSize={22.164}
          >
            <tspan x={24.734} y={54.407}>
              <tspan
                fontWeight={500}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "discretionary-ligatures",
                  fontVariantNumeric: "normal",
                  fontVariantPosition: "normal",
                }}
              >
                {" 2018 "}
              </tspan>
            </tspan>
          </text>
          <path d="M5.292 62.625L0 53.448l5.292-9.178h10.583l5.291 9.178-5.291 9.177z" />
          <path
            d="M7.282 59.172l-3.3-5.724 3.3-5.725h6.602l3.3 5.725-3.3 5.724z"
            fill="#fff"
          />
        </g>
        <g
          className="timeline-clean_svg__date-node d2019"
          onClick={() => props.onDateNodeClick("2019")}
          style={{
            mixBlendMode: "normal",
          }}
        >
          <path
            ref={props.underline2019Ref}
            d="M47.23 24.643H26.457" fill="none" stroke="#441517" />
          <text
            className="timeline-clean_svg__date-label"
            transform="translate(15.009 -3.142) scale(.44568)"
            fill="#000"
            fontFamily="Raleway"
            fontSize={22.164}
          >
            <tspan x={24.734} y={54.407}>
              <tspan
                fontWeight={500}
                style={{
                  fontVariantCaps: "normal",
                  fontVariantEastAsian: "normal",
                  fontVariantLigatures: "discretionary-ligatures",
                  fontVariantNumeric: "normal",
                  fontVariantPosition: "normal",
                }}
              >
                {" 2019 "}
              </tspan>
            </tspan>
          </text>
          <path d="M5.292 28.095L0 18.918 5.292 9.74h10.583l5.291 9.178-5.291 9.177z" />
          <path
            d="M7.282 24.642l-3.3-5.724 3.3-5.725h6.602l3.3 5.725-3.3 5.724z"
            fill="#fff"
          />
        </g>
        <path
          ref={props.currentNodeRef}
          className="timeline-clean_svg__current-node"
          d="M7.282 24.643l-3.3-5.725 3.3-5.725h6.602l3.301 5.725-3.3 5.725z"
          fill="#8e2621"
        />
      </g>
    </svg>
  );
}

export default SvgTimelineClean;
