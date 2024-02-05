import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/flexWrapper";
import { Project } from "./project/Project";
import cardImg from "./../../../assets/images/proj-card.webp";

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper wrap={'wrap'} justify={'center'}>
        <Project
          title={"TITLE PROJECT"}
          text={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          src={cardImg}
        />
        <Project
          title={"I N S I G H T G R A M"}
          text={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          src={cardImg}
        />
        <Project
          title="TITLE PROJECT"
          text={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          src={cardImg}
        />

        <Project
          title={"I N S I G H T G R A M"}
          text={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          }
          src={cardImg}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
`;
