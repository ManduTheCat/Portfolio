import React from "react";
import styled from "styled-components/macro";

const BlackBox = styled.div`
  background-color: #212529;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  padding-top: 50px;
  height: 50vh;
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
  border: 1px solid white;
  display: flex;
  max-width: 80%;
  flex-direction: column;
`;

function Projects() {
  return (
    <BlackBox>
      <Title>Project</Title>
      <ProjectWrapper>
        <div>project box</div>
        <div>project box</div>
      </ProjectWrapper>
    </BlackBox>
  );
}

export default Projects;
