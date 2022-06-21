import React, { useEffect, useRef, forwardRef } from "react";
import styled from "styled-components/macro";
import { gsap } from "gsap";

const TextBox = styled.svg`
  margin: 0 0;
  stroke: #fff;
  fill: #fff;
  width: 100%;
  height: inherit;
`;
const Text = styled.text`
  text-anchor: start;
  stroke: #fff;
  stroke-width: 0.5;
  font-size: 50px;
`;
const Tp = styled.tspan`
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  fill-opacity: 0;
`;

const FullName = forwardRef((props, ref) => {
  const tpRefs = useRef([]);
  const dx = 10;
  const tl = gsap.timeline();
  const name = "MyungJin Kim";
  const nameList = name.split("");
  const tpName = nameList.map((e, index) => (
    <Tp
      key={index}
      ref={(el) => {
        tpRefs.current[index] = el;
      }}
      dx={dx}>
      {e}
    </Tp>
  ));

  useEffect(() => {
    tl.to(tpRefs.current, 4, { strokeDashoffset: 0 }, "-=3.5");
    tl.to(tpRefs.current, 0.2, { fillOpacity: 1 }, "-=1.6");
  });
  return (
    <TextBox ref={ref}>
      <Text x="30vw" y="10vh" fill="#fff">
        {tpName}
      </Text>
    </TextBox>
  );
});

export default FullName;
