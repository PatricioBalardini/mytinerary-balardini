import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducer";
import itineraryReducer from "./reducers/itinerariesReducer";
import userReducer from "./reducers/usersReducer";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    itinetaties: itineraryReducer,
    users: userReducer,
  },
});
