import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.src} alt="" />
      <ProjectTitle>{props.title}</ProjectTitle>
      <Link href={'#'}>JAVASCRIPT</Link>
      <Link href={'#'}>POSGRESQL</Link>
      <Link href={'#'}>REACT</Link>
      <Link href={'#'}>REDUX</Link>
      <Link href={'#'}>REACT NATIVE</Link>
      <Description>{props.text}</Description>
    </StyledProject>
  );
};

const StyledProject = styled.div`
background-color:${theme.colors.secondaryBg};
flex-basis: 40%;
margin: 20px;
`;

const Image = styled.img`
object-fit: cover;
width: 100%;
heght: 388px;
`;

const ProjectTitle = styled.h3``;

const Description = styled.p``;

const Link = styled.a``;
