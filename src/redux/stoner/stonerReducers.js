import {
  GET_ALBUM,
  GET_DISCOGRAPHY,
  CHANGE_PAGE,
  CHANGE_ALBUMS_PER_PAGE
} from "./stonerTypes";

import base from './../../base.json';

const initialState = {
  bandName: "Void Droid",
  album: "Bipolar",
  albumsPerPage: 20,
  activePage: 1,
  firstAlbumId: 1,
  lastALbumId: 5,
  based: base
};

const stonerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        bandName: action.bandName,
        album: action.album
      };

    case CHANGE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
        firstAlbumId: action.activePage*state.albumsPerPage - state.albumsPerPage,
        lastALbumId: action.activePage*state.albumsPerPage,
        based: base.sort((a, b) => (b.year - a.year)).slice(state.firstAlbumId, state.lastAlbumId)
      };

    case CHANGE_ALBUMS_PER_PAGE:
      return {
        ...state,
        albumsPerPage: action.albumsPerPage,
        firstAlbumId: state.activePage*action.albumsPerPage - action.albumsPerPage,
        lastALbumId: state.activePage*action.albumsPerPage,
        based: base.sort((a, b) => (b.year - a.year)).slice(state.firstAlbumId, state.lastAlbumId)
      };

      case GET_DISCOGRAPHY:
        return {
          ...state,
          bandName: action.bandName,
          album: '',
          based: base
        };

    default:
      return state;
  }
}

export default stonerReducer;