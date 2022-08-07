import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PrayerTimes: null,
};

export const prayerSlice = createSlice({
  name: "prayer",
  initialState,
  reducers: {},
});

export const {} = prayerSlice.actions;

export default prayerSlice.reducer;
