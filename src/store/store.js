import { configureStore } from "@reduxjs/toolkit";
import activitieReducer from "../reducers/activitieReducer";
import athleteReducer from "../reducers/athleteReducer";

const store = configureStore({
  reducer: {
    activitieReducer,
    athleteReducer,
  },
});

export default store;
