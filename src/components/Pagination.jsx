import React from 'react';
import based from './../base.json';
import { connect } from 'react-redux';
import { changePage, changeAlbumsPerPage } from "../redux";

function Pagination({ activePage, albumsPerPage, firstAlbumId, lastAlbumId, changePage, changeAlbumsPerPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(based.length / albumsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <div className="pagination__pages">
        <ul className='pagination'>
          {pageNumbers.map(number => (
            !(number == activePage) && (
              <li key={number} className='page-item'>
                <a onClick={() => changePage(number)} href='#' className="page-link">{number}</a>
              </li>) ||
            (number == activePage) && (
              <li key={number} className='page-item'>
                <a onClick={() => changePage(number)} href='#' className="page-link page-link--active">{number}</a>
              </li>)
          ))}
        </ul>
        <p className="pagination-message">Page Numbers</p>
      </div>
      <div className="pagination__albums-on-page">
        <p className="pagination-albums-on-page">Albums on Page</p>
        {(albumsPerPage === 5) && (<>
          <button className="albums-on-page albums-on-page--active" onClick={() => changeAlbumsPerPage(5)}>5</button>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(10)}>10</button>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(20)}>20</button></>)
        }
        {(albumsPerPage === 10) && (<>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(5)}>5</button>
          <button className="albums-on-page albums-on-page--active" onClick={() => changeAlbumsPerPage(10)}>10</button>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(20)}>20</button></>)
        }
        {(albumsPerPage === 20) && (<>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(5)}>5</button>
          <button className="albums-on-page" onClick={() => changeAlbumsPerPage(10)}>10</button>
          <button className="albums-on-page albums-on-page--active" onClick={() => changeAlbumsPerPage(20)}>20</button></>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    albumsPerPage: state.stoner.albumsPerPage,
    activePage: state.stoner.activePage,
    albumsPerPage: state.stoner.albumsPerPage,
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