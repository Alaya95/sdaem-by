import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {ICity, ICitiesState} from "../types/citiesTypes";
import {baseUrl} from "../../../../shared/API";

export const fetchCities = createAsyncThunk(
    'city/fetchAll',
    async () => {
        const response = await axios.get<ICity[]>(baseUrl + '/city');
        return response.data;
    }
);

const initialState: ICitiesState = {
    city: [],
    isLoading: false,
    error: null
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCities.fulfilled, (state, {payload}) => {
            state.city = payload
        })
    }
})