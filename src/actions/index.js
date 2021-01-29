export const getDiscography = (bandName) => {
    return {
        type: "GET_DISCOGRAPHY",
        bandName: bandName

    }
}

export const getAlbum = (bandName, title) => {
    return {

        type: "GET_ALBUM",
        bandName: bandName,
        title: title
    }
}

