import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: block;
  width: 100%;
  min-height: 200px;
  background: yellow;
`
const StyledSocialLinks = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 20px;
margin: 0 auto;
`
const StyledSocialLink = styled.li`
width: 150px;
padding: 10px 0;
`
const StyledLink = styled.a`
text-decoration: none;
color: purple;
&:hover {
  text-decoration: none;
  color: blueviolet;
}
`
const StyledCopywright = styled.p`
display: block;
margin: 0 auto;
text - align: center;
color: orangered;
}
`

function Footer() {
    return (
        <StyledFooter>
            <StyledSocialLinks>
                <StyledSocialLink>
                    <StyledLink href="https://github.com/DmitryZhuravskiy">Me in GitHub</StyledLink>
                </StyledSocialLink>
                <StyledSocialLink>
                    <StyledLink href="https://bronnitsy.hh.ru/resume/944e847aff0568d8200039ed1f393265335644">Me in hh.ru</StyledLink>
                </StyledSocialLink>
                <StyledSocialLink>
                    <StyledLink href="https://www.linkedin.com/in/dmitry-zhuravskiy-5081681b8/" >Me in Linkedin</StyledLink>
                </StyledSocialLink>
            </StyledSocialLinks>
            <StyledCopywright>Made from Dmtiry Zhuravskiy in 2021</StyledCopywright>
        </StyledFooter>
    )
}

export default Footer;