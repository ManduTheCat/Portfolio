import React from "react";
import styled from "styled-components/macro";
import AboutMeinfo from "./AboutMeInfo";
import { faUser, faLocationDot, faEnvelope, faBook } from "@fortawesome/free-solid-svg-icons";
const WhiteBox = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: 100%;
  margin-top: 50px;
`;
const AboutBox = styled.div`
  box-sizing: border-box;
  padding: 5rem 25rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const AboutTitle = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
  padding: 1.5rem;
`;

const SubTitle = styled(AboutTitle)`
  font-size: 35px;
`;

function AboutMe() {
  return (
    <WhiteBox>
      <AboutTitle>개발의 즐거움을 아는 개발자 김명진입니다</AboutTitle>
      <SubTitle>저는 개발을 하면 부딛치는 어려움을 즐기며 성장하는 개발자 입니다</SubTitle>
      <AboutBox>
        <AboutMeinfo title={"이름"} content={"김명진"} icon={faUser} />
        <AboutMeinfo title={"자격증"} content={"ADsP, 정보처리기사"} icon={faLocationDot} />
        <AboutMeinfo title={"gitHub"} icon={faBook} />
        <AboutMeinfo title={"이메일"} content={"krocd@naver.com"} icon={faEnvelope} />
      </AboutBox>
    </WhiteBox>
  );
}
export default AboutMe;
