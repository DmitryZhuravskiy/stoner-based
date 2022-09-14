import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type TrackProps = {
  id: string;
  trackName: string;
  duration: string;
};

export type ArtistProps = {
  name: string;
  role: string;
};

export type ReviewProps = {
  author: string;
  text: string;
};

interface Group {
  id: 0;
  title: "Bipolar";
  bandName: "Void Droid";
  image: "https://1.bp.blogspot.com/-9VexUcQ6W9A/XrCuIcJ8SGI/AAAAAAAADFU/PybIkuc6CNUiRjJinzqyHFQ-h1SAJHvrwCLcBGAsYHQ/s1600/void%2Bdroid%2B-%2Bbipolar.png";
  year: 2020;
  country: "Greece";
  tracklist: TrackProps[];
  artists: ArtistProps[];
  reviews: ReviewProps[];
}

interface StateSliseProps {
  bandName: string;
  album: string;
  albumsPerPage: number;
  activePage: number;
  lastAlbumId: number;
  firstAlbumId: number;
  pageNumbers: number[];
  based: Group[];
  status: string;
}

const initialState: StateSliseProps = {
  bandName: "Void Droid",
  album: "Bipolar",
  albumsPerPage: 20,
  activePage: 1,
  lastAlbumId: 19,
  firstAlbumId: 0,
  pageNumbers: [],
  status: "",
  based: [
    {
      id: 0,
      title: "Bipolar",
      bandName: "Void Droid",
      image:
        "https://1.bp.blogspot.com/-9VexUcQ6W9A/XrCuIcJ8SGI/AAAAAAAADFU/PybIkuc6CNUiRjJinzqyHFQ-h1SAJHvrwCLcBGAsYHQ/s1600/void%2Bdroid%2B-%2Bbipolar.png",
      year: 2020,
      country: "Greece",
      tracklist: [
        {
          id: "01",
          trackName: "Super Ego Villain",
          duration: "04:56",
        },
        {
          id: "02",
          trackName: "Zarathustra",
          duration: "05:59 ",
        },
        {
          id: "03",
          trackName: "Milkaholic",
          duration: "06:27 ",
        },
        {
          id: "04",
          trackName: "Somen Mask",
          duration: "06:06 ",
        },
        {
          id: "05",
          trackName: "The Mars March",
          duration: "03:47",
        },
        {
          id: "06",
          trackName: "The Venus Effect",
          duration: "06:19",
        },
        {
          id: "07",
          trackName: "Clockface",
          duration: "04:31",
        },
        {
          id: "08",
          trackName: "Bipolar",
          duration: "02:34",
        },
        {
          id: "09",
          trackName: "Puer Blue",
          duration: "09:06 ",
        },
      ],
      artists: [
        {
          name: "AK",
          role: "vocal, guitar",
        },
        {
          name: "Bill Herra",
          role: "guitar",
        },
        {
          name: "Aggelos Ulmo",
          role: "bass",
        },
        {
          name: "Haris",
          role: "drums",
        },
      ],
      reviews: [
        {
          author: "dave ross",
          text: "Great sonics great vocals sometimes harsh mostly clean. My initial feeling was Corey Taylor ditching Slipknot to join the Palm Desert scene ",
        },
        {
          author: "051R158",
          text: "Thanks for this Album. It had to grow on me. I Love it.eh Milkaholic seriously ? Is about drinking Milk !? i dont know if this is something to sing about. maybe you could explain it to me. ",
        },
      ],
    },
  ],
};

/*

function givePageCount(bas, perPage: number) {
  const arr = []
  for (let i = 1; i <= Math.ceil(bas.length / perPage); i++) {
    arr.push(i);
  }
  return arr;
}
*/

export const fetchData = createAsyncThunk("cakes/fetchData", async () => {
  const { data } = await axios.get(
    `https://631e3478cc652771a4934853.mockapi.io/base`
  );
  return data;
});

export const stonerSlice = createSlice({
  name: "stoner",
  initialState,
  reducers: {
    getDiscography(state, action) {
      state.bandName = action.payload;
    },
    getAlbum(state, action) {
      state.album = action.payload;
    },
    changePage(state, action) {
      state.activePage = action.payload;
      state.lastAlbumId = state.albumsPerPage * state.activePage;
      state.firstAlbumId = state.lastAlbumId - state.albumsPerPage;
    },
    changeAlbumsPerPage(state, action) {
      state.albumsPerPage = action.payload;
      state.activePage = 1;
      state.lastAlbumId = state.albumsPerPage * state.activePage;
      state.firstAlbumId = state.lastAlbumId - state.albumsPerPage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
      state.based = [];
      state.pageNumbers = [];
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.based = action.payload
        .sort((a: Group, b: Group) => b.year - a.year)
        .slice(state.firstAlbumId, state.lastAlbumId);
      state.status = "success";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.based = [];
      state.pageNumbers = [];
      state.status = "error";
    });
  },
});

export const { getDiscography, getAlbum, changePage, changeAlbumsPerPage } =
  stonerSlice.actions;
export default stonerSlice.reducer;
