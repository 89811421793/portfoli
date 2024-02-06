import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/flexWrapper';
import { Container } from '../../components/Container';

export const Header: React.FC = () => {
    return(
        <StyledHeader>
          <Container>
          <FlexWrapper justify={'space-between'}>
          <NavLink href="/">Home</NavLink>
          <NavLinkWrap>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Contact</NavLink>
          </NavLinkWrap>
          </FlexWrapper>
          </Container>
        </StyledHeader>
        
    );
};

const StyledHeader = styled.header`
padding: 28px 0;
position: fixed;
top:0;
left:0;
right:0;
z-index: 9999;
`

const NavLink = styled.a`
margin-right: 15px;
`

const NavLinkWrap=styled.div`

`