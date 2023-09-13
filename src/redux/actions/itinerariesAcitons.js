import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../apiUrl";

const readItinerariesFromCity = createAsyncThunk(
    'readItinerariesFromCity',
    async()=> {
        try {
            let data = await axios(`${apiUrl}/itineraries/`)
            return {
                readItinerariesFromCity: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                readItinerariesFromCity: []
            }
        }
    }
)

const itineraryActions = { readItinerariesFromCity }
export default itineraryActions