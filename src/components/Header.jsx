import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LinkComponent from "./Link";

const StyledTitleMessage = styled.h1`
display: block;
width: 100%;
padding: 20px;
margin: 0;
background: yellow;
color: orangered;
text-align: center;
box-sizing: border-box;
font-size: 40px;
`
const StyledNavigation = styled.div`
width: 100%;
padding: 20px;
margin: 0;
box-sizing: border-box;
background: yellow;
`

function Header({ bandName, album }) {
    return (
        <div>
            <StyledTitleMessage>Stoner Base</StyledTitleMessage>
            <StyledNavigation>
                <ul>
                    <li><LinkComponent httpTo="/" >Main Page</LinkComponent></li>
                </ul>
            </StyledNavigation>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
    }
}

export default connect(
    mapStateToProps
)(Header);