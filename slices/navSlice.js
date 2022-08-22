import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nOfListings: 6,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNumberOfListings: (state, action) => {
      state.nOfListings = action.payload;
    },
  },
});

export const { setNumberOfListings } = navSlice.actions;

//Selectors
export const selectNOfListings = (state) => state.nav.nOfListings;

export default navSlice.reducer; //slouzi ke connectu k danemu storu dat
