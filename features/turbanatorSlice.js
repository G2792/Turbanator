import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turbanator: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    styles: null,
  },
};

export const turbanatorSlice = createSlice({
  name: "turbanator",
  initialState,
  reducers: {
    setTurbanator: (state, action) => {
      state.turbanator = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTurbanator } = turbanatorSlice.actions;

export const selectTurbanator = (state) => state.turbanator.turbanator;

export default turbanatorSlice.reducer;
