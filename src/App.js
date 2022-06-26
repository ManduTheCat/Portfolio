import React from "react";
import styled from "styled-components/macro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FrontEndString from "./components/FrontEndString";
import FullName from "./components/FullName";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

const TextWrapper = styled.div`
  margin: 10vh 0;
`;

function App() {
  return (
    <>
      <TextWrapper>
        <FullName />
        <FrontEndString />
      </TextWrapper>
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
