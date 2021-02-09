import {
  GET_ALBUM,
  GET_DISCOGRAPHY,
  CHANGE_PAGE,
  CHANGE_ALBUMS_PER_PAGE
} from "./stonerTypes";

const initialState = {
  bandName: "Void Droid",
  album: "Bipolar",
  albumsPerPage: 5,
  activePage: 1,
  firstAlbumId: 1,
  lastALbumId: 5
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
        lastALbumId: action.activePage*state.albumsPerPage
      };

    case CHANGE_ALBUMS_PER_PAGE:
      return {
        ...state,
        albumsPerPage: action.albumsPerPage,
        firstAlbumId: state.activePage*action.albumsPerPage - action.albumsPerPage,
        lastALbumId: state.activePage*action.albumsPerPage
      };

      case GET_DISCOGRAPHY:
        return {
          ...state,
          bandName: action.bandName,
          album: ''
        };

    default:
      return state;
  }
}

export default stonerReducer;