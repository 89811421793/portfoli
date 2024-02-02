import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../../components/Button';
import { Container } from '../../components/Container';

export const Header: React.FC = () => {
    return(
        <StyledHeader>
          <a href="/">Home</a>
          <a href="#">Projects</a>
          <StyledButton>Contact</StyledButton>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
background-color: lightsalmon;
display: flex;
justify-content: space-between;
`
