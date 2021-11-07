import React from "react";
import based from './../base.json';
import { changePage, changeAlbumsPerPage } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.stoner.activePage);
  const albumsPerPage = useSelector((state) => state.stoner.albumsPerPage);

  const dispatchChangePage = (payload) => {
    dispatch(changePage(payload));
  };

  const dispatchAlbumsPerPage = (payload) => {
    dispatch(changeAlbumsPerPage(payload));
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(based.length / albumsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <div className="pagination__pages">
        <ul className="pagination">
          {pageNumbers.map(
            (number) =>
              (!(number === activePage) && (
                <li key={number} className="page-item">
                  <a
                    onClick={() => dispatchChangePage(number)}
                    href="#"
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              )) ||
              (number === activePage && (
                <li key={number} className="page-item">
                  <a
                    onClick={() => dispatchChangePage(number)}
                    href="#"
                    className="page-link page-link--active"
                  >
                    {number}
                  </a>
                </li>
              ))
          )}
        </ul>
        <p className="pagination-message">Page Numbers</p>
      </div>
      <div className="pagination__albums-on-page">
        <p className="pagination-albums-on-page">Albums on Page</p>
        {albumsPerPage === 5 && (
          <>
            <button
              className="albums-on-page albums-on-page--active"
              onClick={() => dispatchAlbumsPerPage(5)}
            >
              5
            </button>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(10)}
            >
              10
            </button>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(20)}
            >
              20
            </button>
          </>
        )}
        {albumsPerPage === 10 && (
          <>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(5)}
            >
              5
            </button>
            <button
              className="albums-on-page albums-on-page--active"
              onClick={() => dispatchAlbumsPerPage(10)}
            >
              10
            </button>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(20)}
            >
              20
            </button>
          </>
        )}
        {albumsPerPage === 20 && (
          <>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(5)}
            >
              5
            </button>
            <button
              className="albums-on-page"
              onClick={() => dispatchAlbumsPerPage(10)}
            >
              10
            </button>
            <button
              className="albums-on-page albums-on-page--active"
              onClick={() => dispatchAlbumsPerPage(20)}
            >
              20
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
