import React from "react";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

const ProjectInfoWrapper = styled.div`
  background: white;
  width: 80%;
  height: 50vh;
  color: black;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 0;
  &:nth-child(n + 2) {
    margin-top: 3.5rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Imgbox = styled.img`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  box-sizing: border-box;
  width: 30vh;
  height: 30vh;
`;

const ArticleWrapper = styled.div`
  box-sizing: border-box;
  flex-grow: 0.25;
  margin-left: 4rem;
`;

const MarkdownWrapper = styled.div``;

function ProjectInfo(props) {
  let article = "# 다음 프로젝트 자리";
  let secArticle = "## 다음 프로젝트 자리";
  if (props.content) {
    article = props.content.article;
    secArticle = props.content.secArticle;
  }
  return (
    <>
      <ProjectInfoWrapper>
        <FlexBox>
          <ImgWrapper>
            <a href="https://github.com/Elice-Team-20/Collectors">
              <Imgbox art="projecImg" src={props.img} />
            </a>
          </ImgWrapper>
          <ArticleWrapper>
            <MarkdownWrapper>
              <ReactMarkdown children={article} />
            </MarkdownWrapper>
            <MarkdownWrapper>
              <ReactMarkdown children={secArticle} />
            </MarkdownWrapper>
          </ArticleWrapper>
        </FlexBox>
      </ProjectInfoWrapper>
    </>
  );
}

export default ProjectInfo;
