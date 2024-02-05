import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/flexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
      <ProfilesList>
        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"gmail"} />
            <h3>GMAIL</h3>
          </ProfileLink>
        </ProfileItem>

        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"linkedin"} />
            <h3>LINKEDIN</h3>
          </ProfileLink>
        </ProfileItem>

        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"github"} />
            <h3>GITHUB</h3>
          </ProfileLink>
        </ProfileItem>
      </ProfilesList>
      <FlexWrapper>
      <NavLink href="#">Projects</NavLink>
      <NavLink href="#">Contact</NavLink>
      </FlexWrapper>
      <FooterText>WEB DEVELOPER 2021</FooterText>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
background-color: color(display-p3 1 1 0);

`;

const ProfilesList = styled.ul`
display: flex;
`;

const ProfileItem = styled.li``;

const ProfileLink = styled.a``;

const NavLink = styled.a`
margin-right: 10px;
`;

const FooterText = styled.span`
  display: block;
`;
