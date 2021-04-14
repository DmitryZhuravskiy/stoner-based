import { connect } from 'react-redux';
import { getAlbum, getDiscography } from "../redux";
import React from 'react';
import Pagination from "./Pagination";
import LinkComponent from "./Link";
import styled from 'styled-components';

const StyledNewest = styled.div`
background: yellowgreen;
`
const StyledNewestTitle = styled.h3`
padding: 20px;
margin: 0 auto;
text-align: center;
font-size: 30px;
color: purple;
`
const StyledNewestList = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: space-between;
`
const StyledNewestListItem = styled.li`
flex-direction: space-around;
width: 250px;
padding: 10px;
margin: 20px;
border: 2px black solid;
box-sizing: border-box;
background: white;
list-style-type: none;
`
const StyledNewestListItemImage = styled.img`
display: block;
margin: 0 auto;
margin-bottom: 10px;
border: 1px black solid;
`
const StyledNewestListItemText = styled.p`
width: 100%;
text-align: center;
`

class NewestReleaseContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albumsPerPage: this.props.albumsPerPage,
            activePage: this.props.activePage,
            based: this.props.based,
            lastAlbumId: this.albumsPerPage*this.activePage,
            firstAlbumId: this.lastAlbumId - this.albumsPerPage,
            baseSort: this.props.based.sort((a, b) => (b.year - a.year)).slice(this.firstAlbumId, this.lastAlbumId),
        };
        this.getDiscography = this.props.getDiscography;
        this.getAlbum = this.props.getAlbum;
    }

    componentDidUpdate(prevProps) {
        if (this.props.activePage !== prevProps.activePage || this.props.albumsPerPage !== prevProps.albumsPerPage ) {
            this.state.baseSort = this.state.based.sort((a, b) => (b.year - a.year)).slice(this.firstAlbumId, this.lastAlbumId);
        }
    }

    render() {
        this.state.baseSort = [...this.props.based.sort((a, b) => (b.year - a.year))].slice(this.firstAlbumId, this.lastAlbumId);
        console.log(this.baseSort);
        return (<StyledNewest>
            <StyledNewestTitle>Newest Stoner Records</StyledNewestTitle>
            <StyledNewestList> {this.state.baseSort.map(album => (<StyledNewestListItem key={album.title} >
                <StyledNewestListItemImage src={album.image} width="200" height="200" alt={album.title} />
                <StyledNewestListItemText>
                    <LinkComponent httpTo="/discography" onClick={() => this.getDiscography(album.bandName)}>{album.bandName}</LinkComponent>
                </StyledNewestListItemText>
                <StyledNewestListItemText>
                    <LinkComponent httpTo="/album" onClick={() => this.getAlbum(album.bandName, album.title)}>{album.title}</LinkComponent>
                </StyledNewestListItemText>
                <StyledNewestListItemText>{album.year}</StyledNewestListItemText>
            </StyledNewestListItem>))}</StyledNewestList>
            <Pagination />
        </StyledNewest>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bandName: state.stoner.bandName,
        album: state.stoner.album,
        albumsPerPage: state.stoner.albumsPerPage,
        activePage: state.stoner.activePage,
        based: state.stoner.based
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album)),
    getDiscography: (bandName) => dispatch(getDiscography(bandName))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewestReleaseContainer);