import React from "react";
import styled from "styled-components/macro";
import AboutMeinfo from "./AboutMeInfo";
import { faUser, faLocationDot, faSchool, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const WhiteBox = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  margin-top: 50px;
`;
const AboutBox = styled.div`
  box-sizing: border-box;
  padding: 4rem 10rem;
  margin: 0;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
`;
const AboutTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  padding: 1.5rem;
`;

function AboutMe() {
  return (
    <WhiteBox>
      <AboutTitle>About Me</AboutTitle>
      <AboutBox>
        <AboutMeinfo title={"이름"} content={"김명진"} icon={faUser} />
        <AboutMeinfo title={"주소"} content={"광주 광역시 광산구"} icon={faLocationDot} />
        <AboutMeinfo title={"졸업"} content={"전남대학교 2020"} icon={faSchool} />
        <AboutMeinfo title={"이메일"} content={"krocd@naver.com"} icon={faEnvelope} />
      </AboutBox>
    </WhiteBox>
  );
}
export default AboutMe;
