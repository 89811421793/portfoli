import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper';

export const Header: React.FC = () => {
    return(
        <StyledHeader>
          <GeneralLink href="/">Home</GeneralLink>
          <FlexWrapper justify={'space-between'}>
          <GeneralLink href="#">Projects</GeneralLink>
          <GeneralLink href="#">Contact</GeneralLink>
          </FlexWrapper>
        </StyledHeader>
        
    );
};

const StyledHeader = styled.header`
background-color: lightsalmon;
display: flex;
justify-content: space-between;
padding: 28px;
`
const GeneralLink = styled.a`
margin-right: 15px;
`
