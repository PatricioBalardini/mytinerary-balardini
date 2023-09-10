import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    cities: citiesReducer,
  },
});
