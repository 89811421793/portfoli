import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { FlexWrapper } from "../../../components/flexWrapper";

export const Contacts = () => {
    return(
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
           
            <StyledForm>
            <FlexWrapper direction={"column"}>
                <StyledField placeholder={"Your Name"}/>
                <StyledField placeholder={"Your Email"}/>
                <StyledField placeholder={"Message"} as={'textarea'}/>
            <StyledButton type={'submit'}>Submit</StyledButton>
            </FlexWrapper>
            </StyledForm>
           
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
min-height: 60vh;
background-color: midnightblue;
`

const StyledForm = styled.form`
max-width: 532px;
width: 100%;
margin: 0 auto;

textarea {
    resize: none;            
    height: 165px;
  }
`

const StyledField = styled.input`
margin-bottom: 20px;
`