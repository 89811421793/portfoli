import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/flexWrapper";

export const Footer:React.FC = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'} align={'center'}>
      <ProfilesList>
        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"gmail"} />
            <ProfileTitle>GMAIL</ProfileTitle>
          </ProfileLink>
        </ProfileItem>

        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"linkedin"} />
            <ProfileTitle>LINKEDIN</ProfileTitle>
          </ProfileLink>
        </ProfileItem>

        <ProfileItem>
          <ProfileLink href="#">
            <Icon width={'22'} height={'21'} viewBox={'0 0 21 21'} iconId={"github"} />
            <ProfileTitle>GITHUB</ProfileTitle>
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
`;

const ProfilesList = styled.ul`
display: flex;
gap:10px;
`;

const ProfileItem = styled.li``;

const ProfileLink = styled.a``;

const ProfileTitle = styled.h3``;

const NavLink = styled.a`
margin-right: 10px;
`;

const FooterText = styled.span`
  display: block;
`;
