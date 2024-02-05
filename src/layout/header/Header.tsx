import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper';

export const Header: React.FC = () => {
    return(
        <StyledHeader>
          <NavLink href="/">Home</NavLink>
          <FlexWrapper justify={'space-between'}>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact</NavLink>
          </FlexWrapper>
        </StyledHeader>
        
    );
};

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
padding: 28px;
`
const NavLink = styled.a`
margin-right: 15px;
`
