import React from "react";
import styled from "styled-components";
import geekpic from "../../../assets/images/geek.svg";
import { FlexWrapper } from "../../../components/flexWrapper";

export const Main: React.FC = () => {
  return (
    <StyledMain>
        <FlexWrapper align='center' justify='space-around'>
      <div>
        <MainTitle>WEB DEVELOPER</MainTitle>
        <Name>John Doe</Name>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </p>
        <ContactLink href={'#'}>Contact Me</ContactLink>
      </div>
      <MainPic src={geekpic} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
`;

const MainPic = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;


const MainTitle = styled.h1`
color: moccasin;
`

const Name = styled.h2`
color: khaki;
`
const ContactLink = styled.a`

`