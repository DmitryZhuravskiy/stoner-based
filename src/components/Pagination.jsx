import React from 'react';
import based from './../base.json';
import { connect } from 'react-redux';
import { changePage, changeAlbumsPerPage } from "../redux";
import styled, { css } from 'styled-components';

const StyledFlex = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
`
const StyledPaginationContainer = styled(StyledFlex)`
justify-content: space-around;
`
const StyledPagination = styled.ul`
display: flex;
justify-content: flex-start;
padding: 20px;
`
const StyledPageItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
padding: 0;
margin: 0;
margin-right: 40px;
border-radius: 5px;
`
const StyledPageLink = styled.a`
display: block;
width: 40px;
height: 30px;
padding-top: 5px;
text-align: center;
text-decoration: none;
color: green;
&:hover {
  color: black;
  background: yellow;
  border-color: white;
}
  ${props => props.active && css`
    color: ${ props => props.color || "purple" };
    background: ${ props => props.background || "yellow" };
  `}
`
const StyledPaginationMessage = styled.p`
  color: orangered;
  margin-left: -30px;
`
const StyledAlbumsOnPage = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 20px;
  border: 2px black solid;
  text-align: center;
  text-decoration: none;
  color: green;
  background: white;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    color: black;
    background: yellow;
    border-color: white;
  }
  ${props => props.active && css`
    color: ${ props => props.color || "purple" };
    background: ${ props => props.background || "yellow" };
  `}
`
const StyledPaginationAlbumsOnPage = styled.p`
margin-left: 0px;
margin-right: 20px;
`

function Pagination({ activePage, albumsPerPage, firstAlbumId, lastAlbumId, changePage, changeAlbumsPerPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(based.length / albumsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledPaginationContainer>
      <StyledFlex>
        <StyledPagination>
          {pageNumbers.map(number => (
            !(number == activePage) && (
              <StyledPageItem  key={number}>
                <StyledPageLink onClick={() => changePage(number)} href='#'>{number}</StyledPageLink>
              </StyledPageItem>) ||
            (number == activePage) && (
              <StyledPageItem key={number}>
                <StyledPageLink onClick={() => changePage(number)} href='#' active>{number}</StyledPageLink>
              </StyledPageItem>)
          ))}
        </StyledPagination>
        <StyledPaginationMessage>Page Numbers</StyledPaginationMessage>
      </StyledFlex>
      <StyledPaginationAlbumsOnPage>
        <StyledPaginationAlbumsOnPage>Albums on Page</StyledPaginationAlbumsOnPage>
        {(albumsPerPage === 5) && (<>
          <StyledAlbumsOnPage active onClick={() => changeAlbumsPerPage(5)}>5</StyledAlbumsOnPage>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(10)}>10</StyledAlbumsOnPage>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(20)}>20</StyledAlbumsOnPage></>)
        }
        {(albumsPerPage === 10) && (<>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(5)}>5</StyledAlbumsOnPage>
          <StyledAlbumsOnPage active onClick={() => changeAlbumsPerPage(10)}>10</StyledAlbumsOnPage>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(20)}>20</StyledAlbumsOnPage></>)
        }
        {(albumsPerPage === 20) && (<>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(5)}>5</StyledAlbumsOnPage>
          <StyledAlbumsOnPage onClick={() => changeAlbumsPerPage(10)}>10</StyledAlbumsOnPage>
          <StyledAlbumsOnPage activePage onClick={() => changeAlbumsPerPage(20)}>20</StyledAlbumsOnPage></>)
        }
      </StyledPaginationAlbumsOnPage>
    </StyledPaginationContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    albumsPerPage: state.stoner.albumsPerPage,
    activePage: state.stoner.activePage,
    firstAlbumId: state.stoner.firstAlbumId,
    lastAlbumId: state.stoner.lastAlbumId,
  }
}

const mapDispatchToProps = (dispatch) => ({
  changePage: (activePage) => dispatch(changePage(activePage)),
  changeAlbumsPerPage: (albumsPerPage) => dispatch(changeAlbumsPerPage(albumsPerPage))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);