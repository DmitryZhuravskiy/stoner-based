import {
  GET_ALBUM,
  GET_DISCOGRAPHY,
  CHANGE_PAGE,
  CHANGE_ALBUMS_PER_PAGE
} from "./stonerTypes";

export const getDiscography = (bandName) => {
  return {
    type: GET_DISCOGRAPHY,
    bandName: bandName
  };
};

export const getAlbum = (bandName, album) => {
  return {
    type: GET_ALBUM,
    bandName: bandName,
    album: album
  };
};

export const changePage = (activePage) => {
  return {
    type: CHANGE_PAGE,
    activePage: activePage,
  };
};

export const changeAlbumsPerPage = (albumsPerPage) => {
  return {
    type: CHANGE_ALBUMS_PER_PAGE,
    albumsPerPage: albumsPerPage,
  };
};