import React from "react";
import styled from "styled-components/macro";
import ProjectInfo from "./ProjectInfo";
import { collectorArticle } from "./markDown/projectMarkdown";
import projectImg from "../asset/collector.png";

const BlackBox = styled.div`
  background-color: #212529;
  box-sizing: border-box;
  width: 100%;
  padding-top: 50px;
  max-height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;
const Title = styled.div`
  text-align: center;
  font-weight: bolder;
  padding: 1.5rem;
  text-align: center;
  font-size: 40px;
`;

const ProjectWrapper = styled.div`
  display: flex;
  min-width: 95%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem;
`;

function Projects() {
  return (
    <BlackBox>
      <Title>Project</Title>
      <ProjectWrapper>
        <ProjectInfo content={collectorArticle} img={projectImg} />
        <ProjectInfo />
      </ProjectWrapper>
    </BlackBox>
  );
}

export default Projects;
