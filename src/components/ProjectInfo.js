import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const ProjectInfoWrapper = styled.div`
  background: white;
  width: 80%;
  height: 50vh;
  border: solid black 1px;
  color: black;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0;
  &:nth-child(n + 2) {
    margin-top: 3.5rem;
  }
`;

const Imgbox = styled.img``;

function ProjectInfo(props) {
  let article = "";
  let secArticle = "";
  if (props.content) {
    article = props.content.article;
    secArticle = props.content.secArticle;
  }
  return (
    <>
      <ProjectInfoWrapper>
        <div>
          <div>
            <Imgbox art="projecImg" src={props.img} />
          </div>
          <div>
            <div>
              <ReactMarkdown children={article} />
            </div>
            <div>
              <ReactMarkdown children={secArticle} />
            </div>
          </div>
        </div>
      </ProjectInfoWrapper>
    </>
  );
}

export default ProjectInfo;
