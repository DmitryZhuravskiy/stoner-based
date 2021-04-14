import React from 'react';
import { connect } from 'react-redux';
import { getAlbum } from "../redux";
import styled from 'styled-components';
import LinkComponent from './Link';

const StyledDiscography = styled.div`
width: 100%;
padding: 20px;
box-sizing: border-box;
background: pink;
`
const StyledDiscographyTitle = styled.h2`
width: 100 %;
padding: 20px;
margin: 0;
margin-bottom: 30px;
box-sizing: border-box;
font-size: 40px;
text-align: center;
text-transform: uppercase;
text-decoration: indigo;
color: purple;
`
const StyledDiscographyList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`
const StyledDiscographyItem = styled.li`
width: 400px;
box-sizing: border-box;
list-style-type: none;
`
const StyledDiscographyItemImage = styled.li`
display: block;
width: 300px;
height: 300px;
margin: 0 auto;
border: 10px white solid;
`
const StyledDiscographyItemText = styled.li`
display: block;
padding: 5px;
margin: 0;
text-align: center;
font-size: 20px;
font-weight: 500;
color: orangered;
`

function DiscographyContainer({ bandName, getAlbum, album, based }) {
    const base = based.filter(x => (x.bandName === bandName));
    return (
        <StyledDiscography>
            <StyledDiscographyTitle>Discography of {bandName}</StyledDiscographyTitle>
            <StyledDiscographyList>
                {base.sort((a, b) => (b.year-a.year)).map(album => (
                    <StyledDiscographyItem key={album.title}>
                        <StyledDiscographyItemImage src={album.image} alt={album.title}/>
                        <StyledDiscographyItemText>
                            <LinkComponent httpTo="/album" onClick={() => getAlbum(bandName, album.title)}>{album.title}</LinkComponent>
                        </StyledDiscographyItemText>
                        <StyledDiscographyItemText>{album.year}</StyledDiscographyItemText>
                    </StyledDiscographyItem>
                ))}
            </StyledDiscographyList>
        </StyledDiscography>
    )
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
        based: state.stoner.based
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscographyContainer);