import React from "react";
import styled from "styled-components/macro";
import SkillsInfo from "./SkillsInfo";

const SkillsWrapper = styled.div`
  box-sizing: border-box;
  background-color: #ffc107;
  width: 100%;
  max-height: 90vh;
  padding-top: 50px;
  padding-bottom: 60px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: bolder;
  padding: 1.5rem;
  text-align: center;
  font-size: 40px;
`;
const FlexContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem;
`;

const SkillsBox = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  height: 25rem;
  flex-wrap: wrap;
`;

const SkillsBoxStack = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
  border-radius: 32px;
`;

function Skills() {
  return (
    <SkillsWrapper>
      <Title>Skills</Title>
      <FlexContent>
        <SkillsBox>
          <SkillsBoxStack>
            <SkillsInfo title={"Front"} />
          </SkillsBoxStack>
          <SkillsBoxStack>
            <SkillsInfo title={"devOps"} />
          </SkillsBoxStack>
          <SkillsBoxStack>
            <SkillsInfo title={"Back"} />
          </SkillsBoxStack>
        </SkillsBox>
      </FlexContent>
    </SkillsWrapper>
  );
}

export default Skills;
