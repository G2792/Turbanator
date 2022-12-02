import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import turbanatorReducer from "./features/turbanatorSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    turbanator: turbanatorReducer,
  },
});
