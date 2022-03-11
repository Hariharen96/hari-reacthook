import { configureStore } from "@reduxjs/toolkit";
import studentslice from "./studentslice";

const store = configureStore({
  reducer: {
    stud: studentslice,
  },
});

export default store;
