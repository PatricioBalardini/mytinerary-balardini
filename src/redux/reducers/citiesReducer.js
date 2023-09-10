import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const { fetchCitiesCarousel, fetchCities, fetchCity } = citiesActions;

const initialState = {
  carousel: [],
  cities: [],
  city: {},
};

const citiesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchCitiesCarousel.fulfilled, (state, action) => {
      let newState = {
        ...state,
        carousel: action.payload.carousel,
      };
      return newState;
    })
    .addCase(fetchCities.fulfilled, (state, action) => {
      let newState = {
        ...state,
        cities: action.payload.cities,
      };
      return newState;
    })
    .addCase(fetchCity.fulfilled, (state, action) => {
      let newState = {
        ...state,
        city: action.payload.city,
      };
      return newState;
    })
);

export default citiesReducer;
