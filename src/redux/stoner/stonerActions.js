import {
  GET_ALBUM,
  GET_DISCOGRAPHY,
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