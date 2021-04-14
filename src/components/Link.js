import React from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

const StyledLink = styled(Link)`
text-decoration: none;
&:hover {
    text-decoration: none;
}
${props => props.newest && css`
    color: ${ props => props.color || "purple" };
    &:hover {
    color:  ${ props => props.color || "deepskyblue" };
    };
`}
${props => props.discography && css`
    color: ${ props => props.color || "orangered" };
    &:hover {
    color:  ${ props => props.color || "deepskyblue" };
    };
`}
`

const LinkComponent = ({children, httpTo}) => {
    return (
        <StyledLink to={httpTo}>{ children }</StyledLink>
    )
}

export default LinkComponent;
