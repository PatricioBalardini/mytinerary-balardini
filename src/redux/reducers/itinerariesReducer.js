import { createReducer } from "@reduxjs/toolkit";
import itineraryActions from "../actions/itinerariesAcitons";
const { readItinerariesFromCity } = itineraryActions;

const initialState = {
  itinerariesFromCity: [],
};

const itineraryReducer = createReducer(initialState, (builder) =>
  builder.addCase(readItinerariesFromCity.fulfilled, (state, action) => {
    let newState = {
      ...state,
      itinerariesFromCity: action.payload.itinerariesFromCity,
    };
    return newState;
  })
);

export default itineraryReducer;
