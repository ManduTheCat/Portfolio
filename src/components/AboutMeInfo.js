import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Icon = styled.div`
  margin: 2rem;
  box-sizing: border-box;
`;

const InfoBox = styled.div`
  margin: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  box-sizing: border-box;
  margin-bottom: 5px;
`;
const Content = styled.div`
  box-sizing: border-box;
`;
function AboutMeinfo(props) {
  return (
    <InfoWrapper>
      <Icon>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </Icon>
      <InfoBox>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
      </InfoBox>
    </InfoWrapper>
  );
}

export default AboutMeinfo;
