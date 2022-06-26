import React from "react";
import styled from "styled-components/macro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrontEndString from "./components/FrontEndString";
import FullName from "./components/FullName";
import AboutMe from "./components/AboutMe";

gsap.registerPlugin(ScrollTrigger);

const TextWrapper = styled.div`
  margin-top: 15vh;
  border: black solid 1px;
`;

// const Align = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// `;
function App() {
  return (
    <>
      <TextWrapper>
        <FullName />
        <FrontEndString />
      </TextWrapper>
      <AboutMe />
    </>
  );
}

export default App;
