import { configureStore } from "@reduxjs/toolkit";
import formSLice from "./forms";

const store = configureStore({
  reducer: {
    counter: formSLice,
    // Add more reducers here if needed
  },
});

export default store;
