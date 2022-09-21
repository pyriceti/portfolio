import React         from "react";
import { config, animated, useSpring, useChain, useSpringRef } from "@react-spring/web";

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  isOn: boolean;
}

const MenuIcon = React.memo((props: MenuIconProps) => {
  const realProps = { ...props };
  delete realProps.isOn;
  const isOn = props.isOn;

  const topLineDRef = useSpringRef();
  const topLineD = useSpring({
    d: isOn ? "M 2.121,2.1213203 33.879,33.879" : "M 0,3 36,3",
    config: config.stiff,
    ref: topLineDRef,
  });
  const bottomLineDRef = useSpringRef();
  const bottomLineD = useSpring({
    d: isOn ? "M 2.1210107,33.879011 33.879,2.121" : "M 0,33 36,33",
    config: config.stiff,
    ref: bottomLineDRef,
  });
  const middleLineDRef = useSpringRef();
  const middleLineD = useSpring({
    d: isOn ? "m0 18h0" : "m0 18h22.5",
    config: config.stiff,
    ref: middleLineDRef,
  });

  useChain(
    isOn
      ? [middleLineDRef, topLineDRef, bottomLineDRef]
      : [topLineDRef, bottomLineDRef, middleLineDRef],
    isOn
      ? [0, 0.1, 0.1]
      : [0, 0, 0.1],
  );

  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...realProps}>
      <g fill="none" stroke="#fff" strokeWidth="3">
        <animated.path d={topLineD.d}/>
        <animated.path d={bottomLineD.d}/>
        <animated.path d={middleLineD.d}/>
      </g>
    </svg>
  );
});

export default MenuIcon;
