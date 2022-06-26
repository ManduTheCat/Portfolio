import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoWrapper = styled.div`
  display: flex;
  width: 50%;
  box-sizing: border-box;
  padding: 0;
  padding-left: 10%;
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
  flex-wrap: wrap;
`;
const Title = styled.div`
  box-sizing: border-box;
  margin-bottom: 5px;
  white-space: nowrap;
`;
const Content = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
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
