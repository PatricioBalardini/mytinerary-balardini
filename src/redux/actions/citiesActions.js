import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const fetchCitiesCarousel = createAsyncThunk(
  "fetchCitiesCarousel",
  async () => {
    try {
      let data = await axios(`${apiUrl}/cities/carousel`);
      return {
        carousel: data.data.dataCarousel,
      };
    } catch (error) {
      console.log(error);
      return {
        carousel: [],
      };
    }
  }
);

const fetchCities = createAsyncThunk("fetchCities", async () => {
  try {
    let data = await axios(`${apiUrl}/cities`);
    return {
      cities: data.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      cities: [],
    };
  }
});

const fetchCity = createAsyncThunk("fetchCity", async (id) => {
  try {
    let data = await axios(`${apiUrl}/cities/${id}`);
    return {
      city: data.data.response,
    };
  } catch (error) {
    console.log(error);
    return {
      city: {},
    };
  }
});

const cityActions = { fetchCitiesCarousel, fetchCities, fetchCity };
export default cityActions;

// export const fetchCityDetails = createAsyncThunk("fetchCityDetails", async (id) => {
//   try {
//     let response = await axios(`${apiUrl}/cities/${id}`);
//     return response.data.city;
//   } catch (error) {
//     console.log(error);
//     throw new Error();
//   }
// });
