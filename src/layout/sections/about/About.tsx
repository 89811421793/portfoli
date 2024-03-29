import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <Container>
      <SectionTitle>About me</SectionTitle>
      <AboutDescription>
        The long barrow was built on land previously inhabited in the Mesolithic
        period. It consisted of a sub-rectangular earthen tumulus, estimated to
        have been 15 metres (50 feet) in length, with a chamber built from
        sarsen megaliths on its eastern end. Both inhumed and cremated human
        remains were placed within this chamber during the Neolithic period,
        representing at least nine or ten individuals.
      </AboutDescription>
      </Container>
    </StyledAbout>
  );
};

const AboutDescription = styled.p`
color: maroon;
max-width: 865px;
`

const StyledAbout = styled.section`
min-height: 40vh;
`


