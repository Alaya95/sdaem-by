import {createSlice} from "@reduxjs/toolkit";
import {IcitiesState} from "./citiesTypes";


const initialState: IcitiesState = {
    isLoading: false,
    error: null,
    cities: []
};

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        getCities(state) {
            state.isLoading = true;
        },
        getCitiesSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.cities = action.payload
        },
        getCitiesError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.cities = []
        }
    }
});

export default citiesSlice.reducer;
