import { configureStore } from "@reduxjs/toolkit";
import journeyDetailReducer from "./journeyDetailSlice";

export default configureStore({
  reducer: {
    journeyDetail: journeyDetailReducer,
  },
});
