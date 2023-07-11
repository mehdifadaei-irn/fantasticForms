import { configureStore } from "@reduxjs/toolkit";
import formSLice from "./forms";
import allInput from "./allInput";

const store = configureStore({
  reducer: {
    counter: formSLice,
    all: allInput,
    // Add more reducers here if needed
  },
});

export default store;
