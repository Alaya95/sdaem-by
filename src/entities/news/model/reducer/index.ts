import {baseUrl} from "../../../../shared/API";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {INews, INewsState} from "../types/newsTypes";

export const fetchNewsAll = createAsyncThunk(
    'news/fetchAll',
    async () => {
        const response = await axios.get<INews[]>(baseUrl + '/news');
        console.log( 'pay', response.data);
        return response.data;
    }
);

const initialState: INewsState = {
    news: [],
    isLoading: false,
    error: null
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchNewsAll.fulfilled.type]: (state, {payload}: PayloadAction<INews[]>) => {
            state.isLoading = false;
            state.error = null;
            state.news = payload;
            console.log( 'pay', payload);
        },
        [fetchNewsAll.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchNewsAll.rejected.type]: (state, {payload}: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = payload;
        }
    },
})