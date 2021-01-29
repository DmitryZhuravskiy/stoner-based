import initialState from './initialState';

export default function stonerReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DISCOGRAPHY":
            return {
                ...state,
                bandName: action.bandName
            }


        case "GET_ALBUM":

            return {
                ...state,
                bandName: action.bandName,
                album: action.title
            }

        default: return state;
    }
}
