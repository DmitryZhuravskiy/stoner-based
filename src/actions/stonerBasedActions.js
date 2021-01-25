import {
  GET_ALBUM,
  GET_DISCOGRAPHY
} from "../stonerBasedTypes";

export const getAlbum = (bandName, title) => {
  return {
    type: GET_ALBUM,
    bandName,
    title
  };
};

export const getDiscography = (bandName) => {
  return {
    type: GET_DISCOGRAPHY,
    bandName
  };
};
