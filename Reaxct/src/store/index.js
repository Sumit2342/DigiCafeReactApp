import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features";

const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});

export default store;
