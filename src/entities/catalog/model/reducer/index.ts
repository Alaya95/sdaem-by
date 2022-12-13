import {ICatalogState, ICatalog} from "../types/catalogTypes";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from "../../../../shared/API";

export const fetchCatalogAll = createAsyncThunk(
    'catalog/fetchAll',
    async () => {
        const response = await axios.get<ICatalog[]>(baseUrl + 'catalog');
        return response.data;
    }
)

const initialState: ICatalogState = {
    catalog: [],
    isLoading: false,
    error: null
}

export const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCatalogAll.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchCatalogAll.fulfilled.type]: (state, {payload}: PayloadAction<ICatalog[]>) => {
            state.isLoading = false;
            state.error = null;
            state.catalog = payload
        },
        [fetchCatalogAll.rejected.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = payload;
            state.catalog = [];
        }
    }
})