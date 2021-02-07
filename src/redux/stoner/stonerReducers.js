import {
  GET_ALBUM,
  GET_DISCOGRAPHY,
} from "./stonerTypes";

const initialState = {
  bandName: "Void Droid",
  album: "Bipolar",
};

const stonerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...state,
        bandName: action.bandName,
        album: action.album
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