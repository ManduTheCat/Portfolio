import React from "react";
import frontImg from "../asset/front.png";
import BackImg from "../asset/back.png";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  height: 100%;
  width: 35rem;
`;
const ImgBox = styled.img`
  object-fit: scale-down;
  width: 100%;
`;

const ImgWrapper = styled.div`
  box-sizing: border-box;
  margin-top: 1.5rem;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

function SkillsInfo(props) {
  const title = props.title;
  let src = "";
  if (title === "Front") {
    src = frontImg;
  } else if (title === "Back") {
    src = BackImg;
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImgWrapper>
        <ImgBox alt="stack" src={src} />
      </ImgWrapper>
    </Wrapper>
  );
}

export default SkillsInfo;
