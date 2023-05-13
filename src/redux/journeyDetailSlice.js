import { createSlice } from "@reduxjs/toolkit";

export const journeyDetailSlice = createSlice({
  name: "journeyDetail",
  initialState: {
    origin: "",
    destination: "",
    distance: 0,
    waypoints: [],
  },
  reducers: {
    setLocation: (state, action) => {
      state.origin = action.payload.origin;
      state.destination = action.payload.destination;
      state.waypoints = action.payload.waypoints;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
  },
});

export const { setLocation, setDistance } = journeyDetailSlice.actions;

export default journeyDetailSlice.reducer;
