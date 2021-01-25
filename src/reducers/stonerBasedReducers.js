import {
  GET_ALBUM,
  GET_DISCOGRAPHY
} from "../stonerBasedTypes";

const initialState = {
  bandName: '',
  album: ''
};

const stonerBasedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return { ...state, bandName: action.bandName,  album: action.title};

    case GET_DISCOGRAPHY:
      return { ...state, bandName: action.bandName,  album: ''};

    default:
      return state;
  }
}

export default stonerBasedReducer