import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/flexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper wrap={'wrap'}  justify={'space-around'}>
        <Skill iconId="js" title="JAVASCRIPT" />
        <Skill iconId="ts" title="TYPESCRIPT" />
        <Skill iconId="mongo" title="MONGO DB" />
        <Skill iconId="postgre" title="POSTGRESQL" />
        <Skill iconId="jest" title="JEST" />
        <Skill iconId="express" title="EXPRESS JS" />
        <Skill iconId="nest" title="NEST JS" />
        <Skill iconId="docker" title="DOCKER" />
        <Skill iconId="reactjs" title="REACT JS" />
        <Skill iconId="reactnat" title="REACT NACTIVE" />
        <Skill iconId="sc" title="STYLED COMPONENTS" />
        <Skill iconId="redux" title="REDUX" />
        <Skill iconId="js" title="javascript" />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
`;
